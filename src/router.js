import VueRouter from 'vue-router'

// 引入各模块组件

import home from './component/tabbar/home.vue'
import cart from './component/tabbar/cart.vue'
import vip from './component/tabbar/vip.vue'
import search from './component/tabbar/search.vue'
import newslist from './component/news/newslist.vue'
import newsInfo from './component/news/newsInfo.vue'
import photolist from './component/photolist/photolist.vue'
import photoInfo from './component/photolist/photoInfo.vue'
import goodslist from './component/goodslist/goodslist.vue'
import goodsInfo from './component/goodslist/goodsInfo.vue'
import goodsDetail from './component/goodslist/goodsDetail.vue'
import goodComment from './component/goodslist/goodComment.vue'











// 3. 创建路由对象    注册
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/vip',component:vip},
    {path:'/cart',component:cart},
    {path:'/search',component:search},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsInfo/:id',component:newsInfo},
    {path:'/home/photolist/',component:photolist},
    {path:'/home/photoInfo/:id',component:photoInfo},
    {path:'/home/goodslist',component:goodslist},
    {path:'/home/goodsInfo/:id',component:goodsInfo,name:'goodsInfoName'},
    {path:'/home/goodsDetail/:id',component:goodsDetail,name:'goodsDetailName'},
    {path:'/home/goodComment/:id',component:goodComment,name:'goodCommentName'}
    
    
    
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去把路由对象暴露出去
export default router