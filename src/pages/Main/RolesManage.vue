<template>
  <div class="container shadow">
    <div class="row mt-4">
      <label class="col-auto my-auto pr-0 text-secondary" id="RoleSelectLabel">
        角色
      </label>
      <div class="col-auto">
        <select class="w-auto form-control" aria-labelledby="RoleSelectLabel"
                v-model="editing_roles">
          <option v-for="role in roles" :key="role.id" v-text="role.name"
                  :value="role.id">
          </option>
        </select>
      </div>
    </div>
    <div class="row mt-4">
      <label class="col-12 mb-2 text-secondary" id="PermissionsTableLabel">
        权限表
      </label>
      <div class="col-12">
        <table class="table table-hover"
               aria-labelledby="PermissionsTableLabel">
          <thead>
            <tr>
              <th scope="col">权限</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="permission in permissions" :key="permission.id">
              <td class="align-middle" v-text="permission.id"></td>
              <td class="text-nowrap" width="1" >
                <button class="btn btn-danger material-icons ml-2"
                        @click="DeletePermission(permission.id)">
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import {
  GetRoles,
  GetPermissionsOfRole,
  DeletePermissionOfRole
} from "@/Network.js";
export default {
  data: function() {
    return {
      roles: [],
      editing_roles: null,
      permissions: [],
    };
  }, mounted: function() {
    this.UpdateRolesList();
  }, methods: {
    UpdateRolesList: function() {
      GetRoles(roles => {
        this.roles = roles;
        if (roles.length > 0) this.editing_roles = roles[0].id;
        console.log(roles);
      });
    }, DeletePermission: function(permission_id) {
      DeletePermissionOfRole(this.UpdatePermissionsList,
        {
          role_id: this.editing_roles,
          permission_id: permission_id,
        }
      );
    }, UpdatePermissionsList: function() {
      this.permissions = [];
      GetPermissionsOfRole(permissions => this.permissions = permissions,
        {
          role_id: this.editing_roles
        }
      );
    }
  }, watch: {
    editing_roles: function() { this.UpdatePermissionsList(); }
  }
};
</script>
