<template>
  <div class="goodlist-container">
    <div class="goods-item" v-for='list in message' @click='getDetail(list.id)' >
      <img :src="list.src" alt="">
      <h1>{{list.content}}</h1>
      <!-- 图片信息 -->
      <div class="info">
        <p class="price">
          <span class="now">￥2999.00</span>
          <span class="old">￥3300.00</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余80件</span>
        </p>
      </div>
    </div>
<!-- 获取更多 -->
<mt-button type="danger" size="large" @click="getMore">获取更多</mt-button>


  </div>
</template>
<script>
export default{
  data(){
   return {
     message:[
       {
         id:0,
         src:'https://img14.360buyimg.com/n1/s450x450_jfs/t17494/75/1869981719/216755/afe6bf7/5ad87250N8b8f157e.jpg',
       content:'荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信'
       },
       {
         id:1,
         src:'https://img12.360buyimg.com/n7/jfs/t20062/321/2572847945/201003/1caf5f67/5b4dc4cfNbb1b3804.jpg',
         content:'TCL 65A860U 65英寸32核人工智能 超智慧 超薄4K 超高清电视机（银色）'
       },
       {
         id:2,
         src:'https://img13.360buyimg.com/n7/jfs/t22033/37/777861293/224101/7374dd8d/5b179c32Nb55e0d76.jpg',
         content:'联想(Lenovo)小新潮7000 13.3英寸超轻薄窄边框笔记本电脑(i5-8250U 8G 256G MX150 office2016)'
       }
       ]     
   }
  },
  created(){
  
    
  },
  methods:{
     getMore(){
     this.message=this.message.concat(this.message)
     },
     getDetail(id){
      //这个方法是通过js编程实现url的跳转，并且可以实现前进 后退 等业务逻辑
      this.$router.push({ name: 'goodsInfoName', params: { id }})

     }
  }
}

  
</script>
<style lang='scss' scoped>
.goodlist-container{
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  padding: 8px;
  
.goods-item{
  width: 49%;
  border:1px solid #ccc;
  margin: 5px 0;
  box-shadow: 0,0,8px,#ccc;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;

  img{
    width: 100%;
  }
  h1{
    font-size: 14px;
    font-weight:bold;
  }
  .info{
    background: #eee;
    p{
      margin: 0;
      padding: 5px;
      }
    .price{
         .now{
          color:red;
          font-size: 12px;
         }
         .old{
          text-decoration: line-through;
          font-size:  12px;
          margin-left:10px;
        }
        }
    .sell{
           display: flex;
        justify-content: space-between;
        span{
          font-size:12px;
        }
        }
      
  }
  
}
}
</style>

