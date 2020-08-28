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
  }
}
