import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    index: '01',
    title: 'Brand Identity',
    desc: 'We build complete brand systems — from logo and type to colour, tone of voice, and visual language. Strategy-first, design-led.',
    tags: ['Logo Design', 'Typography', 'Brand Guidelines'],
  },
  {
    index: '02',
    title: 'Digital Design',
    desc: 'Beautiful, high-performance websites and digital products. We design for clarity, elegance, and measurable impact.',
    tags: ['Web Design', 'UI/UX', 'Design Systems'],
  },
  {
    index: '03',
    title: 'Motion & Video',
    desc: 'Bringing brands to life through motion. Title sequences, brand films, social content — crafted with precision and intention.',
    tags: ['Animation', 'After Effects', 'Brand Films'],
  },
  {
    index: '04',
    title: 'Creative Direction',
    desc: 'End-to-end creative direction for campaigns, launches, and editorial. We shape the narrative and lead the visual story.',
    tags: ['Campaigns', 'Art Direction', 'Concept Development'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const card = {
  hidden: { y: 50, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      {/* Header row */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.headerLeft}>
          <div className={styles.label}>
            <span className="gold-line" />
            <span className="section-label">What We Do</span>
          </div>
          <h2 className={styles.heading}>
            Our<br /><em>services</em>
          </h2>
        </div>
        <p className={styles.headerBody}>
          Every engagement is built around your specific goals. We offer a focused set
          of services to ensure we go deep, not just wide — and deliver real results.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((s) => (
          <motion.div key={s.index} className={styles.card} variants={card} data-hover>
            <div className={styles.cardTop}>
              <span className={styles.cardIndex}>{s.index}</span>
              <div className={styles.cardArrow}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>

            <div className={styles.tags}>
              {s.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            <div className={styles.cardLine} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
