<template>
  <div id="todo-list">
    <table id="todos-table" v-if="todos.length > 0">
      <thead>
        <tr>
          <th>件名</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td> {{ todo.title }} </td>
          <td> {{ todo.body }} </td>
        </tr>
      </tbody>
    </table>
    <Message v-else text="ToDoが一件もありません"></Message>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  name: 'ToDoList',

  components: {
    Message
  },

  data: () => {
    return {
      todos: []
    }
  },

  mounted: async function() {
    const response = await this.$axios.$get('http://localhost:3000/v1/todos')
    console.log(response);
    this.todos = response.data
  }
}
</script>

<style scoped>

</style>
