<template>
  <van-cell center class="cell" is-link>
    <template #title>
      <div class="title">{{ title }}</div>
    </template>
    <template #icon>
      <i class="iconfont f20" v-if="icon" v-html="icon">
      </i>
    </template>
    <template>
      <img class="avatar" v-if="type==='img'&&value" :src="$baseUrl + value" alt="">
      <img class="avatar" v-else-if="type==='img'&&!value" alt="" src="@/assets/logo.png">
      <div v-else class="value">
        {{ value }}
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'myCell',
  // type 控制显示图片还是显示文字
  props: ['title', 'value', 'icon', 'type']
}
</script>

<style lang="less" scoped>
.cell {
  .title {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #181a39;
    line-height: 20px;
    letter-spacing: 0px;
  }
  .f20 {
    font-size: 20px;
    padding-right: 12px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding-top: 5px;
  }
  .value {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: right;
    color: #5b5d75;
    line-height: 20px;
    letter-spacing: 0px;
  }
}
</style>
