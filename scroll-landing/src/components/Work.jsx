import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Work.module.css';

const projects = [
  {
    id: '01',
    title: 'Verd Studio',
    category: 'Brand Identity',
    year: '2024',
    color: '#2C3E2D',
    accent: '#8FAF7A',
    tags: ['Brand', 'Digital'],
    wide: true,
  },
  {
    id: '02',
    title: 'Aurore Paris',
    category: 'Web Design & Motion',
    year: '2024',
    color: '#2B2420',
    accent: '#C9A96E',
    tags: ['Web', 'Motion'],
    wide: false,
  },
  {
    id: '03',
    title: 'Nuage Finance',
    category: 'UI/UX Design',
    year: '2023',
    color: '#1C2340',
    accent: '#7B9BF5',
    tags: ['UI/UX', 'System'],
    wide: false,
  },
  {
    id: '04',
    title: 'Solène Atelier',
    category: 'Creative Direction',
    year: '2023',
    color: '#3D2B1F',
    accent: '#E8C9A0',
    tags: ['Direction', 'Film'],
    wide: true,
  },
];

function WorkCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [project.wide ? '-6%' : '-10%', project.wide ? '6%' : '10%']);

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${project.wide ? styles.wide : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      data-hover
    >
      {/* Background parallax image area */}
      <div className={styles.cardInner} style={{ background: project.color }}>
        <motion.div className={styles.cardBg} style={{ y }}>
          {/* Abstract geometric SVG artwork per project */}
          <svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" className={styles.artwork}>
            <rect width="600" height="420" fill={project.color} />
            {/* Unique geometry per project */}
            {index === 0 && <>
              <circle cx="450" cy="160" r="160" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.4"/>
              <circle cx="450" cy="160" r="100" fill={project.accent} opacity="0.12"/>
              <rect x="60" y="80" width="220" height="280" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.3"/>
              <line x1="60" y1="220" x2="280" y2="220" stroke={project.accent} strokeWidth="0.8" opacity="0.4"/>
              <text x="60" y="390" fontSize="100" fontFamily="Georgia" fontWeight="300" fill={project.accent} opacity="0.06">VERD</text>
            </>}
            {index === 1 && <>
              <ellipse cx="300" cy="210" rx="240" ry="160" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.35"/>
              <ellipse cx="300" cy="210" rx="140" ry="90" fill={project.accent} opacity="0.07"/>
              {[0,1,2,3,4].map(i => (
                <line key={i} x1={100 + i*80} y1="40" x2={100 + i*80} y2="380" stroke={project.accent} strokeWidth="0.5" opacity="0.18"/>
              ))}
              <circle cx="490" cy="80" r="40" fill={project.accent} opacity="0.18"/>
            </>}
            {index === 2 && <>
              <rect x="80" y="80" width="180" height="260" rx="90" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.4"/>
              <rect x="340" y="100" width="180" height="220" rx="90" fill={project.accent} opacity="0.09"/>
              {[0,1,2].map(i => (
                <circle key={i} cx={180 + i * 120} cy={380} r="6" fill={project.accent} opacity={0.3 - i*0.08}/>
              ))}
            </>}
            {index === 3 && <>
              <polygon points="300,40 540,360 60,360" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.3"/>
              <polygon points="300,100 480,340 120,340" fill={project.accent} opacity="0.07"/>
              <circle cx="300" cy="220" r="60" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.3"/>
              <line x1="0" y1="200" x2="600" y2="200" stroke={project.accent} strokeWidth="0.5" opacity="0.2"/>
            </>}
          </svg>
        </motion.div>

        {/* Hover overlay */}
        <div className={styles.overlay} />

        {/* Project number */}
        <span className={styles.cardNumber}>{project.id}</span>

        {/* Info */}
        <div className={styles.cardInfo}>
          <div className={styles.cardTags}>
            {project.tags.map(t => (
              <span key={t} className={styles.cardTag}>{t}</span>
            ))}
          </div>
          <div className={styles.cardBottom}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <div className={styles.cardMeta}>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.label}>
          <span className="gold-line" />
          <span className="section-label">Selected Work</span>
        </div>
        <div className={styles.headerRight}>
          <h2 className={styles.heading}>
            Projects we're<br /><em>proud of</em>
          </h2>
          <a href="#contact" className={styles.allLink}
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Start a project →
          </a>
        </div>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <WorkCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
