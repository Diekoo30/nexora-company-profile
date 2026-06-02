// ============================================================
// Nexora Technology — TypeScript Interfaces
// ============================================================

import type { LucideIcon } from "lucide-react";

/** Company contact information */
export interface ContactInfo {
  address: string;
  phone: string;
  website: string;
}

/** Top-level company data */
export interface CompanyData {
  name: string;
  shortName: string;
  tagline: string;
  philosophy: string;
  vision: string;
  mission: string[];
  contact: ContactInfo;
}

/** A single service offering */
export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

/** "Why us" value proposition */
export interface ValueProp {
  title: string;
  desc: string;
}

/** A portfolio project */
export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  platform: string;
  period: string;
  tech: string[];
  desc: string;
  features: string[];
  gradient: string;
  icon: LucideIcon;
  iconColor: string;
  image?: string;
}

/** A development process step */
export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

/** A team member */
export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

/** Navigation link */
export interface NavLink {
  href: string;
  label: string;
}
