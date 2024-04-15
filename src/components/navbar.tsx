import { Link } from "gatsby";
import React, { CSSProperties, useState } from "react";
import {
  navLinkActiveStyle,
  backgroundColorGreen,
  colorGrey,
  grey,
  navHeight,
  green,
} from "../styles/theme";
import { NavItemProps, navItems } from "../utils/navigation";
import IconClose from "./icons/close";
import IconBurger from "./icons/burger";
import IconUp from "../images/icons/up.svg";
import IconDown from "../images/icons/down.svg";
import classNames from "classnames";

type NavbarProps = {
  onShowMobileNavigation: (showMobileNav: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile {...props} />
    </>
  );
};

const menuItemStyle: CSSProperties = {
  // paddingBottom: "0.65rem",
  height: navHeight,
  backgroundColor: green,
  cursor: "pointer",
};

const menuLabelStyle: CSSProperties = {
  paddingTop: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
};

const SimpleNavItem: React.FC<
  Required<Omit<NavItemProps, "children">> & { bold?: boolean }
> = ({ link, label, bold = false, ...props }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...menuItemStyle,
        fontWeight: bold ? "bold" : "normal",
        ...(hover ? navLinkActiveStyle : {}),
      }}
      to={link}
      activeStyle={navLinkActiveStyle}
      {...props}
    >
      <div style={menuLabelStyle}>{label}</div>
    </Link>
  );
};

const DropDownNavItem: React.FC<NavItemProps> = ({ label, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="text-center flex flex-col"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={menuItemStyle}>
        <div style={menuLabelStyle}>{label}</div>
      </div>
      <div
        style={{
          display: hover ? "block" : "none",
          backgroundColor: green,
          paddingBottom: "1rem",
        }}
      >
        {(children ?? []).map((navItem) => (
          <SimpleNavItem {...navItem} />
        ))}
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ link, label, children }) => {
  if (children) {
    return <DropDownNavItem {...{ children, link, label }} />;
  } else {
    return <SimpleNavItem {...{ link: link!, label }} />;
  }
};

const NavbarDesktop: React.FC = () => {
  return (
    <nav
      style={{ height: navHeight }}
      className="invisible lg:visible fixed z-40 w-full"
    >
      <div
        className="h-full flex justify-between items-center px-10"
        style={{ ...backgroundColorGreen, ...colorGrey }}
      >
        <SimpleNavItem label="Accueil" link="/" bold={true} />

        <div className="flex h-full">
          {navItems.map((navItem) => {
            return <NavItem {...navItem} />;
          })}
        </div>

        <SimpleNavItem label="Contact" link="/contact" bold={true} />
      </div>
    </nav>
  );
};

const DropDownNavItemMobile: React.FC<NavItemProps> = ({ label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex items-end cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-2xl">{label}</span>
        <img
          style={{ display: isExpanded ? "none" : "block" }}
          className="ml-2 h-4 relative bottom-0.5"
          src={IconDown}
          alt="arrow down"
        />
        <img
          style={{ display: !isExpanded ? "none" : "block" }}
          className="ml-2 h-4 relative bottom-0.5"
          src={IconUp}
          alt="arrow up"
        />
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-1 my-2 pl-5">
          {(children ?? []).map((navLink) => (
            <Link className="text-2xl" to={navLink.link}>
              {navLink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NavItemMobile: React.FC<NavItemProps> = ({ link, label, children }) => {
  if (children) {
    return <DropDownNavItemMobile {...{ children, link, label }} />;
  } else {
    return (
      <Link className="text-2xl" to={link ?? "/"}>
        {label}
      </Link>
    );
  }
};

const NavbarMobile: React.FC<NavbarProps> = ({ onShowMobileNavigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? IconClose : IconBurger;

  const mobileNavLinks = [
    { link: "/", label: "Accueil" },
    ...navItems,
    { link: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        style={{ ...backgroundColorGreen, ...colorGrey, height: navHeight }}
        className={classNames("lg:hidden", "fixed", "w-full", "z-50")}
      >
        <div
          className="flex flex-row items-center"
          style={{ height: navHeight }}
        >
          <MenuIcon
            className="ml-2"
            role="button"
            color={grey}
            onClick={() => {
              const newShowMenu = !showMenu;
              setShowMenu(newShowMenu);
              onShowMobileNavigation(newShowMenu);
            }}
          />
        </div>
      </nav>
      {showMenu && (
        <div
          style={{
            ...backgroundColorGreen,
            ...colorGrey,
            paddingTop: navHeight,
          }}
          className="fixed w-full h-screen z-40"
        >
          <div className="h-full flex flex-col pl-14 pt-10 gap-2">
            {mobileNavLinks.map((navLink) => (
              <NavItemMobile {...navLink} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
