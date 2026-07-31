import { useParams, Link } from 'react-router-dom';
import { guida } from '../data';
import { HOTEL_CONSIGLIATI } from '../data/hotels';
import { ScreenHeader } from '../components/ScreenHeader';
import { BadgeCane, BadgePriorita, BadgePrezzo, BadgePasti, AvvisoBox } from '../components/Badge';
import { MapsButton } from '../components/MapsButton';
import { BookingButton } from '../components/BookingButton';

function InfoSection({ label, testo }: { label: string; testo: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-gray-800 text-base leading-relaxed">{testo}</p>
    </div>
  );
}

export function CittaDetail() {
  const { id } = useParams<{ id: string }>();
  const citta = guida.citta.find(c => c.id === id);

  if (!citta) {
    return (
      <>
        <ScreenHeader title="Città non trovata" />
        <p className="p-4 text-gray-500">Città non trovata.</p>
      </>
    );
  }

  const luoghi = guida.luoghi.filter(l => l.citta === id);
  const ristoranti = guida.ristoranti.filter(r => r.citta === id);
  const nottiLabel =
    citta.notti === 0
      ? citta.tipo ?? 'Sosta di transito'
      : `${citta.notti} nott${citta.notti === 1 ? 'e' : 'i'}`;

  return (
    <>
      <ScreenHeader
        title={citta.nome}
        subtitle={`${nottiLabel} · ${citta.regione}`}
      />
      <div className="p-4 space-y-4">
        {citta.avviso && <AvvisoBox testo={citta.avviso} />}

        <InfoSection label="Sintesi" testo={citta.sintesi} />
        <InfoSection label="🅿️ Parcheggio" testo={citta.parcheggio} />
        <InfoSection label="🐕 Note cane" testo={citta.cane} />
        {citta.escursione && (
          <InfoSection label="🏞 Escursioni" testo={citta.escursione} />
        )}
        <InfoSection label="🍽 Piatto tipico" testo={citta.piatto} />

        {/* Luoghi */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Luoghi da vedere
          </h2>
          <div className="space-y-2">
            {luoghi.map(l => (
              <Link
                key={l.id}
                to={`/citta/${id}/luogo/${l.id}`}
                className="flex items-start justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 min-h-[64px]"
              >
                <div className="min-w-0 mr-2">
                  <p className="text-base font-semibold text-gray-900 leading-tight">
                    {l.nome}
                  </p>
                  {l.avviso && (
                    <p className="text-xs text-orange-600 mt-0.5">⚠️ Avviso presente</p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <BadgePriorita priorita={l.priorita} />
                    <BadgeCane cane={l.cane} />
                  </div>
                </div>
                <span className="text-gray-300 text-xl flex-shrink-0" aria-hidden="true">
                  ›
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Ristoranti */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Dove mangiare</h2>
          <div className="space-y-2">
            {ristoranti.map(r => (
              <Link
                key={r.id}
                to={`/citta/${id}/ristorante/${r.id}`}
                className="flex items-start justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 min-h-[64px]"
              >
                <div className="min-w-0 mr-2">
                  <p className="text-base font-semibold text-gray-900 leading-tight">
                    {r.nome}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">{r.cucina}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    <BadgePrezzo prezzo={r.prezzo} />
                    <BadgeCane cane={r.cane} />
                    <BadgePasti orari={r.orari} />
                  </div>
                </div>
                <span className="text-gray-300 text-xl flex-shrink-0" aria-hidden="true">
                  ›
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Hotel consigliati */}
        {HOTEL_CONSIGLIATI[citta.id] && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">🏨 Dove dormire</h2>
            <p className="text-xs text-gray-400 mb-2">Fascia 100–150€/notte · cane accettato · prezzi indicativi agosto 2026</p>
            <div className="space-y-2">
              {HOTEL_CONSIGLIATI[citta.id].map((h, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                  <p className="text-base font-semibold text-gray-900">{h.nome}</p>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                      {h.prezzoIndicativo}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                      🐕 {h.supplementoCane}
                    </span>
                  </div>
                  {h.note && (
                    <p className="text-sm text-gray-500 mt-1.5 leading-snug">{h.note}</p>
                  )}
                  <BookingButton nome={h.nome} citta={citta.nome} />
                </div>
              ))}
            </div>
          </section>
        )}

        <MapsButton nome={citta.nome} citta={citta.regione} />
      </div>
    </>
  );
}
