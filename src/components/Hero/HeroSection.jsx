import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Decorative Botanical Left SVG */}
      <svg
        className={styles.leafLeft}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 180C20 180 60 160 80 120C100 80 100 40 100 40C100 40 140 40 160 80C180 120 180 180 180 180C180 180 120 180 80 160C40 140 20 180 20 180Z"
          fill="var(--color-accent)"
        />
        <path
          d="M100 40C100 40 90 90 60 120C30 150 20 180 20 180"
          stroke="var(--color-primary-dark)"
          strokeWidth="3"
        />
        <path
          d="M80 120C95 105 110 100 120 105"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
        />
        <path
          d="M60 135C75 125 90 125 95 130"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
        />
      </svg>

      {/* Decorative Botanical Right SVG */}
      <svg
        className={styles.leafRight}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M180 180C180 180 140 160 120 120C100 80 100 40 100 40C100 40 60 40 40 80C20 120 20 180 20 180C20 180 80 180 120 160C160 140 180 180 180 180Z"
          fill="var(--color-accent)"
        />
        <path
          d="M100 40C100 40 110 90 140 120C170 150 180 180 180 180"
          stroke="var(--color-primary-dark)"
          strokeWidth="3"
        />
        <path
          d="M120 120C105 105 90 100 80 105"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
        />
        <path
          d="M140 135C125 125 110 125 105 130"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
        />
      </svg>

      <div className={`${styles.heroContent} container`}>
        <motion.span
          className={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Traditional & Classical healing
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          PRANA
          <span>AYURVEDIC CLINIC</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the authentic wisdom of Kerala Ayurveda. We offer classical treatments, Panchakarma therapies, and doctor consultations across 5 locations in Metro City.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#booking" className="btn btn-accent">
            Book Appointment
          </a>
          <a href="#treatments" className="btn btn-outline-white">
            Our Treatments
          </a>
        </motion.div>
      </div>

      {/* Curved Divider at the bottom */}
      <div className={styles.divider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
