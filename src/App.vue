<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在进入界面的时候 主动跳转到Display界面
    this.$store.commit('JUMP', 'Display')
    this.$router.push({path: `/HomePage/Display`})
  }
}
</script>

<style>
  html,body{
    width:100%;
    height:100%;
  }
  div,body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0;border-width:0}
  a{color:#2d374b;text-decoration:none}
  a:hover{color:#cd0200;text-decoration:underline}
  em{font-style:normal}
  li{list-style:none}
  img{border:0;vertical-align:middle}
  table{border-collapse:collapse;border-spacing:0}
  p{word-wrap:break-word}
  #app{
    width:100%;
    min-height: 720px;
    overflow:hidden;
    background-color: #342272;
    font-family: Arial;
  }
</style>
