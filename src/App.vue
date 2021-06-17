<template>
  <div id="app">
      <div>{{ window.width }}</div>
      <admin-layout></admin-layout>
  </div>
</template>

<script>
import AdminLayout from "@/layout/AdminLayout.vue";
export default {
  name: 'App',
  data(){
    return{
    window:{
      width: 0
     },
     isUnderSize:false // innerwidth 990 이하인지 체크 , 디폴트 : 이하 아님 
    };
  },
  components: {
    AdminLayout
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  mounted(){
   
  },
  destoryed(){
    window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    handleResize(){
      this.window.width = window.innerWidth;
      let widthSize = window.innerWidth; 
      if(widthSize<=990){
        this.isUnderSize = true; 
      }else{
        this.isUnderSize = false; 
      }
    },
  }
}

</script>

<style>

</style>
