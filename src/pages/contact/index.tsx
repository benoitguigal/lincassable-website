import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import {
  decimaRegular,
  green,
  grey,
  linkStyle,
  navHeight,
} from "../../styles/theme";
import Section from "../../components/section";
import { Button, ConfigProvider, Input } from "antd";

const { TextArea } = Input;

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <div className="w-4/5 m-auto">
          <h1 className="uppercase text-center mt-10">Contactez-nous</h1>
          <div className="mt-10 text-center">
            Une question ? Besoin d’un renseignement ?
          </div>
          <div className="mt-4 text-center">
            Contactez nous via ce formulaire de contact ou directement à
            l’adresse <br />
            <a style={{ ...linkStyle }} href="mailto:contact@lincassable.com">
              contact@lincassable.com
            </a>
          </div>
        </div>
        <Section>
          <form
            className="w-full lg:w-1/2 m-auto"
            name="contact"
            action="/contact/success"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Required for form detection by Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label
                style={{ ...decimaRegular }}
                htmlFor="name"
                className="block text-xl decima-regular"
              >
                Nom
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                size="large"
                className="mt-2"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                style={{ ...decimaRegular }}
                className="block text-xl"
              >
                Adresse mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                size="large"
                className="mt-2"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                style={{ ...decimaRegular }}
                className="block text-xl"
              >
                Sujet
              </label>
              <Input
                id="subject"
                type="text"
                name="subject"
                required
                size="large"
                className="mt-2"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                style={{ ...decimaRegular }}
                className="block  text-xl"
              >
                Message
              </label>

              <TextArea
                id="message"
                name="message"
                required
                autoSize={{ minRows: 10, maxRows: 20 }}
                className="h-52 mt-2"
              />
            </div>

            <div className="w-full flex mt-10">
              <Button
                htmlType="submit"
                className="m-auto decima-bold"
                size="large"
              >
                <span className="text-xl">Envoyer</span>
              </Button>
            </div>
          </form>
        </Section>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title="L'INCASSABLE | Contact" pathname={location.pathname} />
);
