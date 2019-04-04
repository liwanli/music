<template>
  <div class="psspd">
    <div>
      <span class="text">123</span>
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  beforeDestroy() {
  },
  created() {},
  methods: {
   
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