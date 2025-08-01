'use client';

import { useEffect, useState } from 'react';

export default function UploadsPage() {
  const [uploads, setUploads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUploads = async () => {
      const res = await fetch('/api/profile/uploads');
      const data = await res.json();
      setUploads(data.uploads || []);
      setLoading(false);
    };

    fetchUploads();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Uploaded Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : uploads.length === 0 ? (
        <p>You haven’t uploaded any custom recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {uploads.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
              <img src={item.image} alt={item.name} className="rounded-lg mb-2 h-32 object-cover w-full" />
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
