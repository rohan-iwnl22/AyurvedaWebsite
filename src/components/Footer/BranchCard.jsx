// BranchCard.jsx
import styles from "./FooterSection.module.css";

export default function BranchCard({
  name,
  address,
  phone,
  email,
  mapUrl,
  isMainBranch,
}) {
  return (
    <div
      className={`${styles.card} ${isMainBranch ? styles.mainBranchCard : ""}`}
    >
      {isMainBranch && (
        <div className={styles.featuredBadge}>
          <span className={styles.featuredIcon}>⭐</span>
          MAIN CENTER
        </div>
      )}
      <h3 className={styles.branchName}>{name}</h3>
      <div className={styles.branchDetails}>
        <p>{address}</p>
      </div>
      <div className={styles.branchContact}>
        <a href={`tel:${phone}`} className={styles.contactLink}>
          📞 {phone}
        </a>
        <a href={`mailto:${email}`} className={styles.contactLink}>
          ✉️ {email}
        </a>
      </div>
      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapBtn}
        >
          🗺️ Get Directions
        </a>
      )}
    </div>
  );
}
