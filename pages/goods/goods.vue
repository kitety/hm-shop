<template>
  <view class="goods">
    <goods-list :goods="goods"></goods-list>
    <view v-if="noMoreData" class="bottom-line">----我是有底线的----</view>
  </view>
</template>

<script>
  import goodsList from '../../components/goods-list/goods-list.vue'
  import qs from 'qs'
  export default {
    data() {
      return {
        pageNum: 1,
        goods: [],
        total: 0
      }
    },
    onLoad() {
      this.getGoodsData()
    },
    components: {
      "goods-list": goodsList
    },
    computed: {
      noMoreData: function() {
        return this.goods.length >= this.total
      }
    },

    methods: {
      // 获取商品数据
      async getGoodsData() {
        const data = {
          pagenum: this.pageNum
        }
        const res = await this.$myRequest({
          url: `/api/public/v1/goods/search?${qs.stringify(data)}`,
        })
        this.goods = this.goods.concat(res.data.message.goods);
        this.total = res.data.message.total
        uni.stopPullDownRefresh()
      },

    },
    // 触底更新
    onReachBottom() {
      // 如果还有数据
      if (!this.noMoreData) {
        this.pageNum++;
        this.getGoodsData()
      }
    },
    // 下拉刷新
    onPullDownRefresh() {
      // 初始化
      this.goods = []
      this.pageNum = 1
      this.getGoodsData()
    }

  }
</script>

<style lang="scss">
  .goods {
    background: #eee;

    .bottom-line {
      text-align: center;
      margin-top: 8rpx;
      color: #ccc;
    }
  }
</style>
