import { Marquee } from "../../components/ui/marquee";
import styles from "../ReviewCard/ReviewCard.module.css";
import starImg from "../../../public/star.png";
import t1 from "../../../public/testimonial-1.avif";
import t2 from "../../../public/testimonial-2.avif";
import t3 from "../../../public/testimonial-3.avif";
import t4 from "../../../public/testimonial-4.jpeg";
import t5 from "../../../public/testimonial-5.jpeg";
import t6 from "../../../public/testimonial-6.jpg";
import { useSelector } from "react-redux";

const reviews = [
  {
    name: "Usman Abbas",
    username: "@usmanabbas",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: t1,
  },
  {
    name: "Bilal Khawaja",
    username: "@nothing.",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: t2,
  },
  {
    name: "Ali Akbar",
    username: "@aliM",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: t3,
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "Fast and responsive UI.Love your work.Thanks.",
    img: t4,
  },
  {
    name: "Saira",
    username: "@sarii",
    body: "I am happy to work with you Faraz. This is amazing. I love it.",
    img: t5,
  },
  {
    name: "Jammy",
    username: "@james",
    body: "Very fast and beautiful UI design.Amazing work!",
    img: t6,
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
