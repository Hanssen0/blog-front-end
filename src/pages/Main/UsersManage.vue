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
    </div>
  </div>
</template>
<script>
import {GetUsers} from "@/Network.js";
export default {
  data: function() {
    return {
      users: [],
    };
  }, mounted: function() {
    GetUsers(users => this.users = users);
  }
};
</script>
