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
  { label: "Bouteilles consignées", link: "/producteurs" },
  { label: "Carte du réseau", link: "/carte" },
  {
    label: "L'INCASSABLE",
    children: [
      { label: "Le projet", link: "/projet" },
      { label: "L'équipe", link: "/projet/equipe" },
      { label: "Les partenaires", link: "/projet/partenaires" },
    ],
  },
  {
    label: "En savoir plus",
    children: [
      { label: "Actualités", link: "/actualites" },
      { label: "FAQ", link: "/faq" },
    ],
  },
];
