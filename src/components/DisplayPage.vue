<template>
  <div class="display_wrapper">
    <div class="search_bar">
      <input type="text" v-model="search_input" class="input_search_bar" @keyup.enter="getSearchCredit">
      <span class="search_btn" @click="getSearchCredit">
        search now
      </span>
    </div>
    <el-table
      :data="displayData"
      style="width: 860px;font-size: 15px;color: #ffffff"
      cell-style="background-color:#89a4d6"
      >
      <el-table-column
        v-for="(item, index) in table_title"
        :key="index" :prop="item.name"
        :label="item.name" :width="item.name==='creditId'?200:105"
        align="center">
      </el-table-column>
      <el-table-column
        label="request"
        width="120"
        align="center"
        >
        <template slot-scope="scope">
          <div class="table_bottom full_bottom"
               @click="handleRequest(scope.$index, scope.row)">
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
          <div class="table_bottom empty_bottom"
               @click="handleScore(scope.$index, scope.row)">
            score
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="page_replacement_wrapper">
      <el-pagination
        @current-change="handleCurrentChange"
        class="page_replacement"
        :page-size="4"
        :current-page.sync="currentPage"
        layout="prev, pager, next"
        :total="total_item">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import api from '../axios.js'

export default {
  name: 'DisplayPage',
  data () {
    return {
      table_title: this.$store.state.tableTitle,
      currentPage: 1,
      total_item: 0,
      search_input: '',
      offset: 0,
      limit: 4
    }
  },
  computed: {
    // 此时可见的用来展示的data 只包含了这个分页的数据
    displayData () {
      return this.$store.state.displayData
    },
    // 初始化的data
    initialCreditData () {
      return this.$store.state.initialCreditData
    },
    // 全部用来展示的data
    totalDisplayData () {
      return this.$store.state.totalDisplayData
    }
  },
  mounted () {
    this.getInitialCreditData()
    this.search_input = ''
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getCredit()
    },
    handleRequest (index, row) {
      console.log(index, row)
    },
    getInitialCreditData () {
      this.$store.state.initialCreditData = []
      api.test().then((response) => {
        let result = response.data.creditDisplayData
        result.forEach(item => {
          const tableItem = {
            creditFrom: item.creditFrom,
            creditId: item.creditId,
            creditInfor: item.creditInfor,
            score: item.score,
            type: item.type
          }
          this.initialCreditData.push(tableItem)
        })
        this.total_item = this.initialCreditData.length
        this.$store.state.totalDisplayData = JSON.parse(JSON.stringify(this.initialCreditData))
        this.getCredit()
      })
    },
    getCredit: function () {
      this.$store.state.displayData = []
      let tempCreditData = JSON.parse(JSON.stringify(this.totalDisplayData))
      this.total_item = tempCreditData.length
      let result = tempCreditData.slice(this.offset, this.offset + this.limit)
      result.forEach(item => {
        const tableItem = {
          creditFrom: item.creditFrom,
          creditId: item.creditId,
          creditInfor: item.creditInfor,
          score: item.score,
          type: item.type
        }
        this.displayData.push(tableItem)
      })
    },
    getSearchCredit: function () {
      this.$store.state.totalDisplayData = []
      if (this.search_input === '') {
        this.$store.state.totalDisplayData = JSON.parse(JSON.stringify(this.initialCreditData))
      } else {
        let temp = JSON.parse(JSON.stringify(this.initialCreditData))
        for (let i = 0; i < temp.length; i++) {
          // let reg = /^this.search_input$/
          let idreg = new RegExp('^' + this.search_input)
          let reg = new RegExp(this.search_input.toLowerCase())
          if (idreg.test(temp[i].creditId) === true ||
            reg.test(temp[i].creditFrom.toLowerCase()) === true ||
            reg.test(temp[i].creditInfor.toLowerCase()) === true ||
            reg.test(temp[i].type.toLowerCase()) === true) {
            this.$store.state.totalDisplayData.push(temp[i])
          }
        }
      }
      this.getCredit()
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
