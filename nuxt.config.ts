export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    'nuxt-mdi'
  ],
  plugins: ['~/plugins/vuetify.js'],
  compatibilityDate: '2024-07-31',
  devtools: { enabled: true },
  css: ['@/assets/style.css', 'vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  i18n: {
    strategy: 'no_prefix',
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json', "dir": "ltr" },
      { code: 'ar', iso: 'ar-AR', name: 'Arabic', file: 'ar.json', "dir": "rtl" }
    ],
    vueI18n: './nuxt-i18n.js'
  }
})