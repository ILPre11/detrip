import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TabBar } from './components/TabBar';
import { Oggi } from './screens/Oggi';
import { Itinerario } from './screens/Itinerario';
import { GiornoDetail } from './screens/GiornoDetail';
import { Citta } from './screens/Citta';
import { CittaDetail } from './screens/CittaDetail';
import { LuogoDetail } from './screens/LuogoDetail';
import { RistoranteDetail } from './screens/RistoranteDetail';
import { Mappa } from './screens/Mappa';
import { Info } from './screens/Info';

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-dvh flex flex-col bg-[linear-gradient(180deg,#fffdf8_0%,#f4f8ff_100%)] text-slate-900 max-w-lg mx-auto shadow-[0_0_0_1px_rgba(148,163,184,0.18),0_12px_36px_rgba(15,23,42,0.08)]">
        <main className="flex-1 overflow-y-auto min-h-0">
          <Routes>
            <Route path="/" element={<Navigate to="/oggi" replace />} />
            <Route path="/oggi" element={<Oggi />} />
            <Route path="/itinerario" element={<Itinerario />} />
            <Route path="/itinerario/:giorno" element={<GiornoDetail />} />
            <Route path="/citta" element={<Citta />} />
            <Route path="/citta/:id" element={<CittaDetail />} />
            <Route path="/citta/:id/luogo/:luogoId" element={<LuogoDetail />} />
            <Route path="/citta/:id/ristorante/:risId" element={<RistoranteDetail />} />
            <Route path="/mappa" element={<Mappa />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
        <TabBar />
      </div>
    </BrowserRouter>
  );
}
