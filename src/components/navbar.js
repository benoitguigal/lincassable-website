import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const style = scrollTop > 15 ? "bg-black text-white" : "bg-my-yellow ";

  return (
    <div
      class={`${style} h-12 fixed w-full overflow-hidden px-10 flex flex-row justify-start items-center space-x-4`}
      id="navbar"
    >
      <Link to="/">Home</Link>
      <Link to="/carte">Carte des points de collecte</Link>
      <Link to="/actus">Actualités</Link>
    </div>
  );
};

export default Navbar;
