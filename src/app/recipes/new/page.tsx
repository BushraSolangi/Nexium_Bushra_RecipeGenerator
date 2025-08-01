'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewRecipePage() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        ingredients: ingredients.split(',').map((i) => i.trim()),
        steps: instructions.split('\n').map((i) => i.trim()),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data?.recipe?._id) {
      router.push(`/recipes/${data.recipe._id}`);
    } else {
      alert('Error creating recipe');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe name"
          className="w-full border px-4 py-2 rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full border px-4 py-2 rounded-xl h-24"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions (one step per line)"
          className="w-full border px-4 py-2 rounded-xl h-32"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-xl"
        >
          {loading ? 'Saving...' : 'Create Recipe'}
        </button>
      </form>
    </div>
  );
}
