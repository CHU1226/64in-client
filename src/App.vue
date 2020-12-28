<template>
  <div id="app">
    <Navbar :user_profile="user_profile">

    </Navbar>
    <transition name="slide" mode="out-in">
      <router-view :api_url="api_url" :prefix="prefix">

      </router-view>
    </transition>
    <Footer>

    </Footer>
  </div>
</template>
<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  export default {
    name: "app",
    data() {
      return {
        api_url: "http://localhost:8080/api/",
        prefix: {
          api_version: "v1/",
          user: "user/",
          comment: "comment/"
        },
        driver_mode: "phone",
        user_profile: {}
      }
    },
    async created() {
      // await axios.get(this.api_url + this.prefix.api_version + "index/banner")
      //     .then(async res =>{
      //       await console.log("request susses");
      //       await console.log(res);
      //     }).catch(err => {
      //   console.log(err);
      // })


      // 模擬用戶已登入
      this.user_profile = {
        id: 1,
        name: "王正宏",
        account: "chenghung_wang",
        avatar: "http://localhost/122194502_633790910641811_1913316961747462921_n.jpg",
        disabled: false,
        created_at: "2020-06-04 12:12:12",
        updated_at: "2020-12-21 23:24:11"
      }
    },
    components: {
      Navbar: Navbar,
      Footer: Footer
    }
  }
</script>
<style lang="scss">
  .col-20 {
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-60 {
    flex: 0 0 60%;
    max-width: 60%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-70 {
    flex: 0 0 70%;
    max-width: 70%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-10pa {
    flex: 0 0 10%;
    max-width: 10%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-80 {
    flex: 0 0 80%;
    max-width: 80%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .slide-enter-active,
  .slide-leave-active{
    transition: opacity .2s,transform .2s;
  }
  .slide-enter,
  .slide-leave-to{
    opacity: 0;
    transform: translateX(-30%);
  }
  .fcc {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fac {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .fbc {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fec {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .fsc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .apple-blur {
    backdrop-filter: blur(30px) saturate(180%)!important;
  }
  .text-disabled {
    color: #aaa!important;
  }
  .app800 {
    width: 800px; position: relative; left: 50%; margin-left: -400px; box-sizing: border-box;
  }
</style>