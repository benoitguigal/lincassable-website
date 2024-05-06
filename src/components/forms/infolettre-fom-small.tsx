import React, { FormEvent, useEffect, useState } from "react";
import { decimaRegular, green, grey, lightGrey } from "../../styles/theme";
import { Button, ConfigProvider, Input } from "antd";

type CustomMailChimpFormProps = {
  status: string;
  message: string;
  subscribe: (fields: any) => any;
};

const InfolettreFormSmall: React.FC<CustomMailChimpFormProps> = ({
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
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: lightGrey,
            colorBorder: lightGrey,
            activeBorderColor: lightGrey,
            hoverBorderColor: lightGrey,
            colorText: lightGrey,
          },
          Button: {
            defaultColor: lightGrey,
            defaultBorderColor: lightGrey,
            defaultActiveColor: lightGrey,
            defaultHoverBorderColor: lightGrey,
            fontFamily: "Decima-Regular",
          },
        },
      }}
    >
      <form
        className="w-full"
        name="infolettre"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mt-2">
          <label htmlFor="email" style={{ ...decimaRegular }} className="block">
            E-mail *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            size="small"
            className="w-56"
            style={{ backgroundColor: green }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label
            style={{ ...decimaRegular }}
            htmlFor="prenom"
            className="block decima-regular"
          >
            Prénom *
          </label>
          <Input
            id="prenom"
            type="text"
            name="prenom"
            required
            size="small"
            className="w-56"
            value={prenom}
            style={{ backgroundColor: green }}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="nom" style={{ ...decimaRegular }} className="block">
            Nom *
          </label>
          <Input
            id="nom"
            type="text"
            name="nom"
            required
            size="small"
            className="w-56"
            value={nom}
            style={{ backgroundColor: green }}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <label
            htmlFor="structure"
            style={{ ...decimaRegular }}
            className="block"
          >
            Structure
          </label>
          <Input
            id="structure"
            type="text"
            name="structure"
            required
            size="small"
            className="w-56"
            value={structure}
            style={{ backgroundColor: green }}
            onChange={(e) => setStructure(e.target.value)}
          />
        </div>

        <div className="mt-4 w-56">
          {status === "sending" && <div>Envoi en cours...</div>}
          {status === "error" && (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {status === "success" && (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
          <div className="w-full flex mt-2">
            <Button htmlType="submit" className="decima-bold" size="large">
              <span className="uppercase">S'abonner</span>
            </Button>
          </div>
        </div>
      </form>
    </ConfigProvider>
  );
};

export default InfolettreFormSmall;
