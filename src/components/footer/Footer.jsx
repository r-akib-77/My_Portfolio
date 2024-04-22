import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FaFacebook className={styles.icon} />
        <FaInstagramSquare className={styles.icon} />
        <FaGithub className={styles.icon} />
        <FaYoutube className={styles.icon} />
        <SiGmail className={styles.icon} />
      </div>
      <div className={styles.copyRight}>@copyright by rakib</div>
    </div>
  );
};

export default Footer;
