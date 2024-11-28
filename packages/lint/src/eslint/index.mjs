// @ts-check

// Adapated version of this setup: https://github.com/nuxt/eslint/discussions/420#discussioncomment-9564390

// @ts-ignore
process.env.TSESTREE_SUPPRESS_WARNING = "true";

import { FlatCompat } from "@eslint/eslintrc"; // https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import path from "node:path";
import { fileURLToPath } from "node:url"; // https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
// @ts-ignore
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural"; // https://eslint-plugin-perfectionist.azat.io/configs/recommended-natural

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * Custom ESLint rules
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
const customRules = {
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "perfectionist/sort-vue-attributes": [
      "error",
      {
        // Based on: https://eslint.vuejs.org/rules/attributes-order.html
        // Note: I think this matches on attribute strings for everything that comes BEFORE the equal sign (=), if there is one. This makes some things impossible to match.
        // See issue: https://github.com/azat-io/eslint-plugin-perfectionist/issues/112
        // See guide on extended glob matching: https://www.linuxjournal.com/content/bash-extended-globbing
        "custom-groups": {
          /* eslint-disable perfectionist/sort-objects */
          DEFINITION: "@(is|v-is)",
          LIST_RENDERING: "v-for",
          CONDITIONALS: "v-@(if|else-if|else|show|cloak)",
          RENDER_MODIFIERS: "v-@(pre|once)",
          GLOBAL: "@(id|:id)",
          UNIQUE: "@(ref|:ref|key|:key)",
          SLOT: "@(v-slot|slot|#*)",
          TWO_WAY_BINDING: "@(v-model|v-model:*)",
          OTHER_DIRECTIVES: "@(v-!(on|bind|html|text))", // Matches all "v-" directives except v-on, v-bind, v-html, v-text (these are defined separately below, which are lower in the order of operations)
          ATTR_DYNAMIC: "@(v-bind:*|:*)", // For dynamic bindings, like v-bind:prop or :prop.
          // ATTR_STATIC: "", // For normal props, like prop="example". No glob patterns possible since we are matching on everything BEFORE the equal sign (=), if there is one. Therefore we can't differentiate boolean props from static props.
          // ATTR_SHORTHAND_BOOL: "", // For boolean props, like custom-prop. No glob patterns possible since we are matching on everything BEFORE the equal sign (=), if there is one. Therefore we can't differentiate boolean props from static props.
          EVENTS: "@(v-on|@*)",
          CONTENT: "v-@(html|text)",
          /* eslint-enable perfectionist/sort-objects */
        },
        groups: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          ["ATTR_DYNAMIC", "unknown"], // 'unknown' is a workaround because perfectionist/sort-vue-attributes cannot match on ATTR_STATIC or ATTR_SHORTHAND_BOOL
          "EVENTS",
          "CONTENT",
        ],
        type: "natural",
      },
    ],
  },
};

/**
 * dirs and files to ignore
 *
 * Note: For this to work it has to be kept seperate from customRules. It cannot be combined with customRules above.
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const customIgnores = {
  ignores: [
    "**/node_modules",
    "**/public",
    "**/dist",
    "**/.nuxt",
    "**/primevue-presets",
  ],
};

/**
 * For usage within a Nuxt context
 *
 * The helper `withNuxt()` from auto-generated `.nuxt/eslint.config.mjs` can be used to append
 * these rules after the config tailored to the Nuxt-app where the eslint config is being used.
 * @see https://eslint.nuxt.com/packages/module
 *
 * It will also add all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 */
export const eslintConfigNuxt = [
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false, // Suppress the warning
      },
    },
  },
  perfectionistNatural,
  eslintPluginPrettierRecommended,
  ...compat.extends("eslint-config-turbo"), // mimic ESLintRC-style extends
  customRules,
  customIgnores,
];

export const perfectionistNat = perfectionistNatural;

/**
 * For standalone usage in packages without Nuxt context.
 *
 * The `eslint.config.js` file uses ECMAScript import/export, so if `"type": "module"` is not set in `package.json` then use `eslint.config.mjs` so node.js knows to interpret the file as ECMAScript.
 * @see https://stackoverflow.com/a/57492606/1526396
 *
 * `createConfigForNuxt()` will create all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 *
 * The activated `tooling` feature enables rules with unicorn, regexp and jsdoc.
 * @see https://eslint.nuxt.com/packages/config#module-authors
 *
 * When there are conflicting rules the last matching config always takes precedence.
 * Therefore order of appending rules is important. Anything in .preappend() -> The default Nuxt Eslint rules -> Anything in .append(). With the last .append() taking precedence.
 *
 */
export const eslintConfigStandalone = createConfigForNuxt({
  features: { tooling: true },
}).append({
  languageOptions: {
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false, // Suppress the warning
    },
  },
  perfectionistNatural,
  eslintPluginPrettierRecommended,
  ...compat.extends("eslint-config-turbo"), // mimic ESLintRC-style extends
  customRules,
  customIgnores,
});
