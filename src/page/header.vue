<template>
  <div class="z-header">
    <div class="z-header-top">
      <div class="z-header-top-center">
        <h1 class="z-logo"></h1>
        <ul class="z-ul">
          <li>
            <span class="span">
              <a class="z-fx">
                <em>发现音乐</em>
                <span class="z-sj"></span>
              </a>
            </span>
          </li>
          <li>
            <span class="span">
              <a>
                <em>我的音乐</em>
                <span class="z-sj" style="display:none"></span>
              </a>
            </span>
          </li>
          <li>
            <span class="span">
              <a>
                <em>朋友</em>
                <span class="z-sj" style="display:none"></span>
                <i class="z-crile"></i>
              </a>
            </span>
          </li>
          <li>
            <span class="span">
              <a>
                <em>商城</em>
                <span class="z-sj" style="display:none"></span>
              </a>
            </span>
          </li>
          <li>
            <span class="span">
              <a>
                <em>音乐人</em>
                <span class="z-sj" style="display:none"></span>
              </a>
            </span>
          </li>
          <li>
            <span class="span">
              <a>
                <em>下载客户端</em>
                <span class="z-sj" style="display:none"></span>
                <i class="z-hot"></i>
              </a>
            </span>
          </li>
        </ul>
        <div class="z-sculputer">
          <a class="z-login">登录</a>
          <div class="z-login-list">
            <ul>
              <li>
                <a>
                  <i></i>
                  <em>我的主页</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>我的消息</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>我的等级</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>VIP会员</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>个人设置</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>实名认证</em>
                </a>
              </li>
              <li>
                <a>
                  <i></i>
                  <em>退出</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a class="z-autor">创作者中心</a>
        <div class="z-search">
          <div class="z-search-center">
            <input placeholder="音乐/视频/电台/用户" />
          </div>
        </div>
      </div>
    </div>
    <div class="z-header-bottom">
      <div class="z-header-bottom-center">
        <ul class="z-nav">
          <li>
            <a>
              <em>推荐</em>
            </a>
          </li>
          <li>
            <a>
              <em>排行榜</em>
            </a>
          </li>
          <li>
            <a>
              <em>歌单
                <span class="z-hr"></span>
              </em>
            </a>
          </li>
          <li>
            <a>
              <em>主播电台</em>
            </a>
          </li>
          <li>
            <a>
              <em>歌手</em>
            </a>
          </li>
          <li>
            <a>
              <em>新碟上架</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
li {
  list-style: none;
}
a {
  cursor: pointer;
  outline: none;
}
.z-header {
  width: 100%;
  height: 104.98px;
}
.z-header-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
}
.z-header-top-center {
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  /* background: grey; */
}
.z-header-bottom {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
}
.z-header-bottom-center {
  width: 1100px;
  height: 34px;
  margin: 0 auto;
}
.z-logo {
  float: left;
  width: 176px;
  height: 69px;
  background: url("../../static/image/topbar.png") no-repeat 0 9999px;
  background-position: 0 0;
}
.z-ul {
  float: left;
}
.z-ul li {
  position: relative;
  background-position: right -300px;
  float: left;
  height: 70px;
  font-size: 14px;
}
.z-ul li:hover {
  background: #000;
}
.z-ul li .span {
  float: left;
  height: 70px;
  font-size: 14px;
}
.z-ul li .span a {
  display: block;
  padding: 0 19px;
  text-align: center;
  line-height: 70px;
  float: left;
  height: 70px;
  font-size: 14px;
  color: #ffffff;
}
.z-ul li em {
  font-style: normal;
  text-align: left;
  float: left;
  height: 70px;
  font-size: 14px;
}
.z-sj {
  display: block;
  position: absolute;
  left: 50%;
  top: 64px;
  width: 12px;
  height: 7px;
  margin-left: -6px;
  overflow: hidden;
  background: url("../../static/image/topbar.png") no-repeat 0 9999px;
  background-position: -226px 0;
}
.z-fx {
  background: #000;
  text-decoration: none;
  color: #fff;
}
.z-crile {
  display: block;
  position: absolute;
  top: 24px;
  left: 54px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: #c20c0c;
}
.z-hot {
  display: block;
  position: absolute;
  top: 21px;
  left: 100px;
  width: 28px;
  height: 19px;
  background: url("../../static/image/topbar.png") no-repeat 0 9999px;
  background-position: -190px 0;
}
.z-sculputer {
  position: relative;
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
}
.z-login {
  display: block;
  width: 35px;
  margin-top: 7px;
  color: #787878;font-size: 12px
}
.z-autor {
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 4px;
  border: 1px solid #4f4f4f;
  background-position: 0 -140px;
  line-height: 33px;
  color: #ccc;
  border-radius: 20px;
  font-size: 12px;
}
.z-autor:hover{
  border: 1px solid #fff;
}
.z-search {
  float: right;
  width: 158px;
  height: 32px;
}
.z-search-center {
  margin-top: 19px;
  background: url("../../static/image/topbar.png") no-repeat 0 9999px;
  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
  float: right;
  width: 158px;
  height: 32px;
}
.z-search-center input {
  color: #333;
  line-height: 16px;
  width: 95%;
  margin: 0;
  padding-top: 10px;
  padding-left: 27px;
  font-size: 12px;
  background: transparent;
  border: none;
  display: block;
  color: #9b9b9b;
  cursor: text;
}
.z-nav {
  float: left;
  padding-left: 180px;
}
.z-nav li {
  float: left;
  height: 34px;
  text-align: center;
}
.z-nav li a em:hover {
  border-radius: 20px;
  line-height: 21px;
  background: #9b0909;
  height: 20px;
  padding: 0 13px;
}
.z-nav li a {
  float: left;
  height: 34px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  position: relative;
}
.z-nav li a em {
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
}
.z-nav li:nth-child(1) a em {
  border-radius: 20px;
  line-height: 21px;
  background: #9b0909;
}
.z-login-list {
  position: absolute;
  top: 38px;
  right: -43px;
  width: 158px;
  background: #2b2b2b;
  border: 1px solid #202020;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: none;
}
.z-sculputer:hover .z-login-list {
  display: block;
}
.z-login-list ul li {
  float: left;
  box-sizing: border-box;
  width: 100%;
}
.z-login-list ul li a {
  float: left;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  line-height: 34px;
  position: relative;
  overflow: hidden;
  padding-left: 24px;
  color: #ccc;
}
.z-login-list ul li a i {
  float: left;
  width: 18px;
  height: 18px;
  margin: 7px 10px 0 0;
}
.z-login-list ul li:nth-child(1) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: 0 -80px;
}
.z-login-list ul li:nth-child(2) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: -20px -120px;
}
.z-login-list ul li:nth-child(3) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: 0 -100px;
}
.z-login-list ul li:nth-child(4) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: 0 -221px;
}
.z-login-list ul li:nth-child(5) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: 0 -140px;
}
.z-login-list ul li:nth-child(6) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: -20 -142px;
}
.z-login-list ul li:nth-child(7) a i {
  background: url("../../static/image/toplist.png") no-repeat;
  background-position: 0 -200px;
}
.z-login-list ul li a em {
  float: left;
  font-size: 12px;
}
.z-login-list ul li:hover{
  background-color: rgb(66, 65, 65);
}
.z-hr {
  display: inline-block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: 2px;
  background: url("../../static/image/white-r-icon@3x.png") no-repeat;
  background-size: cover;
}
</style>