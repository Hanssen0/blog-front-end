<template>
  <div class="container shadow">
    <article class="row mt-4">
      <header class="col-12">
        <label class="w-100">
          <p class="ml-2 mb-1 text-secondary">标题</p>
          <input class="form-control" v-model="title" />
        </label>
      </header>
      <section class="col-12 mt-2">
        <label class="w-100">
          <p class="ml-2 mb-1 text-secondary">正文</p>
          <textarea class="form-control" v-model="content" rows="16" />
        </label>
      </section>
    </article>
    <div class="row mt-2">
      <button class="col-auto mx-auto btn btn-primary" @click="Submit">
        提交
      </button>
    </div>
  </div>
</template>
<script>
import {GetArticle, EditArticle} from "@/Network.js";
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    }
  }, data: function() {
    return {
      title: "",
      content: "",
    };
  }, mounted: function() {
    GetArticle(
      article => {
        this.title = article.title;
        this.content = article.content;
      }, {id: this.id}
    );
  }, methods: {
    Submit: function() {
      EditArticle(() => {},
        {
          id: this.id,
          article: {
            title: this.title,
            content: this.content,
          }
        }
      );
    }
  }
};
</script>
