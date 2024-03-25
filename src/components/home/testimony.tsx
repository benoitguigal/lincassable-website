import React from "react";
import Section from "../section";

const Testimony: React.FC = () => {
  return (
    <Section>
      <h1>ILS PARLENT DE LEUR ENGAGEMENT</h1>
      <div className="grid grid-cols-3 space-x-6 mt-12">
        <video preload="false" controls>
          <source
            src="https://lincassable-website.s3.fr-par.scw.cloud/videos/ludovic_compressed.mp4"
            type="video/mp4"
          />
        </video>

        <div>
          <video preload="false" controls>
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/nathalie_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video preload="false" controls>
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/salem_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default Testimony;
