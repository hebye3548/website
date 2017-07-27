<template>
  <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" router>
    <li class="logo-box"><img src="../assets/logo.png"/></li>
    <el-menu-item v-for="nav in navs" :route="{name:nav.router}" :index="nav.router">
      {{nav.label}}
    </el-menu-item>
    <li class="pull-right el-menu-item" @click="logout">
      退出
    </li>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        navs:[
          {label:'订单管理',router:'orderManage'},
          {label:'集群管理',router:'clusterManage'},
        ],
        activeIndex: 'orderManage'
      };
    },
    methods: {
      logout(){
        alert(0)
      }
    },
    mounted:function(){
      this.activeIndex = this.$route.name
    }
  }
</script>
<style lang="scss">
.logo-box{
  float:left;
  padding: 7px 20px;
  height:80px;
  img{
    height:42px;
  }
}
</style>
