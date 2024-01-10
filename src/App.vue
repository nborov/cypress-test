<template>
  <div>
    <button @click="show">show</button>
    <h1 v-if="isShow">HELLO</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      setTimeout(() => this.isShow = true, 1500)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
