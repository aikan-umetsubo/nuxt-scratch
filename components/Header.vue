<template>
  <div id="header">
    <h1>スクラッチで作ったToDoアプリ</h1>
    <ul id="menu-list">
      <li><nuxt-link to="/">トップ</nuxt-link></li>
      <li><nuxt-link to="/about">このページについて</nuxt-link></li>
      <li><nuxt-link to="/todos">ToDoリスト</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  position: sticky;
  top: 0;
  padding: 1em;
  background-color: antiquewhite;
}

#menu-list {
  list-style-type: none;
}

#menu-list li {
  display: inline-block;
}
</style>
