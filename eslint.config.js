import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.node,     // ✅ Enable Node.js globals like `process`
        ...globals.browser,  // ✅ (Optional) Enable browser globals
      },
    },
    extends: ["js/recommended"],
  },
]);
