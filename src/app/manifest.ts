import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { defaultTitle } from "@/lib/seo";

export const dynamic = "force-static";

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
    icons: [{ src: SITE.icon, sizes: "512x512", type: "image/png", purpose: "any" }],
  };
}
