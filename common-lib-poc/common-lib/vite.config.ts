import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: "lib",
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),

    libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
    },
  },
  build: {
    // do not copy the contents of the public folder to the dist folder
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/main.ts"),
      name: "common-lib",
      // the proper extensions will be added
      fileName: "main",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
