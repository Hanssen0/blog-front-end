import axios from "axios";
const AJAX = axios.create({
  baseURL: "http://localhost:8090"
});
function GetArticle(callback, args) {
  AJAX.get("articles/" + args.id)
    .then(response => callback(response.data));
}
function GetArticles(callback) {
  AJAX.get("articles")
    .then(response => callback(response.data));
}
function Login(callback, args) {
  AJAX.put("users/login", args.user)
    .then(response => callback(response.data));
}
function IsLogined(callback) {
  AJAX.get("users/login")
    .then(response => callback(response.data));
}
export {
  GetArticle,
  GetArticles,
  Login,
  IsLogined,
};
