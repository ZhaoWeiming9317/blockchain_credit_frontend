<template>
  <div id="main_page">
    <div id="main_left"></div>
    <div id="main_middle">
      <div id="title_wrap">
        <span id="title">{{title}}</span>
      </div>
      <div id="description_wrap">
        <span id="description"> {{description}}</span>
      </div>
      <router-view/>
    </div>
    <div id="main_right"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainPage',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    ...mapState([
      'title', 'description'
    ]
    )
  }
}
</script>

<style scoped>
  #main_page{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    width: 100%;
    height:calc(100% - 70px);
    background-color: rgba(73, 66, 122, 0.65);
    z-index: 2;
  }
  #main_left{
    flex-grow: 1;
    height: 100%;
  }
  #main_middle{
    flex-grow: 3;
    height: 100%;
  }
  #main_right{
    flex-grow: 1;
    height: 100%;
  }
  #title_wrap{
    display: flex;
    justify-content: center;
    height: 5rem;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    margin: 4rem auto 0;
  }
  #title{
    text-align: center;
  }
  #description_wrap{
    display: flex;
    justify-content: center;
    width: 50%;
    height: 2rem;
    color: white;
    font-size: 1rem;
    margin: 0.25rem auto;
    opacity: 0.5;
  }
  #description{
    vertical-align: center;
    text-align: center;
  }
</style>
