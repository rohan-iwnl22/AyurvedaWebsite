import BranchCard from "./BranchCard";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  const branches = [
    {
      name: "AYURMANA AYURVEDIC CLINIC",
      address:
        "Shop No:2, Mangal murti Residency, MHADA colony road, behind durga Lawns, kaulkhed, Akola",
      phone: "+91 93707 71021 || +91 89762 97579",
      email: "ayurmanayurved@gmail.com",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* NABH Accreditation Banner */}
        {/* <div className={styles.nabhBanner}>
          <div className={styles.nabhBadge}>
            <div className={styles.nabhBadgeText}>
              NABH
              <br />
              ACCREDITED
            </div>
          </div>
          <div className={styles.nabhText}>
            <h3>Accredited Ayurvedic Healthcare Provider</h3>
            <p>
              Ayurmana Ayurvedic Center is proud to be NABH accredited. We
              uphold the highest clinical safety, standards of hygiene, and
              therapeutic excellence.
            </p>
          </div>
        </div> */}

        {/* Main Branch Section */}
        <div className={styles.mainBranchSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Main Center</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.singleBranchWrapper}>
            <BranchCard
              name={branches[0].name}
              address={branches[0].address}
              phone={branches[0].phone}
              email={branches[0].email}
              mapUrl={branches[0].mapUrl}
              isMainBranch={true}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Ayurmana Ayurvedic Center. All
            Rights Reserved.
          </div>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.separator}>•</span>
            <a href="#terms">Terms & Conditions</a>
            <span className={styles.separator}>•</span>
            <span className={styles.hqLocation}>HQ: Akola, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
