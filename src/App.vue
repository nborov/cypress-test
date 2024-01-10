<template>
  <div>
    <div>
      <button data-cy-btn="number" @click="number++">Add</button>
      <p data-cy-number>{{ number }}</p>
    </div>
    <br><br>
    <button @click="showModal">show modal</button>
    <br><br><br>
    <button @click="showH1">show H1</button>
    <h1 v-if="isShow">HELLO</h1>
    <modal @close="isShowModal = false" v-if="isShowModal"/>
  </div>
</template>

<script>
import modal from './components/modal.vue'
export default {
  name: 'App',
  components: {
    modal
  },
  data() {
    return {
      number: 0,
      isShowModal: false,
      isShow: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true
    },
    showH1() {
      this.isShow = !this.isShow
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
