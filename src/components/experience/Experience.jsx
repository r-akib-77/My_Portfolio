import css from "../../assets/css.png";
import exp from "../../assets/exp.png";
import figma from "../../assets/figma.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import Card from "./card/Card";
import styles from "./exp.module.css";

const Experience = () => {
  return (
    <div id="experience" className={styles.container}>
      <div className={styles.cardContainer}>
        <h1 className={styles.header}> Experience </h1>
        <div className={styles.cards}>
          <Card name={"React"} imgSrc={react} exp={"1.4 years"} />
          <Card name={"Redux"} imgSrc={redux} exp={"1 years"} />
          <Card name={"Figma"} imgSrc={figma} exp={"1.1 years"} />
          <Card name={"Html"} imgSrc={html} exp={"2 years"} />
          <Card name={"CSS"} imgSrc={css} exp={"2 years"} />
          <Card name={"JavaScript"} imgSrc={js} exp={"1.7 years"} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={exp} alt="" />
      </div>
    </div>
  );
};

export default Experience;
