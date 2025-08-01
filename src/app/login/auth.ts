// app/login/auth.ts

"use server";

import { supabase } from "../lib/supabaseClient";
import { redirect } from "next/navigation";

export async function sendMagicLink(formData: FormData) {
  const email = formData.get("email") as string;

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login/success`,
    },
  });

  if (error) {
    console.error("Error sending magic link:", error.message);
    return;
  }

  // Optional: Redirect or show confirmation message
  redirect("/login/success");
}
