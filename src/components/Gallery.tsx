import type {CSSProperties} from 'react';
import {gallery, whatsappLink} from '../content';
import {useReveals} from '../hooks/useReveals';
import {media, srcSet} from '../lib/media';

/** An editorial, staggered column grid of looks; each rises in as it's reached. */
export function Gallery() {
  const root = useReveals<HTMLElement>();

  return (
    <section ref={root} id="gallery" aria-labelledby="gallery-title" className="relative bg-ink">
      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-14 md:py-36">
        <header className="mb-14 grid gap-6 md:grid-cols-[1fr_minmax(0,420px)] md:items-end">
          <div data-reveal>
            <p className="caps mb-5 text-champagne">{gallery.eyebrow}</p>
            <h2 id="gallery-title" className="display text-[clamp(48px,6.4vw,112px)] text-white">
              {gallery.title[0]} <span className="it">{gallery.title[1]}</span>
            </h2>
          </div>
          <p data-reveal style={{'--d': '0.15s'} as CSSProperties} className="prose-body text-white/80">
            {gallery.intro}
          </p>
        </header>

        <ul className="columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
          {gallery.items.map((g, i) => (
            <li
              key={g.src}
              data-reveal
              style={{'--d': `${(i % 4) * 0.08}s`} as CSSProperties}
              className="mb-3 break-inside-avoid md:mb-4"
            >
              <figure className="group relative overflow-hidden bg-wine">
                <img
                  src={media(`${g.src}-600.webp`)}
                  srcSet={srcSet(g.src, 600, 1200)}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                  width={g.w}
                  height={g.h}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(0deg,rgb(22_16_15/0.75),transparent)] p-4 pt-12">
                  <span className="display it text-[clamp(20px,1.8vw,28px)] text-white">{g.label}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href={whatsappLink("Hi Betito! I've got a look I'd love to try — here's the picture:")}
            target="_blank"
            rel="noopener"
            className="caps inline-flex min-h-12 items-center gap-2 border border-white/40 px-8 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
          >
            Send me your look <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
