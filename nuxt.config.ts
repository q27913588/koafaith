// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'koafaith',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'koafaith軟體開發的專家' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  css: ['~/assets/css/main.scss'],
  compatibilityDate: '2024-04-03',
  tailwindcss: {
    cssPath: '~/assets/css/main.scss', // 修正為字符串
    configPath: 'tailwind.config.js', // 確保這裡的文件名正確
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})