export type CaseStudy = {
  slug: string;
  client: string;
  tagline: string;
  subTagline?: string;
  challenge: string;
  role: string;
  whatWeWorkedOn: string[];
  outcome: string;
  quote: string;
  quoteAuthor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "village-market",
    client: "Village Market",
    tagline: "From a legacy loyalty programme to a digital customer ecosystem",
    challenge:
      "Village Market wanted to transition its legacy loyalty programme into a more modern digital ecosystem that could provide a more seamless member experience and create a stronger foundation for customer engagement.",
    role:
      "Fikiri supported the transition by helping shape the move from the traditional loyalty model into a digital ecosystem, with a focus on the customer proposition, programme structure and the foundations required for a more connected loyalty experience.",
    whatWeWorkedOn: [
      "Digital loyalty programme transition",
      "Loyalty technology sourcing",
      "Loyalty proposition and programme structure",
      "Customer experience considerations",
      "Digital member engagement",
      "Foundations for a more connected customer ecosystem",
    ],
    outcome:
      "The transition created the foundation for a more digitally enabled loyalty experience, giving Village Market a platform from which to build stronger member engagement and more data-informed customer relationships.",
    quote:
      "Fikiri brought a practical understanding of how loyalty needs to evolve alongside the customer experience. Their approach helped us move beyond simply digitising the programme and think about the broader ecosystem we wanted to create.",
    quoteAuthor: "Village Market",
  },
  {
    slug: "circle-rewards",
    client: "Circle Rewards",
    tagline: "Restructuring the value proposition around the customer",
    challenge:
      "Circle Rewards needed to strengthen its value proposition and create a clearer understanding of its members in order to drive more meaningful engagement and personalisation.",
    role:
      "Fikiri worked across the programme proposition, customer data and segmentation to create a stronger foundation for more relevant and impactful member engagement.",
    whatWeWorkedOn: [
      "Value proposition review and restructuring",
      "Data quality improvement",
      "Segmentation review and refinement",
      "Data connectivity and insight integration",
    ],
    outcome:
      "The work established a stronger connection between proposition, data, segmentation and engagement, creating a more robust foundation for personalised customer experiences and ongoing loyalty optimisation.",
    quote:
      "Fikiri helped us look at Circle Rewards as more than a loyalty programme. They challenged the proposition, strengthened our understanding of our customer data and helped us rethink how we could use segmentation and connected data to create more relevant experiences.",
    quoteAuthor: "Circle Rewards",
  },
  {
    slug: "guardian-healthcare",
    client: "Guardian Healthcare",
    tagline: "Turning transactional data into a customer retention strategy",
    subTagline: "From transactional data to personalised customer engagement",
    challenge:
      "Guardian Healthcare had a growing customer database but limited visibility into customer behaviour beyond individual transactions. The business needed to better understand customer value, frequency and retention in order to build more relevant engagement strategies.",
    role:
      "Fikiri helped establish a customer intelligence framework that connected customer data, behavioural segmentation and engagement strategy.",
    whatWeWorkedOn: [
      "Customer data assessment and structuring",
      "Behavioural segmentation",
      "Customer value and frequency analysis",
      "Retention and reactivation opportunities",
      "Personalised CRM strategy",
      "Customer journey and lifecycle planning",
    ],
    outcome:
      "The work provided the business with a clearer view of customer behaviour and a structured approach to moving from broad customer communications towards more targeted, lifecycle-led engagement.",
    quote:
      "Fikiri helped us move beyond looking at transactions in isolation. Their approach gave us a much clearer understanding of our customers and how we could use that insight to create more relevant and purposeful engagement.",
    quoteAuthor: "Guardian Healthcare",
  },
];
