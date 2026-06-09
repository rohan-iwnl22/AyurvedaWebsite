import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const AyurmanLogo =
  "https://ik.imagekit.io/umm5llpkg/Ayurmana%20Clinic/logo.png";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and reset expanded state when location changes
  useEffect(() => {
    if (isMobileOpen) {
      setIsMobileOpen(false);
      setMobileExpanded({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    {
      label: "Wellness",
      path: "#",
      children: [
        { label: "Snehana", path: "/treatment/snehana" },
        { label: "Swedana", path: "/treatment/swedana" },
        { label: "Vamana", path: "/treatment/vamana" },
        { label: "Virechana", path: "/treatment/virechana" },
        { label: "Basti", path: "/treatment/basti" },
        { label: "Nasya", path: "/treatment/nasya" },
        { label: "Raktamokshana", path: "/treatment/raktamokshana" },
        { label: "Shirodhara", path: "/treatment/shirodhara" },
        { label: "Udvartana", path: "/treatment/udvartana" },
        { label: "Patra Pottali", path: "/treatment/patraPottali" },
        { label: "Kansya Thali", path: "/treatment/kansyaThali" },
        { label: "Kati Vasti", path: "/treatment/katiVasti" },
        { label: "Netra Tarpana", path: "/treatment/netraTarpana" },
        { label: "Agnikarma", path: "/treatment/agnikarma" },
        { label: "Viddhakarma", path: "/treatment/  " },
      ],
    },
    {
      label: "Treatments",
      path: "#",
      children: [
        { label: "Arthritis", path: "/treatment/arthritis" },
        { label: "Varicose Veins", path: "/treatment/varicoseVeins" },
        { label: "Insomnia", path: "/treatment/insomnia" },
        { label: "Stress & Strain", path: "/treatment/stressStrain" },
        { label: "Back Pain", path: "/treatment/backPain" },
        {
          label: "Cervical Spondylitis",
          path: "/treatment/cervicalSpondylitis",
        },
        { label: "Infertility", path: "/treatment/infertility" },
        { label: "Heart Disease", path: "/treatment/heartDisease" },
        { label: "Paralysis", path: "/treatment/paralysis" },
        { label: "PCOS / PMOS", path: "/treatment/pcos" },
        { label: "Psoriasis", path: "/treatment/psoriasis" },
        { label: "Migraine", path: "/treatment/migraine" },
        {
          label: "Specialised Treatments",
          path: "/treatment/specialisedTreatments",
        },
        { label: "Diet Counselling", path: "/treatment/dietCounselling" },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
      children: [
        {
          label: "Akola Branch",
          path: "/contact?branch=akola",
        },
      ],
    },
    // {
    //   label: "Our Products",
    //   path: "/contact",
    // },
  ];

  // Split wellness children into two halves
  const wellnessChildren =
    menuItems.find((item) => item.label === "Wellness")?.children || [];
  const wellnessMidPoint = Math.ceil(wellnessChildren.length / 2);
  const wellnessFirstHalf = wellnessChildren.slice(0, wellnessMidPoint);
  const wellnessSecondHalf = wellnessChildren.slice(wellnessMidPoint);

  // Split treatments children into two halves
  const treatmentsChildren =
    menuItems.find((item) => item.label === "Treatments")?.children || [];
  const treatmentsMidPoint = Math.ceil(treatmentsChildren.length / 2);
  const treatmentsFirstHalf = treatmentsChildren.slice(0, treatmentsMidPoint);
  const treatmentsSecondHalf = treatmentsChildren.slice(treatmentsMidPoint);

  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
        <div className={`${styles.navbarContainer} container`}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img
              src={AyurmanLogo}
              alt="Ayurmana Ayurvedic Clinic"
              className={styles.logoImage}
              style={{ height: "45px", width: "auto", marginRight: "10px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "var(--color-primary-dark)",
                  lineHeight: "1.2",
                }}
              >
                Ayurmana
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "var(--color-accent)",
                  fontWeight: 600,
                }}
              >
                AYURVEDIC CLINIC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navMenu}>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                {item.children ? (
                  <span className={styles.navLink}>
                    {item.label} <FaChevronDown size={10} />
                  </span>
                ) : (
                  <Link to={item.path} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <ul
                    className={styles.dropdown}
                    style={
                      item.label === "Wellness" || item.label === "Treatments"
                        ? {
                            minWidth: "500px",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0.5rem",
                            padding: "1rem",
                          }
                        : {}
                    }
                  >
                    {item.label === "Wellness" ? (
                      <>
                        <div>
                          {wellnessFirstHalf.map((child) => (
                            <li
                              key={child.label}
                              className={styles.dropdownItem}
                            >
                              <Link
                                to={child.path}
                                className={styles.dropdownLink}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          {wellnessSecondHalf.map((child) => (
                            <li
                              key={child.label}
                              className={styles.dropdownItem}
                            >
                              <Link
                                to={child.path}
                                className={styles.dropdownLink}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </>
                    ) : item.label === "Treatments" ? (
                      <>
                        <div>
                          {treatmentsFirstHalf.map((child) => (
                            <li
                              key={child.label}
                              className={styles.dropdownItem}
                            >
                              <Link
                                to={child.path}
                                className={styles.dropdownLink}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div>
                          {treatmentsSecondHalf.map((child) => (
                            <li
                              key={child.label}
                              className={styles.dropdownItem}
                            >
                              <Link
                                to={child.path}
                                className={styles.dropdownLink}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </>
                    ) : (
                      item.children.map((child) => (
                        <li key={child.label} className={styles.dropdownItem}>
                          <Link to={child.path} className={styles.dropdownLink}>
                            {child.label}
                          </Link>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            className={styles.burger}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileOpen(true);
            }}
            aria-label="Open menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence mode="wait">
        {isMobileOpen && (
          <div
            className={styles.mobileDrawer}
            onClick={(e) => {
              e.preventDefault();
              setIsMobileOpen(false);
            }}
          >
            <motion.div
              className={styles.mobileDrawerContent}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileDrawerHeader}>
                <img
                  src={AyurmanLogo}
                  alt="Ayurmana Ayurvedic Clinic"
                  className={styles.mobileLogoImage}
                  style={{ height: "35px", width: "auto", marginRight: "8px" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "var(--color-primary-dark)",
                      lineHeight: "1.2",
                    }}
                  >
                    Ayurmana
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: "var(--color-accent)",
                      fontWeight: 600,
                    }}
                  >
                    AYURVEDIC CLINIC
                  </span>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileOpen(false);
                  }}
                  aria-label="Close menu"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <ul className={styles.mobileNavList}>
                {menuItems.map((item) => (
                  <li key={item.label} className={styles.mobileNavItem}>
                    <div className={styles.mobileNavLinkRow}>
                      {item.children ? (
                        <>
                          <span className={styles.mobileNavLink}>
                            {item.label}
                          </span>
                          <button
                            className={styles.mobileExpandBtn}
                            onClick={() => toggleMobileExpanded(item.label)}
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            {mobileExpanded[item.label] ? (
                              <FaChevronUp size={14} />
                            ) : (
                              <FaChevronDown size={14} />
                            )}
                          </button>
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className={styles.mobileNavLink}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>

                    {/* Mobile Expandable Submenu */}
                    {item.children && mobileExpanded[item.label] && (
                      <ul className={styles.mobileDropdown}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.path}
                              className={styles.mobileDropdownLink}
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
