import { useTranslation } from "react-i18next";

import HomeIcon from "~/icons/home.svg?react";

export default function Index() {
  const { t } = useTranslation();
  return (
    <div id="index-page">
      <h1>{t("title")}</h1>
      <div className="p-2">
        <HomeIcon />
      </div>
    </div>
  );
}
