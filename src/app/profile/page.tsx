'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  if (!user) return <p className="p-4">Loading your profile...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="bg-white dark:bg-zinc-900 shadow p-4 rounded-2xl">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
