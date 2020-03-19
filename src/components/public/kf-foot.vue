<template>
  <div class='kf-foot' v-if="showfoot">
    <template v-for="(item, index) in footList">
      <div class="kf-foot-item" v-if="item.isShow" :key="index" @click="goto(item.link)">
        <div class="foot-item-icon">
          <span :class="['iconfont', item.iconClass, { 'activated': $route.name == item.name}]" v-if="!item.iconImg"></span>
          <img :src="'require('+item.activatedImg+')'" alt="" v-if="$route.name == item.name">
          <img v-else-if="item.iconImg && $route.name !== item.name" :src="require(item.iconImg)" alt="">
        </div>
        <div :class="['foot-item-text',{ 'activated': $route.name == item.name}]">{{item.text}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footList: [
        {
          iconClass: 'icon-icon-test4',
          iconImg: '',
          activatedImg: '',
          text: '首页',
          isShow: true,
          name: 'home',
          link: '/home'
        },
        {
          iconClass: 'icon-icon-test5',
          activatedImg: '',
          iconImg: '',
          text: '看看',
          name: '',
          isShow: true,
          link: ''
        },
        {
          iconClass: 'icon-icon-test6',
          iconImg: '',
          activatedImg: '',
          text: '邮件',
          name: '',
          isShow: true,
          link: ''
        },
        {
          iconClass: 'icon-icon-test7',
          iconImg: '',
          activatedImg: '',
          text: '我的',
          name: 'my',
          isShow: true,
          link: '/my'
        }
      ],
      currentLink: ''
    }
  },
  computed: {
    showfoot () {
      return !this.$store.getters.getFootShow
    }
  },
  watch: {
    '$route' () {
      this.$store.dispatch('setHideFoot', this.$route.meta.hidefoot)
    }
  },
  methods: {
    goto (link) {
      if (link && (link !== this.currentLink)) {
        this.currentLink = link
        this.$router.push({ path: link })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.kf-foot{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: rem(8) 0;
  .kf-foot-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .foot-item-icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .iconfont{
    font-size: rem(38);
    line-height: 100%;
    &.activated{
      color: $color-main;
    }
  }
  .foot-item-text{
    text-align: center;
    margin-top: rem(8);
    font-size: rem(24);
    line-height: rem(36);
    &.activated{
      color: $color-main;
    }
  }
  
}
</style>