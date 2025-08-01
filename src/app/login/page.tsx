// File: app/login/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/dashboard");
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
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
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-login.jpeg')" }}
    >
      <div className="p-8 bg-white bg-opacity-90 rounded-xl shadow-xl max-w-md w-full mx-4"
      style={{background:"pink", height:"200px"}}
      >
        <h1 className="text-2xl font-semibold text-center mb-6">SuperChef</h1>
        <h2 className="text-2xl font-semibold text-center mb-6">Login via Magic Link</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border px-4 py-2 rounded w-50 mb-4 focus:outline-none focus:ring focus:border-blue-300"
           style={{width:"600px", height:"30px", position:"relative", left:"350px"}}
        />
        <button
          onClick={sendMagicLink}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-50 transition"
          style={{width:"200px", height:"30px",position:"relative", left:"350px"}}
        >
          Send Magic Link
        </button>
        {message && <p className="mt-4 text-sm text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
