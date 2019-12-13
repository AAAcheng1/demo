<template>
  <div class="s-container">
    <div class="s-weima">
      <img src="//p1.music.126.net/wCRnpjXHpGRiq1c1uCkIFQ==/109951164246717547.png" alt  style="width:100px;heigth;100px;background:red"/>
      <p>扫描二维码下载</p>
    </div>
    <div class="s-down">
      <div class="s-main">
        <div class="s-com">
          <div class="s-main-title">在电脑上听</div>
          <img src="../../static/image/109951164207162781.png" class="s-main-img" alt />
          <div class="s-main-type">
            <span>
              <i class="s-icon"></i>
              macOS
            </span>
            <span style="padding-left: 30px">
              <i class="s-icon s-icon1"></i>
              Windows
            </span>
          </div>
          <div class="s-d">下载电脑端</div>
        </div>
        <div class="s-com1" style="float:right">
          <div class="s-main-title">在手机上听</div>
          <img src="../../static/image/109951164207180884.png" class="s-main-img" alt />
          <div class="s-main-type">
            <span>
              <i class="s-icon"></i>
              iPhone
            </span>
            <span style="padding-left: 30px">
              <i class="s-icon s-icon1"></i>
              Android
            </span>
          </div>
          <div class="s-d">
            <i class="ma"></i>
            下载手机端
          </div>
        </div>
      </div>
      <div class="s-dd">
        <i class="s-cc"></i>
        下载全部客户端
      </div>
      <div></div>
    </div>
    <div>
      <div class="s-dnc">
        <div class="s-dc">
          <div class="s-dnc-lt">
            <h3 class="s-ff">千万曲库 首首CD音质</h3>
            <p class="s-pp">
              囊括百万无损SQ音乐，你在用手机听歌时，
              <br />也能感受到纤毫毕现的CD音质，更能免费离线收听
            </p>
          </div>
          <div class="s-dnc-rt">
            <img src="../../static/image/ss-1.jpg" alt />
          </div>
        </div>
      </div>
      <div class="s-dnc" style="background: #f8f8f8">
        <div class="s-dc">
          <div class="s-dnc-lt">
            <img src="../../static/image/ss-2.jpg" alt />
          </div>
          <div class="s-dnc-rt">
            <h3 class="s-ff">千位明星 亲自推荐音乐</h3>
            <p class="s-pp">
              韩红，戴佩妮等
              <em>千位明星已入驻</em>，亲自创建私房歌单，录制独
              <br />家DJ节目，推荐他们心中的好音乐
            </p>
          </div>
        </div>
      </div>
      <div class="s-dnc">
        <div class="s-dc">
          <div class="s-dnc-lt">
            <h3 class="s-ff">社交关系 发现全新音乐</h3>
            <p class="s-pp">
              你可以
              <em>关注明星</em>、DJ和好友，通过浏览他们的动态、收藏和
              <br />分享，发现更多全新好音乐
            </p>
          </div>
          <div class="s-dnc-rt">
            <img src="../../static/image/ss-3.jpg" alt />
          </div>
        </div>
      </div>
      <div class="s-dnc" style="background: #f8f8f8">
        <div class="s-dc">
          <div class="s-dnc-lt">
            <img src="../../static/image/ss-4.jpg" alt />
          </div>
          <div class="s-dnc-rt">
            <h3 class="s-ff">手机电脑 歌单实时同步</h3>
            <p class="s-pp">
              只要一个帐号，你就可以同步在手机、电脑上创建、收藏
              <br />的歌单，
              <em>随时随地畅享好音乐</em>
            </p>
          </div>
        </div>
      </div>
      <div class="s-dnc">
        <div class="s-dc s-ccdxia">
          <div class="s-dnc-lt">
            <h3 class="s-ff s-ftingge">听歌识曲 助你疯狂猜歌</h3>
            <p class="s-pp">
              歌曲很动听却不知道歌名，歌名在嘴边却想不起来……
              <br />用
              <em>听歌识曲</em>
              功能，几秒钟就知道歌名
            </p>
          </div>
          <div class="s-dnc-rt">
            <img src="../../static/image/ss-5.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.s-weima p{
  margin-top: 10px;
}
.s-weima img{ 
width: 100px;
    height: 100px;
}
.s-weima {
  position: fixed;
  z-index: 10;
  top: 395px;
  right: 25px;
  padding: 16px 18px 9px;
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #333;
  font-size: 12px;
  top: 325px;
  text-align: center;
}
.s-pp em {
  color: #cc0000;
}
.s-pp {
  font-size: 16px;
  color: #666;
  line-height: 24px;
}
.s-ff {
  font-size: 40px;
  font-weight: normal;
  padding: 45px 0 5px 0;
}
.s-dnc-rt {
  float: right;
}
.s-dnc-lt {
  float: left;
  margin-left: 30px;
}
.s-dc {
  width: 982px;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}
