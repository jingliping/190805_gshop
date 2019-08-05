<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">空间科技</h2>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="输入手机号" class="input" />
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="输入验证码" class="input" />
            </section>
            <section class="login_hint">
              <input type="checkbox" checked name=""/>  我已阅读，并同意<a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.loginContainer
  width 97%
  margin 0 auto
  border-radius 5px
  padding-bottom 40px
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #3a71a8
        text-align center
    .login_content
      >form
        >div
          display none
          &.on
            display block
          .input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff

          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #3a71a8
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #554cd9
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0

    .go_back
      position absolute
      top 12px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>