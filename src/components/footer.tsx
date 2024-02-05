import React from "react";
import { Link } from "gatsby";
import IconFacebook from "./icons/facebook";
import IconLinkedin from "./icons/linkedin";
import IconInstagram from "./icons/instagram";

const Footer = () => (
  <footer className="py-10 bg-green-bottle">
    <div className="grid grid-cols-1 md:grid-cols-3 w-full m-auto md:justify-items-center pl-10 md:pl-0">
      <div>
        <h5 className="mb-2">RUBRIQUES</h5>
        <div>
          <div>
            <Link className="no-underline" to="/carte">
              Carte des points de collecte
            </Link>
          </div>
          <div>
            <Link className="no-underline" to="/producteurs">
              Producteurs engagés
            </Link>
          </div>
          <div>
            <Link className="no-underline" to="/faq">
              En savoir plus
            </Link>
          </div>
          <div>
            <Link className="no-underline" to="/actualites">
              Actualités
            </Link>
          </div>
          <div>
            <Link className="no-underline" to="/association">
              L'association
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h5 className="mb-2 mt-5 md:mt-0">CONTACT</h5>
        <div>
          <div>40 boulevard Voltaire</div>
          <div>13001 Marseille</div>
        </div>
        <div>
          <div>contact@lincassable.com</div>
        </div>
      </div>
      <div>
        <h5 className="mb-2 mt-5 md:mt-0">NOUS SUIVRE</h5>
        <div>Infolettre du réemploi</div>
        <div className="mt-3 button-grey align-middle w-fit px-2 py-1">
          <a
            className="relative -top-1 no-underline"
            href="http://eepurl.com/hNCh7T"
            target="_blank"
            rel="noreferrer"
          >
            INSCRIPTION
          </a>
        </div>
        <div className="mt-2">Réseaux Sociaux</div>
        <div className="flex space-x-4 mt-2">
          <a
            className="no-underline"
            href="https://www.instagram.com/lincassable_consigne/"
          >
            <IconInstagram width="1.6em" height="1.6em" color="#EAEDEC" />
          </a>
          <a
            className="no-underline"
            href="https://www.facebook.com/lincassableconsigne"
          >
            <IconFacebook width="1.6em" height="1.6em" color="#EAEDEC" />
          </a>
          <a
            className="no-underline"
            href="https://www.linkedin.com/company/lincassable/"
          >
            <IconLinkedin width="1.6em" height="1.6em" color="#EAEDEC" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
