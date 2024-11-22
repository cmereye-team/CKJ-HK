<script lang="ts" setup>
import { zh_tran, zh_getLang, getCookie } from '~/assets/js/uselang'
import serviceLists from '~/assets/js/service'
import { useAppState } from '~/stores/appState'

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
const menuBoxBool = ref(false)
const windowWidth = ref(1920)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
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
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const route = useRoute()
const appState = useAppState()
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
</script>

<template>
  <div class="NewHeaderMenu">
    <div :class="[headerConfig.pageName, 'headerBox01']">
      <div ref="headerMenu" class="pc_header_menu">
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
                <svg
                  v-if="menuItem.child.length"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path d="M13 0H0.5L6.75 10L13 0Z" fill="#4D4D4D" />
                </svg>
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
@media screen and (min-width: 1441px) {
  .NewHeaderMenu {
    position: fixed;
    z-index: 110;
    width: 100%;
    background: #fff;
    top: 0;
  }
  .pc_header_menu {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: clamp(52.5px, 3.645vw, 70px);
    box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
    .logo {
      display: flex;
      gap: 0 clamp(18.75px, 1.3028vw, 25px);
      align-items: center;
      & > a:nth-child(1) {
        width: clamp(138px, 9.583vw, 184px);
        height: clamp(27px, 1.875vw, 36px);
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        & > span:nth-child(1) {
          color: var(--White, #fff);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 3.78px;
          border-radius: 2px;
          background: var(---Green, #00a752);
          padding: 2px 6px;
          box-sizing: border-box;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 1.4px;
        }
      }
      & > div:nth-child(2)::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        left: clamp(-9.375px, -0.65vw, -12.5px);
        background: #aaa;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 clamp(18.75px, 1.3028vw, 25px);
        margin-right: clamp(11.25px, 0.78125vw, 15px);
        .menuItem {
          position: relative;
          & > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
              font-size: clamp(16.5px, 1.1458vw, 22px);
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 35.2px */
            }
            span::after {
              content: '';
              width: 0;
              height: 2px;
              position: absolute;
              left: 50%;
              bottom: 10px;
              transform: translateX(-50%);
              background: var(--textColor);
              transition: all 0.3s;
              border-radius: 2px;
            }
          }
          .menuChild {
            display: none;
          }
        }
        .menuItem::after{
          content: '';
          width: 130%;
          display: inline-block;
          z-index: 3;
          height: 50px;
          background: transparent;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .menuItem:hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: flex;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: 130%;
            box-sizing: border-box;
            padding: 0px clamp(15px, 1.04165vw, 20px) 5px;
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
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
            }
            .menuChild-item:not(:last-child) {
              border-bottom: 1px solid var(--indexColor2);
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
          }
          .menuChild::before {
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
        .menuItem:nth-child(3):hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0 34px;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: auto;
            box-sizing: border-box;
            padding: clamp(18.75px, 1.3028vw, 25px)
              clamp(18.75px, 1.3028vw, 25px);
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
              width: 100%;
              text-align: center;
              padding: 0;
              font-weight: 500;
              font-size: clamp(14px, 1.092vw, 20px);
              color: #666666;
              transition: all 0.3s;
              white-space: nowrap;
              & > a {
                display: block;
                padding: clamp(12px, 0.252vw, 16px) 0 5px;
              }
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
            .menuChild-item:nth-last-child(-n + 2) {
              border-bottom: none;
            }
            .menuChild-item:not(:nth-child(n + 6)) {
              color: var(--Theme-Color, #fc1682);
              position: relative;
            }
            .menuChild-item:not(:nth-child(n + 6))::before {
              content: '';
              position: absolute;
              top: 5px;
              transform: translateX(-50%);
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: var(--Theme-Color, #fc1682);
            }
            .menuChild-item:not(:nth-child(3n)) {
              position: relative;
            }
            .menuChild-item:not(:nth-child(3n))::after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              right: clamp(-12.75px, -0.8854vw, -17px);
              top: 50%;
              transform: translateY(-50%);
              border-right: 1px solid var(--indexColor2);
            }
          }
          .menuChild::before {
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
          .menuChild::after {
            content: '';
            animation: menuIconAnim 1.5s 0.5s forwards;
            background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png)
              no-repeat;
            background-position-y: 69.2307692308px;
            background-size: 100% auto;
            bottom: 0;
            content: '';
            display: block;
            height: 69.2307692308px;
            overflow: hidden;
            position: absolute;
            right: 30px;
            width: 100px;
          }
        }
        .menuItem:nth-child(4) {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(4):hover {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #00a752;
              bottom: 2px;
            }
            svg {
              path {
                fill: #00a752;
              }
            }
          }
        }
        .menuItem:nth-child(5) {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(5):hover {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #e60013;
              bottom: 0px;
            }
            svg {
              path {
                fill: #e60013;
              }
            }
          }
        }
        .menuItem:nth-child(8):hover {
          .menuChild {
            width: 150%;
          }
        }
        .menuItem:last-child {
          box-sizing: border-box;
          padding-top: 5px;
        }
        .menuItem:last-child:hover {
          .menuChild {
            width: 350%;
            padding: clamp(7.5px, 0.020825vw, 10px) clamp(15px, 1.04165vw, 20px)
              5px;
          }
        }
      }
      .pc_menu_tel {
        color: var(--White, #fff);
        font-size: clamp(16.5px, 1.1458vw, 22px);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 35.2px */
        box-sizing: border-box;
        padding: clamp(11.25px, 0.78125vw, 15px) clamp(45px, 3.125vw, 60px)
          clamp(11.25px, 0.78125vw, 15px) clamp(11.25px, 0.78125vw, 15px);
        background: var(--Theme-Color, #fc1682);
      }
    }
  }
}
@media screen and (min-width: 1041px) and (max-width: 1440px) {
  .NewHeaderMenu {
    position: fixed;
    z-index: 110;
    width: 100%;
    background: #fff;
    top: 0;
  }
  .pc_header_menu {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: clamp(27.5px, 3.645vw, 30px);
    box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
    .logo {
      display: flex;
      gap: 0 clamp(18.75px, 1.3028vw, 25px);
      align-items: center;
      & > a:nth-child(1) {
        width: clamp(138px, 9.583vw, 184px);
        height: clamp(27px, 1.875vw, 36px);
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        & > span:nth-child(1) {
          color: var(--White, #fff);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 3.78px;
          border-radius: 2px;
          background: var(---Green, #00a752);
          padding: 2px 6px;
          box-sizing: border-box;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 1.4px;
        }
      }
      & > div:nth-child(2)::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        left: clamp(-9.375px, -0.65vw, -12.5px);
        background: #aaa;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 clamp(10.75px, 1.3028vw, 12px);
        margin-right: clamp(11.25px, 0.78125vw, 15px);
        .menuItem {
          position: relative;
          & > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
              font-size: clamp(10.5px, 0.8458vw, 16px);
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 35.2px */
            }
            span::after {
              content: '';
              width: 0;
              height: 2px;
              position: absolute;
              left: 50%;
              bottom: 10px;
              transform: translateX(-50%);
              background: var(--textColor);
              transition: all 0.3s;
              border-radius: 2px;
            }
          }
          .menuChild {
            display: none;
          }
        }
        .menuItem::after{
          content: '';
          width: 130%;
          display: inline-block;
          z-index: 3;
          height: 50px;
          background: transparent;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .menuItem:hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: flex;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: 180%;
            box-sizing: border-box;
            padding: 0px clamp(15px, 1.04165vw, 20px) 5px;
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
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
            }
            .menuChild-item:not(:last-child) {
              border-bottom: 1px solid var(--indexColor2);
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
          }
          .menuChild::before {
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
        .menuItem:nth-child(3):hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0 34px;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: auto;
            box-sizing: border-box;
            padding: clamp(18.75px, 1.3028vw, 25px)
              clamp(18.75px, 1.3028vw, 25px);
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
              width: 100%;
              text-align: center;
              padding: 0;
              font-weight: 500;
              font-size: clamp(14px, 1.092vw, 20px);
              color: #666666;
              transition: all 0.3s;
              white-space: nowrap;
              & > a {
                display: block;
                padding: clamp(12px, 0.252vw, 16px) 0 5px;
              }
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
            .menuChild-item:nth-last-child(-n + 2) {
              border-bottom: none;
            }
            .menuChild-item:not(:nth-child(n + 6)) {
              color: var(--Theme-Color, #fc1682);
              position: relative;
            }
            .menuChild-item:not(:nth-child(n + 6))::before {
              content: '';
              position: absolute;
              top: 5px;
              transform: translateX(-50%);
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: var(--Theme-Color, #fc1682);
            }
            .menuChild-item:not(:nth-child(3n)) {
              position: relative;
            }
            .menuChild-item:not(:nth-child(3n))::after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              right: clamp(-12.75px, -0.8854vw, -17px);
              top: 50%;
              transform: translateY(-50%);
              border-right: 1px solid var(--indexColor2);
            }
          }
          .menuChild::before {
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
          .menuChild::after {
            content: '';
            animation: menuIconAnim 1.5s 0.5s forwards;
            background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png)
              no-repeat;
            background-position-y: 69.2307692308px;
            background-size: 100% auto;
            bottom: 0;
            content: '';
            display: block;
            height: 69.2307692308px;
            overflow: hidden;
            position: absolute;
            right: 30px;
            width: 100px;
          }
        }
        .menuItem:nth-child(4) {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(4):hover {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #00a752;
              bottom: 2px;
            }
            svg {
              path {
                fill: #00a752;
              }
            }
          }
        }
        .menuItem:nth-child(5) {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(5):hover {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #e60013;
              bottom: 0px;
            }
            svg {
              path {
                fill: #e60013;
              }
            }
          }
        }
        .menuItem:nth-child(8):hover {
          .menuChild {
            width: 200%;
          }
        }
        .menuItem:last-child {
          box-sizing: border-box;
          padding-top: 5px;
        }
        .menuItem:last-child:hover {
          .menuChild {
            width: 350%;
            padding: clamp(7.5px, 0.020825vw, 10px) clamp(15px, 1.04165vw, 20px)
              5px;
          }
        }
      }
      .pc_menu_tel {
        color: var(--White, #fff);
        font-size: clamp(12.5px, 0.9458vw, 16px);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 35.2px */
        box-sizing: border-box;
        padding: clamp(8.25px, 0.78125vw, 15px) clamp(25px, 3.125vw, 30px)
          clamp(8.25px, 0.78125vw, 15px) clamp(11.25px, 0.78125vw, 15px);
        background: var(--Theme-Color, #fc1682);
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1040px) {
  .NewHeaderMenu {
    position: fixed;
    z-index: 110;
    width: 100%;
    background: #fff;
    top: 0;
  }
  .pc_header_menu {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: clamp(27.5px, 3.645vw, 35px);
    box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
    .logo {
      display: flex;
      gap: 0 clamp(18.75px, 1.3028vw, 25px);
      align-items: center;
      & > a:nth-child(1) {
        width: clamp(108px, 9.583vw, 184px);
        height: clamp(22.7px, 1.875vw, 36px);
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        & > span:nth-child(1) {
          color: var(--White, #fff);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 3.78px;
          border-radius: 2px;
          background: var(---Green, #00a752);
          padding: 2px 6px;
          box-sizing: border-box;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-size: clamp(10.5px, 0.7295vw, 14px);
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 18.2px */
          letter-spacing: 1.4px;
        }
      }
      & > div:nth-child(2)::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        left: clamp(-9.375px, -0.65vw, -12.5px);
        background: #aaa;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        display: flex;
        gap: 0 clamp(8.5px, 0.6028vw, 12px);
        margin-right: clamp(11.25px, 0.78125vw, 15px);
        .menuItem {
          position: relative;
          & > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
              font-size: clamp(8.5px, 0.6458vw, 12px);
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 35.2px */
            }
            span::after {
              content: '';
              width: 0;
              height: 2px;
              position: absolute;
              left: 50%;
              bottom: 10px;
              transform: translateX(-50%);
              background: var(--textColor);
              transition: all 0.3s;
              border-radius: 2px;
            }
            svg {
              width: 8px;
              height: 5px;
            }
          }
          .menuChild {
            display: none;
          }
        }
        .menuItem::after{
          content: '';
          width: 120%;
          display: inline-block;
          z-index: 3;
          height: 50px;
          background: transparent;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .menuItem:hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: flex;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: 240%;
            box-sizing: border-box;
            padding: 0px clamp(15px, 1.04165vw, 20px) 5px;
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
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
            }
            .menuChild-item:not(:last-child) {
              border-bottom: 1px solid var(--indexColor2);
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
          }
          .menuChild::before {
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
        .menuItem:nth-child(3):hover {
          & > a {
            span {
              color: #fc1682;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 2px;
              background: #fc1682;
              bottom: 2px;
              left: 50%;
              transform: translateX(-50%);
            }
            svg {
              path {
                fill: #fc1682;
              }
            }
          }
          .menuChild {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0 34px;
            flex-direction: column;
            background: #fff;
            position: absolute;
            top: 100%;
            z-index: 99;
            width: auto;
            box-sizing: border-box;
            padding: clamp(18.75px, 1.3028vw, 25px)
              clamp(18.75px, 1.3028vw, 25px);
            align-items: center;
            left: 50%;
            transform: translate(-50%, 10px);
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
            border-radius: 6px;
            .menuChild-item {
              width: 100%;
              text-align: center;
              padding: 0;
              font-weight: 500;
              font-size: clamp(14px, 1.092vw, 20px);
              color: #666666;
              transition: all 0.3s;
              white-space: nowrap;
              & > a {
                display: block;
                padding: clamp(12px, 0.252vw, 16px) 0 5px;
              }
            }
            .menuChild-item:hover {
              color: var(--indexColor1);
            }
            .menuChild-item:nth-last-child(-n + 2) {
              border-bottom: none;
            }
            .menuChild-item:not(:nth-child(n + 6)) {
              color: var(--Theme-Color, #fc1682);
              position: relative;
            }
            .menuChild-item:not(:nth-child(n + 6))::before {
              content: '';
              position: absolute;
              top: 5px;
              transform: translateX(-50%);
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: var(--Theme-Color, #fc1682);
            }
            .menuChild-item:not(:nth-child(3n)) {
              position: relative;
            }
            .menuChild-item:not(:nth-child(3n))::after {
              content: '';
              position: absolute;
              width: 1px;
              height: 70%;
              right: clamp(-12.75px, -0.8854vw, -17px);
              top: 50%;
              transform: translateY(-50%);
              border-right: 1px solid var(--indexColor2);
            }
          }
          .menuChild::before {
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
          .menuChild::after {
            content: '';
            animation: menuIconAnim 1.5s 0.5s forwards;
            background: url(https://static.cmereye.com/imgs/2024/04/4f39b444ca1b0a1d.png)
              no-repeat;
            background-position-y: 69.2307692308px;
            background-size: 100% auto;
            bottom: 0;
            content: '';
            display: block;
            height: 69.2307692308px;
            overflow: hidden;
            position: absolute;
            right: 30px;
            width: 100px;
          }
        }
        .menuItem:nth-child(4) {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(4):hover {
          & > a {
            span {
              color: #00a752;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #00a752;
              bottom: 2px;
            }
            svg {
              path {
                fill: #00a752;
              }
            }
          }
        }
        .menuItem:nth-child(5) {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              bottom: 0px;
            }
          }
        }
        .menuItem:nth-child(5):hover {
          & > a {
            span {
              color: #e60013;
              position: relative;
            }
            span::after {
              position: absolute;
              content: '';
              background: #e60013;
              bottom: 0px;
            }
            svg {
              path {
                fill: #e60013;
              }
            }
          }
        }
        .menuItem:nth-child(8):hover {
          .menuChild {
            width: 280%;
          }
        }
        .menuItem:last-child {
          box-sizing: border-box;
          padding-top: 5px;
        }
        .menuItem:last-child:hover {
          .menuChild {
            width: 350%;
            padding: clamp(7.5px, 0.020825vw, 10px) clamp(15px, 1.04165vw, 20px)
              5px;
          }
        }
      }
      .pc_menu_tel {
        color: var(--White, #fff);
        font-size: clamp(16.5px, 1.1458vw, 22px);
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 35.2px */
        box-sizing: border-box;
        padding: clamp(11.25px, 0.78125vw, 15px) clamp(45px, 3.125vw, 60px)
          clamp(11.25px, 0.78125vw, 15px) clamp(11.25px, 0.78125vw, 15px);
        background: var(--Theme-Color, #fc1682);
      }
    }
  }
}
</style>