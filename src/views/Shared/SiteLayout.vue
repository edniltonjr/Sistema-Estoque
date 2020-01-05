<template>
  <div class="app" :toogle="true">
    <Header title="ACOBRAZIL SISTEMAS DE ESTOQUE"></Header>
    <Content />
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
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  name: 'SiteLayout',
  components: {
    RouterRender, Header, Content, Footer
  },
  computed: {
    user () {
      return localStorage.getItem('_userInfo_') || null
    }
  },
  beforeMount: async function () {
    if (localStorage.getItem('_userToken_')) {
      await this.$store.dispatch('getUserInfo')
    } else {
      this.$router.push({ name: 'Logout' })
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
