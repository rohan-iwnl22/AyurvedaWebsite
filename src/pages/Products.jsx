import { FaLeaf, FaMortarPestle, FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./Products.module.css";

const products = [
  {
    id: "chyawanprash",
    name: "Chyawanprash",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/chyawanprash.jpg",
  },
  {
    id: "suwarnaprash",
    name: "Suwarnaprash",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/suwarnaprash.jpg",
  },
  {
    id: "sukesha-hair-oil",
    name: "Sukesha Hair Oil",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/sukesha-hair-oil.jpg",
  },
  {
    id: "sukesha-hair-wash-powder",
    name: "Sukesha Hair Wash Powder",
    imageUrl: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/sukesha.png",
  },
  {
    id: "abhyanga-oil",
    name: "Abhyanga Oil",
    imageUrl: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/abhyanga.png",
  },
  {
    id: "udvartan-powder",
    name: "Udvartan Powder",
    imageUrl: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/udvartna.png",
  },
  {
    id: "shatavari-kalpa",
    name: "Shatavari Kalpa",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/shatavari.png",
  },
  {
    id: "durva-kalpa",
    name: "Durva Kalpa",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/durva-Kalpa.png",
  },
  {
    id: "pain-relief-oil",
    name: "Pain Relief Oil",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/pain-relief.png",
  },
  {
    id: "hand-crafted-soap",
    name: "Hand Crafted Soap",
    imageUrl: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/soap.jpg",
  },
  {
    id: "bheem-kalpa",
    name: "Bheem Kalpa",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/BHEEM-KALPA.jpg",
  },
  {
    id: "height-growth-kit",
    name: "Height Growth Kit",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/growth-Kit.png?updatedAt=1781253761225",
  },
  {
    id: "face-pack",
    name: "Face Pack",
    imageUrl:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/Face-Pack.png?updatedAt=1781253761203",
  },
];

function formatProductName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Products() {
  const navigate = useNavigate();

  const handleMoreDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

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
                Explore our clinic&apos;s wellness products, crafted around the
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
                key={product.id}
                direction="up"
                delay={0.04 * (index + 1)}
              >
                <article className={styles.productCard}>
                  <div
                    className={styles.productImage}
                    style={{ "--product-bg": `url("${product.imageUrl}")` }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                      }}
                    />
                    <div className={styles.placeholderMark}>
                      {index % 3 === 0 && <FaLeaf />}
                      {index % 3 === 1 && <FaSeedling />}
                      {index % 3 === 2 && <FaMortarPestle />}
                    </div>
                  </div>
                  <div className={styles.productBody}>
                    <span className={styles.productTag}>Ayurvedic Product</span>
                    <h3>{formatProductName(product.name)}</h3>
                    <button
                      className={styles.detailsButton}
                      onClick={() => handleMoreDetails(product.id)}
                    >
                      More Details
                      <span className={styles.buttonArrow} aria-hidden="true">
                        →
                      </span>
                    </button>
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
