<template>
  <div class="login">
    <hm-nav-tab path="/home/find"></hm-nav-tab>
    <div class="content">
      <h3 class="title">您好，请登录</h3>
      <van-form ref="form">
        <van-field v-model="form.mobile" :rules="rules.mobile" name="mobile" placeholder="请输入手机号">
          <template #left-icon>
            <i class="iconfont f16">&#xe60b;</i>
          </template>
        </van-field>
        <van-field v-model="form.code" :rules="rules.code" placeholder="请输入验证码">
          <template #left-icon>
            <i class="iconfont f16">&#xe60c;</i>
          </template>
          <template #button>
            <span v-if="count===6" class="code" @click="getCode">获取验证码</span>
            <span v-else class="code">倒计时{{ count }}</span>
          </template>
        </van-field>
        <div class="other">
          登录即同意 <span>《用户使用协议》</span>和 <span>《隐私协议》</span>
        </div>
      </van-form>
      <van-button block class="submit" color="#E40137" round @click="submit"> <span>
        确定
      </span></van-button>
    </div>
  </div>

</template>

<script>
import { auCode, auLogin } from '@/api/login'
import { setToken } from '@/utils/token'

export default {
  name: 'login',
  data () {
    return {
      count: 6,
      form: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'onChange'
          },
          {
            validator: value => {
              return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
                value
              )
            },
            message: '手机号码格式不对',
            trigger: 'onChange'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    getCode () {
      this.$refs.form.validate('mobile').then(() => {
        this.count--
        const timer = setInterval(() => {
          this.count--
          if (this.count <= 0) {
            clearInterval(timer)
            this.count = 6
          }
        }, 1000)
        this.$toast.loading({ duration: 0 })
        auCode({ mobile: this.form.mobile }).then(res => {
          this.$toast.success('获取验证码成功')
          this.form.code = res.data.data
        }).catch(() => {
        })
      }).catch(() => {
        this.$toast.fail('验证失败')
      })
    },
    submit () {
      this.$refs.form.validate().then(() => {
        auLogin(this.form).then(res => {
          console.log(res)
          // 存储token
          setToken('token', res.data.data.jwt)
          // 给仓库的用户信息赋值
          this.$store.commit('setUserInfo', res.data.data.user)
          // 定义已经登录
          this.$store.commit('setIsLogin', true)
          // 跳转路由
          const _redirect = this.$route.query.redirect
          if (_redirect) {
            this.$router.push(_redirect)
          } else {
            this.$router.push('/home')
          }
        })
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .f44 {
    font-size: 44px;
  }

  ::v-deep .van-nav-bar__left, .van-nav-bar__right {
    padding-left: 0;
  }

  .content {
    padding: 0 @p15;

    .title {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #222222;
      line-height: 25px;
      letter-spacing: 0px;
      padding: 50px 0 63px;
    }

    .f16 {
      font-size: 16px;
      padding-right: 20px;
    }

    .code {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #00b8d4;
      line-height: 22px;
      letter-spacing: 0px;
    }

    .other {
      padding: @p15 0 44px;
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #181a39;
      line-height: 16px;
      letter-spacing: 0px;

      span {
        color: #00b8d4;
      }
    }

    .submit {
      span {
        font-size: 18px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        line-height: 25px;
        letter-spacing: 0px;
      }
    }
  }
}

</style>
