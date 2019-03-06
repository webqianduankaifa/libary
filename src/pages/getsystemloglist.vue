<template>
  <div>
    <!--面包屑-->
    <div class="getsystemloglist">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="headerstyle">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>日志列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--搜索-->
    <div class="block">
      <el-date-picker
        class="datastyle"
        v-model="value1"
        type="date"
        placeholder="选择开始日期">
      </el-date-picker>
      <el-date-picker
        class="datastyle"
        v-model="value1"
        type="date"
        placeholder="选择结束日期">
      </el-date-picker>
      <span class="buttonstyle">
        <el-button type="primary" icon="el-icon-search"  >搜索</el-button>
      </span>

    </div>
    <!--表格-->
    <el-table
      :data="tabledata1"
      style="width: 100%">

      <el-table-column
        label="id"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="类型"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.typedes}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="模型"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.class}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="路由"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.route}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="数据表"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.table}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="ip"
        width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.ip}}</span>
        </template>
      </el-table-column>

      <el-table-column label="详情">
        <template slot-scope="scope">

          <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">详情</el-button>

        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <div class="block">
        <el-pagination

          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
    </div>



  </div>

</template>

<script>
  export default {
    name: 'loglist',
    data() {
      return {
        tabledata1:[],
        pagedata:{},
        name:90,
        totalCount:10
      }
    },
    mounted(){
      this.getinitloglist()
    },
    methods:{
      // 初始化日志数据
        getinitloglist(){
          this.$axios.post("/api/?r=systemlog/getsystemloglist").then((res)=>{
            if(res.data.status==0)
                console.log(res.data.data.pageInfo)
                this.tabledata1=res.data.data.data
                this.totalCount=res.data.data.pageInfo.totalCount
                this.totalCount=Number(res.data.data.pageInfo.totalCount)



          })
        }
    }
  }


</script>

<style scoped>
  .paging{
    /*position:absolute;*/
    float: right;
    /*right: 20px;*/
    /*bottom: 80px;*/
    margin-top: 50px;
   padding-right: 80px;

  }
  .buttonstyle{
    padding-left: 30px;
    display: inline-block;
  }
  .block{
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 35px;
  }
  .block .datastyle{
    padding-left: 20px;
  }
  .getsystemloglist{
    background-color: #d7e4f2;
    width: 100%;
  }
      .headerstyle{
        font-size: 15px;
        padding-top: 10px ;
        padding-left: 20px;
        padding-bottom: 10px;

      }
</style>
