<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4"><br><br><br>
          <h3>登入</h3>
          <hr>
          <input type="text" class="form-control" placeholder="帳號" v-model="account"><br>
          <input type="password" class="form-control" placeholder="密碼" v-model="password"><br>
          <input type="button" value="送出" @click="submit()" class="btn btn-primary">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: ""
    }
  },
  methods: {
    submit() {
      axios.post(this.api_url + this.prefix.api_version + this.prefix.user + "login", {
        account: this.account,
        password: this.password
      })
      .then((res) => {
        console.log(res.data.data);
        alert(res.data.data);
      })
    }
  },
  props: [
    "api_url",
    "prefix"
  ]
}
</script>

<style scoped>

</style>