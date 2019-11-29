<template>
  <div class="z-discuss">
    <div class="z-discuss-center">
      <div class="z-title">
        <h3>评论</h3>
        <span>共123456条评论</span>
      </div>
      <div class="z-commit">
        <div class="z-iptarea">
          <div class="z-ipt-header">
            <img
              src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
            />
          </div>
          <div class="z-j-flag">
            <div class="z-j-flag-center">
              <div class="z-jc-top">
                <textarea placeholder="评论"></textarea>
              </div>
              <div class="z-jc-center">
                <i></i>
                <i></i>
                <a @click="toggle">评论</a>
                <span>140</span>
              </div>
              <div class="z-jc-bottom">
                <em class="arrline">◆</em>
                <span class="arrclr">◆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="z-cmmts">
          <h3>精彩评论</h3>
          <!-- <div>{{todisL}}</div> -->
          <!-- <div >{{item.name}}</div> -->
          <!-- <div v-for="(item1,index) in todisL" :key="index" class="z-item">
            <div class="z-itm-header">
              <a href="">
                <img src={{item1.img}} alt="">
              </a>
            </div>
            <div class="z-itm-text">
              <div class="z-cnt">
                <a class="sd" href="">{{item1.name}}</a>
                <a href="">:{{item1.text}}</a>
              </div>
              <div class="z-rp">
                <div class="z-time">07:23</div>
                <a href=""><i></i>{{item1.num}}</a>
                <span>|</span>
                <a href="" class="sa">回复</a>
              </div>
            </div>
          </div> -->
          <div v-for="(item,index) in todisL" :key="index"  class="z-itm">
            <div class="z-itm-header">
              <a>
                <img :src="item.img" alt="">
              </a>
            </div>
            <div class="z-itm-text">
              <div class="z-cnt"><a class="sd">{{item.name}}</a><a>:{{item.text}}</a></div>
              <div class="z-rp">
                <div class="z-time">07:23</div>
                <a> <i></i>{{item.num}}</a>
                <span>|</span>
                <a class="sa">回复</a>
              </div>
            </div>
          </div>
          <!-- 精彩评论的数据渲染 -->
        </div>
        <div class="z-cmmts">
          <h3>最新评论(156897)</h3>
          <div class="z-itm">
            <div class="z-itm-header">
              <a>
                <img
                  src="https://p2.music.126.net/LpD4YFxwVp1dLZbm2lFgog==/109951164215904183.jpg?param=50y50"
                />
              </a>
            </div>
            <div class="z-itm-text">
              <div class="z-cnt"><a class="sd">橙优优</a><a>：iu冲鸭</a></div>
              <div class="z-rp">
                <div class="z-time">07:23</div>
                <a> <i></i>(22) </a>
                <span>|</span>
                <a class="sa">回复</a>
              </div>
            </div>
          </div>
          <!-- 最新评论的数据渲染 -->
        </div>
        <div class="z-show" v-show="show">
          <div class="z-show-login">
            <div class="z-thide">登录</div>
          </div>
          <div class="z-show-context">
            <div class="z-sc-center">
              <div class="z-sc-c2">
                <div class="z-u-main">
                  <div class="z-u-plt"></div>
                  <div class="z-f-mgt10">
                    <a class="aa">
                      <i>手机号登录</i>
                    </a>
                  </div>
                  <div class="z-f-mgt10">
                    <a class="ss">
                      <i>注　册</i>
                    </a>
                  </div>
                </div>
                <div class="z-u-alt">
                  <ul>
                    <li>
                      <a>
                        <i></i>
                        微信登录
                      </a>
                    </li>
                    <li>
                      <a>
                        <i></i>
                        QQ登录
                      </a>
                    </li>
                    <li>
                      <a>
                        <i></i>
                        微博登录
                      </a>
                    </li>
                    <li>
                      <a>
                        <i></i>
                        网易登录
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="z-u-official-terms">
                  <input type="checkbox" />
                  <label>同意</label>
                  <a>《服务条款》</a>
                  <a>《隐私政策》</a>
                  <a>《儿童隐私政策》</a>
                </div>
              </div>
            </div>
          </div>
          <span class="z-zcls" @click="toggle">×</span>
        </div>
        <!-- 评论的分页 -->
        <div class="z-fy">
          <div class="block">
            <span class="demonstration">直接前往</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
   
