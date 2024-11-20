"use client";
import { usePathname } from "next/navigation";

export const useCurrentLocale = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const locale = pathParts[1];
  return locale;
};
