<template>
  <div id="todo-list">
    <table id="todos-table" v-if="todos.length > 0">
      <thead>
        <tr>
          <th>件名</th>
          <th>内容</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id" :id="todo.id">
          <td> {{ todo.title }} </td>
          <td> {{ todo.body }} </td>
          <td><button id="delete" @click.left="deleteTodo">x</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><nuxt-link to="/todos/add">+</nuxt-link></td>     
          <td></td>
          <td></td>
        </tr>
      </tfoot>
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

  methods: {
    deleteTodo: async function(e) {
      const todoId = e.target.parentNode.parentNode.id;
      console.log(todoId);
      const response = await this.$axios.$delete(
        `http://localhost:3000/v1/todos/${todoId}`
      );
      console.log(response);
      this.getTodos();
    },
    getTodos: async function() {
      const response = await this.$axios.$get('http://localhost:3000/v1/todos')
      console.log(response);
      this.todos = response.data
    }
  },

  mounted: function() {
    this.getTodos();
  }
}
</script>

<style scoped>

</style>
