import { motion } from "framer-motion";
import styles from "./card.module.css";

const Card = ({ name, imgSrc, exp }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={imgSrc} alt="" />
      </div>
      <div className={styles.txtContaner}>
        <h3> Name : {name}</h3>
        <p>
          Experience : <span className={styles.exp}>{exp}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
