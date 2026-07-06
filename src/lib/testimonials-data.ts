/**
 * SAMPLE testimonial copy — placeholder content to demonstrate the Reviews
 * layout. Replace with real client testimonials / Google Reviews before
 * launch. Ratings summary below is illustrative, not a live feed.
 */

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "S. Whitfield",
    location: "Chelsea",
    rating: 5,
    quote:
      "From the first message to the final walkthrough, everything was handled by one team. No middlemen, no chasing — just a properly finished kitchen refresh.",
    service: "Kitchen Refreshes",
  },
  {
    name: "R. Adeyemi",
    location: "Islington",
    rating: 5,
    quote:
      "We manage several rental properties and Nomert has become our go-to for turnaround refurbishments. Consistent standard, every time.",
    service: "Landlord Refurbishments",
  },
  {
    name: "M. Okafor",
    location: "Wandsworth",
    rating: 5,
    quote:
      "Booked a bathroom refresh expecting a week of disruption. It was tidy, quiet, and finished ahead of schedule.",
    service: "Bathroom Refreshes",
  },
  {
    name: "H. Patel",
    location: "Richmond",
    rating: 5,
    quote:
      "The garden had been neglected for years. What they delivered looked like a completely different property by the end of the week.",
    service: "Garden Improvements",
  },
  {
    name: "L. Bennett",
    location: "Southwark",
    rating: 4,
    quote:
      "Professional from start to finish. The end of tenancy repairs list was resolved quickly enough to protect our handover date.",
    service: "End of Tenancy Repairs",
  },
  {
    name: "D. Marchetti",
    location: "Camden",
    rating: 5,
    quote:
      "We use Nomert for planned maintenance across two commercial units. Reliable reporting and they turn up when they say they will.",
    service: "Planned Maintenance",
  },
];

export const reviewSummary = {
  average: 4.9,
  totalReviews: 87,
  breakdown: [
    { stars: 5, percentage: 88 },
    { stars: 4, percentage: 9 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ],
};
