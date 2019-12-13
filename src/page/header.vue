<template>
  <div class="z-header">
    <div class="z-header-top">
      <div class="z-header-top-center">
        <h1 class="z-logo"></h1>
        <ul class="z-ul">
          <li>
            <span class="span">
               <router-link  @click.native="dd(1)" :class="dian == 1 ? 'z-fx':''" to="/">
                  <em>发现音乐</em>
                <span :class="dian == 1 ? 'z-sj':''" ></span>
              </router-link>
            </span>
          </li>
          <li>
            <span class="span">
              <router-link  @click.native="dd(2)" :class="dian == 2 ? 'z-fx':''" :to="{path:'/my'}">
                 <em>我的音乐</em>
                 <span :class="dian == 2 ? 'z-sj':''"  ></span>
              </router-link>
            </span>
          </li>
          <li>
            <span class="span">
               <router-link  @click.native="dd(3)" :class="dian == 3 ? 'z-fx':''" :to="{path:'/friend'}">
                  <em>朋友</em>
                  <span :class="dian == 3 ? 'z-sj':''" ></span>
                  <i class="z-crile"></i>
              </router-link>
            </span>
          </li>
          <li>
            <span class="span">
               <router-link  @click.native="dd(4)" :class="dian == 4 ? 'z-fx':''" :to="{path:'/product'}" target="_blank" >
                  <em>商城</em>
                <span :class="dian == 4 ? 'z-sj':''" ></span>
              </router-link>
            </span>
          </li>
          <li>
            <span class="span">
               <router-link  @click.native="dd(5)" :class="dian == 5 ? 'z-fx':''" to="">
                <em>音乐人</em>
                <span :class="dian == 5 ? 'z-sj':''" ></span>
              </router-link>
            </span>
          </li>
          <li>
            <span class="span">
              <router-link  @click.native="dd(6)" :class="dian == 6 ? 'z-fx':''" :to="{path:'/download'}">
                <em>下载客户端</em>
                <span :class="dian == 6 ? 'z-sj':''" ></span>
                <i class="z-hot"></i>
              </router-link>
            </span>
          </li>
        </ul>
        <div class="z-sculputer">
          <a class="z-login ">登录</a>
          <div class="z-login-list z-denglu">
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
    <div class="z_tbu"  v-if="dian != 1 "></div>
    <div class="z-header-bottom" v-if="dian == 1 ">
      <div class="z-header-bottom-center">
        <ul class="z-nav">
          <li>
            <router-link @click.native="tjian(1)"  :to="{path:'/'}">
             <em :class="tjianw==1? 'em_active':''">推荐</em>
            </router-link>
          </li>
          <li>
            <router-link @click.native="tjian(2)"  :to="{path:'/discover/toplist'}">
              <em :class="tjianw==2? 'em_active':''">排行榜</em>
            </router-link>
          </li>
          <li>
            <router-link  @click.native="tjian(3)"  :to="{path:'/discover/playlist'}"  >
              <em :class="tjianw==3? 'em_active':''">歌单
                <span class="z-hr"></span>
              </em>
            </router-link>
          </li>
          <li>
            <router-link  @click.native="tjian(4)"  :to="{path:'/discover/djradio'}" >
                <em :class="tjianw==4? 'em_active':''">主播电台</em>
            </router-link>
          </li>
          <li>
            <router-link  @click.native="tjian(5)"  :to="{path:'/discover/artist'}" >
                 <em :class="tjianw==5? 'em_active':''">歌手</em>
            </router-link>
          </li>
          <li>
             <router-link  @click.native="tjian(6)"  :to="{path:'/discover/playlist'}" >
                <em :class="tjianw==6? 'em_active':''">新碟上架</em>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {
       dian:1,
       tjianw:1,
       luyou:['/','/discover/toplist','/discover/playlist','','/discover/artist','']
     }
   },
   methods: {
     dd(val){
       this.dian = val
     },
     tjian(val){
      this.tjianw = val;
     }
   },
   mounted() {
       console.log(this.$route.path)
       this.tjianw = this.luyou.indexOf(this.$route.path)  + 1
       console.log(this.tjianw)
   },
  watch:{
    $route(to,from){

    }
},
}

</script>

<style scoped>
.z_tbu{
  width: 100%;
  height: 5px;
  height: 5px;
  box-sizing: border-box;
  background-color: #C20C0C;
}
li {
  list-style: none;
}
a {
  cursor: pointer;
  outline: none;
}
.z-header {
  width: 100%;
  /* height: 74.98px; */
  /* overflow: hidden; */
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
.z-header::after{
   clear: both;
   content: ".";
   display: block;
   visibility: hidden;
   height: 0px;
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
.z-ul li:hover .span em{
  color: #fff;
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
.span .z-fx  em{
   color: #fff;
}
.span em{
  font-weight: 400;
  color: #ccc;
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
  text-align: center;
}
.z-autor:hover{
  text-decoration: none;
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
  line-height: 21px;
}
.z-nav li a em {
  display: inline-block;
  height: 20px;
  padding: 0 13px;
  margin: 7px 17px 0;
  font-weight: 400
}
.em_active{
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
.z-denglu{
  z-index: 999999;
}
</style>