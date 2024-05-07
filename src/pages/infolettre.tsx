import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { navHeight } from "../styles/theme";
import Section from "../components/section";
import InfolettreForm from "../components/forms/infolettre-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MAILCHIMP_URL } from "../utils/mailchimp";
import SEO from "../components/seo";

const Infolettre: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <div className="w-4/5 m-auto">
          <h1 className="uppercase text-center mt-10">Infolettre</h1>
          <div className="mt-10 text-center">
            Suivez toutes les actualités du projet en vous inscrivant à notre
            infolettre :
          </div>
        </div>
        <Section>
          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => <InfolettreForm {...props} />}
          />
        </Section>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | Infolettre" pathname={location.pathname} />
);

export default Infolettre;
