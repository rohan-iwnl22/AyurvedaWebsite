# Plan for Replicating muppra.com in ReactJS

## 1. Project Overview

**Muppra.com** is a multi-page WordPress website built with the **Divi theme** for an Ayurvedic treatment centre in Pune, India. The site features a sticky navigation header with dropdown menus, a hero section with decorative botanical illustrations, content sections with side-by-side layouts, treatment service cards, an embedded appointment booking widget, a multi-branch contact/footer section, and a floating WhatsApp chat button.

**Objective:** Rebuild the entire homepage (and routing scaffold for inner pages) as a modern React single-page application that faithfully reproduces the layout, color palette, typography, imagery, and interactions of the original.

### Technology Stack

| Concern | Library | Rationale |
|---|---|---|
| Framework | React 18 + Vite | Fast dev server, modern tooling |
| Routing | React Router v6 | Multi-page structure with nested dropdown routes |
| Styling | CSS Modules or Styled Components | Scoped styles without Divi's global CSS conflicts |
| Animations | Framer Motion | Scroll-triggered fade/slide animations matching Divi's `et-waypoint` behavior |
| Icons | React Icons (FontAwesome subset) | Social icons, WhatsApp icon |
| Calendar/Booking | react-datepicker + custom form | Replicates the Amelia-style booking widget |
| Responsive | CSS Flexbox/Grid + media queries | Divi breakpoints: 980px (tablet), 767px (mobile) |

---

## 2. Site Anatomy — Sections to Replicate

Based on the scraped content, the homepage consists of these sections in order:

1. **Top Utility Bar** — Facebook link, "Shop Now" button, "Employee Login" link
2. **Sticky Header** — Logo (left), horizontal nav with nested dropdowns (Wellness, Treatments, Contact sub-menus)
3. **Hero Section** — Green gradient background, centered text ("MUPPRA / KERALA AYURVEDIC"), flanked by botanical leaf/herb illustrations, bottom section divider (wave/curve SVG)
4. **Welcome Section** — Two-column layout: left column with welcome text and "Learn More" CTA, right column with a vertical image and decorative leaf overlay
5. **Vision Section** — Reversed two-column: left image (pharmacology/doctor), right text block with "Our Vision?" heading
6. **Specialized Treatments Section** — Heading with decorative leaf, then a 4-column grid of treatment cards (Shirodhara, Potali Massage, Nasayam, Abhyangam) each with circular image, title, and description
7. **Appointment Booking Section** — Embedded form with doctor selector, date picker calendar, "Continue" flow
8. **Branch Locations / Footer** — NABH accreditation badge, Kannur HQ address, then 5 branch cards (Viman Nagar, Magarpatta, Baner, Kothrud, Nigdi) with addresses, phones, emails, and social links
9. **WhatsApp Floating Widget** — Fixed-position chat bubble in bottom-right corner

---

## 3. Step-by-Step Implementation

### Step 1: Project Scaffolding

```bash
npm create vite@latest muppra-clone -- --template react
cd muppra-clone
npm install react-router-dom framer-motion react-icons react-datepicker
```

Create the folder structure:

```
src/
  components/
    Header/         # TopBar.jsx, Navbar.jsx, MobileMenu.jsx
    Hero/            # HeroSection.jsx
    Welcome/         # WelcomeSection.jsx
    Vision/          # VisionSection.jsx
    Treatments/      # TreatmentCard.jsx, TreatmentsSection.jsx
    Booking/         # BookingForm.jsx, DoctorSelect.jsx, CalendarPicker.jsx
    Footer/          # BranchCard.jsx, FooterSection.jsx
    WhatsApp/        # WhatsAppWidget.jsx
  pages/
    Home.jsx
    AboutUs.jsx
    Contact.jsx
    TreatmentPage.jsx   # dynamic route template
  assets/
    images/          # downloaded leaf illustrations, logos
  styles/
    variables.css    # color palette, fonts
    global.css
  App.jsx
  main.jsx
```

### Step 2: Design Tokens and Global Styles

Extract the color palette and typography from the original site:

