<template>
  <van-nav-bar
    class="hmNavTab"
    @click-left="$router.push(path)"
    @click-right="clickRight"
  >
    <template #left>
      <i class="iconfont f44">&#xe637;</i>
    </template>
    <template #title>
      <div class="title">{{title}}</div>
    </template>
    <template #right>
      <div v-if="right" class="right">{{right}}</div>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'hmNavTab',
  /*
  * title: 标题
  * right：右边的文字
  * path:控制左边箭头点击之后返回的之前来的路由
  * */
  props: ['title', 'right', 'path'],
  methods: {
    clickRight () {
      // 触发一个父组件的事件 是一个保存的是事件
      this.$emit('rightClick')
    }
  }
}
</script>

<style lang="less" scoped>
.hmNavTab {
  .f44 {
    font-size: 44px;
  }

  .title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #222222;
    line-height: 25px;
    letter-spacing: 0px;
  }

  .right {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: right;
    color: #181a39;
    line-height: 20px;
    letter-spacing: 0px;
  }

  ::v-deep .van-nav-bar__left, .van-nav-bar__right {
    padding-left: 0;
  }
}

</style>
