import { ReactNode } from "react";

export type NavItemProps = {
  label: string | ReactNode;
  link?: string;
  children?: { label: string; link: string }[];
};

export const navItems: NavItemProps[] = [
  {
    label: "Rejoindre le réseau",
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
  { label: "Producteurs engagés", link: "/producteurs" },
  { label: "En savoir plus", link: "/faq" },
  { label: "Actualités", link: "/actualites" },
];
