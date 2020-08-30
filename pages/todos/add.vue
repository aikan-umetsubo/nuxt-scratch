<template>
<div id="todos-add">
  <ToDoInput></ToDoInput>
</div>
</template>

<script>
import ToDoInput from '@/components/ToDoInput.vue'

export default {
  name: 'ToDosAdd',
  components: {
    ToDoInput
  }
}
</script>

<style scoped>
#todos-add {
  padding: 1em;
  background-color:aquamarine;
}

#todos-add p {
  text-align:center;
  font:bold;
}
</style>