import {useCallback, useEffect, useState} from 'react';
import {scrollToHash, startScroll} from './lib/scroll';
import {useReducedMotion} from './hooks/useReducedMotion';
import {Chrome} from './components/Chrome';
import {Hero} from './components/Hero';
import {Services} from './components/Services';
import {About} from './components/About';
import {Gallery} from './components/Gallery';
import {Booking} from './components/Booking';
import {Footer} from './components/Footer';
import {Menu} from './components/Menu';
import {StructuredData} from './components/StructuredData';

export default function App() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  useEffect(() => startScroll(reduced), [reduced]);

  // Every in-page link (#services, #book…) glides there through Lenis.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element).closest?.('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      scrollToHash(a.getAttribute('href')!);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const go = useCallback((hash: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToHash(hash), 450);
  }, []);

  return (
    <>
      <a
        href="#services"
        className="caps fixed top-3 left-1/2 z-[70] -translate-x-1/2 -translate-y-24 bg-paper px-5 py-3 text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <Chrome menuOpen={open} onMenu={() => setOpen((o) => !o)} />
      <main inert={open}>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Booking />
      </main>
      <div inert={open}>
        <Footer />
      </div>
      <Menu open={open} onClose={close} onGo={go} />
      <div className="grain" aria-hidden />
      <StructuredData />
    </>
  );
}
