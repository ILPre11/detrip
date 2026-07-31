import rawJson from './guida_viaggio.json';
import type { GuidaViaggio, Citta, Coord } from './types';

export type * from './types';

export const MILANO: Coord = { lat: 45.4642, lng: 9.19 };

// Coordinate da SPEC.md §4 — non presenti nel JSON sorgente
const CITY_COORDS: Record<string, Coord> = {
  friburgo:   { lat: 47.9959, lng: 7.8494 },
  heidelberg: { lat: 49.3988, lng: 8.6724 },
  rothenburg: { lat: 49.3785, lng: 10.1794 },
  bamberg:    { lat: 49.8917, lng: 10.8917 },
  regensburg: { lat: 49.0134, lng: 12.1016 },
  augusta:    { lat: 48.3705, lng: 10.8978 },
  costanza:   { lat: 47.6603, lng: 9.1758 },
};

// Cast necessario: TypeScript inferisce `priorita` come `string` dal JSON,
// non come unione `Priorita`. Il confine è qui, il resto del codice è tipizzato.
type RawGuida = Omit<GuidaViaggio, 'citta'> & { citta: Omit<Citta, 'coord'>[] };
const raw = rawJson as unknown as RawGuida;

const citta: Citta[] = raw.citta.map(c => ({
  ...c,
  coord: CITY_COORDS[c.id] ?? MILANO,
}));

export const guida: GuidaViaggio = { ...raw, citta };
