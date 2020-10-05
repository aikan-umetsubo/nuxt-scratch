export default {
  server: {
    port: 3001,
    host: 'localhost'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'https://lit-forest-75352.herokuapp.com/v1/',
      pathRewrite: {'^/api/': ''}
    }
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
