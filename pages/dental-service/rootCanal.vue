<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding, useWindowSize } from '@vueuse/core'

import { Pagination } from 'swiper'
const modules = [Pagination]
const appState = useAppState()
appState.setDentistryService('rootCanal-test')
useHead({
  title: '根管治療(杜牙根) | 牙科服務',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健提供根管治療（杜牙根）服務，用於治療嚴重蛀牙或牙根受細菌感染的情況。當蛀牙菌感染深入牙髓並引發神經發炎時，需要進行根管治療手術，以徹底清除感染部分。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '牙齦炎治療 根管治療 杜牙根 杜牙根價錢 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
    },
  ],
})

const headerConfig = {
  img: 'https://statichk.cmermedical.com/ckj/service-page/rootCanal-pc.webp',
  mbImg: 'https://statichk.cmermedical.com/ckj/service-page/rootCanal-mb.webp',
  bg: '',
  pageName: 'rootCanal-test',
  pcText: [
    '根管治療助您解決牙痛，恢復健康的口腔狀態',
    '立即接受專業治療手術，徹底解放美食自由',
  ],
  mbText: ['根管治療助您解決牙痛', '恢復健康的口腔狀態'],
}

const introduceData = {
  title: '什麼是杜牙根(根管治療)?',
  content:
    '杜牙根(根管治療)是治療嚴重蛀牙或牙根受細菌感染的療程，當蛀牙菌的感染深入牙髓，以致牙齒內的神經發炎，便需要以杜牙根療程徹底清除感染的部分。',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/4981f5bda13e2428.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3030e00ebf385a45.jpg',
  tabNavName: 'pages.dental-service.rootCanal.introduce.tabNavName',
  pageName: 'rootCanal-test',
}

const reasonData = {
  title: '蛀牙階段',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/fafa2f37cf68b4fb.jpg',
      title: '蛀牙初期',
      context: '最外層琺瑯質受損',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/91c57e27b6a68095.jpg',
      title: '蛀牙中期',
      context: '受損至象牙質',
    },
    {
      img: 'https://static.cmereye.com/imgs/2024/02/110eb2fe9f155701.jpg',
      title: '蛀牙後期',
      context: '細菌深入牙髓\n內部組織發炎',
    },
  ],
}

const careData = {
  title: ['什麼情況下', '會考慮做根管治療？'],
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/a508f80b579ed63e.png',
      text: '牙髓壞死',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/3d61ee4cd60a9d28.png',
      text: '深齦蛀牙',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/c4471a0fdbd2eef9.png',
      text: '牙髓發炎',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/bfe0997793014633.png',
      text: '根尖發炎',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/78e7d8ea517b188e.png',
      text: '牙外傷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/88e72fd91eb8aca5.png',
      text: '殘冠殘根',
    },
  ],
}

const infoCardData = {
  lists: [
    {
      text: '顯微根管治療，即在顯微鏡下輔助放大局部來進行根管治療的操作。',
      img: 'https://static.cmereye.com/imgs/2024/08/d6bd484a95024be1.png',
    },
    {
      text: '牙科顯微鏡可以在手術中提供放大畫面，這樣擁有良好照明環境， 保證視野穩定的前提下，將根管治療推進到可視化階段。',
      img: 'https://static.cmereye.com/imgs/2024/08/5cb1e585e20a031c.png',
    },
    {
      text: '愛康健引進德國蔡司顯微鏡根管治療儀，結合顯微鏡技術和醫學技術。能清楚觀察牙齒的解剖結構和根管形態。',
      img: 'https://static.cmereye.com/imgs/2024/08/54a2a0c8b7fca6d7.png',
    },
  ],
}

const stepData = {
  title: '治療7大步驟',
  lists: [
    {
      title: '第1步',
      titleNum: '1',
      img: 'https://static.cmereye.com/imgs/2023/11/8c25f9c3f1d8c834.jpg',
      name: '診斷',
      context: '進行X光檢查，以確定牙齒損壞程度，制定治療方案',
    },
    {
      title: '第2步',
      titleNum: '2',
      img: 'https://static.cmereye.com/imgs/2023/10/0b7ef1a0f39e9ca9.jpg',
      name: '麻醉',
      context: '治療前會先為客人口腔局部麻醉',
    },
    {
      title: '第3步',
      titleNum: '3',
      img: 'https://static.cmereye.com/imgs/2023/11/b7337bbff6017483.jpg',
      name: '牙齒分隔',
      context: '使用橡皮障將需治療的牙齒分隔出來，減低細菌感染其他牙齒的機會',
    },
    {
      title: '第4步',
      titleNum: '4',
      img: 'https://static.cmereye.com/imgs/2023/11/bfd54a465dbc28b8.jpg',
      name: '計算根管長度',
      context: '以牙根探針放入根管，以X光或電子儀器量度牙根深度',
    },
    {
      title: '第5步',
      titleNum: '5',
      img: 'https://static.cmereye.com/imgs/2023/11/8e3ca8afdfa82d6c.jpg',
      name: '清理牙根管',
      context: '使用藥水清理，消毒牙根管',
    },
    {
      title: '第6步',
      titleNum: '6',
      img: 'https://static.cmereye.com/imgs/2023/11/8f9ed7b27c9c0fdc.jpg',
      name: '根管充填',
      context: '將牙膠等物質充填牙根',
    },
    {
      title: '第7步',
      titleNum: '7',
      img: 'https://static.cmereye.com/imgs/2023/11/d542e53ca685f034.jpg',
      name: '修復',
      context: '用牙套保護已杜牙根的牙齒，減低其損壞機會',
    },
  ],
}

