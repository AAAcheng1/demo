<template>
  <div class="zy-box">
    <ah></ah>
    <div class="zy-banner">
      <div class="swiper-container zy-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background:#dfd2af">
            <img src="../../static/image/109951164511178399.jpg" />
          </div>
          <div class="swiper-slide" style="background:black">
            <img src="../../static/image/109951164515083744.jpg" />
          </div>
          <div class="swiper-slide" style="background:#fcd33d">
            <img src="../../static/image/109951164515881271.jpg" />
          </div>
          <div class="swiper-slide" style="background:black">
            <img src="../../static/image/109951164518464281.jpg" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev dd"></div>
        <div class="swiper-button-next yy"></div>
      </div>
    </div>
    <div class="zy-tab">
      <div class="zy-tab-center">
        <ul>
          <router-link :to="{ path: '/ambit' }">
            <li>
              <a>
                <img
                  src="../../static/image/UKhDHWnEMmoOo27PQmDPbA%3D%3D%2F19117208672446378.png"
                />
                <span>热销爆品</span>
              </a>
              <em class="zy-line"></em>
            </li>
          </router-link>
          <router-link :to="{ path: '/ambit' }">
            <li>
              <a>
                <img
                  src="../../static/image/tKMAm5OvR-2lAj7dnEOhsg%3D%3D%2F18623527952924939.png"
                />
                <span>IP周边</span>
              </a>
              <em class="zy-line"></em>
            </li>
          </router-link>
          <router-link :to="{ path: '/ambit' }">
            <li>
              <a>
                <img
                  src="../../static/image/PzH4QQKE5R97J9f2V-SvqQ%3D%3D%2F18585045045959929.png"
                />
                <span>数码影音</span>
              </a>
              <em class="zy-line"></em>
            </li>
          </router-link>
          <router-link :to="{ path: '/ambit' }">
            <li>
              <a>
                <img src="../../static/image/jifen.png" />
                <span>积分商城</span>
                <span class="count">0</span>
                <span class="jifen">积分</span>
              </a>
              <em class="zy-line"></em>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="zy-main">
      <div class="zy-ma">
        <div class="zy-img">
          <div class="zy-left">
            <img src="../../static/image/109951164207184328.jpg" class="img" />
          </div>
          <div class="zy-right">
            <img src="../../static/image/109951163973446450.jpg" class="img" />
          </div>
        </div>
        <div class="zy-product">
          <span class="zy-tui">编辑推荐</span>
          <div class="zy-list">
            <ul v-for="(item, index) in msg1" :key="index">
              <router-link :to="{ path: '/detailtit#' + index }">
                <li>
                  <a>
                    <img :src="item.img"/>
                    <span class="span1">
                      <span class="span2">{{ item.price }}</span>
                      <span class="span3">{{ item.price1 }}</span>
                    </span>
                  </a>
                  <div class="zy-title">
                    <h3>{{ item.title1 }}</h3>
                    <p>{{ item.price }}</p>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="zy-active">
          <div class="zy-active-left">
            <div class="zyal">
              <span><i></i>数字专辑</span>
              <p>Taylor Swift 新专辑火热售卖中</p>
              <a href="javascript:;">立 即 购 买 &gt;</a>
            </div>
          </div>
          <div class="zy-active-right">
            <img
              src="../../static/image/109951164370176967.jpg.png"
              class="sml"
            />
            <img
              src="../../static/image/109951164260234943.jpg.png"
              class="big"
            />
            <i class="cirle"></i>
          </div>
        </div>
        <div class="mlock">
          <span class="zy-tui">热门商品</span>
          <div class="zy-list">
            <ul v-for="(item, index) in msg2" :key="index">
              <router-link :to="{ path: '/detailtit#' + index + '&product'}">
                <li>
                  <a>
                    <img :src="item.img" />
                    <span class="span1">
                      <span class="span2">{{ item.price }}</span>
                      <span class="span3">{{ item.price1 }}</span>
                    </span>
                  </a>
                  <div class="zy-title">
                    <h3>{{ item.title1 }}</h3>
                    <p>{{ item.price }}</p>
                  </div>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <as></as>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import Swiper from "swiper";
import as from "./aside";
import ah from "./sheader";

