<template>
  <div class="home" ref="home">
    <div class="btn" @click="again" v-if="show">agin</div>
    <van-dialog 
      v-model="config.show"
      :title="config.title"
      @confirm="close()"
      :overlay="false"
      width="75%"
      :confirm-button-text="config.comfirmTxt">
      <img style="width: 100%;" v-if="config.bgimg" :src="`${publicPath}${config.bgimg}`">
      <div class="content">{{config.content}}</div>
    </van-dialog>
    <audio autoplay ref="audio">
      <source :src="`${publicPath}dream.mp3`" type="audio/mp3">
    </audio>
    <bg-view></bg-view>
  </div>
</template>

<script>
import  list  from '@/assets/json/config.json'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      dataList: list,
      publicPath: process.env.BASE_URL,
      acIdx: 0,
      show: false,
      config: {
        content: "",
        title: "",
        show: false,
        bgimg: ""
      },
    }
  },
  computed: {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  created () {
    this.config = list.data.config[0]
    this.dataList = list.data.config
  },
  methods: {
    again () {
      this.acIdx = 0
      this.config = list.data.config[0]
      this.config.show = true
      this.show = false
    },
    close () {
      if (this.acIdx >= list.data.config.length - 1) {
        setTimeout(() => {
          this.show = true
        }, 500);
        return
      }
      this.acIdx++
      setTimeout(() => {
        this.config = list.data.config[this.acIdx]
        this.config.show = true
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/base.scss';
.btn{
  border: 1px solid #fff;
  border-radius: rem(16);
  width: rem(100);
  height: rem(72);
  line-height: rem(72);
  text-align: center;
  position: fixed;
  left: 50%;
  top: rem(32);
  transform: translateX(-50%);
  color: #fff;
  font-size: rem(28);
}
.home{
  z-index: 1;
}
</style>
