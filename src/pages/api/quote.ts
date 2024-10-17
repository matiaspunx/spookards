import type { APIRoute } from "astro";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const movie = data.get("movie");
  const quote = `crea una cita de la pelicula ${movie} en español. El resultado deberia ser en formato json con los valores title, movie y author de la cita. Revisa bien que el json esté bien escrito y que no haya errores en el texto.`;

  if (!movie) {
    return new Response("No se envio ninguna pelicula", { status: 400 });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(quote);
  const response = await result.response;
  let text = response.text();
  text = text.replace(/```json/g, "");
  text = text.replace(/```/g, "");
  text = text.replace(/\n/g, "");
  //console.log(text); // debug si la respuesta de la api es mala o mal formateada
  return new Response(text, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
