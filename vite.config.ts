import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/kapwa-cn/",
  plugins: [tailwindcss()],
});
