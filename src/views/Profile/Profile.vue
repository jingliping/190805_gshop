<template>
  <section class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <!-- 未登录 -->
    <section class="profile-card logout" style="display:none;">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <!-- 已登录 -->
    <section class="profile-card login">
      <div class="profile-link">
        <div class="user-info">
          <p class="user-info-top">澳立奇科技000</p>
          <p class="user-name">
            JingLiPing
          </p>
        </div>
        <!-- 头像 -->
        <div class="profile_image">
          <img src="https://p.qlogo.cn/bizmail/iaXgbDHszsuiaibvV8NI3FmzK68cOic7xVE5W6Meibdq9uF7DrwVDd0sfBQ/0" width="100%">
        </div>
      </div>

      <div class="card-text">名片信息</div>
    </section>


    <section class="profile_my_order border-1px">
      <!--  -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span><i class="iconfont icon-order-s"></i></span>
          <span>公司信息</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!--  -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span><i class="iconfont icon-jifen"></i></span>
          <span>企业文化</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!--  -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span><i class="iconfont icon-vip"></i></span>
          <span>个人信息</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!--  -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span><i class="iconfont icon-fuwu"></i></span>
          <span>实名认证</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!--  -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span><i class="iconfont icon-fuwu"></i></span>
          <span>设置</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </section>
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
@import "../../assets/stylus/mixins.styl"
.profile //我的
  width 100%
  .profile-card
    width: 95%;
    margin: 0 auto;
    margin-top: 11px;
    border: 1px solid #eee;
    border-radius: 2px;
    overflow: hidden;
    background #fff
    color: #444;
    .profile-link
      position relative
      display block
      padding 20px 10px
      .profile_image
        float left
        width 60px
        height 60px
        border-radius 2px
        overflow hidden
        vertical-align top
        .icon-person
          background #e4e4e4
          font-size 62px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-weight: 700
          font-size 18px
          &.user-info-top
            padding-bottom 8px
          .user-icon
            display inline-block
            margin-left -15px
            margin-right 5px
            width 20px
            height 20px
            .icon-mobile
              font-size 30px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
            color #fff
      .arrow
        width 12px
        height 12px
        position absolute
        right 15px
        top 40%
        .icon-jiantou1
          font-size 5px
  .profile-card.logout
    .profile-link
      clearFix()
  .profile-card.login
    width 92%
    .profile-link
      display flex
      justify-content space-between
    .user-info
      .user-info-top
        font-weight: 400
        font-size 16px
      .user-name
        margin-top 70px
    .profile_image
      margin-right 18px  
    .card-text
      top-border-1px(#eee)
      padding 15px 20px
      color #ccc
      text-align right
  .profile_info_data
    bottom-border-1px(#e4e4e4)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          font-size 14px
          color #333
          padding 15px 5px 10px
          span
            display inline-block
            font-size 30px
            color #f90
            font-weight 700
            line-height 30px
        .info_data_bottom
          display inline-block
          font-size 14px
          color #666
          font-weight 400
          padding-bottom 10px
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .profile_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .my_order
      padding-left 15px
      display block
      &:nth-child(1)
        span:nth-child(1)
          background-color #F2BC1F
      &:nth-child(2)
        span:nth-child(1)
          background-color #31b2f5
      &:nth-child(3)
        span:nth-child(1)
          background-color #FC7355
      &:nth-child(4)
        span:nth-child(1)
          background-color #3b8ed2
      .my_order_div
        border-bottom 1px solid #f1f1f1
        padding 10px 10px 10px 0
        display flex
        justify-content space-between
        align-items: center
        span:nth-child(1)
          display inline-block
          width 28px
          height 28px
          margin-right: 15px;
          .iconfont
            font-size 28px
            color #fff
        span:nth-child(2)
          flex-grow 1
          font-size 16px
        .my_order_icon
          .icon-jiantou1
            color #bbb
            font-size 10px
</style>