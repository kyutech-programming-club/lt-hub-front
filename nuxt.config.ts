export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY as string,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN as string,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID as string,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET as string,
    FIREBASE_MESSSAGE_SENDER_ID: process.env
      .FIREBASE_MESSSAGE_SENDER_ID as string,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID as string,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_I as string,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ress/dist/ress.min.css"],

  styleResources: {
    scss: ["~assets/scss/*.scss"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/firebase.ts" },
    { src: "~/plugins/pinia.js" },
    { src: "~/plugins/api/authApi.inject.ts" },
    { src: "~/plugins/api/suggestApi.inject.ts" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxtjs/composition-api/module",
    "@nuxt/typescript-build",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Noto+Sans+JP": [400, 500, 700, 800],
          "Noto+Serif+JP": [400, 500, 700, 800],
          "Open+Sans": [400, 500, 700, 800],
          Montserrat: [400, 500, 700, 800],
        },
        display: "block",
        download: true,
        inject: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || "http://localhost:8080/api/v1",
  },
};
