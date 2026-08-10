export type Testimonial = {
  name: string;
  initials: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Grace Mwende",
    initials: "GM",
    role: "Head of Loyalty, Retail Bank",
    quote: "Fikiri Communication helped us see our customer data clearly for the first time. The result was a loyalty programme our customers actually value and a measurable lift in retention.",
    rating: 5,
  },
  {
    name: "David Omondi",
    initials: "DO",
    role: "Chief Operating Officer, Hospitality Group",
    quote: "We had a programme, but it wasn't changing behaviour. The diagnosis, the redesign and the launch support were practical and honest. Results followed.",
    rating: 5,
  },
  {
    name: "Fatima Abdi",
    initials: "FA",
    role: "Marketing Director, Telco",
    quote: "The audit was worth every penny. We found gaps we did not know existed and got a clear plan for what to fix first. The team is straight talking and deeply experienced.",
    rating: 5,
  },
];
