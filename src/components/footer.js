import React from "react";
import AdemeImg from "../images/partners/ademe.png";
import RegionImg from "../images/partners/region.png";
import CiteoImg from "../images/partners/citeo.png";
import MetropoleImg from "../images/partners/amp.png";
import MacifImg from "../images/partners/macif.png";

const Footer = () => (
  <footer class="px-16 py-10 bg-green-bottle">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="text-left">
        <h5 className="decima-bold">Contact</h5>
        <a class="underline" href="mailto:contact@lincassable.com">
          contact@lincassable.com
        </a>
        <div>40 boulevard Voltaire</div>
        <div>13001 Marseille</div>
      </div>
      <div class="mt-5 md:mt-0 max-w-md flex flex-col items-start md:items-end">
        <div class="text-left md:text-right">
          Inscrivez-vous à notre infolettre pour suivre le développement du
          projet
        </div>
        <div>
          <form action="http://eepurl.com/hNCh7T">
            <button
              type="submit"
              class="px-2 py-1 border-2 mt-4 max-w-xs text-left md:text-right flex"
            >
              INSCRIPTION
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* <h4 class="text-center">Soutiens</h4> */}
    <div class="flex flex-col md:flex-row justify-center md:space-x-20 space-y-3 items-center w-full mt-10">
      <img src={AdemeImg} class="h-16 w-auto" alt="Ademe" />
      <img src={RegionImg} class="h-16 w-auto" alt="Région Sud" />
      <img src={CiteoImg} class="h-8 w-auto" alt="CITEO" />
      <img src={MetropoleImg} class="h-16 w-auto" alt="AMP Métropole" />
      <img src={MacifImg} class="h-16 w-auto" alt="Fondation MACIF" />
    </div>
  </footer>
);

export default Footer;
