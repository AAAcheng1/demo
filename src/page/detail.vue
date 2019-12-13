<template>
  <div>
    <!-- <header1></header1> -->
    <div class="g-bd4 f-cb">
      <div class="g-mn4">
        <div class="g-mn4c">
          <div class="g-wrap6">
            <div class="m-info f-cb">
              <div class="cover u-cover u-cover-dj">
                <img :src="obj1.coverImgUrl" />
                <span class="msk"></span>
              </div>
              <div class="cnt">
                <div class="cntc">
                  <div class="hd f-cb">
                    <i class="f-fl u-icn u-icn-13 f-pr ">
                      <div
                        class="f-pa f-r-white-icon"
                        style="display:inline-block;width:8px;height:8px;top:2px;background-size:cover;left:34px;"
                      ></div>
                    </i>
                    <div class="tit">
                      <h2 class="f-ff2 f-brk">{{obj1.name}}</h2>
                    </div>
                  </div>
                  <div class="user f-cb">
                    <a class="face">
                      <img
                        :src="creator.avatarUrl"
                      />
                    </a>
                    <span class="name">
                      <a class="s-fc7">{{creator.nickname}}</a>
                    </span>
                    <span class="time s-fc4">2019-07-21&nbsp;创建</span>
                  </div>
                  <div class="btns f-cb">
                    <a class="u-btn2 u-btn2-2 u-btni-addply f-fl">
                      <i>
                        <em class="ply"></em>播放
                      </i>
                    </a>
                    <a class="u-btni u-btni-add"></a>
                    <a class="u-btni u-btni-fav">
                      <i>(694)</i>
                    </a>
                    <a class="u-btni u-btni-share">
                      <i @click="enjoy">(34)</i>
                    </a>
                    <a class="u-btni u-btni-dl">
                      <i @click="bg">下载</i>
                    </a>
                    <a class="u-btni u-btni-cmmt">
                      <i>
                        (
                        <span id="cnt_comment_count">45</span>)
                      </i>
                    </a>
                  </div>
                  <div class="tags f-cb">
                    <b>标签：</b>
                    <a class="u-tag" v-for="(item,index) in obj1.tags" :key="index">
                      <i>{{item}}</i>
                    </a>
                  </div>
                  <div id="album-desc-dot" class="intr f-brk" v-if="!a">
                    <div class="intr f-brk" v-for="(item,index) in intr" :key="index">{{item}}</div>
                  </div>
                  <div id="album-desc-more" class="intr f-brk f-hide" v-else>
                    <div
                      class="intr f-brk"
                      v-for="(item,index) in b"
                      :key="index"
                    >{{item}}</div>
                  </div>
                  <div class="f-cb">
                    <a
                      id="album-desc-spread"
                      href="javascript:;"
                      class="s-fc7 f-fr"
                      @click="getintr"
                    >
                      {{msg}}
                      <i :class="a ? 'u-icn-70':'u-icn-69'" class="u-icn "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="g_kk">
              <footer1></footer1>
            </div>
          </div>
        </div>
      </div>
      <div class="g-sd4">
        <div class="g-wrap7">
          <h3 class="u-hd3">
            <span class="f-fl">喜欢这个歌单的人</span>
          </h3>
          <ul class="m-piclist f-cb">
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/T3OHxsRkvuoXKjA5OZOf9Q==/18532268486899390.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/EUBtA3OmUqj0uPOHa4vtHQ==/109951164191533395.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/GIxgjpcfD09bfmMSFw2NFA==/18986366788934233.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/pX7EK1XknNOLN5affntzTA==/109951164514674268.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=40y40"
                />
              </a>
            </li>
            <li>
              <a class="f-tdn">
                <img
                  src="http://p1.music.126.net/-sBug21ObEWw2aR-i8UtVQ==/109951164073747466.jpg?param=40y40"
                />
              </a>
            </li>
          </ul>
          <h3 class="u-hd3">
            <span class="f-fl">相关推荐</span>
          </h3>
          <ul class="m-rctlist f-cb">
            <li>
              <div class="cver u-cover u-cover-3">
                <a>
                  <img
                    src="http://p2.music.126.net/vNFJjVOzWfpBNhN0Jdcu7g==/109951163612210867.jpg?param=50y50"
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-thide">
                  <a class="sname f-fs1 s-fc0">MG动画 PPT 产品展示背景音乐</a>
                </p>
                <p>
                  <span class="by s-fc4">by</span>
                  <a class="nm nm f-thide s-fc3">树莓小雪糕</a>
                  <sup class="u-icn u-icn-84"></sup>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover u-cover-3">
                <a>
                  <img
                    src="http://p2.music.126.net/puQN2fMfU-1zL_tpIq8RQg==/1412872450475524.jpg?param=50y50"
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-thide">
                  <a class="sname f-fs1 s-fc0">宝岛遗珠｜独立音乐概览·台湾</a>
                </p>
                <p>
                  <span class="by s-fc4">by</span>
                  <a class="nm nm f-thide s-fc3">原创君</a>
                  <sup class="icn u-icn2 u-icn2-music2"></sup>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover u-cover-3">
                <a>
                  <img
                    src="http://p2.music.126.net/YZz9NSF9C2VjOSV-05Ugiw==/18726882046507595.jpg?param=50y50"
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-thide">
                  <a class="sname f-fs1 s-fc0">【YouTube】精选曲目 | Top60</a>
                </p>
                <p>
                  <span class="by s-fc4">by</span>
                  <a class="nm nm f-thide s-fc3">KIRIN_Music</a>
                  <sup class="u-icn u-icn-84"></sup>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover u-cover-3">
                <a>
                  <img
                    src="http://p2.music.126.net/ifYJK2CpWA7pOyMbaFdThA==/109951164124616730.jpg?param=50y50"
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-thide">
                  <a class="sname f-fs1 s-fc0">「 BGM Pr」用温柔的方式也可以震撼世界</a>
                </p>
                <p>
                  <span class="by s-fc4">by</span>
                  <a class="nm nm f-thide s-fc3">Amber丶Queen</a>
                  <sup class="u-icn u-icn-84"></sup>
                </p>
              </div>
            </li>
            <li>
              <div class="cver u-cover u-cover-3">
                <a>
                  <img
                    src="http://p2.music.126.net/b7pJUSOxJM1qj7VKz1Bn0Q==/3377699721318431.jpg?param=50y50"
                  />
                </a>
              </div>
              <div class="info">
                <p class="f-thide">
                  <a class="sname f-fs1 s-fc0">王菲的绝美粤语</a>
                </p>
                <p>
                  <span class="by s-fc4">by</span>
                  <a class="nm nm f-thide s-fc3">蚂蚁kitten蚂蚁</a>
                </p>
              </div>
            </li>
          </ul>
          <div class="m-multi">
            <h3 class="u-hd3">
              <span class="f-fl">网易云音乐多端下载</span>
            </h3>
            <ul class="bg f-cb">
              <li>
                <a class="ios">iPhone</a>
              </li>
              <li>
                <a class="pc">PC</a>
              </li>
              <li>
                <a class="aos">Android</a>
              </li>
            </ul>
            <p class="s-fc4">同步歌单，随时畅听320k好音乐</p>
          </div>
        </div>
      </div>
    </div>
     <!-- 分享-->
    <div class="pannel_box" v-show="show">
      <div class="pannel">
        <div class="title" id="title_1">
          <div class="enjoy">分享</div>
        </div>
        <div class="content">
          <div style="padding: 0;position: relative;">
            <div class="content_main">
              <ul class="ulAAa">
                <li class="lione">
                  <a href="#" class="lione_a"><em>分享给大家</em></a>
                </li>
                <li class="lione">
                  <a href="#" class="litwo_a"><em>私信分享</em></a>
                </li>
              </ul>
              <div style="disolay:block" class="enjoy_div">
                <div class="content_main_A" style="display:block">
                  <textarea class="textA"></textarea>

                  <div class="say_w">
                    <i class="highlight"></i>
                    <div class="say_w_bo">
                      <p class="f-thide">
                        歌单：云音乐新歌榜&nbsp;by&nbsp;网易云音乐
                      </p>
                    </div>
                  </div>
                </div>
                <div class="qq_btn">
                  <div class="qq_btn_a">
                    <i class="btn_one"></i>
                    <i
                      class="btn_one"
                      style="background-position: -60px -490px"
                    ></i>
                    <i
                      class="btn_one"
                      style="background-position: 0 -980px"
                    ></i>
                  </div>
                  <span class="qq_btn_b">140</span>
                </div>
                <div class="fenxiang">
                  <div class="btnwrap f-fl">
                    <a
                      class="u-btn2 u-btn2-2 u-btn2-w2 j-flag"
                      hidefocus="true"
                      href="javascript:;"
                      data-action="share"
                      ><i>分享</i></a
                    >
                    <a
                      class="u-btn2 u-btn2-1 u-btn2-w2 j-flag"
                      hidefocus="true"
                      href="javascript:;"
                      data-action="close"
                      ><i>取消</i></a
                    >
                  </div>

                  <div class="f-cb j-flag f-fr" style="float: right">
                    <div class="share">
                      <span class="f-fl s-fc3">同时分享到：</span>
                      <ul class="u-logo u-logo-s f-cb">
                        <li>
                          <a
                            class="u-slg u-slg-sn j-t u-slg-sn-gray"
                            data-action="sns"
                            data-type="2"
                            hidefocus="true"
                            href="#"
                            title="新浪微博"
                          ></a>
                        </li>
                        <li>
                          <a
                            style="background-position: -48px -25px;"
                            class="u-slg u-slg-db j-t u-slg-sn-gray"
                            data-action="sns"
                            data-type="3"
                            hidefocus="true"
                            href="#"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="u-err j-flag" style="display: none;">
                  <i class="u-icn u-icn-25"></i><span></span>
                </div>
              </div>
              <div style="display:none" class="enjoy_div">
                <div class="pen">
                  <div class="pen_main">
                    <div class="pen_main_txt">
                      <div class="pen_main_txt_ma" @click="toggle">
                        <span class="txt_span" style="float:left">
                          <input
                            type="text"
                            class="txt_span_in"
                            id="auto-id-aUDD5NGpDHl7cN8h"
                          />
                          <label
                            class="holder_label"
                            style="display: block; cursor: text;"
                            >选择或输入好友昵称</label
                          ></span
                        >
                      </div>
                      <ul  v-show="isshow"  class="lie"  id="auto-id-xDs0LEltRlAIoIoT" >
                        <li
                          class="j-item j-selected"
                          data-userid="9003"
                          data-username="云音乐小秘书"
                          data-index="0"
                        >
                          <a href="#" class="activea noacyivea"
                            ><img
                              src="http://p1.music.126.net/_aEPXmHuskM-g140GROZnQ==/109951163879490620.jpg?param=30y30"
                            /><i class="txti">云音乐小秘书</i></a
                          >
                        </li>
                        <li
                          class="j-item"
                          data-userid="48353"
                          data-username="网易UFO丁磊"
                          data-index="1"
                        >
                          <a href="#" class="activea"
                            ><img
                              src="http://p1.music.126.net/pRDRt-ChX4Qg5FyMwTGXKg==/109951164440873447.jpg?param=30y30"
                            /><i class="txti">网易UFO丁磊</i></a
                          >
                        </li>
                        <li
                          class="j-item"
                          data-userid="3375937"
                          data-username="房东的猫房东的猫"
                          data-index="2"
                        >
                          <a href="#" class="activea"
                            ><img
                              src="http://p1.music.126.net/RTUwmcth8YSOzoFRq5T2pQ==/6036318836818799.jpg?param=30y30"
                            /><i class="txti">房东的猫房东的猫</i></a
                          >
                        </li>
                        <li
                          class="j-item"
                          data-userid="277313426"
                          data-username="隔壁老樊"
                          data-index="3"
                        >
                          <a href="#" class="activea"
                            ><img
                              src="http://p1.music.126.net/bm2CQ4jf9uL-LeoPoKfY9Q==/109951164435647444.jpg?param=30y30"
                            /><i class="txti">隔壁老樊</i></a
                          >
                        </li>
                        <li
                          class="j-item"
                          data-userid="1"
                          data-username="网易云音乐"
                          data-index="4"
                        >
                          <a href="#" class="activea"
                            ><img
                              src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg?param=30y30"
                            /><i class="txti">网易云音乐</i></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="content_main_A" style="display:block">
                  <textarea class="textA" style="height: 64px;"></textarea>

                  <div class="say_w">
                    <i class="highlight"></i>
                    <div class="say_w_bo">
                      <p class="f-thide">
                        歌单：云音乐新歌榜&nbsp;by&nbsp;网易云音乐
                      </p>
                    </div>
                  </div>
                </div>
                <div class="qq_btn">
                  <div class="qq_btn_a">
                    <i class="btn_one"></i>
                  </div>
                  <span class="qq_btn_b">140</span>
                </div>
                <div class="fenxiang">
                  <div class="btnwrap f-fl">
                    <a
                      style="    margin-left: 60px;"
                      class="u-btn2 u-btn2-2 u-btn2-w2 j-flag"
                      hidefocus="true"
                      href="javascript:;"
                      data-action="share"
                      ><i>分享</i></a
                    >
                    <a
                      class="u-btn2 u-btn2-1 u-btn2-w2 j-flag"
                      hidefocus="true"
                      href="javascript:;"
                      data-action="close"
                      ><i>取消</i></a
                    >
                  </div>
                </div>
                <div class="u-err j-flag" style="display: none;">
                  <i class="u-icn u-icn-25"></i><span></span>
                </div>
              </div>
            </div>
            <div   class="zcls h_fenxiang"  @click="close"  title="关闭窗体"  id="auto-id-0KRBenQCudmrM2DZ"  >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下载 -->
    <div  v-show="showb">
      <div class="pannel" style="width: 420px;height: 294.4px;">
        <div class="title" id="title_2">
          <div class="enjoy">下载</div>
        </div>
        <div class="content">
          <div style="padding: 0;position: relative;">
            <div class="content_main" style="  padding: 0px;">
              <h3 class="f-tc" style="  padding-top: 0px;">使用云音乐客户端</h3>
              <h4 class="f-tc s-fc3" style="font-size:10px; padding-top: 0px;">
                即可无限下载高品质音乐
              </h4>
            </div>
            <div class="f-cb wrap" style="    padding: 10px 20px 30px;">
              <div class="left_down">
                <div class="left_down_a btn1">
                  <i></i>PC版<span class="txt_A ">V2.5.4</span>
                </div>
                <div   class="left_down_a btn2"   style="background:#e5e5e5;text-align:center;color: #666"  >
                  已安装PC版
                </div>
              </div>
              <div class="right_down">
                <div class="qtcode"></div>
                <div class="s-fc3 f-tc" style="font-size:12px">
                  扫描下载手机版
                </div>
              </div>
            </div>
            <div  class="zcls" @click="closeA"  title="关闭窗体"  id="auto-id-0KRBenQCudmrM2DZ"  >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import header1 from "./header";
