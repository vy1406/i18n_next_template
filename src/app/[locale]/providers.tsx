"use client";

import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";

type LocaleType = "en" | "fr" | "es" | "ht";
function Providers({
  children,
  locale,
  messages,
  timeZone,
}: {
  children: React.ReactNode;
  locale: LocaleType;
  messages: Record<string, string>;
  timeZone: string;
}) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
    >
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

export default Providers;
