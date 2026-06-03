import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';

const TREATMENT_DB = {
  'kati-vasti': {
    title: 'Kati Vasti (Lower Back Treatment)',
    subtitle: 'Targeted Spine Rejuvenation',
    image: '/images/vertical1.jpg',
    intro: 'Kati Vasti is a highly effective classical treatment where warm medicated herbal oil is retained on the lower back within a localized reservoir made of black gram dough.',
    description: 'This therapy lubricates the spine, relieves pressure on nerve roots, and nourishes the muscle fibers and skeletal structure of the lumbar region.',
    benefits: [
      'Relieves lower back pain, muscle spasms, and stiffness',
      'Effective for slip disc, lumbar spondylosis, and sciatica',
      'Enhances blood circulation in the lumbosacral region',
      'Strengthens the spinal bones, ligaments, and nerves',
    ],
    indications: ['Chronic Lower Back Pain', 'Sciatica', 'Slipped Disc', 'Lumbar Spondylosis', 'Spinal Stiffness'],
    duration: '45 Minutes',
    recommendation: '7 to 14 sessions depending on the severity of symptoms.',
  },
  'anti-ageing': {
    title: 'Rasayana (Anti-Ageing & Rejuvenation)',
    subtitle: 'Nourish Tissues and Restore Youth',
    image: '/images/vision.jpg',
    intro: 'Ayurvedic Anti-Ageing therapy (Rasayana) is a comprehensive cellular rejuvenation program designed to replenish vital body fluids (Ojas) and delay degeneration.',
    description: 'By boosting your digestive fire (Agni) and purifying blood channels, this treatment enhances skin health, boosts cognitive function, and improves immunity.',
    benefits: [
      'Prevents premature aging and restores skin elasticity and luster',
      'Nourishes all seven body tissues (Dhatus)',
      'Enhances immunity, stamina, and overall cellular vitality',
      'Reduces physiological stress, improving memory and sleep quality',
    ],
    indications: ['Premature Aging', 'Chronic Fatigue', 'General Debility', 'Low Immunity', 'Mental Exhaustion'],
    duration: '60 Minutes',
    recommendation: '3 to 5 sessions, combined with specific Ayurvedic diets.',
  },
  shirodhara: {
    title: 'Shirodhara (Mind Relaxation Therapy)',
    subtitle: 'Gently Calm the Nervous System',
    image: '/images/shirodhara.jpg',
    intro: 'Shirodhara is a classical Ayurvedic therapy where a continuous, gentle stream of warm medicated herbal oil is poured onto the forehead (specifically the third eye region).',
    description: 'This deeply relaxing treatment creates a profound state of rest, balancing the endocrine system and releasing deep-seated psychological stress.',
    benefits: [
      'Relieves stress, anxiety, panic attacks, and depression',
      'Promotes deep, sound sleep and cures chronic insomnia',
      'Relieves chronic headaches, migraines, and sinusitis',
      'Balances the nervous system and improves mental clarity',
    ],
    indications: ['Insomnia', 'Chronic Anxiety', 'Migraine & Tension Headaches', 'Hypertension', 'Stress Overload'],
    duration: '50 Minutes',
    recommendation: '7 sessions scheduled consecutively for maximum therapeutic benefit.',
  },
  panchakarma: {
    title: 'Panchakarma (Five-Fold Detoxification)',
    subtitle: 'Ultimate Body Cleanse & Purify',
    image: '/images/vision.jpg',
    intro: 'Panchakarma is the ultimate purification and detoxification program in Ayurveda, consisting of five deep-cleansing processes that eliminate accumulated toxins (Ama).',
    description: 'It restores body equilibrium by balancing the Vata, Pitta, and Kapha doshas, correcting metabolism and curing ailments at their root level.',
    benefits: [
      'Flushes out deep-seated cellular toxins and metabolic wastes',
      'Restores gut health, improving digestion and metabolism',
      'Re-balances body doshas, eliminating root causes of illnesses',
      'Rejuvenates the immune system and increases absorption of nutrients',
    ],
    indications: ['Chronic Health Conditions', 'Toxic Build-up', 'Digestive Disorders', 'Rheumatoid Arthritis', 'Allergies'],
    duration: '90 Minutes per session',
    recommendation: 'Complete program ranges from 7, 14, to 21 days.',
  },
  arthritis: {
    title: 'Arthritis Care Therapy',
    subtitle: 'Joint Lubrication and Pain Relief',
    image: '/images/abhyangam.jpg',
    intro: 'Our specialized Arthritis Care Therapy combines external therapies like Janu Vasti, Patra Pinda Sweda (herbal leaf bolus massage), and specific herbal anti-inflammatory oils.',
    description: 'This treatment targets swelling, improves joint mobility, and arrests the degeneration of cartilage in joints affected by Osteoarthritis or Rheumatoid Arthritis.',
    benefits: [
      'Reduces joint pain, swelling, and localized inflammation',
      'Improves joint range of motion and flexibility',
      'Nourishes the synovial membrane and cartilage tissues',
      'Eliminates toxins (Ama) accumulated in joint sockets',
    ],
    indications: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Gouty Arthritis', 'Knee Joint Stiffness', 'Joint Degeneration'],
    duration: '60 Minutes',
    recommendation: '8 to 14 sessions, paired with strict dietary modifications.',
  },
  'back-pain': {
    title: 'Back Pain Relief Therapy',
    subtitle: 'Decompress Spine and Relieve Muscular Strain',
    image: '/images/potali-1.jpg',
    intro: 'Our customized Back Pain Therapy is designed to treat chronic back strain, postural errors, and muscular spasms using warm oil fomentations and specialized massages.',
    description: 'Combining Abhyangam and herbal steam, this therapy improves spine elasticity and releases tight muscles holding the pelvic and dorsal sections.',
    benefits: [
      'Releases deep muscular knots and spasms along the spine',
      'Decreases pain and numbness caused by compressed nerves',
      'Improves posture and muscular flexibility of the back',
      'Lubricates vertebral joints, stopping wear and tear',
    ],
    indications: ['Chronic Backache', 'Muscle Strain', 'Postural Deficit', 'Lumbago', 'Spinal Spasm'],
    duration: '60 Minutes',
    recommendation: '5 to 7 sessions recommended.',
  },
  spondylosis: {
    title: 'Spondylosis Care',
    subtitle: 'Cervical and Lumbar Support',
    image: '/images/vertical1.jpg',
    intro: 'Spondylosis Care focuses on relieving degenerative wear and tear of the spine. We utilize therapies like Greeva Vasti (oil retention on the neck) and Elakizhi.',
    description: 'This treatment reduces stiffness in the neck and shoulders, cures shooting pain down the arms, and strengthens spinal discs.',
    benefits: [
      'Alleviates radiating neck pain, shoulder stiffness, and tingling',
      'Prevents disc degeneration and bone spurs (osteophytes)',
      'Improves spine flexibility and rotation margins',
      'Nourishes cervical and lumbar discs and surrounding muscles',
    ],
    indications: ['Cervical Spondylosis', 'Lumbar Spondylosis', 'Disc Prolapse', 'Neck Stiffness', 'Frozen Shoulder'],
    duration: '60 Minutes',
    recommendation: '7 to 14 sessions.',
  },
  'skin-diseases': {
    title: 'Skin Disease Relief',
    subtitle: 'Blood Purification and Cooling Therapies',
    image: '/images/nasayam1.jpg',
    intro: 'Ayurvedic Skin Therapy focuses on purifying the blood (Rakta Shodhana) and pacifying aggravated Pitta and Kapha doshas, which are the main causes of skin eruptions.',
    description: 'Using herbal body wraps (Lepa), Takradhara (medicated buttermilk stream), and detoxifying herbs, we soothe irritated skin and stimulate natural healing.',
    benefits: [
      'Soothes skin inflammation, itching, and scaling',
      'Flushes out blood impurities and metabolic toxins',
      'Restores skin color, barrier strength, and moisture balance',
      'Highly effective for managing Psoriasis, Eczema, and Acne',
    ],
    indications: ['Psoriasis', 'Eczema', 'Chronic Acne', 'Urticaria', 'Fungal Skin Conditions'],
    duration: '60 Minutes',
    recommendation: '14 sessions combined with Virechana (purgation) detox.',
  },
};

