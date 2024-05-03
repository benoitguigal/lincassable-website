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
          Faciliter le passage au réemploi en accompagnant les acteurs du
          territoire dans leur transition vers le réemploi et en sensibilisant
          les citoyens pour encourager des habitudes de consommation plus
          vertueuses.
        </div>
        <h2 className="uppercase md:justify-self-end md:text-right relative -top-1 mt-12 md:mt-0">
          Notre <br />
          mission
        </h2>
        <div className="col-span-2">
          Réduire la production de déchets liés aux emballages à usage unique
          grâce au développement et à la coordination d’une filière de réemploi
          de bouteilles en verre en Région Sud Provence-Alpes-Côte d'Azur
        </div>
        <h2 className="uppercase md:justify-self-end md:text-right relative -top-1 mt-12 md:mt-0">
          Nos <br />
          valeurs
        </h2>
        <div className="col-span-2">
          <div>
            <span className="font-bold">Engagement</span> : une société plus
            juste et moins consommatrice de ressources.
          </div>
          <div>
            <span className="font-bold">Coopération</span> : entre les acteurs
            du territoire pour réduire la quantité de déchets.
          </div>
          <div>
            <span className="font-bold">Local</span> : une économie plus
            résiliente grâce aux circuits courts et aux acteurs du territoire.
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
