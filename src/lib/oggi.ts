import { guida } from '../data';
import type { GiornoItinerario } from '../data';

export function getGiornoOggi(): GiornoItinerario {
  const today = new Date().toISOString().slice(0, 10);
  return guida.itinerario.find(g => g.data === today) ?? guida.itinerario[0];
}

export function isOutsideTrip(): boolean {
  const today = new Date().toISOString().slice(0, 10);
  return !guida.itinerario.some(g => g.data === today);
}

export function formatData(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDataBreve(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
}
