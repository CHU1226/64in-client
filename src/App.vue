<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view :api_url="api_url" :prefix="prefix">

      </router-view>
    </transition>
  </div>
</template>
<script>
  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    name: "app",
    data() {
      return {
        api_url: "http://192.168.72.3/64in-api/public/api/",
        prefix: {
          api_version: "v1/",
          user: "user/",
          comment: "comment/"
        }
      }
    },
    async created() {
      await axios.get(this.api_url + this.prefix.api_version + "index/banner")
          .then(async res =>{
            await console.log("request susses");
            await console.log(res);
          }).catch(err => {
        console.log(err);
      })
    }
  }
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s,transform 1s;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>