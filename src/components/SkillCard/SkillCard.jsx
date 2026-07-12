import React, { useState } from "react";
import styles from "../SkillCard/SkillCard.module.css";

function SkillCard({ imgSrc, text, index = 0, progress }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={styles.SkillCardWrapper}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={styles.SkillCardContainer}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div className={styles.cardFront}>
          <div className={styles.skillIcon}>
            <img src={imgSrc} alt={text} />
          </div>
          <div className={styles.skillName}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
