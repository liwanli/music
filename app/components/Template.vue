<template>
  <div class="psspd">
    //<top></top>
    <div>
      <router-view></router-view>
    </div>
    //<foot></foot>

  </div>
</template>
<script>
import top from "@/components/header.vue";
import foot from "@/components/footer.vue";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  components: {
    top,
    foot
  },
  data() {
    return {
     
    };
  },
  mounted() {
    var user = localStorage.getItem("token");
    //this.connection();
  },
  beforeDestroy() {
  },
  created() {},
  methods: {
    shareBox() {
      if (this.contentType == 0) {
        this.$router.push({
          path: "/personalCenter/index",
          query: { index: 1 }
        });
      }
      if (this.contentType == 2) {
        this.$router.push({
          path: "/personalCenter/index",
          query: { index: 2 }
        });
      }
      this.centerDialogVisible = false;
    }
  }
};
</script>
<style lang='scss' scoped>
.text {
  color: #999999;
  font-size: 20px;
  width: 249px;
  text-align: center;
  margin: 0 auto 16px;
  font-family: "SourceHanSansCN-Light";
  line-height: 30px;
}
#cpLink {
  color: #3963d0;
  text-align: center;
  border: none;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  resize: none;
  font-family: "SourceHanSansCN-Light";
}
.copybtn {
  width: 300px;
  height: 42px;
  background: rgba(57, 99, 208, 1);
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
}
</style>