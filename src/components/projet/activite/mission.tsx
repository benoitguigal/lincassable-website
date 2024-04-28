import React from "react";
import Section from "../../section";

const Mission: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-x-10 gap-y-6 md:gap-y-16">
        <h2 className="uppercase md:justify-self-end md:text-right relative -top-1">
          Notre <br />
          ambition
        </h2>
        <div className="col-span-2">
          Faciliter le passage au réemploi en accompagnant les acteurs lo- caux
          dans leur transition vers le réemploi et en sensibilisant les ci-
          toyens pour encourager des habitudes de consommation plus ver-
          tueuses.
        </div>
        <h2 className="uppercase md:justify-self-end md:text-right relative -top-1 mt-12 md:mt-0">
          Notre <br />
          mission
        </h2>
        <div className="col-span-2">
          Réduire la production de déchets liés aux emballages à usage unique
          grâce au développement et à la coordination d’une filière de réemploi
          de bouteilles en verre en Région SUD
        </div>
        <h2 className="uppercase md:justify-self-end md:text-right relative -top-1 mt-12 md:mt-0">
          Nos <br />
          valeurs
        </h2>
        <div className="col-span-2">
          <h4>Engagement</h4>
          <div>
            Une société plus juste et moins consommatrice de ressources.
          </div>
          <h4 className="mt-4">Coopération</h4>
          <div>
            Entre les acteurs du territoire pour réduire la quantité de déchets.
          </div>
          <h4 className="mt-4">Local</h4>
          <div>
            Une économie plus résiliente grâce au circuit-court et aux acteurs
            locaux.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
