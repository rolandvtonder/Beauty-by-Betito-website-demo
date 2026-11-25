import {useEffect, useRef} from 'react';
import {hero} from '../content';
import {clamp} from '../lib/math';
import {onFrame} from '../lib/scroll';
import {media} from '../lib/media';

/**
 * The looping close-up of a makeup artist at work, with the headline and
 * paragraph. As you scroll on to the services, the film blurs, dims and
 * shrinks back as the page transition (a camera pull-back, not a fade).
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(
    () =>
      onFrame(() => {
        const el = root.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const h = window.innerHeight;
        const p = clamp(-r.top / h);
        const v = video.current;
        if (v) {
          if (p < 0.98 && v.paused) void v.play().catch(() => {});
          if (p >= 0.98 && !v.paused) v.pause();
        }
        if (stage.current) {
          stage.current.style.transform = `translate3d(0, ${(p * h * 0.5).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
          stage.current.style.filter = p > 0.01 ? `blur(${(p * 18).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
        }
      }),
    [],
  );

  return (
    <section ref={root} id="top" aria-labelledby="hero-title" className="relative h-svh min-h-[620px] overflow-hidden bg-ink">
      <div ref={stage} className="absolute inset-0 origin-center will-change-transform">
        <video
          ref={video}
          className="h-full w-full object-cover"
          poster={media('hero-poster.webp')}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-hidden
        >
          {/* Phones get the 720p cut (about half the download). */}
          <source src={media('hero-1080.mp4')} type="video/mp4" media="(min-width: 1024px)" />
          <source src={media('hero-720.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(22_16_15/0.62),rgb(22_16_15/0.15)_60%,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgb(22_16_15/0.5),transparent)]" />

        <div className="absolute inset-0 mx-auto max-w-[1680px] px-5 pt-[clamp(96px,14vh,150px)] md:px-14">
          <p className="caps mb-6 text-white/80 md:ml-[1.6em]">{hero.eyebrow}</p>
          <h1 id="hero-title" className="display text-[clamp(42px,7.6vw,138px)] text-white drop-shadow-[0_4px_30px_rgb(0_0_0/0.35)]">
            {hero.lines.map((l, i) => (
              <span key={l.t} className={`block ${l.i ? 'it' : ''} ${i === 0 ? 'md:pl-[1.6em]' : ''}`}>
                {l.t}
              </span>
            ))}
          </h1>
          <p className="mt-8 ml-[clamp(0px,19vw,330px)] max-w-[340px] text-[16px] leading-[1.6] text-white/90 max-md:ml-0 md:text-[17px]">
            {hero.body}
          </p>
        </div>
      </div>
    </section>
  );
}
