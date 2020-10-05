<template>
  <div id="todo-input">
    <Message text="ToDoを追加"></Message>
    <ul>
      <li>
        <label>
          件名
          <input type="text" id="title" v-model="title">
        </label>
      </li>
      <li>
        <label>
          内容
          <input type="text" id="body" v-model="body">
        </label>
      </li>
    </ul>
    <button id="add" @click.left="addTodo">追加</button>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  name: 'ToDoInput',

  components: {
    Message
  },

  data: () => {
    return {
      title: '',
      body: ''
    }
  },

  methods: {
    addTodo: async function() {
      const response = await this.$axios.$post(
        '/api/todos',
        { title: this.title, body: this.body }
      );
      console.log(response);
    }
  }
}
</script>

<style scoped>

</style>
