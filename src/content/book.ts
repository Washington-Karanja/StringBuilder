export type ConsultationType = {
  id: string;
  name: string;
  duration: string;
  description: string;
};

export const consultationTypes: ConsultationType[] = [
  { id: "loyalty", name: "Loyalty programme audit", duration: "30-minute consultation", description: "An independent review of your programme proposition, partner economics and marketing activation." },
  { id: "crm", name: "CRM & engagement review", duration: "30-minute consultation", description: "A structured look at your customer journeys, messaging and marketing automation against best practice." },
  { id: "data", name: "Customer data diagnostic", duration: "30-minute consultation", description: "A rapid assessment of your customer data quality, single customer view readiness and analytics capability." },
  { id: "bundle", name: "Three-pillar audit bundle", duration: "30-minute consultation", description: "A complete loyalty, CRM and data picture at a bundled rate." },
];

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];
