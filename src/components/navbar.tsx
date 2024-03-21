import { Link } from "gatsby";
import React, { useState } from "react";
import {
  navLinkActiveStyle,
  backgroundColorGrey,
  colorGreen,
  decimaLight,
  green,
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

const NavbarDesktop: React.FC = () => {
  return (
    <nav className="invisible lg:visible fixed z-40 h-14 w-full">
      <div
        className="h-full flex justify-between items-center px-10"
        style={{ ...backgroundColorGrey, ...colorGreen, ...decimaLight }}
      >
        <div>
          <Link to="/" activeStyle={navLinkActiveStyle}>
            Accueil
          </Link>
        </div>
        <div className="flex lg:space-x-2 xl:space-x-6">
          {navLinks.map(({ label, link }) => (
            <Link to={link} activeStyle={navLinkActiveStyle}>
              {label}
            </Link>
          ))}
        </div>
        <div>
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
        style={{ ...backgroundColorGrey }}
        className={classNames("lg:hidden", "fixed", "w-full", "z-50", "h-16")}
      >
        <div className="flex flex-row items-center h-16">
          <MenuIcon
            className="ml-2"
            role="button"
            color={green}
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
          style={{ ...backgroundColorGrey }}
          className="fixed w-full h-screen z-40"
        >
          <div className="h-full flex flex-col justify-center pl-14 space-y-1">
            {mobileNavLinks.map(({ label, link }) => (
              <Link
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
