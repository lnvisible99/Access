<template>
  <div class="hello">
    <div class="list">
      <div class="item" v-for="(item,index) in title" :key="index"  v-permissions="{
          url:item.url,
          path:'index',
          hideText:true,
        }">
        <span @click="changeDome(index)" v-permissions="{
          url:item.url,
          path:'index',
          hideText:false,
        }" :style="item.type?'color:#6db6ff;':''">{{item.name}}</span>
      </div>
    </div>
    
    <div v-for="(item,index) in title" :key="index">
      <h4 v-if="item.status" class="titmsg">{{item.msg}}</h4>
    </div>  

    <keep-alive>
      <component :is="dome"></component>
    </keep-alive>
    <!-- <el-button type="primary">123</el-button> -->
    <span class="menuBtn" @click="drawer = !drawer">菜单</span>


    <el-drawer
      :visible.sync="drawer"
      direction="btt"
      :with-header="false"
      size="70%"
      >
      <menupage></menupage>
    </el-drawer>

    
  </div>
</template>

<script>
import dome1 from './dome1'
import dome2 from './dome2'
import dome3 from './dome3'
import menupage from './menu'

export default {
  name: 'index',
  data () {
    return {
      drawer:false,
      dome: 'dome1',
      // title:[
      //   {
      //     name:'示例一',
      //     status:true,
      //     page:'dome1',
      //     msg:'基础：块的权限控制'
      //   },{
      //     name:'示例二',
      //     status:false,
      //     page:'dome2',
      //     msg:'按钮的权限控制'

      //   },{
      //     name:'示例三',
      //     status:false,
      //     page:'dome3',
      //     msg:'按钮的权限控制并修改按钮内容'
      //   },
      // ]
    }
  },
  computed: {
    title() {
      for(let i in this.store.getters.getMenuList){
        this.$set(this.store.getters.getMenuList[i],'type',false);
      }
      this.$set(this.store.getters.getMenuList[0],'type',true)
      return this.store.getters.getMenuList;
    }
  },
  methods: {
    changeDome(index) {
      console.log(this.$store)
      this.title.map((item) => {item.type = false})
      this.title[index].type = true;
      this.dome = this.title[index].url;
    }
  },
  
  components:{
    dome1,
    dome2,
    dome3,
    menupage
  },
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
.list .item{
  flex:1;
  padding:10px;
  border-bottom:1px solid #eee;
}
.item span{
  padding:5px 10px;
  cursor:pointer;
}

.titmsg{
  color:#666;
}

.menuBtn{
  position:fixed;
  right:10px;
  bottom:10%;
  width:40px;
  height:40px;
  line-height:40px;
  text-align:center;
  font-size:14px;
  border-radius:50%;
  background:#48b4f8;
  color:#fff;
  cursor:pointer;
}
</style>
