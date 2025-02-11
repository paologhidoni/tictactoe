/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tictactoe/",
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/tests/setup.ts",
  },
});
