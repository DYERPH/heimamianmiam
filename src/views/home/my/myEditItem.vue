<template>
  <div class="myEditItem">
    <hm-nav-tab :right="right" :title="editObj[type]" :path="path" @rightClick="save"></hm-nav-tab>
    <div class="content">
      <van-field v-model="editValue" class="input"></van-field>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import { auEdit } from '@/api/my'

export default {
  name: 'myEditItem',
  data () {
    return {
      path: this.$route.query.str === 'position' ? '/home/my' : '/home/edit',
      editValue: '',
      type: this.$route.query.str,
      right: '',
      editObj: {
        nickname: '修改昵称',
        intro: '修改简介',
        position: '岗位修改'
      }
    }
  },
  watch: {
    editValue (newValue) {
      if (newValue !== this.userInfo[this.type] && newValue !== '') {
        this.right = '保存'
      } else {
        this.right = ''
      }
    }
  },
  created () {
    this.editValue = this.userInfo[this.type]
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['resetDate']),
    async save () {
      this.$toast.loading({ duration: 0 })
      try {
        // 可以接收数据
        // await const xxx=  auEdit(xxx)..... 不需要数据可以简写
        await auEdit({
          [this.type]: this.editValue
        })
        // 更改仓库的数据
        this.resetDate()
        // 关闭loading
        this.$toast.success('修改成功')
        // 跳转路由
        this.$router.push(this.path)
      } catch (e) {
        this.$toast.fail('请求错误')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.myEditItem {
  padding: 20px @p15 0;

  .van-cell {
    background-color: #f7f4f5;
    border-radius: 8px;
    margin-top: 20px;

    .input {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #181a39;
      line-height: 20px;
      letter-spacing: 0px;
    }
  }
}

</style>
