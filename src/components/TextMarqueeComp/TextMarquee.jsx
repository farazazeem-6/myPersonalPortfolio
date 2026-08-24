import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import styles from "../../components/TextMarqueeComp/TextMarquee.module.css";

function ScrollDirectionMarquee() {
  const [direction, setDirection] = useState("left");
  const [lastScroll, setLastScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setDirection("left"); // scrolling down
      } else {
        setDirection("right"); // scrolling up
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const speed = isMobile ? 60 : 100;

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeInner}>
        <Marquee direction={direction} speed={speed}>
          REACT JS | NEXT JS | TYPESCRIPT |
        </Marquee>
        <Marquee direction={direction === "left" ? "right" : "left"} speed={speed}>
          REACT JS | NEXT JS | TYPESCRIPT |
        </Marquee>
      </div>
    </div>
  );
}

export default ScrollDirectionMarquee;
