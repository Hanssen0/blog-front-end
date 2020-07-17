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
        <div class="text-secondary d-flex justify-content-end">
          <time v-text="publish_date"></time>
          <address class="ml-2 text-primary" v-text="author"></address>
        </div>
      </footer>
    </article>
  </div>
</template>
<script>
import {GetArticle} from "@/Network.js";
import {BreakByLine, GetDateTimeFromTimestamp} from "@/Algorithms.js";
export default {
  data: function() {
    return {
      title: "",
      subtitles: [],
      contents: [],
      author: "",
      publish_timestamp: 0
    };
  }, mounted: function() {
    GetArticle(data => {
      this.title = data.title;
      this.subtitles = BreakByLine(data.subtitle);
      this.contents = BreakByLine(data.content);
      this.author = data.author;
      this.publish_timestamp = data.publish_date;
    });
  }, computed: {
    publish_date: function() {
      return GetDateTimeFromTimestamp(this.publish_timestamp);
    }
  }
};
</script>
