export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  cover: string;
  status: "Published" | "Draft";
  body: string[];
  content?: string;
};

export const posts: Post[] = [
  {
    slug: "loyalty-that-earns-its-keep",
    title: "Loyalty That Earns Its Keep",
    excerpt: "A loyalty programme is a commercial instrument, not a giveaway. Here is what separates a programme that changes behaviour from one that quietly erodes margin.",
    category: "Loyalty",
    tags: ["Loyalty", "Programme Design", "Economics"],
    date: "2026-07-18",
    readingTime: "4 min read",
    cover: "/images/blog-1.jpg",
    status: "Published",
    body: [
      "Done well, loyalty changes how often customers buy, how much they spend, and how long they stay. Done badly, it is an expensive discount that trains your best customers to expect less.",
      "The proposition, the marketing that activates it, and the customer data beneath it must work as one connected system. A programme built on a broken customer view will fail in execution, however good the design.",
    ],
  },
  {
    slug: "data-before-design",
    title: "Why Data Comes Before Loyalty Design",
    excerpt: "A trustworthy customer view is the foundation for loyalty and CRM. Without it, even the best strategy fails quietly in execution.",
    category: "Data",
    tags: ["Customer Data", "CRM", "Analytics"],
    date: "2026-06-29",
    readingTime: "3 min read",
    cover: "/images/blog-2.jpg",
    status: "Published",
    body: [
      "Everything in loyalty and CRM rests on whether you can trust what your data tells you about customers. Get the foundation right and good strategy becomes possible.",
      "A single view of the customer, clean connected data, and analytics you can act on make it possible to understand lifetime value, churn, segmentation and cohorts with confidence.",
    ],
  },
  {
    slug: "the-case-for-an-audit",
    title: "Start With an Independent Audit",
    excerpt: "Before redesigning a programme or replacing a platform, learn exactly where your loyalty, CRM and data capability stands—and what to fix first.",
    category: "Audit",
    tags: ["Audit", "Benchmarking", "Roadmap"],
    date: "2026-06-11",
    readingTime: "3 min read",
    cover: "/images/blog-3.jpg",
    status: "Published",
    body: [
      "An audit is the lowest-risk way to begin: an objective, benchmarked read on your programme, marketing and data with a clear, prioritised plan.",
      "You receive a scored maturity assessment, a benchmarking view, prioritised findings and a recommended roadmap—enough to make a confident decision about where to invest.",
    ],
  },
];

export const categories = ["All", "Loyalty", "Data", "Audit"];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
