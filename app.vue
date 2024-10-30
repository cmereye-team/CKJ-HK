<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
import router from './plugins/router'
// import { zh_init } from '~/assets/js/uselang'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput

useHead({
  title: app.name,
  titleTemplate: '%s | 深圳愛康健口腔醫院 | 香港官方網站',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健集團是大灣區牙科連鎖機構，其口腔醫院為香港政府指定長者醫療券大灣區試點。（香港熱線: 6933 8128）14間門診有超過20種牙科治療項目，專注為港服務超過29年，可線上預約。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳愛康健口腔醫院 愛康健齒科集團 基楚牙科 美容牙科 深圳牙科 醫療券 長者醫療券大灣區試點 深圳睇牙 深圳整牙 種植牙 假牙 洗牙 補牙 拔牙 智慧齒 杜牙根 根管治療 兒童牙科 牙齒美白 牙齒檢查 矯齒 箍牙 牙醫 牙医 深圳 羅湖 朱咪咪 掛號收費 牙科價目表 線上預約 愛康健齒科,深圳爱康健口腔医院,深圳市口腔医院,深圳牙齿矫正多少钱,愛康健口腔醫院,希玛爱康健,深圳口腔医院,深圳牙科医院,深圳种植牙,深圳植牙價錢,愛康健,香港長者醫療券,愛康健牙科,愛康健牙科中心,愛康健牙科診所',
    },
    {
      name: 'author',
      content: '愛康健口腔醫院',
    },
    { property: 'og:image', content: 'https://www.ckjhk.com/favicon.ico' },
  ],
  link: [
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://www.ckjhk.com/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/x-icon',
      href: 'https://www.ckjhk.com/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100..900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap',
    },
  ],
  script: [{ type: 'text/javascript', src: '/common.js' }],
})
let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const route = useRoute()

onMounted(() => {
  locale.value = 'hk'
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)

  // setTimeout(() => {
  //   if (route.path !== '/health-care-voucher') {
  //     popupAlertCreated()
  //   }
  // }, 2000)
})

// watch(() => route, () => {
//   if (route.path !== '/health-care-voucher') {
//     popupAlertCreated()
//   }
// })

const isYahoo = () => {
  return checkForYahoo(route.name) ? true : false
}

const checkForYahoo = (inputString) => {
  return inputString.includes('yahoo')
}
</script>

<template>
  <Html lang="zh-hk">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <div v-if="route.path !== '/health-care-voucher'" id="popup-alert-two"></div>
      <NuxtLayout>
        <YahooPageMenuBar v-if="isYahoo()" />
        <PageMenuBar v-else />
        <NuxtPage />
      </NuxtLayout>
      <noscript
        ><img
          height="1"
          width="1"
          style="display: none"
          src="https://www.facebook.com/tr?id=2035768320098958&ev=PageView&noscript=1"
      /></noscript>
    </Body>
  </Html>
</template>

