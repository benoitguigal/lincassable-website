import React from "react";
import Section from "../../section";
import { titleMargin } from "../../../styles/theme";
import classNames from "classnames";
import Circle from "../../circle";
import PictoMagasinVert from "../../../images/rejoindre/magasins/picto_magasin_vert.png";

type PointDeCollecteItemProps = {
  title: string;
  description: string;
  numero: string;
  align: "left" | "right";
};

const PointDeCollecteItem: React.FC<PointDeCollecteItemProps> = ({
  title,
  description,
  numero,
  align,
}) => {
  return (
    <div className={classNames(align === "left" ? "text-left" : "text-right")}>
      <div
        className={classNames([
          "flex",
          align === "left" ? "justify-start" : "justify-end",
        ])}
      >
        <Circle text={numero} size={30} fontSize={18} />
      </div>
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
};
const content: Pick<
  PointDeCollecteItemProps,
  "title" | "description" | "numero"
>[] = [
  {
    title: "Mise en place technique",
    description:
      "du dispositif de consigne en magasin (mise à disposition des casiers de collecte et formation des équipes de vente)",
    numero: "1",
  },
  {
    title: "Valorisation du dispositif de consigne et du magasin",
    description:
      "mise a disposition de supports de communication et PLV, animation en magasin, mise en avant sur nos réseaux et carte des points de collecte",
    numero: "2",
  },
  {
    title:
      "Accompagnement pour le développement de la gamme de produits consignées",
    description:
      "Catalogue de producteurs partenaires et accompagnement de nouveaux producteurs identifiés",
    numero: "3",
  },
  {
    title: "Collecte des bouteilles sur demande",
    description:
      "via nos partenaires logistiques (entreprises en insertion et cyclologistique selon la zone de collecte)",
    numero: "4",
  },
];

const DevenirPointDeCollecte: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="text-center uppercase">
        Devenir Point de Collecte
      </h2>
      <div className="text-xl text-center">
        Les distributeurs ont un rôle clé au sein de la filière de réemploi, en
        constituant un maillage de points de collecte et en valorisant des
        producteurs locaux dans leurs rayons. L’INCASSABLE propose un service
        clé en main aux distributeurs qui intègrent la filière de réemploi :
      </div>
      <div className="hidden md:grid mt-16 grid-cols-5 w-full items-stretch gap-10">
        <div className="col-span-2 flex flex-col gap-y-8 justify-between">
          <PointDeCollecteItem align="right" {...content[0]} />
          <PointDeCollecteItem align="right" {...content[1]} />
        </div>

        <img
          className="h-28 shrink-0 w-auto m-auto"
          src={PictoMagasinVert}
          alt="Pictogramme magasin"
        />

        <div className="col-span-2 flex flex-col justify-between">
          <PointDeCollecteItem align="left" {...content[2]} />
          <PointDeCollecteItem align="left" {...content[3]} />
        </div>
      </div>
      <div className="md:hidden mt-16  flex flex-col gap-y-5">
        <img
          className="h-24 shrink-0 w-auto m-auto mb-6"
          src={PictoMagasinVert}
          alt="Pictogramme magasin"
        />
        {content.map((item) => (
          <PointDeCollecteItem align="left" {...item} />
        ))}
      </div>
    </Section>
  );
};

export default DevenirPointDeCollecte;
