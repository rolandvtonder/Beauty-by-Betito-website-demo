import {brand, contact, footer, nav, whatsappLink} from '../content';
import {useFitText} from '../hooks/useFitText';

/** Footer: links, contact, and the BETITO wordmark fitted edge to edge. */
export function Footer() {
  const mark = useFitText<HTMLSpanElement>();
  const year = 2026;

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1680px] px-5 pt-20 md:px-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="caps text-white/60">Beauty by Betito</p>
            <p className="mt-3 max-w-[320px] text-[17px] leading-[1.6] text-white/85">{footer.line}</p>
          </div>
          <nav aria-label="Footer">
            <p className="caps text-white/60">Explore</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="inline-flex min-h-8 items-center text-[17px] text-white/85 hover:text-blush">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="caps text-white/60">Contact</p>
            <address className="mt-3 text-[17px] leading-[1.7] text-white/85 not-italic">
              {brand.city}, South Africa
              <br />
              Studio & mobile · {contact.hours}
              <br />
              <a href={whatsappLink()} target="_blank" rel="noopener" className="underline decoration-white/30 underline-offset-4 hover:text-blush">
                WhatsApp {contact.phoneDisplay}
              </a>
            </address>
            {contact.socials.length > 0 && (
              <ul className="mt-3 flex gap-5">
                {contact.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener" className="caps text-white/85 hover:text-blush">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1680px] overflow-hidden px-5 pt-16 md:px-14" aria-hidden>
        <span ref={mark} className="display inline-block whitespace-nowrap leading-[0.8] text-white/[0.07]">
          Betito
        </span>
      </div>

      <div className="mx-auto flex max-w-[1680px] flex-wrap justify-between gap-3 px-5 pt-6 pb-28 md:px-14 md:pr-72 md:pb-12">
        <p className="caps text-white/55">
          © {year} {brand.name} · {brand.city}
        </p>
        <p className="caps text-white/55">{footer.credit}</p>
      </div>
    </footer>
  );
}
