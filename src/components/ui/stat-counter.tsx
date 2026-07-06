"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export function StatCounter({ value, suffix = "", decimals = 0, label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <div className="text-center sm:text-left">
      <span ref={ref} className="font-display text-4xl font-bold text-white sm:text-5xl">
        {display}
        <span className="text-gold">{suffix}</span>
      </span>
      <p className="mt-2 text-sm leading-snug text-white/55">{label}</p>
    </div>
  );
}
