import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import IconFacebook from "./icons/facebook";
import IconTwitter from "./icons/twitter";
import classnames from "classnames";

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
  const style = scrolling ? "bg-black text-white" : "bg-my-yellow ";

  return (
    <div
      id="navbar"
      className={classnames(style, "h-12 fixed w-full overflow-hidden")}
    >
      <NavbarDesktop scrolling={scrolling} />
    </div>
  );
};

const NavbarDesktop = ({ scrolling }) => {
  return (
    <div
      class="flex flex-row justify-between items-center px-10 h-full"
      id="navbar"
    >
      <div class="space-x-4">
        <Link to="/">Home</Link>
        {/* <Link to="/carte">Où trouver / rammener des bouteilles ?</Link> */}
      </div>
      <div class="space-x-4">
        <a href="https://www.facebook.com/lincassableconsigne">
          <span class="hidden md:inline">Facebook</span>
          <IconFacebook
            class="inline md:hidden"
            color={scrolling ? "white" : "black"}
          />
        </a>
        <a href="https://twitter.com/_Lincassable">
          <span class="hidden md:inline">Twitter</span>
          <IconTwitter
            class="inline md:hidden"
            color={scrolling ? "white" : "black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
