import React, { useState } from "react";
import styles from "../ProjectBox/ProjectBox.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectBox({ data }) {
  const [expanded, setExpanded] = useState({});

  const truncateWords = (text, wordLimit, showFull) => {
    if (showFull) return text;
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { image, title, link, text, id, techStack } = data;

  return (
    <div className={styles.projectBox}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.projectData}>
        <h1>{title}</h1>
        <div className={styles.carouselDiv}>
          <h4>DESCRIPTION</h4>
          <button onClick={() => toggleExpand(id)} className={styles.expandBtn}>
            {expanded[id] ? (
              <>
                <ChevronUp size={14} /> Less
              </>
            ) : (
              <>
                <ChevronDown size={14} /> More
              </>
            )}
          </button>
        </div>
        <p className={!expanded[id] ? styles.collapsed : ""}>
          {truncateWords(text, 25, expanded[id])}
        </p>
        <h4>TECH STACK</h4>
        <div className={styles.techBox}>
          {techStack &&
            techStack.map((tech, idx) => (
              <p key={idx}>{tech}</p>
            ))}
        </div>
        <a target="_blank" href={link}>
          <button className={styles.demoBtn}>Live Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
