<template>
  <view class="goods_list">
    <view class="goods_item" v-for="item in goods" :key="item.goods_id">
      <image :src="item.goods_big_logo"></image>
      <view class="price">
        <text>￥{{item.goods_price}}</text>
        <text>￥{{item.goods_price+100}}</text>
      </view>
      <view class="name">
        {{item.goods_name}}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['goods']
  }
</script>

<style lang="scss">
  .goods_list {
    padding: 0 15rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .goods_item {
      background-color: #fff;
      margin: 10rpx 0;
      width: 355rpx;
      padding: 15rpx;
      box-sizing: border-box;

      image {
        width: 80%;
        height: 150rpx;
        margin: 0 auto;
        display: block;
      }
    }

    .price {
      color: $shop-color;
      font-size: 36rpx;

      text:last-child {
        font-size: 28rpx;
        color: #ccc;
        text-decoration: line-through;
        margin-left: 8rpx;
      }
    }

    .name {
      font-size: 28rpx;
      line-height: 50rpx;
      padding-bottom: 15rpx;
      padding-top: 10rpx;
    }
  }
</style>
