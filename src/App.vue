<template>
  <div class="app-container">

		<!-- 顶部header区域 -->
<mt-header fixed title="购物商城页面">
	<span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
</mt-header>


<!-- 中间路由区域 view   -->
<transition>
<router-view></router-view>
</transition>
  
    	<nav class="mui-bar mui-bar-tab">
			<router-link  class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/vip">
			<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/cart">
			<span class="mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id='badge'>{{this.$store.getters.getAllCount}}</span></span>
			
	    <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span> -->
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

export default{
	data(){
		return {
			flag:false
		}
	},
	created() {
		this.flag=this.$route.path==='/home'?false:true;
	},
	methods:{
		goBack(){
			this.$router.go(-1)
		}
	},
	watch:{
		'$route.path':function(newval){
			if(newval==='/home'){
				this.flag=false;
			}else{
					this.flag=true;
			}
		}
	}
}

</script>


<style lang="scss" scoped>
// 将头部的层级提高，避免滚动上去，有字的出现
.mint-header.is-fixed{
	z-index: 199;
}
  .app-container{
    padding-top: 40px;
		overflow-x: hidden;
		padding-bottom: 50px;
  }
.v-enter{
	opacity:0;
	transform:translateX(100%)
}
.v-leave-to{
	opacity:0;
	transform:translateX(-100%);
position:absolute;
}

.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
// 通过修改类名改变tabbar不能点击

.mui-bar-tab .mui-tab-item-lib.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lib {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
 
</style>
