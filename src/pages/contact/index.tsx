import React from "react";
import Layout from "../../components/layout";
import CasierImg from "../../images/casier.jpg";

export const ContactLayout = ({ children }) => {
  return (
    <Layout title="Contact">
      <div className="flex">
        <img
          src={CasierImg}
          className="hidden lg:block h-screen pt-14"
          alt="Logo"
        />
        <div className="mt-10 mx-10 lg:mx-20 pt-14">
          <h1 className="text-4xl">CONTACTEZ-NOUS ! </h1>
          <div>
            Envoyer un email à l'adresse{" "}
            <a className="italic" href="mailto:contact@lincassable.com">
              contact@lincassable.com
            </a>{" "}
            ou remplir le formulaire ci-dessous.
          </div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

const ContactPage = () => {
  return (
    <ContactLayout>
      <form
        className="mt-10"
        name="contact"
        action="/contact/success"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Required for form detection by Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block text-xl decima-regular">
            Nom
          </label>
          <input
            type="text"
            name="name"
            required
            className="border border-2 border-green-bottle w-full mt-2"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block text-xl decima-regular">
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border border-2 border-green-bottle w-full mt-2"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="subject" className="block text-xl decima-regular">
            Sujet
          </label>
          <input
            type="text"
            name="subject"
            required
            className="border border-2 border-green-bottle w-full mt-2"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="block  text-xl decima-regular">
            Message
          </label>

          <textarea
            name="message"
            required
            className="border border-2 border-green-bottle w-full h-52 mt-2"
          />
        </div>

        <button className="my-6 button" type="submit">
          <div className="text-xl">ENVOYER</div>
        </button>
      </form>
    </ContactLayout>
  );
};

export default ContactPage;
