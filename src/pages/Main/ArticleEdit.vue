<template>
  <div class="container shadow">
    <article class="row">
      <div class="col-12">
        <textarea class="form-control" v-model="article" rows="16" />
      </div>
      <button class="col-auto mx-auto mt-2 btn btn-primary">
        提交
      </button>
    </article>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      article: ""
    };
  }
};
</script>
