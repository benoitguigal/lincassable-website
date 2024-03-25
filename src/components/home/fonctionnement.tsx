import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Section from "../section";
import {
  decimaBold,
  decimaMonoBold,
  green,
  lightGrey,
  linkStyle,
} from "../../styles/theme";
import { Link } from "gatsby";
import Circle from "../circle";

const pictogrammeSize = 90;

// type CircleProps = {
//   text: string;
//   size: number;
// };

// const Circle: React.FC<CircleProps> = ({ size, text }) => {
//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         borderRadius: "50%" /* Crée un cercle */,
//         backgroundColor: green,
//         display: "flex",
//         justifyContent: "center" /* Centre le contenu horizontalement */,
//         alignItems: "center" /* Centre le contenu verticalement */,
//       }}
//     >
//       <p className="text-2xl" style={{ color: lightGrey, ...decimaMonoBold }}>
//         {text}
//       </p>
//     </div>
//   );
// };

const Fonctionnement: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-12 lg:w-4/5 m-auto">
        <div className="hidden lg:block">
          <StaticImage
            alt="bouteille avec pastille consigne"
            src="../../images/home/bouteille_pastille.png"
            height={1500}
          />
        </div>
        <div className="lg:hidden flex justify-center mt-10">
          <StaticImage
            alt="bouteille avec pastille consigne"
            src="../../images/home/bouteille_pastille.png"
            height={400}
          />
        </div>
        <div>
          <h1>COMMENT ÇA FONCTIONNE ?</h1>
          <div className="mt-10 text-xl" style={{ ...decimaBold }}>
            C'est facile
          </div>
          <div className="mt-6">
            Agnatum ut ides rat eveliquossit dionsed el exces conecep rovit, to
            esecepu daerion sequatisRum ad que cus cullab il illaut faccum
            faccuptatem libusandit vendam, alique nonsed que alit, seditae
            ctiat.Vatuius bon habemniris hus consitustrem consus, Catilin
            vehenti entrac res? Horimis nos inte fauc fit occi sum P. Efactum
            prem, vivatorditi poervidem
          </div>
          <div className="mt-6">
            <Link to="/producteurs" style={{ ...linkStyle }}>
              Voir la liste des références réemployables
            </Link>
          </div>
        </div>
      </div>
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
    </Section>
  );
};

export default Fonctionnement;
