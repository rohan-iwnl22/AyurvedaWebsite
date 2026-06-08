import { FaCheckCircle } from "react-icons/fa";
import AnimateOnScroll from "../AnimateOnScroll";
import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  const highlights = [
    "Nadi Pariksha, Classical Dosha-Based Diagnosis & Constitution Analysis",
    "Structured Panchakarma & Rejuvenation Programs",
    "Authentic Herbal Medicines Prepared from Organic Sources",
    "Evidence-Informed Classical Ayurvedic Treatment Protocols",
    "Private, Sanitised & Serene Therapy Chambers",
    "Integrated Dietary & Ritucharya (Seasonal) Guidance",
  ];

  return (
    <section id="about" className={`${styles.welcome} section`}>
      <div className={`${styles.grid} container`}>
        {/* Left Text Column */}
        <AnimateOnScroll direction="right" delay={0.1}>
          <div className={styles.textColumn}>
            <span className={styles.accentHeading}>Welcome to AYURMANA</span>
            <h2 className={styles.title}>
              Where the Vedic Science of Life is Practised with Integrity
            </h2>
            <p className={styles.description}>
              In a world increasingly dominated by symptomatic treatment,
              Ayurmana stands as a steadfast sanctuary of genuine, root-cause
              healing. We are a specialised Ayurvedic medical centre where
              ancient therapeutic wisdom meets rigorous clinical practice —
              offering each patient a deeply personalised path to health,
              balance, and vitality.
            </p>
            <p className={styles.description}>
              Whether you arrive burdened by chronic illness, debilitating
              stress, or the quiet imbalances that diminish quality of life,
              Ayurmana is equipped to guide your restoration with precision,
              compassion, and authentic Ayurvedic science.
            </p>
            <p className={styles.description}>
              We do not reimagine Ayurveda. We preserve it.
            </p>
            <p className={styles.description}>
              Every consultation at Ayurmana begins with Nadi Pariksha (pulse
              diagnosis), Prakriti analysis, and a thorough understanding of the
              patient's Dosha constitution — because we believe accurate
              diagnosis is the foundation of effective healing.
            </p>

            <ul className={styles.bulletList}>
              {highlights.map((text, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <FaCheckCircle className={styles.bulletIcon} size={16} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* <a href="#booking" className="btn btn-primary">
              Book A Consultation
            </a> */}
          </div>
        </AnimateOnScroll>

        {/* Right Image Column */}
        <AnimateOnScroll direction="left" delay={0.2}>
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img
                src="/images/vertical1.jpg"
                alt="Traditional Ayurvedic Treatment"
              />
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