<style lang="scss">
#popup-alert-two {
  & > div {
    position: fixed;
    top: auto;
    left: auto;
    right: 0;
    bottom: 100px;
    width: 192px;
    height: 135px;
    z-index: 999;
  }

  .healthCareVoucherPop {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: auto;
    left: auto;
    right: 20px;
    bottom: 180px;
    z-index: 999;
  }

  .close {
    color: #000;
    opacity: 0.7;
    font-size: 3rem;
    position: absolute;
    cursor: pointer;
    top: -60px;
    left: auto;
    right: 20px;
    bottom: auto;
    z-index: 960;
  }

  .healthCareVoucherPop > a {
    width: 100%;
    right: 20px;
    position: absolute;
    bottom: 0;
  }
  .marquee {
    position: absolute;
    right: auto;
    left: 75px;
    bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #00a752;
    height: 80px;
    transform: translateY(-15px);
    width: 100px;
    background: #fff;
    border-radius: 0 30px 60px 0;
    p {
      border-bottom: 1px solid #00a752;
    }
  }
  .marquee-img {
    position: absolute;
    bottom: 10px;
    right: auto;
    width: 60%;
    left: 100px;
  }
}
// .is_new_tooth_wiki {
//   display: flex;
//   flex-direction: column-reverse;
//   position: fixed;
//   right: 150px;
//   bottom: 300px;
//   & > div:nth-child(1) {
//     width: 240px;
//   }
//   & > div:nth-child(2) {
//     position: absolute;
//     right: 20px;
//     top: -15px;
//     & > svg {
//       width: 30px;
//       height: 30px;
//     }
//   }
// }
// @media screen and (min-width: 1920px) {
//   .is_new_tooth_wiki {
//     right: 150px !important;
//     bottom: 360px !important;
//   }
// }
// @media screen and (min-width: 1440px) and (max-width: 1919px) {
//   .is_new_tooth_wiki {
//     right: 130px !important;
//     bottom: 300px !important;
//   }
// }
// @media screen and (min-width: 1024px) and (max-width: 1439px) {
//   .is_new_tooth_wiki {
//     right: 130px !important;
//     bottom: 220px !important;
//     & > div:nth-child(1) {
//       width: 120px !important;
//     }
//     & > div:nth-child(2) {
//       top: -30px !important;
//       & > svg {
//         width: 30px !important;
//         width: 30px !important;
//       }
//     }
//   }
// }
@media screen and (min-width: 768px) and (max-width: 1919px) {
  #popup-alert-two {
    & > div {
      position: fixed;
      top: auto;
      left: auto;
      right: 1.04165vw;
      bottom: 16.86vw;
      width: 10vw;
      height: 7.03125vw;
      z-index: 999;
    }

    .healthCareVoucherPop {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      top: auto;
      left: auto;
      right: 0;
      bottom: 0;
      z-index: 999;
    }

    .close {
      color: #000;
      opacity: 0.7;
      font-size: 3rem;
      position: absolute;
      cursor: pointer;
      top: -4.825vw;
      left: auto;
      right: 0;
      bottom: auto;
      z-index: 960;
    }

    .healthCareVoucherPop > a {
      width: 100%;
      right: 0;
      position: relative;
      bottom: 0;
      & > img:nth-child(1) {
        width: 100%;
      }
    }
    .marquee {
      position: relative;
      right: auto;
      left: 55px;
      bottom: 100px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 140%;
      color: #00a752;
      height: 60px;
      transform: translateY(15px);
      max-width: 70px;
      background: #fff;
      border-radius: 0 30px 60px 0;
      p {
        border-bottom: 1px solid #00a752;
      }
    }
    .marquee-img {
      position: absolute;
      bottom: 80px;
      right: auto;
      width: 60%;
      left: 80px;
    }
  }
}
@media screen and (max-width: 767px) {
  #popup-alert-two {
    & > div {
      position: fixed;
      top: auto;
      left: auto;
      right: 0;
      bottom: 36.43vw;
      width: 23.2vw;
      height: 16.265vw;
      z-index: 999;
    }
  }
  #popup-alert-two .close {
    color: #000;
    opacity: 0.7;
    font-size: 1.4rem;
    position: absolute;
    top: -5.865vw;
    left: 17.33vw;
    right: auto;
    bottom: auto;
  }
  #popup-alert-two .healthCareVoucherPop {
    width: 100%;
    height: 100%;
    position: relative;
    bottom: 0;
    right: 0;
  }
  #popup-alert-two .healthCareVoucherPop > a {
    padding-left: 0;
    width: 100%;
    right: 0;
    position: absolute;
    bottom: 0;
  }
  .is_new_tooth_wiki {
    right: 0;
    justify-content: center;
    align-items: center;
    & > div:nth-child(2) {
      top: 0 !important;
      right: 20% !important;
      & > svg {
        width: 5.33vw;
        height: 5.33vw;
      }
    }
  }
}
</style>
