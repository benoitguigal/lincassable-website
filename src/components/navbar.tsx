import { Link } from "gatsby";
import React, { CSSProperties, useState } from "react";
import {
  navLinkActiveStyle,
  backgroundColorGrey,
  colorGreen,
  decimaLight,
  green,
  backgroundColorGreen,
  colorGrey,
  grey,
  decimaMonoLight,
  navHeight,
} from "../styles/theme";
import { navLinks } from "../utils/navigation";
import IconClose from "./icons/close";
import IconBurger from "./icons/burger";
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
  paddingBottom: "0.65rem",
};

const NavbarDesktop: React.FC = () => {
  return (
    <nav
      style={{ height: navHeight }}
      className="invisible lg:visible fixed z-40 w-full"
    >
      <div
        className="h-full flex justify-between items-center px-10"
        style={{ ...backgroundColorGreen, ...colorGrey, ...decimaLight }}
      >
        <div style={{ ...menuItemStyle, fontWeight: "bold" }}>
          <Link to="/" activeStyle={navLinkActiveStyle}>
            Accueil
          </Link>
        </div>
        <div style={{ ...menuItemStyle }} className="flex lg:space-x-6">
          {navLinks.map(({ label, link }, idx) => (
            <Link to={link} key={idx} activeStyle={navLinkActiveStyle}>
              {label}
            </Link>
          ))}
        </div>
        <div style={{ ...menuItemStyle, fontWeight: "bold" }}>
          <Link to="/contact" activeStyle={navLinkActiveStyle}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavbarMobile: React.FC<NavbarProps> = ({ onShowMobileNavigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? IconClose : IconBurger;

  const mobileNavLinks = [
    { link: "/", label: "Accueil" },
    ...navLinks,
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
          style={{ ...backgroundColorGreen, ...colorGrey }}
          className="fixed w-full h-screen z-40"
        >
          <div className="h-full flex flex-col justify-center pl-14 space-y-1">
            {mobileNavLinks.map(({ label, link }, idx) => (
              <Link
                key={idx}
                className="text-2xl"
                to={link}
                activeStyle={navLinkActiveStyle}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
