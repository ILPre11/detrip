import { Link } from 'react-router-dom';
import { guida } from '../data';

export function Citta() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Città</h1>

      <div className="space-y-2">
        {guida.citta.map((c, i) => {
          const nottiLabel =
            c.notti === 0
              ? c.tipo ?? 'Sosta'
              : `${c.notti} nott${c.notti === 1 ? 'e' : 'i'}`;
          return (
            <Link
              key={c.id}
              to={`/citta/${c.id}`}
              className="flex items-center justify-between bg-white rounded-xl border border-gray-100 shadow-sm p-4 min-h-[72px]"
            >
              <div className="min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-sm font-bold text-blue-600">#{i + 1}</span>
                  <span className="text-sm text-gray-400">{c.regione}</span>
                </div>
                <p className="text-lg font-semibold text-gray-900 leading-tight">
                  {c.nome}
                </p>
                <p className="text-sm text-gray-500">{nottiLabel}</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                {c.avviso && (
                  <span className="text-orange-500" aria-label="Avviso presente">
                    ⚠️
                  </span>
                )}
                <span className="text-gray-300 text-xl" aria-hidden="true">
                  ›
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
