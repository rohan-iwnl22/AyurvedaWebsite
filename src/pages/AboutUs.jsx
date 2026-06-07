import AnimateOnScroll from "../components/AnimateOnScroll";

const whyChooseUs = [
  {
    title: "Authentic",
    description:
      "Every treatment we offer is rooted in classical Ayurvedic texts and administered with complete clinical integrity.",
    icon: "🌿",
  },
  {
    title: "Personalised",
    description:
      "No two care plans at Ayurmana are alike — every treatment is individually prescribed based on your unique constitution.",
    icon: "✨",
  },
  {
    title: "Experienced",
    description:
      "Our team of qualified Ayurvedic physicians and certified therapists bring years of dedicated clinical expertise to every consultation.",
    icon: "📜",
  },
  {
    title: "Affordable",
    description:
      "Ayurvedic care delivered at honest, transparent pricing — because genuine healing should be accessible to all.",
    icon: "💰",
  },
  {
    title: "Trusted",
    description:
      "Chosen by patients across Akola for our unwavering commitment to genuine, result-driven Ayurvedic care.",
    icon: "⭐",
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Mini Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
          color: "white",
          padding: "100px 0 60px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            About Ayurmana Classical Ayurveda. Personalised Care. Lasting
            Results.
          </h1>
          <p
            style={{
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            Our Heritage & Modern Ayurvedic Care
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-bg-white)" }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <AnimateOnScroll direction="up">
            <p
              style={{
                marginBottom: "1.5rem",
                lineHeight: "1.7",
                fontSize: "1.05rem",
              }}
            >
              The name Ayurmana reflects our deepest purpose — to enrich the
              quality and extend the span of every life we touch. Founded in the
              heart of Akola, our clinic was established with a singular vision
              — to make authentic, classical Ayurvedic medicine accessible to
              every individual seeking genuine, root-cause healing. We have
              since grown into one of the region's most trusted centres for
              classical Ayurvedic medicine, comprehensive Panchakarma therapies,
              and integrative nutritional wellness.
            </p>
            <p
              style={{
                marginBottom: "1.5rem",
                lineHeight: "1.7",
                fontSize: "1.05rem",
              }}
            >
              At Ayurmana, every patient is seen as a unique individual — a
              distinct combination of constitution, lifestyle, and healing
              potential. Our team of qualified Ayurvedic physicians and
              certified therapy specialists invest time in truly understanding
              you before prescribing a single treatment. Every care plan is
              individually crafted, classically grounded, and designed to
              deliver results that endure long after your treatment concludes.
            </p>
            <p
              style={{
                marginBottom: "1.5rem",
                lineHeight: "1.7",
                fontSize: "1.05rem",
              }}
            >
              We believe that true healthcare is not reactive — it is
              preventive, restorative, and deeply personal. It is not enough to
              treat what is visible. Genuine healing demands addressing what
              lies beneath — the root causes and imbalances that give rise to
              illness in the first place. That is the standard we hold ourselves
              to at Ayurmana, every single day — not merely as a clinic, but as
              a centre sincerely devoted to the health and longevity of every
              life we are privileged to care for.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <h2
              style={{
                color: "var(--color-primary-dark)",
                marginBottom: "1.5rem",
              }}
            >
              Our Diagnostic Method
            </h2>
            <h3
              style={{
                color: "var(--color-primary-dark)",
                marginBottom: "1.5rem",
              }}
            >
              Ancient Diagnostic Intelligence. Unmatched Clinical Clarity.
            </h3>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.7" }}>
              True Ayurvedic treatment begins long before the first therapy is
              administered — it begins with understanding the patient
              completely. At Ayurmana, our diagnostic process follows the
              classical Trividha Pariksha framework — Darshanam (observation),
              Sparshanam (palpation), and Prashnam (interrogation) —
              systematically supported by Ashta Sthana Pariksha, an eight-fold
              clinical examination incorporating the precise and insightful
              practice of Nadi Pariksha (pulse assessment).
            </p>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.7" }}>
              This comprehensive diagnostic approach ensures we identify your
              unique Prakriti and existing Vikriti with accuracy — forming the
              essential foundation upon which every personalised, effective, and
              lasting treatment plan at Ayurmana is built.
            </p>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href="#booking" className="btn btn-primary">
                Book Consultation Now
              </a>
            </div>
          </AnimateOnScroll>

          {/* Enhanced Why Choose Us Section */}
          <AnimateOnScroll direction="up" delay={0.2}>
            <div
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                border: "1px solid var(--color-border)",
                borderRadius: "20px",
                padding: "3rem 2rem",
                margin: "4rem 0",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    color: "var(--color-primary)",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Why Choose Us
                </span>
                <h2
                  style={{
                    color: "var(--color-primary-dark)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  What Makes Ayurmana Different
                </h2>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                >
                  Excellence in every aspect of your healing journey
                </p>
              </div>

              {/* Dynamic rendering from whyChooseUs array */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "2rem",
                  marginBottom: "2rem",
                }}
              >
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: "white",
                      padding: "1.8rem",
                      borderRadius: "16px",
                      textAlign: "center",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 30px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 10px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    <div
                      style={{
                        fontSize: "3rem",
                        marginBottom: "1rem",
                        display: "inline-block",
                        background:
                          "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)",
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                    </div>
                    <h3
                      style={{
                        color: "var(--color-primary-dark)",
                        marginBottom: "1rem",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        lineHeight: "1.6",
                        fontSize: "0.95rem",
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
