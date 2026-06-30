import { useSearchParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';
import styles from './Contact.module.css';

const BRANCH_DETAILS = {
  akola: {
    name: 'Ayurmana Ayurvedic Clinic',
    address: 'Shop No:2, Mangal murti Residency, MHADA colony road, behind durga Lawns, kaulkhed, Akola',
    phone: '+91 93707 71021 || +91 89762 97579',
    email: 'ayurmanayurved@gmail.com',
    timing: '8:00 AM - 8:00 PM (Sunday Closed)',
  },
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const branchParam = searchParams.get('branch');
  const highlightedBranch = BRANCH_DETAILS[branchParam] || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <div className="contact-page">
      {/* Hero header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Connect with our Ayurveda Clinics
          </p>
        </div>
      </section>

      {/* Highlighted Branch Box */}
      {highlightedBranch && (
        <section className={`section ${styles.highlightedBranch}`}>
          <div className={`container ${styles.highlightedBranchInner}`}>
            <span className={styles.highlightedBranchLabel}>
              Selected Location
            </span>
            <h2 className={styles.highlightedBranchName}>{highlightedBranch.name}</h2>
            <p className={styles.highlightedBranchAddress}>{highlightedBranch.address}</p>
            <div className={styles.highlightedBranchDetails}>
              <span><FaPhoneAlt style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }} /> {highlightedBranch.phone}</span>
              <span><FaEnvelope style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }} /> {highlightedBranch.email}</span>
              <span>Timings: {highlightedBranch.timing}</span>
            </div>
          </div>
        </section>
      )}

      {/* Split layout: Form left, Branch selection list right */}
      <section className="section">
        <div className="container">
          <div className={styles.splitLayout}>
            {/* Contact Form Column */}
            <AnimateOnScroll direction="right">
              <div className={styles.formColumn}>
                <h2>Send Us a Message</h2>
                <p>Fill out the details below, and our care coordinators will reach back shortly.</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="c_name">Your Name</label>
                      <input id="c_name" type="text" required placeholder="e.g. Amit Patil" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="c_email">Email Address</label>
                      <input id="c_email" type="email" required placeholder="e.g. amit@example.com" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="c_phone">Phone Number</label>
                    <input id="c_phone" type="tel" required placeholder="e.g. 94220XXXXX" />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="c_branch">Preferred Branch</label>
                    <select id="c_branch" defaultValue={branchParam || ""}>
                      <option value="">General Inquiry</option>
                      <option value="akola">Ayurmana Ayurvedic Clinic</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="c_message">How can we help you?</label>
                    <textarea id="c_message" rows="5" required placeholder="Write your message here..."></textarea>
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Branches Quick Directory */}
            <AnimateOnScroll direction="left">
              <div className={styles.branchColumn}>
                <h2>Branch Quick Directory</h2>

                <div className={styles.branchList}>
                  {Object.entries(BRANCH_DETAILS).map(([key, branch]) => (
                    <div
                      key={key}
                      className={`${styles.branchCard} ${branchParam === key ? styles.branchCardActive : ''}`}
                    >
                      <h4 className={styles.branchCardTitle}>
                        <FaMapMarkerAlt style={{ color: 'var(--color-accent)' }} size={14} />
                        {branch.name}
                      </h4>
                      <p className={styles.branchCardAddress}>{branch.address}</p>
                      <p className={styles.branchCardTiming}><strong>Timings:</strong> {branch.timing}</p>
                      <div className={styles.branchCardActions}>
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`}>Call: {branch.phone}</a>
                        <a href={`mailto:${branch.email}`}>Email</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
