<template>
    <div class="submit_form_wrapper">
      <div class="input_des">{{first_des}}</div>
      <input class="input_style" id="submit_first_input" name="input" type="text">
      <div class="input_des">{{second_des}}</div>
      <input class="input_style" id="submit_second_input" name="input" type="text">
      <div class="input_des">{{third_des}}</div>
      <input class="input_style" id="submit_third_input" name="input" type="text">
      <div id="submit_button">submit</div>
    </div>
</template>

<script>
export default {
  name: 'SubmitPage',
  data () {
    return {
      first_des: 'CreditId',
      second_des: 'CreditInfor',
      third_des: 'CreditDataContractAddress'
    }
  }
}
</script>

<style scoped>
  .submit_form_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 40%;
    margin: 2rem auto;
  }
  .input_des{
    font-size: 1rem;
    color: #ffffff;
  }
  .input_style{
    display: block;
    width: 60%;
    height: 2rem;
    font-size: 1.2rem;
    color: white;
    background-color: transparent;
    padding: 0 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: 2px solid white;
  }
  input{
    outline:none;
  }
  input::-webkit-input-placeholder {
    color: #e7e7e7;
  }
  #submit_button{
    cursor: pointer;
    width: 7rem;
    height: 3rem;
    border-radius: 1rem;
    line-height: 3rem;
    color: white;
    text-align:center;
    margin: 2rem 0;
    background-color: #d68e11;
  }
</style>
