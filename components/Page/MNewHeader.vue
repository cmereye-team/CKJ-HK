<script setup lang="ts">
import { zh_tran, zh_getLang, getCookie } from '~/assets/js/uselang'
import { toWhatsApp, smallPhoneNum } from '~/assets/js/common'
import { useAppState } from '~/stores/appState'
import serviceLists from '~/assets/js/service'
const appState = useAppState()
const menuBoxBool = ref(false)
const route = useRoute()

const handleMenuChild = (_menu: any, _idx: number) => {
  if (_menu.link.includes('medical-team')) {
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
}
const classNamefilter = (_menu: any, _idx: number) => {
  let className = ''
  if (route.path === '/medical-team') {
    if (_menu.link.includes('medical-team')) {
      if (appState.areaTabCurNum === _idx) {
        className = 'menuChildCurrent'
      }
    }
  } else if (route.path.includes('/brand')) {
    if (_menu.link.includes(appState.brand)) {
      className = 'menuChildCurrent'
    }
  } else if (route.path.includes('/dental-service')) {
    if (_menu.link.includes(appState.dentistryService)) {
      className = 'menuChildCurrent'
    }
  }

  return className
}
const changlangsfun = (_type) => {
  zh_tran(_type)
  if (getCookie('zh_choose')) {
    var zh_choose: any = getCookie('zh_choose')
    appState.setLangs(zh_choose)
  }
}
let _bool = ref(false)
const handlecopywechatcode = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText('ckjhongkong').then(
      function () {
        _bool.value = true
      },
      function (err) {
        ElMessage({
          showClose: true,
          message: '操作異常，請刷新頁面試試',
          type: 'warning',
        })
      }
    )
  } else {
    alert('Clipboard API is not supported by your browser.')
  }
}
const handleopenwechat = () => {
  window.location.href = 'weixin://'
}
defineProps({
  headerConfig: {
    type: Object,
    default() {
      return {
        img: 'https://static.cmereye.com/imgs/2024/06/d1a92001b420ca10.jpg',
        bg: '',
        mbImg: 'https://static.cmereye.com/imgs/2024/01/a59e0a87dfb394f1.jpg',
        pageName: 'index',
        pcText: [],
        mbText: [],
      }
    },
  },
})

