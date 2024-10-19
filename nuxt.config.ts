// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from 'path'
import { promises as fs } from 'fs'

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

  image: {
    quality: 80,
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

  sitemap: {
    hostname: 'nette-software.de',
    gzip: true,
    exclude: [
      '/impressum',
      '/datenschutz'
    ],
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

  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/content', '@nuxtjs/sitemap', '@nuxt/image']
})