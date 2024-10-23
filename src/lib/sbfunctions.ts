import { supabase } from "@/lib/supabase";

export const getMovies = async () => {
  const { data, error } = await supabase.rpc("get_random_movies", {
    num_limit: 6,
  });
  if (error) {
    console.log("Error retrieving movies from Supabase:", error);
    return [];
  }
  return data;
};

export const getQuotes = async () => {
  const { data, error } = await supabase.from("spookards").select();
  if (error) {
    console.log("Error retrieving quotes from Supabase:", error);
    return [];
  }
  return data;
};
