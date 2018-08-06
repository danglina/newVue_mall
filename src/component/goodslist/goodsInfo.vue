<template>
  <div class="goodsinfo-container">
  
  <!-- 跳进购物车小球 -->

  <transition 
  @before-enter='beforeEnter'
  @enter='enter'
  @after-enter='afterEnter'>
  <div class="ball" v-show='ballFlag'  ref='ball' ></div>
  <!-- v-show='ballFlag' -->
  </transition>

    <!-- 图片轮播 -->
<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <!-- 轮播子组建 -->
            <swipe :swipLists='imglist.imgs' :isfull='false'></swipe>
					</div>
				</div>
			</div>


<!-- 商品购买 -->
<div class="mui-card">
				<div class="mui-card-header">{{imglist.content}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<p>市场价:<del>￥{{imglist.old_price}}</del>销售价:<span class="now_price">￥{{imglist.now_price}}</span></p>
					<p>购买数量：<span class="count_number">
            <count_number @getCount='getSelectCount' :max ='imglist.counts'></count_number>  
            </span></p>
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          <p class="buy_cart">
            <mt-button type='primary' size='small'>立即购买</mt-button>
             <mt-button type='danger' size='small' @click='addtoShopCart'>加入购物车</mt-button>
          </p>
          </div>
				</div>
			</div>


<!-- 商品参数 -->
<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
          <p>商品编号:{{imglist.pid}}</p>
          <p>库存情况:{{imglist.counts}}</p>
          <p>上架时间:{{imglist.ctime | dataFormate('YYYY-MM')}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <!-- 跳转至图文介绍 -->
          <mt-button type='primary' size='large' @click='getDetail(routeId)'>图文介绍</mt-button>
           <mt-button type='danger' size='large' plain @click='getComment(routeId)'>商品评论</mt-button>
        </div>
			</div>

  </div>
</template>
<script>
  // 引人轮播的子组建
import swipe from '../subcomment/swipe.vue'
// 引入数量计数组建
import count_number from '../subcomment/count_number.vue'

export default{
  data(){
    return {
      selectCount:1,
      ballFlag:false,
      routeId:this.$route.params.id,
      imglist:[],
       message:[
       {
         id:0,
         old_price:3000,
         now_price:2500,
       imgs:[
         {src:'https://img14.360buyimg.com/n1/s450x450_jfs/t17494/75/1869981719/216755/afe6bf7/5ad87250N8b8f157e.jpg'},
         {src:'https://img14.360buyimg.com/n1/s450x450_jfs/t17869/50/1784778334/190195/b8066009/5ad87246N0c40029e.jpg'},
         {src:'https://img14.360buyimg.com/n1/s450x450_jfs/t18763/36/1810750669/173454/b82770b0/5ad87247N2b11be48.jpg'}                 
       ],
       content:'荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信',
       pid:'SM-G8850',
       counts:11,
       ctime:Date.now()
       },
       {
         id:1,
         old_price:6000,
         now_price:5500,
        imgs:[
          { src:'https://img12.360buyimg.com/n7/jfs/t20062/321/2572847945/201003/1caf5f67/5b4dc4cfNbb1b3804.jpg'},
          { src:'https://img11.360buyimg.com/n1/jfs/t22300/360/274743726/116199/e6c8871b/5b07dedcNaf12b9cc.jpg'},
          { src:'https://img11.360buyimg.com/n1/jfs/t17575/204/2245724425/41957/2dd89fc7/5aec0872Nffe023f4.jpg'}          
        ],
         content:'TCL 65A860U 65英寸32核人工智能 超智慧 超薄4K 超高清电视机（银色）',
          pid:'4902977',
        counts:8888,
        ctime:Date.now()
      
      },
       {
         id:2,
         old_price:4900,
         now_price:3500,
         imgs:[
           {src:'https://img13.360buyimg.com/n7/jfs/t22033/37/777861293/224101/7374dd8d/5b179c32Nb55e0d76.jpg'},
           {src:'https://img10.360buyimg.com/n1/s450x450_jfs/t18892/74/1091027158/351144/cfa6adde/5abb3e30N0f90b65b.jpg'},
           {src:'https://img10.360buyimg.com/n1/s450x450_jfs/t8707/214/232904/297181/f9d486ce/599e8a3aN8adeca37.jpg'}
         ],
         content:'联想(Lenovo)小新潮7000 13.3英寸超轻薄窄边框笔记本电脑(i5-8250U 8G 256G MX150 office2016)',
          pid:'4752553',
        counts:999,
        ctime:Date.now()
       
       }
       ]     
    }
  },
  created() {
    this.getswipe()
  },
  
  methods:{
   getswipe(){
     this.message.forEach(element => {
       if(element.id==this.routeId){
         this.imglist=element;
       }
     });
     this.imglist.imgs.forEach(element=>{
      element.url=element.src
     })
   },
   getDetail(id){
    //  使用js编程方法跳转url获取信息详情的方法
    // let id=this.routeId;
    this.$router.push({ name: 'goodsDetailName', params: {id}})
   },
   getComment(id){
    //  使用js编程方法跳转url获取信息详情的方法
    // let id=this.routeId;
    this.$router.push({ name: 'goodCommentName', params: {id}})
   },
  //  加入购物车
   addtoShopCart(){
    this.ballFlag=!this.ballFlag
    
    // 使用store来存储数据，在各组件使用
    // 当点击购物车时，将数据存储到store 的car中
    let src=this.imglist.imgs[0].src
    var goodsInfo ={
      id:this.routeId,
      price:this.imglist.now_price,
      count:this.selectCount,
      content:this.imglist.content,
      src:src,
      selected:true}

      // 调用store的mutations
       this.$store.commit('addToCar',goodsInfo)
      //  console.log('kjjjjaskjhakhdkashdksh')
      //  console.log(src)

   },
  //  开始定义动画
  beforeEnter(el){
    el.style.transform='translate(0,0)'
  },
  enter(el,done){
    // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()
    el.offsetWidth;


    // 获取小球的坐标位置
    let ballposition=this.$refs.ball.getBoundingClientRect();
    // 获取购物车数字球的坐标
    let badgeposition = document.getElementById('badge').getBoundingClientRect()

      // X坐标距离差
      let xDist = badgeposition.left  -  ballposition.left;
      // y的坐标距离差
     let  yDist = badgeposition.top - ballposition.top;



    el.style.transform=`translate(${xDist}px, ${yDist}px)`;
    // el.style.transition='all 1s ease';
    el.style.transition = "all 0.5s cubic-bezier(1,-0.43,.83,.79)";
    done();

  },
  afterEnter(el){
this.ballFlag=!this.ballFlag
  },
// 获取我们设置的数量
getSelectCount(count){
  this.selectCount=count;
  // console.log('我们获取到的值是'+this.selectCount)
}

  },
  components:{
    swipe,
    count_number
  }
}
</script>
<style lang='scss' scoped>
.goodsinfo-container{
  background: #eee;
  overflow: hidden;
  .ball{
    position:absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    left: 148px;
    top: 426px;
    z-index: 999;
    // transform: translate(20px,10px)
  }
  .count_number{
    width: 100px;
    display: inline-block;
    height: 25px;
  }
  .now_price{
    font-size:14px;
    color: red;
    font-weight:bold;
  }
  .buy_cart{
    padding: 10px ;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 10px 0;
    }
  }
}
</style>

