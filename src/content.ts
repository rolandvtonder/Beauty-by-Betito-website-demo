/**
 * ALL COPY AND BUSINESS DETAILS LIVE HERE.
 *
 * Before launch, replace everything marked `TODO` — especially the WhatsApp
 * number and the website address, which also feed Google's business data
 * (structured data in index.html, sitemap.xml and robots.txt use the same
 * address; search the project for "beautybybetito.co.za").
 */

export const site = {
  // TODO: the real domain once it's registered.
  url: 'https://www.beautybybetito.co.za',
  locale: 'en_ZA',
};

export const brand = {
  name: 'Beauty by Betito',
  short: 'Betito',
  tagline: 'Hey, let me make you beautiful',
  city: 'Cape Town',
  region: 'Western Cape',
  country: 'ZA',
};

export const contact = {
  // Betito's WhatsApp Business number, international format, digits only (27 = South Africa).
  whatsapp: '27699113721',
  // The same number written for people.
  phoneDisplay: '+27 69 911 3721',
  hours: 'Open 24 hours',
  hoursNote: '7 days a week — early wedding call times and late events included.',
  // Socials appear in the menu and footer only once they have a link.
  socials: [
    // {label: 'Instagram', href: 'https://instagram.com/…'},
    // {label: 'Facebook', href: 'https://facebook.com/…'},
    // {label: 'TikTok', href: 'https://tiktok.com/@…'},
  ] as {label: string; href: string}[],
};

/** A wa.me link that opens WhatsApp with a pre-filled message. */
export const whatsappLink = (message = `Hi ${brand.short}! I'd like to book an appointment.`) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

/** Headline lines; `i` lines are set in italic. */
export const hero = {
  eyebrow: 'Makeup · Nails · Lashes · Skin — Cape Town',
  lines: [
    {t: 'Let me make you'},
    {t: 'Beautiful.', i: true},
    {t: 'Come as you are,'},
    {t: 'leave glowing', i: true},
  ],
  body: 'Makeup, nails, lashes and skin by Betito — in the Cape Town studio or wherever you need to shine. Open 24 hours, so the early wedding call and the late-night event are covered.',
  cta: ['Book on', 'WhatsApp'],
};

