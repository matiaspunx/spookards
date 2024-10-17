import { supabase } from "@/lib/supabase";
import { type Movie } from "@/types/Types";

export const getMovies = async () => {
  const { data, error } = await supabase.rpc("get_random_movies", {
    num_limit: 5,
  });
  if (error) {
    console.log("Error retrieving movies from Supabase:", error);
    return [];
  }
  return data;
};

export const saveMovies = async (movies: Movie[]) => {
  console.log(movies);
  const { data, error } = await supabase.from("movies").insert(movies);
  if (error) {
    console.log("Error saving movies to Supabase:", error);
    return;
  }
  console.log("Movies saved to Supabase:", data);
};
