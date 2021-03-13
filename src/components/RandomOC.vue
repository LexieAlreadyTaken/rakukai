<template>
  <el-col :span="15">
    <p>
      <span>遇见你命定的角色</span>
      <el-button @click="generate" class="generate" size="small">你好！</el-button>
    </p>
    <div v-if="generated!=''" class="generated">
      {{generated}}
    </div>
  </el-col>
</template>

<script>

export default {
  name: 'RandomOC',
  components:{
  },
  props: {
  },
  data(){
    return{
        generated: "",
        content:"",
        contents:[],
        contents_colle:new Map(),
        received:false
    }
  },
  methods: {
      read(addr){
        this.$http.get("http://121.4.151.34/"+addr+".txt", { credentials: true }).then((response) => {
          this.content = response.body;
          this.contents = this.content.split(/\r\n/);
          this.contents_colle.set(addr, this.contents)
        })
      },
      random(minrange, maxrange){
        return Math.floor(Math.random()*(maxrange-minrange+1))+minrange;
      },
      pickarand(addr){
        if(!this.contents_colle.get(addr)){
          this.read(addr);
        }
        var a = this.contents_colle.get(addr);
        if(a)
          return a[this.random(0,a.length-1)];
        else
          return "计算中……"
      },
      normalRandom(miu, sigma2){
        var temp = 12;
        var x = 0;
        var i = 0;
        while(i<temp){
          x += Math.random();
          i++;
        }
        x = (x-temp/2) / Math.sqrt(temp/12);
        x = miu + x * Math.sqrt(sigma2);
        return x;
      },
      getgender(){
        var a = this.random(1,100);
        if(a<=2)
          return "男心女身";
        else if(a<=4)
          return "女心男身";
        else if(a <=50)
          return "女";
        else if(a<=95)
          return "男";
        else
          return "无性别";
      },
      generate(){
        this.generated =  "姓名：" + this.pickarand("first_name")+
        ((this.random(1,5)<2)?"":this.pickarand("last_name"))+
        this.pickarand("last_name")+
        "\n性别："+this.getgender()+
        "\n身高："+this.normalRandom(168,36).toFixed(0)+
        "\n发色："+this.pickarand("colors")+
        "\n瞳色："+this.pickarand("colors")+
        "\n发型："+this.pickarand("hairstyle_front")+
        "，并且有着"+this.pickarand("hairstyle_back")+"作为特征"+
        "\n属性："+this.pickarand("characteristics_outer")+
        "，但实际上"+this.pickarand("characteristics_inner")+
        "\n除此之外，TA还是一名骄傲的"+this.pickarand("occupation")+
        "。\n（如果不喜欢【怎么会有人喜欢】，可以再来一遍。）";
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .generate{
      float: right;
      color: white;
      background-color:brown;
  }
  .generated{
    background-color:#f7562e;
    color: white;
    padding: 1em;
    white-space: pre-line;
  }
</style>