import footer1 from "./todis";
export default {
  components: { footer1 },
  data() {
    return {
      obj1: {},
      intr: [],
      a: false,
      num: 0,
      msg: "展开",
      b:[],
      creator:"",
      show:false,
      showb:false,
      isshow:false
    };
  },
  methods: {
    getintr() {
      if (this.a == true) {
        this.msg = "展开";
      } else {
        this.msg = "收起";
      }
      this.a = !this.a;
    },
    enjoy(){
         this.show = !this.show;
    },
    bg(){
         this.showb = !this.showb;
    },
    toggle(){
         this.isshow = !this.isshow;
    },
    close(){
       this.show = !this.show;
    },
    closeA(){
      this.showb = !this.showb;
    },
  },
  mounted() {
    this.$http({
      url: "list",
      method: "post"
    })
      .then(res => {
        console.log(res.data.data[this.$route.hash.substr(1)])
        this.obj1 = res.data.data[this.$route.hash.substr(1)];
        this.b=res.data.data[this.$route.hash.substr(1)].description.split("\n")
        this.creator=this.obj1.creator
        console.log(this.b);
        if (this.b.length > 5) {
          for (let i = 0; i < 6; i++) {
            this.intr.push(this.b[i]);
          }
          
          this.a == true;
        } else {
          this.a == false;
          this.msg = "";
          this.intr=res.data.data[this.$route.hash.substr(1)].description.split("\n")
        }
        console.log(this.obj1)
      })
      .catch(err => {});
  }
};
</script>

