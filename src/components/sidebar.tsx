import {
  Home,
  FileText,
  Users,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: HelpCircle, label: "Help", href: "#help" },
  { icon: FileText, label: "Glossary", href: "#documents" },
  { icon: Users, label: "References", href: "#team" },
  { icon: ArrowLeft, label: "Previous Page", href: "#settings" },
  { icon: ArrowRight, label: "Next Page", href: "#info" },
];

export function Sidebar({ className = "" }: SidebarProps) {
  const handleNavigation = (label: string) => {
    console.log(`Navigating to ${label}`);
    // You can implement actual navigation logic here
  };

  return (
    <nav
      className={`fixed right-4 bottom-4 flex flex-col gap-2 border border-black bg-white p-3 ${className}`}
      aria-label="Quick navigation sidebar"
    >
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.label}
            onClick={() => handleNavigation(item.label)}
            aria-label={item.label}
            className="h-12 w-12 rounded-full border border-black bg-white p-0 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            title={item.label}
          >
            <Icon className="text-gray-700" aria-hidden="true" />
          </Button>
        );
      })}
    </nav>
  );
}
