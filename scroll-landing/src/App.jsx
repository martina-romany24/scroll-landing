import { useEffect, useRef } from 'react';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Services from './components/Services';
import Work     from './components/Work';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

export default function App() {
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor   = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let fx = 0, fy = 0;
    let cx = 0, cy = 0;
    let raf;

    const onMove = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
    };

    const animateFollower = () => {
      fx += (cx - fx) * 0.1;
      fy += (cy - fy) * 0.1;
      follower.style.left = fx + 'px';
      follower.style.top  = fy + 'px';
      raf = requestAnimationFrame(animateFollower);
    };

    const addHover = () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    };
    const removeHover = () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animateFollower);

    const hoverEls = document.querySelectorAll('a, button, [data-hover]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor"   ref={cursorRef}   />
      <div className="cursor-follower" ref={followerRef} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
