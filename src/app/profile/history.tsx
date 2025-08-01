'use client';

import { useEffect, useState } from 'react';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch('/api/profile/history');
      const data = await res.json();
      setHistory(data.history || []);
      setLoading(false);
    };

    fetchHistory();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Recipe History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : history.length === 0 ? (
        <p>No recipes generated yet.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((item, idx) => (
            <li key={idx} className="p-4 border rounded-xl bg-white dark:bg-zinc-900 shadow-sm">
              <h3 className="font-semibold">{item.recipeName}</h3>
              <p className="text-gray-500 text-sm">{new Date(item.generatedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
