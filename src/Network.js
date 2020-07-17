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
export {
  GetArticle,
  GetArticles
};
