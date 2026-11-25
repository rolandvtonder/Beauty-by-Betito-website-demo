import {brand, hero, whatsappLink} from '../content';

/** The fixed furniture: wordmark (top left), menu button (top right), book button (bottom right). */
export function Chrome({menuOpen, onMenu}: {menuOpen: boolean; onMenu: () => void}) {
  return (
    <>
      <a
        href="#top"
        aria-label={`${brand.name} — back to top`}
        className="fixed top-5 left-5 z-[55] flex flex-col leading-none text-white mix-blend-difference md:top-7 md:left-14"
      >
        <span className="it font-serif text-[15px] tracking-[0.04em] normal-case">beauty by</span>
        <span className="display text-[26px] tracking-[0.2em]">Betito</span>
      </a>

      <button
        type="button"
        onClick={onMenu}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
        className={`caps fixed top-5 right-5 z-[55] flex min-h-11 items-center gap-4 px-6 py-3 backdrop-blur-md transition-colors duration-500 md:top-7 md:right-8 ${
          menuOpen ? 'bg-white text-ink' : 'bg-ink/55 text-white hover:bg-ink/80'
        }`}
      >
        {menuOpen ? 'Close' : 'Menu'}
        <span aria-hidden className={`text-[16px] leading-none transition-transform duration-500 ease-silk ${menuOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        className={`caps fixed right-5 bottom-5 z-[55] flex min-h-12 items-center gap-1.5 px-7 py-3.5 text-white shadow-[0_10px_40px_rgb(22_16_15/0.35)] transition-colors duration-500 md:right-8 md:bottom-7 ${
          menuOpen ? 'bg-wine' : 'bg-rose hover:bg-wine'
        }`}
      >
        <WhatsAppIcon />
        {hero.cta[0]} <em className="normal-case">{hero.cta[1]}</em>
      </a>
    </>
  );
}

export function WhatsAppIcon({className = 'size-4'}: {className?: string}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.2 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.43 9.42m8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.71 5.84.7 12.1c0 2 .52 3.95 1.52 5.67L.6 23.65l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02" />
    </svg>
  );
}
