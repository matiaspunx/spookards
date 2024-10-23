/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly GEMINI_API_KEY: string;

  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_API_KEYCLOUDINARY_API_KEY: string;
  readonly CLOUDINARY_API_SECRET: string;

  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
