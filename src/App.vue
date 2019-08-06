<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqFoodCategorys} from './api'

export default {
  async mounted(){
    const result = await reqFoodCategorys()
    console.log(result.data)
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  padding-top 50px
  padding-bottom 50px
</style>
