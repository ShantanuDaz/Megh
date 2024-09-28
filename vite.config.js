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
        description: "Your Personal cloud",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/AppIcon.png", // Add these icons to the public directory
            size: "192x192",
            type: "image/png",
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
