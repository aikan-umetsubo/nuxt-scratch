<template>
<div id="todos">
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
#todos {
  padding: 1em;
  background-color:aquamarine;
}

#todos p {
  text-align:center;
  font:bold;
}
</style>