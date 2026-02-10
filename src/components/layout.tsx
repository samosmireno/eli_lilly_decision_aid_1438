import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  return (
    <main
      id="main-content"
      className={`mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 md:px-16 xl:px-0 2xl:max-w-360 ${className}`}
    >
      {children}
    </main>
  );
}
