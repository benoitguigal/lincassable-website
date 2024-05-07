import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { navHeight } from "../styles/theme";
import CasierImg from "../images/404.jpg";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="text-center uppercase mt-10">Cette page n'existe pas</h1>
        <div className="m-auto w-96 mt-20 mb-20">
          <StaticImage
            src="../images/404.jpg"
            alt="casier"
            placeholder="blurred"
          />
        </div>
        {/* <img className="m-auto mt-20 w-96 mb-20" src={CasierImg} alt="casier" /> */}
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => (
  <SEO pathname={location.pathname} />
);
