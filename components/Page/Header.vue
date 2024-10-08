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
    link: `/brand/course`,
    // child: [
    //   {
    //     name: 'components.header.menuLists.menu_brand.course',
    //     link: '/brand/course',
    //   },
    //   {
    //     name: 'components.header.menuLists.menu_brand.honor',
    //     link: '/brand/honor',
    //   },
    // ],
    child: [],
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
    link: '/contactUs',
    child: [],
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
    route.path == '/news/information' ||
    route.path == '/news/information/' ||
    route.path == '/news/tooth-wiki' ||
    route.path == '/messagePage' ||
    route.path == '/medical-team' ||
    route.path == '/contactUs' ||
    route.path == '/brand/course' ||
    route.path == '/federation-of-trade-unions-zone'
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
        <!-- <div class="header_content_text_implant_span" v-if="showExplain">
          <span>優惠只限於網上及電話預約客戶</span>
        </div> -->
      </div>
      <!-- <div
        v-if="showExplain && windowWidth > 768"
        class="header-content-text-implant"
      >
        <div>29年專科•專業•專注</div>
        <div><span>港人首選</span>一站式連鎖牙科品牌</div>
      </div> -->
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
          class="pageCon header-content-in"
          :class="[
            route.name == 'health-care-voucher' ? 'health_max_width' : 'pc_tel',
          ]"
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
              <!-- <div
                v-if="menuItem.link.includes('/dental-service')"
                class="menuChild serviceCard"
              >
                <serviceCard :is-menu="true" />
              </div> -->
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
                  <span class="zh_click" @click="glangs('s')">简体</span>
                </div>
              </div>
            </div>
            <div class="pc_menu_tel" v-if="route.name == 'health-care-voucher'">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <path
                    d="M19.1786 24.6466C19.0841 24.6466 18.9871 24.6466 18.8913 24.631C14.0503 24.0992 9.52647 21.7561 6.08632 17.9985C2.64616 14.241 0.501229 9.30025 0.0149361 4.0133C-0.0253836 3.59334 0.0161533 3.16882 0.136815 2.76765C0.257477 2.36648 0.454531 1.99775 0.71502 1.6857C0.994569 1.34981 1.33543 1.08159 1.71566 0.898308C2.09589 0.715024 2.50706 0.620741 2.92268 0.62153H6.49556C7.12779 0.620751 7.74415 0.837587 8.25709 1.24123C8.77002 1.64487 9.15343 2.21478 9.35284 2.86999L10.5175 6.66453C10.6952 7.24449 10.7207 7.86723 10.5911 8.46219C10.4614 9.05716 10.1817 9.60057 9.78376 10.0309L9.22472 10.6414C10.1546 12.2182 11.3863 13.5561 12.8351 14.5631L13.3838 13.9625C13.7796 13.5309 14.2775 13.2281 14.8219 13.0878C15.3662 12.9475 15.9356 12.9754 16.4663 13.1683L19.9408 14.4402C20.5397 14.6576 21.0608 15.0752 21.4303 15.634C21.7998 16.1927 21.999 16.8643 21.9996 17.5535V21.4555C22.0118 22.2868 21.7217 23.0895 21.1929 23.6876C20.6641 24.2857 19.9398 24.6306 19.1786 24.6466ZM2.92268 2.81487C2.79095 2.81153 2.66008 2.83878 2.53872 2.89481C2.41736 2.95085 2.30829 3.03439 2.21871 3.13992C2.14416 3.22817 2.08734 3.33248 2.0519 3.44614C2.01647 3.5598 2.0032 3.6803 2.01296 3.7999C2.45514 8.58302 4.39687 13.0524 7.50956 16.4518C10.6223 19.8512 14.7147 21.9717 19.0945 22.4546H19.1682C19.2752 22.4529 19.3808 22.4279 19.4788 22.3811C19.5768 22.3343 19.6652 22.2665 19.7389 22.1819C19.9085 21.9864 20.0014 21.7262 19.9977 21.4569V17.5535C19.9976 17.3233 19.9312 17.099 19.8079 16.9123C19.6846 16.7256 19.5106 16.5861 19.3106 16.5134L15.8361 15.2485C15.6592 15.1841 15.4694 15.1747 15.288 15.2213C15.1065 15.268 14.9405 15.3689 14.8086 15.5128L14.2534 16.1205C13.8773 16.5296 13.3686 16.7601 12.8377 16.7621C12.4409 16.7626 12.0533 16.6316 11.7261 16.3862C10.0456 15.2138 8.61601 13.6598 7.53469 11.8299C7.28434 11.4116 7.17365 10.9118 7.22126 10.4147C7.26887 9.91763 7.47188 9.45367 7.79609 9.10095L8.36418 8.48054C8.4966 8.33696 8.58938 8.15561 8.63194 7.9572C8.6745 7.75879 8.66512 7.5513 8.60487 7.35843L7.44799 3.5653C7.38202 3.34676 7.25455 3.15654 7.08376 3.02179C6.91296 2.88703 6.70756 2.81462 6.49686 2.81487H2.92268ZM20.9954 9.39349C20.7292 9.39312 20.474 9.27746 20.2858 9.07187C20.0975 8.86629 19.9916 8.58756 19.9913 8.29682C19.9899 6.843 19.4605 5.44916 18.5191 4.42115C17.5778 3.39315 16.3015 2.81496 14.9703 2.81346C14.704 2.81346 14.4486 2.69792 14.2603 2.49225C14.0719 2.28659 13.9661 2.00764 13.9661 1.71679C13.9661 1.42593 14.0719 1.14699 14.2603 0.941325C14.4486 0.735659 14.704 0.620117 14.9703 0.620117C16.834 0.622362 18.6207 1.43188 19.9385 2.87105C21.2563 4.31023 21.9976 6.26152 21.9996 8.29682C21.9993 8.58756 21.8934 8.86629 21.7051 9.07187C21.5169 9.27746 21.2617 9.39312 20.9954 9.39349ZM16.9839 9.39349C16.7177 9.39312 16.4624 9.27746 16.2742 9.07187C16.0859 8.86629 15.98 8.58756 15.9797 8.29682C15.9793 8.00608 15.8734 7.72735 15.6852 7.52177C15.4969 7.31618 15.2417 7.20052 14.9755 7.20015C14.709 7.20015 14.4534 7.08453 14.265 6.87873C14.0765 6.67294 13.9707 6.39381 13.9707 6.10277C13.9707 5.81173 14.0765 5.5326 14.265 5.32681C14.4534 5.12101 14.709 5.00539 14.9755 5.00539C15.7745 5.00614 16.5406 5.3532 17.1054 5.97034C17.6703 6.58748 17.9877 7.42424 17.9881 8.29682C17.9879 8.44126 17.9616 8.58425 17.9108 8.71759C17.8599 8.85093 17.7855 8.972 17.6917 9.07387C17.598 9.17574 17.4867 9.25641 17.3644 9.31126C17.242 9.36611 17.111 9.39405 16.9787 9.39349H16.9839Z"
                    fill="#FC1682"
                  />
                </svg>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
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
    // top: 0;
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
      // min-height: calc(726 / 1920 * 100vw);
      img {
        width: 100%;
      }
    }
  }
  &-in {
    width: 100%;
    max-width: 1512px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px 0 30px;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    transition: all 0.5s;
    .logo {
      width: clamp(280px, 15.105vw, 290px);
      margin-bottom: clamp(15px, 1.0465vw, 20px);
    }
    .pc_tel {
      max-width: 90%;
    }
    .menu {
      flex: 1;
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
          border: clamp(8px, 0.052vw, 10px) solid;
          border-color: #666666 transparent transparent transparent;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .triangleIcon:hover {
          &:after {
            border-color: var(--indexColor1) transparent transparent transparent;
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
            border-color: var(--indexColor1) transparent transparent transparent;
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
            border-color: var(--indexColor1) transparent transparent transparent;
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
            font-size: clamp(14px, 0.092vw, 18px);
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
    .health_care_voucher {
      display: none !important;
    }
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
        gap: 0 25px;
        align-items: center;
        & > a {
          img {
            height: 30px;
          }
        }
      }
    }
    .pc_tel {
      max-width: 90%;
    }
    .health_care_voucher {
      display: flex;
    }
    .pc_menu_tel {
      display: flex;
      align-items: center;
      gap: 0 clamp(8px, 0.052vw, 10px);
      padding: 0 0 clamp(15px, 1.0465vw, 20px);
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: FakePearl;
      font-size: clamp(18px, 1.146vw, 22px);
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 35.2px */
    }
  }
}
.header-content {
  .headerBox02 {
    .health_max_width {
      width: 100%;
      max-width: 1512px;
      box-sizing: border-box;
      padding: 20px 10px 0 30px;
      .menu {
        .menuItem {
          font-size: clamp(12px, 0.8vw, 1.4vw);
          padding: 0 0 10px;
          & > a {
            padding: 0 0.8vw;
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
      padding: clamp(8px, 0.069vw, 10px) clamp(8px, 0.069vw, 10px) 0
        clamp(24px, 1.56vw, 30px);
      .logo {
        width: clamp(180px, 137.5vw, 200px);
        margin-bottom: 15px;
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
      // &.health-care-voucher{
      //   bottom: 70px;
      // }
    }
    &-text-implant {
      bottom: 80px;
      // &.health-care-voucher {
      //   bottom: 80px;
      // }
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
      // span{
      //   font-size: 2vw;
      //   padding: 5px 4vw;
      // }
    }
  }
}
// @media (min-width: 768px) and (max-width: 1450px) {
//   .header-content {
//     .explain_box_mobile {
//       padding: 10px 15px 0 20px;
//       & > span {
//         color: #666666;
//       }
//     }
//     &-in {
//       .pc_tel {
//         max-width: 90%;
//       }
//       width: calc(90% + 60px);
//       padding: 10px 15px 0 30px;
//       .logo {
//         width: 20%;
//         margin-bottom: 15px;
//       }
//       .menu {
//         padding: 10px 15px 0 20px;
//         .menuItem {
//           font-size: 0.8vw;
//           padding: 0 0 8px;
//           & > a {
//             padding: 0 0.8vw;
//             box-sizing: border-box;
//           }
//           &.langItem {
//             padding: 0 1vw 10px;
//             & > img {
//               width: 20px;
//             }
//           }
//           .triangleIcon:after {
//             border: 5px solid;
//             border-color: #666666 transparent transparent transparent;
//           }
//           .menuChild {
//             padding: 0 10px;
//             &-item {
//               font-size: 1rem;
//             }
//             &::before {
//               border: 5px solid;
//               border-color: transparent transparent #fff transparent;
//               position: absolute;
//               top: -10px;
//               left: 50%;
//               transform: translateX(-50%);
//             }
//           }
//           .serviceCard {
//             padding: 12px 6px;
//           }
//         }
//       }
//     }
//     &-text-implant {
//       div {
//         font-size: 100%;
//       }
//     }
//   }
//   .pc_menu_tel {
//     & > a {
//       font-size: 12px;
//     }
//   }
// }
@media (min-width: 768px) and (max-width: 1450px) {
  .header-content {
    &-in {
      width: calc(80% + 120px);
      padding: 10px 0 0 0;
      .logo {
        width: 20%;
        margin-bottom: 15px;
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
        padding: 10px 20px 0;
        .menu {
          .menuItem {
            font-size: clamp(12px, 0.8vw, 1.4vw);
            padding: 0 0 10px;
            & > a {
              padding: 0 0.8vw;
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
      padding: 10px 0 0 0;
      .logo {
        width: 20%;
        margin-bottom: 10px;
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
      // span{
      //   font-size: 1.9vw;
      //   padding: .3vw 3.5vw;
      // }
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
        padding: 10px 20px 0;
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
