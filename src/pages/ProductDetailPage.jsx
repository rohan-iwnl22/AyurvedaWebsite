import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./ProductDetail.module.css";

const PRODUCT_DB = {
  chyawanprash: {
    id: "chyawanprash",
    title: "Chyawanprasha Rasayan",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/chyawanprash.jpg",
    brand: "Ayurmana",
    category: "Classical Ayurvedic Rasayana (Rejuvenative Tonic)",
    dosageForm:
      "Semi-solid paste (Avaleha / Leha) — thick, jam-like consistency with a sweet, tangy, and mildly spiced taste.",
    packingSize: ["250 g", "500 g", "1 kg"],
    ingredients: [
      "Amla (Emblica officinalis) — Primary ingredient; richest natural source of Vitamin C",
      "Ashwagandha — Strengthens immunity and vitality",
      "Giloy (Guduchi) — Powerful immunomodulator and detoxifier",
      "Shatavari — Nourishes and rejuvenates tissues",
      "Dashamool — Anti-inflammatory; strengthens respiratory health",
      "Pippali (Long Pepper) — Enhances bioavailability and digestion",
      "Ghee & Sesame Oil — Nourishing fat base for deep tissue absorption",
      "Honey — Natural preservative and carrier",
      "Cinnamon, Cardamom, Tejpatta — Aromatic digestive herbs",
    ],
    indications: [
      "Boosts overall immunity and disease resistance",
      "Improves lung and respiratory health; beneficial in cough, cold, and bronchitis",
      "Enhances memory, concentration, and cognitive function",
      "Relieves general weakness, fatigue, and debility",
      "Promotes healthy weight gain in underweight individuals",
      "Supports healthy aging and rejuvenation (Rasayana therapy)",
      "Beneficial in anaemia and nutritional deficiencies",
      "Improves skin texture and complexion",
      "Enhances stamina and physical endurance",
      "Safe for children, adults, and elderly",
    ],
    directions: [
      "Children (5–12 yrs): 1 teaspoon (5 g) once or twice daily",
      "Adults: 1–2 tablespoons (10–20 g) once or twice daily",
      "Elderly: 1 tablespoon (10 g) once daily",
      "Best taken on an empty stomach in the morning or as directed by your Ayurvedic physician.",
      "Can be consumed directly or mixed with warm milk for enhanced absorption.",
      "Continue for a minimum of 3 months for optimal Rasayana benefits.",
      "Store in a cool, dry place away from direct sunlight.",
      "Keep lid tightly closed after use.",
    ],
    precautions: [
      "Diabetic patients should use under medical supervision (contains honey and sugar).",
      "Not recommended for individuals with active fever or Ama (toxin overload) — consult your physician.",
    ],
    manufacturer:
      "Manufactured by Ayurmana | As per Classical Ayurvedic Formulation | No artificial preservatives",
  },
  suwarnaprash: {
    id: "suwarnaprash",
    title: "Suvarnaprasha (Suvarna Prashan)",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/suwarnaprash.jpg",
    brand: "Ayurmana",
    category: "Classical Ayurvedic Rasayana | Paediatric Immunomodulator",
    dosageForm:
      "Liquid oral drops — golden-yellow, aromatic herbal preparation in a ghee-honey base with Suvarna Bhasma.",
    packingSize: ["5 ml", "10 ml", "15 ml", "30 ml"],
    ingredients: [
      "Suvarna Bhasma (Gold Ash) — Primary ingredient; potent medhya (brain tonic), immunomodulator, and Rasayana",
      "Vacha (Acorus calamus) — Enhances speech, intellect, and memory",
      "Brahmi (Bacopa monnieri) — Improves concentration, learning, and cognitive development",
      "Shankhpushpi — Calms the nervous system; sharpens memory",
      "Ashwagandha — Builds physical strength and immunity",
      "Yashti Madhu (Licorice) — Soothes respiratory tract; natural adaptogen",
      "Giloy (Guduchi) — Detoxifier and immunity booster",
      "Go-Ghrita (Cow's Ghee) — Nourishing carrier; enhances absorption of gold and herbs",
      "Madhu (Honey) — Natural preservative and anupana (carrier medium)",
      "Anantamool, Haritaki, Shatavari — Supporting Rasayana herbs",
    ],
    indications: [
      "Boosts immunity and builds resistance against recurrent infections",
      "Enhances brain development — memory, intelligence, concentration, and grasping power",
      "Promotes physical growth and development in children",
      "Beneficial in speech delay, learning difficulties, and attention deficit",
      "Improves digestion and appetite in children",
      "Helpful in recurrent cough, cold, and respiratory infections",
      "Supports healthy skin tone and complexion",
      "Useful in autism spectrum support, hyperactivity, and developmental delays (as adjuvant)",
      "Acts as a complete Rasayana for overall paediatric health",
      "Safe from birth to 16 years when administered under guidance",
    ],
    directions: [
      "0–1 year: 1–2 drops once daily",
      "1–3 years: 2–4 drops once daily",
      "3–6 years: 4–6 drops once daily",
      "6–12 years: 6–8 drops once daily",
      "12–16 years: 8–10 drops once daily",
      "Administer directly on the tongue or mix with a few drops of warm water or mother's milk.",
      "Best given early morning on an empty stomach.",
      "Do not mix with hot liquids — heat destroys Suvarna Bhasma properties and honey's potency.",
      "Traditionally administered on Pushya Nakshatra day for maximum benefit (once a month).",
      "For best results, continue for a minimum of 3–6 months as a Rasayana course.",
      "Store in a cool, dry place; keep away from direct sunlight and moisture.",
    ],
    precautions: [
      "Administer strictly as per recommended dosage.",
      "Not recommended in children with active high fever — consult your Ayurvedic physician first.",
      "Honey-based preparation — do not heat before administration.",
      "Keep out of reach of children (self-administration).",
    ],
    manufacturer:
      "Manufactured by Ayurmana | Prepared as per Classical Ayurvedic Formulation | Contains Suvarna Bhasma — Authenticated & Quality Tested | No artificial preservatives",
  },
  "sukesha-hair-wash-powder": {
    id: "sukesha-hair-wash-powder",
    title: "Sukesha Hair Wash",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/sukesha.png",
    brand: "Ayurmana",
    category: "Ayurvedic Herbal Hair Cleanser",
    dosageForm: "Liquid herbal hair wash (sulphate-free, chemical-free)",
    packingSize: ["100 ml", "200 ml", "500 ml"],
    ingredients: [
      "Reetha (Soapnut)",
      "Shikakai",
      "Amla",
      "Brahmi",
      "Bhrinigraj",
      "Neem",
      "Hibiscus",
      "Rose water",
    ],
    indications: [
      "Controls hairfall and excessive hair loss",
      "Treats dandruff, scalp itching, and infections",
      "Strengthens hair roots and adds natural shine",
      "Suitable for all hair types including dry and damaged hair",
    ],
    directions: [
      "Dilute small quantity in water, apply to wet hair, massage gently on scalp",
      "Leave for 2-3 minutes, rinse thoroughly with water",
      "Use 2-3 times per week",
      "Avoid contact with eyes",
    ],
    precautions: [
      "For external use only",
      "Avoid contact with eyes — if contact occurs, rinse with plenty of water",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "sukesha-hair-oil": {
    id: "sukesha-hair-oil",
    title: "Sukesha Hair Oil",
    image:
      "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/sukesha-hair-oil.jpg",
    brand: "Ayurmana",
    category: "Ayurvedic Herbal Hair Oil",
    dosageForm: "Herbal medicated oil (light, non-sticky formulation)",
    packingSize: ["50 ml", "100 ml", "200 ml"],
    ingredients: [
      "Bhrinigraj",
      "Brahmi",
      "Amla",
      "Neem",
      "Hibiscus",
      "Coconut oil base",
      "Sesame oil",
      "Methi (Fenugreek)",
      "Jatamansi",
    ],
    indications: [
      "Reduces hairfall and promotes new hair growth",
      "Nourishes scalp and hair follicles deeply",
      "Prevents premature greying",
      "Relieves scalp dryness, dandruff, and itching",
      "Improves hair texture, thickness, and length",
    ],
    directions: [
      "Apply warm oil gently to scalp and hair roots",
      "Massage in circular motion for 5-10 minutes",
      "Leave overnight or for minimum 1-2 hours before washing",
      "Use 2-3 times per week for best results",
    ],
    precautions: [
      "For external use only",
      "Perform patch test before first use",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "sukesha-hair-wash-powder": {
    id: "sukesha-hair-wash-powder",
    title: "Sukesha Hair Wash Powder",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/sukesha.png",
    brand: "Ayurmana",
    category: "Ayurvedic Dry Herbal Hair Cleanser",
    dosageForm: "Fine herbal powder (100% natural, chemical-free)",
    packingSize: ["50 g", "100 g", "200 g"],
    ingredients: [
      "Reetha powder",
      "Shikakai powder",
      "Amla powder",
      "Neem powder",
      "Multani Mitti",
      "Hibiscus powder",
      "Nagarmotha",
    ],
    indications: [
      "Natural alternative to chemical shampoos",
      "Controls dandruff, scalp infections, and excess oil",
      "Strengthens hair from roots, reduces breakage",
      "Adds volume and natural shine to hair",
    ],
    directions: [
      "Mix 2-3 tablespoons powder with water to form a smooth paste",
      "Apply to wet scalp and hair, massage gently for 3-5 minutes",
      "Rinse thoroughly with water",
      "Use 2 times per week",
    ],
    precautions: ["For external use only", "Avoid contact with eyes"],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "abhyanga-oil": {
    id: "abhyanga-oil",
    title: "Abhyanga Oil",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/abhyanga.png",
    brand: "Ayurmana",
    category: "Ayurvedic Full Body Massage Oil",
    dosageForm: "Herbal medicated oil",
    packingSize: ["100 ml", "200 ml", "500 ml"],
    ingredients: [
      "Sesame oil base",
      "Ashwagandha",
      "Bala",
      "Dashamool",
      "Shatavari",
      "Manjistha",
      "Turmeric",
      "Camphor",
      "Devdaru",
    ],
    indications: [
      "Nourishes skin, muscles, and joints deeply",
      "Relieves body fatigue, stress, and muscle stiffness",
      "Improves blood circulation and lymphatic drainage",
      "Balances Vata dosha; calms nervous system",
      "Promotes sound sleep and mental relaxation",
      "Suitable for daily self-massage (Dinacharya)",
    ],
    directions: [
      "Warm the oil slightly before use",
      "Apply generously over entire body",
      "Massage in long strokes on limbs, circular motion on joints",
      "Leave for 15–30 minutes before bathing with warm water",
      "Best practiced daily in the morning",
    ],
    precautions: [
      "For external use only",
      "Avoid contact with eyes and open wounds",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "udvartan-powder": {
    id: "udvartan-powder",
    title: "Udvartan Powder",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/udvartna.png",
    brand: "Ayurmana",
    category: "Ayurvedic Herbal Body Scrub / Ubtan",
    dosageForm: "Herbal scrub powder",
    packingSize: ["50 g", "100 g", "200 g"],
    ingredients: [
      "Triphala",
      "Haridra (Turmeric)",
      "Lodhra",
      "Vacha",
      "Nagarmotha",
      "Kushtha",
      "Mustard powder",
      "Chickpea flour (Besan)",
      "Rose powder",
    ],
    indications: [
      "Removes dead skin cells and deep cleanses skin",
      "Reduces excess body fat and cellulite (Kapha-reducing)",
      "Improves skin tone, texture, and complexion",
      "Relieves body odour and skin infections",
      "Enhances skin glow and softness",
    ],
    directions: [
      "Mix with water, milk, or rose water to form a paste",
      "Apply on body in upward strokes (against hair direction)",
      "Massage gently for 5-10 minutes, allow to dry for 5 minutes",
      "Rinse with warm water",
      "Use 2-3 times per week",
    ],
    precautions: [
      "For external use only",
      "Avoid contact with eyes",
      "Do not use on broken or irritated skin",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "shatavari-kalpa": {
    id: "shatavari-kalpa",
    title: "Shatavari Kalpa",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/shatavari.png",
    brand: "Ayurmana",
    category: "Ayurvedic Women's Health Tonic",
    dosageForm: "Herbal granules / powder (Kalpa)",
    packingSize: ["100 g", "250 g", "500 g"],
    ingredients: [
      "Shatavari (Asparagus racemosus) extract",
      "Sugar / Mishri",
      "Cardamom",
      "Pippali",
      "Ginger",
    ],
    indications: [
      "Nourishes and strengthens female reproductive system",
      "Regulates menstrual cycle and relieves dysmenorrhea",
      "Increases breast milk production in lactating mothers",
      "Relieves menopausal symptoms — hot flashes, mood swings, dryness",
      "Improves fertility and hormonal balance",
      "Acts as a general Rasayana for women of all ages",
    ],
    directions: [
      "1-2 teaspoons (5-10 g) mixed in warm milk, twice daily",
      "Best taken after meals",
      "Continue for minimum 2-3 months for hormonal benefits",
    ],
    precautions: [
      "Consult physician during pregnancy",
      "Not recommended without medical supervision for hormonal conditions",
    ],
    manufacturer:
      "Manufactured by Ayurmana | As per Classical Ayurvedic Formulation | No artificial preservatives",
  },
  "durva-kalpa": {
    id: "durva-kalpa",
    title: "Durva Kalpa",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/durva-Kalpa.png",
    brand: "Ayurmana",
    category: "Ayurvedic Herbal Health Supplement",
    dosageForm: "Herbal granules / powder (Kalpa)",
    packingSize: ["100 g", "250 g"],
    ingredients: [
      "Durva (Cynodon dactylon / Doob grass) extract",
      "Mishri",
      "Cardamom",
      "Amla",
    ],
    indications: [
      "Controls excessive bleeding — menorrhagia, epistaxis, haemorrhoids",
      "Beneficial in bleeding disorders and platelet deficiency",
      "Relieves skin diseases, eczema, and itching",
      "Effective in urinary tract infections and burning urination",
      "Cooling, pitta-pacifying Rasayana",
      "Supports liver health and detoxification",
    ],
    directions: [
      "1-2 teaspoons mixed in cold water or milk, twice daily",
      "Best taken on an empty stomach in the morning",
      "Continue for 4-8 weeks as directed by physician",
    ],
    precautions: ["Consult physician before use if pregnant or breastfeeding"],
    manufacturer:
      "Manufactured by Ayurmana | As per Classical Ayurvedic Formulation | No artificial preservatives",
  },
  "pain-relief-oil": {
    id: "pain-relief-oil",
    title: "Pain Relief Oil",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/pain-relief.png",
    brand: "Ayurmana",
    category: "Ayurvedic Analgesic & Anti-inflammatory Oil",
    dosageForm: "Herbal medicated oil (external use only)",
    packingSize: ["50 ml", "100 ml", "200 ml"],
    ingredients: [
      "Nirgundi",
      "Shallaki (Boswellia)",
      "Dashamool",
      "Eranda (Castor oil)",
      "Mahanarayan oil",
      "Camphor",
      "Ajwain",
      "Eucalyptus oil",
      "Sesame oil base",
    ],
    indications: [
      "Relieves joint pain, arthritis, and spondylosis",
      "Reduces muscle pain, sprains, and stiffness",
      "Beneficial in backache, knee pain, and shoulder pain",
      "Improves local blood circulation",
      "Reduces swelling and inflammation around joints",
    ],
    directions: [
      "Apply a sufficient amount on the affected area",
      "Massage gently in circular motion for 5-10 minutes",
      "Apply twice daily — morning and night",
      "For deeper relief, cover with a warm cloth after application",
    ],
    precautions: [
      "For external use only",
      "Keep away from eyes and open wounds",
      "Do not ingest",
      "Discontinue if skin irritation occurs",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
  "hand-crafted-soap": {
    id: "hand-crafted-soap",
    title: "Handcrafted Soap",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/soap.jpg",
    brand: "Ayurmana",
    category: "Ayurvedic Natural Herbal Soap",
    dosageForm: "Solid herbal soap bar (handcrafted, cold-process method)",
    packingSize: ["75 g", "100 g"],
    ingredients: [
      "Cold-pressed Coconut oil",
      "Shea butter",
      "Neem",
      "Turmeric",
      "Sandalwood",
      "Rose",
      "Aloe Vera",
      "Manjistha",
      "Chandan",
      "Essential oils (natural fragrance)",
    ],
    indications: [
      "Deeply cleanses without stripping natural skin moisture",
      "Treats acne, pimples, and skin infections",
      "Brightens skin tone and reduces pigmentation",
      "Suitable for sensitive, dry, and combination skin",
      "Free from SLS, parabens, synthetic fragrances, and artificial colours",
    ],
    directions: [
      "Wet skin with water, lather the soap between palms",
      "Apply gently on face and body in circular motion",
      "Rinse thoroughly with water",
      "Pat dry; follow with moisturiser if needed",
      "Suitable for daily use",
    ],
    precautions: ["For external use only", "Avoid contact with eyes"],
    manufacturer:
      "Manufactured by Ayurmana | Handcrafted with natural ingredients | No harmful chemicals",
  },
  "bheem-kalpa": {
    id: "bheem-kalpa",
    title: "Balbheem Kalpa",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/BHEEM-KALPA.jpg",
    brand: "Ayurmana",
    category: "Ayurvedic Paediatric Strength & Growth Tonic",
    dosageForm: "Herbal granules / powder (Kalpa)",
    packingSize: ["100 g", "250 g"],
    ingredients: [
      "Ashwagandha",
      "Shatavari",
      "Vidari",
      "Bala",
      "Amla",
      "Yashtimadhu",
      "Pippali",
      "Go-Ghrita",
      "Mishri",
    ],
    indications: [
      "Promotes healthy weight gain and physical growth in children",
      "Builds strength, stamina, and muscle mass",
      "Improves appetite and digestion",
      "Enhances immunity and reduces recurrent illness",
      "Supports brain development and concentration",
      "Beneficial in malnourished and underweight children",
    ],
    directions: [
      "Children (3-6 yrs): ½ tsp in warm milk, once daily",
      "Children (6-12 yrs): 1 tsp in warm milk, twice daily",
      "Best taken after meals",
      "Continue for 2-3 months for visible results",
    ],
    precautions: [
      "Consult physician before use",
      "Not recommended for children under 3 years without medical supervision",
    ],
    manufacturer:
      "Manufactured by Ayurmana | As per Classical Ayurvedic Formulation | No artificial preservatives",
  },
  "height-growth-kit": {
    id: "height-growth-kit",
    title: "Height Growth Kit",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/growth-Kit.png",
    brand: "Ayurmana",
    category: "Ayurvedic Growth Supplement Kit",
    dosageForm: "Granules + Tablets + Oil (combination kit)",
    packingSize: ["1 month supply", "3 month supply"],
    ingredients: [
      "Ashwagandhadi Granules — Bone and muscle strengthening",
      "Laksha Guggul tablets — Bone density and growth support",
      "Height Growth Oil — For massage on spine, legs, and joints",
      "Ashwagandha, Shatavari, Guduchi, Arjuna, Laksha, Bala, Calcium-rich herbs",
    ],
    indications: [
      "Supports natural height increase during growing years (8-21 years)",
      "Strengthens bones, cartilage, and spinal health",
      "Improves posture and overall skeletal development",
      "Boosts growth hormone activity naturally",
      "Improves calcium absorption and bone mineral density",
    ],
    directions: [
      "Granules: 1 tsp in warm milk, twice daily after meals",
      "Tablets: 1-2 tablets twice daily with warm milk/water",
      "Oil: Massage along spine, legs, and knee joints daily at night",
      "Best results when combined with stretching exercises and adequate sleep (8 hrs)",
      "Recommended age: 8-21 years",
      "Continue minimum 3-6 months under physician guidance",
    ],
    precautions: [
      "Consult physician before use",
      "Results may vary based on genetics and lifestyle factors",
      "Not recommended after bone plate fusion (typically after 21 years)",
    ],
    manufacturer:
      "Manufactured by Ayurmana | As per Classical Ayurvedic Formulation | No artificial preservatives",
  },
  "face-pack": {
    id: "face-pack",
    title: "Face Pack",
    image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/Face-Pack.png",
    brand: "Ayurmana",
    category: "Ayurvedic Herbal Face Pack",
    dosageForm: "Herbal powder face pack (100% natural, chemical-free)",
    packingSize: ["50 g", "100 g"],
    ingredients: [
      "Multani Mitti",
      "Haridra (Turmeric)",
      "Chandan (Sandalwood)",
      "Lodhra",
      "Manjistha",
      "Vetiver (Ushira)",
      "Rose petal powder",
      "Neem",
      "Yashtimadhu",
      "Masoor Dal powder",
    ],
    indications: [
      "Brightens skin tone and reduces pigmentation & dark spots",
      "Controls acne, pimples, and excess oil secretion",
      "Reduces open pores and improves skin texture",
      "Relieves skin inflammation, redness, and irritation",
      "Nourishes and hydrates skin deeply",
      "Suitable for all skin types — oily, dry, combination, sensitive",
    ],
    directions: [
      "Mix 1-2 teaspoons with rose water, raw milk, or plain water to form a smooth paste",
      "Apply evenly on clean face and neck, avoiding eye area",
      "Leave for 15-20 minutes until partially dry",
      "Rinse gently with cold water in circular motion",
      "Pat dry and apply Ayurmana moisturiser or rose water as toner",
      "Use 2 times per week for best results",
    ],
    precautions: [
      "For external use only",
      "Avoid contact with eyes",
      "Perform patch test before first use",
      "Discontinue if skin irritation occurs",
    ],
    manufacturer:
      "Manufactured by Ayurmana | 100% Natural & Ayurvedic | No harmful chemicals",
  },
};

const DEFAULT_PRODUCT = {
  id: "default",
  title: "Product Details",
  subtitle: "Ayurvedic Product Information",
  image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/soap.jpg",
  brand: "Ayurmana",
  category: "Ayurvedic Product",
  dosageForm: "Product details will be added soon",
  packingSize: ["To be updated"],
  ingredients: ["Information coming soon"],
  indications: ["Information coming soon"],
  directions: ["Information coming soon"],
  precautions: ["Information coming soon"],
  manufacturer: "Manufactured by Ayurmana",
};

function getProductDetail(productId) {
  return PRODUCT_DB[productId] || DEFAULT_PRODUCT;
}

function SectionTitle({ children }) {
  return <h3 className={styles.sectionTitle}>{children}</h3>;
}

function InfoLabel({ children }) {
  return <span className={styles.infoLabel}>{children}</span>;
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductDetail(productId);

  const overviewPoints = [
    "Prepared with classical Ayurvedic formulations",
    "Supports daily wellness and preventive care",
    "Authentic ingredients as per traditional texts",
  ];

  return (
    <div className={styles.productDetailPage}>
      <section className={styles.hero}>
        <div className="container">
          <Link to="/products" className={styles.backLink}>
            <FaArrowLeft size={12} />
            Back to Products
          </Link>
          <h1 className={styles.heroTitle}>{product.title}</h1>
          <p className={styles.heroSubtitle}>{product.subtitle}</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.twoColumnGrid}>
            {/* Left Column - Product Info */}
            <AnimateOnScroll direction="right">
              <div>
                <SectionTitle>Overview</SectionTitle>
                <p className={styles.overviewText}>
                  {product.title} is a classical Ayurvedic formulation prepared
                  with authentic herbs and traditional methods to support
                  overall wellness and balance.
                </p>
                <p className={styles.descriptionText}>
                  This product is manufactured following strict quality
                  standards and traditional Ayurvedic principles to ensure
                  maximum efficacy and safety.
                </p>

                <SectionTitle>Key Benefits</SectionTitle>
                <ul className={styles.benefitsList}>
                  {overviewPoints.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <FaCheckCircle className={styles.checkIcon} size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <SectionTitle>Contents / Key Ingredients</SectionTitle>
                <ul className={styles.ingredientsList}>
                  {product.ingredients.map((item, idx) => (
                    <li key={idx} className={styles.ingredientItem}>
                      <FaCheckCircle className={styles.checkIcon} size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <SectionTitle>Indications</SectionTitle>
                <div className={styles.indicationsWrapper}>
                  {product.indications.map((ind, idx) => (
                    <span key={idx} className={styles.indicationTag}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Column - Product Card */}
            <AnimateOnScroll direction="left">
              <div className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.productDetails}>
                  <div className={styles.detailSection}>
                    <InfoLabel>Product Type</InfoLabel>
                    <p className={styles.detailValue}>{product.category}</p>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Brand</InfoLabel>
                    <p className={styles.detailValue}>{product.brand}</p>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Dosage Form</InfoLabel>
                    <p className={styles.detailValue}>{product.dosageForm}</p>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Packing Size</InfoLabel>
                    <p className={styles.detailValue}>
                      {product.packingSize.join(" | ")}
                    </p>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Directions of Use</InfoLabel>
                    <ul className={styles.directionsList}>
                      {product.directions.map((item, idx) => (
                        <li key={idx} className={styles.directionItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Precautions</InfoLabel>
                    <ul className={styles.precautionsList}>
                      {product.precautions.map((item, idx) => (
                        <li key={idx} className={styles.precautionsItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <InfoLabel>Manufacturing Note</InfoLabel>
                    <p className={styles.detailValue}>{product.manufacturer}</p>
                  </div>

                  <Link to="/contact" className={styles.enquireButton}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
