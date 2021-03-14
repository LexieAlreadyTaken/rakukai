<template>
  <el-card :style="{background:randomColor}">
    <span>{{message}}</span>
    <span class="nickname">——{{nickname?nickname:randomName}}</span>
  </el-card>
</template>

<script>
export default {
  name: 'DisplayCard',
  components:{
  },
  props: {
    message: String,
    nickname: String,
    ip: String
  },
  data(){
    return {
      randomName:"昵称计算中……"
    }
  },
  computed:{
    randomColor: function(){
      var code= "#";
      for(var i=0; i<6; i++){
        code +=parseInt(Math.random()*16).toString(16);
      }
      return code;
    },
  },
  mounted(){
    var a = [];
    this.$http.get("http://121.4.151.34/first_name.txt", { credentials: true }).then((response) => {
      var content = response.body;
      a = content.split(/\r\n/);
      this.randomName = ""+a[this.seededRandom(this.ipNum(), 0 ,a.length-1)]
        +a[this.seededRandom(this.ipNum()-1, 0 ,a.length-1)];
    })
  },
  methods: {
    seededRandom : function(seed, max, min) {
      max = max || 1;
      min = min || 0;
 
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
 
      return Math.ceil( min + rnd * (max - min) );   // Math.ceil实现取整功能，可以根据需要取消取整
    },
    ipNum:function(){
      var a = this.ip.match(/::ffff:(\d+).(\d+).(\d+).(\d+)/);
      return parseInt(a[1])+parseInt(a[2])+parseInt(a[3])+parseInt(a[4]);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nickname{
    float: right;
    font-size: 0.9em;
  }
</style>
