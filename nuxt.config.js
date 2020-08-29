export default {
  server: {
    port: 3001,
    host: 'localhost'
  },

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/':  'http://localhost:3000'
  },

  head: {
    title: 'スクラッチで作ったToDoアプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.jsとRuby on Railsの勉強のために作ったWebアプリ'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }

}
