<template>
  <div class="number-container">
    <div class="mui-numbox" data-numbox-min='1'  >

					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="numcount" readonly   @change='countChange' ref='inputNum'  />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
  </div>
</template>
<script>

// 引入js文件
import mui from '../../lib/mui/js/mui.js'
  export default{
    mounted() {
      // 初始化数据
      // 注意是将类名称编译上去的   class   mui-numbox
      mui('.mui-numbox').numbox()
  
    },
    methods:{
      countChange(){
        // console.log(this.goodsId)
        // console.log(this.$refs.inputNum.value)
        this.$store.commit('updateInfo',{id:this.goodsId,count:this.$refs.inputNum.value})

        
      }
    },
    props:["numcount",'goodsId'],
   
  }
  

</script>
<style lang='scss' scoped>

.mui-numbox{
  height: 20px;
}
</style>

