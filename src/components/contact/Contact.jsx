import arrow from "../../assets/arrow.png";
import img from "../../assets/contact.png";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <form className={styles.left}>
        <div className={styles.leftTitle}>
          <h2>Contact Me</h2>
          <hr />
        </div>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.contactInput}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.contactInput}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.contactInput}
          required
        ></textarea>
        <button type="submit">
          Send
          <img src={arrow} />
        </button>
      </form>
      <div className={styles.right}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Contact;
