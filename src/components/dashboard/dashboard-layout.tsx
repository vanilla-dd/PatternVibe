"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { getOpenState } = sidebar;
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-dvh overflow-hidden bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900",
          !getOpenState() ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
}
