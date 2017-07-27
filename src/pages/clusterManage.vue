<template>
  <el-row :gutter="0">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
