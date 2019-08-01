<template>
  <div class="container">
    <div style="display: inline-block;">
      {{ $vssWidth }}
    </div>
    <div style="display: inline-block;">
      {{ $vssHeight }}
    </div>
    <div />
    <div
      v-for="(i, index) in $vssWidth"
      :key="`gridRow-${index}`"
      class="gridRow"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.gridRow {
  background-color: black;
  height: 1px;
  width: 1px;
  display: inline-block;
}
</style>
