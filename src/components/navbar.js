import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import IconFacebook from "./icons/facebook";
import IconTwitter from "./icons/twitter";
import IconInstagram from "./icons/instagram";
import IconBurger from "./icons/burger";
import IconClose from "./icons/close";

const Navbar = () => {
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
      <NavbarMobile />
    </div>
  );
};

const NavbarDesktop = () => {
  return (
    <div class="bg-green-bottle fixed h-12 w-full overflow-hidden px-10 hidden md:flex flex-row justify-between items-center z-40">
      <div class="space-x-6">
        <Link class="no-underline" to="/">
          Accueil
        </Link>
        <Link class="no-underline" to="/carte">
          Où trouver / ramener des bouteilles ?
        </Link>
        <Link class="no-underline" to="/producteurs">
          Producteurs engagés
        </Link>
        <Link class="no-underline" to="/faq">
          En savoir plus
        </Link>
        <Link class="no-underline" to="/actualites">
          Actualités
        </Link>
        <Link class="no-underline" to="/association">
          L'association
        </Link>
      </div>
      <div class="space-x-4">
        <a
          class="no-underline"
          href="https://www.instagram.com/lincassable_consigne/"
        >
          <span>instagram</span>
        </a>
        <a
          class="no-underline"
          href="https://www.facebook.com/lincassableconsigne"
        >
          <span>facebook</span>
        </a>
        <a class="no-underline" href="https://twitter.com/_Lincassable">
          <span>twitter</span>
        </a>
        <a
          class="no-underline"
          href="https://www.linkedin.com/company/lincassable/"
        >
          <span>linkedin</span>
        </a>
      </div>
    </div>
  );
};

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? IconClose : IconBurger;

  return (
    <div className="bg-green-bottle md:hidden fixed w-full flex flex-row items-center z-40">
      <div class="flex flex-col w-full">
        <div class="flex flex-col h-16 justify-center">
          <MenuIcon
            className="ml-2"
            role="button"
            color="#EAEDEC"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
          <div class="flex flex-col items-center space-y-3 w-full mb-6 text-xl">
            <Link class="no-underline" to="/">
              Accueil
            </Link>
            <Link class="no-underline" to="/carte">
              Où trouver / rammener des bouteilles ?
            </Link>
            <Link class="no-underline" to="/producteurs">
              Producteurs engagés
            </Link>
            <Link class="no-underline" to="/faq">
              En savoir plus
            </Link>
            <Link class="no-underline" to="/actualites">
              Actualités
            </Link>
            <div class="w-full flex flex-row justify-center space-x-5 ">
              <a
                class="no-underline"
                href="https://www.instagram.com/lincassable_consigne/"
              >
                <IconInstagram
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="#EAEDEC"
                />
              </a>
              <a
                class="no-underline"
                href="https://www.facebook.com/lincassableconsigne"
              >
                <IconFacebook
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="#EAEDEC"
                />
              </a>
              <a class="no-underline" href="https://twitter.com/_Lincassable">
                <IconTwitter
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="#EAEDEC"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
