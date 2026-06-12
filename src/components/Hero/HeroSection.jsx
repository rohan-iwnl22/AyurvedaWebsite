import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const BGURL =
  "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/backgroundImg.png";

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ "--hero-bg": `url("${BGURL}")` }}
    >
      {/* Enhanced Animated Left Leaf */}
      <motion.svg
        className={styles.leafLeft}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        initial={{ opacity: 0, x: -120, rotate: -15 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          y: [0, -12, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          opacity: { duration: 1.3, ease: "easeOut", delay: 0.2 },
          x: { duration: 1.3, ease: "easeOut", delay: 0.2 },
          rotate: { duration: 1.3, ease: "easeOut", delay: 0.2 },
          y: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 1.5,
          },
        }}
      >
        {/* Secondary depth layer */}
        <path
          d="M40 260C40 260 100 230 130 170C160 110 160 50 160 50C160 50 220 50 250 100C280 150 280 230 280 260C280 260 200 260 140 220C80 180 40 260 40 260Z"
          fill="var(--color-primary-dark)"
          opacity="0.15"
        />

        {/* Main leaf shape */}
        <path
          d="M45 255C45 255 95 225 125 170C155 115 155 55 155 55C155 55 215 55 245 105C275 155 275 235 275 255C275 255 195 255 140 215C85 175 45 255 45 255Z"
          fill="var(--color-accent)"
          opacity="0.9"
        />

        {/* Top branching leaf - left */}
        <path
          d="M95 180C95 180 65 145 55 115C45 85 55 70 55 70C55 70 70 80 80 100C90 120 95 150 95 180Z"
          fill="var(--color-accent)"
          opacity="0.7"
        />

        {/* Top branching leaf - right */}
        <path
          d="M200 180C200 180 230 145 240 115C250 85 240 70 240 70C240 70 225 80 215 100C205 120 200 150 200 180Z"
          fill="var(--color-accent)"
          opacity="0.7"
        />

        {/* Middle branching leaf - left */}
        <path
          d="M75 220C75 220 50 195 45 175C40 155 50 145 50 145C50 145 60 150 65 165C70 180 75 200 75 220Z"
          fill="var(--color-accent)"
          opacity="0.6"
        />

        {/* Middle branching leaf - right */}
        <path
          d="M215 220C215 220 240 195 245 175C250 155 240 145 240 145C240 145 230 150 225 165C220 180 215 200 215 220Z"
          fill="var(--color-accent)"
          opacity="0.6"
        />

        {/* Bottom frond - left */}
        <path
          d="M140 215C140 215 115 240 105 260C95 280 105 290 105 290C105 290 115 280 120 265C125 250 135 230 140 215Z"
          fill="var(--color-accent)"
          opacity="0.5"
        />

        {/* Bottom frond - right */}
        <path
          d="M145 215C145 215 170 240 180 260C190 280 180 290 180 290C180 290 170 280 165 265C160 250 150 230 145 215Z"
          fill="var(--color-accent)"
          opacity="0.5"
        />

        {/* Central vein/stem */}
        <path
          d="M155 55C155 55 150 130 120 180C90 230 45 255 45 255"
          stroke="var(--color-primary-dark)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary veins - left side */}
        <path
          d="M152 85C130 100 110 120 95 145"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M148 110C130 125 115 145 105 165"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M140 140C125 155 115 170 108 185"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M130 165C118 178 110 190 105 200"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M118 190C108 200 102 210 98 218"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary veins - right side */}
        <path
          d="M158 85C180 100 200 120 215 145"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M162 110C180 125 195 145 205 165"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M170 140C185 155 195 170 202 185"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M180 165C192 178 200 190 205 200"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M192 190C202 200 208 210 212 218"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Decorative dots on leaf */}
        <circle
          cx="130"
          cy="130"
          r="2.5"
          fill="var(--color-primary-dark)"
          opacity="0.4"
        />
        <circle
          cx="170"
          cy="135"
          r="2"
          fill="var(--color-primary-dark)"
          opacity="0.4"
        />
        <circle
          cx="145"
          cy="160"
          r="2"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
        <circle
          cx="115"
          cy="175"
          r="1.8"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
        <circle
          cx="185"
          cy="178"
          r="1.8"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
      </motion.svg>

      {/* Enhanced Animated Right Leaf */}
      <motion.svg
        className={styles.leafRight}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        initial={{ opacity: 0, x: 120, rotate: 15 }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 0,
          y: [0, -10, 0],
          rotate: [0, -3, 0, 3, 0],
        }}
        transition={{
          opacity: { duration: 1.3, ease: "easeOut", delay: 0.3 },
          x: { duration: 1.3, ease: "easeOut", delay: 0.3 },
          rotate: { duration: 1.3, ease: "easeOut", delay: 0.3 },
          y: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 1.8,
          },
        }}
      >
        {/* Secondary depth layer */}
        <path
          d="M280 260C280 260 220 230 190 170C160 110 160 50 160 50C160 50 100 50 70 100C40 150 40 230 40 260C40 260 120 260 180 220C240 180 280 260 280 260Z"
          fill="var(--color-primary-dark)"
          opacity="0.15"
        />

        {/* Main leaf shape */}
        <path
          d="M275 255C275 255 225 225 195 170C165 115 165 55 165 55C165 55 105 55 75 105C45 155 45 235 45 255C45 255 125 255 180 215C235 175 275 255 275 255Z"
          fill="var(--color-accent)"
          opacity="0.9"
        />

        {/* Top branching leaf - left */}
        <path
          d="M225 180C225 180 255 145 265 115C275 85 265 70 265 70C265 70 250 80 240 100C230 120 225 150 225 180Z"
          fill="var(--color-accent)"
          opacity="0.7"
        />

        {/* Top branching leaf - right */}
        <path
          d="M120 180C120 180 90 145 80 115C70 85 80 70 80 70C80 70 95 80 105 100C115 120 120 150 120 180Z"
          fill="var(--color-accent)"
          opacity="0.7"
        />

        {/* Middle branching leaf - left */}
        <path
          d="M245 220C245 220 270 195 275 175C280 155 270 145 270 145C270 145 260 150 255 165C250 180 245 200 245 220Z"
          fill="var(--color-accent)"
          opacity="0.6"
        />

        {/* Middle branching leaf - right */}
        <path
          d="M105 220C105 220 80 195 75 175C70 155 80 145 80 145C80 145 90 150 95 165C100 180 105 200 105 220Z"
          fill="var(--color-accent)"
          opacity="0.6"
        />

        {/* Bottom frond - left */}
        <path
          d="M180 215C180 215 205 240 215 260C225 280 215 290 215 290C215 290 205 280 200 265C195 250 185 230 180 215Z"
          fill="var(--color-accent)"
          opacity="0.5"
        />

        {/* Bottom frond - right */}
        <path
          d="M175 215C175 215 150 240 140 260C130 280 140 290 140 290C140 290 150 280 155 265C160 250 170 230 175 215Z"
          fill="var(--color-accent)"
          opacity="0.5"
        />

        {/* Central vein/stem */}
        <path
          d="M165 55C165 55 170 130 200 180C230 230 275 255 275 255"
          stroke="var(--color-primary-dark)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary veins - left side */}
        <path
          d="M168 85C190 100 210 120 225 145"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M172 110C190 125 205 145 215 165"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M180 140C195 155 205 170 212 185"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M190 165C202 178 210 190 215 200"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M202 190C212 200 218 210 222 218"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary veins - right side */}
        <path
          d="M162 85C140 100 120 120 105 145"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M158 110C140 125 125 145 115 165"
          stroke="var(--color-primary-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150 140C135 155 125 170 118 185"
          stroke="var(--color-primary-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M140 165C128 178 120 190 115 200"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M128 190C118 200 112 210 108 218"
          stroke="var(--color-primary-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Decorative dots on leaf */}
        <circle
          cx="190"
          cy="130"
          r="2.5"
          fill="var(--color-primary-dark)"
          opacity="0.4"
        />
        <circle
          cx="150"
          cy="135"
          r="2"
          fill="var(--color-primary-dark)"
          opacity="0.4"
        />
        <circle
          cx="175"
          cy="160"
          r="2"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
        <circle
          cx="205"
          cy="175"
          r="1.8"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
        <circle
          cx="135"
          cy="178"
          r="1.8"
          fill="var(--color-primary-dark)"
          opacity="0.35"
        />
      </motion.svg>

      <div className={`${styles.heroContent} container`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ayurmana
          <span>AYURVED PANCHAKARMA AND NUTRIHEALTH CLINIC</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Where Detox Meets Nourishment". At Ayurmana, our classical
          Panchakarma protocols and therapeutic nutrition plans are designed to
          restore your Doshas, strengthen your Agni, and renew your complete
          well-being.
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
      {/* <div className={styles.divider}>
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
      </div> */}
    </section>
  );
}
