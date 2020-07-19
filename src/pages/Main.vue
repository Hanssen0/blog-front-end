<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
        <h4>Blog</h4>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#Navbar" aria-controls="Navbar"
              aria-expanded="false" aria-label="展开或收起导航栏">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Navbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/articles"
                         exact-active-class="active">
              首页<span class="sr-only">当前页面</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="d-flex" style="flex-grow: 1;">
      <router-view></router-view>
    </div>
  </div>
</template>
