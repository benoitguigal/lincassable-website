import React, { ReactNode, useEffect, useState } from "react";
import Section from "./section";
import {
  backgroundColorYellow,
  decimaBold,
  titleMargin,
} from "../styles/theme";
import { graphql } from "gatsby";
import CountUp from "react-countup";
import { supabaseClient } from "../utils/supabaseClient";

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

const Indicateurs: React.FC = () => {
  const [pointsDeCollecteCount, setPointsDeCollecteCount] = useState(0);

  const [bouteillesCollecteCount, setBouteillesCollecteCount] = useState(0);

  useEffect(() => {
    supabaseClient.rpc("get_total_bouteilles_collecte").then((r) => {
      if (r.data) {
        setBouteillesCollecteCount(r.data);
      }
    });
  });

  useEffect(() => {
    supabaseClient.rpc("get_point_de_collecte_count").then((r) => {
      if (r.data) {
        setPointsDeCollecteCount(r.data);
      }
    });
  });

  const wasteTonnes =
    bouteillesCollecteCount > 0
      ? (bouteillesCollecteCount *
          // poids moyen d'une bouteilles en kg
          0.5) /
        1000.0
      : 0;

  return (
    <Section style={{ ...backgroundColorYellow }}>
      <h2 style={{ ...titleMargin }} className="w-full text-center">
        NOTRE ACTION EN CHIFFRES
      </h2>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 m-auto space-y-6 md:space-y-0">
        {bouteillesCollecteCount && (
          <>
            <Indicateur
              label={
                <>
                  Bouteilles <br />
                  collectées
                </>
              }
              indicateur={bouteillesCollecteCount!}
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
          </>
        )}

        {pointsDeCollecteCount && (
          <Indicateur
            label={
              <>
                Points de <br />
                collecte
              </>
            }
            indicateur={pointsDeCollecteCount}
          />
        )}
      </div>
    </Section>
  );
};

export default Indicateurs;
