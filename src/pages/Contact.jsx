import { useSearchParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';

const BRANCH_DETAILS = {
  akola: {
    name: 'Ayurmana Ayurvedic Clinic',
    address: 'Shop No:2, Mangal murti Residency, MHADA colony road, behind durga Lawns, kaulkhed, Akola',
    phone: '+91 93707 71021 || +91 89762 97579',
    email: 'ayurmanayurved@gmail.com',
    timing: '8:00 AM - 8:00 PM (Sunday Closed)',
  },
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const branchParam = searchParams.get('branch');
  const highlightedBranch = BRANCH_DETAILS[branchParam] || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <div className="contact-page">
      {/* Hero header */}
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
            Contact Us
          </h1>
          <p style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
            Connect with our Ayurveda Clinics
          </p>
        </div>
      </section>

      {/* Highlighted Branch Box */}
      {highlightedBranch && (
        <section className="section" style={{ backgroundColor: 'rgba(197, 165, 90, 0.1)', padding: '40px 0' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Selected Location
            </span>
            <h2 style={{ color: 'var(--color-primary-dark)', margin: '0.5rem 0 1rem 0' }}>{highlightedBranch.name}</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-dark)', marginBottom: '1.5rem' }}>{highlightedBranch.address}</p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 600 }}><FaPhoneAlt style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }} /> {highlightedBranch.phone}</span>
              <span style={{ fontWeight: 600 }}><FaEnvelope style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }} /> {highlightedBranch.email}</span>
              <span style={{ fontWeight: 600 }}>Timings: {highlightedBranch.timing}</span>
            </div>
          </div>
        </section>
      )}

      {/* Split layout: Form left, Branch selection list right */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem' }}>
            {/* Contact Form Column */}
            <AnimateOnScroll direction="right">
              <div>
                <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Send Us a Message</h2>
                <p style={{ marginBottom: '2rem' }}>Fill out the details below, and our care coordinators will reach back shortly.</p>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="c_name" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Your Name</label>
                      <input id="c_name" type="text" required placeholder="e.g. Amit Patil" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="c_email" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
                      <input id="c_email" type="email" required placeholder="e.g. amit@example.com" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="c_phone" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Phone Number</label>
                    <input id="c_phone" type="tel" required placeholder="e.g. 94220XXXXX" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="c_branch" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Preferred Branch</label>
                    <select id="c_branch" defaultValue={branchParam || ""}>
                      <option value="">General Inquiry</option>
                      <option value="akola">Ayurmana Ayurvedic Clinic</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="c_message" style={{ fontWeight: 600, fontSize: '0.9rem' }}>How can we help you?</label>
                    <textarea id="c_message" rows="5" required placeholder="Write your message here..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* Branches Quick Directory */}
            <AnimateOnScroll direction="left">
              <div>
                <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Branch Quick Directory</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {Object.entries(BRANCH_DETAILS).map(([key, branch]) => (
                    <div
                      key={key}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '8px',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg-light)',
                        transition: 'all var(--transition-fast)',
                        boxShadow: branchParam === key ? '0 0 0 2px var(--color-primary)' : 'none',
                      }}
                    >
                      <h4 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--color-accent)' }} size={14} />
                        {branch.name}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{branch.address}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}><strong>Timings:</strong> {branch.timing}</p>
                      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call: {branch.phone}</a>
                        <a href={`mailto:${branch.email}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Email</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
