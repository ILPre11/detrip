import { guida } from '../data';

function InfoRow({ label, testo }: { label: string; testo: string }) {
  return (
    <div className="p-4 border-b last:border-b-0 border-gray-50">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-gray-800 text-base leading-relaxed">{testo}</p>
    </div>
  );
}

const CHECKLIST = [
  'Vignetta svizzera (40 CHF) — acquisto online su via.admin.ch',
  'Hotel prenotati per tutte e 6 le tappe',
  'Documenti cane: microchip, passaporto europeo, vaccinazione antirabbica',
  'Spesa del 15 agosto: verificare aperture in Baviera',
  "Riconfermare prenotazioni 24-48h prima dell’arrivo",
];

export function Info() {
  const { meta } = guida;

  return (
    <div className="p-4 space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Info pratiche</h1>
        <p className="text-gray-500 text-base mt-0.5">
          {meta.viaggiatori} · {meta.struttura}
        </p>
      </div>

      {/* Pedaggi */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-2">🚗 Pedaggi</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <InfoRow label="Svizzera" testo={meta.pedaggi.svizzera} />
          <InfoRow label="Germania" testo={meta.pedaggi.germania} />
          <InfoRow label="Italia" testo={meta.pedaggi.italia} />
          <InfoRow label="Austria" testo={meta.pedaggi.austria} />
        </div>
      </section>

      {/* Cane */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-2">🐕 Cane in viaggio</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <InfoRow label="Documenti" testo={meta.cane.documenti} />
          <InfoRow label="In auto" testo={meta.cane.inAuto} />
          <InfoRow label="Regola generale" testo={meta.cane.regolaGenerale} />
        </div>
      </section>

      {/* Note */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-2">📝 Note</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <InfoRow label="Ferragosto" testo={meta.note.ferragosto} />
          <InfoRow label="Prenotazioni" testo={meta.note.prenotazioni} />
        </div>
      </section>

      {/* Hotel */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-2">🏨 Hotel</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-gray-800 text-base leading-relaxed">{guida.hotel.criteri}</p>
        </div>
      </section>

      {/* Checklist */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-2">✅ Checklist</h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 divide-y divide-gray-50">
          {CHECKLIST.map((item, i) => (
            <label
              key={i}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mt-0.5 w-5 h-5 rounded accent-blue-600 flex-shrink-0"
              />
              <span className="text-gray-800 text-base leading-relaxed">{item}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
