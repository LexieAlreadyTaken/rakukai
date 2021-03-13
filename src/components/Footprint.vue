<template>
  <el-row>
    数据库还没有建好，不过可以加我的粉丝群表示支持？
    <el-button @click="handleClick">一个测试按钮，可以点点看。</el-button>
  </el-row>
</template>

<script>
export default {
  name: 'Footprint',
  components:{
  },
  props: {
  },
  data(){
    return{
      MongoClient : null,
      url: 'mongodb://localhost:27017/raku'
    }
  },
  mounted(){
  },
  methods: {
    handleClick(event){
      console.log(event);
      this.MongoClient = require('mongodb').MongoClient;
      this.MongoClient.connect(this.url, function(err, db){
        if(err) throw err;
        var dbo = db.db("raku");
        var myobj = { name: "", time:new Date()};
        dbo.collection("visitor").insertOne(myobj, function(err,res){
          if(err) throw err;
          console.log(res);
          db.close();
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
