import React from "react";
import { PageProps } from "gatsby";
import { navHeight } from "../../styles/theme";
import Layout from "../../components/layout";

const ContactSuccessPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }} className="mt-10 text-center">
        <div className="m-auto w-4/5">
          <h1 className="uppercase">Merci pour votre message</h1>
          <div className="mt-2">
            Nous répondrons à votre demande dans les meilleurs délais.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactSuccessPage;
