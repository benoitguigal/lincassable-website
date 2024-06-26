import React, { useMemo } from "react";
import Section from "./section";

import classNames from "classnames";
import { linkStyle, titleMargin } from "../styles/theme";
import { Link, graphql } from "gatsby";

type PartnerType =
  | "producteur"
  | "distributeur"
  | "financier"
  | "accompagnement"
  | "reseau"
  | "logistique";

type PartnersProps = Queries.PartnersFragment & {
  title: string;
  type: PartnerType;
  bw?: boolean;
  link?: {
    to: string;
    text: string;
  };
};

const logoClassName = classNames(["w-40", "h-auto"]);

const Partners: React.FC<PartnersProps> = ({
  allPartnersYaml,
  title,
  type,
  bw = false,
  link,
}) => {
  const partners = allPartnersYaml.nodes.filter((p) => p.type === type);

  const sortedPartners = useMemo(
    () => [...partners].sort((p1, p2) => p1.ordre! - p2.ordre!),
    [partners]
  );

  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="uppercase text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20 justify-items-center items-center">
        {sortedPartners.map((partner) => (
          <img
            className={logoClassName}
            alt={partner.nom!}
            src={bw ? partner.logo_bw! : partner.logo!}
          />
        ))}
      </div>
      {link && (
        <div className="mt-6">
          <Link to={link.to} style={{ ...linkStyle }}>
            <div className="text-center">{link.text}</div>
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Partners;

export const query = graphql`
  fragment Partners on Query {
    allPartnersYaml {
      nodes {
        type
        nom
        ordre
        logo
        logo_bw
      }
    }
  }
`;
