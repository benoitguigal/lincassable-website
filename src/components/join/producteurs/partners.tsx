import React from "react";
import Section from "../../section";
import LogoBrasserieLaPlaine from "../../../images/rejoindre/producteurs/partners/brasserie_de_la_plaine.jpeg";
import LogoLesMaou from "../../../images/rejoindre/producteurs/partners/les_maou.png";
import LogoAttilon from "../../../images/rejoindre/producteurs/partners/attilon.png";
import LogoLaCommedienne from "../../../images/rejoindre/producteurs/partners/la_comedienne.png";
import LogoBrasserieZoumai from "../../../images/rejoindre/producteurs/partners/brasserie_zoumai.png";
import LogoLesMaltfaiteurs from "../../../images/rejoindre/producteurs/partners/les_maltfaiteurs.png";
import LogoJulienDeLembisque from "../../../images/rejoindre/producteurs/partners/julien_de_lembisque.png";
import LogoBullesDeProvence from "../../../images/rejoindre/producteurs/partners/bulles_de_provence.png";
import { linkStyle, titleMargin } from "../../../styles/theme";
import classNames from "classnames";
import { Link } from "gatsby";

const logoClassName = classNames(["w-40", "h-auto"]);

const Partners: React.FC = () => {
  return (
    <Section>
      <h2 className="uppercase text-center" style={{ ...titleMargin }}>
        Producteurs partenaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
        <img
          className={logoClassName}
          src={LogoBrasserieLaPlaine}
          alt="Brasserie de La Plaine"
        />
        <img className={logoClassName} src={LogoLesMaou} alt="Les Maou" />
        <img
          className={logoClassName}
          src={LogoAttilon}
          alt="Domaine Attilon"
        />
        <img
          className={logoClassName}
          src={LogoLaCommedienne}
          alt="La Comédienne"
        />
        <img
          className={logoClassName}
          src={LogoBrasserieZoumai}
          alt="Brasserie Zoumaï"
        />
        <img
          className={logoClassName}
          src={LogoLesMaltfaiteurs}
          alt="Les Maltfaiteurs"
        />
        <img
          className={logoClassName}
          src={LogoJulienDeLembisque}
          alt="Julien de l'Embisque"
        />
        <img
          className={logoClassName}
          src={LogoJulienDeLembisque}
          alt="L'Abri"
        />
        <img
          className={logoClassName}
          src={LogoBullesDeProvence}
          alt="Bulles de Provence"
        />
      </div>
      <Link to="/producteurs" style={{ ...linkStyle }} className="mt-16">
        <div className="text-center">
          Découvrez notre catalogue de boissons consignées
        </div>
      </Link>
    </Section>
  );
};

export default Partners;
