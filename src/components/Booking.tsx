import type {CSSProperties} from 'react';
import {booking, contact, faq, reviews, whatsappLink} from '../content';
import {useReveals} from '../hooks/useReveals';
import {WhatsAppIcon} from './Chrome';

/** How to book (three steps + the big WhatsApp button), real reviews when there are any, and the FAQ. */
export function Booking() {
  const root = useReveals<HTMLDivElement>();

  return (
    <div ref={root} className="bg-blush text-ink">
      <section id="book" aria-labelledby="book-title" className="mx-auto max-w-[1680px] px-5 py-24 md:px-14 md:py-36">
        <p data-reveal className="caps mb-6 text-wine">
          {booking.eyebrow}
        </p>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="book-title" data-reveal style={{'--d': '0.08s'} as CSSProperties} className="display text-[clamp(64px,10vw,180px)]">
              {booking.lines.map((l) => (
                <span key={l.t} className={`block ${l.i ? 'it pl-[0.6em] text-wine' : ''}`}>
                  {l.t}
                </span>
              ))}
            </h2>
            <div data-reveal style={{'--d': '0.16s'} as CSSProperties} className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="caps inline-flex min-h-14 items-center gap-3 bg-ink px-9 text-[13px] text-white transition-colors hover:bg-wine"
              >
                <WhatsAppIcon className="size-5" />
                Book on <em className="normal-case">WhatsApp</em>
              </a>
              <p className="text-[17px] text-ink/80">
                {contact.hours}
                <br />
                <span className="text-ink/70">{contact.phoneDisplay}</span>
              </p>
            </div>
          </div>

          <ol className="space-y-0 lg:col-span-5 lg:col-start-8 lg:pt-6">
            {booking.steps.map(([title, text], i) => (
              <li
                key={title}
                data-reveal
                style={{'--d': `${0.1 + i * 0.1}s`} as CSSProperties}
                className="grid grid-cols-[56px_1fr] gap-4 border-t border-ink/20 py-7 last:border-b"
              >
                <span className="caps pt-2 text-ink/60" aria-hidden>
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display text-[clamp(30px,2.6vw,42px)]">{title}</h3>
                  <p className="prose-body mt-2 text-ink/80">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {reviews.length > 0 && (
        <section aria-labelledby="reviews-title" className="mx-auto max-w-[1680px] px-5 pb-24 md:px-14">
          <h2 id="reviews-title" className="caps mb-8 text-wine">
            Kind words
          </h2>
          <ul className="grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.name} data-reveal>
                <blockquote className="display it text-[clamp(26px,2.2vw,36px)] normal-case">“{r.quote}”</blockquote>
                <p className="caps mt-4 text-ink/60">
                  {r.name} · {r.service}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="faq" aria-labelledby="faq-title" className="bg-paper">
        <div className="mx-auto grid max-w-[1680px] gap-12 px-5 py-24 md:px-14 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="caps mb-5 text-rose">{faq.eyebrow}</p>
            <h2 id="faq-title" className="display text-[clamp(48px,5.6vw,96px)]">
              <span className="block">{faq.title[0]}</span>
              <span className="it block">{faq.title[1]}</span>
            </h2>
          </div>
          <div className="faq lg:col-span-7 lg:col-start-6">
            {faq.items.map((f, i) => (
              <details key={f.q} data-reveal style={{'--d': `${i * 0.05}s`} as CSSProperties} className="group border-t border-ink/15 last:border-b">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-5">
                  <h3 className="display text-[clamp(24px,2vw,32px)]">{f.q}</h3>
                  <span aria-hidden className="text-[26px] leading-none text-rose transition-transform duration-500 ease-silk group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="prose-body max-w-[640px] pb-7 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
