import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WhatsAppWidget.module.css';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello%20Team%20PRANA%2C%20I%20would%20like%20to%20inquire%20about%20your%20Ayurvedic%20treatments.';

  return (
    <div className={styles.whatsappWidget}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.whatsappPopup}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.popupHeader}>
              <div className={styles.avatar}>P</div>
              <div className={styles.headerInfo}>
                <h4>Prana Ayurvedic</h4>
                <span>Online | Typically replies in minutes</span>
              </div>
            </div>
            <div className={styles.popupBody}>
              <div className={styles.messageBubble}>
                Namaste! 🙏 Welcome to Prana Ayurvedic Center. How can we help you with your health and wellness journey today?
              </div>
            </div>
            <div className={styles.popupFooter}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.chatLink}
              >
                <FaWhatsapp size={20} />
                Start Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={styles.whatsappBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact us on WhatsApp"
      >
        {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={32} />}
      </button>
    </div>
  );
}
