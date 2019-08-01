<template>
  <div v-if="is_data_fetched" class="container">
    <div class="info">
      {{ windowX + 'x' + windowY }}
    </div>

    <div
      v-for="x in windowXY"
      :key="`gridX-${x}`"
      class="gridBlock"
      :style="{ height: gridBoxSize + 'px', width: gridBoxSize + 'px' }"
      @click.stop="handler"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_data_fetched: false,
      isActive: false,
      gridBoxSize: 10
    }
  },
  computed: {
    windowX() {
      return Math.floor(this.$vssWidth / this.gridBoxSize)
    },
    windowY() {
      return Math.floor(this.$vssHeight / this.gridBoxSize)
    },
    windowXY() {
      return (
        Math.floor(this.$vssWidth / this.gridBoxSize) *
        Math.floor(this.$vssHeight / this.gridBoxSize)
      )
    }
  },
  mounted() {
    this.is_data_fetched = true
  },
  methods: {
    handler(event) {
      this.gridBoxSize += 3
      event.target.style.backgroundColor = 'blue'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: gray;
}

.gridBlock {
  background-color: white;
  border: 1px solid darkgrey;
  box-sizing: border-box;
}

.info {
  position: absolute;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  display: inline;
  right: 10px;
  bottom: 10px;
}
</style>
