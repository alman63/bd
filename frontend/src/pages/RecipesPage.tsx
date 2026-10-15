import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/mockApi';
import { Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(filter.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📖 Рецепты</h1>
      <input
        type="text"
        placeholder="Поиск по названию или кухне..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full max-w-md mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-gray-500">Ничего не найдено.</p>
      )}
    </div>
  );
};

export default RecipesPage;
