/** Files in public/media, resolved against the deploy base. */
export const media = (f: string) => `${import.meta.env.BASE_URL}media/${f}`;

/** `srcset` for a photo downloaded at two widths, e.g. `g1-600.webp` + `g1-1200.webp`. */
export const srcSet = (name: string, small: number, large: number) =>
  `${media(`${name}-${small}.webp`)} ${small}w, ${media(`${name}-${large}.webp`)} ${large}w`;
