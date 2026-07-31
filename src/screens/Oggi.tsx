import { Link } from 'react-router-dom';
import { guida } from '../data';
import { getGiornoOggi, isOutsideTrip, formatData } from '../lib/oggi';
import { AvvisoBox } from '../components/Badge';

export function Oggi() {
  const giorno = getGiornoOggi();
  const fuoriViaggio = isOutsideTrip();
  const baseId = giorno.base;
  const cittaBase = baseId ? guida.citta.find(c => c.id === baseId) : undefined;

  return (
    <div className="p-4 space-y-4">
      {fuoriViaggio && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-blue-700 text-sm">
          Il viaggio inizia l'11 agosto — in anteprima il Giorno 1
        </div>
      )}

      <div>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          {guida.meta.titolo}
        </p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mt-0.5">
          Giorno {giorno.giorno} · {giorno.settimana}
        </h1>
        <p className="text-gray-500 text-base">{formatData(giorno.data)}</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        {giorno.da !== giorno.a ? (
          <>
            <p className="text-sm font-medium text-gray-400 mb-1">Tratta</p>
            <p className="text-2xl font-bold text-gray-900">
              {giorno.da} → {giorno.a}
            </p>
            {giorno.km > 0 && (
              <p className="text-gray-600 mt-1">
                {giorno.km} km · {giorno.guida}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-400 mb-1">Tappa</p>
            <p className="text-2xl font-bold text-gray-900">{giorno.da}</p>
            <p className="text-gray-600 mt-1">{giorno.guida}</p>
          </>
        )}
      </div>

      {giorno.avviso && <AvvisoBox testo={giorno.avviso} />}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
          Piano del giorno
        </p>
        <ul className="space-y-2">
          {giorno.piano
            .split(/\.\s+/)
            .map(s => s.trim())
            .filter(Boolean)
            .map((s, i) => (
              <li key={i} className="flex gap-2 text-gray-800 text-base leading-snug">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>{s.endsWith('.') ? s : s + '.'}</span>
              </li>
            ))}
        </ul>
      </div>

      {cittaBase && (
        <Link
          to={`/citta/${cittaBase.id}`}
          className="flex items-center justify-between bg-blue-50 border border-blue-100 rounded-xl p-4"
        >
          <div>
            <p className="text-sm text-blue-500">Città base</p>
            <p className="text-lg font-bold text-blue-800">{cittaBase.nome}</p>
          </div>
          <span className="text-blue-400 text-xl" aria-hidden="true">›</span>
        </Link>
      )}
    </div>
  );
}
