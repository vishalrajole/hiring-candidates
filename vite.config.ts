import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig(({ mode }) => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        overlay: {
          initialIsOpen: false,
        },
      }),
    ],
  };
});
