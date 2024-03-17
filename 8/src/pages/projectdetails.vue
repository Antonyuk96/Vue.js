<template>
  <div>
    <HeaderComponent />
    <ProjectDetailsBanner />
    <ProjectDetailsContent />
    <FooterComponent />
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'
import projectdetailsbanner from '../components/pagescomponents/projectdetailspage/projectdetailsbanner.vue'
import projectdetailscontent from '../components/pagescomponents/projectdetailspage/projectdetailscontent.vue'

export default {
  components: { headercomponent, footercomponent, projectdetailsbanner, projectdetailscontent },
  name: 'projectdetails',

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