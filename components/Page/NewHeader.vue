<script lang="ts" setup>
import { zh_tran, zh_getLang, getCookie } from '~/assets/js/uselang'
import { Autoplay } from 'swiper'
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
        img: 'https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png',
        bg: 'https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg',
        mbImg: 'https://static.cmereye.com/imgs/2023/04/b0d950232420bf46.jpg',
        pageName: 'index',
        pcText: ['重拾自信笑容', '愛牙愛己，由你做起'],
        mbText: ['重拾自信笑容', '愛牙愛己，由你做起'],
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

const isFiexdHeader = ref(false)
let bannerLists = ref([
  {
    name: '',
    link: '',
    pc: 'https://statichk.cmermedical.com/ckj/image/367b596eaaa1.avif',
    mb: 'https://statichk.cmermedical.com/ckj/image/7c04a9e56ac4.avif?v=1.0.0',
  },
  {
    name: '灣區長者醫療券banner',
    link: '/health-care-voucher',
    pc: 'https://static.cmereye.com/imgs/2024/09/2f23c4d8eb771740.webp',
    mb: 'https://static.cmereye.com/imgs/2024/09/339586940a228423.webp',
  },
  {
    name: '愛康健裕亨新店開業優惠banner',
    link: 'https://bit.ly/愛康健裕亨新店開業優惠',
    pc: 'https://statichk.cmermedical.com/ckj/image/e7d440f4a3c0.avif',
    mb: 'https://statichk.cmermedical.com/ckj/image/bde7805c9128.avif?v=1.2.2',
  },
  {
    name: '醫生團隊banner',
    link: '/medical-team',
    pc: 'https://static.cmereye.com/imgs/2024/04/df1e63bdd93c3504.webp',
    mb: 'https://static.cmereye.com/imgs/2024/03/f3f241b74364a6b7.jpg?v=1.2.0',
  },
  {
    name: '',
    link: '',
    pc: 'https://static.cmereye.com/imgs/2024/04/cf5124d2a6d53efd.webp',
    mb: 'https://static.cmereye.com/imgs/2024/03/4abbdd7326af4cc3.webp',
  },
  {
    name: '福田旗艦店18週年慶典優惠-慶典',
    link: '',
    pc: 'https://static.cmereye.com/static/ckj/imgs/banner/慶典_Banner_PC.webp',
    mb: 'https://static.cmereye.com/imgs/2024/07/8a23929f9adb1ba9.png',
  },
])
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
  bannerLists.value.sort(function () {
    return Math.random() - 0.5
  })
})
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

