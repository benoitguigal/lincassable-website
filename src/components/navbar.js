import React, { useEffect, useState } from "react";

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
      class={`${style} h-15 fixed w-full overflow-hidden p-3 flex flex-row justify-start items-center`}
      id="navbar"
    >
      <a class="mx-5" href="#home">
        Home
      </a>
      <a class="mx-5" href="#carte">
        Carte des points de collecte
      </a>
      <a class="mx-5" href="#actu">
        Actualités
      </a>
    </div>
  );
};

export default Navbar;
