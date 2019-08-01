<template>
  <div ref="container" class="container">
    <div class="block">
      {{ windowSize.x }}
    </div>
    <div class="block">
      {{ windowSize.y }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowSize: {
        x: null,
        y: null
      }
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.windowSize.x = window.innerWidth
      this.windowSize.y = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
