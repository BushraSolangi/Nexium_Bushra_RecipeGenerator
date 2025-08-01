import Link from 'next/link';

export function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Link href={`/recipes/${recipe._id || recipe.id}`}>
      <div className="bg-white dark:bg-zinc-900 shadow-card p-4 rounded-2xl hover:shadow-lg transition">
        <img
          src={recipe.image || '/images/default.jpg'}
          alt={recipe.name}
          className="w-full h-40 object-cover rounded-xl mb-3"
        />
        <h2 className="text-lg font-semibold">{recipe.name}</h2>
        <p className="text-sm text-muted">
          {recipe.cuisine} • {recipe.time} mins
        </p>
      </div>
    </Link>
  );
}
