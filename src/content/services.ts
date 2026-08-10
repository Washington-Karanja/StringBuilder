import { Briefcase, Compass, TrendingUp } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "loyalty-strategy",
    title: "Fikiri Connect — Loyalty Strategy",
    tagline: "Loyalty that changes behaviour without eroding margin",
    description: "Programme design, earn-and-burn mechanics, tiers, rewards and the economics that keep loyalty sustainable.",
    duration: "Audit or implementation engagement",
    price: "Audit from 300,000",
    points: ["Programme design & redesign", "Earn-and-burn mechanics", "Tiering, rewards & loyalty economics"],
    icon: "Briefcase",
  },
  {
    slug: "crm-engagement",
    title: "Fikiri Engage — CRM & Engagement",
    tagline: "Turn customer knowledge into action",
    description: "Lifecycle marketing, segmentation, personalisation and campaign orchestration across every channel.",
    duration: "Audit or implementation engagement",
    price: "Audit from 300,000",
    points: ["Lifecycle marketing", "Segmentation & personalisation", "Campaign orchestration & activation"],
    icon: "Compass",
  },
  {
    slug: "data-analytics",
    title: "Fikiri Data — Data & Analytics",
    tagline: "The foundation everything else stands on",
    description: "A single customer view, clean connected data and analytics you can actually act on—from lifetime value to churn and cohort insight.",
    duration: "Audit or implementation engagement",
    price: "Audit from 300,000",
    points: ["Single customer view", "Data quality & structuring", "Analytics, segmentation & ROI"],
    icon: "TrendingUp",
  },
];

export const serviceIcons = { Briefcase, Compass, TrendingUp } as const;
