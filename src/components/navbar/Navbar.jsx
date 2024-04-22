import { useState } from "react";
import closeMenu from "../../assets/navbar/closeIcon.png";
import menu from "../../assets/navbar/menuIcon.png";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/#home" className={styles.header}>
        {" "}
        Portfoilo
      </a>
      <div className={styles.menu}>
        <img
          onClick={() => setOpen((prev) => !prev)}
          src={open ? closeMenu : menu}
          className={styles.menuBTN}
        />
        <ul
          className={`${styles.menuItems} ${open && styles.open}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#experience">Experience</a>
          </li>
          <li>
            {" "}
            <a href="#project">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
