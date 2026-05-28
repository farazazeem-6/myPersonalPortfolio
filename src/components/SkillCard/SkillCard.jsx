import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../SkillCard/SkillCard.module.css";

function SkillCard({ imgSrc, text, index = 0, progress }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={styles.SkillCardWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 1 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={styles.SkillCardContainer}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
      </motion.div>
    </motion.div>
  );
}

export default SkillCard;
