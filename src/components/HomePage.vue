<template>
  <el-container>
    <el-header class="theheader">
      <el-image :src="headerurl" fit="scale-down" style="padding-left: 5px; height: 60px; width: 60px;"/>
      <span class="welcome">{{welcome}}</span>
    </el-header>
    <el-menu mode="horizontal" :default-active="active" @select="handleSelect"
      active-text-color="#9A1A0C" style="font-size:1rem;"><!--不知为什么字体大小不起作用-->
      <el-menu-item v-for="menu in menulist" :index="menu.index" :key="menu.index">
        <span>{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
    <el-main>
      <know-rak v-if="active=='1'"></know-rak>
      <gen-tool v-if="active=='2'"></gen-tool>
      <footprint v-if="active=='3'"></footprint>
    </el-main>
    <el-footer class="footer">
本站由绚花理绪、天河骠骑、冖灬竻、成蹊cxxx等粉丝的投喂赞助开放！<span class="original">第一个投喂的时候用直播姬不熟练，没记住是谁</span>
<br>友情链接：<a href="http://www.anjproject.com">AnJProject</a>    
    </el-footer>
  </el-container>
</template>

<script>
import KnowRak from "./KnowRak.vue"
import GenTool from "./GenTool.vue"
import Footprint from "./Footprint.vue"
export default {
  name: 'HomePage',
  components:{
    KnowRak, GenTool, Footprint
  },
  props: {
  },
  data(){
    return{
      headerurl:require("../../public/rakukai2.png"),
      welcome:"欢迎来到乐谐世界！——🎈🎈🎈",
      active: '1',
      menulist:[
        {
          name: "了解乐谐",
          index: "1"
        },
        {
          name: "生成器工具箱",
          index: "2"
        },
        {
          name: "留下足迹",
          index: "3"
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
  .welcome{
    padding:20px;
    font-size: 25px;
  }
  .theheader{
    background-color:rgb(168, 12, 12);
    display: flex;
    width: 100vw;
    color: #cad6c7;
  }
  .footer{
    padding-top: 10px;
    text-align: center;
    font-size: 0.8rem;
    background: #d6cac7;
  }
  .original{
      font-size: 0.8rem;
      color: rgb(133, 163, 130);
  }
</style>
