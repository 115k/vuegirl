<template>
  <div id="app">
    <kf-head></kf-head>
    <keep-alive>
      <router-view class="router-view"></router-view>
    </keep-alive>
    <kf-foot></kf-foot>
  </div>
</template>

<script>
import kfHead from '@/components/public/kf-head.vue'
import kfFoot from '@/components/public/kf-foot.vue'
export default {
  components: {
    kfHead,
    kfFoot
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
}
.router-view{
  flex: 1;
  position: relative;
}
</style>
