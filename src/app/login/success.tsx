// app/login/success.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function SuccessPage() {
  const router = useRouter();
  //const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/recipes"); // Redirect to recipes after login
      } else {
        router.push("/login");
      }
    };

    checkSession();
  }, [router, supabase]);

  return (
    <div className="flex h-screen items-center justify-center bg-muted text-center">
      <div className="p-6 bg-white rounded-xl shadow-xl dark:bg-zinc-900 dark:text-white">
        <h1 className="text-xl font-bold mb-2">Logging you in...</h1>
        <p>Please wait while we verify your magic link.</p>
      </div>
    </div>
  );
}
