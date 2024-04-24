import React from "react";
import Section from "../../section";
import Circle from "../../circle";
import PictoRemploi from "../../../images/rejoindre/consommateurs/picto_reemploi.png";
import PictoConsigne from "../../../images/rejoindre/consommateurs/picto_consigne.png";
import PictoCasier from "../../../images/rejoindre/consommateurs/picto_casier.png";
import PictoLavage from "../../../images/rejoindre/consommateurs/picto_lavage.png";
import { Link } from "gatsby";
import { linkStyle } from "../../../styles/theme";

type InstructionRowProps = {
  pictoSrc: string;
  pictoAlt: string;
  title: string;
  instruction: React.ReactNode;
};

const InstructionRow: React.FC<InstructionRowProps> = ({
  pictoSrc,
  pictoAlt,
  title,
  instruction,
}) => {
  return (
    <>
      <img
        className="w-16 justify-self-start md:justify-self-center relative top-1"
        src={pictoSrc}
        alt={pictoAlt}
      />
      <div className="md:col-span-3">
        <h4 className="uppercase">{title}</h4>
        <div className="mt-6">{instruction}</div>
      </div>
    </>
  );
};

const Insructions: React.FC = () => {
  return (
    <Section>
      <div className="flex items-center gap-x-3">
        <div className="relative top-2">
          <Circle text="1" size={30} fontSize={20} />
        </div>
        <h2 className="uppercase">Identifier les bouteilles consignées</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10 gap-x-2 gap-y-5 md:gap-y-10 mt-16">
        <InstructionRow
          pictoSrc={PictoRemploi}
          pictoAlt="Pictogramme réemploi"
          title="Pictogramme"
          instruction={
            <div>
              Les bouteilles éligibles au réemploi sont reconnaissables grâce au
              Pictogramme national réemploi intégré sur les étiquettes. La
              présence de ce pictogramme garantit que les bouteilles qui le
              portent font bien partie de la gamme standard L’INCASSABLE, et que
              leurs étiquettes ont été adaptées selon le cahier des charges de
              l’Incassable (notamment avec des étiquettes qui partent au
              lavage). Les autres bouteilles qui ne portent pas le pictogramme
              ne sont malheureusement pas aptes au réemploi : leurs étiquettes
              ne sont pas lessivables, et les bouteilles ne sont pas forcément
              standardisées.
            </div>
          }
        />
        <InstructionRow
          pictoSrc={PictoConsigne}
          pictoAlt="Pastille je suis consigné"
          title="Consigne Monétaire"
          instruction={
            <div>
              Une consigne monétaire est actuellement appliquée dans tous les
              magasins membres de la filière de L’INCASSABLE. Son montant
              s’élève à 50 centimes sur les bouteilles de nos producteurs
              partenaires.
              <br />
              <br />
              Retrouver l’ensemble des références disponibles en bouteille
              consignées sur{" "}
              <Link style={{ ...linkStyle }} to="/producteurs">
                notre catalogue
              </Link>
              .
            </div>
          }
        />
      </div>

      <div className="flex items-center gap-x-3 mt-16">
        <div className="relative top-2">
          <Circle text="2" size={30} fontSize={20} />
        </div>
        <h2 className="uppercase">Stocker mes bouteilles vides</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10 gap-x-2 gap-y-5 md:gap-y-10 mt-16">
        <InstructionRow
          pictoSrc={PictoCasier}
          pictoAlt="Pictogramme casier"
          title="Stockage"
          instruction={
            <div>
              Les bouteilles doivent être rincées après utilisation puis
              stockées à l’abri du soleil (UV) et de la pluie pour ne pas
              altérer la lessivabilité des étiquettes.
            </div>
          }
        />
      </div>

      <div className="flex items-center gap-x-3 mt-16">
        <div className="relative top-2">
          <Circle text="3" size={30} fontSize={20} />
        </div>
        <h2 className="uppercase">Rammener mes bouteilles consignées</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10 gap-x-2 gap-y-5 md:gap-y-10 mt-16 ">
        <InstructionRow
          pictoSrc={PictoLavage}
          pictoAlt="Pictogramme lavage"
          title="Retour"
          instruction={
            <div>
              Vous pouvez acheter des bouteilles consignées dans les magasins
              partenaires de L’INCASSABLE visibles sur la carte interactive.
              <br />
              <br />
              Les bouteilles peuvent être rapportées dans tous les magasins
              partenaires indiqués comme points de collecte sur la carte, même
              si elles ont été achetées ailleurs, pourvu qu’elles portent le
              pictogramme réemploi.
              <br />
              <br />
              <Link to="/carte" style={linkStyle}>
                Découvrez la carte des points de collecte
              </Link>
            </div>
          }
        />
      </div>
    </Section>
  );
};

export default Insructions;
