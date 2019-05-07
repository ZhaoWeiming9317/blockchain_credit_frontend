<template>
  <div id="main_page_back">
    <div id="left_back">
    </div>
    <div id="right_back">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundPhoto',
  mounted () {
    document.getElementById('left_back').style.left = '0px'
    document.getElementById('right_back').style.left = '1300px'
  }
}
</script>

<style scoped>
  #main_page_back{
    position: absolute;
    margin-top: 70px;
    width: 100%;
    height:calc(100% - 70px);
    background:url("../assets/shenzheng.jpg");
    background-size: cover;
    z-index: 0;
  }
  #left_back{
    position: absolute;
    z-index: 2;
    width: 1000px;
    height: 100%;
    left: -1000px;
    opacity: 0.6;
    background-image: url("https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/banner_purple_left.png");
    background-size: 100% 100%;
    transition: left 1s;
  }
  #right_back{
    position: absolute;
    z-index: 2;
    width: 200px;
    height: 100%;
    left: -1000px;
    opcaity: 0.6;
    background-image: url("https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/banner_purple_right.png");
    background-size: 100% 100%;
    transition: left 1s;
  }
</style>