```css
/* variables.css */
:root {
  --color-primary: #4a7c59;      /* deep green used in headers/buttons */
  --color-primary-dark: #2d5a3a; /* hero gradient darker end */
  --color-accent: #c5a55a;       /* gold accents */
  --color-bg-light: #f9f5ef;     /* warm off-white background */
  --color-text-dark: #333333;
  --color-text-light: #ffffff;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
  --max-width: 1200px;
  --header-height: 80px;
}
```

Import Google Fonts in `index.html`: Playfair Display (headings) and Open Sans (body). Verify exact fonts by inspecting the live site's computed styles — Divi sites commonly use these or similar serif/sans pairings.

### Step 3: Header with Sticky Behavior and Dropdowns

The header has two layers: a slim top bar and the main navigation that becomes sticky on scroll.

```jsx
// Navbar.jsx — core logic
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Wellness', path: '#', children: [
      { label: 'Kati Vasti', path: '/kati-vasti' },
      { label: 'Anti Ageing Treatment', path: '/anti-ageing-treatment' },
      { label: 'Sirodhara', path: '/sirodhara' },
      // ... remaining items
    ]},
    { label: 'Treatments', path: '#', children: [
      { label: 'Arthritis', path: '/arthritis' },
      { label: 'Back Pain', path: '/back-pain' },
      // ... remaining items
    ]},
    { label: 'Panchakarma', path: '/panchakarma' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact', children: [
      { label: 'Baner', path: '/baner' },
      { label: 'Kothrud', path: '/kothrud' },
      // ... remaining branches
    ]},
  ];

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <Link to="/"><img src="/logo.png" alt="Muppra" /></Link>
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.label}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}>
            <Link to={item.path}>{item.label}</Link>
            {item.children && (
              <AnimatePresence>
                {openDropdown === item.label && (
                  <motion.ul className="dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.path}>{child.label}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

**Key detail:** The sticky header transitions with a subtle shadow and slight background opacity change. Apply `box-shadow: 0 2px 10px rgba(0,0,0,0.1)` and `background: rgba(255,255,255,0.97)` on the `.sticky` class. On mobile (below 980px), collapse into a hamburger menu with a slide-in drawer.

### Step 4: Hero Section with Decorative Illustrations

The hero uses a dark green background with centered text and botanical leaf PNG images positioned absolutely on both sides. The bottom edge has a curved SVG section divider (common in Divi).

```jsx
// HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero">
      <img className="hero-leaf-left" src="/leaf-left.png" alt="" />
      <motion.div className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <h2>MUPPRA</h2>
        <h1>KERALA AYURVEDIC</h1>
      </motion.div>
      <img className="hero-leaf-right" src="/leaf-right.png" alt="" />
      <div className="hero-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z"
                fill="var(--color-bg-light)" />
        </svg>
      </div>
    </section>
  );
}
```

**CSS considerations:** The hero is full-width, minimum height ~70vh. Leaf images use `position: absolute` with `pointer-events: none`. The SVG divider sits at the bottom with `position: absolute; bottom: 0; width: 100%`.

### Step 5: Scroll-Triggered Animations

Divi uses its `et-waypoint` system to trigger fade-in animations as elements enter the viewport. Replicate this globally using a reusable wrapper:

```jsx
// components/AnimateOnScroll.jsx
import { motion } from 'framer-motion';

