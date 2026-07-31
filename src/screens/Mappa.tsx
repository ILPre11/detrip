import { MapView } from '../components/MapView';

export function Mappa() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-3 flex-shrink-0 bg-white border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-900">Mappa del viaggio</h1>
        <p className="text-gray-500 text-sm mt-0.5">Tocca una città per i dettagli</p>
      </div>
      <div className="flex-1 min-h-0">
        <MapView />
      </div>
    </div>
  );
}
