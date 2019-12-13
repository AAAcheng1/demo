<template>
  <div class="d_box">
     <div class="d_left">
         <div class="d_l_box">
             <div class="d_l_wrap">
                 <div class="dl_tou">
                     <div class="dl_t_m">
                         <h2>张惠妹</h2>
                         <h3>aMEI;阿密特</h3>
                     </div>
                     <!-- 大图 -->
                     <img src="http://p1.music.126.net/-JxOlVRUl3OFqNkCIu9dlw==/678398674363509.jpg?param=640y300" alt="">
                     <div class="dl_tkuang"></div>
                     <!--Ta的个人主页  -->
                     <a href="" class="dl_geren"></a>
                     <!-- 收藏 -->
                     <a href="" class="dl_shou"></a>
                 </div>
                 <ul class="dl_bul">
                     <li>
                         <a href="JavaScript:;"  @click="dianji(5)" :class="hong == 5? 'dl_active':''"  ><em>热门作品</em></a>
                     </li>
                      <li>
                         <a href="JavaScript:;" @click="dianji(6)" :class="hong ==  6? 'dl_active':''" ><em>所有专辑</em></a>
                     </li>
                      <li>
                         <a href="JavaScript:;"  @click="dianji(7)" :class="hong == 7? 'dl_active':''" ><em>相关MV</em></a>
                     </li>
                      <li>
                         <a href="JavaScript:;"  @click="dianji(8)" :class="hong ==  8? 'dl_active':''" ><em>艺人介绍</em></a>
                     </li>
                 </ul>
                 <div class="dl_bfang">
                     <div class="dl_btop">
                         <div class="dl_btops">
                             <!-- 播放 -->
                             <a href="" class="dl_dqi">
                                 <i><em class="dl_bem"></em>播放</i>
                             </a>
                             <!-- 加号 -->
                             <a href="" class="dl_djia"></a>
                             <!-- 热门收藏 -->
                             <a href="" class="dl_dshow">
                                 <i>收藏热门50</i>
                             </a>
                             <!-- 热门单曲 -->
                             <a href="" class="dl_dqu">
                                 <div class="dl_dqus">
                                     <i>
                                         <em class="dl_redan">热门单曲</em>
                                         <em class="dl_xiabiao"></em>
                                     </i>
                                 </div>
                             </a>
                         </div>
                     </div>
                     <div class="dl_bfood">
                         <div class="dl_dfoods">
                             <div class="dl_fgequ">
                                 <!-- 热门作品 -->
                                 <div class="dl_remen">
                                     <table class="dl_tal">
                                       <tbody>
                                           <tr>
                                               <td class="d_fming">
                                                   <div>
                                                       <span class="d_biao">&nbsp;</span>
                                                       <span class="d_shu">1</span>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div class="d_one">
                                                       <div class="d_two">
                                                           <div class="d_therr">
                                                               <span class="d_text">
                                                                   <a href="">听海</a>
                                                                   <span></span>
                                                               </span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </td>
                                               <td class="d_shijian">
                                                   <span>05:18</span>
                                               </td>
                                               <td class="d_cidan">
                                                   <div>
                                                       <a href="">我最亲爱的张惠妹-给自己的精选</a>
                                                   </div>
                                               </td>
                                           </tr>
                                           <tr></tr>
                                           <tr></tr>
                                           <tr></tr>
                                           <tr></tr>
                                       </tbody>
                                     </table>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div class="d_right"></div>
  </div>
</template>

<script>
export default {
   data() {
       return {
           hong:5,
       }
   },
   methods: {
       dianji(val){
           this.hong = val
       }
   },
   mounted() {
       
   },
}
</script>

<style scoped lang="less">
 @import '../../static/less/artists.less';
</style>