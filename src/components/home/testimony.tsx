import React from "react";
import Section from "../section";
import LudovicPoster from "../../images/home/videos/ludovic.png";
import NathaliePoster from "../../images/home/videos/nathalie.png";
import SalemPoster from "../../images/home/videos/salem.png";
import classNames from "classnames";
import { titleMargin } from "../../styles/theme";

const videoClassName = classNames(["h-96", "md:h-auto"]);

const Testimony: React.FC = () => {
  return (
    <Section>
      <h2 style={{ ...titleMargin }} className="text-center">
        ILS PARLENT DE LEUR ENGAGEMENT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 lg:gap-x-8 xl:gap-x-12 gap-y-10">
        <div className="m-auto md:m-0">
          <video
            className={videoClassName}
            preload="auto"
            poster={LudovicPoster}
            controls
          >
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/ludovic_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="m-auto lg:m-0">
          <video
            className={videoClassName}
            preload="auto"
            poster={NathaliePoster}
            controls
          >
            <source
              src="https://lincassable-website.s3.fr-par.scw.cloud/videos/nathalie_compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="m-auto lg:m-0">
          <video
            className={videoClassName}
            preload="auto"
            poster={SalemPoster}
            controls
          >
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