</template>
<script>
//辅助函数
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      show: false,
      currentPage3: 5,
      todisL:"",
      a:""
    };
  },
  computed: {
       ...mapState(["one","two","three","zbian","todisww","newtodis"]),
  },
  methods: {
    ...mapMutations(["getitem"]),
    toggle() {
      this.show = !this.show;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
     this.getitem(val)
     this.todisL = this.newtodis
     console.log(`当前页: ${val}`);
    },
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
a {
  cursor: pointer;
}
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.z-discuss {
  margin-top: 40px;
  font-size: 12px;
}
.z-title {
  height: 33px;
  border-bottom: 2px solid #c20c0c;
}
.z-title h3 {
  font-size: 20px;
  line-height: 28px;
  float: left;
  font-weight: normal;
}
.z-title span {
  margin: 9px 0 0 20px;
  display: block;
  float: left;
  color: #666;
}
.z-commit .z-iptarea {
  margin-top: 20px;
  margin-bottom: 40px;
}
.z-ipt-header {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: -100px;
}
.z-ipt-header img {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: -100px;
}
.z-j-flag-center {
  margin-left: 62px;
  position: relative;
}
.z-jc-top {
  display: block;
  position: relative;
  zoom: 1;
  padding-right: 14px;
}
.z-jc-top textarea {
  height: 50px;
  display: block;
  width: 100%;
  margin-right: -20px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
  resize: none;
  overflow: auto;
  font-size: 12px;
  color: #333;
}
.z-jc-center {
  clear: both;
  padding-top: 10px;
  position: relative;
}
.z-jc-center i {
  margin: 0px 10px 0 0;
  cursor: pointer;
  width: 18px;
  height: 18px;
  display: inline-block;
  float: left;
  overflow: hidden;
  vertical-align: middle;
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.z-jc-center i:nth-child(1) {
  background: url("../../static/image/icon.png") no-repeat 0 9999px;
  background-position: -40px -490px;
}
.z-jc-center i:nth-child(2) {
  background: url("../../static/image/icon.png") no-repeat 0 9999px;
  background-position: -60px -490px;
}
.z-jc-center a {
  width: 46px;
  height: 25px;
  background: url("../../static/image/button.png") no-repeat 0 9999px;
  background-position: -84px -64px;
  color: #fff;
  text-align: center;
  line-height: 25px;
  float: right;
  display: block;
}
.z-jc-center span {
  float: right;
  margin-right: 10px;
  line-height: 25px;
  color: #999;
}
.z-jc-bottom {
  position: absolute;
  top: 11px;
  left: -7px;
  width: 13px;
  height: 14px;
  overflow: hidden;
}
.arrline {
  display: block;
  font-family: "SimSun";
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  height: 10px;
  line-height: normal;
  color: #cdcdcd;
}
.arrclr {
  margin: -10px 0 0 1px;
  color: #fff;
  display: block;
  font-family: "SimSun";
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  height: 10px;
  line-height: normal;
}
.z-show {
  position: absolute;
  top: 11.5px;
  left: 503px;
  z-index: 9998;
  width: 530px;
  height: 350px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  background: #fff;
}
.z-show-login {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
  cursor: move;
  user-select: none;
}
.z-thide {
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
  text-align: left;
}
.z-show-context {
  padding: 0;
  /* border: 1px solid #878787; */
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
.z-sc-center {
  padding: 0;
}
.z-sc-c2 {
  padding: 40px 0 39px;
}
.z-u-main {
  float: left;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
}
.z-u-alt {
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.z-u-official-terms {
  white-space: nowrap;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
  font-family: NotoSansHans-Regular;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 15px;
}
.z-u-plt {
  height: 120px;
  background: url("../../static/image/platform.png") no-repeat 13px 0;
}
.z-f-mgt10 {
  margin-top: 10px;
}
.z-f-mgt10 a,
.z-f-mgt10 a i {
  text-decoration: none;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
}
.aa {
  background: url("../../static/image/button2.png") no-repeat 0 9999px;
  background-position: right -428px;
}
.ss {
  background: url("../../static/image/button2.png") no-repeat 0 9999px;
  background-position: right -100px;
}
.z-f-mgt10 a i {
  width: 184px;
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.aa i {
  color: #fff;
  background: url("../../static/image/button2.png") no-repeat 0 9999px;
  background-position: 0 -387px;
}
.ss i {
  color: black;
  background: url("../../static/image/button2.png") no-repeat 0 9999px;
  background-position: 0 -59px;
}
.z-u-alt {
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.z-u-alt ul {
  margin-left: 40px;
}
.z-u-alt ul li {
  margin-top: 15px;
}
.z-u-alt ul li a {
  font-size: 12px;
  color: #333;
  line-height: 38px;
}
.z-u-alt ul li a i {
  width: 38px;
  height: 38px;
  margin-right: 14px;
  display: inline-block;
  vertical-align: middle;
}
.z-u-alt ul li:nth-child(1) a i {
  background: url("../../static/image/logo.png") no-repeat 0 9999px;
  background-position: -150px -670px;
}
.z-u-alt ul li:nth-child(2) a i {
  background: url("../../static/image/logo.png") no-repeat 0 9999px;
  background-position: -190px -670px;
}
.z-u-alt ul li:nth-child(3) a i {
  background: url("../../static/image/logo.png") no-repeat 0 9999px;
  background-position: -231px -670px;
}
.z-u-alt ul li:nth-child(4) a i {
  background: url("../../static/image/logo.png") no-repeat 0 9999px;
  background-position: -271px -670px;
}
.z-u-official-terms {
  white-space: nowrap;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
  /* font-family: NotoSansHans-Regular; */
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 15px;
}
.z-u-official-terms input {
  font-size: 12px;
  color: #333;
}
.z-u-official-terms label {
  margin-left: 2px;
}
.z-u-official-terms a {
  color: #507daf;
}
.z-zcls {
  position: absolute;
  z-index: 20;
  top: 16px;
  right: 20px;
  width: 10px;
  height: 10px;
  overflow: hidden;
  text-indent: -9999px;
  cursor: pointer;
  background: url("../../static/image/layer.png") no-repeat 0 9999px;
  background-position: 0 -95px;
}
.z-cmmts h3 {
  position: relative;
  top: 1px;
  height: 20px;
  text-align: left;
  border-bottom: 1px solid #cfcfcf;
}
.z-itm {
  padding: 15px 0;
  border-top: 1px dotted #ccc;
}
.z-itm-header {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: -100px;
}
.z-itm-header img {
  vertical-align: middle;
  float: left;
  width: 50px;
  height: 50px;
  margin-right: -100px;
}
.z-itm-text {
  margin-left: 60px;
}
.z-cnt {
  width: 100%;
  overflow: hidden;
  line-height: 20px;
}
.z-cnt a {
  display: flex;
  float: left;
}
.z-cnt .sd {
  margin-right: 5px;
  color: #0c73c2;
}
.z-rp {
  margin-top: 15px;
  text-align: right;
}
.z-time {
  float: left;
  margin: 0 !important;
  color: #999;
  /* text-align: right; */
}
.z-rp a i {
  margin-right: 5px;
  vertical-align: -2px;
  margin-top: -4px;
  width: 15px;
  height: 14px;
  background: url("../../static/image/icon2.png") no-repeat 0 9999px;
  background-position: -150px 0;
  display: inline-block;
  overflow: hidden;
}
.z-rp span {
  margin: 0 8px;
  color: #ccc;
}
.z-rp .sa {
  color: #666;
}
.z-cnt:hover .sd {
  text-decoration: underline;
}
.z-rp:hover .sa {
  text-decoration: underline;
}
.btn-prev{
  background:red;
}
</style>
