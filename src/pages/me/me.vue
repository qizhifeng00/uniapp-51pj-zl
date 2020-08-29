<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-flex uni-row">
        <view
          class="text uni-flex"
          style="-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;"
        >
          <image src="../../static/img/1.png" style="width: 150rpx;height: 150rpx;" />
        </view>
        <view
          class="uni-flex uni-column"
          style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;"
        >
          <view class="text">文字居左，留出左间距</view>
          <view class="uni-flex uni-row">
            <view class="text" style="-webkit-flex: 1;flex: 1;">联系客服</view>
            <view class="text" style="-webkit-flex: 1;flex: 1;">注销</view>
          </view>
        </view>
      </view>
      <view class="logo" @click="bindLogin" :hover-class="!hasLogin ? 'logo-hover' : ''">
        <image class="logo-img" />
        <view class="logo-title">
          <text class="uer-name">Hi，{{hasLogin ? token : '您未登录'}}</text>
          <text class="go-login navigat-arrow" v-if="!hasLogin">&#xe65e;</text>
        </view>
      </view>
      <uni-list>
        <uni-list-item :title="listItems.conpon" link to="/pages/conpon/conpon"></uni-list-item>
        <uni-list-item :title="listItems.invite" link to="/pages/invite/invite"></uni-list-item>
        <uni-list-item :title="listItems.point" link to="/pages/point/point"></uni-list-item>
        <uni-list-item :title="listItems.qiandao" link to="/pages/qiandao/qiandao"></uni-list-item>
        <uni-list-item :title="listItems.recharge" link to="/pages/recharge/recharge"></uni-list-item>
      </uni-list>
    </view>
    <button @click="goLogin">登录</button>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    listItems: {
      point: "积分",
      qiandao: "签到",
      recharge: "充值",
      conpon: "我的券",
      invite: "我的邀请",
    },
    extraIcon1: {
      color: "#007aff",
      size: "22",
      type: "gear-filled",
    },
    extraIcon2: {
      color: "#4cd964",
      size: "22",
      type: "image",
    },
  }),
  computed: {
    ...mapState(["hasLogin", "forcedLogin", "token"]),
    s: () => {},
  },
  onLoad() {},
  methods: {
    ...mapMutations(["logout"]),
    bindLogin() {
      console.log(this.hasLogin);
      console.log(this.forcedLogin);
      console.log(this.token);
      // uni.navigateTo({
      //   url: "../login/login",
      // });
    },
    switchChange(e) {
      uni.showToast({
        title: "change:" + e.value,
        icon: "none",
      });
    },
    goLogin: () => {
      console.log("s");
      uni.navigateTo({
        url: "/pages/login/login",
      });
    },
  },
};
</script>

<style></style>
