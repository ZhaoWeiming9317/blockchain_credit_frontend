<template>
  <div id="main_page_back">
    <div id="left_back_fir">
    </div>
    <div id="right_back_fir">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BackgroundPhoto',
  mounted () {
    setTimeout(() => {
      document.getElementById('left_back_fir').style.left = '0px'
      document.getElementById('left_back_fir').style.width = '1000px'
      document.getElementById('right_back_fir').style.left = '1300px'
      document.getElementById('right_back_fir').style.width = '200px'
    }, 400)
  },
  computed: {
    ...mapState([
      'now_page'
    ]
    )
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
  #left_back_fir{
    position: absolute;
    z-index: 2;
    width: 200px;
    height: 100%;
    left: -500px;
    opacity: 0.8;
    background-image: url("https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/banner_purple_left.png");
    background-size: 100% 100%;
    transition: left,width 1s;
  }
  #right_back_fir{
    position: absolute;
    z-index: 2;
    width: 0px;
    height: 100%;
    left: 800px;
    opcaity: 0.8;
    background-image: url("https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/banner_purple_right.png");
    background-size: 100% 100%;
    transition: left,width 1s,1s;
  }
</style>
