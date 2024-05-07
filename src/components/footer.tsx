import { Link } from "gatsby";
import React from "react";
import { navItems } from "../utils/navigation";
import { backgroundColorGreen, colorWhite, decimaBold } from "../styles/theme";
import { StaticImage } from "gatsby-plugin-image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MAILCHIMP_URL } from "../utils/mailchimp";
import InfolettreFormSmall from "./forms/infolettre-fom-small";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ ...backgroundColorGreen, ...colorWhite }}
      className="py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 w-full m-auto md:justify-items-center pl-10 md:pl-0">
        <div>
          <h5>RUBRIQUES</h5>
          <div className="flex flex-col">
            {navItems.map(({ label, link, children }, idx) => {
              if (link) {
                return [
                  <Link to={link} key={idx}>
                    <span>{label}</span>
                  </Link>,
                ];
              }
              if (children) {
                return (
                  <div className="my-2">
                    <div style={decimaBold}>{label}</div>
                    {(children ?? []).map(
                      ({ label: childLabel, link: childLink }, idxChild) => {
                        return (
                          <div>
                            <Link to={childLink} key={idxChild}>
                              {childLabel}
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div>
          <h5 className="mb-2 mt-5 md:mt-0">INFOLETTRE</h5>
          {/* <div>Infolettre du réemploi</div> */}
          <div>Suivez l'actualité du réemploi et de la filière : </div>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => <InfolettreFormSmall {...props} />}
          />
        </div>
        <div>
          <h5 className="mb-2 mt-5 md:mt-0">CONTACT</h5>
          <div>
            <div>134 boulevard Longchamp</div>
            <div>13001 Marseille</div>
          </div>
          <div>
            <div>contact@lincassable.com</div>
          </div>
          <div className="mt-4">Réseaux sociaux</div>
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
          <div className="mt-4">
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
