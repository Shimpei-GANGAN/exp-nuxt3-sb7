// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 *
 * @see GitHub: {@link https://github.com/veritem/eslint-plugin-vitest/ | eslint-plugin-vitest}
 * - Rule1: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md | consistent-test-it}
 * - Rule2: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md | require-top-level-describe}
 *
 * @see GitHub: {@link https://typescript-eslint.io/rules/ | @typescript-eslint/eslint-plugin}
 * - Rule1: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type} - Return Typesの明示を必須にする
 * - Rule2: {@link https://typescript-eslint.io/rules/consistent-type-imports/ | consistent-type-imports} - 型のimportを必須にする
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  plugins: ["vitest"],
  extends: ["@nuxt/eslint-config", "plugin:vitest/recommended", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "vitest/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
    "vitest/require-top-level-describe": ["error"],
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
          },
        ],
      },
    },
  ],
};
