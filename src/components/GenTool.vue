<template>
  <el-row>
    <el-col :span="6">
      <el-menu class="leftmenu" @select="handleSelect">
        <el-menu-item v-for="menu in menulist" :key="menu.name" :index="menu.index">
          {{menu.name}}
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <random-num v-if="active=='1'"/>
      <RandomOC v-if="active=='2'"/>
    </el-col>
  </el-row>
</template>

<script>
import RandomNum from "./RandomNum"
import RandomOC from "./RandomOC"
export default {
  name: 'GenTool',
  components:{
    RandomNum, RandomOC
  },
  props: {
  },
  data(){
    return{
      active: '1',
      menulist:[
        {
          name: "随机数生成器",
          index: '1'
        },
        {
          name: "随机OC生成器",
          index: '2'
        }
      ]
    }
  },
    methods: {
      handleSelect(key) {
        this.active = key;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .leftmenu{
    width: 20vw;
  }
</style>
