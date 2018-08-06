<template>
  <div class='shopCart-container'>

    
   <div class="goods-list">
     <!-- 商品列表区域 -->

 <!-- //{id:'商品id',price:,count:商品数量,selected:true,content:'商品标题',src:商品地址} -->

     <div class="mui-card" v-for=" (item, i)  in goodsList" :key='item.id'>
      
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<mt-switch v-model="$store.getters.getgoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getgoodsSelected[item.id])"></mt-switch>
          <img :src="item.src" alt="">
					<div class="info">
              <h1>{{item.content}}</h1>
            <p class="num_box" >
              <span class="price">￥{{item.price}}</span>
              <numbox :numcount='item.count' :goodsId='item.id'></numbox >
              <!-- 根据item.id，来删除store的car的数据 ，根据i删除goodslists的数据 -->
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
            </p>
          
          </div>
          </div>
				</div>
			</div>


   </div>
  
  <!-- 商品结算区域 -->
  <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jieshuan">
						<div class="left">
              <P>总计不含运费</P>
              <p>
                已购商品  <span class="red">{{$store.getters.getshopAllPrice.count}}</span>
                总价 <span class="red">￥{{$store.getters.getshopAllPrice.allPrice}}</span>
              </p>
            </div>
            <mt-button type='danger'>结算</mt-button>
					</div>
				</div>
			</div>
  
  
  </div>
</template>
<script>
import numbox from '../subcomment/shopcart_number.vue'
  export default{
     data(){
       return {
        goodsList:[]
       }
     },
     created() {
       this.getGoods();
     },
     methods:{
       getGoods(){
        this.goodsList=this.$store.state.car;
        console.log('购物商城')
        // console.log()
       },
       remove(id,val){
    // 根据获取的id来删除商品
    this.$store.commit('removeInfo',id)
    this.goodsList.splice(val,1)

       },

       selectedChange(id,val){
        // 每次点击数据，吧最新开关状态，存储到store当中去
        this.$store.commit('updateSelected',{id,selected:val})
       }
     },
     components:{
    numbox
  }
  }
  
</script>
<style scoped lang='scss'>
.shopCart-container{
  background: #eee;
  overflow: hidden;
  .goods-list{
    .mui-card-content-inner{
      display: flex;
      align-items: center;
     
      img{
        width: 60px;
      }
      .info{
        align-items: center;
        display: flex;
        justify-content: space-between;
         flex-direction: column;
        h1{
          font-size: 12px;
        }
        .num_box{
          display: flex;
          font-size: 14px;
          justify-content: space-between;
          span{
             color: red;
          }
          
        }
        
      }

    }
  }

  // 结算区域的样式
  .jieshuan{
    display: flex;
    justify-content:space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>

