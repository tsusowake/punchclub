import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
} from "react";

import { NavLink } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

import { useNavigationContext } from "./NavigationContext";

import AccountButton from "~/components/account/AccountButton";
import ChevronsLeftIcon from "~/icons/chevrons_left.svg?react";
import ChevronsRightIcon from "~/icons/chevrons_right.svg?react";
import HomeIcon from "~/icons/home.svg?react";

export default function Navigation() {
  const { t } = useTranslation();
  const { isOpen, setIsOpen } = useNavigationContext();

  const handleChevronsLeftIconClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleChevronsRightIconClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <div
      className={`flex flex-col h-screen bg-slate-100 transition-all duration-200 border-r border-r-gray-light ${
        isOpen
          ? "w-[var(--gnav-expanded-width)]"
          : "w-[var(--gnav-collapsed-width)]"
      }`}
    >
      <div className="flex justify-end p-3 w-full select-none">
        {isOpen ? (
          <ChevronsLeftIcon
            id="close-nav"
            onClick={handleChevronsLeftIconClick}
          />
        ) : (
          <ChevronsRightIcon
            id="open-nav"
            onClick={handleChevronsRightIconClick}
          />
        )}
        <Tooltip anchorSelect="#close-nav" content={"固定を解除"} />
        <Tooltip anchorSelect="#open-nav" content={"ナビゲーションを固定"} />
      </div>

      <nav className="flex flex-1 p-2 overflow-y-scroll">
        <ul className="w-full">
          <NavItem to={`/`}>
            <HomeIcon className="shrink-0 inline-flex items-center justify-center" />
            <span className="truncate font-medium">{t("home")}</span>
          </NavItem>
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
      <div>
        <AccountButton />
      </div>
    </div>
  );
}

type NavItemProps = {
  to: string;
};
const NavItem: FunctionComponent<PropsWithChildren<NavItemProps>> = ({
  to,
  children,
}) => {
  const navLinkClass = (isActive: boolean): string => {
    return `flex items-center gap-1 w-full p-2 rounded-md  ${
      isActive ? "bg-slate-300" : "hover:bg-slate-200"
    }`;
  };

  return (
    <li>
      <NavLink className={({ isActive }) => navLinkClass(isActive)} to={to}>
        {children}
      </NavLink>
    </li>
  );
};