<style >
body,
textarea,
select,
input,
button {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}
html,
body {
  width: 100%;
  height: 100%;
  border: 0;
  word-wrap: break-word;
  word-break: break-word;
}
.g-bd,
.g-bd1,
.g-bd2,
.g-bd3,
.g-bd4,
.g-bd5,
.g-bd6,
.g-bd7 {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.g-bd4 {
  background: url(../../static/image/wrap4.png) repeat-y center 0;
}
.g-mn4 {
  float: left;
  width: 100%;
  margin-right: -270px;
}
.g-mn4c {
  margin-right: 271px;
}
.g-wrap6 {
  padding: 47px 30px 40px 39px;
}
.u-cover-dj {
  width: 200px;
  height: 200px;
}
.m-info .cover {
  float: left;
  position: relative;
  display: inline;
  margin: 0 -220px 0 0;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.u-cover .bottom,
.u-cover .msk,
.n-musicsd .lst .avatar .msk {
  background: url(../../static/image/coverall.png) no-repeat;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.u-cover-dj .msk {
  width: 208px;
  height: 208px;
  background-position: 0 -1285px;
  top: -4px;
  left: -4px;
}
.m-info .cnt {
  float: right;
  width: 100%;
}
.m-info .cntc {
  margin-left: 230px;
}
.m-info .hd {
  position: relative;
  margin: 0 0 12px;
  line-height: 24px;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}

.f-fl {
  float: left;
}
.u-icn,
.u-title-1 .out .icon {
  background: url(../../static/image/icon.png) no-repeat 0 9999px;

}

.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-13 {
  width: 54px;
  height: 24px;
  background-position: 0 -243px;
}
.f-pa {
  position: absolute;
}
.f-r-white-icon {
  background: url(../../static/image/white-r-icon@3x.png);
}
.m-info .tit {
  margin-left: 64px;
  position: relative;
}
.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.f-brk {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
.m-info .hd h2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.m-info .user {
  margin: 0 0 20px;
  line-height: 35px;
}
a {
  text-decoration: none;
  color: #333;
}
a,
a *,
.f-hand,
.f-hand * {
  cursor: pointer;
}
.m-info .user .face,
.m-info .user .face img {
  float: left;
  width: 35px;
  height: 35px;
}
.m-info .user .face {
  margin-right: 10px;
}
.m-info .user .face,
.m-info .user .face img {
  float: left;
  width: 35px;
  height: 35px;
}
.m-info .user .name {
  float: left;
}
.s-fc7,
a.s-fc7:hover {
  color: #0c73c2;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.m-info .user .time {
  margin-left: 15px;
}
.m-info .btns {
  margin-bottom: 25px;
  margin-right: -10px;
}
.f-fl {
  float: left;
}
.u-btn2,
.u-btn2 i,
.u-btn2 .icn,
.u-btni,
.u-btni i,
.u-tag,
.u-tag i,
.u-btni-addply .ply {
  background: url(../../static/image/button2.png) no-repeat 0 9999px;
}
.u-btn2,
.u-btn2 i {
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btn2,
.u-btn2:hover {
  text-decoration: none;
}
.u-btn2-2 {
  color: #fff;
  background-position: right -428px;
}
.u-btni-addply {
  float: left;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-2 i {
  color: #fff;
  background-position: 0 -387px;
}
.u-btni-addply i {
  padding: 0 7px 0 8px;
}
.u-btni-addply .ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
}
.u-btni,
.u-btni i {
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
}
.u-btni {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btni,
.u-btni:hover {
  color: #333;
  text-decoration: none;
}
.u-btni-add {
  width: 31px;
  margin-left: -3px;
  padding-right: 0;
  background-position: 0 -1588px;
}
.m-info .btns2 .u-btni,
.m-info .btns .u-btni {
  margin-right: 6px;
  font-family: simsun, \5b8b\4f53;
}
.m-info .btns .u-btni-add {
  margin-right: 5px;
}
.u-btni {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btni,
.u-btni:hover {
  color: #333;
  text-decoration: none;
}
.u-btni-share,
.u-btni-fav,
.u-btni-cmmt,
.u-btni-dl {
  background-position: right -1020px;
}
.m-info .btns2 .u-btni,
.m-info .btns .u-btni {
  margin-right: 6px;
  font-family: simsun, \5b8b\4f53;
}
.u-btni i {
  padding: 0 7px 0 36px;
}
.u-btni-share i,
.u-btni-fav i,
.u-btni-cmmt i,
.u-btni-dl i,
.u-btni-unfav i {
  padding-right: 2px;
  padding-left: 28px;
}
.u-btni-fav i {
  background-position: 0 -977px;
}
.u-btni,
.u-btni:hover {
  color: #333;
  text-decoration: none;
}
.u-btni-share,
.u-btni-fav,
.u-btni-cmmt,
.u-btni-dl {
  background-position: right -1020px;
}
.m-info .btns2 .u-btni,
.m-info .btns .u-btni {
  margin-right: 6px;
  font-family: simsun, \5b8b\4f53;
}
.u-btni-share i {
  background-position: 0 -1225px;
}
.u-btni {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btni,
.u-btni:hover {
  color: #333;
  text-decoration: none;
}
.u-btni-dl i {
  background-position: 0 -2761px;
}
.u-btni-cmmt i {
  background-position: 0 -1465px;
}
.m-info .tags {
  margin: 25px 0 5px;
  line-height: 22px;
}
.m-info b {
  font-weight: normal;
  color: #666;
}
.m-info .tags b {
  float: left;
}
.u-tag,
.u-tag i {
  float: left;
  height: 22px;
  line-height: 22px;
}
.u-tag,
.u-tag:hover {
  color: #777;
  text-decoration: none;
}
.u-tag {
  padding: 0 10px 0 0;
  text-shadow: 0 1px #fdfdfd;
  background-position: right -27px;
}
.m-info .tags .u-tag {
  float: left;
  margin: 0px 10px 3px 0;
}
.u-tag i {
  position: relative;
  zoom: 1;
  padding: 0 3px 0 13px;
  background-position: 0 0;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.f-brk {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
.m-info .intr {
  margin-top: 4px;
  line-height: 18px;
  color: #666;
}
.m-info b {
  font-weight: normal;
  color: #666;
}
.m-info .intr b {
  display: inline-block;
}

.s-fc7,
a.s-fc7:hover {
  color: #0c73c2;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.u-icn,
.u-title-1 .out .icon {
  background: url(../../static/image/icon.png) no-repeat 0 9999px;
  /*1 */
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-69,
.u-icn-70 {
  width: 11px;
  height: 8px;
  background-position: -65px -520px;
}
.f-fr {
  float: right;
}
.g-sd4 {
  position: relative;
  float: right;
  width: 270px;
  zoom: 1;
}
.g-wrap7 {
  padding: 20px 40px 40px 30px;
}
.u-hd3 {
  position: relative;
  *zoom: 1;
  height: 23px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.m-piclist {
  margin-left: -13px;
  padding-bottom: 25px;
}
.m-piclist li,
.m-piclist li img {
  float: left;
  width: 40px;
  height: 40px;
}
.m-piclist li {
  display: inline;
  padding: 0 0 13px 13px;
}
li img {
  float: left;
  width: 40px;
  height: 40px;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.u-hd3 {
  position: relative;
  *zoom: 1;
  height: 23px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.m-rctlist {
  margin-bottom: 25px;
}
.m-rctlist li {
  float: left;
  width: 200px;
  height: 50px;
  margin-bottom: 15px;
  line-height: 24px;
}
.u-cover {
  position: relative;
  display: block;
}
.m-rctlist .cver,
.n-rctlist .cver img {
  float: left;
  width: 50px;
  height: 50px;
}
.m-rctlist .cver {
  margin-right: -60px;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.m-rctlist .info {
  margin-left: 60px;
  line-height: 24px;
}
.m-rctlist .info p {
  width: 140px;
}
.m-rctlist .by {
  float: left;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.m-rctlist .nm {
  float: left;
  max-width: 106px;
  margin: 0 2px 0 4px;
}
.u-icn,
.u-title-1 .out .icon {
  background: url(../../static/image/icon.png) no-repeat 0 9999px;
 
}

.s-fc7 .u-icn-69{
  background-position: -65px -520px;
}
.s-fc7 .u-icn-70{
  background-position: -45px -520px;
}


.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-84 {
  width: 12px;
  height: 13px;
  background-position: -65px -840px;
}
.m-multi {
  margin: 20px 0;
  padding-bottom: 20px;
}
.u-hd3 {
  position: relative;
  *zoom: 1;
  height: 23px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.m-back,
.m-lycifo .downapp,
.m-plshare .btn,
.m-pubcode .code,
.m-multi .bg,
.m-multi .bg a:hover {
  background: url(../../static/image/sprite.png) no-repeat 0 9999px;
}
.m-multi .bg {
  height: 65px;
  margin-bottom: 10px;
  background-position: 0 -392px;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.m-multi .bg li {
  float: left;
}
.m-multi .bg a {
  display: block;
  width: 42px;
  height: 48px;
  text-indent: -9999px;
}
.m-multi .bg .pc {
  width: 60px;
  margin: 0 26px 0 30px;
}
.m-multi .bg a {
  display: block;
  width: 42px;
  height: 48px;
  text-indent: -9999px;
}
 .hd  .f-pr {
  background: url(../../static/image/icon.png) no-repeat 0 9999px;
  background-position: 0 -186px;
  position: relative;
  zoom: 1;
}

.pannel_box {
  width: 100%;
  height: 500px;
  background: red;
}
.pannel {
  height: 382px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
}
.pannel .title {
  width: 100%;
  height: 38.8px;
  line-height: 50px;
  background-color: #2d2d2d;
  border-bottom: 1px solid #191919;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px 4px 0 0;
  
}
.enjoy {
    padding-right: 45px;
    margin: 0;
    height: 38px;
    line-height: 38px;
    padding-left: 18px;
    border-radius: 3px 3px 0 0;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    background-position: 50% 0;
  }
.pannel .content {
  width: 100%;
  position: absolute;
  top: 38px;
  bottom: 0;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
  border: 1px solid #878787;
}
.content_main {
  padding: 20px 40px 30px;
}
.ulAAa {
  height: 27px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 10px;
}
.lione {
  margin-right: 4px;
  position: relative;
  border-bottom: 1px solid #fff;
  float: left;
  height: 27px;
  list-style: none;
}
.lione_a {
  background: url("../../static/image/tab.png") no-repeat right -303px;
  display: block;
  float: left;
  height: 27px;
  color: #333;
  cursor: pointer;
}
.lione_a em {
  background: url("../../static/image/tab.png") no-repeat 0 -206px;
  line-height: 27px;
  width: 91px;
  text-align: center;
  display: block;
}
.litwo_a {
  background: url("../../static/image/tab.png") no-repeat right -240px;
  display: block;
  float: left;
  height: 27px;
  color: #666;
  cursor: pointer;
}
.litwo_a em {
  background: url("../../static/image/tab.png") no-repeat 0 -141px;
  line-height: 27px;
  width: 91px;
  text-align: center;
  display: block;
}
.content_main_A {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding-right: 14px;
  position: relative;
}
.textA {
  height: 106px;
  width: 100%;
  padding: 5px 6px 6px;
  margin-right: -20px;
  border: none;
  border-radius: 2px;
  resize: none;
  overflow: auto;
  line-height: 19px;
  background-color: transparent !important;
}
.say_w {
  cursor: auto;
  background-color: transparent !important;
  position: relative;
  height: 45px;
  line-height: 45px;
  margin: 0 -14px 0 0;
  padding: 0 10px;
}
.say_w_bo {
  width: 100%;

  border-top: 1px solid #e5e5e5;
}
.highlight {
  display: none;
  position: absolute;
  top: -22px;
  left: -17px;
  width: 480px;
  height: 84px;
}
.qq_btn {
  height: 20px;
  margin-top: 10px;
}
.qq_btn_a {
  float: left;
  position: relative;
}
.qq_btn_b {
  color: #999;
  float: right;
  font-size: 12px;
}
.btn_one {
  cursor: pointer;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  display: inline-block;
  overflow: hidden;
  background: url("../../static/image/icon.png ") -40px -490px;
}
.btnwrap {
  margin-top: 30px;
  float: left;
  margin-left: -90px;
}
.u-err {
  height: 17px;
  margin-top: 5px;
  line-height: 17px;
  color: #e33232;
  display: inline-block;

  overflow: hidden;

  vertical-align: middle;
}
.u-err i {
  margin-right: 8px;
}
.u-icn-25 {
  width: 14px;
  height: 14px;
  background-position: -50px -270px;
  background: url("../../static/image/icon3.png") no-repeat;
}
.share {
  margin-top: 34px;
  line-height: 22px;
  font-size: 12px;
}
.f-fl {
  float: left;
}
.u-logo-s {
  float: left;
}
.u-logo li {
  float: left;
  margin-left: 8px;

  height: 22px;
}
.u-slg-sn-gray {
  display: block;
  background-position: 0 -25px;
  background: url("../../static/image/logo.png");
}
.u-slg {
  width: 20px;
  height: 20px;
}
.m-plshare .ct {
  margin-bottom: 10px;
}
.pen_main {
  margin-bottom: 10px;
}
.pen_main_txt {
  border: 1px solid #d9d9d9;

  border-radius: 2px;
  padding-right: 14px;
  position: relative;
}
.pen_main_txt_ma {
  width: 100%;
  border: none;
  cursor: text;
  border-radius: 2px;
  padding: 5px 6px 6px;
  line-height: 19px;
  height: 30px;
  margin-right: -20px;
}
.txt_span {
  position: relative;
  display: inline-block;
}
.txt_span_in {
  float: left;
  width: 80px;
  margin-top: 3px;
  padding: 0;
  border: none;
  background: none;
}

.holder_label {
  width: auto;
  top: 2px;
  margin-left: 0;
  white-space: nowrap;
  position: absolute;
  color: #999;
  line-height: 17px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 12px;
}
.lie {
  position: absolute;
  z-index: 10;
  width: 446px;
  max-height: 220px;
  margin-top: -1px;
  overflow: auto;
  background: #fff;
  border: 1px solid #a8a8a8;
}
.lie li {
  border-top: 1px solid #eee;
  height: 42px;
}
.activea {
  display: block;
  height: 30px;
  padding: 6px 10px;
  line-height: 30px;
  color: #666;
}
.activea img {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
}
.noacyivea {
  background: #eee;
  text-decoration: none;
  color: #333;
  height: 42px;
}
.zcls {
  position: absolute;
  z-index: 18;
  top: -45px;
  right: 12px;
  width: 14px;
  height: 17px;
  overflow: hidden;
  cursor: pointer;
  transform: scale(2);
  background-position: 0 -95px;
  background: url(/static/img/layer.c381155.png) no-repeat;
  color: #666;
}
.switchA {
  border-bottom-color: rgb(222, 222, 222);
  color: #666;
}
.lie li:hover {
  background: #eee;
}
.f-tc {
  margin-top: 18px;
  font-size: 20px;
  text-align: center;
}
.left_down {
  float: left;
  width: 180px;
  height: 162px;
  border-right: 1px dotted #ccc;
}
.left_down_a {
  width: 146px;
  height: 40px;
  margin-top: 16px;
  background: #d7e4f9;
  cursor: pointer;
  line-height: 40px;
  color: #3d74bf;
  font-size: 16px;
}
.left_down_a i {
  float: left;

  width: 17px;

  height: 17px;

  margin: 11px 10px 0 12px;
  background: url("../../static/image/icon2.png") no-repeat 0px -310px;
}
.txt_A {
  margin-left: 7px;
  font-size: 14px;
}

.right_down {
  float: right;
  width: 164px;
}
.qtcode {
  background: url("../../static/image/qtcode86.png") no-repeat;
  width: 86px;
  height: 86px;
  margin: 14px auto;
}
.btn1:hover{
  background: #ceddf5;
}
.btn2:hover{
 background: #e0e0e0 !important;
}

.h_jingtu{
  background-position: -230px -380px;
}
.h_fenxiang{
  top: -25px;
}
</style>