export default {
  components: { as, ah },
  data() {
    return {
      show: false,
      arr: ["花", "耳机", "服装", "蓝牙", "乐器"],
      msg1: "",
      msg2: ""
    };
  },
  // computed: {
  //   ...mapState(["product", "product1"])
  // },
  methods: {
    get() {
      this.show = !this.show;
    },
    send(index) {
      this.msg = index;
    }
  },
  mounted() {
    var swiper1 = new Swiper(".zy-swiper", {
      autoplay: {
        delay: 1000
      },
      loop: true,
      disableOnInteraction: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
      },
      observer: true,
      observeParents: true
    });
    window.addEventListener("scroll", this.handleScroll);
    this.$http.get("../../static/json/prodit.json").then(res => {
      // console.log(res.data);
      this.msg1 = res.data.product;
      this.msg2 = res.data.product1;
    });
  }
};
</script>
<style scoped>
/* @import "../../node_modules/swiper/dist/css/swiper.min.css"; */
.zy-banner {
  width: 100%;
  height: 480px;
  overflow: hidden;
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: absolute;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.dd {
  position: absolute;
  z-index: 1;
  width: 37px;
  height: 63px;
  background-color: #000;
  filter: alpha(opacity=10);
  -moz-opacity: 0.1;
  opacity: 0.1;
}
.yy {
  position: absolute;
  z-index: 1;
  width: 37px;
  height: 63px;
  background-color: #000;
  filter: alpha(opacity=10);
  -moz-opacity: 0.1;
  opacity: 0.1;
  right: 12px;
}
.swiper-container {
  --swiper-theme-color: #ff6600;
  /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33;
  /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px;
  /* 设置按钮大小 */
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33;
  /* 两种都可以 */
}
.swiper-pagination {
  position: absolute;
  height: 50px;
}
* {
  margin: 0;
  padding: 0;
}
em {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.zy-box {
  width: 100%;
  height: 100%;
  min-width: 1100px;
  font-size: 12px;
  color: #333;
}
/* .zy-header {
  height: 73px;
  background: #fff;
  position: relative;
  zoom: 1;
}
.zy-header-center {
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  position: relative;
  zoom: 1;
}
.zy-logo {
  width: 290px;
  height: 70px;
  font-size: 0;
}
.f-fl {
  float: left;
}
.zy-logo a {
  display: inline-block;
  width: 290px;
  height: 70px;
  background: url("../../static/image/modules.png") no-repeat 0 9999px;
  background-position: 0px -48px;
  text-decoration: none;
}
.zy-search {
  width: 300px;
  height: 70px;
  margin-left: 334px;
}
.zy-search-center {
  width: 300px;
  height: 69px;
  padding-top: 1px;
  position: relative;
}
.zy-search-div {
  width: 100%;
  height: 38px;
  margin-top: 15px;
  background: url("../../static/image/modules.png") no-repeat 0 9999px;
  background-position: 0px -0px;
}
.zy-search-div input {
  width: 80%;
  margin: 10px 0 0 34px;
  border: 0;
  background: transparent;
  font-size: 12px;
}
.zy-wrap {
  display: block;
  position: absolute;
  z-index: 999;
  top: 56px;
  width: 300px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
}
.zy-show {
  width: 100%;
  height: 4px;
  background: url("../../static/image/bort.png") repeat-x;
}
.zy-wrap h2 {
  width: 280px;
  height: 33px;
  padding-left: 20px;
  line-height: 34px;
  font-size: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.zy-wrap ul li {
  width: 100%;
  height: 34px;
  padding-left: 20px;
  line-height: 34px;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  list-style: none;
}
.zy-wrap ul li:hover {
  background: rgb(247, 245, 245);
}
.zy-shop {
  width: 36px;
  height: 36px;
  position: relative;

  margin: 17px 0 0 41px;
}
.zy-shop a {
  display: inline-block;
  width: 36px;
  height: 36px;
  background: url("../../static/image/modules.png") no-repeat 0 9999px;
  background-position: -110px -158px;
  cursor: pointer;
  text-decoration: none;
}
.zy-shop .num {
  position: absolute;

  top: -8px;
  left: 26px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: url("../../static/image/modules.png") no-repeat 0 9999px;
  background-position: -156px -158px;
}
.zy-user {
  width: 62px;
  height: 36px;
  margin: 15px 0 0 37px;
  font-size: 12px;
  background: url("../../static/image/arrow-d.png") no-repeat 110% center;
}
.zy-user:hover .zy-user-center ul {
  display: block;
}
.zy-user:hover {
  background: url("../../static/image/arrow-u.png") no-repeat 110% center;
}
.zy-user-center {
  z-index: 99;
  width: 62px;
  height: 36px;
  position: relative;
}
.zy-login {
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
}
.zy-user-center ul {
  display: none;
  position: absolute;
  z-index: 100;
  top: 54px;
  left: -61px;
  width: 160px;
  height: auto;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
}
.zy-user-center ul li {
  padding-left: 24px;
  font-size: 12px;
  color: #333;
  background-color: #fff;
}
.zy-user-center ul li:hover {
  background: rgb(252, 249, 249);
}
.zy-user-center ul li a {
  display: block;
  width: 134px;
  padding-left: 1px;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
}
.zy-user-center ul li a em {
  display: inline-block;
  position: relative;
  top: 4px;
  width: 18px;
  height: 18px;
  margin-right: 9px;
  cursor: pointer;
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.zy-phone {
  height: 16px;
  background: url("../../static/image/phonelog.png") no-repeat;
}
.zy-wei {
  height: 16px;
  background: url("../../static/image/logins.png") no-repeat 0 9999px;
  background-position: -84px -0px;
}
.zy-qq {
  height: 16px;
  background: url("../../static/image/logins.png") no-repeat;
  background-position: -112px -0px;
}
.zy-wb {
  height: 16px;
  background: url("../../static/image/sina.png") no-repeat;
}
.zy-zh {
  height: 16px;
  background: url("../../static/image/netease.png") no-repeat;
} */
.zy-tab {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.zy-tab-center {
  width: 1100px;
  margin: 0 auto;
}
.zy-tab-center ul {
  width: 100%;
  height: 80px;
  width: 100%;
  height: 80px;
}
.zy-tab-center ul li {
  float: left;
  width: 275px;
  height: 80px;
  list-style: none;
}
.zy-tab-center ul li a {
  float: left;
  width: 250px;
  padding: 0 10px;
  height: 80px;
  text-align: center;
  font-size: 0;
  display: block;
  cursor: pointer;
  position: relative;
}
.zy-tab-center ul li a img {
  display: inline-block;
  width: 55px;
  height: 55px;
  vertical-align: top;
  padding-top: 16px;
}
.zy-tab-center ul li a span {
  display: inline-block;
  max-width: 190px;
  height: 80px;
  padding-left: 12px;
  line-height: 80px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;
}
.zy-line {
  display: inline-block;
  height: 48px;
  width: 1px;
  margin: 16px 0 16px 0;
  background-color: #000000;
  filter: alpha(opacity=10);
  -moz-opacity: 0.1;
  opacity: 0.1;
}
.zy-tab-center ul li a .count {
  display: inline-block;
  font-size: 14px;
  color: #d33a31;
  position: absolute;

  top: 22px;

  left: 120px;
}
.zy-tab-center ul li a .jifen {
  display: inline-block;
  padding: 2px 0 0 4px;
  font-size: 12px;
  color: #d33a31;
  position: absolute;

  top: 20px;

  left: 140px;
}

.zy-main {
  width: 1100px;
  min-height: 750px;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 160px;
}
.zy-ma {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.zy-img {
  width: 100%;
  margin-top: 40px;
  height: 300px;
}
.zy-left {
  float: left;
  width: 542px;
  height: 300px;
  padding-right: 16px;
}
.zy-right {
  float: left;
  width: 542px;
  height: 300px;
}
.img {
  width: 100%;
  height: 100%;
}
.zy-product {
  min-height: 816px;
  margin-top: 50px;
  width: 100%;
  height: auto;
}
.zy-tui {
  font-weight: bold;
  font-size: 24px;
  color: #333;
}
.zy-list ul {
  margin-top: 20px;
  width: 100%;
  height: auto;
}
.zy-list ul li {
  float: left;
  position: relative;
  width: 263px;
  height: 382px;
  margin-right: 10px;
}
.zy-list ul li a {
  width: 263px;
  height: 263px;
  background-color: #f9f9f9;
  cursor: pointer;
  position: relative;
  display: block;
}
.zy-list ul li a img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
.span1 {
  width: 60px;
  height: 60px;
  position: absolute;

  top: 10px;
  left: 10px;
  background-color: #d33a31;
  border-radius: 50%;
  color: #fff;
}
.span2 {
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
}
.span3 {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 13px;
  opacity: 0.7;
  text-decoration: line-through;
}
.zy-title {
  margin-top: 10px;
  text-align: center;
}
.zy-title {
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.zy-title p {
  font-size: 16px;
  color: #d33a31;
  padding-top: 4px;
}
.zy-active {
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #f9f9f9;
  cursor: pointer;
  margin-top: 10px;
}
.zy-active-left {
  width: 700px;
  margin: 0 20px 0 60px;
}
.zy-active-right {
  top: 30px;
  right: 50px;
  width: 210px;
  height: 120px;
  position: absolute;
}
.zyal {
  height: 180px;
}
.zyal span {
  display: block;
  padding-top: 28px;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
}
.zyal span i {
  position: relative;
  top: 5px;
  margin-right: 10px;
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url("../../static/image/digitalicon.png") no-repeat;
}
.zyal p {
  position: relative;
  margin-top: 9px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
}
.zyal a {
  display: block;
  margin-top: 18px;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
.sml {
  position: absolute;
  top: 15px;
  left: 0;
  width: 100px;
  height: 100px;
}
.big {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 60px;
  width: 120px;
  height: 120px;
}
.cirle {
  position: absolute;
  top: 0;
  left: 175px;
  width: 35px;
  height: 120px;
  border: none;
  background: url("../../static/image/pointlist.png") no-repeat 0 9999px;
  background-position: 0px -73px;
}
.mlock {
  margin-top: 50px;
}
</style>
