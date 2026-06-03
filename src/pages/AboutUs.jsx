import AnimateOnScroll from '../components/AnimateOnScroll';

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Mini Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
          color: 'white',
          padding: '100px 0 60px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '1rem' }}>
            About Us
          </h1>
          <p style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
            Our Heritage & Modern Ayurvedic Care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll direction="up">
            <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
              The Story of Muppra Kerala Ayurvedic
            </h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
              Founded in Kannur, Kerala, Muppra Ayurvedic Group was established with the vision of preserving the authentic essence of Ashtangahridayam, the classical scripture of Ayurvedic medicine. What started as a single pharmaceutical preparation unit has now grown into a reputed network of treatment centres and doctors across India.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem' }}>
              We expanded our branches to Pune to meet the growing need for genuine, result-oriented Ayurvedic treatment. Over the last decade, we have successfully treated thousands of patients suffering from chronic illnesses such as arthritis, slip disc, spondylosis, migraine, psoriasis, and lifestyle-induced ailments.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div
              style={{
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '2rem',
                margin: '3rem 0',
              }}
            >
              <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                Our Commitment to Authenticity
              </h3>
              <ul style={{ listStyle: 'inside square', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Pure Oils:</strong> All therapeutic oils are medicated and imported directly from Kerala pharmacies.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Certified Doctors:</strong> Every treatment is curated and monitored by BAMS/MD doctors.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Standardized Care:</strong> Continuous audit and training under NABH guidelines ensure safety.
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
              Our Diagnostic Method
            </h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Every consultation at Muppra incorporates classical diagnostic principles: <strong>Trividha Pariksha</strong> (Darshanam - Observation, Sparshanam - Palpation, Prashnam - Interrogation) and <strong>Ashta Sthana Pariksha</strong> (Eight-fold examination including Nadi Pariksha or pulse assessment). This guarantees that we understand your unique Prakriti (body constitution) and Vikriti (imbalances) before recommending therapeutic actions.
            </p>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#booking" className="btn btn-primary">
                Book Consultation Now
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
