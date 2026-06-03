import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styles from './TreatmentsSection.module.css';

export default function TreatmentCard({ image, title, description, path }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageCircle}>
        <img src={image} alt={title} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
      <Link to={path} className={styles.cardLink}>
        <span>Learn More</span>
        <FaArrowRight size={10} />
      </Link>
    </div>
  );
}
