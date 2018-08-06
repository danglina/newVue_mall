<template>
  <div class="goodsDatail-container">
  <h1>{{goodsDetail_content.content}}</h1>
  <hr>
  <div class="content" v-html="goodsDetail_content.htmlcontent"></div>
  </div>
</template>
<script>
  export default{
  data(){
    return {
      routeId:this.$route.params.id,
      goodsDetail_content:{},
       message:[
       {
         id:0,
       content:'荣耀10 GT游戏加速 AIS手持夜景 6GB+64GB 幻影蓝全网通 移动联通电信',
       htmlcontent:"<p>非藏好的一部手机哈哈哈哈哈哈哈</p><img src='https://img14.360buyimg.com/n1/s450x450_jfs/t17494/75/1869981719/216755/afe6bf7/5ad87250N8b8f157e.jpg'></img>"
       },
       {
         id:1,
         content:'TCL 65A860U 65英寸32核人工智能 超智慧 超薄4K 超高清电视机（银色）',
       htmlcontent:"<p>人工智能 超智慧 超薄4K 超高清电视机</p><img src='https://img12.360buyimg.com/n7/jfs/t20062/321/2572847945/201003/1caf5f67/5b4dc4cfNbb1b3804.jpg'></img>"
      },
       {
         id:2,
         content:'联想(Lenovo)小新潮7000 13.3英寸超轻薄窄边框笔记本电脑(i5-8250U 8G 256G MX150 office2016)',
       htmlcontent:"<p>13.3英寸超轻薄窄边框笔记本电脑</p><img src='https://img13.360buyimg.com/n7/jfs/t22033/37/777861293/224101/7374dd8d/5b179c32Nb55e0d76.jpg'></img>"
       
       }
       ]     
    }
  },
  created() {
    this.getall()
  },
  methods:{
    getall(){
      this.message.forEach(ele => {
        if(ele.id==this.routeId){
      this.goodsDetail_content=ele
        }
      });
      // console.log(this.goodsDetail_content)
    }
  }
}
</script>
// 如果v-html有图片，就将scoped去掉
<style lang='scss' >
.goodsDatail-container{
  h1{
    font-size: 14px;
    text-align: center;
  }
  .content{
    font-size: 12px;
   img{
      width: 100%;
   }
  }
}
</style>

