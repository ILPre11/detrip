import { NavLink } from 'react-router-dom';

const TABS = [
  { to: '/oggi',       label: 'Oggi',       icon: '📅' },
  { to: '/itinerario', label: 'Itinerario', icon: '🗓' },
  { to: '/citta',      label: 'Città',      icon: '🏛' },
  { to: '/mappa',      label: 'Mappa',      icon: '🗺' },
  { to: '/info',       label: 'Info',       icon: 'ℹ️' },
] as const;

export function TabBar() {
  return (
    <nav className="bg-white/90 border-t border-sky-100 flex-shrink-0 backdrop-blur-sm">
      <div className="flex">
        {TABS.map(tab => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 min-h-[58px] py-2 text-xs font-semibold transition-all ${
                isActive
                  ? 'text-blue-700 bg-gradient-to-b from-sky-50 to-white'
                  : 'text-slate-500'
              }`
            }
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
