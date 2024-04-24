import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../section";
import { decimaBold, linkStyle } from "../../styles/theme";
import { Link } from "gatsby";
import Circle from "../circle";
import BouteillePastilleImg from "../../images/home/bouteille_pastille.png";

const pictogrammeSize = 90;

const Fonctionnement: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-12 lg:w-4/5 m-auto">
        <img
          className="h-80 lg:h-96 shrink-0 w-auto m-auto mt-10 lg:m-0"
          src={BouteillePastilleImg}
          alt="bouteille avec pastille consigne"
        />
        <div>
          <h2>COMMENT ÇA FONCTIONNE ?</h2>
          <div className="mt-10 text-xl" style={{ ...decimaBold }}>
            C'est facile
          </div>
          <div className="mt-6">
            Les bouteilles éligibles au réemploi sont identifiables grâce à un
            pictogramme national que l’on retrouve sur les étiquettes de nos
            producteurs partenaires. Ce pictogramme garantit que ces bouteilles
            sont bien certifiées pour le réemploi et pourront être lavées et
            réutilisées. Une pastille jaune « Je suis consignée » est également
            apposée sur les bouteilles : une consigne de 0,50 euros sera payée
            pour les bouteilles portant cette pastille. Ce montant sera
            remboursé lors du retour des bouteilles en magasin. Après
            consommation, les bouteilles doivent être rincées et retournées sans
            bouchon dans les magasins partenaires.
          </div>
          <div className="mt-6">
            <Link to="/producteurs" style={{ ...linkStyle }}>
              Voir la liste des références réemployables
            </Link>
          </div>
        </div>
      </div>
      <FonctionnementStepByStep />
    </Section>
  );
};

export const FonctionnementStepByStep: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 lg:space-x-10 xl:space-x-20 space-y-12 lg:space-y-0">
      <div className="flex flex-col items-center">
        <Circle text="1" size={50} />
        <div className="mt-4">
          <StaticImage
            alt="Je suis consignée"
            src="../../images/home/picto_consigne.png"
            height={pictogrammeSize}
          />
        </div>
        <div className="text-center mt-4">
          <div style={{ ...decimaBold }}>
            J'identifie les bouteilles consignées
          </div>
          <div>
            en magasin grâce au pictogramme. Je paye une consigne de 0,50€.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Circle text="2" size={50} />
        <div className="mt-4">
          <StaticImage
            alt="Je suis consignée"
            src="../../images/home/picto_collecte.png"
            height={pictogrammeSize}
          />
        </div>
        <div className="text-center mt-4">
          <div style={{ ...decimaBold }}>
            Je rince la bouteille et j’enlève le bouchon
          </div>
          <div>après consommation.</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Circle size={50} text="3" />
        <div className="mt-4">
          <StaticImage
            alt="Je suis consignée"
            src="../../images/home/picto_lavage.png"
            height={pictogrammeSize}
          />
        </div>
        <div className="text-center mt-4">
          <div style={{ ...decimaBold }}>Je la ramène en magasin</div>
          <div>On me rembourse la consigne de 0,50 €.</div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnement;
