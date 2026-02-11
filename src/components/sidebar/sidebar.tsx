import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link, useLocation } from "react-router-dom";
import { pageOrder } from "./page-order";
import { sidebarItems } from "./sidebar-items";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = "" }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentIndex = pageOrder.indexOf(currentPath);

  // Determine previous and next pages based on current location
  const previousPage =
    currentIndex > 0 ? pageOrder[currentIndex - 1] : undefined;
  const nextPage =
    currentIndex < pageOrder.length - 1
      ? pageOrder[currentIndex + 1]
      : undefined;

  return (
    <nav
      className={`fixed right-4 bottom-4 flex flex-col gap-2 border border-black bg-white p-3 ${className}`}
      aria-label="Quick navigation sidebar"
    >
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isPopup = item.type === "popup";

        // Determine the href for navigation items
        let href = item.href;
        if (item.label === "Previous Page") {
          href = previousPage;
        } else if (item.label === "Next Page") {
          href = nextPage;
        }

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

        // If href is undefined, render a disabled button
        if (!href) {
          return (
            <Button
              key={item.label}
              className="h-12 w-12 cursor-not-allowed rounded-full border border-gray-300 bg-gray-50 p-0 opacity-50"
              disabled
              aria-label={`${item.label} (not available)`}
              aria-disabled="true"
              title={`${item.label} (not available)`}
            >
              <Icon className="text-gray-400" aria-hidden="true" />
            </Button>
          );
        }

        return (
          <Button
            key={item.label}
            className="h-12 w-12 rounded-full border border-black bg-white p-0 hover:bg-gray-100"
            asChild
          >
            <Link to={href} aria-label={item.label} title={item.label}>
              <Icon className="text-gray-700" aria-hidden="true" />
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
