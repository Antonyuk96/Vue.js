<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <BlogPageBaner></BlogPageBaner>
    <BlogPageLastPost></BlogPageLastPost>
    <BlogPageBlogs></BlogPageBlogs>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import blogpagebanner from '../components/pagescomponents/blogpage/blogpagebanner.vue'
import blogpagelastpost from '../components/pagescomponents/blogpage/blogpagelastpost.vue'
import blogpageblogs from '../components/pagescomponents/blogpage/blogpageblogs.vue'
import footercomponent from '../components/footercomponent.vue'
export default {
  name: 'blogpage',

  components: {
    headercomponent,
    blogpagebanner,
    blogpage;astpost,
    blogpageblogs,
    footercomponent
  },

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>