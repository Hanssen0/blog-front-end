import axios from "axios";
const AJAX = axios.create({
  baseURL: "http://localhost:8090"
});
function GetArticle(callback) {
  AJAX.get("/article")
    .then(response => callback(response.data));
}
export {
  GetArticle,
};
