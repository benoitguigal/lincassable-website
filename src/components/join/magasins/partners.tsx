import React from "react";
import Section from "../../section";
import LogoBiocoop from "../../../images/rejoindre/magasins/partners/biocoop.png";
import LogoBioCBon from "../../../images/rejoindre/magasins/partners/bio_c_bon.png";
import LogoSatoriz from "../../../images/rejoindre/magasins/partners/satoriz.png";
import LogoSoBio from "../../../images/rejoindre/magasins/partners/so_bio.png";
import LogoBioAndCo from "../../../images/rejoindre/magasins/partners/bio&co.png";
import LogoSuperCafoutch from "../../../images/rejoindre/magasins/partners/super_cafoutch.png";
import LogoFlaconIvre from "../../../images/rejoindre/magasins/partners/flacon_ivre.png";
import LogoMaTerre from "../../../images/rejoindre/magasins/partners/ma_terre.png";
import { linkStyle, titleMargin } from "../../../styles/theme";
import classNames from "classnames";
import { Link } from "gatsby";

const logoClassName = classNames(["w-32", "h-auto"]);

const Partners: React.FC = () => {
  return (
    <Section>
      <h2 className="uppercase text-center" style={{ ...titleMargin }}>
        Distributeurs partenaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center">
        <img className={logoClassName} src={LogoBiocoop} alt="Biocoop" />
        <img className="h-24" src={LogoBioCBon} alt="Bio C'Bon" />
        <img className={logoClassName} src={LogoSatoriz} alt="Satoriz" />
        <img className={logoClassName} src={LogoSoBio} alt="SoBio" />
        <img className={logoClassName} src={LogoBioAndCo} alt="Bio&Co" />
        <img
          className={logoClassName}
          src={LogoSuperCafoutch}
          alt="Super Cafoutch"
        />
        <img className={logoClassName} src={LogoFlaconIvre} alt="Flacon Ivre" />
        <img className={logoClassName} src={LogoMaTerre} alt="Ma Terre" />
        <img className={logoClassName} src={LogoBioAndCo} alt="Bio&Co" />
      </div>
      <div className="mt-16">
        <Link to="/carte" style={{ ...linkStyle }}>
          <div className="text-center">
            Découvrez la carte des points de vente
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default Partners;
