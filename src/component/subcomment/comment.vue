<template>
  <div class='cmt-container'>
    <h3> 评论组建</h3>
    <textarea maxlength="120" placeholder='请输入内容不超过120字' v-model="msg"></textarea>
   <mt-button type='primary' size='large' @click='postComment'>发表评论</mt-button>
   <div class="cmt-list">
     <div class="cmt-item" v-for='(list,i) in comments' :key='list.id'>
       <div class="cmt-title">
         第{{i+1}}楼&nbsp;&nbsp;用户:{{list.user.username}}&nbsp;&nbsp;时间:{{list.ctime | dataFormate('YYYY-MM-DD HH:MM:SS') }}
       </div>
       <div class="cmt-body">{{list.content}}</div>
     </div>
   </div>
    <mt-button type='danger' size='large'plain @click= 'getmore'>加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default{
  data (){
    return {
      pageIndex:1,
      comments:[],
      msg:''
    }
  },
  created(){
this.getComments()
  },
  methods:{
    getComments(){
      this.$http.get('satinCommentApi?id=27610708&page='+this.pageIndex).then(result=>{
        let body = result.body
        if(body.code==200){
           let lists = body.data.normal.list
          //  this.comments=lists
          // 要用老数据合并新数据，老数据不能够被覆盖掉
           this.comments=this.comments.concat(lists)
         
        }else{
          Toast('获取评论失败')

        }
      })
    },
    getmore(){
      this.pageIndex++
      this.getComments()
    },
    postComment(){
      if(this.msg.trim().length===0){
        return Toast('评论不能为空')
      }
     
      this.$http.post('addStatistics?'+this.$route.id,{
        content:this.msg.trim()
      })
      .then(result=>{
        let body = result.body
        if(body.code===202){
         
          var  cmt={
            user:{username:'匿名用户'},
            ctime:Date.now(),
            content:this.msg.trim()
          };
          this.comments.unshift(cmt);
          this.msg =''
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.cmt-container{
  h3{
    font-size:16px;
  }
  textarea{
    font-size:12px;
    height: 85px;
    margin:0;
  }
  .cmt-list{
    margin: 5px 0;
    .cmt-item{
      font-size:12px;
      white-space:nowrap;
      .cmt-title{
         
        line-height:30px;
        background: #ccc;
      }
      .cmt-body{
        line-height:35px;
        text-indent: 2em;
      }
  
    }
  }

}
</style>
