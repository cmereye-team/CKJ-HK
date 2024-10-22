<script lang="ts" setup>
import { zh_tran, zh_getLang, getCookie } from '~/assets/js/uselang'
import { useAppState } from '~/stores/appState'
import { toWhatsApp, smallPhoneNum } from '~/assets/js/common'
import serviceLists from '~/assets/js/service'
const route = useRoute()
const appState = useAppState()
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
  btnText: {
    type: String,
    default: '',
  },
  isPageNoBanner: {
    type: Boolean,
    default: false,
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

const headerData = {
  bannerTitleSpanOne: '重拾自信笑容',
  bannerTitleSpanTwo: '愛牙愛己，由你做起',
  bannerText: '全程式預約一體化診療服務，讓每一位顧客享受',
  bannerTextSpan: '健康微笑之旅。',
  menuBoxBtn: '諮詢熱線',
  menuBoxPhone: smallPhoneNum,
}

const menuBoxBool = ref(false)

const menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if (menuActNum.value === _idx) menuActNum.value = 0
  else menuActNum.value = _idx
}

const handleMenuChild = (_menu: any, _idx: number) => {
  if (_menu.link.includes('medical-team')) {
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
  if (route.name == 'contactUs') {
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
  if (route.name == 'brand-course') {
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

const imgBgHeight = ref({
  offsetHeight: 0,
})
const isArticle = ref(false)
const isFiexdHeader = ref(false)
onMounted(() => {
  getScrollHeight()
  getWindowWidth()
  window.addEventListener('scroll', getScrollHeight)
  window.addEventListener('resize', getWindowWidth)
  setTimeout(() => {
    if (route.path.includes('/cn')) {
      changlangsfun('s')
    }
  }, 500)
  isHealthCare()
  styleArticle()
})

const styleArticle = () => {
  const regex = /^\/news\/news-tooth-wiki\/\d+$/
  if (regex.test(route.path)) {
    isArticle.value = true
  }
}

const windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
const isShowLanguageBool = ref(false)
const getScrollHeight = () => {
  if (imgBgHeight.value && imgBgHeight.value.offsetHeight) {
    if (imgBgHeight.value.offsetHeight < window.scrollY) {
      isFiexdHeader.value = true
    } else {
      isFiexdHeader.value = false
    }
    if (window.scrollY === 0) {
      isShowLanguageBool.value = true
    } else {
      isShowLanguageBool.value = false
    }
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
const changlangsfun = (_type) => {
  zh_tran(_type)
  if (getCookie('zh_choose')) {
    var zh_choose: any = getCookie('zh_choose')
    appState.setLangs(zh_choose)
  }
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
const showExplain = ref(true)
const isHealthCare = () => {
  if (route.path === '/dental-service/scaling-and-polishing') {
    showExplain.value = true
  } else if (route.path == '/dental-service/implant') {
    showExplain.value = true
  } else if (route.path == '/dental-service/fillings') {
    showExplain.value = true
  } else if (route.path == '/dental-service/veneers') {
    showExplain.value = true
  } else if (route.path == '/dental-service/toothtray') {
    showExplain.value = true
  } else if (route.path == '/dental-service/rootCanal') {
    showExplain.value = true
  } else if (route.path == '/dental-service/orthodontics') {
    showExplain.value = true
  } else if (route.path == '/dental-service/invisiblebraces') {
    showExplain.value = true
  } else if (route.path == '/dental-service/all-ceramic-crowns') {
    showExplain.value = true
  } else if (route.path == '/dental-service/children-dentistry') {
    showExplain.value = true
  } else if (route.path == '/dental-service/wisdom-teeth-extraction') {
    showExplain.value = true
  } else if (route.path == '/dental-service/teeth-whitening') {
    showExplain.value = true
  } else if (route.path == '/dental-service/general-oral-examination') {
    showExplain.value = true
  } else if (route.path == '/dental-service/periodontal') {
    showExplain.value = true
  } else if (route.path == '/health-care-voucher') {
    showExplain.value = true
  } else if (route.path == '/news/scaling-and-polishing-test') {
    showExplain.value = true
  } else if (route.path == '/news/news-tooth-wiki/263') {
    showExplain.value = true
  } else if (route.path == '/news/news-tooth-wiki/263') {
    showExplain.value = true
  } else {
    showExplain.value = false
  }
}

const hideDiv = () => {
  if (
    route.path == '/news/coverage' ||
    route.path == '/news/coverage/' ||
    route.path == '/news/information' ||
    route.path == '/news/information/' ||
    route.path == '/news/tooth-wiki' ||
    route.path == '/news/tooth-wiki/' ||
    route.path == '/messagePage' ||
    route.path == '/messagePage/' ||
    route.path == '/medical-team' ||
    route.path == '/medical-team/' ||
    route.path == '/contactUs' ||
    route.path == '/contactUs/' ||
    route.path == '/brand/course' ||
    route.path == '/brand/course/' ||
    route.path == '/federation-of-trade-unions-zone' ||
    route.path == '/federation-of-trade-unions-zone/'
  ) {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <header>
    <div class="header-content">
      <div class="header-content-bgImg" :class="headerConfig.pageName">
        <div class="header-content-bgImg-imgInfo bigPageCon">
          <img
            :class="['pcBox', headerConfig.pageName]"
            :src="headerConfig.img"
            alt="banner"
          />
        </div>
        <img
          :class="[
            'mbBox',
            'header-content-bgImg-mbImg',
            headerConfig.pageName,
          ]"
          :src="headerConfig.mbImg"
          alt="banner"
        />
      </div>
      <div
        v-if="
          [
            'implant',
            'rootCanal-test',
            'scaling-and-polishing-test',
            'periodontal-test',
            'orthodontics-test',
            'invisalign-test',
            'veneers-test',
            'action-message',
            'course-new',
            'health-care-voucher',
            'coverage',
          ].includes(headerConfig.pageName)
        "
        class="header-content-bgImg-implant"
        :class="headerConfig.pageName"
      >
        <img
          :data-cfsrc="headerConfig.img"
          :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.img}`"
          :src="headerConfig.img"
          alt="banner"
        />
      </div>
      <div
        ref="imgBgHeight"
        class="header-content-bgImgBB pcBox"
        :class="headerConfig.pageName"
      >
        <img
          :data-cfsrc="headerConfig.img"
          :srcset="`${headerConfig.mbImg} 768w, ${headerConfig.img}`"
          :src="headerConfig.img"
          alt="banner"
        />
      </div>
      <div
        v-if="
          [
            'implant',
            'rootCanal-test',
            'scaling-and-polishing-test',
            'invisalign-test',
            'veneers-test',
          ].includes(headerConfig.pageName)
        "
        class="header-content-btn-implant"
      >
        <PageAnimBtnTypeTwo :str="btnText || '免費網上預約'" />
      </div>
      <div
        v-if="
          ['periodontal-test', 'orthodontics-test'].includes(
            headerConfig.pageName
          )
        "
        class="header-content-btn-implant"
      >
        <PageAnimBtnTypeTwo :str="'獲取免費諮詢'" />
      </div>
      <div
        v-if="
          [
            'implant',
            'rootCanal-test',
            'scaling-and-polishing-test',
            'index-test',
            'periodontal-test',
            'orthodontics-test',
            'invisalign-test',
            'veneers-test',
            'action-message',
            'course-new',
            'health-care-voucher',
            'coverage',
          ].includes(headerConfig.pageName)
        "
        class="waterBg-implant"
      ></div>
      <div
        v-if="
          [
            'implant',
            'rootCanal-test',
            'scaling-and-polishing-test',
            'health-care-voucher',
          ].includes(headerConfig.pageName) && windowWidth > 768
        "
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>29年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
      </div>
      <div
        class="explain_box_mobile"
        v-if="hideDiv()"
        :style="{
          top: isArticle
            ? windowWidth > 768
              ? '50px'
              : '0'
            : windowWidth > 768
            ? '110px'
            : '0',
        }"
      >
        <span>優惠只限於網上及電話預約客戶</span>
      </div>
      <div
        v-if="headerConfig.pageName === 'periodontal-test'"
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>健康牙齒，從<span>牙周病治療</span>開始</div>
        <div>保持口氣清新、牙周健康</div>
      </div>
      <div
        v-if="
          [
            'veneers-test',
            'action-message',
            'course-new',
            'invisalign-test',
            'orthodontics-test',
            'index-test',
          ].includes(headerConfig.pageName)
        "
        class="header-content-text-implant"
        :class="headerConfig.pageName"
      >
        <div>全程式預約一體化診療服務，</div>
        <div>讓每一位顧客享受 <span>健康微笑之旅。</span></div>
      </div>
      <!-- pc菜单 -->
      <div
        :class="[
          isFiexdHeader ? 'headerBox02' : 'headerBox01',
          'pcMenuBox',
          headerConfig.pageName,
        ]"
      >
        <div
          ref="headerMenu"
          class="pageCon header-content-in health_max_width"
        >
          <div class="logo">
            <nuxt-link
              :to="'/'"
              title="深圳愛康健口腔醫院"
              alt="深圳愛康健口腔醫院"
              ><img src="@/assets/images/logo_11.svg" alt=""
            /></nuxt-link>
            <div v-if="windowWidth > 768" class="health_care_voucher">
              <span>香港長者醫療券</span>
              <span>政府指定預約網站</span>
            </div>
          </div>
          <div class="menu">
            <div>
              <div
                v-for="(menuItem, menuIndex) in menuLists"
                :key="menuIndex"
                class="menuItem"
              >
                <nuxt-link
                  :class="[
                    menuItem.child.length ? 'triangleIcon' : '',
                    {
                      'health-care-voucher':
                        menuItem.link === '/health-care-voucher',
                    },
                    {
                      'federation-of-trade-unions-zone':
                        menuItem.link === '/federation-of-trade-unions-zone',
                    },
                  ]"
                  :to="
                    ['/news', '/dental-service'].includes(menuItem.link)
                      ? 'javaScript:void(0)'
                      : menuItem.link
                  "
                  :title="$t(menuItem.name)"
                >
                  <span>{{ $t(menuItem.name) }}</span>
                </nuxt-link>
                <div
                  v-if="menuItem.child.length"
                  class="menuChild"
                  :class="{
                    serviceCard: menuItem.link.includes('/dental-service'),
                  }"
                >
                  <div
                    v-for="(menuChildItem, menuChildIndex) in menuItem.child"
                    :key="menuChildIndex"
                    :class="[
                      'menuChild-item',
                      classNamefilter(menuChildItem, menuChildIndex),
                    ]"
                    @click.stop="handleMenuChild(menuItem, menuChildIndex)"
                  >
                    <nuxt-link
                      :to="menuChildItem.link"
                      :class="{ hot: menuChildItem.isHot }"
                    >
                      {{
                        menuChildItem.link ===
                        '/dental-service/wisdom-teeth-extraction'
                          ? '拔牙\n'
                          : ''
                      }}
                      {{ $t(menuChildItem.name) }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="menuItem langItem">
                <img src="@/assets/images/icon_26.svg" alt="" />
                <div class="menuChild">
                  <div
                    :class="[
                      'menuChild-item',
                      { 'langItem-act': appState.langs === 't' },
                    ]"
                  >
                    <span class="zh_click" @click="glangs('t')">繁體</span>
                  </div>
                  <div
                    :class="[
                      'menuChild-item',
                      { 'langItem-act': appState.langs === 's' },
                    ]"
                  >
                    <span class="zh_click" @click="glangs('s')">簡體</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pc_menu_tel">
              <a
                href="tel: +852 6933 8128"
                target="_blank"
                rel="noopener noreferrer"
                >香港真人熱線電話：(852) 6933 8128</a
              >
            </div>
          </div>
          <div class="icon">
            <nuxt-link
              to="/health-care-voucher"
              class="health_care_voucher mb_gov_voucher"
            >
              <img src="@/assets/images/1321315134.svg" alt="" />
            </nuxt-link>
            <div class="icon-menuopen" @click="menuBoxBool = !menuBoxBool">
              <img v-if="!menuBoxBool" src="@/assets/images/icon_61.png" />
              <img v-else src="@/assets/images/icon_7.svg" />
            </div>
          </div>
        </div>
      </div>
      <!-- mb菜单 -->
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
            >簡體中文</span
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
      <!-- 水波纹盒子 -->
      <div class="waterBg" :class="headerConfig.pageName"></div>
    </div>
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
  </header>
</template>

<style lang="scss" scoped>
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
.dialogBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  display: none;
  &.show {
    display: block;
    animation: contentIn 1s forwards;
  }
  &-in {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: calc(100% - 60px);
    height: auto;
    max-width: 768px;
    z-index: 1000;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 10px 30px 15px;
    border-radius: 10px;
    &.show-in {
      animation: topIn 0.7s ease-out forwards;
    }
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
    .content {
      font-size: 16px;
      margin: 10px 0 20px;
    }
    .btn {
      display: flex;
      justify-content: center;
    }
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
.header_content_text_implant_span {
  font-style: normal;
  font-weight: 500 !important;
  font-size: 20px !important;
  line-height: 160%;
  & > span {
    color: #666666 !important;
  }
}
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &-bgImg {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    &.implant,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.action-message,
    &.coverage,
    &.course-new,
    &.health-care-voucher,
    &.scaling-and-polishing-test {
      display: none;
    }
    &-imgInfo {
      & > img {
        &.brand {
          float: right;
        }
        &.implant {
          float: right;
          margin-right: calc((100% - 1452px) / 2);
        }
        &.rootCanal,
        &.orthodontics {
          float: right;
          margin-right: calc((100% - 1600px) / 2);
        }
        &.toothtray,
        &.general-oral-examination {
          float: right;
          margin-right: calc((100% - 1700px) / 2);
        }
        &.invisalign,
        &.veneers,
        &.wisdom-teeth-extraction,
        &.periodontal,
        &.teeth-whitening,
        &.scaling-and-polishing,
        &.children-dentistry,
        &.all-ceramic-crowns {
          float: right;
          margin-right: calc((100% - 1920px) / 2);
        }
        &.fillings {
          float: right;
          margin-right: calc((100% - 1200px) / 2);
        }
      }
    }
    &-mbImg {
      &.veneers,
      &.periodontal {
        -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
        -o-transform: matrix(-1, 0, 0, 1, 0, 0);
        -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }
    }
    &-textInfo {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    .imgBgBox {
      width: 100%;
      min-height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -2;
    }
    .imgBgBox-1 {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -3;
      filter: blur(10px);
    }
    & > img {
      width: 100%;
    }
    &-in {
      position: absolute;
      left: 55%;
      top: 30%;
      .bannerTitle {
        font-weight: 700;
        font-size: 42px;
        line-height: 160%;
        color: #666666;
        span {
          display: block;
          &:last-child {
            margin-left: 200px;
          }
        }
        &.rootCanal,
        &.wisdom-teeth-extraction {
          span {
            &:last-child {
              margin-left: 120px;
            }
          }
        }
        &.toothtray,
        &.scaling-and-polishing,
        &.invisalign {
          span {
            &:last-child {
              margin-left: 130px;
            }
          }
        }
      }
      .text {
        margin-top: 32px;
        max-width: 550px;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 160%;
        color: #666666;
        width: 73%;
        span {
          font-size: 25px;
          color: var(--indexColor);
        }
      }
      &.brand {
        left: 0;
      }
      &.implant,
      &.orthodontics,
      &.rootCanal,
      &.invisalign,
      &.veneers,
      &.all-ceramic-crowns {
        left: 0;
        top: 25%;
      }
      &.wisdom-teeth-extraction,
      &.periodontal,
      &.toothtray,
      &.teeth-whitening,
      &.scaling-and-polishing {
        left: 0;
        top: 25%;
      }
      &.fillings,
      &.general-oral-examination,
      &.children-dentistry {
        left: 0;
        top: 25%;
      }
      &.index-test,
      &.action-message,
      &.course-new,
      &.health-care-voucher,
      &.coverage {
        display: none;
      }
    }
  }
  &-bgImg-implant {
    position: fixed;
    z-index: -2;
    width: 100%;
    img {
      width: 100%;
    }
  }
  &-btn-implant {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 200px;
    left: 0;
    z-index: 40;
    width: 100%;
  }
  .waterBg-implant {
    display: none;
  }
  .explain_box_mobile {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    position: relative;
    z-index: 45;
    display: flex;
    top: 110px;
    justify-content: flex-end;
    margin-right: 230px;
    max-width: 1512px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 30px;
    & > span {
      color: #666666;
    }
  }
  &-text-implant {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 40;
    width: 100%;
    max-width: 1450px;
    text-align: right;
    & > div {
      font-size: 28px;
      font-weight: 700;
      color: #666666;
      span {
        color: var(--indexColor1);
      }
    }
    &.index-test,
    &.action-message,
    &.course-new,
    &.coverage {
      display: none;
    }
    &.periodontal-test {
      display: none;
    }
    &.orthodontics-test {
      display: none;
    }
    &.invisalign-test,
    &.veneers-test {
      display: none;
    }
  }
  &-bgImgBB {
    opacity: 0;
    &.index-test {
      max-width: 1920px;
      min-height: calc(650 / 1920 * 100%);
    }
    &.action-message,
    &.course-new,
    &.health-care-voucher,
    &.coverage,
    &.implant,
    &.health-care-voucher,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.scaling-and-polishing-test {
      max-width: 100%;
      img {
        width: 100%;
      }
    }
  }
  &-in {
    width: 100%;
    max-width: 1512px;
    display: flex;
    background: #ffffff00;
    box-sizing: border-box;
    margin: 0 auto;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    transition: all 0.5s;
    .logo {
      width: clamp(300px, 15.105vw, 320px);
    }
    .pc_tel {
      max-width: 100%;
    }
    .menu {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      & > div:nth-child(1) {
        color: #666666;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        align-items: center;
        .menuItem {
          padding: 0 0 clamp(15px, 1.0465vw, 20px);
          cursor: pointer;
          font-size: clamp(16px, 1.145vw, 22px);
          font-weight: 600;
          position: relative;
          & > a {
            padding: 0 clamp(8px, 0.052vw, 10px);
            display: inline-block;
            text-align: center;
          }
          &.langItem {
            padding: 0 1vw clamp(8px, 0.052vw, 10px);
            & > img {
              width: clamp(15px, 1.0465vw, 20px);
            }
          }
          &.langItem {
            padding: 0 clamp(15px, 1.0465vw, 20px) clamp(20px, 1.3vw, 25px);
            .menuChild {
              .menuChild-item {
                & > span {
                  color: var(--textColor);
                  white-space: nowrap;
                }
                &.langItem-act {
                  & > span {
                    color: var(--indexColor1);
                    white-space: nowrap;
                  }
                }
              }
            }
          }
          .triangleIcon:after {
            content: '';
            width: 0px;
            height: 0px;
            border: clamp(8px, 0.052vw, 10px) solid;
            border-color: #666666 transparent transparent transparent;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          .triangleIcon:hover {
            &:after {
              border-color: var(--indexColor1) transparent transparent
                transparent;
            }
          }
          span {
            position: relative;
            display: inline-block;
            &::before {
              content: '';
              width: 0;
              position: absolute;
              left: 50%;
              bottom: -2px;
              transform: translateX(-50%);
              height: 2px;
              background: var(--textColor);
              transition: all 0.3s;
              border-radius: 2px;
            }
          }
          & > .router-link-exact-active {
            color: var(--indexColor1);
            &.triangleIcon:after {
              border-color: var(--indexColor1) transparent transparent
                transparent;
            }
            span {
              &::before {
                width: 100%;
                bottom: 2px;
                background: var(--indexColor1);
              }
            }
            &.health-care-voucher {
              span {
                &::before {
                  background: #00a752;
                }
              }
            }
            &.federation-of-trade-unions-zone {
              span {
                &::before {
                  background: #e60013;
                }
              }
            }
          }
          &:hover {
            color: var(--indexColor1);
            .triangleIcon:after {
              border-color: var(--indexColor1) transparent transparent
                transparent;
            }
            span {
              &::before {
                width: 100%;
                bottom: 2px;
                background: var(--indexColor1);
              }
            }
            .health-care-voucher {
              span {
                &::before {
                  background: #00a752;
                }
              }
            }
            .federation-of-trade-unions-zone {
              span {
                &::before {
                  background: #e60013;
                }
              }
            }
          }
          .health-care-voucher {
            color: #00a752;
            .router-link-exact-active {
              color: #00a752;
            }
          }
          .federation-of-trade-unions-zone {
            color: #e60013;
            .router-link-exact-active {
              color: #e60013;
            }
          }
          &:hover .menuChild {
            display: flex;
            animation: animBottomIn 0.5s forwards;
          }
          .menuChild {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, 20px);
            opacity: 0;
            min-width: 130%;
            z-index: 2;
            display: none;
            flex-direction: column;
            transition: all 0.3s;
            padding: 0 clamp(19px, 1.04vw, 20px) 5px;
            box-sizing: border-box;
            background: #ffffff;
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            &-item {
              width: 100%;
              text-align: center;
              padding: 0;
              font-weight: 500;
              font-size: clamp(14px, 1.092vw, 20px);
              color: #666666;
              transition: all 0.3s;
              & > a {
                display: block;
                padding: clamp(8px, 0.052vw, 10px) 0 5px;
              }
              &:not(:last-child) {
                border-bottom: 1px solid var(--indexColor2);
              }
              &:hover {
                color: var(--indexColor1);
              }
              &.menuChildCurrent {
                color: var(--indexColor1);
              }
            }
            &::before {
              content: '';
              width: 0px;
              height: 0px;
              border: clamp(8px, 0.052vw, 10px) solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: clamp(-14px, -0.092vw, -18px);
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            width: 500px;
            flex-direction: row;
            flex-wrap: wrap;
            padding: clamp(15px, 1.0465vw, 20px) clamp(8px, 0.052vw, 10px);
            border-radius: clamp(14px, 0.083vw, 16px);
            .menuChild-item {
              width: calc(100% / 3);
              border: none;
              padding: 0;
              position: relative;
              white-space: pre-wrap;
              line-height: 1.2;
              & > a {
                height: 56px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.hot {
                  position: relative;
                  color: var(--indexColor1);
                  &::after {
                    content: '·';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    font-size: clamp(25px, 1.5625vw, 30px);
                    color: var(--indexColor1);
                    margin-top: -8px;
                  }
                }
              }
              &:not(:nth-of-type(3n)) {
                &::before {
                  content: '';
                  width: 0;
                  height: 60%;
                  border-right: 1px solid #f7c3c3;
                  top: 20%;
                  right: 0;
                  position: absolute;
                }
              }
              &:not(:nth-of-type(n + 13)) {
                &::after {
                  content: '';
                  width: 80%;
                  height: 0;
                  border-bottom: 1px solid #f7c3c3;
                  left: 10%;
                  bottom: 0;
                  position: absolute;
                }
              }
            }
            &::after {
              content: '';
              width: 100px;
              height: calc(90 / 130 * 100px);
              background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png)
                no-repeat;
              background-size: 100% auto;
              display: block;
              position: absolute;
              bottom: 0px;
              right: 30px;
              overflow: hidden;
              background-position-y: calc(90 / 130 * 100px);
              animation: menuIconAnim 1.5s 0.5s forwards;
            }
          }
        }
      }
    }
    .icon {
      display: none;
    }
  }
  .waterBg {
    position: relative;
    z-index: 35;
    &.implant,
    &.rootCanal-test,
    &.periodontal-test,
    &.orthodontics-test,
    &.invisalign-test,
    &.veneers-test,
    &.health-care-voucher,
    &.scaling-and-polishing-test {
      bottom: 100px;
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
      margin-top: 80px;
      transition: all 0.3s;
    }
  }
  .headerBox01 {
    position: relative;
    background: #fff;
    width: 100%;
    .pc_menu_tel {
      display: none;
    }
  }
  .headerBox02 {
    position: fixed;
    background: #fff;
    top: 0;
    width: 100vw;
    z-index: 100;
    box-shadow: 0px 4px 8px var(--indexColor3);
    margin-top: 0 !important;
    .header-content-in {
      align-items: center;
      .logo {
        display: flex;
        gap: 0 clamp(15px, 0.052vw, 30px);
        align-items: center;
        & > a {
          img {
            height: 30px;
          }
        }
      }
    }
    .pc_tel {
      max-width: 100%;
    }
    .health_care_voucher {
      display: flex;
    }
    .pc_menu_tel {
      display: flex;
      align-items: center;
      gap: 0 clamp(8px, 0.052vw, 10px);
      padding: clamp(15px, 1.0465vw, 20px) clamp(20px, 3.0465vw, 60px)
        clamp(15px, 1.0465vw, 20px) clamp(15px, 1.0465vw, 20px);
      color: #fff;
      text-align: center;
      font-family: FakePearl;
      font-size: clamp(14px, 1.146vw, 22px);
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 35.2px */
      background: var(--Theme-Color, #fc1682);
    }
  }
}
.header-content {
  .headerBox02 {
    .health_max_width {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      padding-left: clamp(30px, 3.2803vw, 100px);
      .menu {
        .menuItem {
          font-size: clamp(22px, 0.7vw, 22px);
          padding: 0 0 10px;
          & > a {
            padding: 0 0.7vw;
            box-sizing: border-box;
          }
          &.langItem {
            padding: 0 0.7vw 10px;
            & > img {
              width: 20px;
            }
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1rem;
            }
            &::before {
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            padding: 12px 6px;
          }
        }
      }
      .logo {
        .health_care_voucher {
          padding-left: clamp(15px, 1.0465vw, 20px);
          border-left: 1px solid #aaa;
        }
      }
    }
  }
}
.health_care_voucher {
  margin-right: 10px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  & > span:nth-child(1) {
    white-space: nowrap !important;
    box-sizing: border-box;
    padding: 2px 4px 2px 6px;
    color: var(--White, #fff);
    text-align: right;
    font-family: FakePearl;
    font-size: clamp(10px, 0.7vw, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: clamp(2px, 0.2vw, 3.78px);
    border-radius: 2px;
    background: var(---Green, #00a752);
  }
  & > span:nth-child(2) {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: right;
    font-family: FakePearl;
    font-size: clamp(10px, 0.7vw, 14px);
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: 1.4px;
  }
}
.waterBg::after {
  content: '';
  background-image: url(@/assets/images/back_wave01.png);
  background-repeat: repeat-x;
  background-position: center 20px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 35;
  left: 0px;
  bottom: 0px;
  animation-name: wave1;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave1;
  -webkit-animation-duration: 20s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
  height: 178px;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 35;
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
.waterBg::before {
  content: '';
  background-image: url(@/assets/images/back_wave03.png);
  background-repeat: repeat-x;
  background-position: center bottom;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 35;
  left: 0px;
  bottom: 0px;
  animation-name: wave2;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave2;
  -webkit-animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
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
.menuBox {
  display: none;
}

@media (min-width: 768px) and (max-width: 1000px) {
  .header-content {
    &-bgImg {
      &-in {
        left: 50%;
        .bannerTitle {
          font-size: 2rem;
          line-height: 130%;
          span {
            display: block;
            &:last-child {
              margin-left: 10%;
            }
          }
        }
        .text {
          margin-top: 1%;
          font-size: 1.2rem;
          line-height: 130%;
          span {
            font-size: 1.2rem;
            color: var(--indexColor);
          }
        }
      }
    }
    &-text-implant {
      div {
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-btn-implant {
      bottom: 18vw;
    }
    &-in {
      width: calc(80% + 60px);
    }
    &-bgImgBB {
      width: 100%;
    }
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 60px;
      }
    }
    .pcMenuBox {
      &.health-care-voucher {
        margin-top: 60px;
      }
    }

    .explain_box_mobile {
      max-width: calc(80% + 60px);
      padding: 10px 15px 0 30px;
      & > span {
        color: #666666;
      }
    }
  }
  .waterBg::after,
  .waterBg::before {
    height: 160px;
  }
}
@media (min-width: 1001px) and (max-width: 1452px) {
  .header-content {
    .explain_box_mobile {
      max-width: calc(80% + clamp(50px, 4.13vw, 60px));
      padding: clamp(8px, 0.069vw, 10px) 15px 0 clamp(24px, 2.016vw, 30px);
      & > span {
        color: #666666;
      }
    }
    &-in {
      width: calc(80% + 60px);
      .logo {
        width: clamp(180px, 137.5vw, 200px);
      }
    }
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 65px;
      }
    }
    &-text-implant {
      bottom: 80px;
      div {
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-bgImg {
      &-in {
        top: 30%;
        .bannerTitle {
          font-size: 2.5rem;
          line-height: 130%;
          span {
            display: block;
            &:last-child {
              margin-left: 15%;
            }
          }
        }
        .text {
          margin-top: 2%;
          font-size: 1.4rem;
          line-height: 130%;
          span {
            font-size: 1.4rem;
            color: var(--indexColor);
          }
        }
      }
    }
    &-bgImgBB {
      width: 100%;
    }
    &-btn-implant {
      bottom: 12vw;
    }
  }
}
@media (min-width: 768px) and (max-width: 1450px) {
  .header-content {
    &-in {
      width: calc(80% + 120px);
      .logo {
        width: 20%;
      }
      .menu {
        .menuItem {
          font-size: clamp(16px, 1.2vw, 1.8vw);
          padding: 0 0 10px;
          & > a {
            padding: 0 1vw;
            box-sizing: border-box;
          }
          &.langItem {
            padding: 0 1vw 10px;
            & > img {
              width: 20px;
            }
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1rem;
            }
            &::before {
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            padding: 12px 6px;
          }
        }
      }
    }
    &-text-implant {
      div {
        font-size: 100%;
      }
    }
    .headerBox02 {
      .pc_tel {
        max-width: 90%;
        width: 90%;
      }
      .menu {
        .menuItem {
          font-size: clamp(14px, 1vw, 1.4vw);
          padding: 0 0 10px;
          & > a {
            padding: 0 1vw;
            box-sizing: border-box;
          }
          &.langItem {
            padding: 0 1vw 10px;
            & > img {
              width: 20px;
            }
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1rem;
            }
            &::before {
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            padding: 12px 6px;
          }
        }
      }
    }
  }
  .header-content {
    .headerBox02 {
      .health_max_width {
        max-width: 100vw;
        width: 100vw;
        box-sizing: border-box;
        .menu {
          .menuItem {
            font-size: clamp(12px, 0.8vw, 1.4vw);
            padding: 0 0 10px;
            & > a {
              padding: 0 0.3vw;
              box-sizing: border-box;
            }
            &.langItem {
              padding: 0 0.8vw 10px;
              & > img {
                width: 20px;
              }
            }
            .triangleIcon:after {
              border: 5px solid;
              border-color: #666666 transparent transparent transparent;
            }
            .menuChild {
              padding: 0 10px;
              &-item {
                font-size: 1rem;
              }
              &::before {
                border: 5px solid;
                border-color: transparent transparent #fff transparent;
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            .serviceCard {
              padding: 12px 6px;
            }
          }
        }
      }
    }
    .headerBox01 {
      .health_max_width {
        width: calc(90% + 40px) !important;
        padding: 10px 0 0 0;
      }
    }
  }
}
@media (min-width: 1450px) and (max-width: 1800px) {
  .header-content {
    .explain_box_mobile {
      max-width: calc(80% + 60px);
      padding: 10px 30px 0 30px;
      & > span {
        color: #666666;
      }
    }
    &-in {
      width: calc(90% + 40px);
      .logo {
        width: 20%;
      }
      .menu {
        .menuItem {
          font-size: clamp(18px, 0.8vw, 1.2vw);
          padding: 0 0 10px;
          & > a {
            padding: 0 0.8vw;
            box-sizing: border-box;
          }
          &.langItem {
            padding: 0 1vw 1vw;
            & > img {
              width: 1vw;
            }
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild {
            padding: 0 10px;
            &-item {
              font-size: 1.1vw;
            }
            &::before {
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            padding: 12px 6px;
          }
        }
      }
    }
    .waterBg {
      &.implant,
      &.rootCanal-test,
      &.periodontal-test,
      &.orthodontics-test,
      &.invisalign-test,
      &.veneers-test,
      &.health-care-voucher,
      &.scaling-and-polishing-test {
        bottom: 4vw;
      }
      &.course-new {
        bottom: 30px;
      }
    }
    &-btn-implant {
      bottom: calc(100px + 5vw);
    }
    &-text-implant {
      width: calc(80% + 60px);
      padding: 0 30px;
      bottom: 5vw;
      div {
        font-size: 100%;
      }
    }
  }
  .header-content {
    .headerBox02 {
      .health_max_width {
        max-width: 100vw;
        width: 100vw;
        box-sizing: border-box;
        .menu {
          .menuItem {
            font-size: clamp(14px, 1vw, 1.4vw);
            padding: 0 0 10px;
            & > a {
              padding: 0 1vw;
              box-sizing: border-box;
            }
            &.langItem {
              padding: 0 0.8vw 10px;
              & > img {
                width: 20px;
              }
            }
            .triangleIcon:after {
              border: 5px solid;
              border-color: #666666 transparent transparent transparent;
            }
            .menuChild {
              padding: 0 10px;
              &-item {
                font-size: 1rem;
              }
              &::before {
                border: 5px solid;
                border-color: transparent transparent #fff transparent;
                position: absolute;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            .serviceCard {
              padding: 12px 6px;
            }
          }
        }
      }
    }
    .headerBox01 {
      .health_max_width {
        max-width: 90%;
        width: 90%;
      }
    }
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
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 5.3vw 5.3vw;
      background: #fff;
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
