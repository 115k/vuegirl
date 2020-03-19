<template>
  <div class="login">
    <div class="btn-box">
      <div class="inputbox">
        <div>姓名:</div>
        <input class="login-input-item" type="text" v-model="name" placeholder="请输入昵称">
      </div>
      <div class="inputbox martop20">
        <div>密码:</div>
        <input class="login-input-item" type="text" v-model="password" placeholder="请输入密码">
      </div>
      <div class="inputbox martop20" v-if="type !== 'login'">
        <div>确认密码:</div>
        <input class="login-input-item" type="text" v-model="password" placeholder="请重新确认密码">
      </div>
      <van-button class="login-btn" @click="togo" round type="info" size="normal">{{type === 'login' ? '登录': '注册'}}</van-button>
    </div>
    
    <div class="login-tip" @click="toSignIn">{{type === 'login' ? '还没有账号？去注册一下吧' : '已有账号，去登录'}}</div>
    <bg-view></bg-view>
  </div>
</template>

<script>
import { fetchLogin, fetchSigin } from '@/api/index'
export default {
  data () {
    return {
      name: '',
      password: '',
      type: 'login'
    }
  },
  methods: {
    toSignIn () {
      if (this.type === 'login') {
        this.type = 'sigin'
      } else if (this.type === 'sigin') {
        this.type = 'login'
      }
      
    },
    togo () {
      if (this.type === 'login') {
        this.login()
      } else {
        this.sigin()
      }
    },
    // 登录
    login () {
      fetchLogin({
        name: this.name,
        password: this.password
      }).then(res => {
        console.llog(res)
        this.$toast('登录成功')
      })
    },
    // 注册
    sigin () {
      fetchSigin({
        name: this.name,
        password: this.password
      }).then(res => {
        console.log(res, '成功')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  position: relative;
  z-index: 1;
}
.btn-box{
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: rem(16) rem(32);
  color: #fff;
  .inputbox{
    border-radius: rem(16);
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: rem(16);
  }
}
.martop20{
  margin-top: rem(60);
}
.login-input-item{
  flex: 1;
  background: rgba(255, 255, 255, 0);
  outline: none;
  border: none;
  height: rem(60);
  line-height: 100%;
  margin-left: rem(16);
  color: #fff;
  &::placeholder{
    color: rgba(255, 255, 255, 0.4);
  }
}
.login-btn{
  width: 100%;
  margin-top: rem(60);
}
.login-tip{
  position: absolute;
  left: 0;
  right: 0;
  bottom: rem(120);
  text-align: center;
  color: #fff;
  font-size: rem(24);
}
</style>