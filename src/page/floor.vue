<template>
  <div class="s-gf">
    <div class="s-ft">
      <div class="s-wrap">
        <div class="s-copy">
          <p class="s-link">
            <a href class="item s-fc4">服务条款</a>
            <span class="line">|</span>
            <a href class="item s-fc4">隐私政策</a>
            <span class="line">|</span>
            <a href class="item s-fc4">儿童隐私政策</a>
            <span class="line">|</span>
            <a href class="item s-fc4">版权投诉指引</a>
            <span class="line">|</span>
            <a href class="item s-fc4">意见反馈</a>
            <span class="line">|</span>
          </p>
          <p>
            <span>网易公司版权所有©1997-2019</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href>浙网文[2018]3506-263号</a>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href>ncm5990@163.com</a>
          </p>
        </div>
        <ul class="enter f-fr">
          <li class="unit">
            <a href class="unit-logo"></a>
            <span class="tt tt-auth"></span>
          </li>
          <li class="unit">
            <a href class="unit-logo"></a>
            <span class="tt tt-auth"></span>
          </li>
          <li class="unit">
            <a href class="unit-logo"></a>
            <span class="tt tt-auth"></span>
          </li>
          <li class="unit">
            <a href class="unit-logo"></a>
            <span class="tt tt-auth"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.s-ft .enter .unit:first-child {
  margin-left: 0;
}
.s-ft .logonew.logo-auth {
  background-position: -63px -101px;
}
.unit-logo {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.unit:nth-child(2) .unit-logo {
  background: url("../../static/image/foot_enter_new.png") no-repeat;
  background-position: 0 0;
  background-size: 110px 450px;
}
.unit:nth-child(1) .unit-logo {
  background: url("../../static/image/foot_enter_new.png") no-repeat;
  background-position: -63px -101px;
  background-size: 110px 450px;
}
.unit:nth-child(3) .unit-logo {
  background: url("../../static/image/foot_enter_new.png") no-repeat;
  background-position: -60px -50px;
  background-size: 110px 450px;
}
.unit:nth-child(4) .unit-logo {
  background: url("../../static/image/foot_enter_new.png") no-repeat;
  background-position: 0 -101px;
  background-size: 110px 450px;
}
.tt {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
}
.unit:nth-child(1) .tt {
  background: url("../../static/image/foot_enter_tt.png") no-repeat;
  background-size: 180px 100px;
  background-position: -1px -91px;
}
.unit:nth-child(2) .tt {
  background: url("../../static/image/foot_enter_tt.png") no-repeat;
  background-size: 180px 100px;
  background-position: 0 0;
}
.unit:nth-child(3) .tt {
  background: url("../../static/image/foot_enter_tt.png") no-repeat;
  background-size: 180px 100px;
  background-position: 0 -54px;
}
.unit:nth-child(4) .tt {
  background: url("../../static/image/foot_enter_tt.png") no-repeat;
  background-size: 180px 100px;
  background-position:-1px -72px;
}
.s-ft .logonew {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.s-ft .logo {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
}
.s-ft .logo {
  background: url("../../static/image/foot_enter_new.png") no-repeat 0 9999px;
}
.f-tid {
  text-indent: -9999px;
}
.s-ft .enter .unit {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}
.s-ft .enter {
  width: 330px;
  margin-top: 21px;
}
.f-fr {
  float: right;
}
a:hover {
  text-decoration: underline;
}
.s-gf {
  width: 100%;
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.s-ft {
  width: 980px;
  margin: 0 auto;
}
.s-ft .s-copy {
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  font-size: 12px;
}
.s-ft .s-copy .line {
  margin: 0 8px 0 10px;
  color: #c2c2c2;
}
.s-fc4,
a.s-fc4:hover {
  color: #999;
}
</style>
