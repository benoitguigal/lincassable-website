import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/logo.svg";
import "./header.css";

const Header = ({ siteDescription }) => (
  <header
    class="bg-my-yellow h-screen flex flex-col justify-center"
    id="header"
  >
    <div>
      <img src={Logo} class="w-1/4 m-auto mb-16" alt="Logo" />
      <h2 class="text-sm text-center max-w-md m-auto leading-7">
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
