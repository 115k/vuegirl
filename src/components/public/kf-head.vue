<template>
  <div class="kf-head" v-show="showHead">
    <div class="head-left">
      <div v-if="slotLeft.template">
        <component slot="left" v-if="slotLeft.template" :is="slotLeft"></component>
      </div>
      <span v-else-if="!$slots.left && showBack" class="iconfont icon-icon-test1" @click="goBack"></span>
      <slot name="left"></slot>
    </div>
    <div class="head-center">
      <span v-if="optionsTitle.title">{{optionsTitle.title}}</span>
      <span v-else-if="!$slots.center">{{title}}</span>
      <slot name="center"></slot>
    </div>
    <div class="head-right">
      <slot name="right"></slot>
      <div v-if="slotLeft.template">
        <component slot="left" v-if="slotLeft.template" :is="slotLeft"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
  },
  data () {
    return {
      lastRouter: ''
    }
  },
  computed: {
    showBack () {
      return !this.$route.meta.hideBack
    },
    showHead () {
      return this.$store.getters.getTitleShow
    },
    title () {
      return this.$store.getters.getTitle
    },
    optionsTitle () {
      return this.$store.getters.getTitleOptions.title
    },
    optionsLeft () {
      return this.$store.getters.getTitleOptions.left
    },
    optionsRight () {
      return this.$store.getters.getTitleOptions.right
    },
    slotLeft () {
      const slot = this.$store.getters.getTitleOptions.left && this.$store.getters.getTitleOptions.left.overwriteTemplate
      return typeof slot === 'object' ? slot : {
        template: slot
      }
    },
    slotRight () {
      const slot = this.$store.getters.getTitleOptions.right && this.$store.getters.getTitleOptions.right.overwriteTemplate
      return typeof slot === 'object' ? slot : {
        template: slot
      }
    },
  },
  methods: {
    ...mapActions([
      'setTitle',
      'setTitleShow',
      'resetTitleOptions'
    ]),
    goBack () {
      if (typeof this.optionsLeft.onClickBack === 'function') {
        this.optionsLeft.onClickBack()
      } else {
        if (window.plus && window.plus.os && window.plus.os.name === 'iOS' && +window.plus.os.version >= 9 && +window.plus.os.version < 10) {
          window.plus.webview.currentWebview().back()
        } else {
          this.$router.go(-1)
        }
      }
    }
  },
  watch: {
    '$route' () {
      this.setTitle(this.$route.meta.title)
      this.setTitleShow(!(this.$route.meta && this.$route.meta.hideHeader))
      if (this.$route.name !== this.lastRouter || this.lastRouter === '') {
        this.lastRouter = this.$route.name
        this.resetTitleOptions(this.$route.meta.title)
      }
    }
  },
  mounted () {
    if (this.$route.meta.length > 0) {
      this.setTitle(!this.$route.meta.title)
      this.setTitleShow(!this.$route.meta.hideHeader)
    }
  }
}
</script>
<style lang="scss" scoped>
.kf-head{
  height: rem(88);
  line-height: rem(88);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 rem(32);
  .head-left{
    align-self: flex-start;
    width: rem(88);
  }
  .icon-icon-test1{
    font-size: rem(72);
    color: $black;
    display: block;
    transform: translateX(-25%);
  }
  .head-center{
    text-align: center;
    flex: 1;
    color: $black;
    font-size: rem(36);
  }
  .head-right{
    align-self: flex-end;
    width: rem(88);
  }
}
</style>