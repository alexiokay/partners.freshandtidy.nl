import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
// import { IntlifyModuleOptions } from "@intlify/nuxt3";

declare module "@nuxt/schema" {
  // interface NuxtConfig {
  //   intlify?: IntlifyModuleOptions;
  // }
}
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/i18n",

    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate", "useStore"],
      },
    ],
    "nuxt-simple-sitemap",
    "@pinia-plugin-persistedstate/nuxt",
    // "@intlify/nuxt3",
    "@nuxt/image-edge",
    "unplugin-icons/nuxt",
  ],

  build: {
    transpile: ["@headlessui/vue", "@fawmi/vue-google-maps"],
  },

  devServer: {
    port: 3001,
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },

  routeRules: {
    // Static page generated on-demand, revalidates in background (ISG)

    "/**": { ssr: true },

    // Static page generated on-demand once (SSG - or at least mighty close) { static: true },

    // Render these routes on the client (SPA) { ssr: false },
  },
  // intlify: {
  //   localeDir: "locales",
  //   vueI18n: {
  //     locale: "en",
  //     fallbackLocale: "en",
  //     availableLocales: ["en", "pl"],
  //   },
  // },

  image: {
    domains: [process.env.FRONTEND_URL as string, "localhost:3000"],
    format: ["webp"],
    provider: "ipx",
    ipx: {
      dir: "public",
    },
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
    twicpics: {
      baseURL: "https://freshandtidy.twic.pics/partners/",
      // Feel free to use our demo domain to try the following examples.
      // baseUrl: 'https://demo.twic.pics/'
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          hid: `description`,
          name: "description",
          content: " ",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
      ],
    },
  },

  css: ["@/assets/css/styles.css"],

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },

  runtimeConfig: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_SHORT_NAME: process.env.TWILIO_SHORT_NAME,
    TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,

    public: {
      test: "test",
      cwd: process.cwd(),
      BASE_URL: process.env.BASE_URL,
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
      HOST: process.env.HOST,
      FETCH_HOST: process.env.FETCH_HOST,
      gtm_id: process.env.GOOGLE_TAG_MANAGER_ID,
      gtm_enabled: process.env.GOOGLE_TAG_MANAGER_ENABLED,
      gtm_debug: process.env.GOOGLE_TAG_MANAGER_DEBUG,
    },
  },
});
