import {useEffect, useRef, type CSSProperties} from 'react';
import {about} from '../content';
import {useReveals} from '../hooks/useReveals';
import {clamp} from '../lib/math';
import {media, srcSet} from '../lib/media';
import {onFrame} from '../lib/scroll';

/** About Betito: big mixed-italic headline, her words, a slow-drifting photo. */
export function About() {
  const root = useReveals<HTMLElement>();
  const photo = useRef<HTMLImageElement>(null);

  // Gentle parallax on the photo, read from the page's single rAF loop.
  useEffect(
    () =>
      onFrame(() => {
        const img = photo.current;
        const box = img?.parentElement;
        if (!img || !box) return;
        const r = box.getBoundingClientRect();
        const h = window.innerHeight;
        if (r.bottom < 0 || r.top > h) return;
        const p = clamp((h - r.top) / (h + r.height));
        img.style.transform = `translate3d(0, ${((p - 0.5) * -60).toFixed(1)}px, 0) scale(1.12)`;
      }),
    [],
  );

  return (
    <section ref={root} id="about" aria-labelledby="about-title" className="relative bg-paper text-ink">
      <div className="mx-auto grid max-w-[1680px] gap-14 px-5 py-24 md:grid-cols-12 md:gap-10 md:px-14 md:py-36">
        <div className="md:col-span-7">
          <p data-reveal className="caps mb-6 text-rose">
            {about.eyebrow}
          </p>
          <h2 id="about-title" data-reveal style={{'--d': '0.08s'} as CSSProperties} className="display text-[clamp(56px,8.4vw,150px)]">
            {about.lines.map((l, i) => (
              <span key={l.t} className={`block ${l.i ? 'it text-rose' : ''} ${i === 1 ? 'pl-[0.8em]' : ''}`}>
                {l.t}
              </span>
            ))}
          </h2>

          <div className="mt-12 max-w-[560px] space-y-5 md:ml-[clamp(0px,9vw,160px)]">
            {about.body.map((p, i) => (
              <p key={i} data-reveal style={{'--d': `${0.12 + i * 0.08}s`} as CSSProperties} className="prose-body text-ink/85">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-14 grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-3 md:ml-[clamp(0px,9vw,160px)]">
            {about.facts.map(([k, v], i) => (
              <div key={k} data-reveal style={{'--d': `${0.1 + i * 0.08}s`} as CSSProperties}>
                <dt className="caps text-ink/60">{k}</dt>
                <dd className="mt-1 text-[18px] leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure data-reveal style={{'--d': '0.2s'} as CSSProperties} className="md:col-span-5 md:pt-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-nude">
            <img
              ref={photo}
              src={media(`${about.image}-800.webp`)}
              srcSet={srcSet(about.image, 800, 1400)}
              sizes="(min-width: 768px) 40vw, 100vw"
              width={800}
              height={1200}
              alt={about.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full scale-[1.12] object-cover will-change-transform"
            />
          </div>
          <figcaption className="caps mt-4 text-ink/60">The kit — studio & mobile</figcaption>
        </figure>
      </div>
    </section>
  );
}
