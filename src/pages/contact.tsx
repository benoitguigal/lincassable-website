import React, { useState } from "react";
import Layout from "../components/layout";
import { supabase } from "../utils/supabaseClient";
import CasierImg from "../images/casier.jpg";

const ContactPage = () => {
  const [nom, setNom] = useState("");
  const [nomError, setNomError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  async function onClick() {
    let hasError = false;
    if (!nom) {
      setNomError("Champ requis");
      hasError = true;
    }
    if (!email) {
      setEmailError("Champ requis");
      hasError = true;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("E-mail invalide  ");
    }

    if (!message) {
      setMessageError("Champ requis");
      hasError = true;
    }
    if (hasError) {
      return;
    }

    setLoading(true);

    const { error } = await supabase.functions.invoke(
      "forward-contact-site-web",
      {
        body: {
          nom,
          email,
          message,
        },
      }
    );

    if (error) {
      setError(error.message);
    } else {
      setNom("");
      setEmail("");
      setMessage("");
      setError(null);
      setSuccess(true);
    }
    setLoading(false);
  }

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
          {success ? (
            <div className="my-10">
              <h1>MERCI POUR VOTRE MESSAGE</h1>
              <div>
                Nous répondrons à votre demande dans les meilleurs délais.
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <div>
                <label htmlFor="nom" className="block text-xl decima-regular">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  className="border border-2 border-green-bottle w-full mt-2"
                  value={nom}
                  onChange={(e) => {
                    setNom(e.target.value);
                    setNomError(null);
                  }}
                />
                {nomError && (
                  <div className="text-red-700 text-xl">{nomError}</div>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="email" className="block text-xl decima-regular">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border border-2 border-green-bottle w-full mt-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(null);
                  }}
                />
                {emailError && (
                  <div className="text-red-700 text-xl">{emailError}</div>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block  text-xl decima-regular"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  className="border border-2 border-green-bottle w-full h-52 mt-2"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageError(null);
                  }}
                />
                {messageError && (
                  <div className="text-red-700 text-xl">{messageError}</div>
                )}
              </div>

              <button
                className="my-6 button"
                onClick={onClick}
                disabled={loading}
              >
                <div className="text-xl">ENVOYER</div>
              </button>

              {error && <div>{error}</div>}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
