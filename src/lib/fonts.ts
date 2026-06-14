import localFont from "next/font/local";

const playfair = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/playfair-display/files/playfair-display-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/playfair-display/files/playfair-display-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  preload: true,
});

const inter = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: "Arial",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
  adjustFontFallback: "Arial",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export { inter, jetbrainsMono, playfair, spaceGrotesk };
