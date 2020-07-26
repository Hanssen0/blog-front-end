<template>
  <div class="container justify-content-center">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="row card">
          <div class="card-body px-5 d-flex flex-column align-items-center">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="UserName">用户名</span>
              </div>
              <input class="form-control" v-model="username"
                     aria-labelledby="UserName" />
            </div>
            <div class="input-group mt-2">
              <div class="input-group-prepend">
                <span class="input-group-text" id="Password">密码</span>
              </div>
              <input class="form-control" type="password" v-model="password"
                     aria-labelledby="Password" />
            </div>
            <button class="btn btn-primary px-4 mt-3" @click="Login">
              登陆
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {IsLogined, Login} from "@/Network.js";
import {ReplaceToIndexPage} from "@/main.js";
export default {
  data: function() {
    return {
      username: "",
      password: "",
    };
  }, mounted: function() {
    IsLogined(response => {if (response.data) ReplaceToIndexPage();});
  }, methods: {
    Login: function() {
      Login(
        response => {if (response.error_type === null) ReplaceToIndexPage();},
        {
          user: {
            username: this.username,
            password: this.password,
          }
        }
      );
    }
  }
};
</script>
