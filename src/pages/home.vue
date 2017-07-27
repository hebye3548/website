<template>
  <div>
    <s-header></s-header>
    <router-view></router-view>
  </div>
</template>
<script>
import SHeader from '../components/Header.vue'
export default {
  components: {
    "s-header":SHeader
  }
}
</script>
