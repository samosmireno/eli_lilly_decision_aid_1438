import {
  ArrowLeft,
  ArrowRight,
  FileText,
  HelpCircle,
  Home,
  Users,
} from "lucide-react";

export type ItemType = "navigation" | "popup";

export const sidebarItems = [
  { icon: Home, label: "Home", href: "/", type: "navigation" as ItemType },
  { icon: HelpCircle, label: "Help", href: "/help", type: "popup" as ItemType },
  {
    icon: FileText,
    label: "Glossary",
    type: "popup" as ItemType,
  },
  {
    icon: Users,
    label: "References",
    type: "popup" as ItemType,
  },
  {
    icon: ArrowLeft,
    label: "Previous Page",
    type: "navigation" as ItemType,
  },
  {
    icon: ArrowRight,
    label: "Next Page",
    type: "navigation" as ItemType,
  },
];
