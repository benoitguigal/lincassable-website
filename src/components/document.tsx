import * as React from "react";

type DocumentProps = {
  children: React.ReactNode;
};

const Document = ({ children }: DocumentProps) => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Document;
