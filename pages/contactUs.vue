<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper'
const appState = useAppState()
useHead({
  title: '聯絡我們 | 牙科服務',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健為香港希瑪眼科醫療控股有限公司（股份代號：3309）旗下的內地牙科品牌，各門診位於內地深圳市，包括: 雅健口腔門診部、恒樂口腔門診、深圳愛康健口腔醫院、富康口腔門診部、李川口腔診所、王琦口腔診所等牙科診所及醫院。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院 愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院 牙科服務 內地牙科 深圳口腔專科希瑪眼科醫療控股有限公司雅健口腔門診部 恒樂口腔門診 富康口腔門診部 李川口腔診所 王琦口腔診所 恒潔口腔門診部 康輝口腔門診部 顏麗口腔診所 恒雅口腔門診部 恒美口腔門診部 沈虹口腔診所 炫雅口腔門診部',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/06/e95ec940e8903f32.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/2f6494de27de8323.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: [],
}

const handleAreaTab = (_idx: number) => {
  appState.setCurNum(_idx)
}

let environmentCur = ref(0)
const environmentLists = [
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4004.jpg',
  ],
  [
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5001.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5002.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5003.jpg',
    'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5004.jpg',
  ],
]
const environmentLists02 = [
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Luohu/1004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Futian/2004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Nanshan/3004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4002.JPG',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Baoan/4004.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5001.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5002.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5003.jpg',
  'https://static.cmereye.com/static/ckj/imgs/environment/Longhua/5004.jpg',
]
const handleImg = (_idx: number) => {
  console.log(_idx)
  environmentCur.value = _idx
}
let thumbsSwiper = ref({
  slideToLoop: (a) => {},
})

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const changeThumbsSwiper = (swiper: any) => {
  environmentSwiperRef.value.slideToLoop(swiper.realIndex)
}

let environmentSwiperRef = ref({
  slideToLoop: (a) => {},
})
const setEnvironmentSwiperRef = (swiper: any) => {
  environmentSwiperRef.value = swiper
}

