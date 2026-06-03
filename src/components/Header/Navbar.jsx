import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileOpen(false);
    setMobileExpanded({});
  }, [location]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    {
      label: 'Wellness',
      path: '#',
      children: [
        { label: 'Kati Vasti', path: '/treatment/kati-vasti' },
        { label: 'Anti Ageing', path: '/treatment/anti-ageing' },
        { label: 'Shirodhara', path: '/treatment/shirodhara' },
        { label: 'Panchakarma', path: '/treatment/panchakarma' },
      ],
    },
    {
      label: 'Treatments',
      path: '#',
      children: [
        { label: 'Arthritis Care', path: '/treatment/arthritis' },
        { label: 'Back Pain Therapy', path: '/treatment/back-pain' },
        { label: 'Spondylosis Treatment', path: '/treatment/spondylosis' },
        { label: 'Skin Disease Relief', path: '/treatment/skin-diseases' },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      children: [
        { label: 'North Side Branch', path: '/contact?branch=north-side' },
        { label: 'West End Branch', path: '/contact?branch=west-end' },
        { label: 'East Gate Branch', path: '/contact?branch=east-gate' },
        { label: 'South Hub Branch', path: '/contact?branch=south-hub' },
        { label: 'Central Point Branch', path: '/contact?branch=central-point' },
      ],
    },
  ];

  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
        <div className={`${styles.navbarContainer} container`}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <svg
              className={styles.logoImage}
              viewBox="0 0 240 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Prana Logo"
            >
              {/* Elegant Leaf/Tree Emblem */}
              <path
                d="M30 42C30 42 20 38 20 28C20 18 30 12 30 12C30 12 40 18 40 28C40 38 30 42 30 42Z"
                fill="var(--color-primary)"
              />
              <path
                d="M30 12V42"
                stroke="var(--color-bg-light)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M30 22C33 20 37 20 38 24"
                stroke="var(--color-bg-light)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M30 28C33 26 37 26 38 30"
                stroke="var(--color-bg-light)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M30 24C27 22 23 22 22 26"
                stroke="var(--color-bg-light)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M30 30C27 28 23 28 22 32"
                stroke="var(--color-bg-light)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Brand Typography */}
              <text
                x="55"
                y="30"
                fill="var(--color-primary-dark)"
                fontFamily="var(--font-heading)"
                fontSize="20"
                fontWeight="bold"
                letterSpacing="0.05em"
              >
                Ayurmana
              </text>
              <text
                x="55"
                y="45"
                fill="var(--color-accent)"
                fontFamily="var(--font-body)"
                fontSize="9"
                fontWeight="600"
                letterSpacing="0.25em"
              >
                AYURVEDIC CLINIC
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navMenu}>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
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
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.label} className={styles.dropdownItem}>
                        <Link to={child.path} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            className={styles.burger}
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className={styles.mobileDrawer} onClick={() => setIsMobileOpen(false)}>
            <motion.div
              className={styles.mobileDrawerContent}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileDrawerHeader}>
                <svg
                  className={styles.mobileLogoImage}
                  viewBox="0 0 240 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 42C30 42 20 38 20 28C20 18 30 12 30 12C30 12 40 18 40 28C40 38 30 42 30 42Z"
                    fill="var(--color-primary)"
                  />
                  <text
                    x="55"
                    y="35"
                    fill="var(--color-primary-dark)"
                    fontFamily="var(--font-heading)"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    PRANA
                  </text>
                </svg>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsMobileOpen(false)}
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
                          <span className={styles.mobileNavLink}>{item.label}</span>
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
                        <Link to={item.path} className={styles.mobileNavLink}>
                          {item.label}
                        </Link>
                      )}
                    </div>

                    {/* Mobile Expandable Submenu */}
                    {item.children && mobileExpanded[item.label] && (
                      <ul className={styles.mobileDropdown}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.path} className={styles.mobileDropdownLink}>
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
