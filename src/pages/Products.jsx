import { FaLeaf, FaMortarPestle, FaSeedling } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';
import styles from './Products.module.css';

const products = [
  'chyawanprash',
  'suwarnaprash',
  'sukesha hair wash',
  'sukesha hair oil',
  'sukesha hair wash powder',
  'Abhyanga oil',
  'udvartan powder',
  'shatavari kalpa',
  'durva kalpa',
  'pain relief oil',
  'hand crafted soap',
  'balbheem kalpa',
  'height growth kit',
  'face pack',
];

function formatProductName(name) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Products() {
  return (
    <main className={styles.productsPage}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} container`}>
          <AnimateOnScroll direction="up">
            <span className={styles.eyebrow}>Ayurmana Products</span>
            <h1>Classical Ayurvedic Essentials</h1>
            <p>
              A curated showcase of herbal preparations and daily wellness
              essentials offered by Ayurmana Ayurvedic Clinic.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={`${styles.introGrid} container`}>
          <AnimateOnScroll direction="right">
            <div className={styles.introCopy}>
              <span className={styles.sectionLabel}>Product Showcase</span>
              <h2>Prepared With Ayurvedic Care</h2>
              <p>
                Explore our clinic's wellness products, crafted around the
                principles of nourishment, balance, and everyday preventive
                care.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={0.15}>
            <div className={styles.featurePanel}>
              <div className={styles.featureIcon}>
                <FaMortarPestle />
              </div>
              <div>
                <h3>Traditional Formulations</h3>
                <p>
                  Products are presented as a clean catalogue for patient
                  awareness, without pricing or shopping actions.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className="container">
          <div className={styles.catalogHeader}>
            <span className={styles.sectionLabel}>Our Range</span>
            <h2>Products We Offer</h2>
          </div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <AnimateOnScroll
                key={product}
                direction="up"
                delay={0.04 * (index + 1)}
              >
                <article className={styles.productCard}>
                  <div className={styles.productImage}>
                    <div className={styles.placeholderMark}>
                      {index % 3 === 0 && <FaLeaf />}
                      {index % 3 === 1 && <FaSeedling />}
                      {index % 3 === 2 && <FaMortarPestle />}
                    </div>
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.productTag}>Ayurvedic Product</span>
                    <h3>{formatProductName(product)}</h3>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
