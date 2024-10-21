// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
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