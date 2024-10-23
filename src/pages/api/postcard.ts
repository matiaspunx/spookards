import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { type QuoteData } from "@/types/Types";

export const POST: APIRoute = async ({ request }) => {
  const quote = await request.json();
  const quoteData: QuoteData = quote;

  if (!quoteData.public_id) {
    throw new Error("No se envio una imagen");
  }

  // Check if the public_id already exists
  const { data: existingData, error: checkError } = await supabase
    .from("spookards")
    .select("*")
    .eq("public_id", quoteData.public_id);

  if (checkError) {
    console.error(
      "Error checking for existing public_id in Supabase:",
      checkError,
    );
    return new Response("Error checking for existing public_id", {
      status: 500,
    });
  }

  if (existingData && existingData.length > 0) {
    // Public ID already exists, do not insert
    return new Response("El public_id ya existe, no se guardará de nuevo", {
      status: 409,
    });
  }

  const { data, error } = await supabase
    .from("spookards")
    .insert([{ ...quoteData }])
    .select();

  if (error) {
    console.error("Error al guardar la cita en Supabase:", error);
    //throw new Error("Error al guardar la cita en Supabase");
  }

  const dataJson = JSON.stringify(data);

  return new Response(dataJson, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
