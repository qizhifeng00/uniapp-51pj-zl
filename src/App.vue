<script>
import { mapState, mapMutations } from "vuex";
export default {
  onLaunch: function () {
    //全局读取token、username
    let token = uni.getStorageSync("token");
    if (token) {
      this.login(token);
    }
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    ...mapMutations(["login"]),
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "./common/uni.css";
html {
  background-color: #fff;
}

page {
  margin: 50px 0;
  background-color: #fff;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}
</style>
