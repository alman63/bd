import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="max-w-3xl">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Интеллектуальная база знаний «Кулинарная книга»
    </h1>
    <p className="text-gray-600 mb-6">
      Найдите блюдо по ингредиентам, задайте вопрос ИИ или исследуйте граф связей между рецептами.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link to="/chat" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <div className="text-2xl mb-2">💬</div>
        <div className="font-semibold">Чат с ИИ</div>
        <div className="text-sm text-gray-500">Спросите, что приготовить</div>
      </Link>
      <Link to="/recipes" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <div className="text-2xl mb-2">📖</div>
        <div className="font-semibold">Рецепты</div>
        <div className="text-sm text-gray-500">Каталог блюд</div>
      </Link>
      <Link to="/graph" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <div className="text-2xl mb-2">🕸️</div>
        <div className="font-semibold">Граф знаний</div>
        <div className="text-sm text-gray-500">Связи между блюдами</div>
      </Link>
    </div>
  </div>
);

export default HomePage;
