'use client';

import { useEffect, useState } from 'react';

export default function PlannerPage() {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await fetch('/api/planner');
      const data = await res.json();
      setPlans(data.plans);
      setLoading(false);
    };

    fetchPlans();
  }, []);

  if (loading) return <p className="p-4">Loading your meal plan...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Weekly Meal Planner</h1>
      {plans.length === 0 ? (
        <p>No meals planned yet. Start planning below!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-2xl p-4 shadow">
              <h2 className="font-semibold text-lg">{plan.day}</h2>
              <p className="text-gray-600">{plan.recipeName}</p>
              <p className="text-sm text-gray-400">{plan.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
