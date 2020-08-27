<template>
  <view class="content">
    <block class="uni-list">
      <view v-for="(value, index) in itemList" :key="index">
        <view
          class="uni-list-cell"
          hover-class="uni-list-cell-hover"
          @click="goDetail(value)"
        >
          <view class="uni-media-list">
            <view class="uni-media-list-body">
              <view class="uni-media-list-text-top">{{ value.Title }}</view>
              <view class="uni-media-list-text-bottom">
                <text>{{ value.Address }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
import { getRecruitList } from "../../api/getData";
export default {
  data: () => ({
    itemList: [], //列表
  }),
  onLoad() {
    uni.showLoading({
      title: "加载中",
    });
    this.getList();
  },
  methods: {
    async getList() {
      try {
        var listData = getRecruitList();
        await listData.then((data) => {
          console.log(data);
          if (data.statusCode == 200) {
            let list = this.setNewList(data.data.data.list);
            this.itemList = list;
            uni.hideLoading();
          } else {
            throw new Error("获取数据失败");
          }
        });
      } catch (err) {
        console.log("获取数据失败", err);
      }
    },
    setNewList: (items) => {
      var newItems = [];
      items.forEach((e) => {
        newItems.push({
          Address: e.Address,
          Fulltimes: e.Fulltimes,
          ID: e.ID,
          Industry: e.Industry,
          JobNote: e.JobNote,
          MaxMoney: e.MaxMoney,
          MinMoney: e.MinMoney,
          NopTime: e.NopTime,
          Ntype: e.Ntype,
          Title: e.Title,
          TopData: e.TopData,
          UID: e.UID,
        });
      });
      return newItems;
    },

    goDetail: (e) => {
      console.log("ss");
      uni.navigateTo({
        url: "../recruitDetail/recruitDetail?id=" + e.ID,
      });
    },
  },
};
</script>

<style></style>
