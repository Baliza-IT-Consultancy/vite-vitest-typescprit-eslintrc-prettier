/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@MyTypes": path.resolve(__dirname, "./src/types/"),
      "@assets": path.resolve(__dirname, "./src/types/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
