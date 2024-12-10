import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "MEGH",
        short_name: "MEGH",
        description: "Your Personal cloud teller",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/AppIcon-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/AppIcon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/AppIcon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "SS-M.png",
            sizes: "750x1216",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "SS-D.png",
            sizes: "2048-1216",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
      workbox: {
        // Customize caching strategies if necessary
        globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
      },
    }),
  ],
});
