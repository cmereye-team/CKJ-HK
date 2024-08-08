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
// const closeAlert = ref(true)
function popupAlertCreated() {
  var container = document.getElementById('popup-alert')
  // var  创建一个id healthCareVoucherPopTop
  var healthCareVoucherPopTop = document.createElement('div')

  const domWidth = window.innerWidth
  if (windowWidth.value < 768) {
    // 插入节点
    healthCareVoucherPopTop.innerHTML = `
          <div class="healthCareVoucherPop">
            <div class="close">×</div>
            <nuxt-link to="/health-care-voucher">
              <img src="https://static.cmereye.com/imgs/2024/08/665992e97473e732.png"  alt="">
            </nuxt-link>
        </div>
        `
  } else {
    healthCareVoucherPopTop.innerHTML = `
          <div class="healthCareVoucherPop">
            <div class="close">×</div>
            <nuxt-link to="/health-care-voucher">
              <img src="https://static.cmereye.com/imgs/2024/08/e05bf86f046c6430.png"  alt="">
            </nuxt-link>
        </div>
        `
  }
  if (container) {
    container.appendChild(healthCareVoucherPopTop)
  }
  // 绑定事件healthCareVoucherPop
  healthCareVoucherPopTop.addEventListener('click', function (e) {
    if (container) {
      container.style.display = 'none'
    }
  })
}

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
</script>

<template>
  <Html lang="zh-hk">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <div v-if="route.path !== '/health-care-voucher'" id="popup-alert"></div>
      <NuxtLayout>
        <PageMenuBar />
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
#popup-alert {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .healthCareVoucherPop {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  // #closedAAAA {
  //   position: relative;
  //   z-index: 1000000;
  //   display: block;
  //   /* background: pink; */
  //   color: #000;
  //   opacity: 0.7;
  //   font-size: 4rem;
  //   left: 50%;
  //   transform: translate(-50%, 800%);
  //   top: 0;
  //   position: absolute;
  //   cursor: pointer;
  //   background: transparent;
  //   width: 3rem;
  //   height: 3rem;
  //   opacity: 0;
  // }

  .close {
    color: #000;
    opacity: 0.7;
    font-size: 4rem;
    left: 50%;
    transform: translate(-50%, -350%);
    top: 50%;
    position: absolute;
    cursor: pointer;
  }
}

// #closedAAAA:checked ~ #healthCareVoucherPop {
//   display: none;
// }

// #closedAAAA:checked {
//   display: none;
// }
@media screen and (max-width: 767px) {
  #popup-alert .close {
    color: #000;
    opacity: 0.7;
    font-size: 4rem;
    left: 50%;
    transform: translate(-50%, 20%);
    top: 0;
    position: absolute;
    cursor: pointer;
  }
  // #closedAAAA {
  //   position: relative;
  //   z-index: 1000000;
  //   display: block;
  //   /* background: pink; */
  //   color: #000;
  //   opacity: 0.7;
  //   font-size: 4rem;
  //   left: 50%;
  //   transform: translate(-50%, 70%);
  //   top: 0;
  //   position: absolute;
  //   cursor: pointer;
  //   background: transparent;
  //   width: 3rem;
  //   height: 3rem;
  //   opacity: 0;
  // }
  .healthCareVoucherPop > nuxt-link {
    padding-left: 30px;
  }
}
</style>
