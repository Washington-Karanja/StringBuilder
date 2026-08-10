export const disciplines = ["Loyalty strategy", "CRM & engagement", "Customer data & analytics"];

export const industries = [
  "Retail & Shopping Centres",
  "Hospitality & Travel",
  "Banking & Financial Services",
  "Telecommunications",
  "E-commerce & Consumer Brands",
  "Healthcare & Pharmacy",
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  credentials: string[];
  linkedIn: string;
};

export const team: TeamMember[] = [
  {
    name: "Martin Ngoni",
    role: "Founder",
    image: "/images/martin-portrait.jpg",
    alt: "Martin Ngoni",
    bio: "Martin has spent his career building and running loyalty programmes for industry-leading brands, including Village Market and Circle Rewards—helping them turn everyday customers into lasting, loyal ones. He founded Fikiri Communication on the conviction that loyalty is engineered, not hoped for.",
    credentials: ["Loyalty programme strategy", "CRM & customer data"],
    linkedIn: "#",
  },
  {
    name: "Team member name",
    role: "Role to be confirmed",
    image: "/images/about-photo.jpg",
    alt: "Placeholder for a future Fikiri Communication team member",
    bio: "A second team profile will be added here with their background, specialist experience and the perspective they bring to the practice.",
    credentials: ["Professional photo pending", "LinkedIn profile pending"],
    linkedIn: "#",
  },
];

export const clientBrands = [
  { name: "Village Market", mark: "VM" },
  { name: "Circle Rewards", mark: "CR" },
];
