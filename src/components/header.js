import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/logo.png";

const Header = ({ siteDescription }) => (
  <header class="px-16 pt-20 pb-10 bg-my-yellow" id="header">
    <div class="md:flex justify-between items-end">
      <img src={Logo} class="md:flex-shrink-0 w-56" alt="Logo" />
      <h2 class="text-3xl text-right max-w-xl description">
        {siteDescription}
      </h2>
    </div>
  </header>
);

Header.propTypes = {
  siteDescription: PropTypes.string
};

Header.defaultProps = {
  siteDescription: ``
};

export default Header;
