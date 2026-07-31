export interface Coord {
  lat: number;
  lng: number;
}

export interface Meta {
  titolo: string;
  sottotitolo: string;
  viaggiatori: string;
  struttura: string;
  dataInizio: string;
  dataFine: string;
  percorso: string;
  pedaggi: {
    svizzera: string;
    germania: string;
    italia: string;
    austria: string;
  };
  cane: {
    documenti: string;
    inAuto: string;
    regolaGenerale: string;
  };
  note: {
    ferragosto: string;
    prenotazioni: string;
  };
}

export interface GiornoItinerario {
  giorno: number;
  data: string;
  settimana: string;
  da: string;
  a: string;
  km: number;
  guida: string;
  base: string | null;
  piano: string;
  avviso?: string;
}

export interface Citta {
  id: string;
  nome: string;
  notti: number;
  tipo?: string;
  regione: string;
  sintesi: string;
  parcheggio: string;
  cane: string;
  escursione: string;
  piatto: string;
  avviso?: string;
  coord: Coord;
}

export type Priorita = 'alta' | 'media' | 'bassa';

export interface Luogo {
  id: string;
  citta: string;
  nome: string;
  priorita: Priorita;
  descrizione: string;
  orari?: string;
  cane: string;
  avviso?: string;
  tipo?: string;
  verificato?: boolean;
}

export interface Ristorante {
  id: string;
  citta: string;
  nome: string;
  cucina: string;
  prezzo: string;
  orari: string;
  cane: string;
  perche: string;
}

export interface HotelPrenotazione {
  citta: string;
  notti: number;
  nome: string | null;
}

export interface Hotel {
  criteri: string;
  daPrenotare: HotelPrenotazione[];
}

export interface GuidaViaggio {
  meta: Meta;
  itinerario: GiornoItinerario[];
  citta: Citta[];
  luoghi: Luogo[];
  ristoranti: Ristorante[];
  hotel: Hotel;
}
