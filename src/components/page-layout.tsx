import type { ReactNode } from "react";
import { Header } from "./header";
import { Layout } from "./layout";
import { Sidebar } from "./sidebar/sidebar";

interface PageLayoutProps {
  title: string;
  centered?: boolean;
  children: ReactNode;
}

export function PageLayout({
  title,
  centered = false,
  children,
}: PageLayoutProps) {
  return (
    <>
      <Header title={title} centered={centered} />
      <Layout>{children}</Layout>
      <Sidebar />
    </>
  );
}
