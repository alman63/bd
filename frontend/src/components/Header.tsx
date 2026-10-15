import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
    <Link to="/" className="text-xl font-bold text-orange-600">
      🍳 Кулинарная ИБЗ
    </Link>
    <nav className="space-x-4 text-sm text-gray-600">
      <span>Демо-версия</span>
    </nav>
  </header>
);

export default Header;
