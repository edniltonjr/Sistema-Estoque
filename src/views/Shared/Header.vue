<template>
  <header class="header">
    <a v-if="!toogle" href="javascript:void(0);" class="toggle" @click.prevent="handlerMenuState">
      <i class="fa fa-lg"></i>
    </a>
    <h1 class="title">
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <UserDropdown />
  </header>
</template>

<script>
import UserDropdown from '@/components/template/UserDropdown'

export default {
  name: 'Header',
  components: { UserDropdown },
  props: {
    title: {
      type: String,
      required: true
    },
    toogle: {
      type: Boolean,
      default: false
    },
    userMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async handlerMenuState () {
      await this.$store.dispatch('setStateMenu')
      console.log(this.$store.getters.getStateMenu)
    }
  }
}
</script>
