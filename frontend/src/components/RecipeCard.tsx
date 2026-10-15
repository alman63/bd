import { Link } from 'react-router-dom';
import { Recipe } from '../types';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <Link
    to={`/recipes/${recipe.id}`}
    className="block bg-white rounded-lg shadow hover:shadow-md transition p-4"
  >
    <h3 className="font-semibold text-lg text-gray-800">{recipe.name}</h3>
    <div className="text-sm text-gray-500 mt-1">
      {recipe.cuisine} • {recipe.timeMinutes} мин • {recipe.difficulty}
    </div>
    <div className="flex flex-wrap gap-1 mt-2">
      {recipe.ingredients.slice(0, 3).map((ing) => (
        <span key={ing} className="text-xs bg-orange-50 text-orange-700 px-2 py-0.5 rounded">
          {ing}
        </span>
      ))}
      {recipe.ingredients.length > 3 && (
        <span className="text-xs text-gray-400">+{recipe.ingredients.length - 3}</span>
      )}
    </div>
    {recipe.diet.length > 0 && (
      <div className="mt-2 text-xs text-green-700">
        🌱 {recipe.diet.join(', ')}
      </div>
    )}
  </Link>
);

export default RecipeCard;
