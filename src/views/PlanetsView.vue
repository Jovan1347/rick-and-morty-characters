<template>
  <header class="planets-page-header">
    <AppHeader />
  </header>
  <div class="planets-page-wrapper">
    <h1>{{ text }}</h1>
  </div>
  <div class="avatar">
    <img src="../assets/images/avatar.png" alt="avatar" />
  </div>
</template>
<script>
import AppHeader from '../components/AppHeader.vue'

export default {
  components: { AppHeader },

  data() {
    return {
      text: 'Coming Soon!'
    }
  }
}
</script>
<style lang="scss">
.planets-page-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80vh;
}
.avatar {
  position: absolute;
  width: 200px;
  top: 30%;
  left: 40%;

  img {
    width: 100%;
  }
}
h1 {
  color: #0bbb1a;
  font-size: 6rem;
  z-index: 1;
}
</style>
