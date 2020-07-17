import axios from "axios";
const AJAX = axios.create({
  baseURL: "http://localhost:8090"
});
function GetArticle(callback) {
  AJAX.get("articles/0")
    .then(response => callback(response.data));
}
export {
  GetArticle,
};
