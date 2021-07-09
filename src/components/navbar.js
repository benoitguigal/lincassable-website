import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import IconFacebook from "./icons/facebook";
import IconTwitter from "./icons/twitter";
import IconInstagram from "./icons/instagram";
import classnames from "classnames";
import IconBurger from "./icons/burger";
import IconClose from "./icons/close";

const background = (scrolling) =>
  scrolling ? "bg-black text-white" : "bg-green-bottle";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const scrolling = scrollTop > 15;

  return (
    <div id="navbar">
      <NavbarDesktop scrolling={scrolling} />
      <NavbarMobile scrolling={scrolling} />
    </div>
  );
};

const NavbarDesktop = ({ scrolling }) => {
  return (
    <div class="bg-green-bottle h-12 fixed w-full overflow-hidden px-10 hidden md:flex flex-row justify-between items-center">
      <div class="space-x-6">
        <Link to="/">Accueil</Link>
        <a href="https://faq.lincassable.com">FAQ</a>
        <Link to="/carte">Où trouver / rammener des bouteilles ?</Link>
      </div>
      <div class="space-x-4">
        <a href="https://www.instagram.com/lincassable_consigne/">
          <span>instagram</span>
        </a>
        <a href="https://www.facebook.com/lincassableconsigne">
          <span>facebook</span>
        </a>
        <a href="https://twitter.com/_Lincassable">
          <span>twitter</span>
        </a>
      </div>
    </div>
  );
};

const NavbarMobile = ({ scrolling }) => {
  const [showMenu, setShowMenu] = useState(false);

  const MenuIcon = showMenu ? IconClose : IconBurger;

  return (
    <div className="bg-green-bottle md:hidden fixed w-full flex flex-row items-center px-2 py-2">
      <div class="flex flex-col w-full">
        <MenuIcon
          class="my-2"
          role="button"
          color="#EAEDEC"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div class="flex flex-col items-center space-y-3 w-full">
            <Link class="text-sm" to="/">
              Accueil
            </Link>
            <a href="https://faq.lincassable.com">FAQ</a>
            <Link class="text-sm" to="/carte">
              Où trouver / rammener des bouteilles ?
            </Link>
            <div class="w-full flex flex-row justify-center space-x-5">
              <a href="https://www.instagram.com/lincassable_consigne/">
                <IconInstagram
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="white"
                />
              </a>
              <a href="https://www.facebook.com/lincassableconsigne">
                <IconFacebook
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="white"
                />
              </a>
              <a href="https://twitter.com/_Lincassable">
                <IconTwitter
                  width="1.3em"
                  height="1.3em"
                  class="inline md:hidden"
                  color="white"
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
