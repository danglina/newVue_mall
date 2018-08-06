<template>
  <div>

    <!-- 图片轮播 -->
  <swipe :swipLists='swipLists' :isfull='true'></swipe>

<!-- 九宫格 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
             <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div></router-link></li>
     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
        <img src="../../images/menu3.png" alt="">
         <div class="mui-media-body">商品购买</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
       <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div></a></li>
     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></a></li>
     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>               
		           
		        </ul> 

  </div>
</template>
<script>

// 引人轮播的子组建
import swipe from '../subcomment/swipe.vue'


export default {
  data (){
    return {
      swipLists:[]
    }
  },
  created() {
    this.getswipt();
  },
  methods:{
  getswipt(){
    this.$http.get('https://www.apiopen.top/meituApi?page=10').then(result =>{
      var body = result.body
      if(body.code ==200){
        let lists = body.data.splice(2,5)
         this.swipLists =lists;
        // lists.forEach((element,k) => {
        //   this.swipLists[k] = element.url
        // });
        
        // console.log(that.swipLists)   //这句话返回一个含有4个img的url的数组
        console.log('导入成功')
      }else{
        console.log('导入失败')
      }
    })
  } 
  },
  components:{
    swipe
  }
  
}
  
</script>
<style scoped lang='scss'>

  .mui-grid-view.mui-grid-9 {
  
    background-color: #fff;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-media {
    color: #797979;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }
}

</style>

