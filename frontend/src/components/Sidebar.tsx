import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: '🏠 Главная' },
  { to: '/chat', label: '💬 Чат с ИИ' },
  { to: '/recipes', label: '📖 Рецепты' },
  { to: '/graph', label: '🕸️ Граф знаний' },
];

const Sidebar = () => (
  <aside className="w-56 bg-white border-r border-gray-200 p-4">
    <nav className="flex flex-col gap-2">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg text-sm ${
              isActive ? 'bg-orange-100 text-orange-700 font-medium' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
