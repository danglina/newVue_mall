<template>
<div class="photoinfo-container">
  <h3>{{getlist.top_commentsContent}}</h3>
  <p class='subtitle'>
    <span>时间:{{getlist.passtime}}</span>
     <span>点击：:{{getlist.comment}}次</span>
  </p>
  <hr>

<!-- 图片的缩略图 -->
<div class='suolue-content'>
  <vue-preview :slides="suolue_img" @close=""></vue-preview>
</div>
<div class="clear"></div>
  <!-- 图片内容区 -->
  <div class="img-content" v-html='getlist.text'></div>
<!-- 评论区 -->
<cmt-box></cmt-box>
</div>
</template>
<script>
// 引入评论页面
import comment from '../subcomment/comment.vue'
export default{
  data(){
    return {
      aid:this.$route.params.id,
      getlist:[],
      imgslist:[
        {  
          src:'http://img0.imgtn.bdimg.com/it/u=2232516768,2646377770&fm=27&gp=0.jpg',
          msrc:'http://img0.imgtn.bdimg.com/it/u=2232516768,2646377770&fm=27&gp=0.jpg'},
        {
          msrc:'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          src:'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg'
          },
        {
          msrc:'https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg',
          src:'https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg'}
      ],
      suolue_img:[],
      slide1: [
          {
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 50,
            h: 20
          },
          {
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 50,
            h: 20
          }
        ]
    }
  },
created(){
  this.getPhotoInfo();
  this.getsuolue_img();
  // handleClose

},
  methods:{
    getPhotoInfo(){
      this.$http.get('satinGodApi?type='+this.aid+'&page=1').then(result=>{
        let body = result.body
        if(body.code==200){
          let list = body.data
          let soureid = this.$route.query.soureid
         this.getlist=list[0]
         console.log(this.getlist)
          //   console.log('soureid'+soureid)
          //   console.log('aid'+this.aid)
          
          // 当遇到匹配的对象时候用的
          // for(let i=0;i<list.length;i++){
          //      if(list[i].soureid==soureid){
          //        console.log('bbbbbbb')
          //         this.getlist=list[i]
          //      }
          // }
          
        }
      })
    },
    getsuolue_img(){
      this.imgslist.forEach(element => {
        element.w=600
        element.h=400
      });
      this.suolue_img = this.imgslist
      console.log( this.suolue_img)
    }
  },
  components:{
    'cmt-box':comment
  }
}

</script>
<style lang='scss' >
.photoinfo-container{
  padding: 0;
  margin: 0;
  h3{
    font-size: 14px;
    text-align: center;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size:12px;
  }
  .img-content{
    font-size:12px;
  }
  .clear{
clear: both;
  }
  .suolue-content{
  div{
   margin: 0;
padding: 0;
  }
    img {
      width: 100%;
      height: auto;
      display: block;
      text-align: center;
      margin-top: 5px;

    }
  
  }
}
</style>

