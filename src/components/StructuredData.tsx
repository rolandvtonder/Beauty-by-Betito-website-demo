import {brand, contact, faq, services, site} from '../content';

/**
 * Schema.org data for Google: the business (a BeautySalon, which is a
 * LocalBusiness) with its services and hours, plus the FAQ. Built from
 * content.ts so it always matches what the page says, and pre-rendered into
 * the HTML at build time so crawlers see it without running JavaScript.
 */
export function StructuredData() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    '@id': `${site.url}/#business`,
    name: brand.name,
    slogan: brand.tagline,
    description:
      'Makeup artist, nail technician, lash and skin therapist in Cape Town. Bridal, matric dance and event makeup, gel and acrylic nails, lash extensions, brows and facials — in studio or mobile, open 24 hours.',
    url: `${site.url}/`,
    image: `${site.url}/og-image.jpg`,
    logo: `${site.url}/logo.svg`,
    telephone: contact.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.city,
      addressRegion: brand.region,
      addressCountry: brand.country,
    },
    areaServed: {'@type': 'City', name: 'Cape Town'},
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: contact.socials.map((s) => s.href),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Beauty treatments',
      itemListElement: services.list.map((s) => ({
        '@type': 'OfferCatalog',
        name: s.name.join(' '),
        itemListElement: s.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: {'@type': 'Service', name: item, areaServed: 'Cape Town'},
        })),
      })),
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {'@type': 'Answer', text: f.a},
    })),
  };

  const json = (o: object) => ({__html: JSON.stringify(o).replace(/</g, '\\u003c')});

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={json(business)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={json(faqPage)} />
    </>
  );
}