export default function TreatmentPage() {
  const { treatmentId } = useParams();
  const treatment = TREATMENT_DB[treatmentId];

  if (!treatment) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Treatment Not Found</h2>
        <p>Sorry, the treatment you are looking for is not listed in our database.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="treatment-detail-page">
      {/* Top Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
          color: 'white',
          padding: '100px 0 60px 0',
        }}
      >
        <div className="container">
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--color-accent)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            <FaArrowLeft size={12} />
            Back to Treatments
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '0.5rem' }}>
            {treatment.title}
          </h1>
          <p style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
            {treatment.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'flex-start' }}>
            {/* Left text column */}
            <AnimateOnScroll direction="right">
              <div>
                <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                  Overview
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', fontWeight: 500, lineHeight: '1.6', marginBottom: '1rem' }}>
                  {treatment.intro}
                </p>
                <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                  {treatment.description}
                </p>

                <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.25rem' }}>Key Benefits</h3>
                <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
                  {treatment.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '0.8rem',
                        fontSize: '0.95rem',
                      }}
                    >
                      <FaCheckCircle style={{ color: 'var(--color-accent)', marginTop: '0.2rem', flexShrink: 0 }} size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Indications</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {treatment.indications.map((ind, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        backgroundColor: 'var(--color-bg-light)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-primary-dark)',
                      }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right details column */}
            <AnimateOnScroll direction="left">
              <div
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-premium)',
                  backgroundColor: 'var(--color-bg-light)',
                }}
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  style={{ width: '100%', height: '240px', objectFit: 'cover' }}
                />
                
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      Session Duration
                    </span>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                      {treatment.duration}
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      Recommended Course
                    </span>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-dark)', lineHeight: '1.5' }}>
                      {treatment.recommendation}
                    </p>
                  </div>

                  <Link to="/#booking" className="btn btn-primary" style={{ width: '100%' }}>
                    Book Appointment Now
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
