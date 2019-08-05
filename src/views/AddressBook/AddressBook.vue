<template>
  <div class="addressbook">
    <HeaderTop title="通讯录"></HeaderTop>
    <p class="pl10 pt10 gray9">企业通讯录</p>
    <div class="profile_my_order">
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>同事</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>职级</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.profile_my_order
  top-border-1px(#e4e4e4)
  margin-top 10px
  background #fff
  .my_order
    display flex
    align-items center
    padding-left 15px
    >span
      display flex
      align-items center
      width 20px
      height 20px
      >.iconfont
        margin-left -10px
        font-size 30px
      .icon-order-s
        color #02a774
      .icon-jifen
        color #ff5f3e
      .icon-vip
        color #f90
      .icon-fuwu
        color #02a774
    .my_order_div
      width 100%
      border-bottom 1px solid #f1f1f1
      padding 18px 10px 18px 0
      font-size 16px
      color #333
      display flex
      justify-content space-between
      span
        display block
      .my_order_icon
        width 10px
        height 10px
        .icon-jiantou1
          color #bbb
          font-size 10px

</style>