import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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
    cover: blog1,
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
    cover: blog2,
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
    cover: blog3,
    status: "Published",
    body: [
      "An audit is the lowest-risk way to begin: an objective, benchmarked read on your programme, marketing and data with a clear, prioritised plan.",
      "You receive a scored maturity assessment, a benchmarking view, prioritised findings and a recommended roadmap—enough to make a confident decision about where to invest.",
    ],
  },
];

export const categories = ["All", "Loyalty", "Data", "Audit"];

export const services = [
  {
    slug: "loyalty-strategy", icon: "Briefcase", title: "Fikiri Connect — Loyalty Strategy", tagline: "Loyalty that changes behaviour without eroding margin",
    description: "Programme design, earn-and-burn mechanics, tiers, rewards and the economics that keep loyalty sustainable.", duration: "Audit or implementation engagement", price: "Audit from 300,000",
    points: ["Programme design & redesign", "Earn-and-burn mechanics", "Tiering, rewards & loyalty economics"],
  },
  {
    slug: "crm-engagement", icon: "Compass", title: "Fikiri Engage — CRM & Engagement", tagline: "Turn customer knowledge into action",
    description: "Lifecycle marketing, segmentation, personalisation and campaign orchestration across every channel.", duration: "Audit or implementation engagement", price: "Audit from 300,000",
    points: ["Lifecycle marketing", "Segmentation & personalisation", "Campaign orchestration & activation"],
  },
  {
    slug: "data-analytics", icon: "TrendingUp", title: "Fikiri Data — Data & Analytics", tagline: "The foundation everything else stands on",
    description: "A single customer view, clean connected data and analytics you can actually act on—from lifetime value to churn and cohort insight.", duration: "Audit or implementation engagement", price: "Audit from 300,000",
    points: ["Single customer view", "Data quality & structuring", "Analytics, segmentation & ROI"],
  },
];

export const testimonials = [
  { name: "Client testimonial", role: "Details to be supplied", initials: "FC", rating: 5, quote: "Client testimonial to be supplied." },
  { name: "Client testimonial", role: "Details to be supplied", initials: "FC", rating: 5, quote: "Client testimonial to be supplied." },
  { name: "Client testimonial", role: "Details to be supplied", initials: "FC", rating: 5, quote: "Client testimonial to be supplied." },
];

export const consultationTypes = [
  { id: "loyalty", name: "Loyalty Audit", duration: "30-minute consultation", price: "From 300,000", description: "Programme design, earn-and-burn mechanics, tiering, retention and loyalty economics." },
  { id: "crm", name: "CRM Audit", duration: "30-minute consultation", price: "From 300,000", description: "Lifecycle, segmentation, personalisation, channel orchestration and member activation." },
  { id: "data", name: "Data Audit", duration: "30-minute consultation", price: "From 300,000", description: "Single customer view, data quality, structuring and the analytics you rely on." },
  { id: "bundle", name: "Three-pillar audit bundle", duration: "30-minute consultation", price: "From 750,000", description: "A complete loyalty, CRM and data picture at a bundled rate." },
];

export const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:30"];

export const stats = [
  { value: "3", label: "Connected disciplines" },
  { value: "Data", label: "Foundation first" },
  { value: "Audit", label: "Independent diagnosis" },
  { value: "MEA", label: "Gulf, MEA & beyond" },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
