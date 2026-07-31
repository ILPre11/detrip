import { useParams } from 'react-router-dom';
import { guida } from '../data';
import { ScreenHeader } from '../components/ScreenHeader';
import { BadgeCane, BadgePriorita, AvvisoBox } from '../components/Badge';
import { MapsButton } from '../components/MapsButton';

export function LuogoDetail() {
  const { id: cittaId, luogoId } = useParams<{ id: string; luogoId: string }>();
  const luogo = guida.luoghi.find(l => l.id === luogoId);
  const citta = guida.citta.find(c => c.id === cittaId);

  if (!luogo || !citta) {
    return (
      <>
        <ScreenHeader title="Luogo non trovato" />
        <p className="p-4 text-gray-500">Luogo non trovato.</p>
      </>
    );
  }

  return (
    <>
      <ScreenHeader title={luogo.nome} subtitle={citta.nome} />

      <div className="w-full h-52 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(135deg,_#dbeafe_0%,_#e9d5ff_100%)] overflow-hidden flex-shrink-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl leading-none opacity-80">🏛</div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">{citta.nome}</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          <BadgePriorita priorita={luogo.priorita} />
          <BadgeCane cane={luogo.cane} />
          {luogo.tipo && (
            <span className="inline-flex px-2.5 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-800 border border-purple-200">
              {luogo.tipo}
            </span>
          )}
        </div>

        {luogo.avviso && <AvvisoBox testo={luogo.avviso} />}

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-gray-800 text-base leading-relaxed">{luogo.descrizione}</p>
        </div>

        {luogo.orari && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
              Orari
            </p>
            <p className="text-gray-800 text-base">{luogo.orari}</p>
          </div>
        )}

        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
            🐕 Cane
          </p>
          <p className="text-amber-900 text-base">{luogo.cane}</p>
        </div>

        <MapsButton nome={luogo.nome} citta={citta.nome} />
      </div>
    </>
  );
}
