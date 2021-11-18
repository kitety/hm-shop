<template>
  <view class="goods_detail">
    <!-- 轮播 -->
    <swiper :indicator-dots="true" :duration="1000" class="swiper">
      <swiper-item v-for="item in pics" :key="item.pics_id">
        <image :src="item.pics_big"></image>
      </swiper-item>
    </swiper>
    <view class="info">
      <view class="price">
        ￥{{detail.goods_price}}
      </view>
      <view class="name">
        {{detail.goods_name}}
      </view>
    </view>
    <view class="line" />
    <view class="count">
      <view>
        数量：{{detail.goods_number}}
      </view>
      <view>
        重量：{{detail.goods_weight}}
      </view>
    </view>
    <view class="line" />
    <view class="desc">
      <view class="title">
        详情介绍
      </view>
      <view class="content" v-html="detail.goods_introduce">

      </view>
    </view>
    <view class="goods_nav">
      <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
        @buttonClick="buttonClick" />
    </view>
    @buttonClick="buttonClick" />
  </view>
</template>

<script>
  import qs from 'qs'
  import uniGoodsNav from '@/uni_modules/uni-goods-nav/uni-goods-nav.vue'
  export default {
    components: {
      uniGoodsNav
    },
    data() {
      return {
        goods_id: '',
        detail: {},
        options: [{
          icon: 'headphones',
          text: '客服'
        }, {
          icon: 'shop',
          text: '店铺',
          info: 2,
        }, {
          icon: 'cart',
          text: '购物车',
          info: 2
        }],
        buttonGroup: [{
            text: '加入购物车',
            backgroundColor: '#ff0000',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: '#ffa200',
            color: '#fff'
          }
        ]
      }
    },
    onLoad(data) {
      data.goods_id = data.goods_id || 57444
      if (data.goods_id) {
        this.goods_id = data.goods_id;
        this.getGoodsDetail()
      }
    },
    computed: {
      pics: function() {
        return this.detail.pics
      }
    },
    methods: {
      // 获取商品详情
      async getGoodsDetail() {
        uni.showLoading({
          title: '详情加载中'
        })
        const goods_id = this.goods_id
        const res = await this.$myRequest({
          url: `/api/public/v1/goods/detail?${qs.stringify({goods_id})}`,
        })
        this.detail = res.data.message;
        uni.hideLoading()
      },
      onClick(e) {
        uni.showToast({
          title: `点击${e.content.text}`,
          icon: 'none'
        })
      },
      buttonClick(e) {
        console.log(e)
        this.options[2].info++
      }
    }
  }
</script>

<style lang="scss">
  .goods_detail {
    .line {
      height: 15rpx;
      width: 750rpx;
      background-color: #eee;
    }

    .swiper {
      height: 700rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      padding: 10rpx;

      .price {
        font-size: 36rpx;
        color: $shop-color;
        line-height: 80rpx;
      }



      .name {
        font-size: 32rpx;
        line-height: 60rpx;
      }
    }

    .count {
      padding: 0 10rpx;
      font-size: 32rpx;
      line-height: 60rpx;
    }

    .desc {
      padding: 0 10rpx;
      padding-bottom: 50rpx;

      .title {
        padding-top: 10rpx;
        font-size: 32rpx;
        border-bottom: 1px solid #eee;
        line-height: 60rpx;
      }

    }

    .goods_nav {
      position: fixed;
      bottom: 0;
      width: 100%;

    }
  }
</style>
