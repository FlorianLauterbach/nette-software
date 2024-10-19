// https://nuxt.com/docs/api/configuration/nuxt-config
import { promises as fs } from 'fs'
import { join } from 'path'

export default defineNuxtConfig({
  target: 'static',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  router: {
    base: '/nette-software/'
  },

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

  sitemap: {
    siteName: 'https://nette-software.de',
    gzip: true,
    routes: async () => {
      const files = await fs.readdir(join(__dirname, 'content/blog'))
      const blogRoutes = files.map(file => `/blog/${file.replace('.md', '')}`)
      const staticRoutes = [
        '/',
        '/blog',
      ]

      return [...staticRoutes, ...blogRoutes]
    }
  },
  
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/sitemap']
})