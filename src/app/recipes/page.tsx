'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllRecipes } from '../lib/recipes'; // Function to fetch recipes
import { RecipeCard } from '../components/RecipeCard'; // Reusable card component

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const data = await getAllRecipes(filter);
      setRecipes(data);
      setLoading(false);
    };

    fetchRecipes();
  }, [filter]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Recipes</h1>

      <div className="mb-6">
        <label className="mr-2 text-sm font-semibold">Filter:</label>
        <select
          className="border rounded px-3 py-1"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="quick">Under 30 mins</option>
        </select>
      </div>

      {loading ? (
        <p>Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe: any) => (
            <RecipeCard key={recipe._id || recipe.id} recipe={recipe} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/recipes/new"
          className="inline-block bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          + Add New Recipe
        </Link>
      </div>
    </div>
  );
}
