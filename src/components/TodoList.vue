<template>
  <div class="TodoList">
    <Header  @add="add"/>
    <ul class="ul">
        <li  v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
        list:["1","2"]
    }
  },
  methods:{
      add(value){
          this.list.push(value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.ul{
    width:200px;
    line-height:50px;
    margin:auto
}
.ul > li {
    width:100%;
    height:50px;
}
</style>
