<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <BlogDetailsPageBaner></BlogDetailsPageBanner>
    <BlogDetailsPageArticles></BlogDetailsPageArticles>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import blogdetailspagebanner from '../components/pagescomponents/blogdetailspage/blogdetailspagebanner.vue'
import blogdetailspagearticles from '../components/pagescomponents/blogdetailspage/blogdetailspagearticles.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  name: 'blogdetailspage',

  components: {
    headercomponent,
    blogdetailspagebanner,
    blogdetailspagearticles,
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