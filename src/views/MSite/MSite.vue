<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="">
      <span class="header_search" slot="left">
        工作台
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">
          澳立奇科技
        </span>
      </span>
    </HeaderTop>
    <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in luoboList" :key="item.id">
            <img :src="item.image_url" width="100%" />
            {{item.image_url}}
          </div>
          <!-- <div class="swiper-slide">
            <img src="./images/banner/1.png" width="100%" />
          </div> -->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="icon-nav">
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-shouzhi"></i>
          </div>
          <span>打卡</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-bijiben"></i>
          </div>
          <span>工作</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-xiangmushenbao"></i>
          </div>
          <span>项目</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-wenzhang1"></i>
          </div>
          <span>文章列表</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-video"></i>
          </div>
          <span>视频列表</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-cheliang"></i>
          </div>
          <span>空间泊车</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-pingtaiapicanshu2"></i>
          </div>
          <span>筑建平台</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-cheliang"></i>
          </div>
          <span>任务</span>
        </a>
        <a href="javascript:" class="icon-nav-item">
          <div class="icon-block">
            <i class="iconfont icon-pingtaiapicanshu2"></i>
          </div>
          <span>汇报</span>
        </a>
      </div>
    </nav>
    <!--首页附近商家-->
    
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'

import {reqFoodCategorys} from '../../api'

export default {
  async mounted(){
    // banner轮播图
    new Swiper('.swiper-container',{
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })

    //异步获取数据
    const result = await reqFoodCategorys();
    //console.log(result.data)
    this.luoboList = result.data;
    console.log(this.luoboList)

  },
  data(){
    return {
      luoboList: []
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../assets/stylus/mixins.styl"
.msite  //首页
  .msite_nav
    padding 8px
    .icon-nav
      display flex
      text-align center
      flex-wrap wrap
      background-color #fff
      top-border-1px(#ddd)
      bottom-border-1px(#ddd)
      border-radius 5px
      overflow hidden
      .icon-nav-item
        width 33.333%
        padding 20px 0
        border-right: 1px solid #f9f9f9;
        border-bottom: 1px solid #f9f9f9;
        &:nth-child(1)
          .icon-block
            background-color chocolate
        &:nth-child(2)
          .icon-block
            background-color blue
        &:nth-child(3)
          .icon-block
            background-color #ea4c89
        &:nth-child(4)
          .icon-block
            background-color orange
        &:nth-child(5)
          .icon-block
            background-color pink
        &:nth-child(6)
          .icon-block
            background-color #029cec
        &:nth-child(7)
          .icon-block
            background-color #02a774
        &:nth-child(8)
          .icon-block
            background-color #ea4c89
        &:nth-child(9)
          .icon-block
            background-color orange

        .iconfont 
          font-size 30px
        .icon-block
          width 50px
          height 50px
          line-height 50px
          border-radius 10px
          color #fff
          margin 0px auto 10px auto
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>