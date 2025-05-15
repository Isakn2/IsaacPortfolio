import { ESLint } from "eslint";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      "@typescript-eslint": ESLint.fromFlatConfig,
      "react": ESLint.fromFlatConfig,
      "react-hooks": ESLint.fromFlatConfig,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
