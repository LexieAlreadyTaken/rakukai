<template>
  <div class="outcont">
    <header class="top">
      <img src="../../public/rakukai.png" class="toppic"/>
      <h1>欢迎来到乐谐世界！——🎈🎈🎈</h1>
    </header>
    <ul class="navlist">
      <li v-for="menuitem in menulist" :key="menuitem.name">
        <a :href="menuitem.refer">{{menuitem.name}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
  },
  data:()=>({
    menulist:[
      {
        name: "了解乐谐",
        refer: ""
      },
      {
        name: "生成器工具箱",
        refer: ""
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .outcont{
    background-color:#ff6257;
    width:100vw;
    height:100vh;
    margin: 0;
    border: 0;
  }
  header{
    background-color: #c02014;
  }
  header h1{
    display: inline;
    color: #4a996d;
    font-weight: inherit;
    margin: 0;
    padding-left: 20px;
  }
  .toppic{
    width:100px;
    height:100px;
  }
  .navlist{
    display: flex;
    width: 100vw;
    background-color:#8c1006;
    list-style-type: none;
    white-space: nowrap;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }
  .navlist li{
    background-color:#8c1006;
    text-align: center;
    padding: 3px;
    margin-left:20px;
    overflow: hidden;
  }
  .navlist li a{
    display: block;
    color: white;
    text-decoration: none;
  }
</style>
