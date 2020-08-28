<template>
  <div id="to-do-list">
    
  </div>
</template>

<script>
export default {
  name: 'ToDoList',

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

<style scoped>

</style>
