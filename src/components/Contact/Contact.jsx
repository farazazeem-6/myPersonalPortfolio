import React from "react";
import styles from "../../components/Contact/Contact.module.css";
import ContactSection from "../FormComponent/Form";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import PageWrapper from "../PageWrapper/PageWrapper";
import CTASection from "../CTASection/CTA";

function Contact() {
  return (
    <PageWrapper>
      <div className={styles.contactContainer}>
        <div className={styles.contactTop}>
          <RevealOnScroll>
            <h1 className={styles.testHeading}>
              Get In <span className={styles.testText}> Touch</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className={styles.testInfo}>
              <p>
                Ready to start your next project? Let's discuss how we can bring
                your ideas to life. I'm here to help you create something
                amazing.
              </p>
              <AnimatedLine className={styles.testTextLine} />
            </div>
          </RevealOnScroll>
        </div>
        <div className={styles.contactChildContainer}>
          <ContactSection />
        </div>
        <div>
          <CTASection />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
