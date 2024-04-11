import { FunctionComponent, PropsWithChildren } from "react";

import { NavLink } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="p-4 bg-slate-100 h-auto">
      <ul>
        <NavItem to={`/`}>{t("home")}</NavItem>
        <NavItem to={`/programs`}>{t("program")}</NavItem>

        {/* スクロール用 */}
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
        <NavItem to={`/others`}>{t("other")}</NavItem>
      </ul>
    </nav>
  );
}

type NavLinkProps = {
  isActive: boolean;
  isPending: boolean;
};
type NavItemProps = {
  to: string;
};
const NavItem: FunctionComponent<PropsWithChildren<NavItemProps>> = ({
  to,
  children,
}) => {
  return (
    <li>
      <NavLink
        className={({ isActive }: NavLinkProps) =>
          isActive
            ? "flex w-full p-2 bg-slate-300 rounded-md"
            : "flex w-full p-2 hover:bg-slate-200 rounded-md"
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};
