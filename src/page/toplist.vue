<template>
  <div class="h_box">
    <div class="ranking">
      <div class="ranking_left">
        <div class="ranking_left_bod">
          <h2>云音乐特色榜</h2>
          <ul class="oul">
            <li v-for="(item, index) in zbian" :key="index" @click="send(index)" :class="a == index ? 'li_active' : ''" >
              <div class="item">
                <div class="item_left">
                  <img
                    alt="云音乐飙升榜"
                    style="width:40px;height:40px;"
                    :src="item.image"
                  />
                </div>
                <p class="name">
                  <a>{{ item.name }}</a>
                </p>
                <p class="s-fc4">{{ item.time }}</p>
              </div>
            </li>
          </ul>
          <h2>全球媒体榜</h2>
          <ul class="oul">
            <li v-for="(item, index) in zbian1" :key="index" @click="send(index+4)" :class="a == index+4 ? 'li_active' : ''" >
              <div class="item">
                <div class="item_left">
                  <img
                    alt="云音乐飙升榜"
                    style="width:40px;height:40px;"
                    :src="item.image"
                  />
                </div>
                <p class="name">
                  <a>{{ item.name }}</a>
                </p>
                <p class="s-fc4">{{ item.time }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="g-mn3 buy">
        <div class="g-mn3c">
          <div class="g-wrap">
            <div class="m-info m-info-rank f-cb">
              <div class="cover u-cover u-cover-rank">
                <!-- 大图片 -->
                <img :src='h_zhi.image' />
                <span class="msk h_jingtu"></span>
              </div>
              <div class="cnt">
                <div class="cntc m-info">
                  <div class="hd f-cb">
                    <!-- 名字 -->
                    <h2>
                      {{ h_zhi.name }}
                    </h2>
                  </div>
                  <div class="user f-cb">
                    <i class="u-icn u-icn-57"></i>
                    <span class="sep s-fc3">最近更新：11月23日</span>
                    <span class="s-fc4">（每天更新）</span>
                  </div>
                  <div class="btns f-cb">
                    <a
                      href="Javascript:;"
                      class="u-btn2 u-btn2-2 u-btni-addply f-fl"
                    >
                      <i>
                        <em class="ply"></em>
                        播放
                      </i>
                    </a>
                    <a href="Javascript:;" class="u-btni u-btni-add"></a>
                    <a href="Javascript:;" class="u-btni u-btni-fav">
                      <i>(2518002)</i>
                    </a>
                    <a href="Javascript:;" class="u-btni u-btni-share">
                      <i @click="enjoy">(7240)</i>
                    </a>
                    <a href="Javascript:;" class="u-btni u-btni-dl">
                      <i @click="bg">下载</i>
                    </a>
                    <a href="Javascript:;" class="u-btni u-btni-cmmt j-cmt">
                      <i>
                        (
                        <span id="comment-count">159377</span>
                        )
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="g-wrap12">
            <div class="u-title u-title-1 f-cb">
              <h3>
                <span class="f-ff2">歌曲列表</span>
              </h3>
              <span class="sub s-fc3">
                <span>100</span>
                首歌
              </span>
              <div class="more s-fc3">
                播放：
                <strong class="s-fc6">2573575168</strong>
                次
              </div>
            </div>
            <table class="m-table m-table-rank">
              <thead>
                <tr>
                  <th class="first w1"></th>
                  <th>
                    <div class="wp">标题</div>
                  </th>
                  <th class="w2-1">
                    <div class="wp">时长</div>
                  </th>
                  <th class="w3-1">
                    <div class="wp">歌手</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <!-- 排行 -->
                <tr class="info2" v-for="(item, index) in h_zhi.one" :key="index">
                  <td>
                    <div class="hd">
                      <span class="num1">{{ item.number }}</span>
                      <div class="rk">
                        <span class="ico u-icn s-fc9" :class="item.img">{{
                          item.number1
                        }}</span>
                      </div>
                    </div>
                  </td>
                  <td :class="item.rank">
                    <div class="f-cb">
                      <div class="tt">
                        <a href="Javascript:;" :class="item.dis">
                          <img alt class="rpic" :src="item.img1" />
                        </a>
                        <span class="ply">&nbsp;</span>
                        <div class="ttc">
                          <span class="txt" >
                           
                              <router-link :to="{path:'/toplist#'+index}">
                             
                              <b title>
                                {{ item.txt }}
                                <div class="soil"></div>                      
                              </b>
                         
                         </router-link>
                         
                           
                            <span title="播放mv" :class="item.img2"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="s-fc3">
                    <span class="u-dur">{{ item.time }}</span>
                    <div class="opt hshow">
                      <a href="Javascript:;" class="u-icn u-icn-81 icn-add"></a>
                      <span class="icn icn-fav" title="收藏"></span>
                      <span class="icn icn-share" title="分享"></span>
                      <span class="icn icn-dl" title="下载"></span>
                    </div>
                  </td>
                  <td>
                    <div class="text" title>
                      <span title>
                        <a href="Javascript:;">{{ item.size }}</a>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
             <todis></todis>
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
import todis from './todis' 
import $ from 'jquery'
import { mapState, mapMutations } from "vuex";
export default{
  components:{todis},
  data() {
    return {
       a:0,
       h_zhi:"",
       h_quan:"",
       show:false,
       showb:false,
       isshow:false
    }
  },
  computed: {
    ...mapState(["zbian",'zbian1'])
  },
  methods: {
    send(val){
      this.a = val;
      this.h_zhi = this.h_quan[val]
    },
    getAxios(){
      this.$http.get('toplist',).then((res)=>{
              let arr = res.data.dara.reverse()
              this.h_quan = arr
              this.h_zhi = arr[0]
              console.log(arr[0].image)
            }).catch((res)=>{
                console.log('error')
      })
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
    this.getAxios()
  },

}

</script>

<style scoped lang="less">
@width: 980px;
@color: #333;
@font-size: 12px;
@margin-top: 40px;



.h_box::after{
  clear: both;
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
}
.ranking::after{
    clear: both;
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
}
.h_box::after{
    clear: both;
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
}
.none {
  display: none;
}
.ranking {
  width: @width;
  background: url("../../static/image/wrap3h.png") repeat-y center 0;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  position: relative;
  height: 5000px;
}
.ranking_left {
  width: 240px;
  position: absolute;
  left: 0;
}
.ranking_left_bod {
  margin-top: @margin-top;
  h2 {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-weight: 500;
  }
  ul {
    padding-bottom: 15px;
    list-style: none;
    li {
      height: 40px;
      padding: 10px 0 10px 20px;
      position: relative;
      cursor: pointer;
      &:hover {
        background-color: #e6e6e6 ;
      }
      .item {
        overflow: hidden;
        padding-left: 50px;
        .item_left {
          float: left;
          margin-left: -50px;
          overflow: hidden;
          width: 40px;
        }
        .name {
          width: 150px;
          overflow: hidden;
          margin-top: 2px;
          margin-bottom: 8px;
          font-size: @font-size;

          a {
            color: #000;
            white-space: nowrap;
          }
        }
        .s-fc4 {
          font-size: @font-size;
          color: #999;
        }
      }
    }
    .li_active{
      background: #e6e6e6;
    }
  }
}
.ranking_ul li:nth-child(1):hover {
  background: #e6e6e6 !important;
}
.ranking_ultwo li:nth-child(1):hover {
  background-color: #f4f2f2 !important;
}
.ranking_right {
  height: 100%;
  width: 740px;
  padding-bottom: 50px;
  position: absolute;
  right: 0;
  .ranking_right_bod {
    padding: 40px;
    overflow: hidden;
  }
}
.ranking_right_bod_left {
  width: 158px;
  height: 158px;
  float: left;
  position: relative;
  margin: 0 -220px 0 0;
  padding: 3px;
  border: 1px solid #ccc;
}
.ranking_right_bod_rig {
  float: right;
  width: 100%;
  .bod {
    margin-left: 187px;
    .bod_a {
      margin: 16px 0 4px;
      line-height: 24px;
      &::after {
        clear: both;
        content: ".";
        display: block;
        height: 0;
        visibility: hidden;
      }
      h2 {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }
    }
    .bod_b {
      margin: 0 0 20px;
      line-height: 35px;
      i {
        background: url("../../static/image/iconAA.png") no-repeat -18px -682px;
        width: 13px;
        height: 13px;
        float: left;
        margin: 9px 0 0 3px;
      }
      .span_one {
        margin-left: 5px;
        line-height: 35px;
        color: #666;
        font-size: @font-size;
      }
    }
    @widhtA: 31px;
    @hrifhtA: 31px;
    @line_height: 31px;
    .bod_c {
      margin-bottom: 25px;
      margin-right: -10px;
      .bod_c_a {
        float: left;
        color: #fff;
        padding: 0 5px 0 0;
        white-space: nowrap;
        height: @hrifhtA;
        line-height: @line_height;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        background: url("../../static/image/button22.png") no-repeat right -428px;
        display: block;
        font-size: @font-size;
        i {
          background: url("../../static/image/button22.png") no-repeat 0 -387px;
          display: inline-block;
          height: @hrifhtA;
          padding: 0 7px 0 8px;
          line-height: @line_height;
          overflow: hidden;
          vertical-align: top;
          text-align: center;
          cursor: pointer;
        }
        .ply {
          float: left;
          width: 20px;
          height: 18px;
          margin: 6px 2px 2px 0;
          overflow: hidden;
          background: url("../../static/image/button22.png") no-repeat 0 -1622px;
        }
      }
      .bod_c_b {
        float: left;
        height: @hrifhtA;
        line-height: @line_height;
        cursor: pointer;
        width: 31px;
        margin-left: -3px;
        padding-right: 0;
        background: url("../../static/image/button22.png") no-repeat 0 -1588px;
        display: block;
        font-size: @font-size;
        margin-right: 6px;
      }
      .bod_c_c {
        padding: 0 5px 0 0;
        white-space: nowrap;
        background: url("../../static/image/button22.png") no-repeat right -1020px;
        float: left;
        height: @hrifhtA;
        line-height: @line_height - 1px;
        cursor: pointer;
        margin-right: 6px;
        font-size: @font-size;
        i {
          background: url("../../static/image/button22.png") no-repeat 0 -977px;
          padding-right: 2px;
          padding-left: 28px;
          float: left;
          height: @hrifhtA;
          line-height: @line_height - 1px;
          cursor: pointer;
        }
      }
    }
  }
}
.ranking_right_wrap {
  padding: 0 30px 40px 40px;
  .song_list {
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 20px;
      line-height: 28px;
      float: left;
    }
    .s_fc3 {
      margin: 9px 0 0 20px;
      float: left;
      font-size: @font-size;
    }
    .s_fc3 {
      margin-top: 5px;
      float: left;
    }
    .ss_fc3 {
      float: right;
      margin-top: 5px;
      font-size: @font-size;
    }
  }
  .song_table {
    width: 100%;
    border: 1px solid #d9d9d9;
    .first_th {
      width: 77px;
      height: 38px;
      background-color: #f7f7f7;
      background: url("../../static/image/tableA.png") repeat-x 0 0;
      vertical-align: top;
      text-align: left;
      font-weight: normal;
      color: #666;
    }
    .two_th {
      height: 38px;
      background-color: #f7f7f7;
      background: url("../../static/image/tableA.png") repeat-x 0 0;
      vertical-align: top;
      text-align: left;
      font-weight: normal;
      color: #666;
      .wp {
        height: 34px;
        line-height: 23px;
        padding: 8px 10px;
        background: url("../../static/image/tableA.png") no-repeat 0 -56px;
        text-align: left;
        font-weight: normal;
        color: #666;
        font-size: @font-size;
      }
    }
    .song_td {
      padding: 6px 10px;
      line-height: 18px;
      text-align: left;
      background-color: #f7f7f7;
      background: url("../../static/image/tableA.png") no-repeat 0 9999px;
      .song_td_bg {
        height: 18px;
        .num {
          float: left;
          width: 25px;
          margin-left: 0;
          text-align: center;
          color: #999;
          font-size: @font-size;
        }
        .rk {
          float: right;
          width: 32px;
          margin-right: -5px;
          text-align: center;
          .u_icn {
            display: block;
            float: none;
            margin: 0 auto;
            padding-left: 0;
            width: 16px;
            height: 17px;
            background: url("../../static/image/iconAA.png") no-repeat -67px -283px;
          }
        }
      }
    }
    .rank_td {
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: #f7f7f7;
      padding: 6px 10px;
      line-height: 18px;
      text-align: left;
      background: url("../../static/image/tableA.png") no-repeat 0 9999px;
      .tt {
        float: left;
        width: 100%;
        img {
          float: left;
          width: 50px;
          height: 50px;
          margin-right: 14px;
          cursor: pointer;
        }
        span {
          margin-top: 17px;
          margin-right: 8px;
          float: left;
          width: 17px;
          height: 17px;
          cursor: pointer;
          background: url("../../static/image/tableA.png") no-repeat 0 -103px;
          &:hover {
            background-position: 0 -128px;
          }
        }
        .songs {
          margin-top: 16px;
          cursor: pointer;
          .songs_a {
            position: relative;
            padding-right: 25px;
            margin-right: -25px;
            height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .time_td {
      background-color: #f7f7f7;
      padding: 6px 10px;
      line-height: 18px;
      text-align: left;
      background: url("../../static/image/tableA.png") no-repeat 0 9999px;
      cursor: pointer;
      .item_song {
        display: none;
        float: left;
        .item_song_a {
          float: left;
          margin-top: 2px;
          width: 13px;
          height: 13px;
          background: url("../../static/image/iconAA.png") no-repeat 0 -700px;
        }
        .item_song_b {
          float: left;
          width: 18px;
          height: 16px;
          margin-left: 1px;
          overflow: hidden;
          text-indent: -999px;
          cursor: pointer;
          background: url("../../static/image/tableA.png") no-repeat 0 -174px;
        }
      }
    }
    .singer {
      background-color: #f7f7f7;
      padding: 6px 10px;
      line-height: 18px;
      text-align: left;
      background: url("../../static/image/tableA.png") no-repeat 0 9999px;
      .text {
        width: 100%;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: @font-size;
        a {
          &:hover {
            text-decoration: underline;
            color: #333;
          }
        }
      }
    }
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.tr_A {
  background: #f7f7f7;
  width: 686.6px;
}
.tr_A:hover .item_song {
  display: block;
}
tbody .tr_A:nth-child(2n) {
  background: none;
}
.songs_a a:hover {
  text-decoration: underline;
}

.red {
  background: #e6e6e6;
  // background: red;
}
.mine {
  background: none;
}
#toplist,
textarea,
select,
input,
button {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}
.clear:after {
  display: block;
  content: "";
  clear: both;
}
.g-bd3 {
  background: url("https://s2.music.126.net/style/web2/img/frame/wrap3.png?ccb3d3271afd8efce4a99c3a11ba9a56")
    repeat-y center 0;
}

.g-bd3-1 {
  min-height: 700px;
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
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}

.g-sd3-1 {
  position: static;
}

.g-sd3 {
  float: left;
  width: 240px;
}

.n-minelst-2 {
  margin-top: 40px;
}

.f-ff1 {
  font-family: simsun, \5b8b\4f53;
}

.n-minelst h2 {
  padding: 0 10px 12px 15px;
  font-size: 14px;
  color: #000;
}

.n-minelst ul * {
  cursor: pointer;
  vertical-align: middle;
}

.n-minelst li {
  position: relative;
  zoom: 1;
  height: 42px;
  padding: 6px 0 6px 20px;
}

.n-minelst-2 li {
  padding: 10px 0 10px 20px;
}

.n-minelst .item {
  padding-left: 50px;
}

.n-minelst .left {
  float: left;
  margin-left: -50px;
  overflow: hidden;
  width: 40px;
}

.n-minelst .avatar {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
}

.n-minelst .avatar img {
  width: 40px;
  height: 40px;
}

.n-minelst .avatar .msk {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-position: -310px -330px;
}

.n-minelst .name {
  width: 150px;
  overflow: hidden;
  margin-top: 2px;
  margin-bottom: 8px;
}

.n-minelst .name a {
  white-space: nowrap;
}

.s-fc0,
a.s-fc0:hover {
  color: #000;
}

.s-fc4,
a.s-fc4:hover {
  color: #999;
}

.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.n-minelst li.z-selected {
  background: #e6e6e6;
}
.n-minelst ul .z-selected:hover {
  background: #e6e6e6;
}
.n-minelst ul li:hover {
  background-color: #f4f2f2;
}
/* 歌曲列表 */
.g-mn3 {
  height: 100%;
  float: right;
  width: 740px;
}
.g-wrap {
  padding: 40px;
}
.m-info .cover {
  float: left;
  position: relative;
  margin: 0 -220px 0 0;
  width: 158px;
  height: 158px;
}
.u-cover-rank {
  padding: 3px;
  border: 1px solid #ccc;
}
.u-cover-rank,
.u-cover-rank img {
  width: 150px;
  height: 150px;
  margin-top: 4px;
  margin-left: 4px;
}
.u-cover {
  position: relative;
  display: block;
}
.u-cover-rank .msk {
  width: 150px;
  height: 150px;
  background-position: -230px -380px;
  top: 3px;
  left: 3px;
}
.u-cover .bottom,
.u-cover .msk,
.n-musicsd .lst .avatar .msk {
  background: url("https://s2.music.126.net/style/web2/img/coverall.png?a3b66c6255a28e913986e98ae9b2dd8e")
    no-repeat;
}
.m-info .cnt {
  float: right;
  width: 100%;
}
.m-info-rank .cntc {
  margin-left: 187px;
}
.m-info .hd {
  position: relative;
  margin: 0 0 12px;
  line-height: 24px;
}
.m-info-rank .hd {
  margin: 16px 0 4px;
}

.m-info .hd h2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.m-info .user {
  margin: 0 0 20px;
  line-height: 35px;
  font-size: 12px;
}
.m-info .user .u-icn {
  float: left;
  margin: 9px 0 0 3px;
}
.u-icn,
.u-title-1 .out .icon {
  background: url("https://s2.music.126.net/style/web2/img/icon.png?861a29a6509f9a540e92a1fbcd46cb7a")
    no-repeat 0 9999px;
}
.u-icn-57 {
  width: 13px;
  height: 13px;
  background-position: -18px -682px;
}
.m-info-rank .sep {
  margin-left: 5px;
}
.m-info .btns {
  margin-bottom: 25px;
  margin-right: -10px;
  font-size: 12px;
}
.u-btni-addply {
  float: left;
}
.u-btn2-2 {
  color: #fff;
  background-position: right -428px;
}
.u-btn2,
.u-btn2:hover {
  text-decoration: none;
}
.u-btn2 {
  padding: 0 5px 0 0;
  white-space: nowrap;
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
.u-btn2,
.u-btn2 i,
.u-btn2 .icn,
.u-btni,
.u-btni i,
.u-tag,
.u-tag i,
.u-btni-addply .ply {
  background: url("https://s2.music.126.net/style/web2/img/button2.png?c80871ddb2908d30d05e24390f734575")
    no-repeat 0 9999px;
}
.u-btni-addply i {
  padding: 0 7px 0 8px;
}
.u-btn2-2 i {
  color: #fff;
  background-position: 0 -387px;
}
.u-btn2 i {
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btni-addply .ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
}
em,
i {
  font-style: normal;
  text-align: left;
  font-size: inherit;
}
.m-info .btns .u-btni-add {
  margin-right: 5px;
}
.u-btni-add {
  width: 31px;
  margin-left: -5px;
  padding-right: 0;
  background-position: 0 -1588px;
}
.u-btni,
.u-btni:hover {
  color: #333;
  text-decoration: none;
}
.u-btni {
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.u-btni,
.u-btni i {
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
}
.m-info .btns2 .u-btni,
.m-info .btns .u-btni {
  margin-right: 6px;
  font-family: simsun, \5b8b\4f53;
}
.u-btni-share,
.u-btni-fav,
.u-btni-cmmt,
.u-btni-dl {
  background-position: right -1020px;
}
.u-btni-fav i {
  background-position: 0 -977px;
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
.u-btni-share i {
  background-position: 0 -1225px;
}
.u-btni-dl i {
  background-position: 0 -2761px;
}
.u-btni-cmmt i {
  background-position: 0 -1465px;
}
/*  */
.g-wrap12 {
  padding: 0 30px 40px 40px;
}
.u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.u-title-1 {
  height: 33px;
}
.u-title h3 {
  float: left;
  font-size: 24px;
  font-weight: normal;
}
.u-title-1 h3 {
  font-size: 20px;
  line-height: 28px;
}
.u-title .sub {
  float: left;
  margin: 13px 0 0 10px;
  font-size: 12px;
}
.u-title-1 .sub {
  margin: 9px 0 0 20px;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.u-title .more {
  float: right;
  margin-top: 14px;
}
.u-title-1 .more {
  margin-top: 5px;
  font-size: 12px;
}
.s-fc6,
a.s-fc6:hover {
  color: #c20c0c;
}
/* 表格 */
.m-table {
  width: 100%;
  border: 1px solid #d9d9d9;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}

.m-table th,
.m-table th .wp,
.m-table td,
.m-table .ply,
.m-table .mv,
.m-table .icn,
.m-info .edit {
  background: url("https://s2.music.126.net/style/web2/img/table.png?d224e9e7906d8f2ae6af5d7b70fb0676")
    no-repeat 0 9999px;
}
.m-table th {
  height: 35px;
  background-color: #f7f7f7;
  background-position: 0 0;
  background-repeat: repeat-x;
}
.m-table th {
  vertical-align: top;
  text-align: left;
  font-weight: normal;
  color: #666;
}
.m-table .w1 {
  width: 74px;
}
.m-table-rank .first {
  width: 77px;
}

.m-table th .wp {
  height: 18px;
  line-height: 18px;
  padding: 8px 10px;
  background-position: 0 -56px;
}
.m-table .w2-1 {
  width: 91px;
}
.m-table .w3-1 {
  width: 26%;
}

.m-table td {
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
}
.m-table .even td {
  background-color: #f7f7f7;
}
.m-table .hd {
  height: 18px;
}
.m-table .hd .num {
  width: 25px;
  margin-left: 5px;
  color: #999;
}
.m-table-rank .hd .num {
  float: left;
  width: 25px;
  margin-left: 0;
  text-align: center;
}
.m-table-rank .rk {
  float: right;
  width: 32px;
  margin-right: -5px;
  text-align: center;
}
.u-icn-75 {
  width: 16px;
  height: 17px;
  background-position: -67px -283px;
}
.u-icn-80 {
  width: 16px;
  height: 17px;
  background-position: -74px -268px;
}
.m-table-rank .rk .u-icn-75 {
  display: block;
  float: none;
  margin: 0 auto;
  padding-left: 0;
}
.m-table-rank td.rank {
  padding-top: 10px;
  padding-bottom: 10px;
}
.m-table .tt {
  float: left;
  width: 100%;
}
a,
a *,
.f-hand,
.f-hand * {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #333;
}
.m-table-rank .rpic {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: 14px;
}
.m-table .ply {
  width: 17px;
  height: 17px;
  cursor: pointer;
  background-position: 0 -103px;
}
.m-table .ply {
  float: left;
}
.m-table .tt .ply {
  margin-right: 8px;
}
.m-table-rank td.rank .ply {
  margin-top: 17px;
}
.m-table-rank td.rank .ttc {
  margin-top: 16px;
}
.m-table .ttc {
  height: 18px;
  margin-right: 20px;
}

.m-table .txt {
  position: relative;
  display: inline-block;
  padding-right: 25px;
  margin-right: -25px;
  max-width: 99%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-table-rank .txt {
  max-width: 88%;
}
.m-table-rank td.rank .txt {
  max-width: 67%;
}
.m-table b {
  font-weight: normal;
}
.m-table .soil {
  position: absolute;
  text-indent: -9999em;
}
.m-table .opt {
  float: left;
}
.m-table .hshow {
  display: none;
}
.m-table .u-icn-81 {
  float: left;
  margin-top: 2px;
}
.u-icn-81 {
  width: 13px;
  height: 13px;
  background-position: 0 -700px;
}
.m-table .text {
  width: 100%;
  position: relative;
  zoom: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.m-table .mv,
.m-table .icn {
  float: left;
  width: 18px;
  height: 16px;
  margin: 2px 0 0 4px;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
}
.m-table .icn-fav {
  background-position: 0 -174px;
}
.m-table .icn-share {
  background-position: 0 -195px;
}
.m-table .icn-dl {
  background-position: -81px -174px;
}
.m-table tr.z-hover .hshow,
.m-table tr:hover .u-dur {
  display: none;
}
.m-table tr.z-hover .hshow,
.m-table tr:hover .hshow {
  display: block;
  position: relative;
  margin-right: -10px;
}
.u-icn-81:hover {
  background-position: -22px -700px;
}
.m-table .icn-fav:hover {
  background-position: -20px -174px;
}
.m-table .icn-share:hover {
  background-position: -20px -195px;
}
.m-table .icn-dl:hover {
  background-position: -104px -174px;
}
.m-table a:hover {
  text-decoration: underline;
  color: #333;
}
.m-table .mv,
.m-table .icn {
  float: left;
  width: 18px;
  height: 16px;
  margin: 2px 0 0 4px;
  overflow: hidden;
  text-indent: -999px;
  cursor: pointer;
}
.m-table .mv,
.m-table .icnfix {
  position: absolute;
  top: 0;
  right: 0;
}
.m-table .mv {
  width: 23px;
  height: 17px;
  margin: 1px 0 0 0;
  background-position: 0 -151px;
}

.u-icn-73 {
  background-position: -74px -299px;
}
.s-fc9 {
  color: #bb2128;
}
.m-table-rank .rk .ico {
  padding-left: 8px;
  line-height: 17px;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.m-table .dis {
  display: none;
}
.u-icn-74 {
  background-position: -74px -318px;
}
/* 留言板 */
.n-cmt {
  margin-top: 40px;
}
.u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
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
.u-title-1 h3 {
  font-size: 20px;
  line-height: 28px;
}
.u-title .sub {
  float: left;
  margin: 13px 0 0 10px;
}
.u-title .sub {
  float: left;
  margin: 13px 0 0 10px;
}
.s-fc3,
a.s-fc3:hover {
  color: #666;
}
.m-cmmt {
  margin-top: 20px;
}
.m-cmmt .iptarea {
  margin-bottom: 20px;
}
.m-cmmt .head,
.m-cmmt .head img {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: -100px;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.m-cmmt .iptarea .m-cmmtipt {
  margin-left: 62px;
}
.u-txtwrap {
  padding-right: 14px;
}
div.holder-parent {
  position: relative;
  zoom: 1;
}
textarea {
  resize: none;
  overflow: auto;
}
.u-txt {
  height: 19px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
}
textarea.u-txt,
div.u-txt {
  width: 100%;
  margin-right: -20px;
}
.m-cmmtipt .area {
  height: 50px;
  display: block;
}
.m-cmmtipt .btns {
  clear: both;
  padding-top: 10px;
}
.u-icn-36 {
  width: 18px;
  height: 18px;
  background-position: -40px -490px;
}
.m-cmmtipt .btns .icn {
  float: left;
  margin: 0px 10px 0 0;
  cursor: pointer;
}
.u-icn-41 {
  width: 18px;
  height: 18px;
  background-position: -60px -490px;
}
.u-btn,
div.u-page a,
div.u-page a.js-selected,
div.u-page a.znxt.js-disabled,
div.u-page a.zprv.js-disabled {
  background: url("https://s2.music.126.net/style/web2/img/button.png?1f3066bcc6da18be0fc7098f9c1acf11")
    no-repeat 0 9999px;
}
.m-cmmtipt .btns .icn {
  float: left;
  margin: 0px 10px 0 0;
  cursor: pointer;
}
.u-btn {
  display: inline-block;
}
.u-btn-1 {
  width: 46px;
  height: 25px;
  background-position: -84px -64px;
  color: #fff;
  text-align: center;
  line-height: 25px;
}
.m-cmmtipt .btns .btn {
  float: right;
}
.m-cmmtipt .btns .zs {
  float: right;
  margin-right: 10px;
  line-height: 25px;
}
.u-arr {
  width: 13px;
  height: 14px;
  overflow: hidden;
}
.m-cmmtipt .corr {
  position: absolute;
  top: 11px;
  left: -7px;
}
.u-arr .arrline,
.u-arr .arrclr,
.u-arr .arriner {
  display: block;
  font-family: "SimSun";
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  height: 10px;
  line-height: normal;
}
.u-arr .arrline {
  color: #cdcdcd;
}
.u-arr .arrclr {
  margin: -10px 0 0 1px;
  color: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
.u-hd4 {
  position: relative;
  top: 1px;
  height: 20px;
  border-bottom: 1px solid #cfcfcf;
}
.m-cmmt .cmmts .itm {
  padding: 15px 0;
  border-top: 1px dotted #ccc;
}
.m-cmmt .cmmts img {
  vertical-align: middle;
}
.m-cmmt .cmmts .cntwrap {
  margin-left: 60px;
}
.m-cmmt .cmmts .cntwrap .f-brk,
.m-cmmt .cmmts .cnt.f-brk {
  word-break: break-word;
}

.m-cmmt .cmmts .cnt {
  width: 100%;
  overflow: hidden;
  line-height: 20px;
}
.f-brk {
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
.m-cmmt .cmmts .cntwrap .s-fc7 {
  margin-right: 5px;
}

.s-fc7,
a.s-fc7:hover {
  color: #0c73c2;
}
.m-cmmt .cmmts div.rp {
  margin-top: 15px;
  text-align: right;
}
.m-cmmt .cmmts .time {
  float: left;
  margin: 0 !important;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
.m-cmmt .cmmts .cntwrap .u-icn2 {
  margin-right: 5px;
  vertical-align: -2px;
}

.m-cmmt .cmmts .zan {
  margin-top: -4px;
}

.u-icn2 {
  background: url("https://s2.music.126.net/style/web2/img/icon2.png?4f4872e141e6243a0bc7eaba316d1296")
    no-repeat 0 9999px;
}
.u-icn2-12,
.u-icn2-13 {
  width: 15px;
  height: 14px;
  background-position: -150px 0;
}
.m-cmmt .cmmts .sep {
  margin: 0 8px;
  color: #ccc;
}
.m-cmmt .cmmts div.rp {
  margin-top: 15px;
  text-align: right;
}
a {
  font-size: 12px;
}
.num1 {
  font-size: 12px;
  color: #999;
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
  // padding-bottom: 10px;
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