const menuLists: any = [
  {
    name: 'components.header.menuLists.menu_index.name',
    link: '/',
    child: [],
  },
  {
    name: 'components.header.menuLists.menu_brand.name',
    link: ``,
    child: [
      {
        name: 'components.header.menuLists.menu_brand.history',
        link: '/brand/course#course',
      },
      {
        name: 'components.header.menuLists.menu_brand.activity',
        link: '/brand/course#activity',
      },
      {
        name: 'components.header.menuLists.menu_brand.honor',
        link: '/brand/course#honor',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_dental_service.name',
    link: `/dental-service`,
    child: [...serviceLists],
  },
  {
    name: 'components.header.menuLists.health-care-voucher.name',
    link: `/health-care-voucher`,
    child: [],
  },
  {
    name: 'components.header.menuLists.federation-of-trade-unions-zone.name',
    link: `/federation-of-trade-unions-zone`,
    child: [],
  },
  {
    name: 'components.header.menuLists.menu_news.name',
    link: `/news`,
    child: [
      {
        name: 'components.header.menuLists.menu_news.coverage',
        link: '/news/coverage',
      },
      {
        name: 'components.header.menuLists.menu_news.information',
        link: '/news/information',
      },
      {
        name: 'components.header.menuLists.menu_news.tooth-wiki',
        link: '/news/tooth-wiki',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_medical_team.name',
    link: `/medical-team`,
    child: [
      {
        name: 'components.areaTabs.luohu',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.futian',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.nanshan',
        link: '/medical-team',
      },
      // {
      //   name: 'components.areaTabs.baoan',
      //   link: '/medical-team',
      // },
      {
        name: 'components.areaTabs.longhua',
        link: '/medical-team',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_contactUs.name',
    link: '',
    child: [
      {
        name: 'components.header.menuLists.menu_contactUs.come_route',
        link: '/contactUs#contactUs',
      },
      {
        name: 'components.header.menuLists.menu_contactUs.appeal',
        link: '/contactUs#appeal',
      },
      {
        name: 'components.header.menuLists.menu_contactUs.Q&A',
        link: '/contactUs#Q&A',
      },
    ],
  },
]
const menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0
  else menuActNum.value = _idx
}
const handleMbMenu = () => {
  if (!window.navigator.onLine) {
    ElMessage({
      showClose: true,
      message: '網路異常，請檢查網路後重試',
      type: 'warning',
    })
  }
}
const router = useRouter()
const glangs = (_type) => {
  let _a = [
    {
      lable: 'hk',
      value: 't',
    },
    {
      lable: 'cn',
      value: 's',
    },
  ]
  let _b = _a.find((item) => item.value === _type)
  let _str = route.path.slice(0, 3)
  let _arr = [
    '404',
    'test',
    '/news-tooth-wiki',
    '/news-information',
    '/article',
  ]
  if (_arr.some((str) => route.path?.indexOf(str) !== -1)) {
    changlangsfun(_type)
  } else {
    if (_str === '/cn' || _str === '/hk') {
      let _url = route.path
      let _url_new = _url.replace(_url.slice(0, 3), _b ? '/' + _b.lable : '')
      router.push(_url_new)
    } else {
      router.push(`${_b ? '/' + _b.lable : ''}${route.path}`)
    }
  }
}

const headerData = {
  bannerTitleSpanOne: '重拾自信笑容',
  bannerTitleSpanTwo: '愛牙愛己，由你做起',
  bannerText: '全程式預約一體化診療服務，讓每一位顧客享受',
  bannerTextSpan: '健康微笑之旅。',
  menuBoxBtn: '諮詢熱線',
  menuBoxPhone: smallPhoneNum,
}
</script>

<template>
  <div class="menuBox" :style="{ top: menuBoxBool ? '0' : '-100vh' }">
    <div class="menuLists">
      <div
        v-for="(item, index) in menuLists"
        :key="index"
        :class="[
          'menuLists-item',
          item.child.length ? 'childIcon' : '',
          { 'health-care-voucher': item.link === '/health-care-voucher' },
          {
            'federation-of-trade-unions-zone':
              item.link === '/federation-of-trade-unions-zone',
          },
        ]"
      >
        <nuxt-link
          :to="!item.child.length ? item.link : 'javaScript:void(0)'"
          :title="$t(item.name)"
        >
          <div @click="handleMenu(index)">
            {{ $t(item.name) }}
          </div>
        </nuxt-link>
        <div
          v-if="item.child.length"
          v-show="menuActNum === index"
          class="menuLists-childLists"
        >
          <div
            v-for="(itemChild, itemChildIndex) in item.child"
            :key="itemChildIndex"
            class="menuLists-childLists-item"
            @click="handleMenuChild(item, itemChildIndex)"
          >
            <nuxt-link :to="itemChild.link" @click="handleMbMenu">
              {{ $t(itemChild.name) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="langItem">
      <img src="@/assets/images/icon_27.svg" alt="语言" />
      <span
        class="zh_click"
        :style="{ color: appState.langs === 't' ? '#FC1682' : '#FF85AF' }"
        @click="glangs('t')"
        >繁體中文</span
      >
      <span
        class="zh_click"
        :style="{
          color: appState.langs === 's' ? '#FC1682' : '#FF85AF',
          'font-family': '微软雅黑',
        }"
        @click="glangs('s')"
        >简体中文</span
      >
    </div>
    <!-- 立即預約 -->
    <nuxt-link :to="`tel: +852 ${smallPhoneNum}`">
      <div class="menuBox-btn">
        {{ headerData.menuBoxBtn }}
      </div>
    </nuxt-link>
    <div class="menuBox-phone">
      <img src="@/assets/images/icon_11.svg" />（852）{{
        headerData.menuBoxPhone
      }}
    </div>
    <div class="menuBox-icon">
      <!-- <div class="menuBox-icon-in">
      <nuxt-link
        to="https://www.facebook.com/ckjdental.hk/"
        target="_blank"
      >
        <img src="@/assets/images/icon_01.png" />
      </nuxt-link>
    </div> -->
      <div class="menuBox-icon-in">
        <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
          <img src="@/assets/images/icon_02.svg" />
        </nuxt-link>
      </div>
      <div class="menuBox-icon-in">
        <nuxt-link
          to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA"
          target="_blank"
        >
          <img src="@/assets/images/icon_03.svg" />
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="waterBg" :class="headerConfig.pageName"></div>
  <div :class="['dialogBox', { show: _bool }]" @click="_bool = false">
    <div :class="['dialogBox-in', { 'show-in': _bool }]" @click.stop="">
      <div class="title">WeChat ID已複製</div>
      <div class="content">
        點擊「打開微信」進入微信，點右上⊕，粘貼ID，添加客服開始免費咨詢！
      </div>
      <div class="btn">
        <el-button @click="_bool = false">取消</el-button>
        <el-button type="primary" @click="handleopenwechat">
          打開微信
        </el-button>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@keyframes contentIn {
  to {
    opacity: 1;
  }
}
@keyframes topIn {
  50% {
    top: 52%;
  }
  75% {
    top: 49%;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}
@keyframes animBottomIn {
  from {
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes menuIconAnim {
  30% {
    background-position-y: 3px;
  }
  55% {
    background-position-y: 15px;
  }
  75% {
    background-position-y: 8px;
  }
  90% {
    background-position-y: 11px;
  }
  100% {
    background-position-y: 10px;
  }
}
@keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
@-webkit-keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
@keyframes wave2 {
  0% {
    background-position: 0px bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
@-webkit-keyframes wave2 {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
@media screen and (max-width: 768px) {
  .header-content {
    &-bgImg {
      position: relative;
      &-textInfo {
        position: static;
        width: 100%;
        background: #fff;
        transform: none;
      }
      &-in {
        position: static;
        .bannerTitle {
          position: absolute;
          line-height: 140%;
          color: #000;
          font-weight: 400;
          font-size: 1.25rem;
          left: auto;
          top: auto;
          right: 8vw;
          bottom: 0;
          span {
            padding: 2.65vw 2px;
            background: #fff;
            text-align: center;
            writing-mode: tb-rl;
            text-align: center;
            letter-spacing: 7px;
            vertical-align: middle;
            &:first-child {
              margin-left: 13.33vw;
            }
            &:last-child {
              margin-left: 0;
              margin-top: -32vw;
            }
          }
        }
        .text {
          left: 55%;
          font-weight: 500;
          font-size: 1.25rem;
          width: 60vw;
          padding-left: 8vw;
          margin-top: 0;
          span {
            font-size: 1.25rem;
          }
        }
      }
      &.index-test,
      &.action-message,
      &.course-new,
      &.health-care-voucher,
      &.coverage {
        margin-top: 18.65vw;
      }
    }
    &-bgImg-implant {
      // display: none;
      position: relative;
      top: 16vw;
      &.rootCanal-test {
        padding-bottom: 10.65vw;
      }
      &.rootCanal {
        padding-bottom: 10.65vw;
      }
      &.scaling-and-polishing {
        padding-bottom: 16vw;
      }
      &.scaling-and-polishing-test {
        padding-bottom: 16vw;
      }
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test {
        padding-bottom: 16vw;
      }
      &.implant {
        padding-bottom: 16vw;
      }
      &.course-new {
        padding-bottom: 13.33vw;
      }
      &.health-care-voucher {
        padding-bottom: 37.33vw;
      }
      &.coverage {
        padding-bottom: 32vw;
      }
    }
    &-btn-implant {
      display: none;
    }
    &-text-implant {
      position: relative;
      margin-top: 6.65vw;
      width: calc(100% - 16vw);
      bottom: auto;
      text-align: left;
      z-index: 1;
      & > div {
        font-size: 5.3vw;
      }
      &.index-test,
      &.action-message,
      &.course-new {
        display: block;
      }
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test {
        display: block;
      }
      &.health-care-voucher {
        display: none;
      }
    }
    .waterBg-implant {
      display: block;
      &::before {
        content: '';
        background-image: url(@/assets/images/back_wave03.png);
        background-repeat: repeat-x;
        background-position: center bottom;
        height: 43.2vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: -8vw;
        animation-name: wave2;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-name: wave2;
        -webkit-animation-duration: 10s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
      }
      &::after {
        content: '';
        background-image: url(@/assets/images/back_wave01.png);
        background-repeat: repeat-x;
        background-position: center 20px;
        height: 45.33vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: -8vw;
        animation-name: wave1;
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        -webkit-animation-name: wave1;
        -webkit-animation-duration: 20s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
      }
    }
    .explain_box_mobile {
      font-style: normal;
      font-weight: 500;
      font-size: 3.73vw;
      line-height: 160%;
      position: relative;
      z-index: 38;
      top: -16vw;
      width: fit-content;
      margin-right: 8vw;
      margin-left: auto;
      & > span {
        color: #666666;
      }
    }
    // &-bgImg-implant-mb {
    //   display: block;
    //   padding-top: 80px;
    //   img {
    //     width: 100%;
    //   }
    // }
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 5.3vw 5.3vw;
      .logo {
        width: 33.3vw;
        margin-bottom: 0;
      }
      .menu {
        display: none;
      }
      .icon {
        display: flex;
        align-items: center;
        &-menuopen {
          display: block;
          width: 5.3vw;
          margin-right: 6.65vw;
        }
        &-lists {
          display: flex;
          align-items: center;
          &-in {
            display: block;
            margin-right: 4vw;
            img {
              width: 5.3vw;
            }
          }
        }
      }
      .health_care_voucher {
        display: flex;
        flex-direction: column;
        margin-right: 3px;
        & > span:nth-child(1) {
          box-sizing: border-box;
          padding: 0.53vw 1.6vw;
          display: block;
          border-radius: 2px;
          background: var(---Green, #00a752);
          color: var(--White, #fff);
          text-align: right;
          font-family: FakePearl;
          font-size: 3.73vw;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 3.78px;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: right;
          font-family: FakePearl;
          font-size: 3.73vw;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 1.4px;
        }
      }
    }
    &-span {
      width: 18.65vw;
      font-weight: 400;
      font-size: 5.3vw;
      right: 8vw;
      bottom: 16vw;
    }
    .waterBg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: auto;
      }
    }
    .pcMenuBox {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        margin-top: 0px;
        transition: all 0.3s;
      }
    }
    .headerBox02 {
      position: relative;
      z-index: 40;
    }
    .headerBox01,
    .headerBox02 {
      .health_care_voucher {
        display: flex;
      }
    }
  }
  .waterBg::after {
    transform: rotate(180deg);
    top: -13.3vw;
  }
  .waterBg::before {
    transform: rotate(180deg);
    top: -16vw;
  }

  .menuBox {
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 38;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    color: var(--indexColor1);
    transition: all 0.3s;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .menuLists {
      margin-top: 32vw;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item {
        width: 100%;
        text-align: center;
        padding: 5.3vw 0;
        font-size: 4.8vw;
        position: relative;
        &:not(:last-child)::before {
          content: '';
          width: calc(100% - 16vw);
          height: 2px;
          background: var(--indexColor2);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
        &.childIcon:after {
          content: '';
          width: 0;
          height: 0;
          display: inline-block;
          position: absolute;
          right: 34%;
          top: 7.98vw;
          border-top: 2.65vw solid;
          border-left: 6px solid;
          border-right: 6px solid;
          border-bottom: 2.65vw solid;
          border-color: var(--indexColor1) transparent transparent transparent;
          vertical-align: middle;
        }
        &.health-care-voucher {
          color: #00a752;
        }
        &.federation-of-trade-unions-zone {
          color: #e60013;
        }
      }
      &-childLists {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 5.3vw;
        color: var(--indexColor);
        &-item {
          width: 100%;
          height: 100%;
          a {
            width: 100%;
            height: 100%;
            padding: 2.65vw 0;
            display: block;
            &.router-link-exact-active {
              background: var(--indexColor2);
            }
          }
        }
      }
    }
    .langItem {
      width: calc(100% - 16vw);
      padding: 5.3vw 0;
      margin: 0 8vw;
      display: flex;
      border-top: 2px solid var(--indexColor2);
      justify-content: center;
      align-items: center;
      & > span {
        margin-left: 10px;
      }
    }
    &-btn {
      margin-top: 13.6vw;
      font-size: 1.25rem;
    }
    &-phone {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 23px;
      margin-top: 5.3vw;
      img {
        display: inline-block;
        vertical-align: middle;
        margin-top: -3px;
        margin-right: 5px;
      }
    }
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 13.3vw auto 48vw;
      &-in:not(:last-child) {
        margin-right: 6.65vw;
      }
    }
  }
  .mb_gov_voucher {
    display: flex;
    flex-direction: column;
    margin-right: 3px;
    & > span:nth-child(1) {
      box-sizing: border-box;
      padding: 0.53vw 1.6vw;
      display: block;
      border-radius: 2px;
      background: var(---Green, #00a752);
      color: var(--White, #fff);
      text-align: right;
      font-family: FakePearl;
      font-size: 3.73vw;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
      letter-spacing: 3.78px;
    }
    & > span:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: right;
      font-family: FakePearl;
      font-size: 3.73vw;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
      letter-spacing: 1.4px;
    }
  }
  .icon {
    & > a:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      margin-right: 3vw;
      & > span:nth-child(1) {
        box-sizing: border-box;
        padding: 0.53vw 1.6vw;
        display: block;
        border-radius: 2px;
        background: var(---Green, #00a752);
        color: var(--White, #fff);
        text-align: right;
        font-family: FakePearl;
        font-size: 3.73vw;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        letter-spacing: 3.78px;
      }
      & > span:nth-child(2) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: right;
        font-family: FakePearl;
        font-size: 3.73vw;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */
        letter-spacing: 1.4px;
      }
    }
  }
}
</style>