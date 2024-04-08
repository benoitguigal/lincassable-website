import React, { IframeHTMLAttributes } from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { navHeight } from "../styles/theme";

const iframeProps: IframeHTMLAttributes<HTMLIFrameElement> = {
  width: "100%",
  height: "100%",
  frameBorder: "0",
  marginWidth: 0,
  marginHeight: 0,
  allowFullScreen: true,
};

const CartePage: React.FC<PageProps> = () => {
  return (
    <Layout showFooter={false}>
      <div className="flex flex-col items-stretch h-screen">
        {/* render different iframe on mobile and desktop*/}
        <iframe
          style={{ paddingTop: navHeight }}
          {...iframeProps}
          title="Carte du réseau"
          className="hidden md:block m-0 h-full"
          src="https://lincassable.gogocarto.fr/annuaire?iframe=1&noheader=1#/carte/@43.69,5.53,9z?cat=all"
        ></iframe>
        <div
          className="md:hidden h-screen pt-16"
          style={{ paddingTop: navHeight }}
        >
          <iframe
            {...iframeProps}
            title="Carte du réseau (mobile)"
            className="m-0 p-0"
            src="https://lincassable.gogocarto.fr/annuaire?iframe=1&noheader=1#/carte/@43.79,5.27,8z?cat=all"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default CartePage;

export const Head: HeadFC = () => (
  <SEO title="L'INCASSABLE | Carte du réseau" pathname="/carte" />
);
