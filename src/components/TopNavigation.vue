<template>
  <div id="top_nav_wrapper">
    <div id="logo" ><span class="a_logo">{{log_title}}</span></div>
    <div id="top_nav_boxer">
      <div id="hover_block">
      </div>
      <ul class="top_nav_list">
        <li v-for="item in nav_list"
            :key="item"
            @click="jump(item.name)"
            @mouseover="jumpHover(item.right)"
            @mouseout="jumpOut">
          <div class="top_nav_item"
               :class="{top_nav_item_active:item.isActive}"> {{item.name}} </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopNavigation',
  data () {
    return {
      log_title: 'openCredit',
      nav_list: this.$store.state.nav_list
    }
  },
  computed: {
    ...mapState(['now_page']
    )
  },
  methods: {
    jump (navName) {
      this.$store.commit('JUMP', navName)
      this.$router.push({path: `/HomePage/${navName}`})
    },
    jumpHover (targetRight) {
      document.getElementById('hover_block').style.right = targetRight
    },
    jumpOut () {
      document.getElementById('hover_block').style.right = this.nav_list[this.now_page].right
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
    z-index: 10;
  }
  #top_nav_boxer{
    position: relative;
    margin: 0 30px;
    padding-right: 20px;
    width: 1100px;
    height: 100%;
    overflow: hidden;
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
    z-index: 5;
  }
  .top_nav_item{
    display: inline-block;
    cursor: pointer;
    width:80px;
    font_size:18px;
    font-weight: bold;
    color: white;
    text-align: center;
    vertical-align: middle;
    padding: 0 10px;
    line-height: 70px;
  }
  #hover_block{
    position: absolute;
    width: 100px;
    height: 66px;
    right: 220px;
    overflow: hidden;
    background-color: #89a4d6;
    z-index: -1;
    transform: rotate(9deg);
    transition: right 0.7s cubic-bezier(0.2, 0.0, 0.2, 1);
  }
  .top_nav_item_active{
    background-color: #89a4d6;
    height: 66px;
    transform: rotate(9deg);
    color: #ffffff;
  }
</style>