const handleMbMenu = () => {
  if (!window.navigator.onLine) {
    ElMessage({
      showClose: true,
      message: '網路異常，請檢查網路後重試',
      type: 'warning',
    })
  }
}
let bannerlink = ref('')
let bannerCurrent = ref(1)
let bannerCurrentSrc = ref('')
let bannerSwiperRef = {
  slideToLoop: (a) => {},
}
const changebanner = (swiper) => {
  bannerCurrent.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
  bannerlink.value = bannerLists.value[bannerCurrent.value - 1].link
  // bannerCurrent.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
  // if(swiper.realIndex){
  //   if(Number(swiper.realIndex)===1){
  //     bannerlink.value = 'https://bit.ly/愛康健裕亨新店開業優惠'
  //   }else if(Number(swiper.realIndex)===2){
  //     bannerlink.value = '/medical-team'
  //   }else{
  //     bannerlink.value = ''
  //   }
  // }else if(swiper.realIndex === 0){
  //   bannerlink.value = '/health-care-voucher'
  // }
}
const setBannerSwiperRef = (swiper: any) => {
  bannerSwiperRef = swiper
}
const handleBannerLineCur = (_value: number) => {
  bannerSwiperRef.slideToLoop(_value - 1)
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

const windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
</script>

<template>
  <header>
    <div class="header-content">
      <div class="header-content-bgImg" :class="headerConfig.pageName">
        <img class="imgBgBox pcBox" :src="headerConfig.bg" alt="" />
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
      <div class="header-content-bgImg-implant" :class="headerConfig.pageName">
        <swiper
          :modules="[Autoplay]"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          :speed="1000"
          @swiper="setBannerSwiperRef"
          @slideChange="changebanner"
        >
          <SwiperSlide v-for="(item, index) in bannerLists" :key="index">
            <nuxt-link
              :to="item.link === '' ? 'javaScript:void(0)' : item.link"
              :title="item.name"
              :alt="item.name"
            >
              <img
                :srcset="`${item.mb} 768w, ${item.pc}`"
                :src="item.pc"
                :alt="item.name"
                :title="item.name"
              />
            </nuxt-link>
          </SwiperSlide>
        </swiper>
      </div>
      <div
        ref="imgBgHeight"
        class="header-content-bgImgBB pcBox"
        :class="headerConfig.pageName"
      >
        <nuxt-link :to="bannerlink">
          <img :src="bannerLists[bannerCurrent - 1].pc" alt="" />
        </nuxt-link>
      </div>
      <div class="header-content-btn-implant bannerLine">
        <div class="bannerLine-in">
          <PageSwiperPointLine
            :latestNewsNum="bannerLists.length"
            :latestNewsCurrent="bannerCurrent"
            @changeLineCur="handleBannerLineCur"
          ></PageSwiperPointLine>
        </div>
      </div>
      <div class="waterBg-implant"></div>
      <div class="header-content-text-implant" :class="headerConfig.pageName">
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
            <!-- <div class="icon-lists">
              <nuxt-link
                class="icon-lists-in"
                to="https://www.facebook.com/ckjdental.hk/"
              >
                <img src="@/assets/images/icon_33.svg" alt="facebook" />
              </nuxt-link>
              <nuxt-link
                class="icon-lists-in"
                to="https://www.instagram.com/ckj_hk/"
              >
                <img src="@/assets/images/icon_31.svg" alt="instagram" />
              </nuxt-link>
              <div class="icon-lists-in" to="" @click="handlecopywechatcode">
                <img src="@/assets/images/icon_34.svg" alt="weChat" />
              </div>
              <nuxt-link
                class="icon-lists-in"
                to="https://www.youtube.com/channel/UC4AQD5eeOiHIGd3QYFGK4aA"
              >
                <img src="@/assets/images/icon_32.svg" alt="youtobe" />
              </nuxt-link>
            </div> -->
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
      <!-- 水波纹盒子 -->
      <div class="waterBg" :class="headerConfig.pageName"></div>
      <div class="explain_page_one" style="display: none;">優惠只限於網上及電話預約客戶</div>
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
@keyframes btnAnim {
  0% {
    clip-path: polygon(-10% 0, 0 0, -10% 100%, -20% 100%);
  }
  50% {
    clip-path: polygon(50% 0, 60% 0, 50% 100%, 40% 100%);
  }
  100% {
    clip-path: polygon(110% 0, 120% 0, 110% 100%, 100% 100%);
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
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &-bgImg {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    &.course-new {
      display: none;
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
    & > img {
      width: 100%;
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
    bottom: 240px;
    left: 0;
    z-index: 40;
    width: 100%;
    &.bannerLine {
      bottom: 130px;
      z-index: 41;
      .bannerLine-in {
        width: 250px;
      }
    }
  }
  .waterBg-implant {
    display: none;
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
    &.course-new {
      display: none;
    }
  }
  &-bgImgBB {
    position: relative;
    opacity: 0;
    &.course-new {
      max-width: 100%;
      width: 100%;
      height: auto;
      // min-height: calc(580 / 1920 * 100vw);
      img {
        width: 100%;
        height: auto;
      }
      & > a {
        width: 100%;
        height: auto;
        display: block;
        // height: 100%;
        // overflow: hidden;
      }
    }
  }
  &-in {
    width: 100%;
    max-width: 100%;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    align-items: flex-end;
    align-items: center;
    z-index: 50;
    position: relative;
    transition: all 0.5s;
    .logo {
      display: flex;
      align-items: center;
      gap: 0 clamp(15px, 0.052vw, 30px);
      .health_care_voucher {
        display: flex;
        flex-direction: column;
        border-left: 1px solid #aaa;
        padding-left: clamp(15px, 1.0465vw, 20px);
      }
    }
    .menu {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      & > div:first-child {
        color: #666666;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        .menuItem {
          padding: 0 0 20px;
          cursor: pointer;
          font-size: 22px;
          font-weight: 600;
          position: relative;
          & > a {
            padding: 0 10px;
            display: inline-block;
            text-align: center;
          }
          &.langItem {
            padding: 0 20px 25px;
            .menuChild {
              .menuChild-item {
                & > span {
                  color: var(--textColor);
                }
                &.langItem-act {
                  & > span {
                    color: var(--indexColor1);
                  }
                }
              }
            }
          }
          .triangleIcon:after {
            content: '';
            width: 0px;
            height: 0px;
            border: 10px solid;
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
          &:hover .menuChild {
            display: flex;
            animation: animBottomIn 0.5s forwards;
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
            padding: 0 20px 5px;
            box-sizing: border-box;
            background: #ffffff;
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            &-item {
              width: 100%;
              text-align: center;
              padding: 0;
              font-weight: 500;
              font-size: 20px;
              color: #666666;
              transition: all 0.3s;
              &:not(:last-child) {
                border-bottom: 1px solid var(--indexColor2);
              }
              &:hover {
                color: var(--indexColor1);
              }
              &.menuChildCurrent {
                color: var(--indexColor1);
              }
              & > a {
                padding: 10px 0 5px;
                display: block;
              }
              // &>a{
              //   &.hot{
              //     position: relative;
              //     color: var(--indexColor1);
              //     &::after{
              //       content: '·';
              //       position: absolute;
              //       left: 50%;
              //       top: 0;
              //       font-size: 30px;
              //       color: var(--indexColor1);
              //       margin-top: -8px;
              //     }
              //   }
              // }
            }
            &::before {
              content: '';
              width: 0px;
              height: 0px;
              border: 10px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -18px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard {
            width: 500px;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 20px 10px;
            border-radius: 16px;
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
                    font-size: 30px;
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
    background: #fff;
  }
  .waterBg {
    position: relative;
    z-index: 35;
    &.course-new {
      bottom: 60px;
    }
  }
  .explain_page_one {
    position: absolute;
    z-index: 35;
    bottom: 13.5%;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
    text-align: right;
    max-width: 90%;
    width: 1521px;
    padding: 0 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .pcMenuBox {
    &.course-new {
      margin-top: 60px;
    }
  }
  .headerBox01 {
    position: relative;
    background: #fff;
    .health_max_width {
      width: 100%;
      max-width: 1520px;
      margin: 0 auto;
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
    .health_max_width {
      box-sizing: border-box;
      max-width: 100%;
      padding-left: clamp(30px, 3.2803vw, 100px);
      width: 100%;
      align-items: center;
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
}
.waterBg::after {
  content: '';
  background-image: url(@/assets/images/back_wave01.png);
  background-repeat: repeat-x;
  background-position: center 20px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 45;
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
  z-index: 45;
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
@media (min-width: 768px) and (max-width: 1000px) {
  .header-content {
    .explain_page_one {
      max-width: 80%;
      width: 80%;
    }
    &-text-implant {
      div {
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-btn-implant {
      bottom: auto;
      span {
        font-size: 2vw;
        padding: 5px 4vw;
      }
    }
    &-in {
      width: calc(80% + 60px);
    }
    &-bgImgBB {
      width: 100%;
    }
  }
  .waterBg::after,
  .waterBg::before {
    height: 160px;
  }
}
@media (min-width: 1001px) and (max-width: 1452px) {
  .header-content {
    .explain_page_one {
      max-width: 90%;
      width: calc(90% + 40px) !important;
      padding: 0;
      bottom: 9.5%;
    }
    &-in {
      // width: calc(80% + 60px);
      // padding: 10px 10px 0 30px;
      box-sizing: border-box;
      max-width: 100vw;
      width: 100vw;
      .logo {
        width: 200px;
      }
      .menu {
        & > div:first-child {
          align-items: flex-end;
          align-items: center;
          color: #666;
          display: flex;
          justify-content: flex-end;
          .menuItem {
            font-size: clamp(12px, 1.2vw, 1.8vw);
            padding: 0 0 10px;
            & > a {
              padding: 0 0.4vw;
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
    &-text-implant {
      bottom: 80px;
      div {
        width: calc(80%);
        margin: 0 auto;
      }
    }
    &-bgImgBB {
      width: 100%;
    }
    &-btn-implant {
      bottom: 18vw;
    }
  }
  .waterBg::after,
  .waterBg::before {
    height: 120px;
    bottom: -30px;
  }
  :deep(.bannerLine) {
    bottom: 80px !important;
  }
}

@media (min-width: 768px) and (max-width: 1450px) {
  .header-content {
    &-in {
      // width: calc(80% + 120px);
      // padding: 10px 0 0 0;
      align-items: center;
      box-sizing: border-box;
      max-width: 100%;
      padding-left: clamp(30px, 3.2803vw, 100px);
      width: 100%;
      .logo {
        width: 20%;
        // margin-bottom: 15px;
      }
      .menu {
        & > div:first-child {
          align-items: flex-end;
          align-items: center;
          color: #666;
          display: flex;
          justify-content: flex-end;
          .menuItem {
            font-size: clamp(12px, 1.2vw, 1.8vw);
            padding: 0 0 10px;
            & > a {
              padding: 0 0.4vw;
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
    &-text-implant {
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
    &-in {
      // width: calc(80% + 60px);
      // padding: 10px 15px 0 30px;
      box-sizing: border-box;
      max-width: 100vw;
      width: 100vw;
      padding-left: clamp(30px, 3.2803vw, 100px);
      .logo {
        width: 20%;
        // margin-bottom: 10px;
      }
      .menu {
        & > div:nth-child(1) {
          .menuItem {
            font-size: 1.1vw;
            padding: 0 0 10px;
            & > a {
              padding: 0 0.6vw;
              box-sizing: border-box;
            }
            &.langItem {
              padding: 0 0.6vw 1vw;
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
      bottom: calc(100px + 6vw);
      span {
        font-size: 1.9vw;
        padding: 0.3vw 3.5vw;
      }
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

@media screen and (max-width: 480px) {
  .header-content {
    .explain_page_one {
      position: absolute;
      z-index: 34;
      bottom: -5.65vw;
      right: 0;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      width: fit-content;
      color: #666666;
      width: 100%;
      left: auto;
      transform: translateX(0);
    }
    // margin-top: 0;
    &-bgImg {
      position: relative;
      &.course-new {
        margin-top: 70px;
      }
    }
    &-bgImg-implant {
      position: relative;
      top: 16vw;
      z-index: 1;
      &.course-new {
        padding-bottom: 5px;
        margin-top: 20px;
        margin-bottom: 0px;
      }
    }
    &-btn-implant {
      &.bannerLine {
        position: relative;
        bottom: -100px;
        z-index: 2;
        .bannerLine-in {
          width: 150px;
        }
      }
    }
    &-text-implant {
      position: relative;
      margin-top: 25px;
      width: calc(100% - 60px);
      bottom: auto;
      text-align: left;
      z-index: 1;
      & > div {
        font-size: 5.3vw;
      }
      &.course-new {
        display: block;
        margin-top: 150px;
      }
    }
    .waterBg-implant {
      display: block;
      margin-top: -30px;
      &::before {
        content: '';
        background-image: url(@/assets/images/back_wave03.png);
        background-repeat: repeat-x;
        background-position: center bottom;
        height: 37.2vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 2.7vw;
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
        background-position: center 5.3vw;
        height: 37.2vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 2.7vw;
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
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 0 5.3vw;
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 5.3vw 5.3vw;
      background: #fff;
      .menu {
        display: none;
      }
      .logo {
        width: 125px;
        margin-bottom: 0;
      }
      .menu:nth-child(1) {
        display: none;
      }
      .icon {
        display: flex;
        align-items: center;
        &-menuopen {
          display: block;
          width: 5.3vw;
          margin-right: 25px;
        }
        &-lists {
          display: flex;
          align-items: center;
          &-in {
            display: block;
            margin-right: 15px;
            img {
              width: 5.3vw;
            }
          }
        }
      }
    }
    &-span {
      width: 70px;
      font-weight: 400;
      font-size: 5.3vw;
      right: 30px;
      bottom: 60px;
    }
    .waterBg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      &.course-new {
        bottom: auto;
      }
    }
    .headerBox02 {
      position: relative;
      z-index: 40;
    }
  }
  .waterBg::after {
    transform: rotate(180deg);
    top: -50px;
  }
  .waterBg::before {
    transform: rotate(180deg);
    top: -60px;
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
    z-index: 35;
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
      margin-top: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item {
        width: 100%;
        text-align: center;
        padding: 5.3vw 0;
        font-size: 18px;
        position: relative;
        &:not(:last-child)::before {
          content: '';
          width: calc(100% - 60px);
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
          top: 29px;
          border-top: 10px solid;
          border-left: 6px solid;
          border-right: 6px solid;
          border-bottom: 10px solid;
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
            padding: 10px 0;
            display: block;
            &.router-link-exact-active {
              background: var(--indexColor2);
            }
          }
        }
      }
    }
    .langItem {
      width: calc(100% - 60px);
      padding: 5.3vw 0;
      margin: 0 30px;
      display: flex;
      border-top: 2px solid var(--indexColor2);
      justify-content: center;
      align-items: center;
      & > span {
        margin-left: 10px;
      }
    }
    &-btn {
      margin-top: 51px;
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
      margin: 50px auto 180px;
      &-in:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
  .health_care_voucher {
    display: flex;
    flex-direction: column;
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
@media screen and (min-width: 481px) and (max-width: 768px) {
  .header-content {
    .explain_page_one {
      position: absolute;
      z-index: 34;
      bottom: -5.65vw;
      right: 5%;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      width: fit-content;
      color: #666666;
      width: 100%;
    }
    // margin-top: 0;
    &-bgImg {
      position: relative;
      &.course-new {
        margin-top: 70px;
      }
    }
    &-bgImg-implant {
      position: relative;
      top: 16vw;
      z-index: 1;
      &.course-new {
        padding-bottom: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    &-btn-implant {
      &.bannerLine {
        position: relative;
        bottom: -100px;
        z-index: 2;
        .bannerLine-in {
          width: 150px;
        }
      }
    }
    &-text-implant {
      position: relative;
      margin-top: 25px;
      width: calc(100% - 60px);
      bottom: auto;
      text-align: left;
      z-index: 1;
      & > div {
        font-size: 5.3vw;
      }
      &.course-new {
        display: block;
        margin-top: 150px;
      }
    }
    .waterBg-implant {
      display: block;
      margin-top: -30px;
      &::before {
        content: '';
        background-image: url(@/assets/images/back_wave03.png);
        background-repeat: repeat-x;
        background-position: center bottom;
        height: 26.2vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 2.7vw;
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
        background-position: center 5.3vw;
        height: 26.2vw;
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 2.7vw;
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
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 0 5.3vw;
      position: fixed;
      top: 0;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 5.3vw 0 5.3vw 5.3vw;
      background: #fff;
      .menu {
        display: none;
      }
      .logo {
        width: 125px;
        margin-bottom: 0;
      }
      .menu:nth-child(1) {
        display: none;
      }
      .icon {
        display: flex;
        align-items: center;
        &-menuopen {
          display: block;
          width: 5.3vw;
          margin-right: 25px;
        }
        &-lists {
          display: flex;
          align-items: center;
          &-in {
            display: block;
            margin-right: 15px;
            img {
              width: 5.3vw;
            }
          }
        }
      }
    }
    &-span {
      width: 70px;
      font-weight: 400;
      font-size: 5.3vw;
      right: 30px;
      bottom: 60px;
    }
    .waterBg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      &.course-new {
        bottom: auto;
      }
    }
    .headerBox02 {
      position: relative;
      z-index: 40;
    }
  }
  .waterBg::after {
    transform: rotate(180deg);
    top: -50px;
  }
  .waterBg::before {
    transform: rotate(180deg);
    top: -60px;
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
    z-index: 35;
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
      margin-top: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-item {
        width: 100%;
        text-align: center;
        padding: 5.3vw 0;
        font-size: 18px;
        position: relative;
        &:not(:last-child)::before {
          content: '';
          width: calc(100% - 60px);
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
          top: 29px;
          border-top: 10px solid;
          border-left: 6px solid;
          border-right: 6px solid;
          border-bottom: 10px solid;
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
            padding: 10px 0;
            display: block;
            &.router-link-exact-active {
              background: var(--indexColor2);
            }
          }
        }
      }
    }
    .langItem {
      width: calc(100% - 60px);
      padding: 5.3vw 0;
      margin: 0 30px;
      display: flex;
      border-top: 2px solid var(--indexColor2);
      justify-content: center;
      align-items: center;
      & > span {
        margin-left: 10px;
      }
    }
    &-btn {
      margin-top: 51px;
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
      margin: 50px auto 180px;
      &-in:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
  .health_care_voucher {
    display: flex;
    flex-direction: column;
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
// @media screen and (min-width: 431px) and (max-width: 768px) {
//   .waterBg-implant {
//     display: block;
//     margin-top: -30px;
//     &::before {
//       content: '';
//       background-image: url(@/assets/images/back_wave03.png);
//       background-repeat: repeat-x;
//       background-position: center bottom;
//       height: 22.2vw !important;
//       width: 100%;
//       position: absolute;
//       z-index: 1;
//       left: 0px;
//       bottom: 2.7vw;
//       animation-name: wave2;
//       animation-duration: 10s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       -webkit-animation-name: wave2;
//       -webkit-animation-duration: 10s;
//       -webkit-animation-timing-function: linear;
//       -webkit-animation-iteration-count: infinite;
//     }
//     &::after {
//       content: '';
//       background-image: url(@/assets/images/back_wave01.png);
//       background-repeat: repeat-x;
//       background-position: center 5.3vw;
//       height: 22.2vw !important;

//       width: 100%;
//       position: absolute;
//       z-index: 1;
//       left: 0px;
//       bottom: 2.7vw;
//       animation-name: wave1;
//       animation-duration: 20s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       -webkit-animation-name: wave1;
//       -webkit-animation-duration: 20s;
//       -webkit-animation-timing-function: linear;
//       -webkit-animation-iteration-count: infinite;
//       filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
//     }
//   }
// }
</style>
