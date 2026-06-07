import { FaFacebookF, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
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
          <a href="#" className={styles.topBarLink}>
            <FaEnvelope size={12} />
            <span>poojapatil0792@gmail.com</span>
            <span>dr.kiraningle@gmail.com </span>
            <span>ayurmanayurved@gmail.com</span>
          </a>
        </div>
        <div className={styles.topBarRight}>
          <a
            href="https://facebook.com/ayurvedademo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topBarLink}
            aria-label="Facebook"
          >
            <FaFacebookF size={12} />
          </a>
          <a href="#shop" className={styles.topBarBtn}>
            Shop Now
          </a>
          <a href="#employee-login" className={styles.topBarLink}>
            Employee Login
          </a>
        </div>
      </div>
    </div>
  );
}
