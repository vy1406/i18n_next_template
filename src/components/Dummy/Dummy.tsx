"use client";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../localSwitcher";

const Dummy = () => {
  const t = useTranslations("Home");
  return (
    <div>
      <h1 >{t("title")}</h1>
     
      <p >{t("description")}</p>

    </div>
    );
};

export default Dummy;
