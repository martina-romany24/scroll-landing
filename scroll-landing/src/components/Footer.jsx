import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <motion.div
          className={styles.bigText}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          FORMA
        </motion.div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2024 FORMA Studio. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
        <p className={styles.made}>Crafted with intention — London &amp; Cairo</p>
      </div>
    </footer>
  );
}
