<template>
  <el-col :span="15">
    <div>选择你想生成的随机数<del>选择你的英雄</del></div>
    <el-form>
      <p>
        <span>生成范围：</span>
        <el-input-number v-model="minrange" controls-position="right" size="mini"></el-input-number> ~
        <el-input-number v-model="maxrange" controls-position="right" size="mini"></el-input-number>
      </p><p>
        <span>生成数量：</span>
        <el-input-number v-model="gennum" controls-position="right" size="mini"></el-input-number>
        <span>是否唯一：</span>
        <el-checkbox v-model="unique"></el-checkbox>
      </p>
      <p>
        <span>您的随机数列表：</span>
        <el-button @click="generate" class="generate" size="small">生成！</el-button>
      </p>
      <div v-if="generated" class="generated">
        <span v-for="(random,i) in randomlist" :key="i">
          {{random}} 
        </span>
      </div>
    </el-form>
  </el-col>
</template>

<script>
export default {
  name: 'RandomNum',
  components:{
  },
  props: {
  },
  data(){
    return{
        minrange:1,
        maxrange:100,
        gennum:1,
        unique:false,
        generated: false,
        randomlist: []
    }
  },
  computed:{

  },
  methods: {
      random(){
        return Math.floor(Math.random()*(this.maxrange-this.minrange+1))+this.minrange
      },
      generate(){
        this.randomlist = [];
        for(var i=0; i<this.gennum; i++){
          var a = this.random();
          if(this.unique && this.randomlist.find(x=>x==a))
            i--;
          else
            this.randomlist.push(a);
        }
        this.generated = true;
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
  }
</style>
