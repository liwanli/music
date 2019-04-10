<template>
  <div class="m-home">
    <div class="m-topbar">
      <div class="topfix">
        <h1 class="topfl">
          <span class="topplh">网易云音乐</span>
        </h1>
        <div class="topfr">
          <span class="f-bd f-bd-full topbton">下载APP</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
<style lang="scss" scoped>
.m-home {
    background-color: #fcfcfd;
    min-height: 100%;
    .m-topbar {
        height: 64px;
        .topfix {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            height: 64px;
            background-color: #d43c33;
            box-sizing: border-box;
        }
        .topsvg {
            position: absolute;
            left: 0;
            top: 0;
            width: 142px;
            height: 25px;
        }
    }
}

</style>
