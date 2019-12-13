<template>
  <div class="s-container">
    <div class="s-bd">
      <div class="s-wrap">
        <!-- 话筒那 -->
        <div class="s-rdtype">
          <div class="s-boxes s-muti">
            <ul class="s-box" v-if="number==1">
              <li v-for="(item,index) in topArr" :key="index" @click="change">
                <router-link :to="{path:'/djradio/categroy/'+index}" :class="id==index?'s-zei':''">
                  <div class="s-icon" :style="item.bgImg"></div>
                  <span>{{item.title}}</span>
                </router-link>
              </li>
            </ul>
            <ul class="s-box" v-else>
              <li v-for="(item,index) in topArr1" :key="index">
                <router-link :to="{path:'/djradio/categroy/'+index}">
                  <div class="s-icon" :style="item.bgImg"></div>
                  <span>{{item.title}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <span class="s-turn s-turn-left" @click="pre" :class="number==1?'s-dis':''">向左</span>
          <span class="s-turn s-turn-right" @click="next" :class="number==2?'s-dis':''">向右</span>
          <div class="s-dotpage s-j-flag">
            <span class="s-dot" :class="number==1?'s-curr':''">1</span>
            <span class="s-dot" :class="number==2?'s-curr':''">2</span>
          </div>
        </div>
        <!-- 推荐 -->
        <div class="s-new">
          <div class="s-title s-cb">
            <h3>
              <span class="s-ff2">
                <a href>音乐故事</a>
                <span class="s-ff1">·</span>
                电台
              </span>
            </h3>
          </div>
          <ul class="s-rdilist s-cb">
            <li v-for="(item,index) in arr" :key="index">
              <a href class="s-cover s-cover-rdi2">
                <img :src="item.image" alt />
              </a>
              <h3>
                <a href>{{item.title}}</a>
              </h3>
              <p>{{item.text}}</p>
            </li>
          </ul>
        </div>
        <!-- 音乐故事电台 -->
        <div class="s-rdmore">
          <div class="s-title s-cb">
            <h3>
              <span class="s-ff2">
                <a href>电台排行榜</a>
              </span>
            </h3>
            <div class="s-tab">
              <a href class="z-sel">上升最快</a>
              <span class="line">|</span>
              <a href>最热电台</a>
            </div>
          </div>
          <ul class="s-rdilist s-cb">
            <li v-for="(item,index) in djphArr" :key="index">
              <router-link :to="{path:'/djradio/detail/'+item.id}"  class="s-cvr u-cover s-f1"> 
                <img :src="item.image" alt />
              </router-link>
              <div class="s-cnt">
                <h3 class="s-ff3">
                  <a href>{{item.timu}}</a>
                </h3>
                <p class="s-note">
                  <i class="s-icn s-icn-27"></i>
                  <a class="s-sep">{{item.author}}</a>
                </p>
                <p class="note s-fc4" v-html="item.tatal"></p>
              </div>
            </li>
          </ul>
          <el-pagination
          class="s_zhub"
            :page-size="54"
            :pager-count="7"
            layout="prev, pager, next"
            :total="1000"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import $ from "jquery"
import "../../static/less/djradio1.css"
// import djjson from "../../static/json/dj";
import { mapState, mapMutations, mapActions } from "vuex";
// import djjson from "../../st'atic/json/dj";
export default {
  data() {
    return {
      btnNu:0,
      number: 1,
      arr: [],
      topArr: [],
      topArr1: [],
      id: "",
      djphArr: [],
      numberId: 0
    };
  },
  computed: {
    ...mapState(["dj", "djphArr1"])
  },
  methods: {
    ...mapMutations(["changePage"]),
    ...mapActions(["adds"]),
    pre() {
      this.number = 1;
    },
    next() {
      this.number = 2;
    },
    handleCurrentChange(val) {
      this.numberId = $(val);
      this.changePage(val);
      console.log(this.djphArr1);
      this.djphArr.length = 0;
      for (var x = 0; x < this.djphArr1.length; x++) {
        this.djphArr.push(this.djphArr1[x]);
      }
    },
    change() {
      this.arr=[];
      this.id=this.$route.params.id;
      var a = parseInt(this.$route.params.id);
      this.arr = this.dj.newdj[Object.keys(this.dj.newdj)[a]];
     
    },
    // $(function() {
    // this.numberId = $(".el-pager .active").html();
    // console.log($(".el-pager .active").html(), 32e23);
    // for (var i = this.numberId * 7; i < (this.numberId + 1) * 7; i++) {
    //   this.djphArr.push(djjson.djrank[i]);
    // }
    btn(index){
      this.btnNu=index
    }
  },

  mounted() {
    this.adds();

    // console.log(this.djTop,this.newdj,this.djrank)
    // console.log(djjson);
    // console.log(this.$route.params.id);
    // this.id = String(this.$route.params.id).split("=")[1];
    // this.arr = djjson.newdj.newdj02;
    for (var x = 0; x < 18; x++) {
      this.topArr.push(this.dj.djTop[x]);
    }
    for (var x = 18; x < this.dj.djTop.length; x++) {
      this.topArr1.push(this.dj.djTop[x]);
    }
    for (var i = this.numberId * 7; i < (this.numberId + 1) * 7; i++) {
      this.djphArr.push(this.dj.djrank[i]);
    }
    var a = parseInt(this.$route.params.id);
    this.arr = this.dj.newdj[Object.keys(this.dj.newdj)[a]];
  }
};
</script>

<style scoped>
.djs {
  padding: 40px;
}
.djs .new {
  margin-top: 10px;
}
.s_zhub{
  text-align: center
}
</style>