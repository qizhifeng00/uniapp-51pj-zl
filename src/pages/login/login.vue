<template>
  <view class="content">
    <view class="input-group">
      <view class="input-row border">
        <text class="title">手机：</text>
        <m-input class="m-input" type="text" clearable focus v-model="mobile" placeholder="请输入手机号码"></m-input>
      </view>
      <view class="input-row">
        <text class="title">验证码：</text>
        <m-input type="text" v-model="code" placeholder="请输入验证码"></m-input>
        <view class="send-code-btn" @click="sendSmsCode">
          {{
          codeDuration ? codeDuration + "s" : "发送验证码"
          }}
        </view>
      </view>
    </view>

    <view class="btn-row">
      <button type="primary" class="primary" @click="loginBySms">登录</button>
    </view>
  </view>
</template>

<script>
import { sendSms, login } from "../../api/getData";
import { mapState, mapMutations } from "vuex";
import mInput from "../../components/m-input.vue";

export default {
  components: {
    mInput,
  },
  data() {
    return {
      mobile: "", //手机号
      code: "", //验证码
      positionTop: 0,
      isDevtools: false,
      codeDuration: 0,
    };
  },
  computed: mapState(["forcedLogin"]),
  methods: {
    ...mapMutations(["login"]),

    initPosition() {
      /**
       * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
       * 反向使用 top 进行定位，可以避免此问题。
       */
      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
    },

    sendSmsCode() {
      if (this.codeDuration) {
        uni.showModal({
          content: `请在${this.codeDuration}秒后重试`,
          showCancel: false,
        });
      }

      if (!/^1\d{10}$/.test(this.mobile)) {
        uni.showModal({
          content: "手机号码填写错误",
          showCancel: false,
        });
        return;
      }

      const smsData = sendSms({
        mobile: this.mobile,
      });
      smsData.then((data) => {
        console.log(data);
        if (data.statusCode == 201) {
          uni.showModal({
            content: "发送成功",
            showCancel: false,
          });
          this.codeDuration = 120;
          this.codeInterVal = setInterval(() => {
            this.codeDuration--;
            if (this.codeDuration === 0) {
              if (this.codeInterVal) {
                clearInterval(this.codeInterVal);
                this.codeInterVal = null;
              }
            }
          }, 1000);
        } else if (data.statusCode == 400) {
          console.log(data.error);
          uni.showModal({
            content: data.data.error.mobile,
            showCancel: false,
          });
        } else {
          uni.showModal({
            content: "登录失败",
            showCancel: false,
          });
          console.log("登录失败");
        }
      });
    },

    loginBySms() {
      if (!/^1\d{10}$/.test(this.mobile)) {
        uni.showModal({
          content: "手机号码填写错误",
          showCancel: false,
        });
        return;
      }
      if (!/^\d{4}$/.test(this.code)) {
        uni.showModal({
          title: "验证码为6位纯数字",
          showCancel: false,
        });
        return;
      }

      const loginData = login({
        mobile: this.mobile,
        code: this.code,
      });

      loginData.then((data) => {
        console.log(data);
        if (data.statusCode == 201) {
          uni.setStorageSync("token", data.data.data.token);
          uni.showModal({
            content: "登录成功",
            showCancel: false,
          });
          uni.reLaunch({
            url: "../index/index",
          });
        } else {
          uni.showModal({
            content: "登录失败",
            showCancel: false,
          });
          console.log("登录失败");
        }
      });
    },
  },

  onReady() {
    this.initPosition();
    // #ifdef MP-WEIXIN
    this.isDevtools = uni.getSystemInfoSync().platform === "devtools";
    // #endif
  },
};
</script>

<style>
</style>
