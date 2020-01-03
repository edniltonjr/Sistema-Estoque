<template>
  <div class="app hide-menu">
    <Header title="ACOBRAZIL SISTEMAS DE ESTOQUE"></Header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'LoginLayout',
  components: {
    Header,
    Footer
  },
  beforeMount: function () {
    if (localStorage.getItem('_userToken_')) {
      this.$router.push({ name: 'DefaultAdmin' })
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
