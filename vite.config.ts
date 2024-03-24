// Librarys
import svgr from "vite-plugin-svgr";
import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Utils
import resolvePaths from "./resolvePaths";

// Config
import * as tsconfigbase from "./tsconfig.base.json";

export default defineConfig({
  // Configurar servidor en Vite
  server: {
    cors: true,
  },

  // Definir los plugins a usar en Vite
  plugins: [svgr(), reactPlugin()],

  // Rutas absolutas en Vite
  resolve: {
    alias: resolvePaths("src", tsconfigbase.compilerOptions.paths),
  },
  build: {
    target: "ES2022",
  },
});
