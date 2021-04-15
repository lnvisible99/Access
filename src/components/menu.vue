<template>
  <div class="hello">
    <h4>菜单分配</h4>
    <el-tree
      :data="MenuList"
      show-checkbox
      node-key="url"
      :default-expanded-keys="selectedArr"
      :default-checked-keys="selectedArr"
      :check-strictly="true"
      :props="defaultProps"
      @check-change="changeNode">
    </el-tree>

  </div>
</template>

<script>


export default {
  name: 'index',
  data () {
    return {
      defaultProps: {
        children: 'child',
        label: 'label'
      },
      selectedArr:[],
    }

  },
  methods:{
    changeNode(data){
      data.status = !data.status;
      this.$store.commit('setMenuList',this.MenuList)

    }
  },
  components:{

  },
  mounted(){



  },
  computed:{
    MenuList(){
      return this.$store.getters.getMenuList;
    }
  },
  created(){
    let setSelectedFun = (data = this.MenuList) => {
      for(let item of data){
        if(item.status == true){
          this.selectedArr.push(item.url);
          if(item.child){
             setSelectedFun(item.child);
          }
        }
      }
    }
    setSelectedFun();
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
