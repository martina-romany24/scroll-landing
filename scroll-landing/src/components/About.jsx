import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';

const stats = [
  { value: '7+',  label: 'Years of experience' },
  { value: '140', label: 'Projects delivered' },
  { value: '38',  label: 'Awards & recognitions' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yImg   = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const yText  = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  const fadeLeft = {
    hidden: { x: -60, opacity: 0 },
    show:   { x: 0,   opacity: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeRight = {
    hidden: { x: 60,  opacity: 0 },
    show:   { x: 0,   opacity: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show:   { y: 0,  opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.grid}>
        {/* Left — image block with parallax */}
        <motion.div
          className={styles.imageCol}
          style={{ y: yImg }}
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className={styles.imageFrame}>
            {/* SVG illustration — abstract geometric composition */}
            <svg viewBox="0 0 480 560" xmlns="http://www.w3.org/2000/svg" className={styles.illustration}>
              {/* Warm background block */}
              <rect x="0" y="0" width="480" height="560" fill="#EAE7DF"/>
              {/* Large circle */}
              <circle cx="280" cy="200" r="170" fill="none" stroke="#C9A96E" strokeWidth="1"/>
              {/* Filled circle accent */}
              <circle cx="140" cy="380" r="90" fill="rgba(201,169,110,0.12)"/>
              {/* Vertical line */}
              <line x1="80" y1="60" x2="80" y2="340" stroke="#C9A96E" strokeWidth="1"/>
              {/* Horizontal line */}
              <line x1="80" y1="340" x2="280" y2="340" stroke="#C9A96E" strokeWidth="1"/>
              {/* Small square */}
              <rect x="300" y="400" width="80" height="80" fill="none" stroke="#1A1916" strokeWidth="1"/>
              {/* Dot grid */}
              {[0,1,2,3].map(col => [0,1,2,3].map(row => (
                <circle
                  key={`${col}-${row}`}
                  cx={370 + col * 12}
                  cy={80 + row * 12}
                  r="1.5"
                  fill="rgba(26,25,22,0.25)"
                />
              )))}
              {/* Large text */}
              <text x="50" y="510" fontFamily="Georgia, serif" fontSize="88" fontWeight="300"
                fill="none" stroke="rgba(26,25,22,0.08)" strokeWidth="1" letterSpacing="-3">
                FORMA
              </text>
            </svg>
          </div>

          {/* Year badge */}
          <div className={styles.badge}>
            <span className={styles.badgeYear}>2019</span>
            <span className={styles.badgeText}>Founded in London</span>
          </div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          className={styles.textCol}
          style={{ y: yText }}
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.label}>
            <span className="gold-line" />
            <span className="section-label">About Us</span>
          </div>

          <h2 className={styles.heading}>
            A studio for<br />
            <em>bold thinkers</em><br />
            &amp; doers.
          </h2>

          <p className={styles.body}>
            We believe great design is the intersection of strategy and soul.
            FORMA partners with forward-thinking brands to craft identities,
            digital platforms, and campaigns that don't just look good —
            they perform.
          </p>

          <p className={styles.body}>
            Our team of designers, strategists, and technologists work in
            close collaboration with every client, treating each project as
            a long-term creative relationship.
          </p>

          {/* Stats row */}
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.stat}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
