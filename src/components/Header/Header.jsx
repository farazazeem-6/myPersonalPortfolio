import styles from "../../components/Header/Header.module.css";
import NavButton from "./NavButton/NavButton";
import ThemeButton from "./ThemeButton/ThemeButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ImageModal from "../ImageModal/ImageModal";
import { GitHubIcon, LinkedInIcon, TikTokIcon, FacebookIcon, WhatsappIcon, ArrowRightIcon } from "../ui/icons";
import HeroImg from "../../../public/IMG_8265.jpg";



function setRealVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("resize", setRealVh);
window.addEventListener("orientationchange", setRealVh);
setRealVh();

function Header() {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImgModalOpen, setImageModalOpen] = useState(false);

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className={styles.Header}>
        <div>
          <div className={styles.logo}>
            <div className={styles.logoImgCont}>
              <img
                // onClick={() => setImageModalOpen(true)}
                className={styles.logoImg}
                src={HeroImg}
                alt=""
              />
            </div>
            <div className={styles.logoText}>
              <p
                className={styles.firstName}
                // onClick={() => setIsModalOpen(true)}
              >
                Muhammad Faraz
              </p>
              <p className={styles.infoText}>Front end developer</p>
            </div>
          </div>
        </div>
        <div className={styles.fullScreenNav}>
          <NavButton />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <ThemeButton />
          <div className={styles.hamburger}>
            <button onClick={toggleMenu} className={styles.hamburgerBtn}>
              <MenuIcon
                fontSize="inherit"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "22px",
                    md: "26px",
                  },
                  color: "inherit",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* //mobile screen header  */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div>
          <div className={styles.logoSectionCont} style={{}}>
            <div>
              <div className={styles.mobileLogo}>
                <div className={styles.mobileLogoImgCont}>
                  <img
                    className={styles.mobileLogoImg}
                    src={HeroImg}
                    alt=""
                  />
                </div>
                <div className={styles.mobileLogoText}>
                  <p className={styles.mobileFirstName}>Muhammad Faraz </p>
                  <p className={styles.mobileInfoText}>Front end developer</p>
                </div>
              </div>
            </div>
            <button onClick={toggleMenu} className={styles.closeMenuBtn}>
              <CloseIcon
                fontSize="inherit"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "22px",
                    md: "26px",
                  },
                  color: "inherit",
                }}
              />
            </button>
          </div>

          <hr className={styles.horizontalLine} />
          <div className={styles.mobileMenuNavButtons}>
            <ul>
              <NavLink
                to={"/"}
                onClick={(e) => {
                  handleHomeClick(e);
                  toggleMenu();
                }}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/skills"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Skills</li>
              </NavLink>
              <NavLink
                to={"/projects"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Projects</li>
              </NavLink>
              <NavLink
                to={"/testimonials"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Testimonials</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>

          <div className={styles.sideBarFooter}>
          <button
            onClick={() => {
              navigate("/contact");
              toggleMenu();
            }}
            className={styles.getInTouchBtn}
          >
            Get in touch
            <ArrowRightIcon />
          </button>
          <div className={styles.socialIcon}>
            <a target="_blank" href="https://github.com/farazazeem-6" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/faraz-azeem-45207727b/" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@farazdhillon06" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100059462846704" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a target="_blank" href="https://wa.me/923098495478" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} isOpen={isModalOpen} />
      )}
      {isImgModalOpen && <ImageModal setImageModalOpen={setImageModalOpen} />}
    </>
  );
}

export default Header;
