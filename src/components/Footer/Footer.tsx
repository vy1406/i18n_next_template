"use client";
import { useCurrentLocale } from "@/constants/useCurrentLocale";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../localSwitcher";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useCurrentLocale();

  return (
    <footer>
      <p>current locale: {locale}</p>
      <p>{t("copyWrite")}</p>
      <LocalSwitcher />
    </footer>
  );
};

export default Footer;
