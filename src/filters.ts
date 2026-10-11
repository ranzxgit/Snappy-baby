import type { Filter } from './types';

export const filterCss: Record<Filter, string> = {
  original: 'none',
  bw: 'grayscale(1) contrast(1.04)',
  vintage: 'sepia(.35) contrast(.92) saturate(.82)',
  warm: 'saturate(1.16) sepia(.12)',
  cool: 'saturate(.9) hue-rotate(8deg)',
  soft: 'saturate(.82) brightness(1.08) contrast(.92)',
  rose: 'sepia(.12) saturate(1.16) hue-rotate(325deg)',
  film: 'sepia(.18) contrast(1.12) saturate(.85)',
  fade: 'brightness(1.09) contrast(.82) saturate(.82)',
  crisp: 'contrast(1.12) saturate(1.08)',
  lavender: 'saturate(.88) hue-rotate(20deg)',
  golden: 'sepia(.2) saturate(1.35) brightness(1.02)',
  matte: 'contrast(.88) brightness(1.04) saturate(.78)',
  sepia: 'sepia(.58) saturate(.82) contrast(1.04)',
  dreamy: 'brightness(1.1) saturate(.9) contrast(.9)',
  y2k: 'saturate(1.35) contrast(1.04) hue-rotate(-7deg)',
  noir: 'grayscale(1) contrast(1.2) brightness(.9)',
  glow: 'brightness(1.08) contrast(.94) saturate(1.2)',
  peach: 'sepia(.15) saturate(1.22) hue-rotate(344deg)',
};

export function getFilterCss(filter: Filter): string {
  return filterCss[filter];
}
