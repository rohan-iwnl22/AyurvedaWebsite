import TreatmentCard from './TreatmentCard';
import AnimateOnScroll from '../AnimateOnScroll';
import styles from './TreatmentsSection.module.css';

export default function TreatmentsSection() {
  const treatments = [
    {
      image: '/images/shirodhara.jpg',
      title: 'Shirodhara',
      description: 'Continuous pouring of warm medicated oil on the forehead to relieve stress, anxiety, headaches, and sleeplessness.',
      path: '/treatment/shirodhara',
    },
    {
      image: '/images/potali-1.jpg',
      title: 'Potali Massage',
      description: 'Therapeutic massage using heated linen bags filled with specialized herbs to alleviate muscular spasms and joint stiffness.',
      path: '/treatment/potali-massage',
    },
    {
      image: '/images/nasayam1.jpg',
      title: 'Nasayam',
      description: 'Nasal administration of medicated oil to clear toxins from the head and neck, resolving sinus, headaches, and neck stiffness.',
      path: '/treatment/nasayam',
    },
    {
      image: '/images/abhyangam.jpg',
      title: 'Abhyangam',
      description: 'Gentle full-body massage with customized warm Ayurvedic oils to improve blood circulation, rejuvenate tissues, and boost immunity.',
      path: '/treatment/abhyangam',
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
              We provide traditional Ayurvedic therapies customized to address specific health concerns, restoring body balance under the guidance of our expert practitioners.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {treatments.map((treatment, idx) => (
            <AnimateOnScroll key={treatment.title} direction="up" delay={0.1 * (idx + 1)}>
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
