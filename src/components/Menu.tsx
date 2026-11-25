import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {contact, nav, whatsappLink} from '../content';

/**
 * The menu: three slabs wipe in from the right one after another
 * (espresso, blush, porcelain); the porcelain one stays and holds the items.
 * Hovering an item ripples it like a heat shimmer off a hot styling tool — an
 * SVG turbulence + displacement filter animated per frame.
 */
export function Menu({open, onClose, onGo}: {open: boolean; onClose: () => void; onGo: (hash: string) => void}) {
  const [hover, setHover] = useState(-1);
  const turb = useRef<SVGFETurbulenceElement>(null);
  const disp = useRef<SVGFEDisplacementMapElement>(null);
  const first = useRef<HTMLAnchorElement>(null);

  // Animate the ripple only while something is hovered.
  useEffect(() => {
    if (hover < 0) return;
    let raf = 0;
    let t = 0;
    let amp = 0;
    const loop = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb.current?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb.current?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp.current?.setAttribute('scale', (amp * 9).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  useEffect(() => {
    if (!open) {
      setHover(-1);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Focus the first item once the paper slab has arrived.
    const id = window.setTimeout(() => first.current?.focus({preventScroll: true}), 420);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(id);
    };
  }, [open, onClose]);

  const slab = (extra: string) =>
    `absolute inset-y-0 right-0 w-[min(34vw,460px)] max-md:w-full transition-transform duration-[800ms] ease-wipe ${extra} ${
      open ? 'translate-x-0' : 'translate-x-[104%]'
    }`;
  // Open: espresso → blush → porcelain, staggered. Close: the reverse, faster.
  const delay = (k: number): CSSProperties => ({transitionDelay: `${open ? k * 0.09 : (2 - k) * 0.06}s`});

  return (
    <div id="site-menu" inert={!open} className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <svg className="absolute size-0" aria-hidden>
        <filter id="ripple" x="-5%" y="-30%" width="110%" height="160%">
          <feTurbulence ref={turb} type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="2" seed="2" result="n" />
          <feDisplacementMap ref={disp} in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Click-away */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 cursor-default bg-ink/30 transition-opacity duration-700 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className={slab('bg-ink')} style={delay(0)} />
      <div className={slab('bg-blush')} style={delay(1)} />
      <nav className={slab('flex flex-col justify-between overflow-y-auto bg-paper px-8 pt-24 pb-28 text-ink md:px-10')} style={delay(2)} aria-label="Main menu">
        <ul onMouseLeave={() => setHover(-1)}>
          {nav.map((item, i) => (
            <li
              key={item.href}
              className={`transition-[opacity,transform] duration-700 ease-silk ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{transitionDelay: open ? `${0.42 + i * 0.06}s` : '0s'} as CSSProperties}
            >
              <a
                ref={i === 0 ? first : undefined}
                href={item.href}
                onMouseEnter={() => setHover(i)}
                // Only keyboard focus counts as hover (the menu focuses item 1 itself on open).
                onFocus={(e) => e.currentTarget.matches(':focus-visible') && setHover(i)}
                onBlur={() => setHover(-1)}
                onClick={(e) => {
                  e.preventDefault();
                  onGo(item.href);
                }}
                className={`display relative inline-block py-1 text-[clamp(34px,3.2vw,48px)] transition-opacity duration-300 ${
                  hover >= 0 && hover !== i ? 'opacity-35' : 'opacity-100'
                }`}
                style={{filter: hover === i ? 'url(#ripple)' : 'none'}}
              >
                {item.label}
                <sup className="caps absolute -right-6 top-2 text-[10px] tracking-normal text-ink/50" aria-hidden>
                  0{i + 1}
                </sup>
              </a>
            </li>
          ))}
        </ul>
        <div className={`mt-10 transition-opacity delay-700 duration-700 ${open ? 'opacity-100' : 'opacity-0'}`}>
          <p className="caps text-ink/60">{contact.hours} · Cape Town</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="caps text-ink hover:text-rose">
              WhatsApp
            </a>
            {contact.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="caps text-ink hover:text-rose">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
