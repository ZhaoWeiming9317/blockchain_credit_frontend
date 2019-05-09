<template>
    <div class="submit_form_wrapper">
      <div class="input_des">{{first_des}}</div>
      <input class="input_style" id="creditId_input" name="input" type="text">
      <div class="input_des">{{second_des}}</div>
      <input class="input_style" id="creditData_input" name="input" type="text">
      <div class="input_des">{{third_des}}</div>
      <input class="input_style" id="creditTYPE_input" name="input" type="text">
      <div id="submit_button">submit</div>
    </div>
</template>

<script>
export default {
  name: 'SubmitPage',
  data () {
    return {
      first_des: 'Credit ID',
      second_des: 'Credit DATA',
      third_des: 'Credit TYPE'
    }
  },
  beforeRouteEnter (to, from, next) {
    setTimeout(() => {
      for (let is of document.getElementsByClassName('input_style')) {
        is.style.width = '60%'
        is.style.paddingLeft = '2rem'
        is.style.paddingRight = '2rem'
      }
    }, 200)
    next()
  }
}
</script>

<style scoped>
  .submit_form_wrapper{
    display: flex;
    justify-content: center;
    flex-direction:column;
    width: 40%;
    margin: 2rem auto;
  }
  .input_des{
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 auto;
  }
  .input_style{
    display: block;
    width: 0;
    height: 2.5rem;
    left: 0;
    font-size: 1.4rem;
    color: white;
    background-color: transparent;
    margin: 1rem 0;
    margin-left: calc(20% - 2rem);
    border-radius: 0.5rem;
    border: 1.3px solid white;
    transition: all 0.5s;
  }
  input{
    outline:none;
  }
  #submit_button{
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    line-height: 3rem;
    color: white;
    text-align:center;
    margin: 2rem auto;
    background: linear-gradient(top right, rgb(76, 44, 173),  rgb(49, 100, 173));
  }
  input:focus {
    outline: 0;
    border-color: #89a4d6;
  }
</style>
