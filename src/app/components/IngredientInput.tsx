"use client";

import { useState } from "react";

type IngredientInputProps = {
  onChange: (ingredients: string[]) => void;
  initialIngredients?: string[];
};

export default function IngredientInput({
  onChange,
  initialIngredients = [""],
}: IngredientInputProps) {
  const [ingredients, setIngredients] = useState<string[]>(initialIngredients);

  const handleChange = (value: string, index: number) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
    onChange(updated);
  };

  const addIngredient = () => {
    const updated = [...ingredients, ""];
    setIngredients(updated);
    onChange(updated);
  };

  const removeIngredient = (index: number) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
        Ingredients
      </label>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleChange(e.target.value, index)}
            placeholder={`Ingredient ${index + 1}`}
            className="w-full px-3 py-2 border rounded-xl shadow-sm dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          />
          {ingredients.length > 1 && (
            <button
              onClick={() => removeIngredient(index)}
              type="button"
              className="text-red-500 hover:text-red-700"
              title="Remove"
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addIngredient}
        className="text-sm text-blue-600 hover:underline"
      >
        + Add Ingredient
      </button>
    </div>
  );
}