const changeEnvironment = (swiper: any) => {
  thumbsSwiper.value.slideToLoop(swiper.realIndex)
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
const problemData = {
  title: 'pages.index.common_problem.title',
  lists: [
    {
      Q: '深圳哪裡有分店？',
      A: '我們在羅湖、福田、南山及龍華均有分店。',
    },
    {
      Q: '請問有什麼支付方式？',
      A: '我們接受人民幣、VISA、Master、銀聯、微信、內地支付寶及香港支付寶。',
    },
    // {
    //   Q: '請問可以使用醫療券嗎？',
    //   A: '預計2024年第三季度（約9月份）將陸續展開相關安排，讓合資格的香港長者可使用醫療券支付費用。',
    // },
    {
      Q: '一般洗牙需要多長時間？',
      A: '一次基本的洗牙程序通常需要30至60分鐘完成。具體時間會根據您的口腔情況和需要的清潔程度而有所不同。我們建議您預留1小時的時間。',
    },
    {
      Q: '植牙需要多少時間才能完成？',
      A: '植牙是一個多步驟的過程，通常需要2至3次就診才能完成。從植入牙根到完成冠修復，整個過程約需3至6個月。我們會為您詳細解釋每個步驟，檢查後再設計方案。',
    },
    {
      Q: '牙周治療大約需要多長時間？',
      A: '這要視乎牙周的程度。一般來說，牙周基本治療大約需要2至3次就診，每次就診時間約1至2小時。具體時間需由牙醫根據您的情況評估。',
    },
    {
      Q: '我可以同時進行牙齒美白和洗牙嗎？',
      A: '我們建議您先來諮詢牙醫，根據您的具體情況制定最佳的治療方案。',
    },
    {
      Q: '箍牙可以分期付款嗎？',
      A: '箍牙一般可以分期付款。面診時可以詳細了解我們的分期付款政策和細節，選擇最適合自己的方案。',
    },
    {
      Q: '為什麼你們的價錢比其他診所貴？',
      A: '我們建議您考慮牙科服務的整體價值。雖然價格是一個重要的考慮因素，但請記住，牙科治療的品質和效果對您的口腔健康和生活品質有著長遠的影響。',
    },
    {
      Q: '預約需要提前多少天？',
      A: '平日最好提前3天預約，週末建議提前1至2星期預約。',
    },
    {
      Q: '不預約可以直接到診所嗎？',
      A: '我們診所需要提前預約，這樣能提高就診效率，避免客人等待時間過長。',
    },
    {
      Q: '請問診所有提供Wi-Fi嗎？',
      A: '有的，我們提供Wi-Fi服務。',
    },
  ],
}
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="contactUs">
      <!-- <NewAddress /> -->
      <NewAddress />
      <div class="complain">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            長者醫療券使用者及<br class="mbShow" />一般客人申訴途徑
          </div>
        </div>
        <div>
          我們致力於提供優質的服務，並重視每位客人的意見。如果您本人或親屬在使用長者醫療券或醫療服務時遇到問題，歡迎通過以下途徑向我們反映：
        </div>
        <div>
          <a href="tel:+86 075561311688"
            ><span>申訴熱線電話：</span><span>(+86) 0755-61311688</span></a
          >
          <a href="mailto:Info@ckjhk.com"
            ><span>電子郵箱：</span><span>Info@ckjhk.com</span></a
          >
          <a
            ><span>書面申訴：</span
            ><span>深圳愛康健口腔醫院一樓大堂意見箱</span></a
          >
        </div>
      </div>
      <div class="img_complain">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            醫療糾紛處理流程
          </div>
        </div>
        <div class="step_complain">
          <div>患者或家屬提出異議</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
          </div>
          <div>接待處負責接待 (前台組長) / 客服</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
          </div>
          <div>科室主任 / 經營主任</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
          </div>
          <div>科室、院領導討論溝通、解決方案</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>同意</div>
            <div>不同意</div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div><span>醫、患雙方協商</span> <span>簽訂協議書</span></div>
            <div><span>告知患方醫療糾紛的</span><span>解決途徑</span></div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/f612ecacf24572d7.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/083b8132c94f1001.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/f612ecacf24572d7.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>結案</div>
            <div>人民調解</div>
            <div>法院訴訟</div>
          </div>
          <div>
            <div>衛生行政調解</div>
            <div>法律法規</div>
          </div>
        </div>
        <div class="img_complain_last">
          <div>
            <div>申訴熱線電話</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <g clip-path="url(#clip0_8517_39464)">
                  <path
                    d="M43.3101 56.0004C41.2819 55.9588 39.2361 55.5031 37.243 54.8283C32.9363 53.3671 29.0423 51.115 25.3612 48.4883C19.2568 44.1331 13.9097 38.9804 9.30008 33.0764C5.89557 28.7168 2.98274 24.0592 1.1872 18.7883C0.40576 16.5033 -0.114466 14.1592 0.0216273 11.7165C0.137965 9.59588 0.844769 7.75784 2.42301 6.25937C3.98368 4.77623 5.50705 3.25146 6.99968 1.70041C9.32203 -0.711608 12.9043 -0.415857 15.0511 1.69603C17.5491 4.15405 20.0251 6.63398 22.4945 9.12049C24.7488 11.3879 24.7949 14.7595 22.5691 16.8122C22.0884 17.2569 21.465 17.5965 20.8504 17.8419C18.9363 18.6043 17.6303 19.8683 17.2022 21.9298C16.9476 23.1501 17.3318 24.2805 17.7554 25.3868C18.8924 28.3575 20.8153 30.8024 23.0542 33.0063C25.2537 35.1707 27.6902 37.011 30.5942 38.1611C32.9122 39.0812 35.0546 38.8468 36.8545 37.0526C37.3879 36.5202 37.8071 35.7907 38.0618 35.0743C39.269 31.6962 43.7184 30.5395 46.4578 33.0807C48.3302 34.818 50.0994 36.6648 51.9081 38.4678C52.852 39.4076 53.8134 40.3343 54.709 41.3158C56.6055 43.3948 56.3399 46.7467 54.3753 48.7731C52.6983 50.5016 50.9708 52.1841 49.2653 53.8819C47.6409 55.4987 45.6017 55.9697 43.3101 56.0004Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8517_39464">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <a href="tel: +860755-61311688" target="_blank">(+86)0755-61311688</a>
        </div>
      </div>
      <div class="serviceCard">
        <serviceCard :isIndexShow="true" />
      </div>
      <ServiceProblem :problem-data="problemData" />
      <ContactForm-new />
      <div class="environment">
        <div class="environment-title">
          <div class="index_title">
            {{ $t('contactUs.clinic_environment') }}
          </div>
        </div>
        <div class="environment-in pageCon">
          <swiper
            class="environmentSwiperBox"
            :loop="true"
            :autoplay="{
              delay: 3000,
            }"
            :modules="[Autoplay]"
            @swiper="setEnvironmentSwiperRef"
            @slideChange="changeEnvironment"
          >
            <swiper-slide
              class="environmentSwiperBox-slide"
              v-for="(imgItem, imgIndex) in environmentLists02"
              :key="imgIndex"
            >
              <img loading="lazy" :src="imgItem" />
            </swiper-slide>
          </swiper>
          <swiper
            :spaceBetween="30"
            :slidesPerView="windowWidth > 768 ? 4 : 'auto'"
            :loop="true"
            :navigation="true"
            :modules="[Navigation]"
            class="mySwiper"
            @swiper="setThumbsSwiper"
            @slideChange="changeThumbsSwiper"
          >
            <swiper-slide
              class="mySwiper-slide"
              v-for="(imgItem, imgIndex) in environmentLists02"
              :key="imgIndex"
            >
              <img loading="lazy" :src="imgItem" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>

