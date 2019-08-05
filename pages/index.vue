<template>
  <div v-if="is_data_fetched" class="container">
    <div class="info">
      {{ windowX + 'x' + windowY + '=' + windowX * windowY }}
    </div>
    <div class="github">
      <a :href="'https://' + github" target="_blank" rel="GitHub Quadrado">
        GitHub
      </a>
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
      gridBoxSize: 30,
      github: 'github.com/Acquati/quadrado'
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
      // this.gridBoxSize += 3
      // prettier-ignore
      event.target.style.backgroundColor =
        '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.gridBlock {
  background-color: hsl(0, 0%, 100%);
  border-top: 1px solid hsl(0, 0%, 90%);
  border-right: 1px solid hsl(0, 0%, 80%);
  border-bottom: 1px solid hsl(0, 0%, 70%);
  border-left: 1px solid hsl(0, 0%, 60%);
  box-sizing: border-box;
}

.info {
  position: absolute;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  display: inline;
  right: 3px;
  bottom: 0px;
}

.github {
  position: absolute;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  display: inline;
  left: 5px;
  bottom: 2px;
}
</style>
