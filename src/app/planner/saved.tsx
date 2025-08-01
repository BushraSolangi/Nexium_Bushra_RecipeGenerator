'use client';

import { useEffect, useState } from 'react';

export default function SavedPlansPage() {
  const [savedPlans, setSavedPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaved = async () => {
      const res = await fetch('/api/planner/saved');
      const data = await res.json();
      setSavedPlans(data.saved || []);
      setLoading(false);
    };

    fetchSaved();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Saved Meal Plans</h1>
      {loading ? (
        <p>Loading saved plans...</p>
      ) : savedPlans.length === 0 ? (
        <p>No saved plans yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedPlans.map((plan, idx) => (
            <li key={idx} className="p-4 border rounded-xl shadow-sm">
              <h3 className="font-semibold">{plan.title}</h3>
              <p className="text-sm text-gray-500">{plan.description}</p>
              <p className="text-xs text-gray-400">Saved on {new Date(plan.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
