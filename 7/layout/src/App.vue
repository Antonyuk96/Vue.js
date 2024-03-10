<template>
  <div id="app">
    <ProjectPage />

    <HomePage />

    <BlogPage />

    <BlogDetailsPage />
  </div>
</template>

<script>

import homepage from './pages/homepage.vue'

import blogPage from './pages/blogpage.vue'

import blogdetailspage from './pages/blogdetailspage.vue'

import projectpage from './pages/projectpage.vue'

export default {
  name: 'App',
  components: {
    homepage,

    blogpage,

    blogdetailspage,

    projectpage

  }
}
</script>

<style lang="scss">
@import "scss/vars";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
</style>