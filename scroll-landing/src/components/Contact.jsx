import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const budgets = ['< $5k', '$5–20k', '$20–50k', '$50k+'];

export default function Contact() {
  const [selected, setSelected] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section id="contact" className={styles.contact}>
      {/* Decorative top border */}
      <div className={styles.topBar} />

      <div className={styles.inner}>
        {/* Left column */}
        <motion.div className={styles.left} {...fadeUp(0)}>
          <div className={styles.label}>
            <span className="gold-line" />
            <span className="section-label">Get In Touch</span>
          </div>

          <h2 className={styles.heading}>
            Let's build<br />
            something<br />
            <em>remarkable.</em>
          </h2>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:hello@forma.studio" className={styles.contactValue}>
                hello@forma.studio
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+442071234567" className={styles.contactValue}>
                +44 207 123 4567
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              <span className={styles.contactValue}>London, UK — Cairo, EG</span>
            </div>
          </div>

          {/* Social links */}
          <div className={styles.socials}>
            {['Instagram', 'Behance', 'LinkedIn', 'Twitter'].map((s) => (
              <a key={s} href="#" className={styles.socialLink}>{s}</a>
            ))}
          </div>
        </motion.div>

        {/* Right column — form */}
        <motion.div className={styles.right} {...fadeUp(0.15)}>
          {sent ? (
            <motion.div
              className={styles.thanks}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.thanksIcon}>✦</span>
              <h3 className={styles.thanksTitle}>Message received.</h3>
              <p className={styles.thanksBody}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Full Name *</label>
                  <input className={styles.input} type="text" placeholder="Jane Smith" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>Email *</label>
                  <input className={styles.input} type="email" placeholder="jane@company.com" required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel}>Company / Project</label>
                <input className={styles.input} type="text" placeholder="Your company name" />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel}>Budget Range</label>
                <div className={styles.budgetGrid}>
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`${styles.budgetBtn} ${selected === b ? styles.budgetActive : ''}`}
                      onClick={() => setSelected(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel}>Tell us about your project *</label>
                <textarea
                  className={styles.textarea}
                  rows={5}
                  placeholder="What are you looking to achieve? What's the timeline? Any details that might help..."
                  required
                />
              </div>

              <button type="submit" className={styles.submit}>
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
