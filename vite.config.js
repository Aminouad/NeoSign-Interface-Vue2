import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),eslintPlugin({ cache: false })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }}
});
