import { IconCloud } from "../ui/icon-cloud";
import styles from "./TechStackGlobe.module.css";

import reactImg from "../../utils/images/react.png";
import tsImg from "../../utils/images/typescript.png";
import nodeImg from "../../utils/images/nodejs.png";
import nextImg from "../../utils/images/nextdotjs.svg";
import reduxImg from "../../utils/images/redux.png";
import sassImg from "../../utils/images/sass.png";
import tailwindImg from "../../utils/images/tailwindcss.png";
import postmanImg from "../../utils/images/postman-.png";
import figmaImg from "../../utils/images/figma.png";

function TechStackGlobe() {
  // Use local images (bundled) so icons work offline
  const images = [
    reactImg,
    tsImg,
    nextImg,
    nodeImg,
    reduxImg,
    tailwindImg,
    sassImg,
    postmanImg,
    figmaImg,
  ];

  return (
    <div className={styles.globeContainer}>
      <IconCloud images={images} />
    </div>
  );
}

export default TechStackGlobe;
