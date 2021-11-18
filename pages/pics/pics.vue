<template>
  <view class="pics">
    <scroll-view scroll-y="true" class="left">
      <view v-for="(item,index) in cates" :key="item.floor_title.name" :class="index===activeIndex?'active':''"
        @click="leftClickHandle(index)">
        {{item.floor_title.name}}
      </view>
    </scroll-view>
    <scroll-view scroll-y="true" class="right">
      <view class="item" v-for="(item,index) in rightList" :key="item.name">
        <image :src="item.image_src" @click="previewImg(index)"></image>
        <text @click="jump(item.navigator_url)">{{item.name}}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import {
    getParams
  } from '../../utils/index.js';
  import qs from 'qs'

  const defaultIndex = 0
  export default {
    data() {
      return {
        cates: [],
        activeIndex: defaultIndex,
        rightList: []
      }
    },
    methods: {
      async getPicsCate() {
        const res = await this.$myRequest({
          url: "/api/public/v1/home/floordata",
        })
        this.cates = res.data.message;
        this.rightList = this.cates[defaultIndex].product_list
      },
      leftClickHandle(index) {
        this.activeIndex = index
        // 获取右侧的数据
        this.rightList = this.cates[index].product_list
      },
      previewImg(index) {
        uni.previewImage({
          current: index,
          urls: this.rightList.map(item => item.image_src)
        })
      },
      jump(url) {
        const {
          query
        } = getParams(url)
        uni.navigateTo({
          url: `../goods/goods?${qs.stringify({query})}`
        })
      }
    },
    onLoad() {
      this.getPicsCate()
    }
  }
</script>

<style lang="scss">
  page {

    height: 100%;
    overflow: hidden;

  }

  .pics {
    height: 100%;
    display: flex;

    .left {
      height: 100%;
      width: 200rpx;
      border-right: 1px solid #eee;

      view {
        height: 60px;
        line-height: 60px;
        color: #333;
        text-align: center;
        font-size: 30rpx;
        border-top: 1px solid #eee;

        &:first-child {
          border-top: none
        }
      }

      .active {
        background-color: $shop-color;
        color: #fff;
      }
    }

    .right {
      width: 530rpx;
      height: 100%;
      margin: 10rpx auto;

      .item {
        image {
          width: 520rpx;
          height: 520rpx;
          border-radius: 5rpx;
        }

        text {
          font-size: 30rpx;
          line-height: 60rpx;
        }
      }
    }
  }
</style>
