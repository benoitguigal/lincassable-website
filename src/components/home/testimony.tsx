import React from "react";
import Section from "../section";
import LudovicPoster from "../../images/home/videos/ludovic.png";
import NathaliePoster from "../../images/home/videos/nathalie.png";
import SalemPoster from "../../images/home/videos/salem.png";

const Testimony: React.FC = () => {
  return (
    <Section>
      <h1>ILS PARLENT DE LEUR ENGAGEMENT</h1>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 space-y-6 lg:space-y-0 mt-12">
        <div>
          <video preload="auto" poster={LudovicPoster} controls>
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/ludovic_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video preload="auto" poster={NathaliePoster} controls>
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/nathalie_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video preload="auto" poster={SalemPoster} controls>
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
