export async function getAllRecipes(filter = 'all') {
  const res = await fetch(`/api/recipes?filter=${filter}`);
  const data = await res.json();
  return data.recipes || [];
}
