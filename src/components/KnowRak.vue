<template>
    <div class="q">
        <el-image :src="headerurl" fit="scale-down" style="height:300px;"/>
        <p class="subtitle">唯一一张（白嫖来的）设定图</p>
        <p>
大家好，我是新晋B站Vup，乐谐是也！</p><p>
上面一个句子好像有语法毛病~</p><p>
算了，不管了！</p><p>
其实我昨天还是一个普通的社畜<span class="original">天国的初设，因为中之人是学生，已经快要忘记的设定…</span>，但刚才有个朋友问我，“乐老师，你能不能来B站？我们都等不及要看着你笑！”所以我就来了，致力于成为让更多人看着我笑的up主（咦？有什么不对）。</p><p>
顺带一提年龄是20岁，可不算雇佣童工哦！</p><p>
虽然不知道有什么人会为我应援，但如果你们真的喜欢的话，我的应援色是<span style="color:#8c1006;">#8c1006枣红</span>和<span style="color:#4a996d;">#4a996d碧绿</span>（<del>专栏打不出正确的那两个颜色，你们试一下</del>这里可以打出来啦！！）。</p><p>
连应援色里都有996……可真是一个悲伤的故事。</p><p class="quot">
——摘自Bilibili专栏《<a href="https://www.bilibili.com/read/cv8665334">OOC系生草Vup，乐谐来了！</a>》</p>
    
        <el-image :src="header2url" fit="scale-down" style="height:300px;"/>
        <p class="subtitle">我说我只有一张图，我装的</p><p class="quot">
基本信息——</p><p>

姓名：乐谐（Lexie，ラクカイ）</p><p>

别称：红配绿，红辣椒炒青辣椒，幼女社畜</p><p>

性别：我说是双性你们信吗？</p><p>

身高：157cm</p><p>

生日：今天<span class="original">指发文的日期，12月4日</span></p><p>

喜欢：钱，唱歌，睡眠，0 error(s) 0 warning(s) 的代码</p><p>

现居地：一个长成我这样算是很正常的地方</p><p>

指定emoji：🎈</p><p class="quot">


背景设定——</p><p>

乐谐是一名20岁的社畜，在一次通宵敲代码睡着以后听到了神明的召唤，得到了让更多人因为她而发笑的使命。于是仍然每天忙碌加班996的她，获得了人生当中新的意义。</p><p>

乐谐小的时候，很喜欢笑，喜欢唱歌和阅读书中的世界。虽然这一切因为她的成长而有些淡忘了，但是她想再找回这样的感觉——通过做Vup的方式。</p><p>

虽然这样的她究竟有没有人喜欢还是未知数，但至少，她已经踏上了这趟旅程。</p><p class="quot">


各项指标——</p><p>

游戏力：0（成为社畜之前是好学生，不会打游戏）</p><p>

歌唱力：50（全民K歌里三个S）<span class="original">这条看来也变成天国的初设了，歌唱能力：《离谱》</span></p><p>

唠嗑力：100（有多久我就能聊多久！）</p><p>

整活力：max（绝 世 好 活）</p><p>

英语能力：裸考六级</p><p>

日语能力：N10000</p><p class="quot">


传送门——</p><p>

B站空间：<a href="https://space.bilibili.com/265000389">https://space.bilibili.com/265000389</a></p><p>

官方粉丝群：833102711<span class="original">（一共有6个成员，包括中之人）</span></p>

    </div>
</template>

<script>
export default {
  name: 'GenTool',
  components:{
  },
  props: {
  },
  data(){
    return{
      headerurl:require("../../public/rakukai2.png"),
      header2url:require("../../public/rakukai3.png")
    }
  },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .q{
    text-align: center;
    padding: 0 20vw;
  }
  .subtitle{
      font-size: 0.8em;
      margin: 0.5em;
      color: gray;
  }
  .quot{
      font-size:1.2em;
      font-weight:bold;
      margin: 1.5em;
  }
  .original{
      font-size: 0.8em;
      color: rgb(133, 163, 130);
  }
</style>
