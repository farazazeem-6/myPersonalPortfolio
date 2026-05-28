import styles from "../Resume/Resume.module.css";
import { RevealOnScroll } from "../Skills/Skill";
import ResumeImg from "../../../public/Faraz_Azeem_Resume.pdf";

const handleEmailClick = () => {
  window.location.href = "mailto:farazazeem66@gmail.com";
};
function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resume_top}>
        <RevealOnScroll>
          <h1 className={styles.skillHeading}>
            My <span className={styles.gradText}>Resume</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className={styles.skillText}>
            <p>
              Download my resume or view it online to learn more about my
              professional experience, skills, and educational background.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.resumeBtns}>
            <a href={ResumeImg} download={ResumeImg}>
              <button className={`${styles.resumeBtn} ${styles.downloadBtn}`}>
                <i class="ri-download-2-line"></i>Download Resume
              </button>
            </a>
            <a href={ResumeImg} target="_blank">
              <button className={`${styles.resumeBtn} ${styles.newTabBtn}`}>
                <i class="ri-share-box-line"></i>Open in New Tab
              </button>
            </a>
          </div>
        </RevealOnScroll>
      </div>
      <div className={styles.resumedown}>
        <RevealOnScroll>
          <h1 className={styles.skillHeading}>
            Education & <span className={styles.gradText}>Journey</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className={styles.skillText}>
            <p>
              My educational background and professional development timeline
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <i class="ri-graduation-cap-line"></i>
              <p>Degree</p>
              <p>Bachelor's in Computer Science</p>
            </div>
            <div className={styles.box}>
              <i class="ri-book-open-line"></i>
              <p>University</p>
              <p>GCUF</p>
            </div>
            <div className={styles.box}>
              <i class="ri-award-line"></i>
              <p>Year</p>
              <p>2022-2026</p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.connectBox}>
            <div className={styles.connectBoxdata}>
              <p>Interested in working together?</p>
              <button
                onClick={handleEmailClick}
                className={`${styles.resumeBtn} ${styles.connectBtn}`}
              >
                Lets's Connect <i class="ri-share-box-line"></i>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default Resume;
