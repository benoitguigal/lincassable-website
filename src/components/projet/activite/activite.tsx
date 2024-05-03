import React, { CSSProperties } from "react";
import Section from "../../section";
import PictogrammeBouteille from "../../../images/projet/activite/picto_bouteilles.png";
import PictogrammePluie from "../../../images/projet/activite/picto_pluie.png";
import PictogrammeFleche from "../../../images/projet/activite/picto_fleche.png";
import { linkStyle, titleMargin } from "../../../styles/theme";
import { Link } from "gatsby";

const pictoStyle: CSSProperties = {
  height: "4rem",
  width: "auto",
};

type ActiviteItemProps = {
  type: string;
  pictogramme: string;
  description: string;
};

const ActiviteItem: React.FC<ActiviteItemProps> = ({
  type,
  pictogramme,
  description,
}) => {
  return (
    <div>
      <img style={{ ...pictoStyle }} alt={type} src={pictogramme} />
      <h5 style={{ marginTop: "1.25rem" }}>{type}</h5>
      <div className="w-full md:w-1/2 lg:w-full">{description}</div>
      <div style={{ ...linkStyle }} className="mt-3">
        <Link to="/contact">En savoir plus</Link>
      </div>
    </div>
  );
};

const Activite: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="text-center uppercase">
        Notre activité
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <ActiviteItem
          type="Accompagnement"
          pictogramme={PictogrammeBouteille}
          description="des acteurs du territoire pour la mise en place de solutions de réemploi 
          d’emballages en verre (producteurs, distributeurs, collectivités)."
        />
        <ActiviteItem
          type="Service de collecte et lavage"
          pictogramme={PictogrammePluie}
          description="et distribution d’emballages en verre sur le territoire."
        />
        <ActiviteItem
          type="Sensibilisation"
          pictogramme={PictogrammeFleche}
          description="des citoyens et acteurs locaux sur les enjeux du réemploi et de la
          réduction des déchets."
        />
      </div>
    </Section>
  );
};

export default Activite;
