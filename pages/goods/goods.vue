<template>
  <view>
    <goods-list :goods="goods"></goods-list>
  </view>
</template>

<script>
  import goodsList from '../../components/goods-list/goods-list.vue'
  import qs from 'qs'
  export default {
    data() {
      return {
        pagenum: 1,
        goods: []
      }
    },
    methods: {
      // 获取商品数据
      async getGoodsData() {
        const data = {
          pagenum: this.pagenum
        }
        const res = await this.$myRequest({
          url: `/api/public/v1/goods/search?${qs.stringify(data)}`,
        })
        this.goods = res.data.message.goods;
      },

    },
    onLoad() {
      this.getGoodsData()
    },
    components: {
      "goods-list": goodsList
    }
  }
</script>

<style>

</style>
