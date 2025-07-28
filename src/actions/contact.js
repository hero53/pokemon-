// app/actions/contact.js ou lib/actions/contact.js
"use server";

export async function sendContactMessage({ name, email, message }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Erreur inconnue");
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
