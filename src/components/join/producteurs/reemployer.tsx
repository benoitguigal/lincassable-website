import React, { HtmlHTMLAttributes } from "react";
import { titleMargin } from "../../../styles/theme";
import Section from "../../section";
import Circle from "../../circle";
import BouteillePastilleImg from "../../../images/home/bouteille_pastille.png";
import classNames from "classnames";

type ReemployerItemProps = {
  title: string;
  description: string;
  numero: string;
  align: "left" | "right";
};

const ReemployerItem: React.FC<ReemployerItemProps> = ({
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
      <div className="font-bold mt-2">{title}</div>
      <div>{description}</div>
    </div>
  );
};
const content: Pick<ReemployerItemProps, "title" | "description" | "numero">[] =
  [
    {
      title: "Accompagnement technique",
      description:
        "diagnostic, accompagnement et certification pour la mise en conformité des bouteilles pour le réemploi",
      numero: "1",
    },
    {
      title: "Distribution",
      description:
        "valorisation des bouteilles réemployables dans le réseau de distributeurs partenaires",
      numero: "2",
    },
    {
      title: "Collecte",
      description: "des bouteilles dans le réseau de distributeurs partenaires",
      numero: "3",
    },
    {
      title: "Lavage",
      description: "des bouteilles et revente aux producteurs partenaires",
      numero: "4",
    },
  ];

const Reemployer: React.FC = () => {
  return (
    <Section>
      <h2 style={titleMargin} className="uppercase text-center">
        Réemployer ses bouteilles
      </h2>

      <div className="text-xl text-center">
        Nous accompagnons les producteurs de boissons et industriels de
        l'agro-alimentaire dans leur transition vers le réemploi et fournissons
        un service clé en main pour le réemploi de leurs bouteilles :
      </div>
      <div className="hidden lg:grid mt-16 grid-cols-5 w-full justify-center gap-10">
        <div className="col-span-2 flex flex-col justify-between my-20 xl:pl-12">
          <ReemployerItem align="right" {...content[0]} />
          <ReemployerItem align="right" {...content[1]} />
        </div>

        <img
          className="h-96 shrink-0 w-auto m-auto mt-10"
          src={BouteillePastilleImg}
          alt="bouteille avec pastille consigne"
        />

        <div className="col-span-2 flex flex-col justify-between my-20 xl:pr-12">
          <ReemployerItem align="left" {...content[2]} />
          <ReemployerItem align="left" {...content[3]} />
        </div>
      </div>
      <div className="lg:hidden mt-16 flex flex-col gap-y-10">
        <img
          className="h-80 shrink-0 w-auto m-auto mb-6"
          src={BouteillePastilleImg}
          alt="bouteille avec pastille consigne"
        />
        {content.map((item) => (
          <ReemployerItem align="left" {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Reemployer;
