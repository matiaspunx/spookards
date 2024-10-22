/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: "https://spookards.vercel.app/", // Production URL.
  description: "Spookards las mejores postcards de terror!",
  type: "website",
  image: {
    url: "https://res.cloudinary.com/antirockstars/image/upload/v1729581807/og_ri2nmd.webp",
    alt: "Spookards",
    width: 480,
    height: 480,
  },
  siteName: "Spookards",
  twitter: {
    card: "summary_large_image",
  },
};
