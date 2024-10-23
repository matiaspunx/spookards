import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

console.log(supabaseUrl, supabaseKey);

if (!supabaseUrl) {
  throw new Error("supabaseUrl is required");
}

if (!supabaseKey) {
  throw new Error("supabaseKey is required");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
