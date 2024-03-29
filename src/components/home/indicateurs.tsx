import React, { ReactNode, useEffect, useState } from "react";
import Section from "../section";
import { backgroundColorYellow } from "../../styles/theme";

const GOGOCARTO_API_URL =
  "https://lincassable.gogocarto.fr/api/elements.json?categories=4";

type IndicateurProps = {
  label: string | ReactNode;
  indicateur: number;
};

const Indicateur: React.FC<IndicateurProps> = ({ label, indicateur }) => {
  return (
    <div className="flex flex-col items-center">
      <h1>{indicateur}</h1>
      <h4 className="uppercase text-center mt-3">{label}</h4>
    </div>
  );
};

const Indicateurs: React.FC = () => {
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

  return (
    <Section style={{ ...backgroundColorYellow }}>
      <h1 className="w-full text-center">NOTRE ACTION EN CHIFFRES</h1>
      <div className="flex flex-col lg:flex-row">
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
