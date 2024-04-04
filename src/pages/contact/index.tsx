import React from "react";
import { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import { linkStyle, navHeight } from "../../styles/theme";
import Section from "../../components/section";
import { Input } from "antd";

const { TextArea } = Input;

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ paddingTop: navHeight }}>
        <h1 className="uppercase text-center mt-10">Contactez-nous</h1>
        <div className="mt-10 text-center">
          Une question ? Besoin d’un renseignement ?
        </div>
        <div className="mt-4 text-center">
          Contactez nous via ce formulaire de contact ou directement à l’adresse{" "}
          <br />
          <a style={{ ...linkStyle }} href="mailto:contact@lincassable.com">
            contact@lincassable.com
          </a>
        </div>
        <Section>
          <form
            className="w-2/3 lg:w-1/2 m-auto"
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
                htmlFor="name"
                className="block text-xl decima-regular font-bold"
              >
                Nom
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                size="large"
                className="mt-4"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-xl decima-regular font-bold"
              >
                Adresse e-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                size="large"
                className="mt-4"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-xl decima-regular font-bold"
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
                className="block  text-xl decima-regular font-bold"
              >
                Message
              </label>

              <TextArea
                id="message"
                name="message"
                required
                autoSize={{ minRows: 10, maxRows: 20 }}
                className="h-52 mt-4"
              />
            </div>

            <button className="my-6 button" type="submit">
              <div className="text-xl">ENVOYER</div>
            </button>
          </form>
        </Section>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO />;
