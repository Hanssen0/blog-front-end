<template>
  <div class="container shadow">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">用户名</th>
              <th v-if="editing_user !== null" scope="col">密码</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="user in users">
              <tr :key="user.id" v-show="editing_user !== user.id">
                <td class="align-middle" v-text="user.username"></td>
                <td v-show="editing_user !== null"></td>
                <td class="text-nowrap" width="1">
                  <button class="btn btn-primary material-icons"
                          @click="editing_user = user.id">
                    edit
                  </button>
                  <button class="btn btn-danger material-icons ml-2"
                          @click="DeleteUserById(user.id)">
                    delete
                  </button>
                </td>
              </tr>
              <tr :key="'e' + user.id" v-if="editing_user === user.id">
                <td class="align-middle">
                  <input class="form-control" v-model="user.username" />
                </td>
                <td class="align-middle">
                  <input class="form-control" v-model="user.password" />
                </td>
                <td class="text-nowrap" width="1">
                  <button class="btn btn-primary material-icons"
                          @click="UpdateUser(user)">
                    done
                  </button>
                  <button class="btn btn-danger material-icons ml-2"
                          @click="DeleteUserById(user.id)">
                    delete
                  </button>
                </td>
              </tr>
            </template>
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
import {GetUsers, AddUser, DeleteUserById, UpdateUser} from "@/Network.js";
export default {
  data: function() {
    return {
      users: [],
      new_username: "",
      new_password: "",
      editing_user: null,
    };
  }, mounted: function() {
    this.UpdateUsersList();
  }, methods: {
    AddUser: function() {
      AddUser(this.UpdateUsersList, {
        user: {
          username: this.new_username,
          password: this.new_password,
        }
      });
    }, UpdateUsersList: function() {
      GetUsers(users => this.users = users);
    }, DeleteUserById: function(id) {
      DeleteUserById(this.UpdateUsersList, {
        user_id: id,
      });
    }, UpdateUser: function(user) {
        UpdateUser(this.UpdateUsersList, {
          user_id: user.id,
          user: {
            username: user.username,
            password: user.password,
          },
        });
      this.editing_user = null;
    }
  }
};
</script>
