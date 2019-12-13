<template>
  <div class="s-container">
    <div class="s-bd">
      <div class="s-wrap">
        <!-- 话筒那 -->
        <div class="s-rdtype">
          <div class="s-boxes s-muti">
            <ul class="s-box" v-if="number==1">
              <li v-for="(item,index) in topArr" :key="index" >
                <router-link :to="{path:'/djradio/categroy/'+index}">
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
        <div class="s-rdtj-top">
          <!-- 推荐 -->
          <div class="s-rdtj s-blk">
            <!-- top -->
            <div class="s-title">
              <h3>
                <a href class>推荐节目</a>
              </h3>
              <a href class="more s-fc3">更多></a>
            </div>
            <!-- tj title -->
            <ul class="s-plylist s-toplist">
              <li class="s-itm" v-for="(item,index) in dj1.recommendeProgram" :key="index">
                <a href class="s-cvr">
                  <img
                    :src="item.img"
                    alt
                  />
                  <i class="ply"></i>
                </a>
                <div class="s-cnt">
                  <h3 class="s-thide">
                    <a href>{{item.title}}</a>
                  </h3>
                  <p class="s-thide">
                    <a href class="s-f4">{{item.name}}</a>
                  </p>
                </div>
                <a href class="s-tag s-type">{{item.className}}</a>
              </li>
            </ul>
          </div>
          <div class="s-flr s-blk">
            <!-- top -->
            <div class="s-title">
              <h3>
                <a href class>节目排行榜</a>
              </h3>
              <a href class="more s-fc3">更多></a>
            </div>
            <!-- tj title -->
            <ul class="s-plylist s-toplist">
              <li class="s-itm" v-for="(item,index) in dj1.programLeaderboard" :key="index">
                <div class="s-rank">
                  <em class="s-red s-fs1">{{item.num}}</em>
                  <span class="s-rnk s-ff0">
                    <i class="s-icn s-icn-72"></i>{{item.trend}}
                  </span>
                </div>
                <a href class="s-cvr">
                  <img
                    :src="item.img"
                    alt
                  />
                  <i class="ply"></i>
                </a>
                <div class="s-cnt">
                  <h3 class="s-thide">
                    <a href>{{item.title}}</a>
                  </h3>
                  <p class="s-thide">
                    <a href class="s-f4">{{item.name}}</a>
                  </p>
                </div>
                <span class="s-hot u-hot s-f1">
                  <i style="width:92%">
                    <i></i>
                  </i>
                </span>
              </li>
             
            </ul>
          </div>
        </div>
        <!-- 音乐故事电台 -->
        <div class="s-rdmore" v-for="(item,index) in dj1.djtype" :key="index"> 
          <div class="s-title s-cb">
            <h3>
              <span class="s-ff2">
                <a href>{{item.title}}</a>
                <span class="s-ff1">·</span>
                电台
              </span>
            </h3>
            <a href class="s-more">更多></a>
          </div>
          <ul class="s-rdilist s-cb">
            <li v-for="(item1,index1) in item.list" :key="index1">
              <a href class="s-cvr u-cover s-f1">
                <img
                  :src="item1.img"
                  alt
                />
              </a>
              <div class="s-cnt">
                <h3 class="s-ff3">
                  <a href>{{item1.name}}</a>
                </h3>
                <p class="note s-fc4">{{item1.notes}}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 英文读物 -->
     
      </div>
    </div>
  </div>
</template>

<script>
import "../../static/less/djradio.css"
// import "../css/djradio.css";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      number: 1,
      topArr: [],
      topArr1: []
    };
  },
  computed: {
    ...mapState(["dj", "djphArr1","dj1"])
  },
  methods: {
    ...mapMutations(["changePage"]),
    ...mapActions(["adds"]),
    pre() {
      this.number = 1;
    },
    next() {
      this.number = 2;
    }
  },
  mounted() {
    console.log(this.dj)
    for (var x = 0; x < 18; x++) {
      console.log(this.dj.djTop)
      this.topArr.push(this.dj.djTop[x]);
    }
    for (var x = 18; x < this.dj.djTop.length; x++) {
      this.topArr1.push(this.dj.djTop[x]);
    }
    
  }
};
</script>

<style>
</style>