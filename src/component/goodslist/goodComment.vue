<template>
   <div>
    <cmtbox :id='id'></cmtbox>
   </div>
 </template>
 <script>
import cmtbox from '../subcomment/comment.vue'
  export default{
    data(){
  return {
    id:this.$route.params.id
  }
    },
    components:{
      cmtbox
    }
  }
</script>
<style lang='scss' scoped>

</style>