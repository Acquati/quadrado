<template>
  <div v-if="is_data_fetched" class="container">
    <!-- <div class="info">
      <div>{{ $vssWidth }} x {{ $vssHeight }}</div>
    </div> -->
    <div v-for="x in windowX" :key="`gridX-${x}`" class="gridBlock" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_data_fetched: false
    }
  },
  computed: {
    windowX() {
      return Math.floor(this.$vssWidth / 30) * Math.floor(this.$vssHeight / 30)
    },
    windowY() {
      return Math.floor(this.$vssHeight / 30)
    }
  },
  mounted() {
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
  position: relative;

  div {
    position: absolute;
    display: inline;
    color: red;
  }
}
</style>
