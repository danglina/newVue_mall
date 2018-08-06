<template>
  <div class="container">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='list in newsLists' :key='list.ptime'>
					<router-link :to="'/home/newsInfo/' + list.docid">
				<img class="mui-media-object mui-pull-left" src="http://img1.imgtn.bdimg.com/it/u=3305795786,6476123&fm=27&gp=0.jpg">
						<div class="mui-media-body">
					<h1>{{list.title}}</h1>
							<p class='mui-ellipsis'><span>时间:{{list.ptime | dataFormate('YYYY-MM-DD')}}</span><span>第{{list.tcount}}次评论</span></p>
						</div>
					</router-link>
				</li>
				</ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
  export default{
    data(){
      return {
        newsLists:[]
      }
    },
    created(){
      this.getNewslist()
    },
  methods:{
    getNewslist(){
this.$http.get('journalismApi')
.then(result=>{
  var body = result.body
  if(body.code==200){
    let list1 = body.data.tech
    let list2 = body.data.auto
   let  lists = list1.concat(list2)
    this.newsLists = lists

  }else{
     Toast("获取新闻列表失败！");
  }

})
    }
  }
  }
</script>
<style lang='scss' scoped>
.container{
  overflow: hidden;
}

.mui-table-view {
  li {
    overflow-x: hidden;
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

