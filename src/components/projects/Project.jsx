import pic1 from "../../assets/project1.png";
import pic2 from "../../assets/project2.png";
import pic3 from "../../assets/project3.jpg";
import styles from "./project.module.css";
const Project = () => {
  return (
    <div id="project" className={styles.container}>
      <div className={styles.title}>
        <h2>My Projects</h2>
        <hr />
      </div>
      <div className={styles.projects}>
        <div className={styles.pic}>
          <img src={pic2} alt="" />
          <h2>Food Service</h2>
          <p>
            {" "}
            A food service app that delevers <br /> foods within 30/40 min at
            any cost.{" "}
          </p>
        </div>
        <div>
          <img src={pic1} alt="" />
          <h2>Mobile E-Learning</h2>
          <p>
            Mobile E-Learning app that helps <br /> students for fast and easy
            learning .
          </p>
        </div>
        <div>
          <img src={pic3} alt="" />
          <h2>Fashion On </h2>
          <p>
            An online clothing brand that make <br /> good quality clothes and
            designs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
