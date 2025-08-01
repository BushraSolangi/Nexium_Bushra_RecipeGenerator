export async function generateRecipe(ingredients: string[]) {
  const res = await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients }),
  });

  if (!res.ok) throw new Error("Failed to fetch from n8n");

  const data = await res.json();
  return data.recipe;
}
