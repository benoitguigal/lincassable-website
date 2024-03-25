import type { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
      // remove leading /
      .slice(1);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createRedirect } = actions;

  // Rétro-comptabilité avec les anciens liens d'articles de blog
  const redirects = [
    {
      fromPath: "/actualites/2023-12-14_arles-pays-dinitiatives",
      toPath: "/actualites/2023-12-14-arles-pays-dinitiatives/",
    },
    {
      fromPath:
        "/actualites/2023-11-13_commencer-le-r%C3%A9emploi-quelques-conseils-pour-d%C3%A9buter-une-vie-plus-durable",
      toPath:
        "/actualites/2023-11-13-commencer-le-reemploi-quelques-conseils-pour-debuter-une-vie-plus-durable/",
    },
    {
      fromPath:
        "/actualites/2023-09-26_pourquoi-appliquer-une-consigne-sur-les-bouteilles-r%C3%A9employables",
      toPath:
        "/actualites/2023-09-26-pourquoi-appliquer-une-consigne-sur-les-bouteilles-reemployables/",
    },
    {
      fromPath:
        "/actualites/2023-08-29_pourquoi-toutes-les-bouteilles-en-verre-ne-sont-pas-r%C3%A9employables",
      toPath:
        "/actualites/2023-08-29-pourquoi-toutes-les-bouteilles-en-verre-ne-sont-pas-reemployables/",
    },
    {
      fromPath:
        "/actualites/2023-07-03_lincassable-recrute-un-e-alternant-e-en-communication",
      toPath:
        "/actualites/2023-07-03-lincassable-recrute-un-e-alternant-e-en-communication/",
    },
    {
      fromPath:
        "/actualites/2023-07-03_lincassable-recrute-un-e-alternan-e-en-logistique",
      toPath:
        "/actualites/2023-07-03-lincassable-recrute-un-e-alternan-e-en-logistique/",
    },
    {
      fromPath:
        "/actualites/2023-05-03_consignez-moi-ou-comment-visibiliser-la-n%C3%A9cessit%C3%A9-du-r%C3%A9emploi",
      toPath:
        "/actualites/2023-05-03-consignez-moi-ou-comment-visibiliser-la-necessite-du-reemploi/",
    },
    {
      fromPath:
        "/actualites/2023-04-18_lincassable-recrute-un-e-coordinateur-trice-de-fili%C3%A8re",
      toPath:
        "/actualites/2023-04-18-lincassable-recrute-un-e-coordinateur-trice-de-filiere/",
    },
    {
      fromPath:
        "/actualites/2023-04-18_lincassable-recrute-un-e-charg%C3%A9-e-de-mission-r%C3%A9emploi-ing%C3%A9nieur-e-technico-commercial",
      toPath:
        "/actualites/2023-04-18-lincassable-recrute-un-e-charge-e-de-mission-reemploi-ingenieur-e-technico-commercial/",
    },
    {
      fromPath:
        "/actualites/2023-03-30_lessor-des-magasins-coop%C3%A9ratifs-et-participatifs-%C3%A9conomie-circulaire-circuits-courts-et-engagement",
      toPath:
        "/actualites/2023-03-30-lessor-des-magasins-cooperatifs-et-participatifs-economie-circulaire-circuits-courts-et-engagement/",
    },
    {
      fromPath: "/actualites/2023-01-12_reportage-initiatives-m%C3%A9dia",
      toPath: "/actualites/2023-01-12-reportage-initiatives-media/",
    },
    {
      fromPath:
        "/actualites/2023-01-12_inauguration-de-notre-p%C3%B4le-de-r%C3%A9emploi",
      toPath: "/actualites/2023-01-12-inauguration-de-notre-pole-de-reemploi/",
    },
    {
      fromPath:
        "/actualites/2022-10-19_air-zen-radio-l%E2%80%99incassable-pr%C3%B4ne-le-r%C3%A9emploi-et-la-consigne",
      toPath:
        "/actualites/2022-10-19-air-zen-radio-l-incassable-prone-le-reemploi-et-la-consigne/",
    },
    {
      fromPath:
        "/actualites/2022-10-17_rcf-radio-aborde-le-sujet-du-r%C3%A9emploi",
      toPath: "/actualites/2022-10-17-rcf-radio-aborde-le-sujet-du-reemploi/",
    },
    {
      fromPath:
        "/actualites/2022-10-17_made-in-marseille-et-rcf-radio-parlent-r%C3%A9emploi",
      toPath:
        "/actualites/2022-10-17-made-in-marseille-et-rcf-radio-parlent-reemploi/",
    },
    {
      fromPath:
        "/actualites/2022-10-11_la-bi%C3%A8re-%C3%A0-marseille-fili%C3%A8res-festival-r%C3%A9emploi",
      toPath:
        "/actualites/2022-10-11-la-biere-a-marseille-filieres-festival-reemploi/",
    },
    {
      fromPath:
        "/actualites/2022-06-28_3%C3%A8me-rencontre-france-consigne-%C3%A0-valence",
      toPath:
        "/actualites/2022-06-28-3eme-rencontre-france-consigne-a-valence/",
    },
    {
      fromPath:
        "/actualites/2022-06-15_flamb%C3%A9e-des-co%C3%BBts-et-p%C3%A9nurie-de-bouteilles-en-verre",
      toPath:
        "/actualites/2022-06-15-flambee-des-couts-et-penurie-de-bouteilles-en-verre/",
    },
    {
      fromPath: "/actualites/2022-04-14_plus-verte-la-ville",
      toPath: "/actualites/2022-04-14-plus-verte-la-ville/",
    },
  ];

  for (const redirect of redirects) {
    createRedirect(redirect);
  }
};
