<template>
  <div class="login_form_wrapper">
    <div class="login_boxer">
      <input class="input_style username" name="input" type="text" placeholder="username">
      <input class="input_style password" name="password" type="password" placeholder="password">
      <div class="submit_input" @click="changeTo">{{submit_text}}</div>
      <div class="if_regist" @click="changeTo">{{if_text}}</div>
    </div>
    <div  class="ornament_1">
    </div>
    <div  class="ornament_2">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelpPage',
  data () {
    return {
      submit_text: 'login',
      if_text: 'No account? click here'
    }
  },
  computed: {
    ...mapState([
      'is_log']
    )
  },
  beforeRouteEnter (to, from, next) {
    setTimeout(() => {
      document.getElementsByClassName('ornament_1')[0].style.width = '0'
      let ornament2 = document.getElementsByClassName('ornament_2')[0].style
      ornament2.width = '80px'
      ornament2.height = '140px'
      ornament2.top = '260px'
      ornament2.left = '-80px'
    }, 200)
    next()
  },
  methods: {
    changeTo () {
      if (this.is_log === true) {
        this.$store.commit('CHANGE_TO_REGIST')
        this.if_text = 'Have account? click here'
        this.submit_text = 'register'
        this.changeOrnament()
      } else {
        this.$store.commit('CHANGE_TO_LOGIN')
        this.if_text = 'No account? click here'
        this.submit_text = 'login'
        this.changeOrnament()
      }
    },
    changeOrnament () {
      let ornament1 = document.getElementsByClassName('ornament_1')[0].style
      let ornament2 = document.getElementsByClassName('ornament_2')[0].style
      // 前往register状态
      if (this.is_log === false) {
        ornament1.width = '320px'
        ornament1.height = '0'
        ornament2.width = '320px'
        ornament2.height = '20px'
        ornament2.top = '-20px'
      } else {
        ornament1.width = '0px'
        ornament1.height = '400px'
        ornament2.width = '80px'
        ornament2.height = '140px'
        ornament2.top = '260px'
        ornament2.left = '-80px'
      }
    }
  }
}
</script>

<style scoped>
  .login_form_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    flex-direction:column;
    width: 320px;
    height:400px;
    margin: 0 auto;
  }
  .login_boxer{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 320px;
    height: 400px;
    background-color: white;
  }
  .ornament_1{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 320px;
    height: 400px;
    background-color: rgb(49, 100, 173);
    transition: all 1s;
    z-index: 1;
  }
  .ornament_2{
    position: absolute;
    top: 40px;
    left: 60px;
    width: 320px;
    height: 400px;
    background-color:  rgb(76, 44, 173);
    transition: all 1s;
    z-index: 1;
  }
  .input_style{
    position: relative;
    margin: 20px auto;
    padding-left: 30px;
    padding-right: 30px;
    width: 200px;
    height: 50px;
    overflow:hidden;
    z-index: 1;
  }
  .username{
    margin-top: 50px;
    color: white;
    font-size: 25px;
    font-weight: 300;
    background-color:  rgb(76, 44, 173);
  }
  .password{
    color: white;
    font-size: 25px;
    font-weight: 300;
    margin-top: 30px;
    background-color: rgb(49, 100, 173);
  }
  input{
    outline:none;
  }
  .submit_input{
    position: relative;
    margin-top: 60px;
    cursor: pointer;
    color: rgb(76, 44, 173);
    font-size: 25px;
    line-height: 35px;
    text-align:center;
    vertical-align: center;
    font-weight: 300;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    border: rgb(76, 44, 173) solid 2px;
    transition: all 1s;
    overflow: hidden;
    z-index: 1;
  }
  .submit_input::after{
    content: "";
    position: absolute;
    left: -5px;
    top: -12px;
    width: 0;
    height: 58px;
    transform: rotate(10deg);
    background-color: rgb(49, 100, 173);
    z-index: -1;
    transition: all 1s cubic-bezier(0.2, 0.0, 0.2, 1);
  }
  .submit_input:hover {
    color: #89a4d6;
    border-color: #89a4d6;
  }
  .submit_input:hover::after{
    width:135px;
  }
  .if_regist{
    color: rgb(76, 44, 173);
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
    height: 30px;
    width: 300px;
  }
  input::-webkit-input-placeholder{
    color:#ffffff;
    opacity: 0.5;
  }

</style>
