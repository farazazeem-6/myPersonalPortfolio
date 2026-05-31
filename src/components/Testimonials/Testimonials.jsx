import React, { useRef, useState } from "react";
import styles from "../../components/Testimonials/Testimonials.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import { MarqueeDemo } from "../ReviewCard/ReviewCard";
const reviews = [
  {
    name: "Usman Abbas",
    username: "@usmanabbas",
    body: "Working with Faraz has been an exceptional experience. His attention to detail in UI design and ability to transform complex requirements into clean, intuitive interfaces is remarkable. He consistently delivers high-quality code that's not only functional but also maintainable. Highly recommended for any frontend development project.",
    img: "https://images.unsplash.com/photo-1644383431542-19f678c3e207?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bilal Khawaja",
    username: "@nothing.",
    body: "Faraz is an incredibly talented developer with a strong grasp of modern frontend technologies. His work on React and Next.js projects has been outstanding, and his problem-solving skills are exceptional. He's proactive, communicative, and always willing to go the extra mile to ensure project success. A true professional.",
    img: "https://images.unsplash.com/photo-1722354980566-ec247cb4f1a8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ali Akbar",
    username: "@aliM",
    body: "I've collaborated with Faraz on several projects, and his performance has consistently exceeded expectations. He has excellent command over TypeScript, state management, and CSS frameworks. What impressed me most is his ability to learn quickly and adapt to new technologies. His code is clean, well-documented, and follows best practices.",
    img: "https://images.unsplash.com/photo-1711045290148-9dc18f7776fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "Faraz's UI/UX implementation is phenomenal. He creates interfaces that are not just visually stunning but also incredibly responsive and performant. His expertise in Tailwind CSS and animation libraries like Framer Motion brings designs to life beautifully. Working on projects with him has been smooth and productive.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmPPoHhb5Hl45zqf2PhZ-GCHRU-fllf-2gkPeLoAan4x85YbsrmXaztU&s",
  },
  {
    name: "Saira",
    username: "@sarii",
    body: "It's been a pleasure collaborating with Faraz on multiple frontend projects. His dedication to delivering pixel-perfect designs and his meticulous approach to testing ensure that every feature works flawlessly. He's not just a developer but a creative problem-solver who brings fresh ideas to the table. Truly exceptional work ethic.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGJtvcEk4Lm5Y52Jk2LG2nRnFQoQjfTDcuL5OeBSsYFXCtoTymuWYc3E&s",
  },
  {
    name: "Jammy",
    username: "@james",
    body: "Faraz is a standout developer with impressive skills in modern web development. His performance optimization techniques and understanding of component architecture are outstanding. He delivers projects on time with clean code and comprehensive documentation. His enthusiasm and professional approach make him a valuable addition to any team.",
    img: "https://avatar.vercel.sh/james",
  },
];

function Testimonials() {
  const scrollToFooterCTA = () => {
    const ctaSection = document.getElementById("contact-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  const [showToast, setShowToast] = useState(false);
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hi1re2n", //  EmailJS Service ID
        "template_4l20rkn", // EmailJS Template ID
        form.current,
        "jnwXsPB_umqpi1SeY", // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setResult("✅ Message sent successfully!");
          setColor("#e8f5e8");
          setIsSending(false);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setResult("❌ Failed to send message, please try again.");
          setColor("#ffeaea");
          setIsSending(false);

          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
      );
  };

  return (
    <div className={styles.testimonialOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.testHeading}>
          Client <span className={styles.testText}> Testimonials</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className={styles.testInfo}>
          <p>
            Don't just take my word for it. Here's what my clients have to say
            about working with me and the results we've achieved together.
          </p>
          <AnimatedLine className={styles.testTextLine} />
        </div>
      </RevealOnScroll>

      <div className={styles.skillCalcs}>
        <RevealOnScroll delay={0.1}>
          <div className={styles.techCalcs}>
            <p className={styles.numberText}>15+</p>
            <p>Happy Clients</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.categoryCalcs}>
            <p className={styles.numberText}>20+</p>
            <p>Projects Completed</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.experienceCalcs}>
            <p className={styles.numberText}>10+</p>
            <p>Positive Reviews</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.projectsCalcs}>
            <p className={styles.numberText}>1+</p>
            <p>Years Experience</p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Testimonials Marquee */}
      <MarqueeDemo />
      <div className={styles.testimonialsFooter}>
        <p>Ready to join these satisfied clients?</p>
        <button onClick={scrollToFooterCTA} className={styles.testimonialbtn}>
          Start Your Project Today
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
