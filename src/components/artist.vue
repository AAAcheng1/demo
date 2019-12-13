<template>
  <div class="g_box">
     <div class="g_left_l">
         <div class="g_l_he">
             <h2>推荐</h2>
             <ul class="g_lt">
                  <li><a @click="G_Lsend(0)" :class="g_num==0? 'g_L_active':'g_L_defule'"  href="JavaScript:;">推荐歌手</a></li>
                  <li><a @click="G_Lsend(1)" :class="g_num==1? 'g_L_active':'g_L_defule'"  href="JavaScript:;">入驻歌手</a></li>
             </ul>
             <div class="g_huayu">
                 <h2>华语</h2>
                 <ul class="g_lt">
                     <li><a @click="G_Lsend(2)" :class="g_num==2? 'g_L_active':'g_L_defule'"  href="JavaScript:;">华语男歌手</a></li>
                     <li><a @click="G_Lsend(3)" :class="g_num==3? 'g_L_active':'g_L_defule'"  href="JavaScript:;">华语女歌手</a></li>
                     <li><a @click="G_Lsend(4)" :class="g_num==4? 'g_L_active':'g_L_defule'"  href="JavaScript:;">华语组合/乐队</a></li>
                 </ul>
             </div>
             <div class="g_huayu">
                 <h2>欧美</h2>
                 <ul class="g_lt">
                     <li><a @click="G_Lsend(5)" :class="g_num==5? 'g_L_active':'g_L_defule'"  href="JavaScript:;">欧美男歌手</a></li>
                     <li><a @click="G_Lsend(6)" :class="g_num==6? 'g_L_active':'g_L_defule'"  href="JavaScript:;">欧美女歌手</a></li>
                     <li><a @click="G_Lsend(7)" :class="g_num==7? 'g_L_active':'g_L_defule'"  href="JavaScript:;">欧美组合/乐队</a></li>
                 </ul>
             </div>
             <div class="g_huayu">
                 <h2>日本</h2>
                 <ul class="g_lt">
                     <li><a @click="G_Lsend(8)" :class="g_num==8? 'g_L_active':'g_L_defule'"  href="JavaScript:;">日本男歌手</a></li>
                     <li><a @click="G_Lsend(9)" :class="g_num==9? 'g_L_active':'g_L_defule'"  href="JavaScript:;">日本女歌手</a></li>
                     <li><a @click="G_Lsend(10)" :class="g_num==10? 'g_L_active':'g_L_defule'"  href="JavaScript:;">日本组合/乐队</a></li>
                 </ul>
             </div>
             <div class="g_huayu">
                 <h2>韩国</h2>
                 <ul class="g_lt">
                     <li><a @click="G_Lsend(11)" :class="g_num==11? 'g_L_active':'g_L_defule'"  href="JavaScript:;">韩国男歌手</a></li>
                     <li><a @click="G_Lsend(12)" :class="g_num==12? 'g_L_active':'g_L_defule'"  href="JavaScript:;">韩国女歌手</a></li>
                     <li><a @click="G_Lsend(13)" :class="g_num==13? 'g_L_active':'g_L_defule'"  href="JavaScript:;">韩国组合/乐队</a></li>
                 </ul>
             </div>
             <div class="g_huayu">
                 <h2>其他</h2>
                 <ul class="g_lt">
                     <li><a @click="G_Lsend(14)" :class="g_num==14? 'g_L_active':'g_L_defule'"  href="JavaScript:;">其他男歌手</a></li>
                     <li><a @click="G_Lsend(15)" :class="g_num==15? 'g_L_active':'g_L_defule'"   href="JavaScript:;">其他女歌手</a></li>
                     <li><a @click="G_Lsend(16)" :class="g_num==16? 'g_L_active':'g_L_defule'"  href="JavaScript:;">其他组合/乐队</a></li>
                 </ul>
             </div>
         </div>
     </div>
     <div class="g_right_l">
         <div class="g_right_lb">
             <div class="g_right_lc">
                 <div class="g_right_top">
                     <h3><span>{{t_zi}}</span></h3>
                     <a href="">更多 ></a>
                 </div>
                 <ul class="g_ring_AB" v-show="g_show">
                     <li class="g_ring_ali"><a @click="bianse(-1)"  :class="bianse1== -1? 'g_AB_re':'g_AB_else'" href="JavaScript:;">热门</a></li>
                     <li class="g_ring_ali" v-for="(item,index) in getAb" :key="index" @click="bianse(index)" ><a :class=" bianse1== index? 'g_AB_b':'g_AB_a'"  href="JavaScript:;">{{item}}</a></li>
                     <li class="g_ring_ali"><a @click="bianse(-2)" :class="bianse1== -2? 'g_AB_re':'g_AB_else'" href="JavaScript:;">更多</a></li>
                 </ul>
                 <div class="g_rt_xian">
                     <ul class="g_rt_ul">
                         <li v-for="(item,index) in t_rezhu" :key="index" >
                             <div class="g_rt_d">
                                 <img :src=item.img1v1Url alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">{{item.name}}</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                     </ul>
                 </div>
                  <div class="g_right_top">
                     <h3><span>热门歌手</span></h3>
                     <a href="">更多 ></a>
                 </div>
                 <div class="g_rt_xian">
                     <ul class="g_rt_ul">
                         <li  v-for="(item,index2) in t_remen" :key="index2">
                             <div class="g_rt_d">
                                 <img :src="item.img1v1Url" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">{{item.name}}</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <p style="display:block;float: left;width: 100%;margin-bottom: 12px;border-bottom: 1px dotted #999;"></p>
                         <li class="g_rt_sml" v-for="item in t_quan" :key="item.id">
                             <a class="g_rt_sming" href="">{{item.name}}</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
         
     </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            g_num:0,
            getAb:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            bianse1:-1,
            g_show:false,
            t_rezhu:"",
            t_remen:"",
            t_quan:"",
            t_zi:"入住歌手",
            t_app:["入住歌手","入住歌手","华语男歌手","华语女歌手","华语组合/乐队","欧美男歌手","欧美女歌手","欧美组合/乐队","日本男歌手","日本女歌手",
                   "日本组合/乐队","韩国男歌手","韩国女歌手","韩国组合/乐队","其他男歌手","其他女歌手","其他组合/乐队"
            ],
            t_quanbu:""
        }
    },
    methods: {
        G_Lsend(index){
            if(index == 0 || index == 1){
                this.g_show = false
            }else{
                this.g_show = true;
            }
            this.g_num = index;
           this.t_zi = this.t_app[index];
           this.t_rezhu = this.t_quanbu[index].artists.slice(0,10);
           this.t_remen = this.t_quanbu[index].artists.slice(10,20);
        },
        bianse(val){
            this.bianse1 = val
        },
        getAxios(){
          this.$http.get('hotdoor',).then((res)=>{
                 this.t_quanbu = res.data.dara;
                let arr = res.data.dara[this.g_num].artists
                  this.t_quan = arr
                  this.t_rezhu = arr.slice(0,10);
                  this.t_remen = arr.slice(10,20);
                }).catch((res)=>{
                    console.log('error')
                })
        }
    },
    mounted() {
        this.getAxios()
    },
}
</script>

<style scoped lang="less">

@import '../../static/less/artist.less';

</style>
