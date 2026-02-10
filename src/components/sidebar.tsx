import {
  Home,
  FileText,
  Users,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

type ItemType = "navigation" | "popup";

const sidebarItems = [
  { icon: Home, label: "Home", href: "#home", type: "navigation" as ItemType },
  { icon: HelpCircle, label: "Help", href: "#help", type: "popup" as ItemType },
  {
    icon: FileText,
    label: "Glossary",
    href: "#documents",
    type: "popup" as ItemType,
  },
  {
    icon: Users,
    label: "References",
    href: "#team",
    type: "popup" as ItemType,
  },
  {
    icon: ArrowLeft,
    label: "Previous Page",
    href: "#settings",
    type: "navigation" as ItemType,
  },
  {
    icon: ArrowRight,
    label: "Next Page",
    href: "#info",
    type: "navigation" as ItemType,
  },
];

export function Sidebar({ className = "" }: SidebarProps) {
  return (
    <nav
      className={`fixed right-4 bottom-4 flex flex-col gap-2 border border-black bg-white p-3 ${className}`}
      aria-label="Quick navigation sidebar"
    >
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isPopup = item.type === "popup";

        if (isPopup) {
          return (
            <Popover key={item.label}>
              <PopoverTrigger asChild>
                <Button
                  aria-label={item.label}
                  className="h-12 w-12 rounded-full border border-black bg-white p-0 hover:cursor-pointer hover:bg-gray-100"
                  title={item.label}
                >
                  <Icon className="text-gray-700" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                side="left"
                className="border border-black bg-white p-3"
              >
                <p>{item.label} content</p>
              </PopoverContent>
            </Popover>
          );
        }

        return (
          <Button
            key={item.label}
            className="h-12 w-12 rounded-full border border-black bg-white p-0 hover:bg-gray-100"
            asChild
          >
            <Link to={item.href} aria-label={item.label} title={item.label}>
              <Icon className="text-gray-700" aria-hidden="true" />
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
