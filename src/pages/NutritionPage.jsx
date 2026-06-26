import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaLeaf,
  FaSeedling,
  FaCalendarCheck,
  FaSpa,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./NutritionPage.module.css";

const offerings = [
  {
    title: "Prakriti-Based Diet Planning",
    description:
      "Personalised dietary guidance built around your Dosha constitution so every meal supports balance, nourishment, and long-term wellbeing.",
  },
  {
    title: "Agni Assessment and Digestive Wellness",
    description:
      "We evaluate digestive fire and metabolic strength to identify the root of indigestion, imbalance, and nutritional deficiency.",
  },
  {
    title: "Therapeutic Diet for Chronic Conditions",
    description:
      "Specialised nutrition support for obesity, diabetes, hypertension, PCOS, skin concerns, digestive disorders, and autoimmune conditions.",
  },
  {
    title: "Seasonal Nutrition Guidance",
    description:
      "Classical Ritucharya guidance that helps you align your diet with seasonal changes for year-round balance and resilience.",
  },
  {
    title: "Weight Management Nutrition",
    description:
      "Structured nutrition support for healthy, sustainable weight loss or gain based on constitution, metabolism, and lifestyle.",
  },
  {
    title: "Child and Family Nutrition",
    description:
      "Age-appropriate, constitution-specific nutrition for children and families to support healthy growth, immunity, and development.",
  },
];

const benefits = [
  "Strengthens Agni and helps clear Ama for complete digestive health",
  "Supports and enhances outcomes of all ongoing treatments",
  "Helps manage and prevent chronic lifestyle disorders naturally",
  "Provides sustainable, practical, and enjoyable dietary guidance",
  "Aligns nutrition with individual constitution for lifelong wellness",
];

const conditions = [
  "Obesity and Weight Management",
  "Diabetes",
  "Hypertension",
  "PCOS",
  "Digestive Disorders",
  "Skin Conditions",
  "Autoimmune Disorders",
  "Nutritional Deficiencies",
  "Post-Treatment Recovery",
  "General Wellness and Prevention",
];

const consultationSteps = [
  {
    step: "01",
    title: "Prakriti and Vikriti Assessment",
    description:
      "We begin with a detailed evaluation of your constitution and current imbalance.",
  },
  {
    step: "02",
    title: "Agni and Digestive Evaluation",
    description:
      "Digestive fire and metabolic function are reviewed to uncover the root cause of imbalance.",
  },
  {
    step: "03",
    title: "Personalised Diet Plan",
    description:
      "You receive a practical, condition-specific dietary program designed just for you.",
  },
  {
    step: "04",
    title: "Lifestyle and Dinacharya Guidance",
    description:
      "Daily routine and lifestyle recommendations are added to support the nutrition plan.",
  },
  {
    step: "05",
    title: "Follow-Up and Refinement",
    description:
      "Regular consultations help monitor progress and refine the plan as your health improves.",
  },
];

const comparisonRows = [
  ["Same diet for everyone", "Individualised per Prakriti"],
  ["Focuses on calories and macros", "Focuses on Agni and Dosha balance"],
  ["Seasonal changes ignored", "Ritucharya - seasonal guidance"],
  ["Food as fuel", "Food as medicine"],
  ["Symptom management", "Root-cause correction"],
];

const nutritionBox =
  "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/nutrition_Banner.png?updatedAt=1782297247266";

