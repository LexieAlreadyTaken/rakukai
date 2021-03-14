<template>
  <el-row>
    数据库建好了！欢迎在这里写下对我的留言，我会参考的！
    <p>
      <span>随便写写：</span><el-input v-model="message" placeholder="来都来了……"></el-input>
      <span>您的昵称：</span><el-input v-model="nickname"></el-input><!-- placeholder="否则是随机昵称！"-->
      <el-button @click="handleClick">提交留言</el-button>
    </p>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Footprint',
  components:{
  },
  props: {
  },
  data(){
    return{
      message: "",
      nickname:""
    }
  },
  mounted(){
    /*const mongoose = require("mongoose");
    console.log(mongoose);*/
  },
  methods: {
    handleClick(){
      /*console.log(this.message);
      var xhr = new XMLHttpRequest();
      xhr.open('post','http://121.4.151.34:3000/test',true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded; charset=UTF-8');
      xhr.send("message="+this.message);
      var data = Qs.stringify({"message": this.message});
      this.$http.post('http://121.4.151.34:3000/test',data,{
        headers:{
          'Content-Type': 'application/x-www-form-unlencoded'
        }
      }).then((response)=>{
        console.log(response);
      })*/
      axios({
        method:'post',
        url:'http://121.4.151.34:3000/test',
        data:{
          "message": this.message,
          "nickname": this.nickname
        }
      })
      this.message="";
      axios({
        method:'post',
        url:'http://121.4.151.34:3000/getmessages'
      }).then(response =>{
        console.log(response.data);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
