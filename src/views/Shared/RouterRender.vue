<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: 'RouterRender',
  computed: {
    key () {
      return Math.random().toString().substr(2)
    }
  }
}
</script>
