interface Props {
  nome: string;
  citta: string;
}

export function MapsButton({ nome, citta }: Props) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${nome} ${citta}`)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-4 px-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 active:from-blue-800 active:to-sky-700 text-white rounded-2xl text-base font-semibold min-h-[52px] shadow-[0_10px_25px_rgba(37,99,235,0.24)] transition-all"
    >
      <span aria-hidden="true">📍</span>
      Apri in Maps
    </a>
  );
}
