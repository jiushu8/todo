<template>
  <div id="app">
    <h1>To do list things</h1>
    <input type="text" v-model="thing" class="thins-txt" @keyup.enter="addnew">
    <ul class="todolist">
      <li v-for="item in items" :class="{dones:item.isDone}" @click="finsh(item)">
        {{ item.things }}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from "./store";
export default {
  name: 'App',
  data () {
      return {
        thing:'',
        items: Store.getThings()
      }
  },
  watch: {
    items: {
      handler: function(items) {
        console.log(items)
        Store.saveTings(items)
      },
      deep: true
    }
  },
  methods: {
    finsh: function (item) {
      item.isDone =! item.isDone;
    },
    addnew: function(){
      console.log(this.items);
      this.items.push({
        things: this.thing,
        isDone: false
      })
      this.thing = ''
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
  color: #fff;
  margin-top: 60px;
}
body{background: #000;}
ul,li{list-style: none;}
ul{width: 300px; margin: 0 auto;}
ul li{ text-align: left; line-height: 30px; font-size: 18px; font-weight: bold; color: #fff; cursor: pointer;}
.todolist li{font-size: 26px; line-height: 2;}
.dones{color: green; }
.thins-txt{width: 300px; padding: 3px 5px; height: 25px; line-height: 25px; border-radius: 5px; border: none;margin-bottom: 30px; outline: none;}
</style>
