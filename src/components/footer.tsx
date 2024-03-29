import { Link } from "gatsby";
import React from "react";
import { navLinks } from "../utils/navigation";
import { backgroundColorGreen, colorWhite, greyButton } from "../styles/theme";
import { StaticImage } from "gatsby-plugin-image";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ ...backgroundColorGreen, ...colorWhite }}
      className="py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 w-full m-auto md:justify-items-center pl-10 md:pl-0">
        <div>
          <h5 className="mb-2">RUBRIQUES</h5>
          <div className="flex flex-col">
            {navLinks.map(({ label, link }, idx) => (
              <Link to={link} key={idx}>
                {label}
              </Link>
            ))}
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
          <div
            style={{ ...greyButton }}
            className="mt-3 button-grey align-middle w-fit px-2 py-1"
          >
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
              <StaticImage
                src="../images/icons/instagram.png"
                alt="instagram"
                width={25}
              />
            </a>
            <a
              className="no-underline"
              href="https://www.facebook.com/lincassableconsigne"
            >
              <StaticImage
                src="../images/icons/facebook.png"
                alt="facebook"
                width={25}
              />
            </a>
            <a
              className="no-underline"
              href="https://www.linkedin.com/company/lincassable/"
            >
              <StaticImage
                src="../images/icons/linkedin.png"
                alt="linkedin"
                width={25}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
