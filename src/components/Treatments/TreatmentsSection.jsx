import TreatmentCard from "./TreatmentCard";
import AnimateOnScroll from "../AnimateOnScroll";
import styles from "./TreatmentsSection.module.css";

export default function TreatmentsSection() {
  const treatments = [
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/snehana.jpg",
      title: "Snehana",
      description:
        "Medicated oils and ghee applied internally or externally to deeply nourish tissues, loosen toxins, and prepare the body for complete Panchakarma healing.",
      path: "/treatment/snehana",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/swedana.jpg",
      title: "Swedana",
      description:
        "Therapeutic herbal steam that opens the body's channels, melts deep-seated toxins, and relieves stiffness, heaviness, and muscular tension from within.",
      path: "/treatment/swedana",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/vamana.jpg",
      title: "Vamana",
      description:
        "A physician-supervised Panchakarma procedure that eliminates excess Kapha through controlled emesis — powerfully effective for respiratory, skin, and digestive disorders.",
      path: "/treatment/vamana",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/virechana.jpg",
      title: "Virechana",
      description:
        "Medicated purgation that cleanses the liver, gut, and blood of excess Pitta — delivering lasting relief in skin conditions, acidity, and hormonal imbalances.",
      path: "/treatment/virechana",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/basti.jpg",
      title: "Basti",
      description:
        "Herbal oils and decoctions administered rectally to directly pacify Vata — the root of most diseases. Highly effective for joint, neurological, and digestive conditions.",
      path: "/treatment/basti",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/nasya.jpg",
      title: "Nasya",
      description:
        "Medicated oils instilled through the nasal passage to cleanse the cranial region — relieving sinusitis, migraine, cervical stiffness, and sensory disorders effectively.",
      path: "/treatment/nasya",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/leech_threrapy.jpg",
      title: "Raktamokshana (Leech Therapy)",
      description:
        "A precise Panchakarma procedure that eliminates blood-borne toxins — classically indicated for skin disorders, gout, varicose veins, and chronic Pitta conditions.",
      path: "/treatment/raktamokshana",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/shirodhara.jpg",
      title: "Shirodhara",
      description:
        "A warm stream of medicated oil flows gently over the forehead, calming the nervous system and offering profound relief in stress, anxiety, insomnia, and depression.",
      path: "/treatment/shirodhara",
    },
    {
      image: "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/udvartana.jpg",
      title: "Udvartana",
      description:
        "A stimulating full-body herbal powder massage that burns fat, brightens skin, boosts lymphatic drainage, and leaves the body feeling deeply cleansed and refreshed.",
      path: "/treatment/udvartana",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/patra_pottali.png",
      title: "Patra Pottali",
      description:
        "Warm medicinal leaf boluses applied rhythmically to the body — deeply relieving arthritis, joint degeneration, muscular pain, and sports-related injuries.",
      path: "/treatment/patraPottali",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/kansya_thali.png",
      title: "Kansya Thali",
      description:
        "A therapeutic bronze bowl massage on the feet — stimulating vital Marma points to relieve fatigue, improve vision, calm the mind, and promote deep restful sleep.",
      path: "/treatment/kansyaThali",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/changedKatiVasti.jpg",
      title: "Kati Vasti",
      description:
        "Warm medicated oil retained on the lower back to lubricate the spine, relieve nerve pressure, and heal conditions like sciatica, slipped disc, and lumbar spondylosis.",
      path: "/treatment/katiVasti",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/netraTarpana.jpg",
      title: "Netra Tarpana",
      description:
        "Warm medicated ghee retained over the eyes to nourish ocular tissues, strengthen vision, and effectively relieve dry eyes, eye strain, and computer vision syndrome.",
      path: "/treatment/netraTarpana",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/agni%20karma.jpg",
      title: "Agni Karma",
      description:
        "A precise classical procedure using controlled therapeutic heat to treat chronic pain, tendon disorders, and musculoskeletal conditions resistant to conventional Ayurvedic treatment.",
      path: "/treatment/agnikarma",
    },
    {
      image:
        "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/vidhikarma.png",
      title: "Viddha Karma",
      description:
        "A classical Ayurvedic needling procedure that releases blocked energy, eliminates localised toxins, and restores Vata flow — indicated for chronic pain, nerve disorders, and musculoskeletal conditions.",
      path: "/treatment/viddhakarma",
    },
  ];

  return (
    <section id="treatments" className={`${styles.treatments} section`}>
      <div className="container">
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className={styles.headerArea}>
            <span className={styles.accentHeading}>Our Specialities</span>
            <h2 className={styles.title}>Specialized Treatments</h2>
            <p className={styles.description}>
              We provide traditional Ayurvedic therapies customized to address
              specific health concerns, restoring body balance under the
              guidance of our expert practitioners.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {treatments.map((treatment, idx) => (
            <AnimateOnScroll
              key={treatment.title}
              direction="up"
              delay={0.1 * (idx + 1)}
            >
              <TreatmentCard
                image={treatment.image}
                title={treatment.title}
                description={treatment.description}
                path={treatment.path}
              />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up" delay={0.3}>
          <a href="#booking" className="btn btn-primary">
            Schedule a Treatment
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