export default function AnimateOnScroll({ children, direction = 'up' }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}>
      {children}
    </motion.div>
  );
}
```

Wrap each major section (Welcome text, Vision block, each Treatment card) with `<AnimateOnScroll direction="up">` or the appropriate direction. The original site primarily uses bottom-to-top fade-ins.

### Step 6: Treatment Cards Grid

The four treatment cards (Shirodhara, Potali Massage, Nasayam, Abhyangam) use circular images with descriptive text. Build a reusable card component:

```jsx
// TreatmentCard.jsx
export default function TreatmentCard({ image, title, description }) {
  return (
    <div className="treatment-card">
      <div className="treatment-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

Style the image container as a circle: `width: 180px; height: 180px; border-radius: 50%; overflow: hidden; margin: 0 auto`. The grid uses `display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem` and collapses to 2-column at 980px, single column at 767px.

### Step 7: Booking Widget

The original site uses the Amelia WordPress booking plugin. Replicate its UI with a multi-step React form:

- **Step 1:** Doctor selection dropdown (Dr Anjana K Iyer, Dr Reepa Pavithran, Dr Syam Bhargavan)
- **Step 2:** Date and time picker using `react-datepicker`
- **Step 3:** Confirmation

Use React state to manage the active step and `AnimatePresence` for step transitions. This is a UI-only replica — connect to a real backend later.

### Step 8: Footer with Branch Cards

Structure the footer as a grid of branch location cards. Each card contains address, phone numbers (as `tel:` links), and email (as `mailto:` links). Use a reusable `BranchCard` component and map over a data array.

### Step 9: WhatsApp Floating Button

```jsx
// WhatsAppWidget.jsx
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = 'https://wa.me/919404992255?text=Hello%20Team%20MUPPRA';

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <div className="whatsapp-popup">
          <p>Need Help? Chat with us!</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Start a Conversation
          </a>
        </div>
      )}
      <button className="whatsapp-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
```

Position with `position: fixed; bottom: 20px; right: 20px; z-index: 9999`.

---

## 4. Responsive Design Strategy

The original Divi theme uses these breakpoints, which you should mirror:

| Breakpoint | Behavior |
|---|---|
| > 980px | Full desktop layout, horizontal nav, 4-column grids |
| 768–980px | Tablet — hamburger menu, 2-column grids, reduced padding |
| < 768px | Mobile — single-column stacking, full-width sections, larger tap targets |

Test the hamburger menu thoroughly: the original uses a slide-in panel with accordion-style sub-menus for Wellness/Treatments/Contact dropdowns.

---

## 5. Image and Asset Strategy

Download all decorative assets from the original site (leaf illustrations, logo, treatment images, NABH badge) and place them in `src/assets/images/`. Convert large PNGs to WebP for performance. The key assets identified:

- `oie_9F3xIO9BM7CM.png` — Logo
- `herbal-remedy_34.png`, `_35.png`, `_36.png`, `_58.png`, `_61.png` — Decorative botanicals
- `herbal-remedy_13.png` — Additional leaf art
- `shirodhara.png`, `potali-1.png`, `nasayam1.png`, `abhyangam.png` — Treatment images
- `vertical1.jpg` — Welcome section photo
- `about-nabh.webp` — Accreditation badge

---

## 6. Troubleshooting Common Issues

- **Sticky header flicker:** Use `will-change: transform` on the navbar and debounce the scroll listener if performance lags on mobile.
- **SVG divider gaps:** A 1px white line can appear between sections. Fix with `display: block` on the SVG and `margin-bottom: -1px` on the section.
- **Dropdown hover on mobile:** `onMouseEnter` does not work on touch devices. Implement `onClick` toggle for mobile breakpoints using a custom hook that detects touch capability.
- **Font loading shift:** Use `font-display: swap` in your `@font-face` declarations and consider `next/font`-style preloading to avoid layout shift.
- **Image aspect ratios:** The circular treatment images require consistent source dimensions. Crop all treatment images to 1:1 before use, and apply `object-fit: cover` as a safeguard.

---

## 7. Final Testing Checklist

- [ ] **Visual fidelity:** Side-by-side comparison at 1440px, 1024px, 768px, and 375px widths against screenshots of the original
- [ ] **Navigation:** All dropdown menus open/close correctly on hover (desktop) and tap (mobile)
- [ ] **Sticky header:** Activates on scroll, shadow appears, logo remains visible
- [ ] **Scroll animations:** Each section fades in on first scroll into view, does not re-trigger
- [ ] **Hero section:** Leaf illustrations positioned correctly, text centered, SVG divider curves seamlessly into next section
- [ ] **Treatment cards:** 4-column on desktop, 2 on tablet, 1 on mobile, circular images render correctly
- [ ] **Booking form:** Multi-step flow works, calendar renders, doctor dropdown populated
- [ ] **Footer branches:** All phone numbers are clickable `tel:` links, emails are `mailto:` links
- [ ] **WhatsApp widget:** Popup toggles, link opens WhatsApp with pre-filled message
- [ ] **Performance:** Lighthouse score above 90 for Performance; all images lazy-loaded below the fold
- [ ] **Accessibility:** Semantic HTML (`nav`, `main`, `section`, `footer`), alt text on images, keyboard-navigable dropdowns
- [ ] **Cross-browser:** Verified in Chrome, Firefox, Safari, and Edge
