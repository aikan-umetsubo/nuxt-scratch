<template>
<div id="app">
  <Header></Header>

  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//import axios from '@nuxtjs/axios'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => {
    return {
      cat_fact: 'loading'
    }
  },
  mounted: async function() {
    const response = await this.$axios.$get('https://cat-fact.herokuapp.com/facts/random')
    console.log(response);
    this.cat_fact = response.text
  }
}
</script>
