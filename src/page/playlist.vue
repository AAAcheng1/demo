<template>
  <div>
    <!-- <header1></header1> -->
    <div class="g-bd">
      <div class="g-wrap p-pl f-pr">
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">全部</span>
            <a class="u-btn2 u-btn2-1 menu d-flag" @click="getshow">
              <i>
                选择分类
                <em class="u-icn u-icn-38"></em>
              </i>
            </a>
          </h3>
          <div class="u-btn f-fr u-btn-hot d-flag">
            <a class="a1" data-order="hot">热门</a>
          </div>
        </div>
        <div id="cateListBox" class="n-sltlyr d-flag" style="left:0;" v-if="show">
          <div class="hd">
            <i class="icn"></i>
          </div>
          <div class="bd">
            <h3>
              <a href="/discover/playlist/" class="j-flag u-btn u-btn-g s-fc1" data-cat="全部">
                <em>全部风格</em>
              </a>
            </h3>
            <dl class="f-cb">
              <dt>
                <i class="u-icn u-icn-71"></i>语种
              </dt>
              <dd>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" data-cat="华语">华语</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E" data-cat="欧美">欧美</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD" data-cat="日语">日语</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD" data-cat="韩语">韩语</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD" data-cat="粤语">粤语</a>
                <span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt>
                <i class="u-icn u-icn-6"></i>风格
              </dt>
              <dd>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" data-cat="流行">流行</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" data-cat="摇滚">摇滚</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" data-cat="民谣">民谣</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" data-cat="电子">电子</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2" data-cat="舞曲">舞曲</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1" data-cat="说唱">说唱</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90"
                  data-cat="轻音乐"
                >轻音乐</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB" data-cat="爵士">爵士</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91" data-cat="乡村">乡村</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=R%26B%2FSoul"
                  data-cat="R&amp;B/Soul"
                >R&amp;B/Soul</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8" data-cat="古典">古典</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F" data-cat="民族">民族</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6" data-cat="英伦">英伦</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E" data-cat="金属">金属</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B" data-cat="朋克">朋克</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83" data-cat="蓝调">蓝调</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC" data-cat="雷鬼">雷鬼</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
                  data-cat="世界音乐"
                >世界音乐</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81" data-cat="拉丁">拉丁</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=New%20Age" data-cat="New Age">New Age</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E" data-cat="古风">古风</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%90%8E%E6%91%87" data-cat="后摇">后摇</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=Bossa%20Nova"
                  data-cat="Bossa Nova"
                >Bossa Nova</a>
                <span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt>
                <i class="u-icn u-icn-7"></i>场景
              </dt>
              <dd>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8" data-cat="清晨">清晨</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A" data-cat="夜晚">夜晚</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0" data-cat="学习">学习</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C" data-cat="工作">工作</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91" data-cat="午休">午休</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6"
                  data-cat="下午茶"
                >下午茶</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81" data-cat="地铁">地铁</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6" data-cat="驾车">驾车</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8" data-cat="运动">运动</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C" data-cat="旅行">旅行</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5" data-cat="散步">散步</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%85%92%E5%90%A7" data-cat="酒吧">酒吧</a>
                <span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt>
                <i class="u-icn u-icn-8"></i>情感
              </dt>
              <dd>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%80%80%E6%97%A7" data-cat="怀旧">怀旧</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0" data-cat="清新">清新</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB" data-cat="浪漫">浪漫</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F" data-cat="伤感">伤感</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88" data-cat="治愈">治愈</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE" data-cat="放松">放松</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC" data-cat="孤独">孤独</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8" data-cat="感动">感动</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B" data-cat="兴奋">兴奋</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90" data-cat="快乐">快乐</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99" data-cat="安静">安静</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5" data-cat="思念">思念</a>
                <span class="line">|</span>
              </dd>
            </dl>
            <dl class="f-cb">
              <dt>
                <i class="u-icn u-icn-9"></i>主题
              </dt>
              <dd class="last">
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0"
                  data-cat="影视原声"
                >影视原声</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=ACG" data-cat="ACG">ACG</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5" data-cat="儿童">儿童</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD" data-cat="校园">校园</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F" data-cat="游戏">游戏</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=70%E5%90%8E" data-cat="70后">70后</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=80%E5%90%8E" data-cat="80后">80后</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=90%E5%90%8E" data-cat="90后">90后</a>
                <span class="line">|</span>
                <a
                  class="s-fc1"
                  href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2"
                  data-cat="网络歌曲"
                >网络歌曲</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=KTV" data-cat="KTV">KTV</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8" data-cat="经典">经典</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1" data-cat="翻唱">翻唱</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%90%89%E4%BB%96" data-cat="吉他">吉他</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4" data-cat="钢琴">钢琴</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90" data-cat="器乐">器乐</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95" data-cat="榜单">榜单</a>
                <span class="line">|</span>
                <a class="s-fc1" href="/discover/playlist/?cat=00%E5%90%8E" data-cat="00后">00后</a>
                <span class="line">|</span>
              </dd>
            </dl>
          </div>
          <div class="ft"></div>
        </div>
        <ul class="m-cvrlst f-cb">
          <li v-for="(item,index) in list" :key="index">
            <div class="u-cover u-cover-1">
              <img class="j-flag" :src="item.coverImgUrl" />
              <router-link :to="{path:'/detail#'+(index+(35*skip))}">
                <a class="msk"></a>
              </router-link>
              <div class="bottom">
                <a class="icon-play f-fr"></a>
                <span class="icon-headset"></span>
                <span class="nb">14万</span>
              </div>
            </div>
            <p class="dec">
              <a class="tit f-thide s-fc0">{{item.name}}</a>
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a class="nm nm-icn f-thide s-fc3">{{item.creator.nickname}}</a>
              <sup class="u-icn u-icn-1"></sup>
            </p>
          </li>
        </ul>
        
          <div class="m-pl-pager">
            <!-- <div class="u-page">
                <a class="zbtn zprv" v-bind:class="skip==0?'js-disabled':''" @click="prev">上一页</a>
                <a class="zpgi" v-for="(item,index) in num" :key="index" :class="{'js-selected':skip==index}"  @click="getpage($event)">{{index+1}}</a>
                <a class="zbtn znxt"  v-bind:class="skip==num.length-1?'js-disabled':''" @click="next">下一页</a>
            </div>-->
            <el-pagination
              background
              class="u-page"
              layout="prev,pager,next"
              :total="num/3.5"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
       
      </div>
    </div>
    <!-- <footer1></footer1> -->
  </div>
