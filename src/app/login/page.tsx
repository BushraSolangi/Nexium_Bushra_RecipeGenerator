// File: app/login/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Check if user already logged in (from session)
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/dashboard"); // 🔁 Redirect to dashboard
      }
    };

    checkSession();

    // Watch for sign-in event from magic link
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        router.replace("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const sendMagicLink = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    setMessage(error ? error.message : "✅ Check your email for the magic link!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login via Magic Link</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="border px-3 py-2 rounded w-full mb-3"
      />
      <button
        onClick={sendMagicLink}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Send Magic Link
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
}
