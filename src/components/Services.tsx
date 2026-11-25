import type {CSSProperties} from 'react';
import {services, whatsappLink} from '../content';
import {useReveals} from '../hooks/useReveals';
import {media, srcSet} from '../lib/media';

/**
 * The treatments: four tall panels slide in from the right one after
 * another, each its own photo, name, treatment list and a WhatsApp link
 * pre-filled with that treatment.
 */
export function Services() {
  const root = useReveals<HTMLElement>('0px 0px -15% 0px');

  return (
    <section ref={root} id="services" aria-labelledby="services-title" className="relative bg-ink">
      <header className="mx-auto grid max-w-[1680px] gap-6 px-5 pt-24 pb-12 md:grid-cols-[1fr_minmax(0,420px)] md:items-end md:px-14 md:pt-32">
        <div data-reveal>
          <p className="caps mb-5 text-champagne">{services.eyebrow}</p>
          <h2 id="services-title" className="display text-[clamp(48px,6.4vw,112px)] text-white">
            {services.title[0]} <span className="it">{services.title[1]}</span>
          </h2>
        </div>
        <p data-reveal style={{'--d': '0.15s'} as CSSProperties} className="prose-body text-white/80">
          {services.intro}
        </p>
      </header>

      <div data-reveal="panels" className="grid gap-[3px] overflow-hidden md:grid-cols-2 xl:h-svh xl:min-h-[680px] xl:grid-cols-4">
        {services.list.map((s, i) => (
          <article
            key={s.id}
            aria-labelledby={`svc-${s.id}`}
            className="group relative flex min-h-[86svh] flex-col justify-between overflow-hidden md:min-h-[78svh] xl:min-h-0"
            style={{'--d': `${0.12 + i * 0.16}s`, background: s.tint} as CSSProperties}
          >
            <img
              src={media(`${s.image}-800.webp`)}
              srcSet={srcSet(s.image, 800, 1400)}
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.04]"
              style={{objectPosition: s.focus}}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(22_16_15/0.62),rgb(22_16_15/0.1)_38%,rgb(22_16_15/0.15)_55%,rgb(22_16_15/0.85))]" />

            <div className="relative px-7 pt-24 pb-7 md:px-9 md:pb-9 xl:pt-28">
              <p className="caps text-white/70" aria-hidden>
                0{i + 1}
              </p>
              <h3 id={`svc-${s.id}`} className="display mt-3 text-[clamp(40px,3.4vw,60px)] text-white">
                <span className="block">{s.name[0]}</span>
                <span className="it block">{s.name[1]}</span>
              </h3>
              <p className="mt-3 text-[16px] text-white/85 italic">{s.summary}</p>
            </div>

            <div className="relative p-7 md:p-9 xl:pb-28">
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="caps text-[13px] text-white">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/25 pt-5">
                <span className="caps text-white/70">{services.priceNote}</span>
                <a
                  href={whatsappLink(`Hi Betito! I'd like to book ${s.name.join(' ').toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener"
                  className="caps inline-flex min-h-11 items-center gap-2 bg-white/15 px-4 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
                >
                  Ask on WhatsApp <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
