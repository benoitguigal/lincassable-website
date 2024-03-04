import { Link } from "gatsby";
import React from "react";
import {
  linkActiveStyle,
  backgroundColorGrey,
  colorGreen,
  decimaLight,
} from "../styles/theme";
import { navLinks } from "../utils/navigation";

type NavbarProps = {
  onShowMobileNavigation: (showMobileNav: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <NavbarDesktop />
    </>
  );
};

const NavbarDesktop: React.FC = () => {
  return (
    <nav className="z-40 h-14 fixed w-full">
      <div
        className="h-full flex justify-between items-center px-10"
        style={{ ...backgroundColorGrey, ...colorGreen, ...decimaLight }}
      >
        <div>
          <Link to="/" activeStyle={linkActiveStyle}>
            Accueil
          </Link>
        </div>
        <div className="flex lg:space-x-2 xl:space-x-6">
          {navLinks.map(({ label, link }) => (
            <Link to={link} activeStyle={linkActiveStyle}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <Link to="/contact" activeStyle={linkActiveStyle}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
