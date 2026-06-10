import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../FormComponent/Form.module.css";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hi1re2n", // EmailJS Service ID
        "template_4l20rkn", // EmailJS Template ID
        form.current,
        "jnwXsPB_umqpi1SeY" // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setResult("Message sent successfully!");
          setIsSending(false);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
            setResult("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setResult("Failed to send message, please try again.");
          setIsSending(false);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
            setResult("");
          }, 3000);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Send Message</h2>
        <p className={styles.subtitle}>
          Have a project in mind? Let's discuss it!
        </p>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.iconPlaceholder}>
              <i className="ri-user-3-line"></i>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.iconPlaceholder}>
              <i className="ri-mail-line"></i>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.iconPlaceholder}>
              <i className="ri-chat-4-line"></i>
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
              rows="5"
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSending}
          >
            <span className={styles.buttonDot}></span>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {showToast && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: result.includes('✅') ? '#e8f5e8' : '#ffeaea',
            color: result.includes('✅') ? '#2e7d32' : '#c62828',
            textAlign: 'center'
          }}>
            {result}
          </div>
        )}
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.title}>Contact Information</h2>
        <p className={styles.subtitle}>
          Feel free to reach out through any of these channels
        </p>

        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="ri-map-pin-2-line"></i>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Location</div>
              <div className={styles.contactValue}>Lahore, Punjab Pakistan</div>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="ri-phone-line"></i>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Phone</div>
              <div className={styles.contactValue}>+92 309 84 954 78</div>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="ri-mail-line"></i>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Email</div>
              <div className={styles.contactValue}>farazazeem66@gmail.com</div>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <i className="ri-linkedin-fill"></i>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faraz-azeem-45207727b/"
            >
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>LinkedIn</div>
                <div className={styles.contactValue}>Faraz Azeem</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;