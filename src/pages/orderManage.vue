

<template>

<el-row :gutter="0">
    <el-col :span="24">
        <el-form :inline="true" :model="searchForm">
            <el-form-item label="账户">
                <el-input v-model="searchForm.userId" placeholder="账户"></el-input>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker v-model="searchData" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="searchForm.status" clearable placeholder="状态">
                    <el-option v-for="status in statusOptions" :label="status.label" :value="status.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getOrderList">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="orderData" border style="width: 100%">
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="tag" label="标签" width="100">
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagination.config.pageNum" :page-sizes="[20, 50, 100, 200]" :page-size="pagination.config.pageSize" layout="sizes, prev, pager, next, total" :total="pagination.total">
        </el-pagination>
    </el-col>
</el-row>

</template>

<script>

import moment from 'moment'
export default {
    data() {
            return {
                statusOptions: [{
                    label: '未支付',
                    value: 'UNPAID'
                }, {
                    label: '待审核',
                    value: 'AUDIT'
                }, {
                    label: '已支付',
                    value: 'PAID'
                }, {
                    label: '服务已生效',
                    value: 'SERVICE_EFFECTIVE'
                }, {
                    label: '服务已失效',
                    value: 'SERVICE_EXPIRE'
                }, ],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                searchForm: {
                    userId: '',
                    status: '',
                    startDate: '',
                    endDate: '',
                },
                searchData: [],
                orderData: [],
                pagination:{
                  config:{
                    pageNum:1,
                    pageSize:20
                  },
                  total:0,
                }
            }
        },
        methods: {
            getOrderList() {
                    this.$http.post('/manager/order/find', Object.assign({},this.searchForm,this.pagination.config)).then(res => {
                        let data = res.body.data;
                        this.pagination.total = 100;
                    }, res => {});
                },
                handleSizeChange(val) {
                  this.pagination.config.pageSize = val
                },
                handleCurrentChange(val) {
                  this.pagination.config.pageNum = val
                }
        },
        watch:{
          searchData:function(val){
            if(val.length>0){
              this.searchForm.startDate = val[0] ? moment(val[0]).format('YYYY-MM-DD'):''
              this.searchForm.endDate = val[1] ? moment(val[1]).format('YYYY-MM-DD'):''
            }else{
              this.searchForm.startDate = ''
              this.searchForm.endDate = ''
            }
          },
          'pagination.config': {
            handler: function () {
              this.getOrderList();
            },
            deep: true
          }
        },
        mounted: function() {
            this.getOrderList()
        }
}

</script>
