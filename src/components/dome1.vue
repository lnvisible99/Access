<template>
  <div class="hello">
    <div v-permissions="{
          url:'area1',
          path:'index',
          hideText:true,
        }">
      区块1
    </div>
    <div v-permissions="{
      url:'area2',
      path:'index',
      hideText:true,
    }">
      区块2
    </div>

  </div>
</template>

<script>


export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

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
.list{
  display:flex;
  justify-content:center;
  align-item:center;
}
.list span{
  flex:1;
  cursor:pointer;
}
</style>
