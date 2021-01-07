<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar
      v-if="$route.meta.needTabNav"
      v-model="active"
      active-color="#E40137"
      inactive-color="#B4B4BD"
      placeholder
      route>
      <van-tabbar-item to="/home/company">
        <span class="txt">公司</span>
        <template #icon>
          <i class="iconfont f28">&#xe63d;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/question">
        <span class="txt">刷题</span>
        <template #icon>
          <i class="iconfont f28">&#xe63f;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/find">
        <span class="txt">发现</span>
        <template #icon>
          <i class="iconfont f28">&#xe63a;</i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/home/my">
        <span class="txt">我的</span>
        <template #icon>
          <i class="iconfont f28">&#xe645;</i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .txt {
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    line-height: 14px;
    letter-spacing: 0px;
  }

  .f28 {
    font-size: 28px;
  }
}
</style>
