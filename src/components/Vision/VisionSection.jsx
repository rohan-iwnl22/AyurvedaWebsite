import AnimateOnScroll from "../AnimateOnScroll";
import styles from "./VisionSection.module.css";

export default function VisionSection() {
  return (
    <section className={`${styles.vision} section`}>
      <div className={`${styles.grid} container`}>
        {/* Left Image Column */}
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img
                src="/images/vision.jpg"
                alt="Natural Ayurvedic Herbs Preparation"
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

        {/* Right Text Column */}
        <AnimateOnScroll direction="left" delay={0.1}>
          <div className={styles.textColumn}>
            <span className={styles.accentHeading}>Our Philosophy</span>
            <h2 className={styles.title}>
              True healing means treating the person, not merely the disease —
              that is the
              <span className={styles.highlight}> Ayurmana promise. </span>
              {/* Rooted in tradition,{" "}
              <span className={styles.highlight}>committed</span> to cure */}
            </h2>

            <p className={styles.description}>
              The ancient sages who composed the Charaka Samhita, Sushruta
              Samhita, and Ashtanga Hridayam did not merely document medicine —
              they documented the art of living in alignment with nature. At
              Ayurmana, every clinical decision is guided by these foundational
              texts.
            </p>

            <div className={styles.quoteBlock}>
              "Hita ahara vihara sevana" — A life of wholesome food, purposeful
              routine, and disciplined conduct is the highest form of medicine.
            </div>

            <p className={styles.description}>
              We bring deep scholarly knowledge of Ayurvedic classics combined
              with clinical experience in managing complex, chronic, and
              lifestyle-related conditions. We do not prescribe generic
              protocols. We craft healing journeys unique to each individual.
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
