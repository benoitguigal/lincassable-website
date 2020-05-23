import React from "react";
import Logo from "../images/logo.png";

const Footer = () => (
  <footer class="px-16 bg-my-yellow">
    <div class="grid grid-cols-1 sm:grid-cols-3 grid-flow-row gap-6 ">
      <div class="text-left">
        <h5>Contact</h5>
        <a href="mailto:contact@lincassable.com">contact@lincassable.com</a>
        <div>3 cours Joseph Thierry</div>
        <div>13001 Marseille</div>
      </div>
      <img src={Logo} class="w-40 m-auto" alt="Logo" />
      <div class="text-right">
        Inscrivez-vous à la newsletter pour suivre le développement du projet
      </div>
    </div>
  </footer>
);

export default Footer;
