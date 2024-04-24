import { ReactNode } from "react";

export type NavItemProps = {
  label: string | ReactNode;
  link?: string;
  children?: { label: string; link: string }[];
};

export const navItems: NavItemProps[] = [
  {
    label: "Rejoindre la filière",
    children: [
      {
        label: "Producteurs",
        link: "/join/producteurs",
      },
      {
        label: "Magasins",
        link: "/join/magasins",
      },
      {
        label: "Consommateurs",
        link: "/join/consommateurs",
      },
    ],
  },
  { label: "Carte du réseau", link: "/carte" },
  { label: "Catalogue", link: "/producteurs" },
  {
    label: "L'INCASSABLE",
    children: [
      { label: "Notre activité", link: "/projet/activite" },
      { label: "L'équipe", link: "/projet/equipe" },
    ],
  },
  { label: "En savoir plus", link: "/faq" },
  { label: "Actualités", link: "/actualites" },
];
