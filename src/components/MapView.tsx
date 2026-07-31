import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { guida, MILANO } from '../data';

const ROUTE_IDS = [
  'friburgo',
  'heidelberg',
  'rothenburg',
  'bamberg',
  'regensburg',
  'augusta',
  'costanza',
];

function makeNumberIcon(num: number) {
  return L.divIcon({
    className: '',
    html: `<div style="width:34px;height:34px;border-radius:50%;background:#2563eb;color:#fff;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35)">${num}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

const milanoIcon = L.divIcon({
  className: '',
  html: `<div style="width:28px;height:28px;border-radius:50%;background:#6b7280;color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35)">🏠</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

export function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, { zoomControl: true }).setView([48.5, 9.5], 6);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const orderedCities = ROUTE_IDS.flatMap(id => {
      const c = guida.citta.find(city => city.id === id);
      return c ? [c] : [];
    });

    const routeCoords: L.LatLngTuple[] = [
      [MILANO.lat, MILANO.lng],
      ...orderedCities.map(c => [c.coord.lat, c.coord.lng] as L.LatLngTuple),
      [MILANO.lat, MILANO.lng],
    ];

    L.polyline(routeCoords, { color: '#2563eb', weight: 3, opacity: 0.75, dashArray: '6 4' }).addTo(map);

    orderedCities.forEach((citta, i) => {
      L.marker([citta.coord.lat, citta.coord.lng], { icon: makeNumberIcon(i + 1) })
        .addTo(map)
        .bindTooltip(citta.nome, { permanent: false, direction: 'top', offset: [0, -20] })
        .on('click', () => navigate(`/citta/${citta.id}`));
    });

    L.marker([MILANO.lat, MILANO.lng], { icon: milanoIcon })
      .addTo(map)
      .bindTooltip('Milano (partenza/ritorno)', { permanent: false, direction: 'top', offset: [0, -16] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [navigate]);

  return <div ref={containerRef} className="w-full h-full" />;
}
