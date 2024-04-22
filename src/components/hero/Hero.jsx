import { motion } from "framer-motion";
import hero from "../../assets/rakib.jpeg";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Hello Iam <b>Rakib</b>
        </h1>
        <p className={styles.desc}>
          Iam a React Developer with a total 1.2 year exprience with React.Reach
          out if you would like to learn more!
        </p>
        <motion.a
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ type: "tween" }}
          className={styles.btn}
          href="#"
        >
          Contact Me
        </motion.a>
      </div>

      <img src={hero} alt="" className={styles.heroImg} />

      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
};

export default Hero;
