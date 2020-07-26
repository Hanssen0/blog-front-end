<template>
  <div class="container shadow">
    <article class="row">
      <header class="col-12 px-5 mb-4 bg-secondary text-white d-flex flex-column
                     justify-content-center"
              style="min-height: 40vh">
        <h1 class="text-center" v-text="title"></h1>
        <p class="text-center">
          <template v-for="(subtitle, index) in subtitles">
            <span v-text="subtitle" :key="index"></span>
            <br :key="'b' + index" />
          </template>
        </p>
      </header>
      <section class="col-12">
        <p v-for="(content, index) in contents" :key="index" v-text="content">
        </p>
      </section>
      <footer class="col-12">
        <div class="row justify-content-end">
          <div class="col-12 col-sm-auto order-last order-sm-first d-flex
                      justify-content-center">
            <router-link :to="'/main/articles/' + id + '/edit'"
                         class="mb-3 btn btn-primary">
              <span class="material-icons mr-1">edit</span>编辑文章
            </router-link>
          </div>
          <time class="col-auto col-sm text-right text-secondary"
                v-text="publish_date"></time>
          <address class="col-auto pl-0 ml-2 text-right text-primary"
                   v-text="author">
          </address>
        </div>
      </footer>
    </article>
  </div>
</template>
<script>
import {GetArticle} from "@/Network.js";
import {BreakByLine, GetDateTimeFromTimestamp} from "@/Algorithms.js";
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    }
  }, data: function() {
    return {
      title: "",
      subtitles: [],
      contents: [],
      author: "",
      publish_timestamp: 0
    };
  }, mounted: function() {
    GetArticle(data => {
      let article = data.data;
      this.title = article.title;
      this.subtitles = BreakByLine(article.subtitle);
      this.contents = BreakByLine(article.content);
      this.author = article.author;
      this.publish_timestamp = article.publish_time;
    }, {id: this.id});
  }, computed: {
    publish_date: function() {
      return GetDateTimeFromTimestamp(this.publish_timestamp);
    }
  }
};
</script>
