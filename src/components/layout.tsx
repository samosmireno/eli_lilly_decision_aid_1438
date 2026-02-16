import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div
      id="main-content"
      className={`mx-auto w-full max-w-7xl px-4 pt-4 sm:px-8 2xl:max-w-360 ${className}`}
    >
      {children}
    </div>
  );
}