const noteData = {
  title: '療程後注意事項',
  lists: [
    {
      name: '避免咀嚼食物或咬硬物，以免損壞治療後的牙齒。',
    },
    {
      name: '避免用治療後的牙齒咬開堅硬的食物，例如堅果、糖果等。',
    },
    {
      name: '在治療後的前幾天內，嘗試避免刷牙或使用牙線，以免影響治療區域的恢復。',
    },
    {
      name: '如果需要刷牙，可以使用軟毛刷，輕柔地刷牙，避免刷太用力或刷到治療區域。',
    },
    {
      name: '如果感覺到疼痛或不適，可以使用過濾口的冰水或冰袋敷在治療區域附近，以減輕疼痛和腫脹。',
    },
    {
      name: '如醫生處方止痛藥，應按照指示使用。',
    },
    {
      name: '定期到口腔醫院進行檢查和清潔，以確保治療後的牙齒保持健康。',
    },
  ],
  listsMobile: [
    {
      name: '避免咀嚼食物或咬硬物，以免損壞治療後的牙齒。',
    },
    {
      name: '如果需要刷牙，可以使用軟毛刷，輕柔地刷牙，避免刷太用力或刷到治療區域。',
    },
    {
      name: '避免用治療後的牙齒咬開堅硬的食物，例如堅果、糖果等。',
    },
    {
      name: '如果感覺到疼痛或不適，可以使用過濾口的冰水或冰袋敷在治療區域附近，以減輕疼痛和腫脹。',
    },
    {
      name: '在治療後的前幾天內，嘗試避免刷牙或使用牙線，以免影響治療區域的恢復。',
    },
    {
      name: '定期到牙醫診所進行檢查和清潔，以確保治療後的牙齒保持健康。',
    },
  ],
}

const problemData = {
  title: 'pages.dental-service.rootCanal.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[0].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[1].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[2].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[3].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[3].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[4].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[4].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[5].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[5].A',
    },
    {
      Q: 'pages.dental-service.rootCanal.problem.lists[6].Q',
      A: 'pages.dental-service.rootCanal.problem.lists[6].A',
    },
  ],
}

let swiperRef = {
  slidePrev: () => {},
  slideNext: () => {},
}
const setSwiperRef = (swiper: any) => {
  swiperRef = swiper
}
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]()
}

const doctorData = {
  title: '根管治療醫療團隊',
  lists: [
    {
      id: '101',
      name: '楊福強',
      job: '總監醫生',
      addressType: '101',
      addressname: '羅湖區',
      text: '口腔美觀設計、瓷牙修復、牙體牙髓病的診治、牙體缺損的修復以及瓷冠、義齒的修復等方面的診治，在水激光無痛治牙方面有著豐富的臨床經驗。 操作手法靈巧精確， 解決疑難病例無數。',
      img: 'https://static.cmereye.com/imgs/2024/02/e7f0a15e92483e5f.png',
    },
    {
      id: '102',
      name: '鞏賢平',
      job: '院長',
      addressType: '101',
      addressname: '羅湖區',
      text: '牙齒美容修復、烤瓷及全瓷修復、 各類復雜義齒修復、種植修復 等。',
      img: 'https://static.cmereye.com/imgs/2024/02/48ce5ddebca789de.png',
    },
    {
      id: '103',
      name: '韋柱山',
      job: '主任醫生',
      addressType: '101',
      addressname: '羅湖區',
      text: '前牙美學修復、根管治療、口腔修復、美容修復等。',
      img: 'https://static.cmereye.com/imgs/2024/02/03f45d5c4bf3922d.png',
    },
    {
      id: '104',
      name: '劉鑫',
      job: '院長',
      addressType: '102',
      addressname: '福田區',
      text: '各種疑難植牙、穿顴穿翼、全口無牙顎、上顎竇增高、複雜的軟硬組織移植、即時植牙即刻修復、前牙美觀、數位化和植牙導航等諸多領域。',
      img: 'https://static.cmereye.com/imgs/2024/02/0762d56bee690392.png',
    },
    {
      id: '105',
      name: '劉章智',
      job: '院長',
      addressType: '102',
      addressname: '福田區',
      text: '將無痛治療技術與美學設計理念相結合，運用於根管治療、固定及活動義齒的診療當中。對各類疑難牙體牙髓病積累了大量成功治療案例和豐富的經驗。',
      img: 'https://static.cmereye.com/imgs/2024/02/6683a60841dc732e.png',
    },
    {
      id: '106',
      name: '馮曉瑛',
      job: '院長',
      addressType: '103',
      addressname: '南山區',
      text: '複雜病例整體診療方案的設計、根管治療、數字化種植修復技術。',
      img: 'https://static.cmereye.com/imgs/2024/02/211667de3a4ffa59.png',
    },
  ],
}

