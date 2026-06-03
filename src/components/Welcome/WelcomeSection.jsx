import { FaCheckCircle } from 'react-icons/fa';
import AnimateOnScroll from '../AnimateOnScroll';
import styles from './WelcomeSection.module.css';

export default function WelcomeSection() {
  const highlights = [
    'Experienced Doctors & Trained Therapists from Kerala',
    'Authentic Ayurvedic Herbs & Classical Oils',
    'State-of-the-Art Private Therapy Chambers',
    'Customized Wellness & Diet Consultation',
    'NABH Accredited Healthcare Standards',
  ];

  return (
    <section id="about" className={`${styles.welcome} section`}>
      <div className={`${styles.grid} container`}>
        {/* Left Text Column */}
        <AnimateOnScroll direction="right" delay={0.1}>
          <div className={styles.textColumn}>
            <span className={styles.accentHeading}>Welcome to Prana</span>
            <h2 className={styles.title}>
              Authentic <span className={styles.highlight}>Ayurvedic Healing</span> Experience in Metro City
            </h2>
            <p className={styles.description}>
              Prana Ayurvedic Group has been a trusted pioneer in traditional healing, bringing the purest form of classical Ayurvedic treatments directly from Veda Valley to Metro City. Guided by ancient scriptures, we restore balance and vitality to your life.
            </p>
            <p className={styles.description}>
              Our treatments are personalized, combining herbal therapies, Panchakarma detox protocols, and holistic consultations to treat the root cause of chronic ailments and promote long-term well-being.
            </p>
            
            <ul className={styles.bulletList}>
              {highlights.map((text, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <FaCheckCircle className={styles.bulletIcon} size={16} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a href="#booking" className="btn btn-primary">
              Book A Consultation
            </a>
          </div>
        </AnimateOnScroll>

        {/* Right Image Column */}
        <AnimateOnScroll direction="left" delay={0.2}>
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img src="/images/vertical1.jpg" alt="Traditional Ayurvedic Treatment" />
              <div className={styles.goldOffsetCard}></div>
            </div>

            {/* Floating leaf element */}
            <svg
              className={styles.leafDecoration}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10 80C10 80 30 70 40 50C50 30 50 10 50 10C50 10 70 20 80 40C90 60 90 90 90 90C90 90 60 90 40 80C20 70 10 80 10 80Z"
                fill="var(--color-accent)"
              />
            </svg>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
