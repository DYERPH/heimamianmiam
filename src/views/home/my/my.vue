<template>
  <div class="my">
    <div class="top">
      <div class="top1">
        <div class="left">
          <div class="name">{{ userInfo.nickname }}</div>
          <div class="intro">{{ userInfo.intro }}</div>
        </div>
        <img v-if="userInfo.avatar" :src="$baseUrl + userInfo.avatar" alt="" class="right"
             @click="$router.push('/home/edit')">
        <img v-else alt="" class="right" src="@/assets/logo.png" @click="$router.push('/home/edit')">
      </div>
      <ul class="top2">
        <li class="top2-item">
          <div class="num">298</div>
          <div class="other">累计答题</div>
        </li>
        <li class="top2-item">
          <div class="num">298</div>
          <div class="other">累计答题</div>
        </li>
        <li class="top2-item">
          <div class="num">298</div>
          <div class="other">累计答题</div>
        </li>
        <li class="top2-item">
          <div class="num">298</div>
          <div class="other">累计答题</div>
        </li>
      </ul>
      <div class="top3">
        <my-cell
          :value="userInfo.position"
          class="cell"
          icon="&#xe64d;"
          title="我的岗位"
          @click.native="$router.push('/home/editInfo?str=position')"
        ></my-cell>
      </div>
    </div>
    <div class="content">
      <div class="middle">
        <h3 class="middle-title">面经数据</h3>
        <ul class="middle-content">
          <li class="middle-content_item">
            <div class="m1">
              昨日阅读 <span>+300</span>
            </div>
            <div class="m2">17</div>
            <div class="m3">阅读总数</div>
          </li>
          <li class="middle-content_item">
            <div class="m1">
              昨日阅读 <span>+300</span>
            </div>
            <div class="m2">17</div>
            <div class="m3">阅读总数</div>
          </li>
          <li class="middle-content_item">
            <div class="m1">
              昨日阅读 <span>+300</span>
            </div>
            <div class="m2">17</div>
            <div class="m3">阅读总数</div>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <my-cell icon="&#xe655;" title="我的面经分享" value="21"></my-cell>
        <my-cell icon="&#xe656;" title="我的消息" value="21"></my-cell>
        <my-cell icon="&#xe656;" title="我的消息" value="21"></my-cell>
        <my-cell icon="&#xe656;" title="我的消息" value="21"></my-cell>
        <my-cell icon="&#xe656;" title="我的消息" value="21"></my-cell>
        <my-cell icon="&#xe656;" title="我的消息" value="21"></my-cell>
      </div>
    </div>

  </div>
</template>

<script>
import myCell from '@/views/home/my/myCell'
import { mapState } from 'vuex'

export default {
  name: 'my',
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    myCell
  },
  created () {
    document.body.style.backgroundColor = '#f7f4f5'
  },
  beforeDestroy () {
    document.body.style.backgroundColor = '#fff'
  }
}
</script>

<style lang="less" scoped>
.my {
  .top {
    background: linear-gradient(45deg, #f51dbf, #b8002c);
    position: relative;
    padding: 0 @p15;

    .top1 {
      display: flex;
      justify-content: space-between;
      padding: 31px 0;

      .name {
        font-size: 21px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
        letter-spacing: 0px;
      }

      .intro {
        opacity: 0.7;
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 16px;
        letter-spacing: 0px;
      }

      .right {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.38);
        border-radius: 50%;
      }
    }

    .top2 {
      display: flex;
      justify-content: space-between;

      .top2-item {
        text-align: center;
        padding-bottom: 55px;

        .num {
          font-size: 21px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: center;
          color: #ffffff;
          line-height: 24px;
          letter-spacing: 0px;
        }

        .other {
          opacity: 0.7;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 16px;
          letter-spacing: 0px;
        }
      }
    }

    .top3 {
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 92%;
      padding: 0 @p15;

      .cell {
        border-radius: 8px;
        padding: 18px 17px;
      }
    }
  }

  .content {
    padding: 0 @p15;
    margin-top: 27px;

    .middle {
      padding: 19px @p15;
      background-color: #fff;
      overflow: hidden;
      border-radius: 8px;

      .middle-title {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #181a39;
        line-height: 20px;
        letter-spacing: 0px;
        margin: 0;
        padding-bottom: 17px;
      }

      .middle-content {
        display: flex;
        justify-content: space-between;

        .middle-content_item {
          text-align: center;

          .m1 {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: center;
            color: #b4b4bd;
            line-height: 14px;
            letter-spacing: 0px;

            span {
              color: #00B8D4;
            }
          }

          .m2 {
            padding: 10px 0 6px;
            font-size: 21px;
            font-family: DINAlternate, DINAlternate-Bold;
            font-weight: 700;
            text-align: center;
            color: #181a39;
            line-height: 24px;
            letter-spacing: 0px;
          }

          .m3 {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: center;
            color: #545671;
            line-height: 16px;
            letter-spacing: 0px;
          }
        }
      }
    }

    .bottom {
      overflow: hidden;
      border-radius: 8px;
      margin: 10px 0 20px;
    }
  }
}
</style>
