<template>
  <div class="display_wrapper">
    <div class="search_bar">
      <input type="text" class="input_search_bar">
      <span class="search_btn">
        search now
      </span>
    </div>
    <el-table
      :data="table_data"
      style="width: 860px;font-size: 15px;color: #ffffff"
      cell-style="background-color:#89a4d6"
      >
      <el-table-column
        v-for="item in table_title"
        :key="item" :prop="item.name"
        :label="item.name" :width="item.name==='creditId'?200:105"
        align="center">
      </el-table-column>
      <el-table-column
        label="request"
        width="120"
        align="center">
        <template slot-scope="scope">
          <div class="table_bottom full_bottom">
            request
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="score"
        width="120"
        align="center"
        >
        <template slot-scope="scope">
          <div class="table_bottom empty_bottom">
            score
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page_replacement_wrapper">
      <el-pagination
        class="page_replacement"
        :page-size="4"
        :pager-count="5"
        layout="prev, pager, next"
        :total="28">
      </el-pagination>
    </div>
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
  el-table-column {
    font-weight: 200;
  }
  .display_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 860px;
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
    width: 860px;
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
  .search_btn{
    position: absolute;
    right: 20px;
    width: 100px;
    padding-right: 20px;
    cursor: pointer;
    color: white;
    font-size: 18px;
    line-height: 2.5rem;
  }
  .search_btn:hover::after{
    margin-left: 15px;
  }
  .search_btn::after {
    position: absolute;
    content: '';
    width:16px;
    height:16px;
    margin:12px auto;
    margin-left: 2px;
    background-position: center;
    background-image: url("https://cdn.multilingualres.hr.tencent.com/tencentcareer/static/images/side-w-right.png");
    background-size: 100% 100%;
    transition: all 0.7s;
  }
  .page_replacement_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 860px;
    height: 3rem;
    color: #888888 !important;
    background-color: white;
  }
  .table_bottom{
    position: relative;
    width: 70px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    border-radius: 5px;
    overflow:hidden;
    z-index: 1;
    transition: all 1s cubic-bezier(0.2, 0.0, 0.2, 1);
  }
  .table_bottom::after{
    content: "";
    position: absolute;
    left: -3px;
    height: 50px;
    transform: rotate(10deg);
    z-index: -1;
  }
  .full_bottom{
    color:#ffffff;
    background-color: #89a4d6;
    border: 1px solid #ffffff;
  }
  .full_bottom::after{
    width: 0;
    background-color: #ffffff;
    transition: all 1s cubic-bezier(0.2, 0.0, 0.2, 1);
  }
  .full_bottom:hover {
    color:#89a4d6;
  }
  .full_bottom:hover::after{
    width:80px;
  }
  .empty_bottom{
    color:#89a4d6;
    background-color: #ffffff;
    border: 1px solid #89a4d6;
  }
  .empty_bottom::after{
    width: 0;
    background-color: #89a4d6;
    transition: all 1s cubic-bezier(0.2, 0.0, 0.2, 1);
  }
  .empty_bottom:hover {
    color:#ffffff;
  }
  .empty_bottom:hover::after{
    width:80px;
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
