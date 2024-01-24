<template>
  <div>
    <h2>당신의 나이는 {{ age }}입니다.</h2>
    <h3 v-if="age > 18">당신은 어른입니다.</h3>
    <h3 v-else-if="age > 13 && age <= 18">당신은 청소년입니다.</h3>
    <h3 v-else>당신은 어린이입니다.</h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      age: 12,
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
