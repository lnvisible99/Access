<template>
  <div class="hello">
    <el-row>
      <el-col :span="12">
        <el-button v-permissions="{url:'btn1',path:'index',hideText:false}">
          按钮1
        </el-button>
      </el-col>

      <el-col :span="12">
        <el-button v-permissions="{url:'btn2',path:'index',hideText:false}">
          按钮2
        </el-button> 
      </el-col>
    </el-row>
    
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
