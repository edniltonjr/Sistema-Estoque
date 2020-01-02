<template>
  <header class="header">
    <a v-if="toogle" class="toggle">
      <i class="fa fa-lg"></i>
    </a>
    <h1 class="title">
      <router-link to="/">{{ title }}</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
  }
}
</script>
