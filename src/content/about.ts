export const disciplines = ["Loyalty", "Engagement", "Data Analytics"];

export type Industry = {
  name: string;
  description: string;
  benchmarks?: string[];
  image: string;
};

export const industries: Industry[] = [
  {
    name: "Retail & Shopping Centres",
    description:
      "From single-brand retail to multi-tenant malls and coalition models, we design loyalty that drives footfall, basket size and repeat visits — and gives tenants a reason to take part.",
    benchmarks: ["Tesco Clubcard", "Carrefour"],
    image: "/images/pexels-el-gringo-photo-116752370-11540362 (1).jpg",
  },
  {
    name: "Hospitality & Travel",
    description:
      "Hotel programmes, airline and frequent-flyer schemes, and tourism partnerships built around status, experiential rewards and genuine emotional loyalty.",
    benchmarks: ["Marriott Bonvoy", "Flying Blue", "Emirates Skywards"],
    image: "/images/pexels-clickerhappy-227690 (1).jpg",
  },
  {
    name: "Banking & Financial Services",
    description:
      "Card-linked rewards, cashback, co-branded partnerships and tiered structures that deepen relationships and reward the behaviour that matters to the business.",
    image: "/images/growtika-5hp2g8Aem08-unsplash.jpg",
  },
  {
    name: "Telecommunications",
    description:
      "Subscriber rewards, usage-based incentives and data-driven personalisation that reduce churn in one of the most competitive retention environments there is.",
    image: "/images/pexels-vishpix-14931695 (1).jpg",
  },
  {
    name: "E-commerce & Consumer Brands",
    description:
      "Subscription loyalty, referral programmes, membership clubs and gamification that turn one-time buyers into repeat customers and advocates.",
    benchmarks: ["Amazon Prime", "Sephora Beauty Insider"],
    image: "/images/pexels-rachel-claire-5490970 (2).jpg",
  },
  {
    name: "Healthcare & Pharmacy",
    description:
      "Trust and repeat relationships matter deeply in healthcare and pharmacy. Loyalty strategies in this sector should strengthen meaningful customer relationships while using data, engagement and relevant rewards responsibly.",
    image: "/images/heathcare.jpg",
  },
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
    bio: "Martin has spent his career building and running loyalty programmes for industry-leading brands, including Village Market and Circle Rewards — helping them turn everyday customers into lasting, loyal ones. He founded Fikiri Communication on a simple conviction: that loyalty is engineered, not hoped for, and that the brands who get it right treat their customers' data, their marketing and their rewards as one connected discipline. His focus is helping businesses build programmes that are simple, personalised and valuable — and that deliver measurable commercial results.",
    credentials: ["Loyalty programme strategy", "CRM & customer data"],
    linkedIn: "#",
  },
  {
    name: "Team member name",
    role: "Role to be confirmed",
    image: "/images/avatar-placeholder.svg",
    alt: "Placeholder avatar for a future Fikiri Communication team member",
    bio: "A second team profile will be added here with their background, specialist experience and the perspective they bring to the practice.",
    credentials: ["Professional photo pending", "LinkedIn profile pending"],
    linkedIn: "#",
  },
];

export const clientBrands = [
  { name: "Village Market", mark: "VM" },
  { name: "Circle Rewards", mark: "CR" },
];

export const beliefs = [
  "Loyalty must balance customer value and profitability.",
  "Data comes first.",
  "Impact should be quantified.",
  "Strategy and execution are different disciplines.",
];

export const principles = [
  {
    title: "Simple",
    description:
      "Can a customer understand it in a sentence, and use it without thinking twice?",
  },
  {
    title: "Personalised",
    description:
      "Does it recognise who each customer is, and respond to what they actually do?",
  },
  {
    title: "Valuable",
    description:
      "Does it give customers something they genuinely want, at a cost the business can sustain?",
  },
];
