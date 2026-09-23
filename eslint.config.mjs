import antfu from "@antfu/eslint-config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default antfu({
  type: "app",
  formatters: true,
  typescript: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
  ],
  ignores: [
    "**/*.yaml",
  ],
}, {
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  rules: {
    "perfectionist/sort-imports": ["error", {
      tsconfig: {
        rootDir: ".",
      },
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    "unicorn/prefer-type-error": ["off"],
    "ts/consistent-type-definitions": ["off"],
  },
});
