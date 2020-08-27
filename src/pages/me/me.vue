<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-flex uni-row">
        <view
          class="text uni-flex"
          style="-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;"
        >
          <image src="../../static/img/1.png" style="width: 150rpx;height: 150rpx;"></image>
        </view>
        <view
          class="uni-flex uni-column"
          style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;"
        >
          <view class="text">
            文字居左，留出左间距
          </view>
          <view class="uni-flex uni-row">
            <view class="text" style="-webkit-flex: 1;flex: 1;">联系客服</view>
            <view class="text" style="-webkit-flex: 1;flex: 1;">注销</view>
          </view>
        </view>
      </view>

      <view>
        <text class="example-info"
          >列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text
        >
        <uni-section title="基础用法" type="line"></uni-section>
        <uni-list>
          <uni-list-item :show-arrow="false" title="列表文字" />
          <uni-list-item :show-arrow="false" title="列表文字" note="列表描述信息" />
          <uni-list-item :disabled="true" :show-arrow="false" title="列表禁用状态" />
        </uni-list>
        <uni-section title="菜单列表" type="line"></uni-section>
        <uni-list>
          <uni-list-item title="列表右侧带箭头" rightText="右侧文字" />
          <uni-list-item title="右侧插槽" :showArrow="false">
            <template v-slot:right="">
              <image style="width: 40px;height: 40px;" src="/static/logo.png" mode="widthFix"></image>
            </template>
          </uni-list-item>
          <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />
          <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
          <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" />
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="extraIcon1"
            :show-switch="true"
            title="列表右侧带 switch"
            @switchChange="switchChange"
          />
          <uni-list-item
            :disabled="true"
            :show-extra-icon="true"
            :extra-icon="extraIcon2"
            :show-switch="true"
            :switch-checked="true"
            title="禁用状态"
            @switchChange="switchChange"
          />
        </uni-list>
      </view>

      <view class="uni-flex uni-column">
        <view class="flex-item flex-item-V ">剩余积分</view>
        <view class="flex-item flex-item-V ">充值</view>
        <view class="flex-item flex-item-V ">推荐机友</view>
        <view class="flex-item flex-item-V ">我的券</view>
        <view class="flex-item flex-item-V ">签到</view>
      </view>
    </view>
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
