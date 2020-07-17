<template>
  <div class="container shadow">
    <article v-for="(article, index) in articles" :key="index"
             class="row card shadow mx-4 my-4">
      <header class="col-12 card-header text-white bg-secondary">
        <h1 class="card-title text-center" v-text="article.title"></h1>
        <p class="text-center">
          <template v-for="(subtitle, index) in article.subtitles">
            <span v-text="subtitle" :key="index"></span>
            <br :key="'b' + index" />
          </template>
        </p>
      </header>
      <div class="col-12 position-static card-body bg-white">
        <section>
          <p v-text="article.contents[0]"></p>
        </section>
        <footer class="row justify-content-end">
          <router-link :to="'/articles/' + article.id"
                       class="col-12 col-sm-auto order-last order-sm-first
                       position-static text-center stretched-link">
            <span class="material-icons mr-1">link</span>阅读全文
          </router-link>
          <time class="col-auto col-sm text-right text-secondary"
                v-text="article.publish_date"></time>
          <address class="col-auto pl-0 mb-0 ml-2 text-right text-primary"
                   v-text="article.author">
          </address>
        </footer>
      </div>
    </article>
  </div>
</template>
<script>
import {GetArticles} from "@/Network.js";
import {BreakByLine, GetDateTimeFromTimestamp} from "@/Algorithms.js";
export default {
  data: function() {
    return {
      articles: []
    };
  }, mounted: function() {
    GetArticles(data => {
      this.articles = [];
      data.forEach(article => {
        article.subtitles = BreakByLine(article.subtitle);
        article.contents = BreakByLine(article.content);
        article.publish_date = GetDateTimeFromTimestamp(article.publish_date);
        this.articles.push(article);
      });
    });
  }
};
</script>
