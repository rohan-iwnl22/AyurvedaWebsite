import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './FooterSection.module.css';

export default function BranchCard({ name, address, phone, email, mapUrl }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.branchName}>{name}</h3>
      <p className={styles.branchDetails}>{address}</p>
      
      <div className={styles.branchContact}>
        <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
          <FaPhoneAlt size={12} />
          <span>{phone}</span>
        </a>
        <a href={`mailto:${email}`} className={styles.contactLink}>
          <FaEnvelope size={12} />
          <span>{email}</span>
        </a>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mapBtn}
      >
        <FaMapMarkerAlt size={12} />
        <span>Directions</span>
      </a>
    </div>
  );
}
