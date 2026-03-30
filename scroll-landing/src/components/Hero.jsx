import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const marqueeText = 'Creative Agency — Design & Motion — Digital Experiences — Brand Identity — ';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  /* Parallax layers */
  const yText    = useTransform(scrollYProgress, [0, 1], ['0%',  '-18%']);
  const yShape1  = useTransform(scrollYProgress, [0, 1], ['0%',  '-32%']);
  const yShape2  = useTransform(scrollYProgress, [0, 1], ['0%',  '-12%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale    = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  /* Text reveal variants */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };
  const line = {
    hidden: { y: '110%', opacity: 0 },
    show:   { y: '0%',   opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
  };
  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    show:   { y: 0,  opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      {/* Background texture */}
      <motion.div className={styles.bg} style={{ scale }} />

      {/* Floating shape 1 — large circle */}
      <motion.div className={styles.shape1} style={{ y: yShape1 }} />

      {/* Floating shape 2 — small gold dot cluster */}
      <motion.div className={styles.shape2} style={{ y: yShape2 }} />

      {/* Main content */}
      <motion.div className={styles.content} style={{ y: yText, opacity }}>
        <div className={styles.eyebrow}>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.eyebrowLine}
          />
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Est. 2019 — London &amp; Cairo
          </motion.span>
        </div>

        <motion.div
          className={styles.headlineWrap}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className={styles.lineClip}>
            <motion.h1 className={styles.h1} variants={line}>
              We craft
            </motion.h1>
          </div>
          <div className={styles.lineClip}>
            <motion.h1 className={`${styles.h1} ${styles.h1Italic}`} variants={line}>
              experiences
            </motion.h1>
          </div>
          <div className={styles.lineClip}>
            <motion.h1 className={styles.h1} variants={line}>
              that matter.
            </motion.h1>
          </div>
        </motion.div>

        <motion.div className={styles.sub} variants={fadeUp} initial="hidden" animate="show">
          <p>
            FORMA is a creative studio specialising in brand identity,<br />
            digital design, and motion — built for ambitious brands.
          </p>
          <a
            href="#work"
            className={styles.btn}
            onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span>View Our Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={styles.marqueeText}>{marqueeText}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
