<template>
  <view class="content">
      <button @click="goLogin">登录</button>
  </view>
</template>

<script>
export default {
    methods:{
        goLogin:()=>{
            uni.navigateTo({
            url: 'test?id=1&name=uniapp',
            });
        }
    }
}
</script>

<style>

</style>