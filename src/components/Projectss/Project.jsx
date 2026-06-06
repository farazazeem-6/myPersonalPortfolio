import styles from "../../components/Projectss/Project.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import project1 from "../../../public/project119.png";
import project2 from "../../../public/project124.png";
import project3 from "../../../public/petConnect.png";
import ProjectBox from "../ProjectBox/ProjectBox";
import { ArrowRightIcon } from "../ui/icons";
import { TECH_STACKS } from "../../constant";

const text1 =
  "A full-stack application for pet rescues. Includes user listings for animal donations, a searchable adoption database, and a real-time lost-and-found reporting system and AI ChatBot Module.";
const text2 =
  " Baloach Travels is a modern and responsive bus booking website that allows users to search routes, compare prices, select seats, and book tickets easily. Built with HTML, CSS, and JavaScript (React/Firebase if you’re using them), it offers a smooth multi-step booking process, user authentication, and a clean, user-friendly interface for travelers.";

const projects = [
  {
    id: 1,
    title: "Pet Connect ( A Full Stack Web Application)",
    text: text1,
    image: project3,
    link: "https://pet-connect-fyp.vercel.app/",
    techStack: TECH_STACKS.petConnect,
  },
  {
    id: 2,
    title: "Baloach Travels (PWA)",
    text: text2,
    image: project2,
    link: "https://test-website-deployment.vercel.app/",
    techStack: TECH_STACKS.baloachTravels,
  },
];

function Project() {
  return (
    <div className={styles.projectsOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.projectHeading}>
          Featured <span className={styles.gradText}> Projects</span>
        </h1>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className={styles.projectText}>
          <p>
            Built from scratch—research, problem-solving, and AI assistance. No
            tutorials, just pure innovation and creativity.
          </p>
          <AnimatedLine className={styles.skillTextLine} />
        </div>
      </RevealOnScroll>
      <div className={styles.projectBoxesContainer}>
        {projects.map((proj) => (
          <ProjectBox key={proj.id} data={proj} />
        ))}
      </div>
      <div className={styles.gitrepo}>
        <a target="_blank" href="https://github.com/farazazeem-6">
          <p>
            View More Projects on GitHub
            <ArrowRightIcon />
          </p>
        </a>
      </div>
    </div>
  );
}

export default Project;
