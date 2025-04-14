import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dts from "vite-plugin-dts";
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), dts({
    rollupTypes: true,
    tsconfigPath: "./tsconfig.app.json",
    copyDtsFiles: true,
  })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FlourModal",
      fileName: (format) => `flour-modal.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
