import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`${styles.topBarContainer} container`}>
        <div className={styles.topBarLeft}>
          <a href="#" className={styles.topBarLink}>
            <FaPhoneAlt size={12} />
            <span>+91 93707 71021</span>
            <span>+91 89762 97579</span>
          </a>
          <a
            href="mailto:ayurmanayurved@gmail.com"
            className={styles.topBarLink}
          >
            <FaEnvelope size={12} />
            <span>ayurmanayurved@gmail.com</span>
          </a>
        </div>
        <div className={styles.topBarRight}>
          <a
            href="https://www.instagram.com/ayurmana_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topBarLink}
            aria-label="Facebook"
          >
            <FaInstagram size={12} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topBarLink}
            aria-label="Facebook"
          >
            <FaFacebook size={12} />
          </a>
          <Link to="/products" className={styles.topBarBtn}>
            Our Products
          </Link>
          {/* <a href="#employee-login" className={styles.topBarLink}>
            Employee Login
          </a> */}
        </div>
      </div>
    </div>
  );
}
