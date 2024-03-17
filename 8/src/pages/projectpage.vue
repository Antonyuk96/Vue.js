<template>
  <div>
    <HeaderComponent />
    <ProjectPageBaner />
    <ProjectPageContent />
    <FooterComponent />
  </div>
</template>

<script>
import headercomponent from '@/components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'
import projectpagebanner from '../components/pagescomponents/projectpage/projectpagebanner.vue'
import projectpagecontent from '../components/pagescomponents/projectpage/projectpagecontent.vue'

export default {
  name: 'projectpage',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {},
  components: {
    headercomponent,
    footercomponent,
    projectpagebanner,
    projectpagecontent
  }
}
</script>

<style lang="scss" scoped>
</style>
