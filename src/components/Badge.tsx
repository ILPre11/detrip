import { getPastiDisponibili } from '../lib/pasti';

// Classificazione badge cane: 3 stati come da SPEC §2
type CaneStatus = 'ok' | 'vietato' | 'verifica';

function categorizeCane(cane: string): CaneStatus {
  const s = cane.toLowerCase();
  if (s.includes('vietato')) return 'vietato';
  if (
    s.includes('ammesso') ||
    s.includes('dog-friendly') ||
    s.includes('biergarten') ||
    s.includes('tavol') ||
    s.includes('comodo') ||
    (s.includes('ok') && !s.includes('verificare'))
  ) return 'ok';
  return 'verifica';
}

const CANE_CFG: Record<CaneStatus, { style: string; icon: string; label: string }> = {
  ok:      { style: 'bg-green-50 text-green-800 border-green-200',  icon: '🐕', label: 'Cane ammesso' },
  vietato: { style: 'bg-red-50 text-red-800 border-red-200',        icon: '🚫', label: 'Cane vietato' },
  verifica:{ style: 'bg-amber-50 text-amber-800 border-amber-200',  icon: '❓', label: 'Da verificare' },
};

export function BadgeCane({ cane }: { cane: string }) {
  const cfg = CANE_CFG[categorizeCane(cane)];
  return (
    <span
      title={cane}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium border ${cfg.style}`}
    >
      <span aria-hidden="true">{cfg.icon}</span>
      {cfg.label}
    </span>
  );
}

export function BadgePriorita({ priorita }: { priorita: string }) {
  const styles: Record<string, string> = {
    alta:  'bg-red-50 text-red-800 border-red-200',
    media: 'bg-amber-50 text-amber-800 border-amber-200',
    bassa: 'bg-gray-50 text-gray-600 border-gray-200',
  };
  const style = styles[priorita] ?? 'bg-gray-50 text-gray-600 border-gray-200';
  const label = priorita.charAt(0).toUpperCase() + priorita.slice(1);
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text-sm font-medium border ${style}`}>
      ★ {label}
    </span>
  );
}

export function BadgePrezzo({ prezzo }: { prezzo: string }) {
  const euro = prezzo.replace(/E/g, '€').replace(/-/g, '–');
  return (
    <span className="inline-flex px-2.5 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200">
      {euro}
    </span>
  );
}

export function BadgePasti({ orari }: { orari: string }) {
  const { colazionePranzo, cena } = getPastiDisponibili(orari);
  return (
    <>
      {colazionePranzo && (
        <span
          title="Colazione/pranzo"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium bg-sky-50 text-sky-800 border border-sky-200"
        >
          <span aria-hidden="true">☕</span>
          Colazione/pranzo
        </span>
      )}
      {cena && (
        <span
          title="Cena"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-200"
        >
          <span aria-hidden="true">🌙</span>
          Cena
        </span>
      )}
    </>
  );
}

export function AvvisoBox({ testo }: { testo: string }) {
  return (
    <div className="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
      <span className="text-xl flex-shrink-0" aria-hidden="true">⚠️</span>
      <p className="text-orange-900 text-base leading-relaxed">{testo}</p>
    </div>
  );
}
