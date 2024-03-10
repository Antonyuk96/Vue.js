<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomePageBaner></HomePageBaner>
    <HomePageProject></HomePageProject>
    <HomePageCounter></HomePageCounter>
    <HomePageArticles></HomePageArticles>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import homepagebanner from '../components/pagescomponents/homepage/homepagebanner.vue'
import homepageproject from '../components/pagescomponents/homepage/homepageproject.vue'
import homepagecounter from '../components/pagescomponents/homepage/homepagecounter.vue'
import homepagearticles from '../components/pagescomponents/homepage/homepagearticles.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  name: 'homepage',

  components: {
    headercomponent,
    homepagebanner,
    homepageproject,
    homepagecounter,
    homepagearticles,
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