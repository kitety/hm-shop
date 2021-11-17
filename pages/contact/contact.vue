<template>
  <view class="contact">
    <image src="https://api-hmugo-web.itheima.net/pyg/banner1.png" class="image"></image>
    <view class="info">
      <view @click="phone">联系电话：400-818-1233（点击拨打）</view>
      <view>联系地址：中国四川省成都市青羊区骡马市天府广场</view>
    </view>
    <map :latitude="latitude" :longitude="longitude" class="map" :markers="markers" :scale="scale"></map>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        latitude: 30.657456,
        longitude: 104.066771,
        scale: 20,
        markers: [{
          latitude: 30.657456,
          longitude: 104.066771,
          iconPath: '../../static/logo.png',
          width: 30,
          height: 30
        }]
      }
    },
    methods: {
      phone(){
        uni.makePhoneCall({
          phoneNumber:'12345678910'
        })
      }

    }
  }
</script>

<style lang="scss">
  .contact {
    .image {
      width: 750rpx;
      height: 320rpx;
    }

    .info {
      padding: 10rpx 20rpx;
      font-size: 30rpx;

      view {
        line-height: 60rpx;
        border-bottom: 1px solid #eee;
      }
    }

    .map {
      width: 750rpx;
      height: 750rpx;
    }
  }
</style>
