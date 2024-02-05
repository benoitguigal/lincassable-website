import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import IconBurger from "./icons/burger";
import IconClose from "./icons/close";

type NavbarProps = {
  onShowMobileNavigation: (v: boolean) => void;
};

const Navbar = ({ onShowMobileNavigation }: NavbarProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div id="navbar">
      <NavbarDesktop />
      <NavbarMobile onShowMobileNavigation={onShowMobileNavigation} />
    </div>
  );
};

const NavbarDesktop = () => {
  return (
    <div className="invisible lg:visible flex flex-col justify-center fixed w-full h-14 px-10 z-40 bg-grey">
      <div className="flex justify-between items-center z-40">
        <Link
          className="no-underline decima-mono-bold text-xl xl:text-2xl"
          to="/"
          activeClassName="no-underline decima-mono-bold text-xl xl:text-2xl relative top-1"
        >
          L'INCASSABLE
        </Link>
        <div className="flex lg:space-x-2 xl:space-x-6 xl:text-lg relative -top-1">
          <Link
            className="navLink"
            activeClassName="navLink__active"
            to="/carte"
          >
            Carte du réseau
          </Link>
          <Link
            className="navLink"
            activeClassName="navLink__active"
            to="/producteurs"
          >
            Producteurs engagés
          </Link>
          <Link className="navLink" activeClassName="navLink__active" to="/faq">
            En savoir plus
          </Link>
          <Link
            className="navLink"
            activeClassName="navLink__active"
            to="/actualites"
          >
            Actualités
          </Link>
          <Link
            className="navLink"
            activeClassName="navLink__active"
            to="/association"
          >
            L'association
          </Link>
        </div>
        <div className="xl:text-lg button">
          <Link to="/contact" className="no-underline decima-regular">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

const NavbarMobile = ({ onShowMobileNavigation }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? IconClose : IconBurger;

  return (
    <>
      <div
        className={`lg:hidden fixed h-16 w-full z-40 ${
          showMenu ? "bg-grey h-screen" : "bg-green-bottle h-16"
        }`}
      >
        <div className="flex flex-row items-center h-full">
          <MenuIcon
            className="ml-2"
            role="button"
            color={showMenu ? "#253D39" : "#EAEDEC"}
            onClick={() => {
              const newShowMenu = !showMenu;
              setShowMenu(newShowMenu);
              onShowMobileNavigation(newShowMenu);
            }}
          />
        </div>
      </div>
      {showMenu && (
        <div className="fixed w-full h-screen bg-grey">
          <div className="h-full flex flex-col justify-center pl-14">
            <div>
              <h5 className="mb-2">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/"
                >
                  Accueil
                </Link>
              </h5>
              <h5 className="mb-2">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/carte"
                >
                  Carte du réseau
                </Link>
              </h5>
              <h5 className="mb-2">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/producteurs"
                >
                  Producteurs engagés
                </Link>
              </h5>
              <h5 className="mb-2">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/faq"
                >
                  En savoir plus
                </Link>
              </h5>
              <h5 className="mb-2">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/actualites"
                >
                  Actualités
                </Link>
              </h5>
              <h5 className="mb-10">
                <Link
                  className="navLink uppercase"
                  activeClassName="navLink__active"
                  to="/association"
                >
                  L'association
                </Link>
              </h5>
            </div>
            <div className="w-full mx-auto">
              <h5 className="button uppercase">
                <Link to="/contact" className="no-underline decima-regular">
                  Contact
                </Link>
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
