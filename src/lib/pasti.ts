export interface PastiDisponibili {
  colazionePranzo: boolean;
  cena: boolean;
}

function extractHours(orari: string): number[] {
  return [...orari.matchAll(/(?<!\d)(\d{1,2})(?::\d{2})?(?!\d)/g)]
    .map(m => parseInt(m[1], 10))
    .filter(n => n <= 24);
}

export function getPastiDisponibili(orari: string): PastiDisponibili {
  const ore = extractHours(orari);
  if (!ore.length) return { colazionePranzo: false, cena: false };
  const min = Math.min(...ore);
  const max = Math.max(...ore);
  return {
    colazionePranzo: min <= 12,
    cena: max >= 19,
  };
}
