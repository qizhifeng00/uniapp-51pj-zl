<template>
  <view class="content">
    <button @click="goLogin">登录</button>
  </view>
</template>

<script>
export default {
  methods: {
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
