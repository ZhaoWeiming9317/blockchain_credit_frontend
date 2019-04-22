<template>
  <div id="top_nav_wrapper">
    <div id="logo" ><span class="a_logo">{{log_title}}</span></div>
    <div id="top_nav_boxer">
      <ul class="top_nav_list">
        <li class="top_nav_item">Display</li>
        <li class="top_nav_item">Submit</li>
        <li class="top_nav_item">Request</li>
        <li class="top_nav_item">Score</li>
        <li class="top_nav_item">Help</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
  data () {
    return {
      log_title: 'FISCO Credit'
    }
  }
}
</script>

<style scoped>
  #top_nav_wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: rgb(56, 58, 100);
    z-index: 2;
  }
  #top_nav_boxer{
    margin: 0 30px 0 100px;
    width: 1100px;
    height: 100%;
  }
  #logo {
    position: absolute;
    left: 70px;
    height: 100%;
    z-index: 2;
  }
  .a_logo{
    font-size: 25px;
    font-weight: bold;
    font-family: Arial;
    color: white;
    vertical-align: middle;
    line-height: 70px;
  }
  .top_nav_list{
    display: flex;
    justify-content: flex-end;
    width: auto;
    height: 70px;
    text-align: center;
  }
  #top_nav_item_occpy{
    flex-basis: 200px;
  }
  .top_nav_item{
    display: inline-block;
    cursor: pointer;
    font_size:15px;
    color: white;
    text-align: center;
    vertical-align: middle;
    padding: 0 15px;
    margin: 0 15px;
    line-height: 70px;
  }
  .top_nav_item:hover{
    border-bottom: 3px solid #d6a130;

  }
</style>
