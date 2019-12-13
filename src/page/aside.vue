<template>
  <div class="main">
    <div class="zy-aside" v-show="isShowimg === true">
      <div class="zy-aside-item">
        <span>查看<br />营业执照</span>
      </div>
      <div class="zy-aside-item">
        <span>七天无理由退货</span>
      </div>
      <div class="zy-aside-item">
        <span>100%<br />正品</span>
      </div>
      <div class="zy-aside-item">
        <span>
          <i class="zy-icon"></i
          ><span class="f-pr"
            >购物车<span class="zy-num" style="color:white">0</span></span
          ></span
        >
      </div>
      <div class="zy-aside-item">
        <i class="zy-icon1"></i
        ><span class="f-pr" style="margin-top:0px">客服</span>
      </div>
      <div class="zy-aside-item zy-back" @click="goTop">
        <a href="javascript:;" class="j-totop"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowimg: false
    };
  },
  methods: {
    goTop() {
      // 回到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.isShowimg = false;
    },
    handleScroll(e) {
      // 滚动操作监听
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)
      let offsetTop = 0;
      try {
        offsetTop = document.querySelector(".main").offsetTop;
      } catch (e) {
        offsetTop = 0;
      }
      if (scrollTop > offsetTop) {
        if (scrollTop > 50) {
          this.isShowimg = true;
        } else {
          this.isShowimg = false;
        }
      } else {
        this.isShowimg = false;
      }
    }
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.zy-aside {
  position: fixed;
  top: 50%;
  margin-top: -138px;
  display: block;
  left: 50%;
  margin-left: 570px;
  z-index: 98;
  bottom: auto;
  width: 60px;
  height: auto;
  font-size: 12px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}
.zy-aside-item {
  display: block;
  height: 58px;
  border: 1px solid transparent;
  border-bottom-color: transpar;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12px;
  text-align: center;
}
.zy-aside-item span {
  display: block;
  margin-top: 13px;
  line-height: 1.5;
  color: #666666;
}
.zy-aside-item span .f-pr {
  position: relative;
  margin-top: 0px;
}
.zy-icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 11px 0 5px 17px;
  background: url("../../static/image/totop.png") no-repeat 0 9999px;
  background-position: 0px -71px;
}
.zy-icon1 {
  display: block;
  width: 20px;
  height: 20px;
  margin: 11px 0 5px 17px;
  background: url("../../static/image/totop.png") no-repeat 0 9999px;
  background-position: 0px -101px;
}
.zy-num {
  position: absolute;
  top: -45px;
  left: 30px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  color: #fff;
  background: url("../../static/image/modules.png") no-repeat 0 9999px;
  background-position: -156px -158px;
}
.zy-back {
  height: 35px;
  border: none;
  background: url("../../static/image/totop.png") no-repeat 0 9999px;

  background-position: -70px -0px;
}
</style>
