<template>
<div id="app">
  
</div>
</template>

<script>
export default {
  name: 'App',
  
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
