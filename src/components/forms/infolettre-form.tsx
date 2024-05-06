import React, { FormEvent, useEffect, useState } from "react";
import { decimaRegular } from "../../styles/theme";
import { Button, Input } from "antd";

type CustomMailChimpFormProps = {
  status: string;
  message: string;
  subscribe: (fields: any) => any;
};

const InfolettreForm: React.FC<CustomMailChimpFormProps> = ({
  status,
  message,
  subscribe,
}) => {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [structure, setStructure] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      email.length > 0 &&
      nom.length > 0 &&
      prenom.length > 0 &&
      structure.length > 0
    ) {
      subscribe({
        EMAIL: email,
        FNAME: prenom,
        LNAME: nom,
        MMERGE6: structure,
      });
    }
  };

  useEffect(() => {
    if (status === "success") {
      // clean fields
      setEmail("");
      setNom("");
      setPrenom("");
      setStructure("");
    }
  }, [status]);

  return (
    <form
      className="w-full lg:w-1/2 m-auto"
      name="infolettre"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label
          htmlFor="email"
          style={{ ...decimaRegular }}
          className="block text-xl"
        >
          E-mail *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          size="large"
          className="mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <label
          style={{ ...decimaRegular }}
          htmlFor="prenom"
          className="block text-xl decima-regular"
        >
          Prénom *
        </label>
        <Input
          id="prenom"
          type="text"
          name="prenom"
          required
          size="large"
          className="mt-2"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="nom"
          style={{ ...decimaRegular }}
          className="block text-xl"
        >
          Nom *
        </label>
        <Input
          id="nom"
          type="text"
          name="nom"
          required
          size="large"
          className="mt-2"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="structure"
          style={{ ...decimaRegular }}
          className="block text-xl"
        >
          Structure
        </label>
        <Input
          id="structure"
          type="text"
          name="structure"
          required
          size="large"
          className="mt-2"
          value={structure}
          onChange={(e) => setStructure(e.target.value)}
        />
      </div>

      <div className="mt-10">
        {status === "sending" && (
          <div className="text-center">Envoi en cours...</div>
        )}
        {status === "error" && (
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="w-full flex mt-3">
          <Button htmlType="submit" className="m-auto decima-bold" size="large">
            <span className="text-xl">S'abonner</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InfolettreForm;
