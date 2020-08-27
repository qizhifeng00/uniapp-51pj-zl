<script>
import { mapState, mapMutations } from "vuex";
export default {
  onLaunch: function() {
    //全局读取token、username
    let uniIdToken = uni.getStorageSync("uniIdToken");
    if (uniIdToken) {
      this.login(uni.getStorageSync("username"));
    }
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    ...mapMutations(["login"]),
  },
};
</script>

<style>
/*每个页面公共css */
@import "./common/uni.css";
page {
  background-color: #f4f5f6;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}
</style>