<style lang="scss" scoped>
.contactUs {
  background: #fff;
  padding-bottom: 143px;
  position: relative;
  z-index: 1;
}
.environment {
  margin-top: 154px;
  &-title {
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  &-in {
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .environmentSwiperBox {
      width: 100%;
      margin: 0 auto;
      &-slide {
        img {
          margin: 0 auto;
        }
      }
    }
    .mySwiper {
      width: 100%;
      max-width: 1452px;
      margin: 100px auto 0;
      padding-left: 81px;
      padding-right: 50px;
      &-slide {
        padding-right: 31px;
      }
      :deep(.swiper-button-prev:after) {
        content: '';
        border-left: 30px solid;
        border-right: 30px solid;
        border-top: 20px solid;
        border-bottom: 20px solid;
        border-color: transparent #ffcecb transparent transparent;
      }
      :deep(.swiper-button-next:after) {
        content: '';
        border-left: 30px solid;
        border-right: 30px solid;
        border-top: 20px solid;
        border-bottom: 20px solid;
        border-color: transparent transparent transparent var(--indexColor);
      }
    }
  }
}
.mbShow {
  display: none;
}
.complain {
  max-width: 1280px;
  margin: 150px auto 50px;
  & > div:nth-child(1) {
    font-size: 36px;
    text-align: center;
  }
  color: var(--Grey-Deep, #4d4d4d);
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  letter-spacing: 4px;
  & > div:nth-child(2) {
    margin: 50px 0 30px;
    padding: 0 130px;
    text-align: center;
  }
  & > div:nth-child(3) {
    padding: 0 130px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    & > a {
      display: flex;
      & > span:nth-child(1) {
        // width: 168px;
      }
      & > span:nth-child(2) {
        color: var(--indexColor1);
      }
    }
  }
}
.img_complain_last {
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div:nth-child(1) {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 65px */
    & > div:nth-child(1) {
      margin-right: 15px;
    }
    display: flex;
    align-items: center;
  }
  & > a {
    margin-left: 15px;
    border-radius: 5px;
    background: #fc1682;
    color: #fff;
    font-family: 'Noto Sans JP';
    font-size: 52px;
    font-style: normal;
    font-weight: 900;
    line-height: 120%; /* 0px */
    padding: 0 3px 3px 3px;
  }
}
.step_complain {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 58px;
  max-width: 870px;
  & > div:nth-child(8),
  & > div:nth-child(9),
  & > div:nth-child(10),
  & > div:nth-child(11),
  & > div:nth-child(12),
  & > div:nth-child(13) {
    display: flex;
    justify-content: center;
  }
  & > div:nth-child(1),
  & > div:nth-child(3),
  & > div:nth-child(5),
  & > div:nth-child(7) {
    width: fit-content;
    color: var(--Grey-Deep, #4d4d4d);
    font-family: FakePearl;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 48px */
    letter-spacing: 3px;
    border-radius: 20px;
    background: var(--Pink-Pale, #fee6f1);
    box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
    box-sizing: border-box;
    padding: 12px 60px;
  }
  & > div:nth-child(5),
  & > div:nth-child(7) {
    width: 870px;
    display: flex;
    justify-content: center;
  }
  & > div:nth-child(8) {
    gap: 0 400px;
    padding-right: 160px;
    & > div:nth-child(2) {
      padding-left: 10px;
    }
    & > div:nth-child(2) {
      padding-right: 10px;
    }
  }
  & > div:nth-child(9) {
    gap: 0 225px;
    padding-right: 160px;
    & > div {
      padding: 12px 60px;
      box-sizing: border-box;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
      border-radius: 20px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
    }
  }
  & > div:nth-child(10) {
    gap: 0 400px;
    padding-right: 160px;
    & > div:nth-child(2) {
      padding-left: 10px;
    }
    & > div:nth-child(2) {
      padding-right: 10px;
    }
  }
  & > div:nth-child(11) {
    gap: 0 20px;
    width: 870px;
    & > div {
      border-radius: 20px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
      display: flex;
      flex-direction: column;
      padding: 12px 50px;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
    }
    & > div:nth-child(2) {
      padding: 12px 110px;
    }
  }
  & > div:nth-child(12) {
    & > div:nth-child(1) {
      padding-left: 160px;
      padding-right: calc(270px - 24px);
    }
    & > div:nth-child(2) {
      padding-right: calc(112px - 24px);
    }
    & > div:nth-child(3) {
      padding-right: calc(105px - 24px);
    }
    & > div:nth-child(4) {
      padding-right: calc(130px - 24px);
    }
    padding-right: 45px;
  }
  & > div:nth-child(13),
  & > div:nth-child(14) {
    // width: 870px;
    & > div {
      border-radius: 20px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
    }
  }
  & > div:nth-child(13) {
    justify-content: flex-start;
    position: relative;
    top: -115px;
    width: 100%;
    & > div:nth-child(1) {
      margin-left: 80px;
      margin-right: 85px;
      box-sizing: border-box;
      padding: 12px 60px;
    }
    & > div:nth-child(2) {
      margin-right: 30px;
    }
    & > div {
      border-radius: 20px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
      box-sizing: border-box;
      padding: 12px 30px;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
    }
  }
  & > div:nth-child(14) {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    gap: 0 20px;
    position: relative;
    top: -70px;
    & > div {
      border-radius: 20px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
      box-sizing: border-box;
      padding: 12px 30px;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
    }
  }
}
@media screen and (max-width: 768px) {
  .mbShow {
    display: block;
  }
  .img_complain {
    overflow: hidden;
    width: 100%;
  }
  .step_complain {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2.665vw;
    margin-top: 7.465vw;
    max-width: 100%;
    & > div:nth-child(8),
    & > div:nth-child(9),
    & > div:nth-child(10),
    & > div:nth-child(11),
    & > div:nth-child(12),
    & > div:nth-child(13) {
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(2),
    & > div:nth-child(4),
    & > div:nth-child(6) {
      & > div {
        img {
          width: 2.665vw;
          height: 6.4vw;
        }
      }
    }
    & > div:nth-child(1),
    & > div:nth-child(3),
    & > div:nth-child(5),
    & > div:nth-child(7) {
      width: fit-content;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 4vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 24px */
      letter-spacing: 0.4vw;
      border-radius: 8.081px;
      background: var(--Pink-Pale, #fee6f1);
      box-shadow: 2.258px 2.258px 0px 0px rgba(252, 22, 130, 0.3);
      box-sizing: border-box;
      padding: 1.33vw 6.4vw;
    }
    & > div:nth-child(5),
    & > div:nth-child(7) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(8) {
      gap: 0 45.533vw;
      padding: 0 0;
      & > div {
        img {
          width: 2.665vw;
          height: 6.4vw;
        }
      }
      & > div:nth-child(1) {
        padding-left: 0;
      }
      & > div:nth-child(2) {
        padding-right: 2.66vw;
      }
    }
    & > div:nth-child(9) {
      gap: 0 26.66vw;
      padding-right: 0;
      & > div {
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 4vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 24px */
        letter-spacing: 0.4vw;
        padding: 1.33vw 6.4vw;
        box-sizing: border-box;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
        border-radius: 8.081px;
      }
    }
    & > div:nth-child(10) {
      gap: 0 48vw;
      padding-right: 0;
      & > div {
        img {
          width: 2.665vw;
          height: 6.4vw;
        }
      }
      & > div:nth-child(2) {
        padding-left: 0;
      }
      & > div:nth-child(2) {
        padding-right: 0;
      }
    }
    & > div:nth-child(11) {
      gap: 0 2.665vw;
      width: 100%;
      & > div {
        border-radius: 8px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
        display: flex;
        flex-direction: column;
        padding: 1.33vw 2.2665vw;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: FakePearl;
        font-size: 3.733vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 24px */
        letter-spacing: 0.4vw;
      }
      & > div:nth-child(2) {
        padding: 1.33vw 8.2665vw;
      }
    }
    & > div:nth-child(12) {
      width: 100%;
      margin-left: 28vw;
      & > div:nth-child(1) {
        padding-left: 0;
        padding-right: 0;
        margin-right: 27.4vw;
      }
      & > div:nth-child(2) {
        padding-right: 0;
        margin-right: 12vw;
      }
      & > div:nth-child(3) {
        padding-right: 0;
        margin-right: 12vw;
      }
      & > div:nth-child(4) {
        padding-right: 0;
        margin-right: 12vw;
      }

      & > div:nth-child(1),
      & > div:nth-child(2),
      & > div:nth-child(4) {
        img {
          width: 2.665vw;
          height: 6.4vw;
        }
      }
      & > div:nth-child(3),
      & > div:nth-child(5) {
        img {
          width: 2.665vw;
          height: 20vw;
        }
      }
      padding-right: 0;
      justify-content: flex-start;
    }
    & > div:nth-child(13),
    & > div:nth-child(14) {
      // width: 870px;
      & > div {
        border-radius: 8px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
      }
    }
    & > div:nth-child(13) {
      justify-content: flex-start;
      position: relative;
      top: -13.33vw;
      width: 100%;
      & > div:nth-child(1) {
        margin-left: 4vw;
        margin-right: 10.133vw;
        box-sizing: border-box;
        padding: 1.33vw 6.665vw;
      }
      & > div:nth-child(2) {
        margin-right: 6.665vw;
      }
      & > div {
        border-radius: 8px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
        box-sizing: border-box;
        padding: 1.33vw 2.2265vw;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 3.75vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 0.4vw;
      }
    }
    & > div:nth-child(14) {
      width: 100%;
      justify-content: flex-end;
      display: flex;
      gap: 0 5.33vw;
      position: relative;
      top: -8vw;
      & > div {
        border-radius: 8px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
        box-sizing: border-box;
        padding: 1.33vw 2.133vw;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 3.733vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 24px */
        letter-spacing: 0.4vw;
      }
    }
  }
  .img_complain_last {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 2.665vw;
    & > div:nth-child(1) {
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 5.33vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      & > div:nth-child(1) {
        margin-right: 1.33vw;
      }
      & > div:nth-child(2) {
        & > svg {
          width: 5.33vw;
          height: 5.33vw;
        }
      }
    }
    & > a {
      border-radius: 3.008px;
      color: #fff;
      font-family: 'Noto Sans JP';
      font-size: 8vw;
      font-style: normal;
      font-weight: 900;
      line-height: 100%; /* 0px */
      margin-left: 0;
    }
  }
  .complain {
    box-sizing: border-box;
    padding: 0 6.665vw;
    margin: 13.33vw auto 5.33vw;

    & > div:nth-child(1) {
      font-size: 4.8vw;
      letter-spacing: 0.53vw;
      padding: 0 9.33vw;
    }
    font-size: 4.2665vw;
    line-height: 120%;
    letter-spacing: 0.32vw;
    & > div:nth-child(2) {
      margin: 8vw 0 5.33vw;
      padding: 0;
      font-size: 3.733vw;
      text-align: left;
    }
    & > div:nth-child(3) {
      margin: 5.33vw 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      & > a {
        display: inline;
        flex-direction: column;
        margin-bottom: 1.865vw;
        white-space: nowrap;
        & > span:nth-child(1) {
          width: fit-content;
          font-size: 3.733vw;
          text-align: center;
          letter-spacing: 1px;
        }
        & > span:nth-child(2) {
          margin-top: 2.665vw;
          color: var(--indexColor1);
          letter-spacing: 1px;
        }
      }
    }
  }
  .contactUs {
    padding-bottom: 90px;
  }
  .index-contactUs {
    padding-top: 0;
    :deep(.index-contactUs-t) {
      position: relative;
      z-index: 1 !important;
    }
  }
  .serviceCard {
    margin-top: 50px;
  }
  .environment {
    margin-top: 0px;
    &-in {
      margin-top: 28px;
      .environmentSwiperBox {
        &-slide {
          width: auto;
          padding: 15px;
          img {
            max-width: calc(100% - 60px);
            margin: 0 auto;
          }
        }
      }
      .mySwiper {
        margin: 10px auto;
        padding: 0 0 0 25%;
        &-slide {
          width: auto;
          padding: 0;
          img {
            max-width: 200px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>

