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
  
  hooks: {
    'build:before': () => {
      const { execSync } = require('child_process');
      execSync('npm run generate:blogList');
    }
  }, 
  
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/content']
})