</template>

<script>
// import header1 from "./header";
// import footer1 from "./floor";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  // computed: {
  //   ...mapState(["num"])
  // },
  data() {
    return {
      show: false,
      skip: 0,
      list: [],
      creator: "",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      num:100
    };
  },
  methods: {
    add() {
      this.$http({
        url: "addqwe",
        method: "post",
        data: {
          list: this.list
        }
      })
        .then(res => {
          console.log("tjcg");
        })
        .catch(err => {});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.skip = val - 1;
      this.$http({
        url: "page",
        method: "post",
        data: {
          skip: this.skip
        }
      })
        .then(res => {
          console.log(res.data.data);
          this.list = res.data.data;
        })
        .catch(err => {});
    },

    getData(e, data) {
      console.log(data);
      this.page = data;
    },
    getshow() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.$http({
      url: "page",
      method: "post",
      data: {
        skip: this.skip
      }
    })
      .then(res => {
        this.list = res.data.data;
      })
      .catch(err => {
        console.log("失败")
      });
  },
  // components: { header1, footer1 }
};
</script>



<style scoped>
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
.f-pr {
  position: relative;
  zoom: 1;
}
.g-wrap {
  padding: 40px;
}
.u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.u-title h3 {
  float: left;
  font-size: 24px;
  font-weight: normal;
}
.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
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
  *display: inline;
  *zoom: 1;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  *line-height: 32px;
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
.u-btn2-1 {
  color: #333;
  background-position: right -100px;
}
.u-title .menu {
  _position: absolute;
  font-size: 12px;
  font-weight: normal;
  margin: 2px 0 0 12px;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-1 i {
  color: #333;
  background-position: 0 -59px;
}
.u-title .menu i {
  color: #0c73c2 !important;
  padding: 0 10px 0 15px;
  _padding-right: 20px;
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

.u-title .menu .u-icn-38 {
  margin-left: 5px;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.f-fr {
  float: right;
}
.u-btn,
div.u-page a,
div.u-page a.js-selected,
div.u-page a.znxt.js-disabled,
div.u-page a.zprv.js-disabled {
  background: url(../../static/image/button.png) no-repeat 0 9999px;
}
.u-btn {
  display: inline-block;
}
.u-btn-hot {
  height: 29px;
  background-position: 0 0;
  border-radius: 3px;
}
.u-title .u-btn .a1,
.u-title .u-btn .a2 {
  float: left;
  width: 46px;
  height: 29px;
  line-height: 29px;
  text-align: center;
}
.u-title .u-btn-hot .a1,
.u-title .u-btn-new .a2,
.u-title .u-btn-area .a2,
.u-title .u-btn-song .a1 {
  color: #fff;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.n-sltlyr {
  position: absolute;
  top: 75px;
  z-index: 5;
  width: 720px;
}
.n-sltlyr .hd,
.n-sltlyr .bd,
.n-sltlyr .ft {
  background: url(../../static/image/sltlyr.png) no-repeat;
}
.n-sltlyr .hd {
  height: 32px;
}
.n-sltlyr .icn,
.n-mvlist .mvpic .btn,
.n-artist .btn-rz,
.n-artist .btnfav {
  background: url(../../static/image/iconall.png) no-repeat;
}
.n-sltlyr .icn {
  position: absolute;
  top: 2px;
  left: 132px;
  display: inline-block;
  width: 24px;
  height: 11px;
  background-position: -48px 0;
  vertical-align: middle;
}
.n-sltlyr .bd {
  width: 700px;
  padding: 0 10px;
  background-position: -720px 0;
  background-repeat: repeat-y;
}
.n-sltlyr h3 {
  height: 37px;
  padding-left: 26px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: normal;
}
.s-fc1 {
  color: #333;
}
.u-btn-g {
  width: 75px;
  height: 26px;
  background-position: 0 -64px;
  text-align: center;
  line-height: 26px;
}
.n-sltlyr dt {
  float: left;
  display: inline;
  width: 70px;
  margin: 0 -100px 0 26px;
  padding-top: 15px;
  border-right: 1px solid #e6e6e6;
  font-weight: bold;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-71 {
  width: 23px;
  height: 23px;
  background-position: -20px -735px;
}
.n-sltlyr .u-icn {
  margin-right: 8px;
  margin-bottom: 4px;
}
.n-sltlyr dd {
  margin-left: 96px;
  padding: 16px 15px 0 15px;
  border-left: 1px solid #e6e6e6;
  line-height: 24px;
}
.s-fc1 {
  color: #333;
}
.n-sltlyr dd .line {
  margin: 0 8px 0 10px;
  color: #d8d8d8;
}
.n-sltlyr dd a {
  white-space: nowrap;
}
.n-sltlyr dd.last {
  padding-bottom: 25px;
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.n-sltlyr .ft {
  height: 20px;
  background-position: -1440px -12px;
}
.u-icn-6 {
  width: 24px;
  height: 24px;
  background-position: 0 -60px;
}
.u-icn-7 {
  width: 24px;
  height: 24px;
  background-position: 0 -88px;
}
.u-icn-8 {
  width: 24px;
  height: 24px;
  background-position: 0 -117px;
}
.u-icn-9 {
  width: 24px;
  height: 24px;
  background-position: 0 -141px;
}
.p-pl .m-cvrlst {
  margin: 30px 0 0 -50px;
}
.m-cvrlst li {
  float: left;
  display: inline-block;
  width: 140px;
  height: 188px;
  overflow: hidden;
  padding: 0 0 30px 50px;
  line-height: 1.4;
}
.u-cover {
  position: relative;
  display: block;
}
.u-cover-1 {
  width: 140px;
  height: 140px;
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
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.u-cover-1 .msk {
  background-position: 0 0;
}
.u-cover .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background-position: 0 -537px;
  color: #ccc;
}
.u-cover .ply,
.u-cover .icon-headset,
.u-cover .icon-play,
.u-face .msk,
.n-note .head .msk,
.icn-vip,
.icn-daren,
.u-checkbox {
  background: url(../../static/image/iconall.png) no-repeat;
}
.u-cover .icon-headset,
.u-cover .icon-play {
  display: inline-block;
}
.u-cover .icon-play {
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background-position: 0 0;
}
.u-cover .icon-headset,
.u-cover .icon-play {
  display: inline-block;
}
.u-cover .icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
}
.u-cover .nb {
  float: left;
  margin: 7px 0 0 0;
}
.m-cvrlst li p {
  width: 100%;
}
.m-cvrlst li .dec {
  margin: 8px 0 3px;
  font-size: 14px;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.s-fc0,
a.s-fc0:hover {
  color: #000;
}
.m-cvrlst li .tit {
  display: inline-block;
  max-width: 100%;
  _width: 100%;
  vertical-align: middle;
}
.m-cvrlst li p {
  width: 100%;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}

.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.m-cvrlst li .nm {
  display: inline-block;
  max-width: 85%;
  vertical-align: middle;
}
.m-cvrlst li .nm-icn {
  max-width: 76%;
}

.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.u-icn-1 {
  width: 11px;
  height: 13px;
  background-position: 0 1px;
  font-size: 100%;
  font-style: normal;
}
.m-cvrlst li p .u-icn {
  margin-top: -1px;
}
a:hover {
  text-decoration: underline;
  color: #333;
}
.u-icn-38 {
  width: 8px;
  height: 5px;
  background-position: -70px -543px;
}
div.u-page {
  margin: 20px 0;
  text-align: center;
}
div.u-page .zbtn,
div.u-page .zpgi {
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
}
div.u-page .zbtn {
  width: 69px;
  height: 24px;
  line-height: 24px;
  color: #333;
  text-align: left;
  padding: 0;
}
div.u-page .zprv {
  width: 47px;
  padding-left: 22px;
  background-position: 0 -560px;
}
div.u-page a.zprv.js-disabled,
div.u-page a.zprv.js-disabled:hover {
  background-position: 0 -620px;
  color: #cacaca;
  cursor: default;
}
div.u-page .zbtn,
div.u-page .zpgi {
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  vertical-align: middle;
}
div.u-page .zpgi {
  height: 22px;
  padding: 0 8px;
  background-color: #fff;
  line-height: 22px;
}
div.u-page a.js-selected,
div.u-page a.js-selected:hover {
  background-position: 0 -650px;
  border-color: #a2161b;
  color: #fff;
  cursor: default;
}
div.u-page .znxt {
  width: 57px;
  padding-left: 12px;
  background-position: -75px -560px;
}
div.u-page a.znxt.js-disabled,
div.u-page a.znxt.js-disabled:hover {
  background-position: -75px -620px;
  color: #cacaca;
  cursor: default;
}
div.u-page a:hover {
  text-decoration: none;
}
div.u-page .zpgi:hover {
  border-color: #666;
}
</style>