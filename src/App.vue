<template>
  <div id="app">
    <router-view class="d-flex flex-column"
                 style="min-height: 100vh; width: 100vw;"></router-view>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "~material-design-icons/iconfont/material-icons.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav-link.active .sr-only {
  @extend .d-none;
}
.material-icons {
  @extend .align-bottom;
}
</style>
