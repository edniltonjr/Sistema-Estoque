<template>
  <div class="app" :class="{'hide-menu' : !user}">
    <Header title="ACOBRAZIL SISTEMAS DE ESTOQUE"></Header>
    <!-- <menu-site></menu-site> -->
    <transition name="fade" mode="out-in">
      <router-render />
    </transition>
    <Footer />
  </div>
</template>

<script>
import RouterRender from './RouterRender.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'SiteLayout',
  components: {
    RouterRender, Header, Footer
  },
  computed: {
    user () {
      return false
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
