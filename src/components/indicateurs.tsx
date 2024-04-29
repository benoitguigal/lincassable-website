import React, { ReactNode, useEffect, useState } from "react";
import Section from "./section";
import {
  backgroundColorYellow,
  decimaBold,
  titleMargin,
} from "../styles/theme";
import { graphql } from "gatsby";
import CountUp from "react-countup";

const GOGOCARTO_API_URL =
  "https://lincassable.gogocarto.fr/api/elements.json?categories=4";

type IndicateurProps = {
  label: string | ReactNode;
  indicateur: number;
  decimal?: number;
  unit?: string;
};

const Indicateur: React.FC<IndicateurProps> = ({
  label,
  indicateur,
  decimal,
  unit,
}) => {
  return (
    <div className="flex flex-col items-center">
      <CountUp
        start={0}
        end={indicateur}
        delay={0}
        duration={1}
        enableScrollSpy
        scrollSpyOnce
        separator="."
        useEasing={false}
        suffix={unit && " " + unit}
      >
        {({ countUpRef }) => (
          <h2>
            <span ref={countUpRef} />
          </h2>
        )}
      </CountUp>

      <div
        style={{ ...decimaBold }}
        className="uppercase text-center mt-3 text-xl"
      >
        {label}
      </div>
    </div>
  );
};

const Indicateurs: React.FC<Queries.IndicateursFragment> = ({
  collected_bottles,
}) => {
  const [pointsDeCollecteNumber, setpointsDeCollecteNumber] = useState(0);

  useEffect(() => {
    // Fonction pour effectuer la requête à l'API
    const fetchData = async () => {
      try {
        // Effectuer la requête à l'API avec fetch
        const response = await fetch(GOGOCARTO_API_URL);
        // Vérifier si la réponse est OK
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des données de l'API"
          );
        }
        // Convertir la réponse en JSON
        const res = await response.json();
        const data = res.data;
        // Mettre à jour l'état avec les données de l'API
        setpointsDeCollecteNumber(data.length);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const wasteTonnes =
    (collected_bottles! *
      // poids moyen d'une bouteilles en kg
      0.5) /
    1000.0;

  return (
    <Section style={{ ...backgroundColorYellow }}>
      <h2 style={{ ...titleMargin }} className="w-full text-center">
        NOTRE ACTION EN CHIFFRES
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 m-auto space-y-6 md:space-y-0">
        <Indicateur
          label={
            <>
              Bouteilles <br />
              collectées
            </>
          }
          indicateur={collected_bottles!}
        />
        <Indicateur
          label={
            <>
              De déchets <br />
              évités
            </>
          }
          indicateur={wasteTonnes}
          unit="T"
        />
        {pointsDeCollecteNumber && (
          <Indicateur
            label={
              <>
                Magasins <br />
                partenaires
              </>
            }
            indicateur={pointsDeCollecteNumber}
          />
        )}
      </div>
    </Section>
  );
};

export default Indicateurs;

export const query = graphql`
  fragment Indicateurs on WebsiteYaml {
    collected_bottles
  }
`;
