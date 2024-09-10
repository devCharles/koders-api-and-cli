/// <reference types="vitest" />

import { defineConfig } from "vite";
import { config } from "dotenv";

export default defineConfig({
  env: { ...config({ path: ".env.test" }).parsed },
  test: { setupFiles: ["./tests/setup.js"] },
});
