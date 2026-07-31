import { Link } from 'react-router-dom';
import { guida } from '../data';
import { formatDataBreve } from '../lib/oggi';

export function Itinerario() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Itinerario</h1>
      <p className="text-gray-500 text-base mb-4">
        {guida.itinerario.length} giorni · {guida.meta.dataInizio} – {guida.meta.dataFine}
      </p>

      <div className="space-y-2">
        {guida.itinerario.map(giorno => {
          const isTransfer = giorno.da !== giorno.a;
          return (
            <Link
              key={giorno.giorno}
              to={`/itinerario/${giorno.giorno}`}
              className="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 min-h-[72px]"
            >
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-sm font-bold text-blue-600">
                    G{giorno.giorno}
                  </span>
                  <span className="text-sm text-gray-400">
                    {formatDataBreve(giorno.data)}
                  </span>
                </div>
                <p className="text-base font-semibold text-gray-900 leading-tight">
                  {isTransfer ? `${giorno.da} → ${giorno.a}` : giorno.da}
                </p>
                {isTransfer && giorno.km > 0 && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {giorno.km} km · {giorno.guida}
                  </p>
                )}
              </div>
              <span className="text-gray-300 text-xl ml-3 flex-shrink-0" aria-hidden="true">
                ›
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
