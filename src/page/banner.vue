<template>
  <div class="n-ban d-flag">
    <div class="wrap">
      <div  class="ban f-pr swiper-container swiper-renl">
        <div class="ban-img swiper-wrapper">
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/ERrZy5EpcwJnyZaWtEs0xw==/109951164501993643.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/BY1gL1RGAVSHxP6-9d3Mqw==/109951164501999516.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/fd7plFDXoxo6zDcd8xiFDg==/109951164503074726.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/tpVSE42INFhD-WGfCfT-6g==/109951164502783505.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/RtOkvM3Y4521BETYJGnung==/109951164501938448.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/Zl6AGUAKRl5gVQMyXDBzEg==/109951164501973058.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/hYxQ0Agi5QWY2us4TpkOhw==/109951164501977658.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/yI5Bzm8MOx2aDboAxmVn7w==/109951164502009550.jpg?imageView&quality=89"
              alt
            />
          </a>
          <a class="active d-flag swiper-slide">
            <img
              class="d-flag"
              src="http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&quality=89"
              alt
            />
          </a>
        </div>

        <div class="dots f-cb swiper-pagination"></div>
      </div>
      <a class="btnl click-flag f-alpha swiper-button-prev swiper-lun-R-P "></a>
      <a class="btnr click-flag f-alpha swiper-button-next swiper-lun-R-N"></a>
      <div class="download f-pr">
        <a class="btn">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Swiper from "swiper"
export default {
  data() {
    return {
      myswiper: null
    };
  },
  mounted() {
    const mySwiper = new Swiper(".swiper-renl", {
      autoplay: true,
      observer: true,
      effect: "fade",
      loop:true,
      navigation: {
        nextEl: ".swiper-lun-R-N",
        prevEl: ".swiper-lun-R-P"
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scope>
 /* @import "swiper/dist/css/swiper.css"; */
* {
  margin: 0;
  padding: 0;
  list-style: none;
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
.n-ban .wrap {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.n-ban .ban {
  width: 982px;
  height: 285px;
}
.n-ban .ban-img {
  width: 100%;
  height: 285px;
}
.n-ban .ban img {
  display: block;
  width: 730px;
}
.n-ban .shadow,
.n-ban .shadowr,
.btnl,
.btnr,
.n-ban .dots .pg {
  background: url(../../static/image/banner.png) 0 9999px no-repeat;
}
.btnl,
.btnr {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  text-indent: -9999px;
}
.btnl {
  left: -68px;
  background-position: 0 -360px;
}
.btnr {
  right: -68px;
  background-position: 0 -508px;
}
.n-ban .dots {
  position: absolute;
  top: 259px;
  left: 0;
  width: 730px;
  height: 20px;
  text-align: center;
}
.n-ban .download,
.n-ban .download .btn {
  background: url(../../static/image/download.png) no-repeat 0 0;
}
.n-ban .download {
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
}
.n-ban .download .btn {
  display: block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.n-ban .download p {
  margin: 10px auto;
  text-align: center;
  color: #8d8d8d;
  font-size: 12px;
}
.n-ban {
  background-image: url(http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&blur=40x20);
  background-size: 6000px;
  background-position: center center;
}
</style>