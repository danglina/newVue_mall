<template>
  <mt-swipe >
  <mt-swipe-item v-for="list in swipLists" :key="list.url">
    <img :src="list.url" alt="" :class="{'full':isfull}">
  </mt-swipe-item>
</mt-swipe>
</template>
<script>
  
export default{
  data(){
    return {}
  },
  // 这是子组建向父组建传递信息
  props:['swipLists','isfull']
}
</script>
<style lang='scss' scoped>
.mint-swipe{
        height: 200px;
        text-align: center;
    .mint-swipe-item{
      // &:nth-child(1){
      //   background: red;
      // }
      // &:nth-child(2){
      //   background: green;
      // }
      // &:nth-child(3){
      //   background: pink;
      // }
      img {
        height: 100%;
      }
      .full{
         width: 100%;
      }
      
    }
  }
</style>

