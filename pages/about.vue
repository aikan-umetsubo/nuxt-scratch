<template>
<div id="about">
  <p>これはNuxt.jsの勉強用にスクラッチで作ったToDoアプリです。いわゆるJAMStackでのWebアプリ開発にトライしています。</p>
  <p>主な利用技術は以下の通りです。</p>
  <dl>
    <dt>フロントエンド</dt>
    <dd>Vue.js(Nuxt.jsでaxiosとproxyを利用)</dd>

    <dt>バックエンド</dt>
    <dd>Ruby on Rails(APIモード)</dd>
  </dl>
</div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
#about {
  padding: 1em;
}
</style>