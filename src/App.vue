<template>
  <div>
    <h1>{{count + 3}}</h1>
    <button v-on:click="addNumber(1)">증가</button>
    <button v-on:click="addNumber(-1)">감소</button>
    <button v-on:mouseover="addNumber(10)">마우스오버 10 증가</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      addNumber(value){
        this.count = this.count + value;
      },
    },
  };
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
