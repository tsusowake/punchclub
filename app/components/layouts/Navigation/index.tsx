import {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

import { NavLink } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

import AccountButton from "~/components/account/AccountButton";
import ChevronsLeftIcon from "~/icons/chevrons_left.svg?react";
import ChevronsRightIcon from "~/icons/chevrons_right.svg?react";

import HomeIcon from "~/icons/home.svg?react";

export default function Navigation() {
  const { t } = useTranslation();
  const [isOpenNav, setIsOpenNav] = useState(true);

  const handleChevronsLeftIconClick = useCallback(() => {
    setIsOpenNav(false);
  }, [setIsOpenNav]);

  const handleChevronsRightIconClick = useCallback(() => {
    setIsOpenNav(true);
  }, [setIsOpenNav]);

  return (
    <div
      className={`flex flex-col h-screen bg-slate-100 transition-all duration-200 border-r border-r-gray-light ${
        isOpenNav
          ? "w-[var(--gnav-expanded-width)]"
          : "w-[var(--gnav-collapsed-width)]"
      }`}
    >
      <div className="flex justify-end p-3 w-full select-none">
        {isOpenNav ? (
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
            <HomeIcon />
            {isOpenNav && t("home")}
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
