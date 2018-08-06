<template>
  <div class="photolist-container">
     <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll hh">
            
						<a :class="['mui-control-item', list.id==0 ? 'mui-active' :''] " v-for='list in cats' :key='list.id' @click="getPhotoByTitle(list.id)">
							{{list.title}}
						</a>
					</div>
				</div>
			</div>
      <!-- 图片即在区域 -->
      <ul class="photo-list">
        <router-link  v-for="item in img_list" :key='item.passtime' tag='li' :to=" '/home/photoInfo/'+myid+'?soureid='+item.soureid ">
          <img v-lazy="item.header" >
          <!-- 图片里面的内容介绍 -->
          <div class="photo-info">
            <h1 class='info-title'>{{img_content.title}}---{{myid}}</h1>u
            <div class="info-content">{{img_content.content}}</div>
          </div>
        </router-link>
      </ul>
  </div>
</template>
<script>
// 引入mui的js文件用用于屏幕滚动，注意移除webpack的严格模式，官网有提示
import mui from '../../lib/mui/js/mui.js'
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default{
  data(){
    return {
      // 所有分类的列表数组
      cats:[
        { id:0, title:'女明星'},
        { id:1, title:'男明星'},
        { id:2, title:'动物'},
        { id:3, title:'卡通'},
        { id:4, title:'植物'},
        { id:5, title:'影视'},
        { id:6, title:'汽车'}
        ],
        myid:null,
        img_list:[],
        img_content:{
          title:'我是萌萌哒',
          content:'这些图片都是在网上找的不要介意不要介意不要介意不要介意不要介意不要介意不要介意不要介意不要介意不要介意不要介意不要介意'
        }
    }
  },
  created(){
    this.getPhotoByTitle(0)
  },
  mounted(){
// 加载的实际很重要，这个方法用于dom的完全加载和渲染之后要执行的
// 初始化滑动控件
 mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
  },
  methods:{
getPhotoByTitle(page){
  
  // this.$http.get('satinGodApi?type='+page+'&page=1').then(result=>{
    this.$http.get('satinGodApi?type=0&page=1').then(result=>{
    let body = result.body
   if(body.code==200){
    this.img_list=body.data
    //为了方便查询id
    this.myid=page
    let list = this.img_list
    console.log(list)
   }
  })

  
}
  }
}
</script>
<style lang='scss' scoped>
*{
  //原因是chrome为了提高页面的滑动流畅度而新折腾出来的一个东西
  touch-action: pan-y;
}
.photolist-container{
  .photo-list{
    margin: 0;
    padding:10px;
    padding-bottom:0;
    list-style: none;
    
    li{
      background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    
      img {
      width: 100%;
      vertical-align: middle;
      
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    }
    .photo-info{
      position: absolute;
       max-height: 84px;
       color:white;
       bottom: 0;
        text-align: left;
      background-color: rgba(0, 0, 0, 0.4);
       .info-title{
         font-size: 14px;
       }
       .info-content{
         font-size: 12px;
        

       }
    }
}
}

</style>

