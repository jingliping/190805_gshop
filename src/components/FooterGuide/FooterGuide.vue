<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')"> <!--用绑定动态class的时候，考虑是否用用对象语法？什么时候用对象语法：类名确定，只是不确定有还是没有这么类名-->
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>工作台</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/addressbook'===$route.path}" @click="goTo('/addressbook')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>通讯录</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/message'===$route.path}" @click="goTo('/message')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>消息</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goTo(path){
      this.$router.replace(path);
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../assets/stylus/mixins.styl"
.footer_guide  //footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999
    &.on
      color #3f4f61
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>