import { toggleTheme } from "../../../store/themeSlice";
import styles from "../../Header/ThemeButton/ThemeButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { SunIcon, MoonIcon } from "../../ui/icons";

function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div onClick={() => dispatch(toggleTheme())} className={styles.toggleBtn}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}

export default ThemeButton;
