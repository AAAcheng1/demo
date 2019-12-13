<template>
  <div class="zy-header">
    <div class="zy-header-center">
      <div class="zy-logo f-fl">
        <a></a>
      </div>
      <div class="zy-search f-fl" @click="get">
        <div class="zy-search-center">
          <div class="zy-search-div">
            <input placeholder="真无线耳机" v-model="msg" />
          </div>
          <div class="zy-wrap" v-show="show">
            <div class="zy-show"></div>
            <h2>热门搜索</h2>
            <ul>
              <li v-for="(item, index) in arr" :key="index" @click="send(item)">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="zy-shop f-fl">
        <a></a>
        <span class="num">0</span>
      </div>
      <div class="zy-user f-fl">
        <div class="zy-user-center">
          <div class="zy-login">登录</div>
          <ul>
            <li>
              <a>
                <em class="zy-phone"></em>
                手机登录
              </a>
            </li>
            <li>
              <a>
                <em class="zy-wei"></em>
                微信登录
              </a>
            </li>
            <li>
              <a>
                <em class="zy-qq"></em>
                QQ登录
              </a>
            </li>
            <li>
              <a>
                <em class="zy-wb"></em>
                新浪微博登录
              </a>
            </li>
            <li>
              <a>
                <em class="zy-zh"></em>
                网易邮箱账号登录
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      arr: ["花", "耳机", "服装", "蓝牙", "乐器"],

      msg: ""
    };
  },
  methods: {
    get() {
      this.show = !this.show;
    },
    send(index) {
      this.msg = index;
    }
  }
};
</script>

<style scoped>
.zy-header {
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
}
</style>
