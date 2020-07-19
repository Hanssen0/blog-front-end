<template>
    <div class="container shadow">
      <div class="container">
        <br>
        <span>在这里编辑文章：</span>
        <p style="white-space: pre-line;">{{ article }}</p>
        <textarea class="container shadow" v-model="article"
                  placeholder="Your article here..."></textarea>
        <button class="btn btn-primary" type="submit"
                name="" value="">提交</button>
      </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      article : ""
    };
  }
};
</script>
