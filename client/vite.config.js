import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // Pour setup Testing Library
    include: ["src/tests/**/*.test.jsx"], // Recherche des tests dans le dossier tests
  },
});