const doctorTeam = ref(null)
const { top, bottom } = useElementBounding(doctorTeam)
const { height } = useWindowSize()

let windowWidth = ref(390)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  handleMessageLineCur(1)
  onMessageNewSlideChange(newsMessageSwiperRef)
})
const triangleColor = ref(false)
const triangleDefault = ref(true)
let messageCurrtNew = ref(1)
const handleMessageLineCur = (_value: number) => {
  newsMessageSwiperRef.slideToLoop(_value - 1)
}
const setMessageNewsSwiperRef = (swiper: any) => {
  newsMessageSwiperRef = swiper
}
const onMessageNewSlideChange = (swiper: any) => {
  messageCurrtNew.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
  if (swiper.activeIndex == 0) {
    triangleColor.value = true
    triangleDefault.value = true
  } else {
    triangleDefault.value = false
    triangleColor.value = false
  }
}

let newsMessageSwiperRef = {
  slideToLoop: (a) => {},
}
</script>

<template>
  <div>
    <PageHeader v-if="windowWidth < 768" :headerConfig="headerConfig" />
    <PageNewHeaderMenu v-if="windowWidth > 768" :headerConfig="headerConfig" />
    <PagePcBannerNoHome v-if="windowWidth > 768" :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">
        {{ $t('pages.dental-service.title') }}
      </div>
      <ServiceIntroduce :introduce-data="introduceData" />
      <div class="reason">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            {{ reasonData.title }}
          </div>
        </div>
        <div class="reason-lists">
          <div
            v-for="(item, index) in reasonData.reasonLists"
            :key="index"
            class="reason-lists-item"
          >
            <div class="image">
              <img :src="item.img" alt="" />
            </div>
            <div class="text">
              <span>{{ item.title }}</span>
              <span>{{ item.context }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="care">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            <span>{{ careData.title[0] }}</span>
            <span>{{ careData.title[1] }}</span>
          </div>
        </div>
        <div class="care-lists">
          <div
            v-for="(careItem, careIndex) in careData.lists"
            :key="careIndex"
            class="care-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.img" :alt="careItem.text" />
                </div>
              </div>
              <div class="text">{{ careItem.text }}</div>
            </div>
          </div>
        </div>
        <div class="care-btn">
          <!-- <PageAnimBtnTypeTwo :str="'與我們了解更多'" /> -->
          <PageAnimBtnTypeTwo :str="'與我們了解更多'" />
        </div>
      </div>
      <div class="infoCard">
        <div class="dentistryServices-title infoCard-title">
          <div class="dentistryServices-title-in bb infoCard-title-in">
            什麼是<span>顯微根管治療</span>？
          </div>
        </div>
        <div class="infoCard-content">
          <div class="infoCard-content-l" v-if="windowWidth > 768">
            <img
              src="https://static.cmereye.com/imgs/2023/10/493b437603fc5e0d.jpg"
              alt=""
            />
          </div>
          <div class="infoCard-content-r">
            <div
              v-for="(infoCardItem, infoCardIndex) in infoCardData.lists"
              :key="infoCardIndex"
            >
              <div v-if="windowWidth < 768">
                <img :src="infoCardItem.img" :alt="infoCardItem.text" />
              </div>
              <div>
                <span v-if="windowWidth > 768">·</span>
                <span>{{ infoCardItem.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Root_canal_treatment_equipment">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">根管治療設備</div>
        </div>
        <div class="Root_canal_treatment_equipment-in">
          <div
            class="Root_canal_treatment_equipment-in-l"
            v-if="windowWidth > 768"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/02/33f5319ca2369e70.webp"
              alt=""
            />
          </div>
          <div
            class="Root_canal_treatment_equipment-in-r"
            v-if="windowWidth > 768"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/02/760462b941be8e2c.webp"
              alt=""
            />
            <span
              >我們使用德國蔡司顯微鏡根管治療儀，一款結合顯微鏡與醫學技術的設備，大幅提升牙醫治療根管的精準度。讓醫生能夠清楚觀察牙齒結構和根管形態，無論進行常規治療或顯微外科手術，都能更好地保留客人健康牙齒組織。</span
            >
          </div>
          <swiper
            v-if="windowWidth < 768"
            :slidesPerView="'auto'"
            :centeredSlides="true"
            :spaceBetween="0"
            class="mySwiper"
            @swiper="setMessageNewsSwiperRef"
            @slideChange="onMessageNewSlideChange"
          >
            <swiper-slide>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/08/94d23af3eaa954a4.png"
                  alt=""
                />
              </div>
              <div>
                我們使用德國蔡司顯微鏡根管治療儀，一款結合顯微鏡與醫學技術的設備，大幅提升牙醫治療根管的精準度。
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/08/db12cbbf79a68bab.png"
                  alt=""
                />
              </div>
              <div>
                讓醫生能夠清楚觀察牙齒結構和根管形態，無論進行常規治療或顯微外科手術，都能更好地保留客人健康牙齒組織。
              </div>
            </swiper-slide>
          </swiper>
          <!-- <PageSwiperPointLine
            v-if="windowWidth < 767"
            :latestNewsNum="2"
            :latestNewsCurrent="messageCurrtNew"
            @changeLineCur="handleMessageLineCur"
          ></PageSwiperPointLine> -->
          <div class="boxRound-rootCanal" v-if="windowWidth < 767">
            <div
              class="message"
              :style="{ color: triangleColor ? '' : '#FC1682' }"
              @click="handleMessageLineCur(1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M0.500001 7.13397C-0.166666 7.51887 -0.166666 8.48112 0.5 8.86602L12.5 15.7942C13.1667 16.1791 14 15.698 14 14.9282L14 1.0718C14 0.301996 13.1667 -0.17913 12.5 0.20577L0.500001 7.13397Z"
                  :fill="triangleColor ? '' : '#FC1682'"
                />
              </svg>
            </div>
            <div
              class="message"
              @click="handleMessageLineCur(2)"
              :style="{ color: triangleDefault ? '#FC1682' : '#F7C3C3' }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M13.5 7.13397C14.1667 7.51887 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833333 16.1791 -7.73604e-07 15.698 -7.39955e-07 14.9282L-1.34273e-07 1.0718C-1.00623e-07 0.301996 0.833333 -0.17913 1.5 0.20577L13.5 7.13397Z"
                  :fill="triangleDefault ? '#FC1682' : '#F7C3C3'"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-in">
          <div class="dentistryServices-title step-title">
            <div class="dentistryServices-title-in bb step-title-in">
              {{ stepData.title }}
            </div>
          </div>
          <div class="step-lists">
            <div
              v-for="(stepItem, stepIndex) in stepData.lists"
              :key="stepIndex"
              class="step-lists-in"
            >
              <div class="step-lists-in-l">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="" />
                  {{ windowWidth > 768 ? stepItem.title : stepItem.titleNum }}
                </div>
                <div class="image"><img :src="stepItem.img" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
                <div class="context">{{ stepItem.context }}</div>
              </div>
              <div class="step-lists-in-r">
                <img src="@/assets/images/icon_12.png" alt="" />
              </div>
            </div>
            <div class="step-lists-in" v-if="windowWidth > 767">
              <div class="lastBox-t">
                <div><img src="@/assets/images/icon_13.png" alt="" /></div>
                <div>療程最快<span>即日完成 !</span></div>
                <div><img src="@/assets/images/icon_13.png" alt="" /></div>
              </div>
              <div class="lastBox-b">
                <!-- <span @click="toWhatsApp">立即預約牙齒檢查</span> -->
                <!-- <PageAnimBtnTypeTwo :str="'立即預約牙齒檢查'" /> -->
                <PageAnimBtnTypeTwo str="立即預約牙齒檢查" />
              </div>
            </div>
          </div>
          <div
            class="step-lists-in step-lists-outside"
            v-if="windowWidth < 767"
          >
            <div class="lastBox-t">
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
              <div>療程最快<span>即日完成 !</span></div>
              <div><img src="@/assets/images/icon_13.png" alt="" /></div>
            </div>
            <div class="lastBox-b">
              <!-- <span @click="toWhatsApp">立即預約牙齒檢查</span> -->
              <!-- <PageAnimBtnTypeTwo :str="'立即預約牙齒檢查'" /> -->
              <PageAnimBtnTypeTwo str="立即預約牙齒檢查" />
            </div>
          </div>
        </div>
      </div>
      <div class="doctorTeam" ref="doctorTeam">
        <ServiceSpecializedTeam :doctorData="doctorData" />
      </div>
      <div class="note" v-if="windowWidth > 767">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            療程後注意事項
          </div>
        </div>
        <div class="note-content">
          <div class="note-content-l">
            <img
              src="https://static.cmereye.com/imgs/2023/10/9ecad6effa1796bd.jpg"
              alt=""
            />
          </div>
          <div class="note-content-r">
            <div
              v-for="(noteItem, noteIndex) in noteData.lists"
              :key="noteIndex"
            >
              <span>·</span>
              <span>{{ $t(noteItem.name) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-note-new" v-else>
        <div>
          <div>
            <img src="../../assets/images/announcements.svg" alt="" />
          </div>
          <div>
            <span>根管治療後</span>
            <span>注意事項</span>
          </div>
        </div>
        <div class="mobile-note-content">
          <div
            v-for="(noteItem, noteIndex) in noteData.listsMobile"
            :key="noteIndex"
          >
            <span>·</span>
            <span>{{ $t(noteItem.name) }}</span>
          </div>
        </div>
      </div>
      <!-- <ServiceProblem :problem-data="problemData" /> -->
      <serviceCard />
      <NewAddress />
      <ContactForm-new2 />
    </div>
    <PageFooter />
    <!-- <PageNavbar
      :showDialogBox="top < (height / 3) * 2 && bottom > height / 3"
    /> -->
    <PageNewNavbarSide v-if="windowWidth > 768" />
    <PageNavbar v-else />
  </div>
</template>

<style lang="scss" scoped>
:deep(.header-content) {
  .explain_box_mobile {
    background: transparent !important;
    position: absolute;
    bottom: 70px;
    z-index: 38;
    right: 0;
    left: 0;
    top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0 auto !important;
  }
}
.reason {
  margin-top: 188px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 55px;
      width: calc(100% / 3);
      .image {
        position: relative;
        img {
          width: 100%;
        }
      }
      .text {
        font-style: normal;
        text-align: center;
        margin-top: -45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
        span {
          font-size: 35px;
          font-weight: 900;
          &:nth-of-type(1) {
            color: #fff;
            border-radius: 30px;
            background: var(--indexColor1);
            text-align: center;
            width: max-content;
            padding: 0 40px;
            filter: drop-shadow(
              0px 3.7044363021850586px 7.408872604370117px
                rgba(252, 22, 130, 0.38)
            );
          }
          &:nth-of-type(2) {
            color: var(--indexColor1);
            white-space: pre-wrap;
            margin-top: 44px;
          }
        }
      }
    }
  }
}
.care {
  margin-top: 206px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 819px;
    margin: 127px auto 0;
    &-item {
      width: calc(100% / 3);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fff1f0;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              max-width: 90%;
              max-height: 90%;
            }
          }
        }
        .text {
          text-align: center;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 90px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              background: #fee6f1;
            }
          }
        }
      }
    }
  }
  &-btn {
    margin-top: 106px;
    display: flex;
    justify-content: center;
  }
}
.infoCard {
  margin-top: 230px;
  &-title {
    &-in {
      font-size: 50px;
      span {
        color: var(--indexColor1);
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1242px;
    margin: 60px auto 0;
    &-l {
      width: calc((509 / 1242) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((56 / 1242) * 100%);
      flex: 1;
      & > div {
        display: flex;
        span {
          color: #4d4d4d;
          font-size: 28px;
          line-height: 160%;
          font-weight: 600;
          &:nth-of-type(1) {
            min-width: 30px;
          }
        }
      }
    }
  }
}
.step {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 240, 0) 0%,
    rgba(255, 241, 240, 0.7) 12.5%,
    rgba(255, 241, 240, 0.7) 81.99%,
    rgba(255, 241, 240, 0) 100%
  );
  padding: 61px 0 140px;
  margin-top: 140px;
  &-in {
    width: 100%;
    max-width: 1444px;
    margin: 0 auto;
  }
  &-lists {
    margin-top: 98px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      &:nth-of-type(7),
      &:nth-of-type(8) {
        margin-bottom: 0;
      }
      &:nth-of-type(3),
      &:nth-of-type(6),
      &:nth-of-type(7) {
        .step-lists-in-r {
          display: none;
        }
      }
      &-l {
        width: 100%;
        max-width: 400px;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title {
          display: flex;
          align-items: center;
          font-size: 35px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #666666;
          img {
            height: auto;
            margin-right: 15px;
          }
        }
        .image {
          width: 100%;
          img {
            width: 100%;
            border-radius: 30px;
          }
        }
        .name {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
        }
        .context {
          font-size: 20px;
          font-weight: 700;
          color: #666666;
          padding: 0 15px;
        }
      }
      &-r {
        margin-left: 50px;
        img {
          width: 15px;
          height: auto;
        }
      }
      &:nth-of-type(8) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lastBox-t {
          display: flex;
          align-items: flex-end;
          & > div {
            color: var(--indexColor1);
            font-size: 75px;
            font-weight: 700;
            // span {
            //   font-size: 85px;
            // }
            &:nth-of-type(1) {
              padding-bottom: 25px;
              margin-right: 30px;
            }
            &:nth-of-type(3) {
              padding-bottom: 25px;
              margin-left: 30px;
            }
          }
        }
        .lastBox-b {
          margin-top: 15px;
        }
      }
    }
  }
}
.note {
  margin-top: 140px;
  &-title {
    &-in {
      font-size: 50px;
      span {
        color: var(--indexColor1);
      }
    }
  }
  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1286px;
    margin: 80px auto 0;
    &-l {
      width: calc((482 / 1242) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      margin-left: calc((42 / 1242) * 100%);
      flex: 1;
      & > div {
        display: flex;
        span {
          color: #4d4d4d;
          font-size: 28px;
          line-height: 160%;
          font-weight: 600;
          &:nth-of-type(1) {
            min-width: 30px;
          }
        }
      }
    }
  }
}
.Root_canal_treatment_equipment {
  width: 100%;
  max-width: calc(1284px + 60px);
  margin: 140px auto 0;
  &-in {
    display: flex;
    margin-top: 53px;
    &-l {
      width: calc(595 / 1284 * 100%);
      margin-right: calc(53 / 1284 * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      flex: 1;
      img {
        width: 100%;
      }
      span {
        width: 100%;
        text-align: justify;
        font-size: 28px;
        line-height: 160%;
        color: var(--textColor);
        margin-top: 40px;
        display: block;
      }
    }
  }
}
.doctorTeam {
  margin-top: 140px;
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
@keyframes btnAnim2 {
  0% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  50% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  90% {
    width: 130%;
    height: 160%;
    opacity: 0;
  }
  100% {
    width: 130%;
    height: 160%;
    opacity: 0;
  }
}
@keyframes btnAnim3 {
  0% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  60% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  100% {
    width: 130%;
    height: 160%;
    opacity: 0;
  }
}

// @media (min-width: 768px) and (max-width: 1200px) {
//   .reason {
//     &-lists {
//       &-item {
//         .image {
//           div {
//             font-size: 4vw;
//             width: 9vw;
//             height: calc(9vw + 3px);
//             background-size: 100% 100%;
//           }
//         }
//         .text {
//           font-size: 3vw;
//         }
//       }
//     }
//   }
// }
@media (min-width: 768px) and (max-width: 1920px) {
  .reason {
    margin-top: 9.7917vw;
    &-lists {
      max-width: 86.25vw;
      margin: 6.0417vw auto 0;
      &-item {
        padding: 0 2.8646vw;
        .text {
          margin-top: -2.3438vw;
          span {
            font-size: 1.8229vw;
            &:nth-of-type(1) {
              border-radius: 1.5625vw;
              padding: 0 2.0833vw;
              filter: drop-shadow(
                0px 0.1929vw 0.3859vw rgba(252, 22, 130, 0.38)
              );
            }
            &:nth-of-type(2) {
              margin-top: 2.2917vw;
            }
          }
        }
      }
    }
  }
  .care {
    margin-top: 10.7292vw;
    &-lists {
      max-width: 42.6563vw;
      margin: 6.6146vw auto 0;
      &-item {
        & > div {
          .image {
            &-in {
              margin-bottom: 0.6771vw;
              border-radius: 0.5208vw;
            }
          }
          .text {
            font-size: 1.25vw;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 4.6875vw;
        }
      }
    }
    &-btn {
      margin-top: 5.5208vw;
    }
  }
  .infoCard {
    margin-top: 11.9792vw;
    &-title {
      &-in {
        font-size: 2.6042vw;
      }
    }
    &-content {
      max-width: 64.6875vw;
      margin: 3.125vw auto 0;
      &-r {
        & > div {
          span {
            font-size: 1.4583vw;
            &:nth-of-type(1) {
              min-width: 1.5625vw;
            }
          }
        }
      }
    }
  }
  .Root_canal_treatment_equipment {
    max-width: calc(66.875vw + 3.125vw);
    margin: 7.2917vw auto 0;
    &-in {
      margin-top: 2.7604vw;
      &-r {
        span {
          font-size: 1.4583vw;
          margin-top: 2.0833vw;
        }
      }
    }
  }
  .step {
    padding: 3.1771vw 0 7.2917vw;
    margin-top: 7.2917vw;
    &-in {
      max-width: 75.2083vw;
    }
    &-lists {
      margin-top: 5.1042vw;
      &-in {
        margin-bottom: 4.7917vw;
        &-l {
          max-width: 20.8333vw;
          .title {
            font-size: 1.8229vw;
            margin-bottom: 0.7813vw;
            img {
              margin-right: 0.7813vw;
            }
          }
          .image {
            img {
              border-radius: 1.5625vw;
            }
          }
          .name {
            font-size: 1.0417vw;
            margin-top: 1.25vw;
            margin-bottom: 0.7813vw;
            padding: 0.4167vw 0.7813vw;
          }
          .context {
            font-size: 1.0417vw;
            padding: 0 0.7813vw;
          }
        }
        &-r {
          margin-left: 2.6042vw;
          img {
            width: 0.7813vw;
          }
        }
        &:nth-of-type(8) {
          .lastBox-t {
            & > div {
              font-size: 3.9063vw;
              &:nth-of-type(1) {
                padding-bottom: 1.3021vw;
                margin-right: 1.5625vw;
              }
              &:nth-of-type(3) {
                padding-bottom: 1.3021vw;
                margin-left: 1.5625vw;
              }
            }
          }
          .lastBox-b {
            margin-top: 0.7813vw;
          }
        }
      }
    }
  }
  .note {
    margin-top: 7.2917vw;
    &-title {
      &-in {
        font-size: 2.6042vw;
      }
    }
    &-content {
      max-width: 66.9792vw;
      margin: 4.1667vw auto 0;
      &-r {
        & > div {
          span {
            font-size: 1.4583vw;
            &:nth-of-type(1) {
              min-width: 1.5625vw;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  :deep(.explain_box_mobile) {
    top: 0 !important;
    margin-left: 0 !important;
    margin-right: auto !important;
  }
  :deep(.header-content) {
    .explain_box_mobile {
      align-items: flex-end;
      background: transparent !important;
      display: flex;
      justify-content: flex-end;
      margin: 0 auto !important;
      left: auto;
      right: 0;
      bottom: -20px;
      position: absolute;
      top: auto;
      z-index: 35;
    }
    .waterBg-implant::after,
    .waterBg-implant::before {
      bottom: -28vw;
    }
  }
  .reason {
    margin-top: 54px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      gap: 0;
      margin: 50px auto 0;
      padding: 0 4vw;
      &-item {
        width: 42.6vw;
        padding: 0 0;
        .text {
          margin-top: -34px;
          span {
            font-size: 4.226vw;
            &:nth-of-type(1) {
              padding: 8px 40px;
            }
            &:nth-of-type(2) {
              margin-top: 20px;
              white-space: normal;
            }
          }
        }
        // &:not(:last-child) {
        //   margin-bottom: 35px;
        // }
      }
      & > div:nth-child(2) {
        margin: 0 0 0 auto;
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        margin-top: -65px;
      }
    }
  }
  .care {
    margin-top: 80px;
    padding-bottom: 0px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 34px 15px 0;
      &-item {
        width: calc(100% / 3);
        & > div {
          .image {
            padding: 0 5px;
          }
          .text {
            white-space: pre-wrap;
            font-size: 14px;
            font-size: 4.2665vw;
            color: #4d4d4d;
          }
        }
        &:nth-of-type(1) {
          & > div {
            .text {
              padding: 0 0;
            }
          }
        }
        &:nth-of-type(3) {
          & > div {
            .text {
              padding: 0 15px;
            }
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 30px;
        }
      }
    }
    &-btn {
      margin-top: 30px;
    }
  }
  .infoCard {
    margin-top: 80px;
    &-title {
      &-in {
        font-size: 26px;
        span {
          display: inline-block;
        }
      }
    }
    &-content {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 auto 0;
      &-l {
        width: 100%;
        padding: 0 53px;
      }
      &-r {
        width: 100vw;
        margin-left: 0;
        padding: 9.065vw 6.665vw 0;
        & > div {
          display: flex;
          flex-direction: column;
          width: 41.825vw;
          & > div:nth-child(2) {
            margin-top: 1.6vw;
            span {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: justify;
              font-family: FakePearl;
              font-size: 3.2vw;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
            }
          }
        }
        & > div:nth-child(2) {
          margin: 0 0 0 auto;
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          margin-top: -110px;
        }
      }
    }
  }
  .step::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 30%;
    height: 330vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
  }
  .step {
    // background: linear-gradient(
    //   0deg,
    //   rgba(255, 241, 240, 0) 0%,
    //   rgba(255, 241, 240, 0.7) 12.5%,
    //   rgba(255, 241, 240, 0.7) 81.99%,
    //   rgba(255, 241, 240, 0) 100%
    // );
    position: relative;
    background: transparent;
    margin-top: 40px;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 8vw 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: 0 20px;
      &-in {
        width: calc(140 / 375 * 100vw);
        margin-bottom: 0;
        // &:nth-of-type(n + 4) {
        //   margin-bottom: 30px;
        // }
        // &:nth-of-type(3),
        // &:nth-of-type(6) {
        //   .step-lists-in-r {
        //     display: block;
        //   }
        // }
        &-l {
          position: relative;
          .title {
            position: absolute;
            padding: 0 6px;
            top: -45px;
            left: -15px;
            width: 70px;
            margin: 0 auto;
            color: var(--Theme-Color, #fc1682);
            text-align: center;
            font-family: 'Noto Serif HK';
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 84px */
            letter-spacing: -3px;
            display: flex;
            justify-content: center;
            background: url('https://static.cmereye.com/imgs/2024/08/a53173454afef713.png')
              no-repeat;
            background-size: 100% 100%;
            display: inline-block;
            background-position-x: 5px;
            & > img {
              display: none;
            }
          }
          .image {
            padding: 0 6px;
            img {
              border-radius: 12px;
              border: 2px solid var(--Theme-Color, #fc1682);
            }
          }
          .name {
            margin: 0;
            margin-top: 6px;
            font-size: 16px;
            clip-path: none;
            background: transparent;
            padding: 0;
            padding-left: 5px;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 20.8px */
          }
          .context {
            // font-size: 16px;
            padding-left: 5px;
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: FakePearl;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
        }
        &-r {
          display: none;
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(8) {
          margin-top: 15px;
          .lastBox-t {
            & > div {
              font-size: 28px;
              // span {
              //   font-size: 34px;
              // }
              img {
                width: 14px;
                height: 16px;
              }
              &:nth-of-type(1) {
                padding-bottom: 10px;
                margin-right: 7px;
              }
              &:nth-of-type(3) {
                padding-bottom: 10px;
                margin-left: 7px;
              }
            }
          }
          .lastBox-b {
            margin-top: 20px;
          }
        }
      }
      & > div:nth-child(odd) {
        margin-top: 60px;
      }
      & > div:nth-child(7) {
        margin-top: 20px;
      }
      & > div:nth-child(even) {
        margin-top: 120px;
      }
    }
  }
  .step-lists-outside {
    margin-top: 40px;
    width: 100%;
    & > div:nth-child(1) {
      display: none;
    }
    :deep(.lastBox-b) {
      margin: 0 auto;
      .animbtntypetwo {
        justify-content: center;
      }
      .animbtntypetwo-in {
        & > span {
          font-size: 5.33vw;
        }
      }
    }
  }
  .note {
    margin-top: 34px;
    &-title {
      &-in {
        font-size: 26px;
        span {
          display: inline-block;
        }
      }
    }
    &-content {
      flex-direction: column;
      align-items: flex-start;
      margin: 72px auto 0;
      &-l {
        width: 100%;
        padding: 0 53px;
      }
      &-r {
        margin-left: 0;
        padding: 35px 30px 0;
        & > div {
          span {
            font-size: 16px;
            font-weight: 500;
            &:nth-of-type(1) {
              min-width: 15px;
            }
          }
        }
      }
    }
  }
  .mobile-note-new {
    margin-top: 60px;
    margin-left: 30px;
    & > div:nth-child(1) {
      display: flex;
      align-items: flex-end;
      & > div:nth-child(1) {
        position: relative;
        z-index: 6;
      }
      & > div:nth-child(2) {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        flex: 1;
        width: 100%;
        & > span:nth-child(1) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 126%; /* 25.2px */
        }
        & > span:nth-child(2) {
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 126%;
          letter-spacing: 2.6px;
        }
      }
      & > div:nth-child(2)::after {
        display: inline-block;
        width: 120%;
        height: 1px;
        background: #fc1682;
        content: '';
        position: absolute;
        bottom: 15px;
        right: 0;
      }
    }
  }
  .mobile-note-content {
    margin-top: 25px;
    margin-right: 30px;
    display: grid;
    gap: 10px 36px;
    grid-template-columns: repeat(2, 1fr);
    & > div {
      padding-left: 12px;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 200%; /* 24px */
      letter-spacing: 1.2px;
      & > span:nth-child(1) {
        display: none;
      }
      position: relative;
    }
    & > div::before {
      content: '';
      background: url('../../assets/images/triangle.svg') no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      width: 9px;
      height: 11px;
      position: absolute;
      top: 7px;
      left: -2px;
    }
  }
  .Root_canal_treatment_equipment {
    margin-top: 60px;
    &-in {
      margin-top: 30px;
      padding: 0 5.33vw;
      flex-direction: column;
      position: relative;
      :deep(.swiper-slide) {
        width: 71.733vw;
        border-top: 1px solid #fc1682;
        border-left: 1px solid #fc1682;
        border-bottom: 1px solid #fc1682;
        box-sizing: border-box;
        padding: 5.33vw;
        & > div:nth-child(2) {
          margin-top: 16px;
          min-height: 33.0665vw;
          color: #4d4d4d;
          text-align: justify;
          font-family: FakePearl;
          font-size: 3.2vw;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 19.2px */
          letter-spacing: 1.2px;
        }
      }
      :deep(.swiper-slide:last-child) {
        border-right: 1px solid #fc1682;
      }
      &-l {
        width: 100%;
      }
      &-r {
        margin-top: 20px;
        span {
          font-size: 16px;
          line-height: 200%;
          margin-top: 20px;
          padding: 0 10px;
        }
      }
    }
  }
  :deep(.swiper) {
    margin: 0;
  }
  :deep(.point) {
    margin-top: 20px;
    width: 19.733vw;
    .boxLine {
      display: none;
    }
    .boxLine-current {
      display: none;
    }
  }
  .boxRound-rootCanal {
    position: absolute;
    bottom: -14vw;
    left: 14vw;
    display: flex;
    width: 19.733vw;
    height: 9.33vw;
    border: 1px solid #fc1682;
    & > div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2.4vw;
      box-sizing: border-box;
      & > svg {
        fill: #f7c3c3;
      }
    }
    & > div:nth-child(1) {
      border-right: 1px solid #fc1682;
    }
  }
  .doctorTeam {
    margin-top: 30px;
  }
}
</style>
