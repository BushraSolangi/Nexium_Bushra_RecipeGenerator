'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`/api/recipes/${id}`);
      const data = await res.json();
      setRecipe(data.recipe);
      setLoading(false);
    };

    if (id) fetchRecipe();
  }, [id]);

  if (loading) return <p className="p-4">Loading recipe...</p>;
  if (!recipe) return <p className="p-4">Recipe not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image || '/images/default.jpg'}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <p className="mb-4 text-gray-600">{recipe.description}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients?.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <ol className="list-decimal pl-5">
        {recipe.steps?.map((step: string, idx: number) => (
          <li key={idx} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}
