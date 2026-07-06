import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("container-nomert", className)} {...props} />;
}
