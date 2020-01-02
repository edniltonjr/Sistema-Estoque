<template>
  <header class="header">
    <a class="toggle">
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
    title: String
  }

}
</script>

<style >

</style>
