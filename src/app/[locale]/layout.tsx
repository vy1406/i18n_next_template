import { Metadata } from "next";
import "../globals.css";
import Providers from "./providers";

type LocaleType = "en" | "es";
type Props = {
  params: { locale: LocaleType };
};

const LOCALES: LocaleType[] = ["en", "es"];
export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}
async function getMessages(locale: LocaleType) {
  const messageModule = await import(`@/i18n/data/${locale}.json`);
  return messageModule.default;
}

export const generateMetadata = async ({
  params: { locale },
}: Props): Promise<Metadata> => {
  const data = await import(`@/i18n/data/metadata.json`);

  return {
    title: data[locale as LocaleType].title,
    description: data[locale as LocaleType].description,
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale: LocaleType = LOCALES.includes(params.locale as LocaleType)
    ? (params.locale as LocaleType)
    : "en";
  const messages = await getMessages(locale);
  const timeZone = "America/New_York";

  return (
    <html lang={locale}>
      <body>
        <Providers messages={messages} locale={locale} timeZone={timeZone}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
