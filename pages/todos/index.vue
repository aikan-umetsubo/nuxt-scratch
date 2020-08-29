<template>
<div id="ToDos">
  <ToDoList></ToDoList>
</div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'ToDos',
  components: {
    ToDoList
  }
}
</script>

<style scoped>
#app {
  padding: 1em;
  background-color:aquamarine;
}

#app p {
  text-align:center;
  font:bold;
}
</style>