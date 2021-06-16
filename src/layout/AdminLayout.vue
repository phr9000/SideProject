<template>
    <div id="app"> 
        <side-menu></side-menu>
        <a-layout id="components-layout-demo-fixed-sider">
            <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
                <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
                    ...
                    <br />
                    Really
                    <br />...<br />...<br />...<br />
                    long
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />...
                    <br />...<br />...<br />...<br />...<br />...<br />
                    content
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import SideMenu from "@/layout/SideMenu.vue";
export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style scoped>
  #components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>


