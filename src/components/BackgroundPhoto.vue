<template>
  <div id="main_page_back">
  </div>
</template>

<script>
export default {
  name: 'BackgroundPhoto'
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
  }
</style>
