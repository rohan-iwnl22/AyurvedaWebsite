import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./AboutUs.module.css";

const aboutUsBannerURl =
  "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/about%20us%20banner.jpeg";

const whyChooseUs = [
  {
    title: "Authentic",
    description:
      "Every treatment we offer is rooted in classical Ayurvedic texts and administered with complete clinical integrity.",
    icon: "🌿",
  },
  {
    title: "Personalised",
    description:
      "No two care plans at Ayurmana are alike — every treatment is individually prescribed based on your unique constitution.",
    icon: "✨",
  },
  {
    title: "Experienced",
    description:
      "Our team of qualified Ayurvedic physicians and certified therapists bring years of dedicated clinical expertise to every consultation.",
    icon: "📜",
  },
  {
    title: "Affordable",
    description:
      "Ayurvedic care delivered at honest, transparent pricing — because genuine healing should be accessible to all.",
    icon: "💰",
  },
  {
    title: "Trusted",
    description:
      "Chosen by patients across Akola for our unwavering commitment to genuine, result-driven Ayurvedic care.",
    icon: "⭐",
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section with Banner Image */}
      <section className={styles.heroSection}>
        {/* Banner Image */}
        <img
          src={aboutUsBannerURl}
          alt="About Us Banner"
          className={styles.heroBanner}
        />

        {/* Overlay */}
        <div className={styles.heroOverlay} />

        {/* Content */}
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            About Us
          </h1>

          <h1 className={styles.heroTitle}>
            Ayurmana - Classical Ayurveda. Personalised Care.
          </h1>
          <h1 className={styles.heroTitleLast}>
            Lasting Results.
          </h1>

          <p className={styles.heroSubtitle}>
            Our Heritage & Modern Ayurvedic Care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.contentContainer}`}>
          <AnimateOnScroll direction="up">
            <p className={styles.contentParagraph}>
              The name Ayurmana reflects our deepest purpose — to enrich the
              quality and extend the span of every life we touch. Founded in the
              heart of Akola, our clinic was established with a singular vision
              — to make authentic, classical Ayurvedic medicine accessible to
              every individual seeking genuine, root-cause healing. We have
              since grown into one of the region's most trusted centres for
              classical Ayurvedic medicine, comprehensive Panchakarma therapies,
              and integrative nutritional wellness.
            </p>
            <p className={styles.contentParagraph}>
              At Ayurmana, every patient is seen as a unique individual — a
              distinct combination of constitution, lifestyle, and healing
              potential. Our team of qualified Ayurvedic physicians and
              certified therapy specialists invest time in truly understanding
              you before prescribing a single treatment. Every care plan is
              individually crafted, classically grounded, and designed to
              deliver results that endure long after your treatment concludes.
            </p>
            <p className={styles.contentParagraph}>
              We believe that true healthcare is not reactive — it is
              preventive, restorative, and deeply personal. It is not enough to
              treat what is visible. Genuine healing demands addressing what
              lies beneath — the root causes and imbalances that give rise to
              illness in the first place. That is the standard we hold ourselves
              to at Ayurmana, every single day — not merely as a clinic, but as
              a centre sincerely devoted to the health and longevity of every
              life we are privileged to care for.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <div className={styles.diagnosticSection}>
              <h2>Our Diagnostic Method</h2>
              <h3>Ancient Diagnostic Intelligence. Unmatched Clinical Clarity.</h3>
              <p>
                True Ayurvedic treatment begins long before the first therapy is
                administered — it begins with understanding the patient
                completely. At Ayurmana, our diagnostic process follows the
                classical Trividha Pariksha framework — Darshanam (observation),
                Sparshanam (palpation), and Prashnam (interrogation) —
                systematically supported by Ashta Sthana Pariksha, an eight-fold
                clinical examination incorporating the precise and insightful
                practice of Nadi Pariksha (pulse assessment).
              </p>
              <p>
                This comprehensive diagnostic approach ensures we identify your
                unique Prakriti and existing Vikriti with accuracy — forming the
                essential foundation upon which every personalised, effective, and
                lasting treatment plan at Ayurmana is built.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Enhanced Why Choose Us Section */}
          <AnimateOnScroll direction="up" delay={0.2}>
            <div className={styles.whyChooseSection}>
              <div className={styles.whyChooseHeader}>
                <span className={styles.whyChooseLabel}>
                  Why Choose Us
                </span>
                <h2 className={styles.whyChooseTitle}>
                  What Makes Ayurmana Different
                </h2>
                <p className={styles.whyChooseDescription}>
                  Excellence in every aspect of your healing journey
                </p>
              </div>

              {/* Dynamic rendering from whyChooseUs array */}
              <div className={styles.cardsGrid}>
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className={styles.card}
                  >
                    <div className={styles.cardIcon}>
                      <span>{item.icon}</span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      {item.title}
                    </h3>
                    <p className={styles.cardDescription}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      {/* HELLO */}
    </div>
  );
}
