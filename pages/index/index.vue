<template>
  <view class="home">
    <!-- 轮播 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item v-for="item in swipers" :key="item.goods_id">
        <image :src="item.image_src"></image>
      </swiper-item>

    </swiper>
    <!-- 导航 -->
    <view class="nav">
      <view class="nav-item" v-for="item in nav" :key="item.icon" @click="navItemClick(item.path)">
        <view :class="item.icon">
        </view>
        <text>{{item.title}}</text>
      </view>

    </view>
    <!-- 推荐商品 -->
    <view class="hot_goods">
      <view class="title">
        推荐商品
      </view>
      <goods-list :goods="goods"></goods-list>
     
    </view>
  </view>
</template>

<script>
  import goodsList from '../../components/goods-list/goods-list.vue'
  export default {
    data() {
      return {
        swipers: [],
        goods: [],
        nav: [{
          icon: 'icon-ziyuan iconfont',
          title: '黑马超市',
          path: '/pages/goods/goods'
        }, {
          icon: 'icon-guanyuwomen iconfont',
          title: '联系我们',
          path: '/pages/contact/contact'
        }, {
          icon: 'icon-tupian iconfont',
          title: '社区图片',
          path: '/pages/pics/pics'
        }, {
          icon: 'icon-shipin iconfont',
          title: '学习视频',
          path: '/pages/video/video'
        }, ]
      }
    },
    onLoad() {
      this.getSwipeData()
      this.getGoodsData()
    },
    components:{
      "goods-list":goodsList
    },
    methods: {
      // 获取轮播图数据
      async getSwipeData() {
        const res = await this.$myRequest({
          url: "/api/public/v1/home/swiperdata",
        })
        this.swipers = res.data.message;
      },
      // 获取商品数据
      async getGoodsData() {
        const res = await this.$myRequest({
          url: "/api/public/v1/goods/search",
        })
        this.goods = res.data.message.goods;
        console.log(this.goods)
      },
      // 导航
      navItemClick(url) {
        console.log(url)
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="scss">
  .home {

    // 轮播
    swiper {
      width: 750rpx;
      height: 380rpx;

      image {
        width: 100%;
        height: 100%;
      }

    }

    // 导航
    .nav {
      display: flex;

      .nav-item {
        width: 25%;
        text-align: center;

        text {
          font-size: 30rpx;
        }

        view {
          width: 120rpx;
          height: 120rpx;
          line-height: 120rpx;
          background-color: $shop-color;
          border-radius: 60rpx;
          margin: 10rpx auto;
          color: #fff;
          font-size: 50rpx;
        }

        .icon-tupian {
          font-size: 45rpx;
        }
      }
    }

    // 推荐商品
    .hot_goods {
      background-color: #eee;
      overflow: hidden;
      margin-top: 10rpx;

      .title {
        height: 100rpx;
        line-height: 100rpx;
        color: $shop-color;
        text-align: center;
        letter-spacing: 20rpx;
        margin: 6rpx 0;
        background-color: #fff;
      }

    }
  }
</style>
