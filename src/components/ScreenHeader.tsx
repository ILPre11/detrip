import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  subtitle?: string;
}

export function ScreenHeader({ title, subtitle }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-3 px-4 py-4 bg-white/90 border-b border-sky-100 sticky top-0 z-10 backdrop-blur-sm">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-700 text-lg flex-shrink-0 shadow-sm"
        aria-label="Torna indietro"
      >
        ←
      </button>
      <div className="min-w-0">
        <h1 className="text-xl font-bold text-slate-900 leading-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}
