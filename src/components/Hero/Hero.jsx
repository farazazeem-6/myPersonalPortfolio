import { useEffect, useState, useRef } from "react";
import styles from "../../components/Hero/Hero.module.css";
import { cn } from "../../lib/utils";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../../public/IMG_8265.jpg";
import { motion } from "framer-motion";
import { TEXTS } from "../../constant/string";

function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    //here in hero container ,there was a class name 'h-screen'.I remove it to fix too much margin bottom of hero section  issue.
    <div className={`relative  w-full ${styles.heroContainer}`}>
      <div
        className={cn(
          "absolute inset-0",
          "[bg-size:20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(rgba(212,212,212,0.2)_1px,transparent_.8px)]",
        )}
      />

      {/* add the components here... */}
      <div className={`relative z-10 ${styles.heroInnerContainer}`}>
        <div className={styles.heroTextCont}>
          <h1>Faraz Azeem</h1>
          <h3>
            I'm
            <AnimatePresence mode="wait">
              <motion.span
                className={styles.motionText}
                key={TEXTS[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {TEXTS[index]}
              </motion.span>
            </AnimatePresence>
          </h3>
          <p className={styles.roleText}>
            🚀 Front End Developer with{" "}
            <span style={{ fontWeight: 700, marginRight: "5px" }}>
              9 months of learning and 6 month of working
            </span>
            experience.
          </p>
          <p className={styles.studyInfo}>
            🎓 Enrolled in
            <span style={{ fontWeight: 700, marginLeft: "5px" }}>
              BS Computer Science (2022-2026)
            </span>
            at GCUF University, Faisalabad.
          </p>
          <p>💻 Experienced in</p>
          <p style={{ fontWeight: 700 }} className={styles.skillsText}>
            Next JS, TypeScript, React, Redux Toolkit, GSAP, Tailwind CSS,
            BootStrap, React Hook Form, and Framer Motion.
          </p>
          <button
            onClick={() => navigate("/resume")}
            className={styles.resumeBtn}
            role="button"
          >
            Explore Resume
          </button>
        </div>
        <div className={styles.heroImgCont}>
          <img
            ref={imgRef}
            src={HeroImg}
            alt=""
            onLoad={() => setImageLoaded(true)}
            className={cn(imageLoaded && styles.loaded)}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