.s-dnc {
  background: #fff;
  height: 437px;
  border-bottom: 1px solid #e3e3e3;
}
.s-cc {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-right: 6px;
  background: url(../../static/image/xx.png) no-repeat;
  background-size: contain;
  vertical-align: text-bottom;
}
.s-dd {
  position: absolute;
  line-height: 60px;
  height: 60px;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
.ma {
  display: inline-block;
  width: 21px;
  height: 21px;
  margin-right: 3px;
  background: url(../../static/image/ma.png) no-repeat center;
  background-size: contain;
  vertical-align: -3px;
}
.s-com1 .s-main-type .s-icon.s-icon1 {
  background: url(../../static/image/moc3.png) no-repeat;
  background-size: contain;
  float: left;
  margin-right: 11px;
  width: 24px;
  height: 24px;
}
.s-com1 .s-main-type .s-icon {
  background: url(../../static/image/moc2.png) no-repeat;
  background-size: contain;
  float: left;
  margin-right: 11px;
  width: 24px;
  height: 24px;
}
.s-com1 .s-main-img {
  width: 246px;
  height: 273px;
}
.s-com1 {
  position: relative;
  display: inline-block;
  margin-left: 220px;
  width: 300px;
  height: 100%;
  text-align: center;
}
.s-d:hover {
  opacity: 0.7;
}
.s-d {
  width: 300px;
  height: 65px;
  margin: 0 auto;
  border-radius: 65px;
  background-color: #fff;
  color: #d10000;
  font-size: 22px;
  line-height: 65px;
  text-align: center;
  cursor: pointer;
  box-sizing: content-box;
}
.s-main-type span .s-icon.s-icon1 {
  background: url(../../static/image/moc1.png) no-repeat;
  background-size: contain;
  float: left;
  margin-right: 11px;
  width: 24px;
  height: 24px;
}
.s-main-type span .s-icon {
  background: url(../../static/image/moc.png) no-repeat;
  background-size: contain;
  float: left;
  margin-right: 11px;
  width: 24px;
  height: 24px;
}
.s-main-type span {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #eee;
  text-align: center;
}
.s-main-type {
  width: 100%;
  margin: 20px auto;
  font-size: 16px;
  color: #eee;
  text-align: center;
}
.s-main-img {
  width: 464px;
  height: 273px;
  margin: 0 auto 3px;
}
.s-main-title {
  width: 100%;
  text-align: center;
  font-size: 22px;
  opacity: 0.8;
  color: #ffffff;
  margin-bottom: 23px;
}
.s-com {
  width: 556px;
  height: 100%;
  text-align: center;
  float: left;
}
.s-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #222;
  background-size: cover;
}
.s-down {
  position: relative;
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
.s-main {
  width: 1100px;
  margin: 0 auto;
  padding: 80px 0 112px;
  overflow: hidden;
}
.s-ccdxia{
   padding-top: 50px;
}
.s-ftingge{
  padding-top: 130px;
}
</style>