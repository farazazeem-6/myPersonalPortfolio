import React from "react";
import styles from "../WhatsappButton/WhatsappBtn.module.css";
import { WhatsappIcon } from "../ui/icons";

const handleWhatsAppClick = () => {
  window.open("https://wa.me/923098495478", "_blank");
};
const WhatsappBtn = () => {
  return (
    <>
      <button onClick={handleWhatsAppClick} className={styles.scrollToTop} aria-label="WhatsApp">
        <WhatsappIcon />
      </button>
    </>
  );
};

export default WhatsappBtn;
