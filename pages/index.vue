<template>
  <div v-if="is_data_fetched" class="container">
    <div class="info">
      {{ windowX }} x {{ windowY }}
    </div>

    <div v-for="x in windowXY" :key="`gridX-${x}`" class="gridBlock" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_data_fetched: false
    }
  },
  computed: {
    windowX () {
      return Math.floor(this.$vssWidth / 30)
    },
    windowY () {
      return Math.floor(this.$vssHeight / 30)
    },
    windowXY () {
      return Math.floor(this.$vssWidth / 30) * Math.floor(this.$vssHeight / 30)
    }
  },
  mounted () {
    this.is_data_fetched = true
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
}

.gridBlock {
  background-color: white;
  border: 1px solid gray;
  box-sizing: border-box;
  height: 30px;
  width: 30px;
}

.info {
  position: absolute;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  display: inline;
  left: 20px;
  top: 13px;
}
</style>
