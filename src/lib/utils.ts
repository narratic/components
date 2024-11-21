import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Target,
  User,
  FileText,
  Users,
  Zap,
  Award,
  Crosshair,
  DollarSign,
  CheckCircle,
  Calendar,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageName(languageCode: string): string {
  switch (languageCode) {
    case "en":
      return "English";
    case "es":
      return "Spanish";
    case "fr":
      return "French";
    case "de":
      return "German";
    default:
      return "Unknown";
  }
}

export function getMEDDPICCIcon(category: string) {
  switch (category) {
    case "metrics":
      return Target;
    case "economic_buyer":
      return User;
    case "decision_criteria":
      return FileText;
    case "decision_process":
      return Users;
    case "paper_process":
      return FileText;
    case "identification_pain":
      return Zap;
    case "champion":
      return Award;
    case "competition":
      return Crosshair;
    default:
      return null;
  }
}

export function getDealSuccessIcon(category: string) {
  switch (category) {
    case "clarity_business_need":
      return Target;
    case "financial_sensitivity":
      return DollarSign;
    case "proof_of_results":
      return CheckCircle;
    case "engagement_stakeholders":
      return Users;
    case "implementation_onboarding":
      return FileText;
    case "post_sale_engagement":
      return Zap;
    case "proactive_follow_up":
      return Calendar;
    default:
      return null;
  }
}
