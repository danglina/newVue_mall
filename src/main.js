// 入口文件
import Vue from 'vue'
import VueResource from 'vue-resource'
import vueRouter from 'vue-router'
Vue.use(VueResource)

Vue.use(vueRouter)
import App from './App.vue'
import router from './router.js'


// 设置全局api 
Vue.http.options.root = 'https://www.apiopen.top';
//全局设置表单post数据格式
Vue.http.options.emulateJSON = true;

    // // 引入头部组件 
    // //引入轮播组件
    // import { Header,Swipe, SwipeItem,Button, Lazyload} from 'mint-ui';
    // Vue.component(Header.name, Header);
    // Vue.component(Swipe.name, Swipe);
    // Vue.component(SwipeItem.name, SwipeItem);
    //  Vue.component(Button.name, Button);
    //  Vue.use(Lazyload);


    // 如果不是按需提取    全部都拿过来
    import MintUI from 'mint-ui'
    Vue.use(MintUI)
    import 'mint-ui/lib/style.css'

  // 引入mui
  import './lib/mui/css/mui.min.css'
  import './lib/mui/css/icons-extra.css'

  
  //引入过滤器
import moment from 'moment'
  //设置全局的过滤器
  Vue.filter('dataFormate',(datastr,pattern='YYYY-MM-DD HH:MM:SS')=>{
    return moment(datastr).format(pattern)
  })


  // 引入图片的缩略图
  import VuePreview from 'vue-preview'
  Vue.use(VuePreview)


  // 引入vuex
  import Vuex from 'vuex'
  // 注册
  Vue.use(Vuex)

// 将本地存储的数据转化成store的数据，在页面读取main.js时，获取数据
var car = JSON.parse(localStorage.getItem('car') || '[]');


  // 创建实例
  var store = new Vuex.Store({
    state:{
      // 用于存储所有的商品信息  内容如下
      // {id:'商品id',price:,count:商品数量,selected:true}
      //{id:'商品id',price:,count:商品数量,selected:true,content:'商品标题',src:商品地址}
  
      car:car
    },
    mutations:{
      // this.$store.commit('jj','kkk')
      // 将商品数据存储到car中
      addToCar(state,goodsInfo){
        var flag =false;

        // 当出现雷同的产品
        state.car.some(ele=>{
          if(ele.id==goodsInfo.id){
            ele.count+=goodsInfo.count;
            flag=true
          }
        })

        // 当没有这样的产品
        if(!flag){
          state.car.push(goodsInfo)
        }

        // 设置本地存储
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateInfo(state,goodsInfo){
      // 设置购物车的数据更新
        state.car.some(item=>{
          if(item.id==goodsInfo.id){
            item.count=parseInt(goodsInfo.count);
            return true;
          }
        })

        // 将更新过得数据存到本地
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      removeInfo(state,id){
    // 移除购物车里的数据
        state.car.some((item,i)=>{
          if(item.id==id){
            state.car.splice(i,1)
            return true
          }
        })

        // 将删除后的数据保存本地
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      updateSelected(state,info){
        // 根据 id 来更新是否是被选中的商品
        state.car.some(item=>{
          if(item.id==info.id){
            item.selected=info.selected
          }
        })

         // 将更新的selected 的数据保存本地
         localStorage.setItem('car',JSON.stringify(state.car))
      }
    },
    getters:{
      // this.$store.getters.getAllCount
      getAllCount(state){
        var c=0;
        state.car.forEach(el=>{
         c+=el.count;
        })
        return c
      },
      // 获取一个商品的总数和总价格
      getshopAllPrice(state){
        var o={
          count:0,
          allPrice:0
        };
        state.car.forEach(item=>{
          o.count+=item.count;
          o.allPrice+=item.count*item.price;
        })
        return o;
      },
      getgoodsSelected(state){
        //  利用id  来存 来查找  将商品被选中的selected存放在gettters中用来调用
        var o={};
        state.car.forEach(item=>{
        o[item.id]=item.selected
        })

        return o;
      }
    }
  })

  

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router,
  store  
})