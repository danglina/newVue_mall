<template>
 <div class='newsInfo-container'>
   <!-- 大标题 -->
    <h3 class='title'>{{newsInfo.title}}</h3>
    <!-- 小标题 -->
    <p class="subtitle">
      <span>时间{{newsInfo.ptime}}</span>
      <span>点击次数{{newsInfo.tcount}}</span>
    </p>
    <hr>
    <!-- 内容区 -->
    <div class="content" v-html="newsInfo.digest"></div>
    <div class="content-img">
      <img :src="src" alt="">
    </div>
<!-- 评论区 -->
<!-- 虽然没有用到id，但会为以后埋下伏笔 -->
<comments-box :id='this.id'></comments-box>
 
 </div>
</template>
<script>

// 引入评论的子组件
import comment from '../subcomment/comment.vue'

 export default{
   data(){
     return {
       newsInfo:[],
       id:this.$route.params.id,
       src:'http://img1.imgtn.bdimg.com/it/u=3305795786,6476123&fm=27&gp=0.jpg'
     }
   },
   components:{
     'comments-box':comment
   },
created(){
  this.getnewsInfo();
},
   methods:{
     getnewsInfo (){
      this.$http.get('journalismApi').then(result => {
        var body = result.body
        if(body.code==200){
          let list1 = body.data.tech
        let list2 = body.data.auto
        let  lists = list1.concat(list2)
        
         var id= this.$route.params.id
         for(let i=0;i<lists.length;i++){
           if(lists[i].docid==id){
              this.newsInfo = lists[i]
           }
         }
             this.src=this.newsInfo.picInfo[0].url

            
        }
      })
     }
   }

 }
</script>
<style lang='scss' scoped>
.newsInfo-container{
  .title{
    font-size: 14px;
    text-align: center;
    color: red;
    padding:5px 0;
    overflow-x: hidden;
    white-space:nowrap
  }
  .subtitle{
    font-size: 12px;
    color: #226aff;
    display:flex;
    justify-content: space-between;
    padding:0 5px;
  }
  .content{
    font-size:14px;
  }
  .content-img{
    img{
      width: 100%;
    }
  }
}
</style>

