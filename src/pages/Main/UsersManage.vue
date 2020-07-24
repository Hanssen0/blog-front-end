<template>
  <div class="container shadow">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">用户名</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td v-text="user.username"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-sm input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="UserName">用户名</span>
            </div>
            <input class="form-control" v-model="new_username"
                   aria-labelledby="UserName" />
          </div>
          <div class="col-12 mt-2 col-sm mt-sm-0 input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="Password">密码</span>
            </div>
            <input class="form-control" type="password" v-model="new_password"
                   aria-labelledby="Password" />
          </div>
          <div class="col-auto mx-auto mt-2 mt-sm-0">
            <button class="btn btn-primary material-icons" @click="AddUser">
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {GetUsers, AddUser} from "@/Network.js";
export default {
  data: function() {
    return {
      users: [],
      new_username: "",
      new_password: "",
    };
  }, mounted: function() {
    this.UpdateUser();
  }, methods: {
    AddUser: function() {
      AddUser(this.UpdateUser, {
        user: {
          username: this.new_username,
          password: this.new_password,
        }
      });
    }, UpdateUser: function() {
      GetUsers(users => this.users = users);
    }
  }
};
</script>
