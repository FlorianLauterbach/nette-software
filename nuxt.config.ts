// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
        '~/assets/scss/custom.scss',
  ],

  build: {
    transpile: ['bootstrap']
  },

  modules: ['@nuxt/icon', '@nuxt/fonts']
})