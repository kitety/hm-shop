<template>
  <view class="contact">
    <image src="https://api-hmugo-web.itheima.net/pyg/banner1.png" class="image"></image>
    <view class="info">
      <view>联系电话：400-818-1233（点击拨打）</view>
      <view>联系地址：中国四川省成都市青羊区骡马市天府广场</view>
    </view>
    <map :latitude="104.07231" :longitude="30.663467"></map>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

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
