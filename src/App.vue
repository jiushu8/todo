<template>
  <div id="app">
    <h1>To do list things</h1>
    <ul>
      <li v-for="item in items" :class="{dones:item.isDone}">
        {{ item.thins }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
        items: [
          {
            thins: "coding",
            isDone: true
          },
          {
            thins: "cooking",
            isDone: true
          },
          {
            thins: "readind book",
            isDone: false
          },
          {
            thins: "sellping",
            isDone: true
          }
        ]
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{list-style: none;}
ul{width: 300px; margin: 0 auto;}
ul li{ text-align: left; line-height: 30px; font-size: 18px; font-weight: bold;}
.dones{color: green; }
</style>
