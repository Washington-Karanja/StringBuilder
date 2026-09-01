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
      image: "/images/finance.jpg",
  },
  {
    name: "Telecommunications",
    description:
      "Subscriber rewards, usage-based incentives and data-driven personalisation that reduce churn in one of the most competitive retention environments there is.",
    image: "/images/telecommunications.jpg",
  },
  {
    name: "E-commerce",
    description:
      "Subscription loyalty, referral programmes, membership clubs and gamification that turn one-time buyers into repeat customers and advocates.",
    benchmarks: ["Amazon Prime", "Sephora Beauty Insider"],
    image: "/images/e-commerce.jpg",
  },
  {
    name: "Healthcare & Pharmacy",
    description:
      "Trust and repeat relationships matter deeply in healthcare and pharmacy. Loyalty strategies in this sector should strengthen meaningful customer relationships while using data, engagement and relevant rewards responsibly.",
      image: "/images/Phamarcy.jpg",
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

export type ClientCaseStudyItem =
  | string
  | {
      title: string;
      description: string;
    };

export type ClientCaseStudy = {
  tagline: string;
  subTagline?: string;
  challenge: string;
  role: string;
  whatWeWorkedOn: ClientCaseStudyItem[];
  outcome: string;
  quote: string;
  quoteAuthor: string;
};

export const clientBrands: Array<{
  name: string;
  mark: string;
  caseStudy: ClientCaseStudy;
}> = [
  {
    name: "Village Market",
    mark: "VM",
    caseStudy: {
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
  },
  {
    name: "Circle Rewards",
    mark: "CR",
    caseStudy: {
      tagline: "Restructuring the value proposition around the customer",
      challenge:
        "Circle Rewards needed to strengthen its value proposition and create a clearer understanding of its members in order to drive more meaningful engagement and personalisation.",
      role:
        "Fikiri worked across the programme proposition, customer data and segmentation to create a stronger foundation for more relevant and impactful member engagement.",
      whatWeWorkedOn: [
        {
          title: "Value Proposition",
          description:
            "Reviewed and restructured the Circle Rewards value proposition to strengthen the customer benefit and clarify the reasons for joining and engaging.",
        },
        {
          title: "Data Quality",
          description:
            "Supported the cleaning and structuring of customer data to improve data reliability and create a stronger foundation for analysis and decision-making.",
        },
        {
          title: "Segmentation",
          description:
            "Reviewed the existing customer segmentation approach and identified opportunities to make segments more behaviourally meaningful and useful for personalised engagement.",
        },
        {
          title: "Data Connectivity",
          description:
            "Supported the connection and integration of customer data to enable a more refined customer insight agenda and improve the ability to translate data into actionable insight.",
        },
      ],
      outcome:
        "The work established a stronger connection between proposition, data, segmentation and engagement, creating a more robust foundation for personalised customer experiences and ongoing loyalty optimisation.",
      quote:
        "Fikiri helped us look at Circle Rewards as more than a loyalty programme. They challenged the proposition, strengthened our understanding of our customer data and helped us rethink how we could use segmentation and connected data to create more relevant experiences.",
      quoteAuthor: "Circle Rewards",
    },
  },
  {
    name: "Guardian Healthcare",
    mark: "GH",
    caseStudy: {
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
  },
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
