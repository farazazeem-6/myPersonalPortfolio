import React from "react";
import styles from "../About/About.module.css";
import TechStackGlobe from "../TechStackGlobe/TechStackGlobe";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { TextRevealScroll } from "../TextReveal/TextReveal";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeading}>
        <Root>
          <Divider
            sx={{
              color: "#bfc4ca",
              borderColor: "#555",
              "&::before, &::after": { borderColor: "#333" },
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <p className={styles.journeyText}>About My Journey</p>
          </Divider>
        </Root>
      </div>

      <div className={styles.aboutData}>
        <div className={styles.globe}>
          <TechStackGlobe />
        </div>
        <div className={styles.aboutText}>
          <div>
            <TextRevealScroll
              text="My Next Mission is to learn WEB 3.0 and React Native for building mobile apps."
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
