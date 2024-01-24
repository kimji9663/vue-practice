<template>
  <div>
    <h1>Hellow {{ animal }}</h1>
    <h2>{{ animal }} like {{ food }}.</h2>
    <input type="text" v-model="food" />
    <img v-bind:src="imageSource" alt="vue" />
    <a :href="googleUrl">Google</a>
    <hr />
    <h2 v-bind:class="{red: food==='banana', 'not-good': food==='rice'}">{{ animal }} like {{ food }}!</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      animal: "Monkey",
      food: "banana",
      imageSource: "https://www.vuemastery.com/_nuxt/image/d26370.svg",
      googleUrl: "https://www.google.com/",
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
.red {
  color: #ff0000;
}
.not-good {
  text-decoration: line-through;
}
</style>
