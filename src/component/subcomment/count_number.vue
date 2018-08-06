<template>
  <div class="number-container">
    <!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个 合法的 max 数值 -->
    
    <!-- 异步请求时用它 -->
    <!-- <div class="mui-numbox" data-numbox-min='1' > -->
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>

					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"  @change='countChange' ref='inputNum'  />
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
        this.$emit('getCount',parseInt(this.$refs.inputNum.value))
      }
    },
    props:["max"],
    watch: {
    // 属性监听   只要max发生变化就会改变   但是这里我没有用到异步请求，就不用这个
    max: function(newVal, oldVal) {
      // 使用 JS API 设置 numbox 的最大值
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
        console.log('max发生了改变')
    }
  }
  }
  

</script>
<style lang='scss' scoped>

</style>

