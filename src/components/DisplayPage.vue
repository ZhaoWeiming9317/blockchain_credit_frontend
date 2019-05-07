<template>
  <div class="display_wrapper">
    <div class="search_bar">
      <input type="text" class="input_search_bar">
      <span id="search_btn">search now</span>
    </div>
    <el-table
      :data="table_data"
      style="width: 800px;"
      >
      <el-table-column
        v-for="item in table_title"
        :key="item" :prop="item.name"
        :label="item.name" :width="item.name==='creditId'?200:120"
        align="center">
      </el-table-column>
      <el-table-column
        label="request"
        width="120"
        align="center">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="middle"
            style="color:#ffffff; width: 70px; background-color: #89a4d6">
            request
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="score"
        width="120"
        align="center"
        >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="middle"
            style="color:#89a4d6; width: 70px; border: 1px solid #89a4d6">
            score
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DisplayPage',
  data () {
    return {
      table_title: this.$store.state.tableTitle,
      table_data: this.$store.state.tableData
    }
  }
}
</script>

<style scoped>
  .display_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  .search_bar{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 800px;
    margin: 0.7rem auto;
    margin-bottom: 1.5rem;
  }
  .input_search_bar{
    width: 640px;
    padding-left: 5%;
    padding-right: 20%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.1rem;
    border: 0.05rem solid transparent;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    transition: all 0.5s;
  }
  #search_btn{
    position: absolute;
    right: 20px;
    width: 100px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    line-height: 2.5rem;
  }
  #search_btn ::after {
    background-image: url(https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/side-w-right.png);
    background-size: 12px 12px;
  }
  input{
    outline:none;
  }
  input:focus {
    outline: 0;
    border-color: white;
    background-color: rgba(0, 0, 0, 0);
  }
</style>
