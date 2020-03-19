<template>
  <div class="bgview" ref="bgview">
    <div class="midbg homebg"></div>
    <div class="forebg homebg"></div>
    <div class="topbg homebg"></div>
  </div>
</template>

<script>
import CanvasNest from '@/utils/canvas-nest/index.js'
export default {
  data () {
    return {
      canvasNest: ''
    }
  },
  methods: {
    creatCanvas () {
      // 在 element 地方使用 config 渲染效果
      const bgviewEle = this.$refs.bgview
      const config = {
        color: '255,255,255',
        count: 150,
        zIndex: -1
      }
      this.canvasNest = new CanvasNest(bgviewEle, config)
    }
  },
  mounted () {
    if (!this.canvasNest) {
      this.creatCanvas()
    }
  },
  activated () {
    if (!this.canvasNest) {
      this.creatCanvas()
    }
  },
  deactivated () {
    if (this.canvasNest) {
      this.canvasNest.destroy()
      this.canvasNest = null
    }
  },
  beforeDestroy () {
    if (this.canvasNest) {
      this.canvasNest.destroy()
      this.canvasNest = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bgview{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #011148;
  z-index: -1;
}
.homebg{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1
}
.midbg{
  background: url(https://i.postimg.cc/PP5GtGtM/midground.png);
  z-index: -1;
  animation: cc 200s linear infinite;
}
.forebg{
  background: url(https://i.postimg.cc/z3jZZD1B/foreground.png);
  z-index: -2;
  animation: cc 253s linear infinite;
}
.topbg{
  background: url(https://i.postimg.cc/PP5GtGtM/midground.png);
  z-index: -4;
  animation: da 200s linear infinite;
}
@keyframes cc {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 600% 0;
  }
}
@keyframes da{
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 600%;
  }
}
</style>
