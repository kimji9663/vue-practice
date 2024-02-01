<template>
  <div>
    <h2 v-for="(animal, index) in animals" :key="index">{{ animal }}, index: {{ index }}</h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.gender==='female' ? 'Her' : 'His'}} name is {{ user.name }},
        {{ user.gender==='female' ? 'Her' : 'His'}} job is {{ user.job }}.
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        animals: ['monkey', 'rat', 'cat', 'lion'],
        users: [
          { name: 'ciala', job: 'developer', gender: 'female'},
          { name: 'john', job: 'designer', gender: 'male'},
          { name: 'colin', job: 'product manager', gender: 'male'},
        ]
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
