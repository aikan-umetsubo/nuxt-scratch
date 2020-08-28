<template>
<div id="app">
  <Header></Header>

  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  
  data: () => {
    return {
      todos: []
    }
  },

  mounted: async function() {
    const response = await this.$axios.$get('http://localhost:3000/v1/todos')
    console.log(response);
    this.todos = response.body
  }
}
</script>