export const nav = [
  {label: 'Home', href: '#top'},
  {label: 'Services', href: '#services'},
  {label: 'About Betito', href: '#about'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Book now', href: '#book'},
  {label: 'FAQ', href: '#faq'},
];

export type Service = {
  id: string;
  name: [string, string];
  /** Visible keyword line under the name — also helps search. */
  summary: string;
  items: string[];
  image: string;
  alt: string;
  /** Which part of the photo to keep when it's cropped into a tall panel. */
  focus: string;
  tint: string;
};

export const services = {
  eyebrow: 'Makeup, nails, lashes & skin treatments in Cape Town',
  title: ['The', 'treatments'],
  intro: 'Every look is made for one face only — yours. Prices are quoted personally, so send a message and a picture of the look you love.',
  priceNote: 'Price on request',
  list: [
    {
      id: 'makeup',
      name: ['Makeup', 'Artistry'],
      summary: 'Bridal, matric dance & event makeup',
      items: ['Bridal & bridal party', 'Matric dance', 'Events & evening glam', 'Photoshoots', 'Soft everyday glam'],
      image: 'svc-makeup',
      alt: 'Makeup artist applying foundation to a client in front of a ring light',
      focus: '62% 50%',
      tint: '#4b1c2b',
    },
    {
      id: 'nails',
      name: ['Nails', '& Polish'],
      summary: 'Gel, acrylic, manicures & pedicures',
      items: ['Gel overlay', 'Acrylic sets', 'Manicure & pedicure', 'Nail art', 'Soak-offs & refills'],
      image: 'svc-nails',
      alt: 'Hand with a fresh nude manicure against a dark background',
      focus: '50% 50%',
      tint: '#b4566a',
    },
    {
      id: 'lashes',
      name: ['Lashes', '& Brows'],
      summary: 'Lash extensions, lifts & brow shaping',
      items: ['Classic, hybrid & volume lashes', 'Lash lift & tint', 'Brow shaping', 'Brow tint & lamination'],
      image: 'svc-lashes',
      alt: 'Close-up of mascara being brushed through long lashes',
      focus: '50% 50%',
      tint: '#8a6a4f',
    },
    {
      id: 'skin',
      name: ['Skin', '& Facials'],
      summary: 'Facials & skincare treatments',
      items: ['Glow facial', 'Deep-cleansing facial', 'Hydrating treatment', 'Pre-event skin prep'],
      image: 'svc-skin',
      alt: 'Client relaxing during a facial massage',
      focus: '40% 50%',
      tint: '#c99a86',
    },
  ] as Service[],
};

export const about = {
  eyebrow: 'About Betito — Cape Town makeup artist & beauty therapist',
  lines: [{t: 'Beauty that'}, {t: 'feels like', i: true}, {t: 'you.'}],
  // TODO: Betito's own words. Keep it personal — clients book people, not prices.
  body: [
    "Hey, I'm Betito. “Let me make you beautiful” isn't a slogan — it's the whole promise. Before a brush touches your skin, we talk: about your face, your style, the occasion and how you want to feel when you walk in.",
    'From wedding mornings and matric dances to a fresh set of nails on a Tuesday, every appointment gets the same care. Come to the studio in Cape Town, or let me come to you — home, venue or hotel.',
  ],
  facts: [
    ['Where', 'Studio in Cape Town & mobile call-outs'],
    ['When', 'Open 24 hours, 7 days'],
    ['How', 'Book on WhatsApp'],
  ] as [string, string][],
  image: 'about',
  alt: 'A professional makeup kit laid out with brushes, palettes and lipsticks',
};

export const gallery = {
  eyebrow: 'Makeup, nail & lash inspiration',
  title: ['Looks', 'to love'],
  intro: 'Found a look you love? Save it, send it on WhatsApp, and we’ll make it yours.',
  items: [
    {src: 'g1', w: 1200, h: 1800, label: 'Luminous skin', alt: 'Close-up of a woman with glowing skin and soft, natural makeup'},
    {src: 'g2', w: 1200, h: 1800, label: 'Bridal glam', alt: 'Bride in traditional jewellery with full bridal makeup, smiling'},
    {src: 'g3', w: 1200, h: 1800, label: 'Soft pink nails', alt: 'Manicured hands with soft pink polish holding a nail polish bottle'},
    {src: 'g4', w: 1200, h: 1800, label: 'Sunset eyes', alt: 'Eyeshadow brush blending warm orange shadow across an eyelid'},
    {src: 'g5', w: 1200, h: 1800, label: 'Glow facial', alt: 'Woman with dewy, glowing skin touching her cheek'},
    {src: 'g6', w: 1200, h: 816, label: 'Bold & natural', alt: 'Two women with natural afro hair and bold evening makeup'},
    {src: 'g7', w: 1200, h: 1800, label: 'Lash set', alt: 'Lash technician applying eyelash extensions with tweezers'},
    {src: 'g8', w: 1200, h: 1800, label: 'Everyday glam', alt: 'Smiling woman with curly hair wearing soft everyday makeup'},
  ],
};

export const booking = {
  eyebrow: 'Book a makeup, nail, lash or facial appointment in Cape Town',
  lines: [{t: 'Book your'}, {t: 'glow.', i: true}],
  steps: [
    ['Message', 'Send a WhatsApp with the treatment, date and time — and a picture of the look if you have one.'],
    ['Choose', 'Come to the studio in Cape Town, or book a mobile call-out to your home or venue.'],
    ['Glow', 'Sit back. Betito takes it from here.'],
  ] as [string, string][],
};

export const faq = {
  eyebrow: 'Questions',
  title: ['Good to', 'know'],
  items: [
    {
      q: 'Do you come to me?',
      a: 'Yes. Betito works from her studio in Cape Town and also does mobile call-outs to homes, venues and hotels around Cape Town. A travel fee may apply depending on the area — just ask on WhatsApp.',
    },
    {
      q: 'How do I book?',
      a: 'Send a WhatsApp message with the treatment you want, your date and time, and whether you’d like the studio or a call-out. You’ll get a reply with availability and a quote.',
    },
    {
      q: 'How much do treatments cost?',
      a: 'Prices are quoted on request, because every look, nail set and lash style is different. Send a picture of what you have in mind for an exact quote.',
    },
    {
      q: 'Do you do bridal and group bookings?',
      a: 'Yes — brides, bridal parties, matric dances and events. Book as early as you can, especially for weekends and the wedding season.',
    },
    {
      q: 'Are you really open 24 hours?',
      a: 'Yes. Appointments can be made for any time of day or night, so very early wedding call times and late events are covered. Message any time.',
    },
    {
      q: 'How should I prepare for my appointment?',
      a: 'For makeup, arrive with a clean, moisturised face. For lashes, skip mascara and eye makeup. For nails, let us know if you have an existing set to remove.',
    },
  ],
};

/**
 * Real client reviews go here (name, short quote, treatment). The reviews
 * block stays hidden until this list has entries — never add made-up ones.
 */
export const reviews: {name: string; quote: string; service: string}[] = [];

export const footer = {
  line: 'Makeup artist, nail technician, lash & skin therapist in Cape Town, South Africa.',
  credit: 'Imagery via Pexels.',
};
