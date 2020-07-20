<template>
  <div class="container shadow">
    <article class="row mt-4">
      <header class="col-12">
        <label class="w-100">
          <p class="ml-2 mb-1 text-secondary">标题</p>
          <input class="form-control" v-model="header" />
        </label>
      </header>
      <section class="col-12 mt-2">
        <label class="w-100">
          <p class="ml-2 mb-1 text-secondary">正文</p>
          <textarea class="form-control" v-model="article" rows="16" />
        </label>
      </section>
    </article>
    <div class="row mt-2">
      <button class="col-auto mx-auto btn btn-primary">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      header: "",
      article: ""
    };
  }
};
</script>