export default function NutritionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`${styles.heroInner} container`}>
          <AnimateOnScroll direction="up">
            <span className={styles.eyebrow}>Nutrition and Diet Wellness</span>
            <h1>Food as Medicine. Diet as Therapy.</h1>
            <p className={styles.heroText}>
              At Ayurmana, we believe food is the most powerful medicine and the
              foundation of lasting health. Our nutrition programs go beyond
              generic meal plans to create deeply personalised, Prakriti-based
              dietary guidance that strengthens Agni, reduces Ama, and supports
              healing at the cellular level.
            </p>
          </AnimateOnScroll>

          <motion.div
            className={styles.heroCard}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.heroCardIcon}>
              <FaSeedling />
            </div>
            <p>
              Every consultation is conducted by qualified Ayurvedic physicians
              who assess your constitution, health condition, digestive
              strength, and lifestyle before crafting a nutrition plan that
              heals, sustains, and transforms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.banner}>
        <img
          src={nutritionBox}
          alt="Nutrition Box"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.section}>
        <div className={`${styles.approachGrid} container`}>
          <AnimateOnScroll direction="right">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>Our Approach</span>
              <h2>Food as Medicine. Diet as Therapy.</h2>
              <p>
                Classical Ayurveda classifies food by Rasa, Guna, Virya, and
                Vipaka. That means a food can heal one person and disturb
                another. At Ayurmana, dietary advice is built on this exact
                understanding.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.12}>
            <div className={styles.approachQuote}>
              <FaLeaf className={styles.quoteIcon} />
              <p>
                Every meal you consume should actively support your healing
                journey.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Offer</span>
            <h2>Personalised Nutrition Programs</h2>
          </div>

          <div className={styles.offerGrid}>
            {offerings.map((item, index) => (
              <AnimateOnScroll
                key={item.title}
                direction="up"
                delay={0.06 * (index + 1)}
              >
                <article className={styles.offerCard}>
                  <div className={styles.offerIndex}>0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.twoColumn} container`}>
          <AnimateOnScroll direction="right">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>Key Benefits</span>
              <h2>Why Ayurveda Nutrition Feels Different</h2>
              <ul className={styles.checkList}>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <FaCheckCircle />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.12}>
            <div className={styles.conditionsCard}>
              <span className={styles.sectionLabel}>Conditions Addressed</span>
              <div className={styles.chipGrid}>
                {conditions.map((condition) => (
                  <span key={condition} className={styles.chip}>
                    {condition}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why It Is Different</span>
            <h2>Modern Nutrition vs Ayurvedic Nutrition</h2>
          </div>

          <div className={styles.comparisonTable}>
            {comparisonRows.map(([left, right]) => (
              <div key={left} className={styles.comparisonRow}>
                <div className={styles.comparisonCell}>{left}</div>
                <div className={styles.comparisonArrow}>
                  <FaArrowRight />
                </div>
                <div className={styles.comparisonCellStrong}>{right}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Consultation Process</span>
            <h2>How We Work With You</h2>
          </div>

          <div className={styles.timeline}>
            {consultationSteps.map((item, index) => (
              <AnimateOnScroll
                key={item.step}
                direction="up"
                delay={0.08 * (index + 1)}
              >
                <article className={styles.timelineItem}>
                  <div className={styles.timelineStep}>{item.step}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED CTA SECTION */}
      <section className={styles.ctaSection}>
        {/* Floating decorative elements */}
        <div className={styles.ctaDecor}>
          <FaLeaf className={`${styles.ctaFloat} ${styles.ctaFloat1}`} />
          <FaSeedling className={`${styles.ctaFloat} ${styles.ctaFloat2}`} />
          <FaLeaf className={`${styles.ctaFloat} ${styles.ctaFloat3}`} />
          <FaSpa className={`${styles.ctaFloat} ${styles.ctaFloat4}`} />
        </div>

        <motion.div
          className={`${styles.ctaCard} container`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Decorative Leaf */}
          <div className={styles.decorativeLeaf}>
            <FaSpa />
          </div>

          {/* Badge */}
          <span className={styles.ctaBadge}>Recommended Course</span>

          {/* Title */}
          <h2 className={styles.ctaTitle}>
            Monthly Follow-Ups with <br />
            <span className={styles.ctaHighlight}>Progressive Refinement</span>
          </h2>

          {/* Description */}
          <p className={styles.ctaDescription}>
            Initial consultation followed by monthly reviews, adjusted
            progressively based on health outcomes and physician assessment.
          </p>

          {/* Quote */}
          <div className={styles.ctaQuoteWrapper}>
            <FaLeaf className={styles.ctaQuoteIcon} />
            <p className={styles.ctaQuote}>
              "Let food be thy medicine and medicine be thy food."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaActions}>
            <Link to="/contact" className={styles.ctaBtnPrimary}>
              <FaCalendarCheck />
              Book Your Nutrition Consultation
              <FaArrowRight className={styles.ctaBtnArrow} />
            </Link>
            <Link to="/about-us" className={styles.ctaBtnSecondary}>
              Learn More About Ayurmana
              <FaArrowRight className={styles.ctaBtnArrow} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
