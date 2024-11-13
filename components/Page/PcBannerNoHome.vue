<script lang="ts" setup>
const route = useRoute()

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

const showTextPageAll = ref([
  'dental-service-implant',
  'dental-service-scaling-and-polishing',
  'dental-service-fillings',
  'dental-service-veneers',
  'dental-service-toothtray',
  'dental-service-rootCanal',
  'dental-service-all-ceramic-crowns',
  'dental-service-children-dentistry',
  'dental-service-wisdom-teeth-extraction',
  'dental-service-teeth-whitening',
  'dental-service-general-oral-examination',
  'health-care-voucher',
  'federation-of-trade-unions-zone',
])
const showTextOnlyOnLine = ref([
  'dental-service-fillings',
  'dental-service-veneers',
  'dental-service-orthodontics',
  'dental-service-invisiblebraces',
  'dental-service-periodontal',
])

const hideText = ref(['health-care-voucher', 'federation-of-trade-unions-zone'])

// 获取 route.name 和数组 showTextPageAll 对比 有就顯示
const isShowTextAll = computed(() => {
  if (showTextPageAll.value.includes(route.name as string)) {
    return true
  } else {
    return false
  }
})

const isShowText = computed(() => {
  if (showTextOnlyOnLine.value.includes(route.name as string)) {
    return false
  } else {
    return true
  }
})

const hideShowText = computed(() => {
  // hideText 数组包含就返回 false 不顯示
  if (hideText.value.includes(route.name as string)) {
    return false
  } else {
    return true
  }
})
</script>

<template>
  <div class="PcBannerNoHome">
    <div class="pcBox-wrapper" :class="headerConfig.pageName">
      <div>
        <img
          :class="['pcBox', headerConfig.pageName]"
          :src="headerConfig.img"
          alt="banner"
        />
      </div>
      <img
        :class="['mbBox', 'header-content-bgImg-mbImg', headerConfig.pageName]"
        :src="headerConfig.mbImg"
        alt="banner"
      />
    </div>
    <div class="btn-wrapper">
      <PageAnimBtnTypeTwo :str="btnText || '免費網上預約'" />
    </div>
    <div class="text-wrapper" v-if="isShowTextAll">
      <div>
        <div>
          <div>29年專科•專業•專注</div>
          <div><span>港人首選</span>一站式連鎖牙科品牌</div>
        </div>
        <div v-if="isShowText && hideShowText">
          優惠只限於網上及電話預約客戶
        </div>
      </div>
    </div>
    <div class="waterBg"></div>
  </div>
</template>

<style lang="scss" scoped>
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
@media screen and (min-width: 1441px) {
  .PcBannerNoHome {
    position: relative;
    .waterBg {
      position: absolute;
      bottom: 0;
    }
    .waterBg::after {
      content: '';
      width: 100vw;
      background-image: url(https://static.cmereye.com/imgs/2024/11/ea200938bd03fcb4.png);
      background-repeat: repeat-x;
      background-position: center 20px;
      height: 120px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave1;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave1;
      -webkit-animation-duration: 20s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
      left: 0;
    }
    .waterBg::before {
      content: '';
      background-image: url(https://static.cmereye.com/imgs/2024/11/a3b442741fc16add.png);
      background-repeat: repeat-x;
      background-position: center bottom;
      width: 100vw;
      height: 110px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave2;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave2;
      -webkit-animation-duration: 10s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
    }
    .pcBox-wrapper {
      position: relative;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 1;
      }
    }
    .btn-wrapper {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
    }
    .text-wrapper {
      width: 100%;
      position: absolute;
      z-index: 105;
      display: flex;
      justify-content: flex-end;
      & > div:nth-child(1) {
        max-width: 1450px;
        width: 100%;
        margin: 0 auto;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: clamp(14px, 2.6vw, 28px);
          font-weight: 700;
          span {
            color: var(--indexColor1);
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
  }
}
@media screen and (min-width: 1041px) and (max-width: 1440px) {
  .PcBannerNoHome {
    position: relative;
    .waterBg {
      position: absolute;
      bottom: 0;
    }
    .waterBg::after {
      content: '';
      width: 100vw;
      background-image: url(https://static.cmereye.com/imgs/2024/11/ea200938bd03fcb4.png);
      background-repeat: repeat-x;
      background-position: center 20px;
      height: 120px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave1;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave1;
      -webkit-animation-duration: 20s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
      left: 0;
    }
    .waterBg::before {
      content: '';
      background-image: url(https://static.cmereye.com/imgs/2024/11/a3b442741fc16add.png);
      background-repeat: repeat-x;
      background-position: center bottom;
      width: 100vw;
      height: 110px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave2;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave2;
      -webkit-animation-duration: 10s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
    }
    .pcBox-wrapper {
      position: relative;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 1;
      }
    }
    .btn-wrapper {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
    }
    .text-wrapper {
      width: 100%;
      position: absolute;
      z-index: 105;
      display: flex;
      justify-content: flex-end;
      & > div:nth-child(1) {
        max-width: 1450px;
        width: 80%;
        margin: 0 auto;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: clamp(10px, 2.6vw, 20px);
          font-weight: 700;
          span {
            color: var(--indexColor1);
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1040px) {
  .PcBannerNoHome {
    position: relative;
    .waterBg {
      position: absolute;
      bottom: 0;
    }
    .waterBg::after {
      content: '';
      width: 100vw;
      background-image: url(https://static.cmereye.com/imgs/2024/11/ea200938bd03fcb4.png);
      background-repeat: repeat-x;
      background-position: center 20px;
      height: 120px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave1;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave1;
      -webkit-animation-duration: 20s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
      left: 0;
    }
    .waterBg::before {
      content: '';
      background-image: url(https://static.cmereye.com/imgs/2024/11/a3b442741fc16add.png);
      background-repeat: repeat-x;
      background-position: center bottom;
      width: 100vw;
      height: 110px;
      // width: 100%;
      position: absolute;
      z-index: 35;
      left: 0px;
      bottom: -50px;
      animation-name: wave2;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      -webkit-animation-name: wave2;
      -webkit-animation-duration: 10s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
    }
    .pcBox-wrapper {
      position: relative;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: 1;
      }
    }
    .btn-wrapper {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
    }
    .text-wrapper {
      width: 100%;
      position: absolute;
      z-index: 105;
      display: flex;
      justify-content: flex-end;
      & > div:nth-child(1) {
        max-width: 1450px;
        width: 80%;
        margin: 0 auto;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: clamp(14px, 2.6vw, 28px);
          font-weight: 700;
          span {
            color: var(--indexColor1);
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #666;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
  }
}
</style>