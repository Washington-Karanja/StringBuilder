import { MapPin, Mail, Phone } from "lucide-react";

export type ContactDetail = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

export const details: ContactDetail[] = [
  { icon: MapPin, label: "Office", value: "Limuru Road I&M Building, 1st Parklands Ave:, 1 Park Avenue, Kenya" },
  { icon: Mail, label: "Email", value: "martinngoni94@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 742178476" },
];
