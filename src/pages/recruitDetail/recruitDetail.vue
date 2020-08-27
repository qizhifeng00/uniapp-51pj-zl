<template>
  <view class="content">
    <view>{{ items.Title }}</view>
    <button>{{ items.Phones }}</button>
  </view>
</template>

<script>
import { getRecruitDetail } from "../../api/getData";
export default {
  data: () => ({
    items: {},
  }),
  onLoad(option) {
    uni.showLoading({
      title: "加载中",
    });
    this.getDetail(option);
  },
  methods: {
    async getDetail(e) {
      try {
        var detailData = getRecruitDetail(e.id);
        await detailData.then((data) => {
          if (data.statusCode == 200) {
            let newItem = this.setNewItem(data.data.data);
            this.items = newItem;
            uni.hideLoading();
          } else {
            throw new Error("获取数据失败");
          }
        });
      } catch (err) {
        console.log("获取数据失败", err);
      }
    },
    setNewItem(e) {
      var newItems = {};
      for (let key in e) {
        newItems[key] = e[key];
      }
      return newItems;
    },
  },
};
</script>

<style></style>
