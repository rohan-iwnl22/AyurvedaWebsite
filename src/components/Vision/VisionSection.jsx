import AnimateOnScroll from '../AnimateOnScroll';
import styles from './VisionSection.module.css';

export default function VisionSection() {
  return (
    <section className={`${styles.vision} section`}>
      <div className={`${styles.grid} container`}>
        {/* Left Image Column */}
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img src="/images/vision.jpg" alt="Natural Ayurvedic Herbs Preparation" />
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

        {/* Right Text Column */}
        <AnimateOnScroll direction="left" delay={0.1}>
          <div className={styles.textColumn}>
            <span className={styles.accentHeading}>Our Philosophy</span>
            <h2 className={styles.title}>
              Rooted in tradition, <span className={styles.highlight}>committed</span> to cure
            </h2>
            
            <p className={styles.description}>
              Our vision is to propagate the authentic teachings of Ayurveda as a comprehensive lifestyle science rather than just a symptomatic therapy. By combining time-tested diagnostic procedures with pure, standardized herbal medicines, we make healing both deep and sustainable.
            </p>
            
            <div className={styles.quoteBlock}>
              "Ayurveda is not just about treating the body; it is a pathway to harmonious living, aligning the soul, mind, and elements."
            </div>

            <p className={styles.description}>
              At Prana, every treatment is supervised by certified Ayurvedic physicians. Our herbal formulations are prepared under strict hygienic conditions from organic herbs sourced directly from Veda Valley, Kerala — the birthplace of classical Ayurveda.
            </p>
            
            <a href="#booking" className="btn btn-outline">
              Consult Our Doctors
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
