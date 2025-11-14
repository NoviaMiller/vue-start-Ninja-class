<template>
  <h1>time-reaction</h1>
  <button @click = "startPlay" :disabled="isPlay">PLAY</button>
  <Block v-if = "isPlay" :delay = "delay" @end = "endGame"/>
  <Results v-if = "showScore" :score = 'score'/>
</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: 'App',
  components: {Block, Results},
  data(){
    return {
      isPlay: false,
      delay: null,
      score: null,
      showScore: false
    }
  },
  methods:{
    startPlay(){
      this.isPlay = !this.isPlay;
      this.delay = 2000 + Math.random() * 5000;
      this.showScore = false;
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.showScore = true
      this.isPlay = false
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
