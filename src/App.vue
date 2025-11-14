<template>
  <!--img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/-->
  <h1>{{ title }}</h1>
  <input type="text" ref = "boo">
  <button @click = "handleClick">click me</button>

  <teleport to="#modals" v-if = "showModal">
    <Modal :theme = "theme" @close = "toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">purchase</a>
      </template>
      <h1>Sign up!</h1>
      <p>and purchase it</p>
    </Modal>
  </teleport>

  <br>
  <button @click.alt="toggleModal">show the modal(plus alt)</button>
  <!--then I want to close the modal by click on the backdrop which in the Modal.vue, how can I click sth in Modal.vue to trigger function which in App.vue?
  Inside the component Modal, we don't have access to App, how?
  custom events, which trigger by ourselves and can be listened by our parent-->
  <button @click = "toggleModalTwo">show another modal</button>
  <teleport to = ".modals" v-if = "showModalTwo">
    <Modal :theme = "theme" @close = "toggleModalTwo">
      <h1>No More Sign up!</h1>
      <p>and don't purchase it</p>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  data() {
    return {
      title: "My First Vue App :>",
      theme: "sale",
      showModal: false,
      showModalTwo: false
    }
  },
  components: { Modal },
  methods: {
    handleClick(){
      console.log(this.$refs.boo);
      this.$refs.boo.classList.add("active");
      this.$refs.boo.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style> 
#app, .modals, #modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
