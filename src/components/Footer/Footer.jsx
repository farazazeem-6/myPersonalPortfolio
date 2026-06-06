import React from "react";
import styles from "../Footer/Footer.module.css";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../../public/IMG_8265.jpg";
import {
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
  HeartIcon,
  TikTokIcon,
} from "../ui/icons";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
              <img src={HeroImg} alt="" />
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Faraz Azeem</h2>
              <p className={styles.profileTitle}>Frontend Developer</p>
            </div>
          </div>
          <p className={styles.profileDescription}>
            Passionate about creating innovative digital solutions and bringing
            ideas to life through code. Let's build something amazing together.
          </p>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href="https://github.com/farazazeem-6"
              className={`${styles.socialIcon} ${styles.githubIcon}`}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/faraz-azeem-45207727b/"
              className={`${styles.socialIcon} ${styles.linkedinIcon}`}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@farazdhillon06"
              className={`${styles.socialIcon} ${styles.tiktokIcon}`}
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100059462846704"
              className={`${styles.socialIcon} ${styles.facebookIcon}`}
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              target="_blank"
              href="https://wa.me/923098495478"
              className={`${styles.socialIcon} ${styles.whatsappIcon}`}
              aria-label="WhatsApp"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li onClick={() => navigate("/")} className={styles.link}>
              Home
            </li>
            <li onClick={() => navigate("/skills")} className={styles.link}>
              Skills
            </li>
            <li onClick={() => navigate("/projects")} className={styles.link}>
              Projects
            </li>
            <li
              onClick={() => navigate("/testimonials")}
              className={styles.link}
            >
              Testimonials
            </li>
            <li onClick={() => navigate("/contact")} className={styles.link}>
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contact Info</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MailIcon />
                </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>farazazeem66@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <PhoneIcon />
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactValue}>+92 309 84 954 78</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                {/* simple map pin svg inline */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>Location</p>
                <p className={styles.contactValue}>Lahore, Punjab Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact-cta" className={styles.ctaSection}>
          <h3 className={styles.sectionTitle}>Let's Work Together</h3>
          <p className={styles.ctaDescription}>
            Ready to bring your ideas to life? Let's discuss your next project
            and create something extraordinary.
          </p>
          <button className={styles.ctaButton}>Start a Project</button>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <span className={styles.backToTopIcon}>↑</span>
            Back to Top
          </button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.right}>
          <p>© 2025 Muhammad Faraz</p>{" "}
          <p className={styles.hide}>• All Rights Reserved</p>
            <p>
            • Made with <span style={{ marginLeft: 6 }}><HeartIcon /></span> in Pakistan.
          </p>
        </div>
        <div className={styles.left}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
