<template>
  <div class="edit">
    <hm-nav-tab path="/home/my" title="我的资料"></hm-nav-tab>
    <div class="content">
      <my-cell :value="userInfo.avatar" class="r8" title="头像" type="img"></my-cell>
      <div class="middle">
        <my-cell :value="userInfo.nickname" title="昵称" @click.native="$router.push('/home/editInfo?str=nickname')"></my-cell>
        <my-cell :value="gender[userInfo.gender]" title="性别" @click.native="isShowEditGender=true"></my-cell>
        <my-cell :value="areaList.city_list[userInfo.area]" title="地区" @click.native="isShowEditArea=true"></my-cell>
        <my-cell :value="userInfo.intro" title="个人简介" @click.native="$router.push('/home/editInfo?str=intro')"></my-cell>
      </div>
      <van-button block class="exitButton" color="#fff" @click="exit">退出登录</van-button>
    </div>
    <!--  性别选择弹出层-->
    <van-popup v-model="isShowEditGender" position="bottom">
      <van-picker
        :columns="list"
        :default-index="userInfo.gender"
        show-toolbar
        title="性别选择"
        @cancel="isShowEditGender=false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!--    地区选择弹出层-->
    <van-popup v-model="isShowEditArea" position="bottom">
      <van-area
        :area-list="areaList"
        :columns-num="2"
        :value="userInfo.area"
        title="地区选择"
        @cancel="isShowEditArea=false"
        @confirm="onConfirmArea"/>
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import myCell from '@/views/home/my/myCell'
import { auEdit } from '@/api/my'
import { removeToken } from '@/utils/token'
import areaData from '@/assets/ares/ares'

export default {
  name: 'myEdit',
  data () {
    return {
      isShowEditGender: false,
      isShowEditArea: false,
      list: [],
      areaList: areaData,
      gender: {
        0: '保密',
        1: '男',
        2: '女'
      }
    }
  },
  components: {
    myCell
  },
  created () {
    // 把对象转为数组
    this.list = Object.values(this.gender)
  },
  mounted () {
    document.body.style.backgroundColor = '#f7f4f5'
  },
  beforeDestroy () {
    document.body.style.backgroundColor = '#fff'
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['resetDate']),
    // 退出登录
    exit () {
      this.$dialog.confirm({
        title: '提示',
        message: '确定要退出吗?'
      }).then(() => {
        removeToken('token')
        this.$router.push('/login')
      }).catch(() => {
        this.$toast.success('取消退出')
      })
    },
    // 性别选择的确定按钮
    onConfirm (value, index) {
      // 关闭弹窗
      this.isShowEditGender = false
      // 调用封装的方法
      if (this.userInfo.gender !== index) {
        this.editIfo({ gender: index })
      }
    },
    // 地区选择的确定按钮
    onConfirmArea (value) {
      this.isShowEditArea = false
      if (this.userInfo.area !== value[1].code) {
        this.editIfo({
          area: value[1].code
        })
      }
    },
    // 封装的方法-调出提示-发送编辑请求-重新获取数据
    editIfo (obj) {
      // 弹出loading
      this.$toast.loading({ duration: 0 })
      auEdit(obj).then(() => {
        // 提示成功 会关闭loading
        this.$toast.success('编辑成功')
        // 刷新数据
        this.resetDate()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 19px @p15 0;

  .middle {
    margin-top: 20px;
    overflow: hidden;
    border-radius: 8px;
  }

  .r8 {
    border-radius: 8px;
  }

  .exitButton {
    margin-top: 20px;
    border-radius: 8px;

    span {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #e40137;
      line-height: 22px;
      letter-spacing: 0px;
    }
  }
}
</style>
