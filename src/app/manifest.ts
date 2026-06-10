import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { defaultTitle } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultTitle,
    short_name: SITE.name,
    description: SITE.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0f1418",
    theme_color: "#0f1418",
    lang: "en",
    icons: [
      { src: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon-1024.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
    ],
  };
}
