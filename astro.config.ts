// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import relativeLinks from "astro-relative-links";

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from "@astrojs/sitemap";

// https://jsr.io/@jonasgeiler/astro-show-tailwindcss-breakpoint
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    relativeLinks(),
    showTailwindcssBreakpoint(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    assets: "_assets",
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "dummy",
        cssVariable: "--font-dummy",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/poppins-regular.ttf"],
          },
        ],
      },
    ],
  },

  site: "https://mysite.com",
});
