import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// ビルド結果を dist/index.html の1ファイルにまとめる（ダブルクリックでも開ける）
export default defineConfig({
  plugins: [react(), viteSingleFile()],
});
