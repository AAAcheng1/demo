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
                     <li><a @click="G_Lsend(5)" :class="g_num==5? 'g_L_active':'g_L_defule'"  href="">欧美男歌手</a></li>
                     <li><a @click="G_Lsend(6)" :class="g_num==6? 'g_L_active':'g_L_defule'"  href="">欧美女歌手</a></li>
                     <li><a @click="G_Lsend(7)" :class="g_num==7? 'g_L_active':'g_L_defule'"  href="">欧美组合/乐队</a></li>
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
                     <h3><span>入驻歌手</span></h3>
                     <a href="">更多 ></a>
                 </div>
                 <ul class="g_ring_AB">
                     <li class="g_ring_ali"><a @click="bianse"  class="g_AB_re" href="">热门</a></li>
                     <li class="g_ring_ali" v-for="(item,index) in getAb" :key="index"><a class="g_AB_a" href="">{{item}}</a></li>
                     <li class="g_ring_ali"><a class="g_AB_else" href="">更多</a></li>
                 </ul>
                 <div class="g_rt_xian">
                     <ul class="g_rt_ul">
                         <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
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
                         <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                          <li>
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_line">
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_line">
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_line">
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_line">
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_line">
                             <div class="g_rt_d">
                                 <img src="http://p1.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130" alt="">
                                 <a href="" class="g_rt_a" title="张惠妹的音乐"></a>
                             </div>
                             <p class="g_rt_p">
                                 <a href="" class="g_rt_pa">张惠妹</a>
                                 <a href="" class="g_rt_pia"><i></i></a>
                             </p>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>

                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
                             <a class="g_rt_stu" href=""></a>
                         </li>
                         <li class="g_rt_sml">
                             <a class="g_rt_sming" href="">em</a>&nbsp;
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
            bianse1:true,
        }
    },
    methods: {
        G_Lsend(index){
            this.g_num = index;
        },
        bianse(){
            this.bianse1 = !this.bianse1
        }
    },
}
</script>

<style scoped lang="less">

@import '../../static/less/artist.less';

</style>
