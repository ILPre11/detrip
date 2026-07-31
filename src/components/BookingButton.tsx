interface Props {
  nome: string;
  citta: string;
}

export function BookingButton({ nome, citta }: Props) {
  const url = `https://www.booking.com/searchresults.html?${new URLSearchParams({
    ss: `${nome}, ${citta}`,
  })}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3 px-4 mt-2 bg-[#003580] hover:bg-[#00265c] active:bg-[#001c47] text-white rounded-xl text-sm font-semibold min-h-[44px] transition-colors"
    >
      <span aria-hidden="true">🛏️</span>
      Prenota su Booking.com
    </a>
  );
}
