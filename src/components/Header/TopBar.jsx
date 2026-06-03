import { FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`${styles.topBarContainer} container`}>
        <div className={styles.topBarLeft}>
          <a href="tel:+919876543210" className={styles.topBarLink}>
            <FaPhoneAlt size={12} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@ayurvedademo.com" className={styles.topBarLink}>
            <FaEnvelope size={12} />
            <span>info@ayurvedademo.com</span>
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
