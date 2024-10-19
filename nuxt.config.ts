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

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/sitemap', '@nuxt/image']
})