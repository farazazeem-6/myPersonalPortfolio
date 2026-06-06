import { Marquee } from "../../components/ui/marquee";
import styles from "../ReviewCard/ReviewCard.module.css";
import starImg from "../../../public/star.png";
import { useSelector } from "react-redux";

const reviews = [
  {
    name: "Usman Abbas",
    username: "@usmanabbas",
    body: "Working with Faraz has been an exceptional experience.",
    img: "./testimonial-1.avif",
  },
  {
    name: "Bilal Khawaja",
    username: "@nothing.",
    body: "Faraz is an incredibly talented developer with a strong grasp of modern frontend technologies. His work on React and Next.js projects has been outstanding, and his problem-solving skills are exceptional.",
    img: "./testimonial-2.avif",
  },
  {
    name: "Ali Akbar",
    username: "@aliM",
    body: "I've collaborated with Faraz on several projects, and his performance has consistently exceeded expectations. He has excellent command over TypeScript, state management, and CSS frameworks.",
    img: "./testimonial-3.avif",
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "Faraz's UI/UX implementation is phenomenal. He creates interfaces that are not just visually stunning but also incredibly responsive and performant.",
    img: "./testimonial-4.jpeg",
  },
  {
    name: "Saira",
    username: "@sarii",
    body: "It's been a pleasure collaborating with Faraz on multiple frontend projects. His dedication to delivering pixel-perfect designs and his meticulous approach to testing ensure that every feature works flawlessly.",
    img: "./testimonial-5.jpeg",
  },
  {
    name: "Jammy",
    username: "@james",
    body: "Faraz is a standout developer with impressive skills in modern web development. His performance optimization techniques and understanding of component architecture are outstanding.",
    img: "./testimonial-6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className={styles.reviewCardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.cardHeaderText}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardUserName}>{username}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
        </div>
        <div className={styles.cardDetail}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />

      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />
    </div>
  );
}
