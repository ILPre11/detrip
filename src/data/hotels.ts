export interface HotelConsigliato {
  nome: string;
  prezzoIndicativo: string;
  supplementoCane: string;
  note?: string;
}

export const HOTEL_CONSIGLIATI: Record<string, HotelConsigliato[]> = {
  friburgo: [
    {
      nome: 'Green City Hotel Vauban',
      prezzoIndicativo: '~110–130€/notte',
      supplementoCane: '+9€/notte',
      note: 'Quartiere eco-sostenibile Vauban, parcheggio incluso',
    },
    {
      nome: 'Designhotel am Stadtgarten',
      prezzoIndicativo: '~120–140€/notte',
      supplementoCane: '+12€/notte',
      note: 'Centro città, vicino al Stadtgarten',
    },
    {
      nome: 'Stadthotel Freiburg Kolping Hotels',
      prezzoIndicativo: '~100–120€/notte',
      supplementoCane: '+12€/notte',
      note: 'Centrale, a pochi passi dalla Münsterplatz',
    },
  ],
  heidelberg: [
    {
      nome: 'Hotel Goldener Hecht',
      prezzoIndicativo: '~100–130€/notte',
      supplementoCane: '+5€/notte',
      note: 'Nel cuore dell\'Altstadt, 2 cani max',
    },
    {
      nome: 'Qube Hotel Bergheim',
      prezzoIndicativo: '~110–140€/notte',
      supplementoCane: '+10€/notte',
      note: 'Design moderno, a 10 min a piedi dal centro',
    },
    {
      nome: 'Arthotel Heidelberg',
      prezzoIndicativo: '~120–150€/notte',
      supplementoCane: '+12€/notte',
      note: '2 cani max, vicino alla Hauptstraße',
    },
  ],
  rothenburg: [
    {
      nome: 'Hotel Rappen Rothenburg',
      prezzoIndicativo: '~110–125€/notte',
      supplementoCane: '+10€/notte',
      note: 'Dentro le mura medievali, ristorante con terrazza',
    },
    {
      nome: 'Historik Hotel Gotisches Haus',
      prezzoIndicativo: '~135–150€/notte',
      supplementoCane: 'da verificare',
      note: 'Edificio storico del XV sec., centro pedonale',
    },
    {
      nome: 'Romantik Hotel Markusturm',
      prezzoIndicativo: '~130–150€/notte',
      supplementoCane: 'gratuito',
      note: 'Cani benvenuti senza supplemento, gestione familiare',
    },
  ],
  bamberg: [
    {
      nome: 'Hotel Villa Geyerswörth',
      prezzoIndicativo: '~100–130€/notte',
      supplementoCane: '+6€/notte',
      note: 'Sull\'isola fluviale, vista sul Regnitz',
    },
    {
      nome: 'Hotel Alt-Ringlein',
      prezzoIndicativo: '~100–120€/notte',
      supplementoCane: '+10€/notte',
      note: 'Centro storico, fino a 3 animali',
    },
    {
      nome: 'Hotel National',
      prezzoIndicativo: '~90–110€/notte',
      supplementoCane: '+7€/notte',
      note: 'Opzione economica vicino alla stazione',
    },
  ],
  regensburg: [
    {
      nome: 'Elaya Hotel Regensburg City Center',
      prezzoIndicativo: '~110–140€/notte',
      supplementoCane: 'gratuito',
      note: 'Nessun supplemento cane, posizione centrale',
    },
    {
      nome: 'Hotel St. Georg',
      prezzoIndicativo: '~95–120€/notte',
      supplementoCane: '+6€/notte',
      note: '2 animali max, vicino all\'Altstadt',
    },
    {
      nome: 'Hotel-Restaurant Richard Held',
      prezzoIndicativo: '~90–115€/notte',
      supplementoCane: 'gratuito',
      note: 'Familiare, cani benvenuti senza costi extra',
    },
  ],
  costanza: [
    {
      nome: "Ko'Ono Hotel und Restaurant",
      prezzoIndicativo: '~110–140€/notte',
      supplementoCane: '+5€/notte',
      note: 'Vista lago, ristorante con terrazza',
    },
    {
      nome: 'Ibis Konstanz',
      prezzoIndicativo: '~90–115€/notte',
      supplementoCane: '+10€/notte',
      note: 'Catena affidabile, verde vicino per passeggiate',
    },
    {
      nome: 'Schiff Am See',
      prezzoIndicativo: '~120–150€/notte',
      supplementoCane: '+25€/notte',
      note: 'Posizione sul lago eccellente, supplemento cane alto',
    },
  ],
};
