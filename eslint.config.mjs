import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    extends: [
      "next/core-web-vitals",
      "next/typescript",
    ],
  },

  // Override default ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
