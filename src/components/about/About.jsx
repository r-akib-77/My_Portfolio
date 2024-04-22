import { motion } from "framer-motion";
import lapotop from "../../assets/laptop.png";
import server from "../../assets/server.png";
import frontEnd from "../../assets/ui.png";
import styles from "./about.module.css";
const about = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={lapotop} alt="picture" />

        <ul className={styles.items}>
          <motion.li
            initial={{ x: 560 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 5000 }}
            className={styles.item}
          >
            <img src={frontEnd} alt="frontend" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}> Frontend Developer</h3>
              <p className={styles.para}>
                Iam a Frontend Developer with a lot of Experience and i can make
                your Website faster and responsive for all devices and make a
                lot of Animations.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 5000 }}
            className={styles.item}
          >
            <img src={server} alt="server" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Backend Developer</h3>
              <p className={styles.para}>
                {" "}
                Iam a Backend Developer with a Good Experience and I can make
                your API faster and also make caching API.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default about;
