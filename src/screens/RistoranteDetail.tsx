import { useParams } from 'react-router-dom';
import { guida } from '../data';
import { ScreenHeader } from '../components/ScreenHeader';
import { BadgeCane, BadgePrezzo, BadgePasti } from '../components/Badge';
import { MapsButton } from '../components/MapsButton';

export function RistoranteDetail() {
  const { id: cittaId, risId } = useParams<{ id: string; risId: string }>();
  const rist = guida.ristoranti.find(r => r.id === risId);
  const citta = guida.citta.find(c => c.id === cittaId);

  if (!rist || !citta) {
    return (
      <>
        <ScreenHeader title="Ristorante non trovato" />
        <p className="p-4 text-gray-500">Ristorante non trovato.</p>
      </>
    );
  }

  return (
    <>
      <ScreenHeader title={rist.nome} subtitle={citta.nome} />
      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          <BadgePrezzo prezzo={rist.prezzo} />
          <BadgeCane cane={rist.cane} />
          <BadgePasti orari={rist.orari} />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
            Cucina
          </p>
          <p className="text-gray-800 text-base leading-relaxed">{rist.cucina}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
            Perché visitarlo
          </p>
          <p className="text-gray-800 text-base leading-relaxed">{rist.perche}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
            Orari
          </p>
          <p className="text-gray-800 text-base">{rist.orari}</p>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
            🐕 Cane
          </p>
          <p className="text-amber-900 text-base">{rist.cane}</p>
        </div>

        <MapsButton nome={rist.nome} citta={citta.nome} />
      </div>
    </>
  );
}
