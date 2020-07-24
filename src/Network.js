import axios from "axios";
const AJAX = axios.create({
  baseURL: "http://localhost:8090",
  withCredentials: true,
});
function GetArticle(callback, args) {
  AJAX.get("articles/" + args.id)
    .then(response => callback(response.data));
}
function GetArticles(callback) {
  AJAX.get("articles")
    .then(response => callback(response.data));
}
function EditArticle(callback, args) {
  AJAX.put("articles/" + args.id, args.article)
    .then(response => callback(response.data));
}
function Login(callback, args) {
  AJAX.put("login", args.user)
    .then(response => callback(response.data));
}
function IsLogined(callback) {
  AJAX.get("login")
    .then(response => callback(response.data));
}
function GetUsers(callback) {
  AJAX.get("users")
    .then(response => callback(response.data));
}
function AddUser(callback, args) {
  AJAX.post("users", args.user)
    .then(response => callback(response.data));
}
function DeleteUserById(callback, args) {
  AJAX.delete("users/" + args.user_id)
    .then(response => callback(response.data));
}
function UpdateUser(callback, args) {
  AJAX.put("users/" + args.user_id, args.user)
    .then(response => callback(response.data));
}
function GetRoles(callback) {
  AJAX.get("roles")
    .then(response => callback(response.data));
}
function GetPermissionsOfRole(callback, args) {
  AJAX.get("roles/" + args.role_id)
    .then(response => callback(response.data));
}
function DeletePermissionOfRole(callback, args) {
  AJAX.delete("roles/" + args.role_id + "/" +  args.permission_id)
    .then(response => callback(response.data));
}
export {
  GetArticle,
  GetArticles,
  EditArticle,
  Login,
  IsLogined,
  GetUsers,
  AddUser,
  DeleteUserById,
  UpdateUser,
  GetRoles,
  GetPermissionsOfRole,
  DeletePermissionOfRole,
};
