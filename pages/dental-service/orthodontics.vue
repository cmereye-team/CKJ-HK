<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp, whatsAppNum } from '~/assets/js/common'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: '矯齒(箍牙)',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健矯齒(箍牙)服務減2000元,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店，採用最新技術與個人化矯齒計劃打造黃金比例臉型',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 高階牙科 醫療券 長者醫療券大灣區試點 案例 牙醫 牙医 深圳 羅湖 朱咪咪 掛號 收費 價目表 線上預約 矯齒 箍牙 固定式外箍 固定式內箍 金屬箍牙 陶瓷箍牙 樹脂箍牙 傳統箍牙 矯齒價錢 箍牙價錢 箍牙流程 牙齒擠擁 倒及牙 齙牙 箍牙時間 微笑設計 美容牙科 微笑曲線 黃金比例 cool牙 兒童箍牙 改善臉型',
    },
  ],
})

const headerConfig = {
  img: 'https://statichk.cmermedical.com/ckj/service-page-test/orthodontics-pc.png',
  mbImg:
    'https://statichk.cmermedical.com/ckj/service-page-test/orthodontics-mb.png',
  bg: '',
  pageName: 'orthodontics-test',
  pcText: ['追求美學極致，展現最燦爛笑容', '愛康健為愛美的您打造完美面部輪廓'],
  mbText: ['追求美學極致', '展現最燦爛笑容'],
}

const orthodonticsIntroduceData = {
  title: '什麼是<br />矯齒（箍牙）',
  content:
    '通過矯正器將牙齒逐步調整到理想的位置，從而修正咬合與齒列情況，改善發音問題，提升牙齒外觀的整齊及美觀度。牙齒移動後牙縫變小、咬合位置得到改善，也有助於清潔口腔，減少牙齒疾病風險。',
  mbImg: 'https://static.cmereye.com/imgs/2024/08/2628253ea47511d7.jpg',
  pcImg:
    'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1235.5nuu1cxast00.jpg',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName',
  pageName: 'orthodontics-test',
}

const reasonData = {
  title: 'pages.dental-service.orthodontics.reason.title',
  text: 'pages.dental-service.orthodontics.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/39b4d45b6b7bc2ab.jpg',
  reasonLists: [
    {
      context: 'pages.dental-service.orthodontics.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[2].context',
    },
  ],
}

// const stepData = {
//   title: '矯齒(箍牙)過程',
//   stepLists: [
//     [
//       {
//         title: 'Step 1',
//         text: '醫生會先進行檢查及評估，確認矯齒的需要'
//       },
//       {
//         title: 'Step 2',
//         text: '拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模'
//       },
//       {
//         title: 'Step 3',
//         text: '醫生講解情況及治療方案'
//       },
//     ],
//     [
//       {
//         title: 'Step 4',
//         text: '配戴牙箍及定期覆診'
//       },
//       {
//         title: 'Step 5',
//         text: '矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位'
//       }
//     ]
//   ],
//   isShowBottom: true,
//   bottomText: '*不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療'
// }
const stepData = {
  title: '矯齒5步曲',
  lists: [
    {
      title: '第1步',
      titleNum: '1',
      img: 'https://statichk.cmermedical.com/ckj/image/82e238102f5f.png',
      name: '初步檢查',
      context:
        '會為客人進行初步的口腔檢查，並拍攝全口腔的電腦斷層掃描檢查(CT Scan)及側面的X光照片',
    },
    {
      title: '第2步',
      titleNum: '2',
      img: 'https://statichk.cmermedical.com/ckj/image/6bfb78366c02.png',
      name: '策劃療程',
      context: '會根據客人的具體情況，制定出最適合的矯正方案',
    },
    {
      title: '第3步',
      titleNum: '3',
      img: 'https://statichk.cmermedical.com/ckj/image/0a7cce192120.png',
      name: '口腔治療',
      context: '矯齒前，會先治療客人的口腔疾病，確保牙齒處於健康狀態',
    },
    {
      title: '第4步',
      titleNum: '4',
      img: 'https://statichk.cmermedical.com/ckj/image/5123a81414d0.png',
      name: '裝配矯正器',
      context:
        '每種矯正器的裝配方式有所不同，客人需要根據專科主任的建議來進行裝配和保養，以達到理想效果',
    },
    {
      title: '第5步',
      titleNum: '5',
      img: 'https://statichk.cmermedical.com/ckj/image/ebfbfb07c153.png',
      name: '定期覆診',
      context: '完成矯齒療程後，記得定期覆診和持續配戴固定器',
    },
  ],
}

const differData = {
  title: '固定式牙箍與隱形牙箍的分別',
  text: [
    '價格並非選擇的唯一考慮因素，\n選擇最適合自己的矯正方式才是關鍵。',
    '建議向我們的專科主任諮詢，\n並根據自己的口腔情況和需求進行選擇。',
  ],
  firstTextTh: '固定式牙箍',
  secondTextTh: '隱形牙箍',
  listDatas: [
    {
      name: '',
      firstText: '固定式牙箍',
      secondText: '隱形牙箍',
    },
    {
      name: '原理',
      firstText:
        '將矯正器固定在牙面上，利用鋼絲和牙箍的力量，逐步為牙齒調整至理想位置。',
      secondText: '利用電腦模擬牙齒的移動路徑，定期更換度身訂造的牙箍。',
    },
    {
      name: '物料',
      firstText: '金屬/ 陶瓷/ 自鎖/ 舌側',
      secondText: '醫學塑膠',
    },
    {
      name: '拆卸',
      firstText: '無法自行拆卸',
      secondText: '隨時戴脫',
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: '固定式外箍較顯眼\n固定式內箍對外觀沒有影響',
      secondText: '採用獨特透明設計，難以察覺',
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後可清洗',
    },
    {
      name: '成效',
      firstText: '適合大部份齒列畸形人士',
      secondText: '適合齒列輕度至中度不整及有美觀需求人士',
    },
    {
      name: '療程時長',
      firstText: '每人嚴重程度，因人而異，但一般比隱形牙箍療程快',
      secondText: '每人嚴重程度不同，因人而異',
    },
    {
      name: '其他',
      firstText: '矯齒初期會有不適感',
      secondText: '隱形牙套表面平滑',
    },
  ],
}

const problemData = {
  title: 'pages.dental-service.orthodontics.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[0].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[0].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[1].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[1].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[2].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[2].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[3].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[3].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[4].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[4].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[5].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[5].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[6].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[6].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[7].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[7].A',
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[8].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[8].A',
    },
  ],
}

const bpData = {
  title: '你有以下齒列不整的困擾嗎？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/12/fcc14b39b1425784.jpg',
    },
    {
      title: '倒 及',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1556.6xop3m9cz3k0.jpg',
    },
    {
      title: '錯咬/個別反咬合',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-39-(1).5dt9vtsy9w00.jpg',
    },
    {
      title: '牙縫過大',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-40-(1).2l66y7enxs80.jpg',
    },
    {
      title: '開 咬',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-41-(1).3fzvrknw66c0.jpg',
    },
    {
      title: '齒列擠擁',
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Component-42-(1).7f6rnufo4vk0.jpg',
    },
    // {
    //   title: '前排齒列擠擁',
    //   imgUrl: 'https://static.cmereye.com/imgs/2023/06/e53653134a5709f1.jpg'
    // }
  ],
}

let bpCurrent = ref(1)
const onSlideChange = (swiper: any) => {
  bpCurrent.value = swiper.realIndex + 1
}

let aestheticsCurrent = ref(1)
const onAestheticsSlideChange = (swiper: any) => {
  aestheticsCurrent.value = swiper.realIndex + 1
}

const aestheticsData = {
  title: '矯齒方式種類',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/056cf3b645f697c6.jpg',
      title: '隱形牙箍矯正',
      text: '隱形設計，低調且難被察覺，美觀度高，同時矯正牙齒與頜面形態，讓矯正過程自然舒適。',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/eb84d445e77694da.jpg',
      title: '陶瓷半隱形矯正',
      text: '使用陶瓷透明托槽和鋼絲，色澤與牙齒相近，較難察覺。',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/1fc83a75a1e52762.jpg',
      title: '金屬托槽矯正',
      text: '最具經濟效益的矯正方式，適用範圍廣泛。',
    },
    {
      imgUrl:
        'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/image-1.7bb54853j3s.jpg',
      title: '舌側隱形矯正',
      text: '對外觀無影響，同時能夠有效修正各種牙齒問題，包括咬合問題和齒列不整等，價錢相對較高。',
    },
  ],
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', () => {
    getWindowWidth()
    windowWidth.value = window.innerWidth
  })
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault()
  })
  getWindowWidth()
  windowWidth.value = window.innerWidth
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

const careData = {
  title: ['矯齒注意事項'],
  lists: [
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1047.2lum1bomw7y0.jpg',
      text: '注意口腔衛生',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1048.5rfiys1h84k0.jpg',
      text: '忌吃硬黏及\n易染色食物',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1464.1n0vbh7m2fr4.jpg',
      text: '盡量避免外傷',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/12/d1b77fe7ddd90ec3.jpg',
      text: '持續配戴固定器',
    },
    {
      img: 'https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/Group-1052.2t3ji3md60q0.jpg',
      text: '定期覆診檢查',
    },
  ],
}
</script>


<template>
  <div>
    <PageHeader v-if="windowWidth < 768" :headerConfig="headerConfig">
      <template #xxxxxxxxxxx-home>
        <div class="banner-in-box">
          <div class="banner-content" style="display: flex">
            <div class="content-subscribe">網上預約限定優惠</div>
            <div class="content-title">矯齒(箍牙)</div>
            <div class="content-remark">追求牙齒美學,展現自信燦爛笑容</div>
            <div class="content-price">
              <div>青少年傳統箍牙</div>
              <div class="price-style">
                <img src="../../assets/images/2025011014020001.svg" alt="" />
              </div>
              <div>起</div>
            </div>
          </div>
        </div>
      </template>
    </PageHeader>
    <PageNewHeaderMenu v-if="windowWidth > 768" :headerConfig="headerConfig" />
    <PagePcBannerNoHome v-if="windowWidth > 768" :headerConfig="headerConfig">
      <template #xxxxxxxxxxx-home>
        <div class="banner-in-box">
          <div class="banner-content" style="display: flex">
            <div class="content-remark">追求牙齒美學,展現自信燦爛笑容</div>
            <div class="content-title">矯齒(箍牙)</div>
            <div class="content-price">
              <div>青少年傳統箍牙</div>
              <div class="price-style">
                <img src="../../assets/images/2025011014020001.svg" alt="" />
              </div>
              <div>起</div>
            </div>
            <div class="content-subscribe">網上預約限定優惠</div>
          </div>
        </div>
      </template>
    </PagePcBannerNoHome>
    <div class="orthodonticsPage">
      <div class="index_title pageCon">
        {{ $t('pages.dental-service.title') }}
      </div>
      <ServiceIntroduce
        :introduceData="orthodonticsIntroduceData"
        class="mobile-orthodontics"
      />
      <!-- 
      <div class="dental_implant_technology-video">
        <div class="youtobe-video">
          <div class="youtobe-video-in">
            <iframe
              width="560"
              src="https://www.youtube.com/embed/j2zJsOOq_TM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      -->
      <div class="traffic">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>北上箍牙最緊要交通方便</span>
          </div>
        </div>
        <div>4大口岸分店</div>
        <div class="port-list">
          <div>
            <div>1</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/eaa32a881990a4c1.png"
                  alt=""
              /></span>
              <span>羅湖口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/5d173da6d8e10df7.png"
                  alt=""
              /></span>
              <span>出關<i>步行3分鐘</i></span>
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/77a62d18592cf103.png"
                  alt=""
              /></span>
              <span>福田口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/495d73a43935aa21.png"
                  alt=""
              /></span>
              <span>出關<i>步行3分鐘</i></span>
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/77a62d18592cf103.png"
                  alt=""
              /></span>
              <span>南山口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/9b250a2b3a446a3d.png"
                  alt=""
              /></span>
              <span
                ><i>免費專車接送/</i>
                <i
                  >步行3分鐘<img
                    src="https://static.cmereye.com/imgs/2024/12/15f68bb258f6df7a.png"
                    alt=""
                /></i>
              </span>
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/eaa32a881990a4c1.png"
                  alt=""
              /></span>
              <span>蓮塘口岸</span>
              <span
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/5498a63c60ebbdcd.png"
                  alt=""
              /></span>
              <span
                >地鐵2號線<i>坐4個站</i
                ><img
                  src="https://static.cmereye.com/imgs/2024/12/15f68bb258f6df7a.png"
                  alt=""
              /></span>
            </div>
          </div>
        </div>
        <div class="port-combo" v-if="windowWidth > 768">
          <div class="dentistryServices-title">
            <div class="dentistryServices-title-in bb">
              <span>愛康健限時箍牙套餐</span>
            </div>
          </div>
          <div>
            <div>
              <span>2</span><span>人同行再減</span><span>¥</span
              ><span>500</span>
            </div>
            <div>
              <div>
                <span>經濟實惠</span>
                <span>傳統金屬箍牙</span>
                <span><i>¥</i>12,800<i>起</i></span>
                <span><i>¥</i>23<i>/日</i></span>
              </div>
              <div>
                <span>性價比高</span>
                <span>時代天使<br />隱形牙箍</span>
                <span><i>¥</i>18,800<i>起</i></span>
                <span><i>¥</i>34<i>/日</i></span>
              </div>
              <div>
                <span>複雜牙列適用</span>
                <span>Spark<br />隱形牙箍</span>
                <span><i>¥</i>39,800<i>起</i></span>
                <span><i>¥</i>71<i>/日</i></span>
              </div>
              <div>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/2301eafa387509ab.png"
                    alt=""
                /></span>
                <span>隱形牙箍</span>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/7293760e23244e49.png"
                    alt=""
                /></span>
                <span>¥5,000</span>
              </div>
            </div>
            <a
              href="https://wa.me/85269338128?text=Hello%E6%84%9B%E5%BA%B7%E5%81%A5,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E7%89%99%E7%A7%91%E6%9C%8D%E5%8B%99"
              target="_blank"
              >網上及WhatApp預約專享</a
            >
          </div>
        </div>
        <div class="port-combo_mb" v-else>
          <div class="dentistryServices-title">
            <div class="dentistryServices-title-in bb">
              <span>愛康健限時箍牙套餐</span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>經濟實惠</span>
                <span>傳統金屬箍牙</span>
                <span><i>¥</i>12,800<i>起</i></span>
                <span><i>¥</i>23<i>/日</i></span>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/12/5d174b9388c1daec.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div>
                <span>性價比高</span>
                <span>時代天使<br />隱形牙箍</span>
                <span><i>¥</i>18,800<i>起</i></span>
                <span><i>¥</i>34<i>/日</i></span>
              </div>
              <div>
                <span>複雜牙列適用</span>
                <span>Spark<br />隱形牙箍</span>
                <span><i>¥</i>39,800<i>起</i></span>
                <span><i>¥</i>71<i>/日</i></span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://statichk.cmermedical.com/ckj/image/20241219011321315141.svg"
                  alt=""
                />
              </div>
              <div>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/2301eafa387509ab.png"
                    alt=""
                /></span>
                <span>隱形牙箍</span>
                <span
                  ><img
                    src="https://static.cmereye.com/imgs/2024/12/7293760e23244e49.png"
                    alt=""
                /></span>
                <span>¥5,000</span>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/85269338128?text=Hello%E6%84%9B%E5%BA%B7%E5%81%A5,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E7%89%99%E7%A7%91%E6%9C%8D%E5%8B%99"
            target="_blank"
            >網上及WhatApp預約專享</a
          >
        </div>
      </div>
      <div class="bp">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{ bpData.title }}</span>
          </div>
        </div>
        <div class="bp-lists">
          <div
            class="bp-lists-in"
            v-for="(bpItem, bpIndex) in bpData.lists"
            :key="bpIndex"
          >
            <div class="bp-lists-in-title">{{ bpItem.title }}</div>
            <img :src="bpItem.imgUrl" alt="" />
          </div>
        </div>
      </div>
      <div class="principle">
        <div class="principle-title dentistryServices-title">
          <div class="dentistryServices-title-in bb">固定式牙箍原理</div>
        </div>
        <div v-if="windowWidth > 768">
          <div class="principle-topCon">
            固定式牙箍，專門用於調整和矯正牙齒，分為外箍和內箍兩種形式。
          </div>
          <div class="principle-in">
            <div class="principle-in-box">
              <img
                src="https://static.cmereye.com/imgs/2023/12/0454bdfcf890e755.jpg"
                alt="外箍式"
              />
              <div>外箍式</div>
              <div>
                將矯正器直接固定在牙面上，利用鐵線的彈性，讓牙齒逐步移動至理想位置。
              </div>
            </div>
            <div class="principle-in-box">
              <img
                src="https://static.cmereye.com/imgs/2023/12/f9bc442ec3785727.jpg"
                alt="內箍式"
              />
              <div>內箍式</div>
              <div>
                設計理念與外箍相似，區別在於牙箍被安裝在牙齒的內側，對於外觀的影響較小。
              </div>
            </div>
          </div>
          <div class="principle-bottomCon">
            <img src="@/assets/images/icon_13.png" alt="" />
            <div>
              在牙箍的材料選擇上，金屬、陶瓷、自鎖或舌側的牙箍，各有特色，可根據個人喜好或實際需求選擇。
            </div>
            <img src="@/assets/images/icon_13.png" alt="" />
          </div>
          <div class="principle-btn">
            <!-- <a :href="`https://api.whatsapp.com/send/?phone=${whatsAppNum}`">預約免費口腔檢查</a> -->
            <PageAnimBtnTypeTwo :str="'預約免費口腔檢查'" />
          </div>
        </div>
        <div class="mobile_principle" v-else>
          <div>
            固定式牙箍，專門用於調整和矯正牙齒，<br />
            分為外箍和內箍兩種形式。
          </div>
          <div>
            <div>
              設計理念與外箍相似，區別在於牙箍被安裝在牙齒的內側，對於外觀的影響較小。
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/0a07ddba2f382855.png"
                alt=""
              />
            </div>
            <div>
              將矯正器直接固定在牙面上，利用鐵線的彈性，讓牙齒逐步移動至理想位置。
            </div>
          </div>
          <div>
            在牙箍的材料選擇上，金屬、陶瓷、<br />
            自鎖或舌側的牙箍，各有特色，<br />
            可根據個人喜好或實際需求選擇。
          </div>
        </div>
      </div>
      <div class="differ">
        <div class="differ-title dentistryServices-title">
          <div class="dentistryServices-title-in bb" v-if="windowWidth > 768">
            {{ differData.title }}
          </div>
          <div
            v-else
            class="dentistryServices-title-in bb"
            style="font-size: 20px"
          >
            固定式牙箍與隱形牙箍的分別
          </div>
        </div>
        <div class="differ-context">
          <div
            v-for="(textItem, textIndex) in differData.text"
            :key="textIndex"
          >
            {{ textItem }}
          </div>
        </div>
        <div class="differ-lists">
          <div
            class="differ-lists-in"
            v-for="(listDatasItem, listDatasIndex) in differData.listDatas"
            :key="listDatasIndex"
          >
            <div>{{ listDatasItem.name }}</div>
            <div>{{ listDatasItem.firstText }}</div>
            <div>{{ listDatasItem.secondText }}</div>
          </div>
        </div>
      </div>
      <div class="aesthetics">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            <span>{{ aestheticsData.title }}</span>
          </div>
        </div>
        <div class="aesthetics-in">
          <div class="aesthetics-swiper">
            <div
              class="swiper-slide"
              v-for="(aestheticsItem, aestheticsIndex) in aestheticsData.lists"
              :key="aestheticsIndex"
            >
              <div class="swiper-slide-in">
                <img :src="aestheticsItem.imgUrl" alt="" />
                <div class="swiper-slide-in-title">
                  {{ aestheticsItem.title }}
                </div>
                <div class="swiper-slide-in-text">
                  {{ aestheticsItem.text }}
                </div>
              </div>
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
          <div class="step-lists" v-if="windowWidth > 768">
            <div
              v-for="(stepItem, stepIndex) in stepData.lists"
              :key="stepIndex"
              class="step-lists-in"
            >
              <div class="step-lists-in-l">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="" />
                  {{ stepItem.title }}
                </div>
                <div class="image"><img :src="stepItem.img" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
                <div class="context">{{ stepItem.context }}</div>
              </div>
              <div class="step-lists-in-r">
                <img src="@/assets/images/icon_12.png" alt="" />
              </div>
            </div>
            <div class="step-lists-in">
              <div class="lastBox-t">
                <!-- <div><img src="@/assets/images/icon_13.png" alt="" /></div>
                <div>療程最快<span>即日完成 !</span></div>
                <div><img src="@/assets/images/icon_13.png" alt="" /></div> -->
                <img
                  src="https://raw.gitmirror.com/CMER-SZ/picx-images-hosting/master/ckjhk/20231113_剝智慧齒後一勞永逸？-04-1.vy2qx2j4vkg.png"
                  alt=""
                />
              </div>
              <div class="lastBox-b">
                <!-- <span @click="toWhatsApp">預約免費口腔檢查</span> -->
                <PageAnimBtnTypeTwo :str="'預約免費口腔檢查'" />
              </div>
            </div>
          </div>
          <div class="step-lists" v-else>
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
        </div>
        <div class="lastBox-b" v-if="windowWidth < 768">
          <PageAnimBtnTypeTwo str="預約免費口腔檢查" />
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
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <NewAddress />
      <ContactForm-new2 class="contactForm" />
    </div>
    <PageFooter />
    <PageNewNavbarSide v-if="windowWidth > 768" />
    <PageNavbar v-else />
  </div>
</template>



<style lang="scss" scoped>
.banner-in-box {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 20.83vw;
  width: 55%;
  z-index: 10;
}
.banner-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 100%;
  & > div {
    display: flex;
    align-items: flex-end;
  }
  .content-remark {
    color: var(--White, #fff);
    text-align: right;
font-family: 'FakePearl-Regular';
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 54.4px */
    letter-spacing: 3.4px;
  }
  .content-title {
    color: var(--White, #fff);
    text-align: right;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: var(--White, #fff);
font-family: 'FakePearl-Regular';
    font-size: clamp(40px, 4.6vw, 110px);
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 176px */
    letter-spacing: 6.6px;
    position: relative;
    z-index: 6;
    bottom: -20px;
  }
  .content-title::after {
    content: '';
    display: inline-block;
    width: 98%;
    height: clamp(10px, 0.7vw, 15px);
    background: url('../../assets/images/2025010917480102.png') no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: -0.9375vw;
    box-sizing: border-box;
    left: 0;
    right: 0;
    z-index: 5;
  }
  .price-style {
    width: 17.0625vw;
    height: 10.145vw;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .content-price {
    color: var(--White, #fff);
    text-align: right;
font-family: 'FakePearl-Regular';
    font-size: clamp(20px, 2.9165vw, 56px);
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 89.6px */
    position: relative;
    bottom: 5px;
    & > div:not(:nth-child(2)) {
      padding-bottom: clamp(20px, 2.9165vw, 56px);
    }
  }
  .content-subscribe {
    color: var(--Theme-Color, #fc1682);
    text-align: center;
font-family: 'FakePearl-Regular';
    font-size: clamp(20px, 1.583vw, 40px);
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 64px */
    box-sizing: border-box;
    padding: 0 20px;
    width: fit-content;
    background: url('../../assets/images/2025010917480101.png') no-repeat;
    background-size: contain;
    background-position: center;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 7;
    right: 0;
    bottom: 10px;
  }
}
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
.youtobe-video {
  margin: 80px auto 0;
  max-width: 960px;
  width: 80%;
}

.youtobe-video-in {
  height: 0;
  padding-bottom: 56.4285714286%;
  position: relative;
  width: 100%;
}

.youtobe-video-in > iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.orthodonticsPage {
  background: #fff;
  padding: 70px 0;
  position: relative;
  z-index: 1;
}
.traffic {
  margin-top: 109px;
  & > div:nth-child(2) {
    color: var(--Theme-Color, #fc1682);
    text-align: center;
font-family: 'FakePearl-Regular';
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 65px */
    margin: 16px auto 40px;
  }
  .port-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 28px;
    max-width: 1066px;
    margin: 0 auto;
    & > div {
      display: flex;
      width: 510px;
      // max-width: 558px;
      & > div:nth-child(1) {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--White, #fff);
        text-align: center;
    font-family: 'FakePearl-Regular';
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 64px */
      }
      & > div:nth-child(2) {
        flex: 9;
        display: flex;
        align-items: center;
        gap: 0 12px;
        span {
          display: flex;
          align-items: center;
          i {
            font-style: normal;
          }
        }
        span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
      font-family: 'FakePearl-Regular';
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; /* 38.4px */
        }
        span:nth-child(4) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
      font-family: 'FakePearl-Regular';
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }
      }
    }
    & > div:nth-child(1),
    & > div:nth-child(4) {
      & > div:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
        background: var(--Theme-Color, #fc1682);
        width: 39px;
        // height: 100%;
        // min-height: 82px;
        min-height: max-content;
      }
      & > div:nth-child(2) {
        padding: 30px 16px;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        border: 2px solid var(--Theme-Color, #fc1682);
        background: var(--White, #fff);
      }
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      & > div:nth-child(1) {
        border-radius: 10px 0px 0px 10px;
        background: var(--Blue-Deep, #00aeff);
        width: 39px;
        // height: 100%;
        // min-height: 82px;
        min-height: max-content;
      }
      & > div:nth-child(2) {
        padding: 16px 30px;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        border: 2px solid var(--Blue-Deep, #00aeff);
        background: var(--White, #fff);
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        & > span {
          flex-direction: column;
          i {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        & > span:last-child {
          i {
            color: var(--Theme-Color, #fc1682);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        & > span:last-child {
          i {
            color: var(--Theme-Color, #fc1682);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
          }
        }
      }
    }
  }
}
.bp {
  margin-top: 176px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in {
      // min-width: 33.33%;
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title {
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #ffffff;
        background: var(--indexColor1);
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: var(--indexColor1) transparent transparent transparent;
        }
      }
      img {
        margin-top: 30px;
        width: 100%;
      }
      // &:last-child{
      //   padding: 0 39.5px;
      // }
    }
  }
}
.aesthetics {
  margin-top: 108px;
  &-in {
    margin-top: 40px;
    padding: 88px 0;
    background: linear-gradient(
      -99deg,
      rgba(252, 22, 130, 0.4) -0.55%,
      rgba(252, 22, 130, 0.28) -0.54%,
      rgba(255, 168, 198, 0) 99.3%
    );
  }
  &-swiper {
    padding-bottom: 10px;
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    display: flex;
    .swiper-slide {
      height: 100%;
      padding: 0 30px;
      width: calc(100% / 4);
      &-in {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25),
          inset 1px -1px 0px #ffccc7;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        height: auto;
        min-height: 485px;
        img {
          width: 100%;
          box-sizing: border-box;
          padding-left: 1px;
        }
        &-title {
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          text-align: center;
          color: var(--indexColor1);
          margin-top: 40px;
        }
        &-text {
          padding: 18px 34px 18px;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 160%;
          color: #666666;
          text-align: justify;
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
    margin: 54px auto 0;
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
            // background: #fff1f0;
            margin-bottom: 13px;
            border-radius: 10px;
            position: relative;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              // max-width: 90%;
              // max-height: 90%;
              width: 100%;
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
        margin-top: 51px;
      }
      &:nth-of-type(2n + 2) {
        & > div {
          .image {
            &-in {
              // background: #fee6f1;
            }
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
  // margin-top: 77px;
  &-in {
    width: 100%;
    max-width: 1444px;
    margin: 0 auto;
  }
  &-lists {
    margin-top: 98px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    gap: 0 40px;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-bottom: 0;
      }
      &:nth-of-type(3),
      &:nth-of-type(5) {
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
      &:nth-of-type(6) {
        // flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .lastBox-t {
          display: flex;
          align-items: flex-end;
        }
        .lastBox-b {
          margin-top: 15px;
        }
      }
    }
  }
}
.principle {
  &-topCon {
    color: #4d4d4d;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    margin-top: 30px;
  }
  &-in {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    &-box {
      width: 100%;
      max-width: 462px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-of-type(2) {
        margin-left: calc((89 / 1920) * 100%);
      }
      div {
        &:nth-of-type(1) {
          padding: 0 60px;
          margin: -18% auto 0;
          color: #fff;
          text-align: center;
          font-size: 35px;
          font-style: normal;
          font-weight: 900;
          line-height: 160%;
          background: #fc1682;
          border-radius: 30px;
          display: inline-block;
          filter: drop-shadow(0px 3.704px 7.409px rgba(252, 22, 130, 0.38));
        }
        &:nth-of-type(2) {
          margin-top: 63px;
          color: #4d4d4d;
          text-align: justify;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          padding: 0 40px;
        }
      }
    }
  }
  &-bottomCon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    img {
      width: 36px;
      height: 40px;
    }
    div {
      color: #fc1682;
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      width: 100%;
      max-width: 892px;
      margin-right: 26px;
      margin-left: 44px;
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    margin-top: 29px;
  }
}
.differ {
  margin-top: 136px;
  &-context {
    margin-top: 40px;
    text-align: center;
    color: #4d4d4d;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
  }
  &-lists {
    width: 100%;
    max-width: 1251px;
    margin: 40px auto 0;
    &-in {
      display: flex;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &:nth-of-type(odd) {
        & > div {
          background: #fdd3e3;
        }
      }
      &:nth-of-type(1) {
        & > div {
          background: none;
          padding: 0;
          justify-content: center;
          align-items: center;
          min-height: 45px;
          font-size: 28px;
          font-weight: 700;
        }
      }
      & > div {
        color: #4d4d4d;
        font-size: 20px;
        min-height: 112px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%;
        background: #fee6f1;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: pre-wrap;
        text-align: center;
        &:nth-of-type(1) {
          width: calc((102 / 1251) * 100%);
          border-radius: 60px 0 0 60px;
          justify-content: center;
        }
        &:nth-of-type(2) {
          width: calc((572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc((74 / 1251) * 100%);
        }
        &:nth-of-type(3) {
          width: calc((572 / 1251) * 100%);
          margin-left: 2.5px;
          padding: 0 calc((74 / 1251) * 100%);
          border-radius: 0 60px 60px 0;
        }
      }
    }
  }
}
.mobile-orthodontics {
  :deep(.introduce-in-l) {
    br {
      display: none;
    }
  }
}
.port-combo {
  margin-top: 88px;
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: relative;
      width: fit-content;
      margin: 0 auto;
      & > span:nth-child(1) {
        color: var(--Orange, #f90);
        font-family: var(--indexFontFamily);
        font-size: 62.931px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & > span:nth-child(2) {
        color: var(--Orange, #f90);
        font-family: var(--indexFontFamily);
        font-size: 38px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-bottom: 10px;
      }
      & > span:nth-child(3) {
        color: var(--Theme-Color, #fc1682);
        font-family: var(--indexFontFamily);
        font-size: 41.954px;
        font-style: normal;
        font-weight: 600;
        padding-bottom: 10px;
        line-height: normal;
      }
      & > span:nth-child(4) {
        color: var(--Theme-Color, #fc1682);
        font-family: var(--indexFontFamily);
        font-size: 69.923px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    & > div:nth-child(1)::before {
      content: '';
      background: url(https://static.cmereye.com/imgs/2024/12/5115a14ce57ce053.png)
        no-repeat;
      background-size: contain;
      width: 265px;
      height: 78px;
      position: absolute;
      left: -70%;
      top: 30%;
      transform: translateY(-50%);
    }
    & > div:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0 14px;
      max-width: 900px;
      margin: 10px auto;
      & > div {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: space-between;
        & > span:nth-child(1) {
          position: absolute;
          top: -10%;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
      font-family: 'FakePearl-Regular';
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%; /* 42.937px */
          letter-spacing: 2.067px;
        }
        & > span:nth-child(3) {
          color: var(--Theme-Color, #fc1682);
      font-family: 'FakePearl-Regular';
          font-size: 38.184px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%;
          text-align: center;
          i:nth-child(1) {
            color: var(--Theme-Color, #fc1682);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 24.095px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 44.952px */
          }
          i:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
        font-family: 'FakePearl-Regular';
            font-size: 22.081px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            letter-spacing: 2.408px;
          }
        }
        & > span:nth-child(4) {
          border-radius: 12.041px;
          background: var(--Theme-Color, #fc1682);
          box-sizing: border-box;
          padding: 0 15px;
          color: var(--White, #fff);
      font-family: 'FakePearl-Regular';
          font-size: 58.98px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          i {
            color: var(--White, #fff);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 28.095px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 44.952px */
          }
        }
      }
      & > div:nth-child(1) {
        border-radius: 20.068px;
        border: 2.007px solid var(--Theme-Color, #fc1682);
        background: var(--White, #fff);
        box-sizing: border-box;
        padding: 55px 15px 22px;
        & > span:nth-child(1) {
          color: var(--White, #fff);
          text-align: center;
      font-family: 'FakePearl-Regular';
          font-size: 30.669px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 49.071px */
          letter-spacing: 2.067px;
          border-radius: 12.041px;
          background: var(--Theme-Color, #fc1682);
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          box-sizing: border-box;
          padding: 0 15px;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
      font-family: 'FakePearl-Regular';
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%; /* 42.937px */
          letter-spacing: 2.067px;
        }
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        margin-top: 20px;
        border-radius: 17.013px;
        border: 1.701px solid var(--Orange, #f90);
        background: var(--White, #fff);
        box-sizing: border-box;
        padding: 30px 15px 18px;
        & > span:nth-child(1) {
          color: var(--White, #fff);
          text-align: center;
      font-family: 'FakePearl-Regular';
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 41.6px */
          letter-spacing: 2.6px;
          border-radius: 10.208px;
          background: var(--Orange, #f90);
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          box-sizing: border-box;
          padding: 0 15px;
        }
        & > span:nth-child(3) {
          color: var(--Orange, #f90);
      font-family: 'FakePearl-Regular';
          font-size: 38.184px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%;
          text-align: center;
          i:nth-child(1) {
            color: var(--Orange, #f90);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 24.095px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 44.952px */
          }
          i:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
        font-family: 'FakePearl-Regular';
            font-size: 22.081px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            letter-spacing: 2.408px;
          }
        }
        & > span:nth-child(4) {
          border-radius: 12.041px;
          background: var(--Orange, #f90);
          box-sizing: border-box;
          padding: 0 15px;
          color: var(--White, #fff);
      font-family: 'FakePearl-Regular';
          font-size: 58.98px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          i {
            color: var(--White, #fff);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 28.095px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 44.952px */
          }
        }
      }
      & > div:nth-child(4) {
        margin-top: 20px;
        border-radius: 17.013px;
        border: 1.701px solid var(--Orange, #f90);
        background: var(--White, #fff);
        box-sizing: border-box;
        padding: 30px 15px 18px;
        position: relative;
        & > span:nth-child(1) {
          position: relative;
          top: 0;
        }
        & > span:nth-child(4) {
          color: var(--Orange, #f90);
          background: transparent;
          i {
            font-size: 22.081px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
            letter-spacing: 2.408px;
          }
        }
      }
      & > div:nth-child(4)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2024/12/5695ec6f720ab1f7.png)
          no-repeat;
        background-size: contain;
        width: 296px;
        height: 162px;
        position: absolute;
        top: -61%;
        left: 0%;
      }
    }
    & > a {
      color: var(--White, #fff);
      text-align: center;

      /* PC/SubHead-PC */
  font-family: 'FakePearl-Regular';
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 13px 32px;
      border-radius: 100.806px;
      background: var(--Theme-Color, #fc1682);
      box-shadow: 1.925px 3.851px 32.924px 0px rgba(252, 22, 130, 0.5);
      width: fit-content;
      margin: 60px auto;
      position: relative;
    }
    & > a::before {
      content: '';
      position: absolute;
      top: -20px;
      right: -50%;
      width: 233px;
      height: 64px;
      background: url(https://static.cmereye.com/imgs/2024/12/a0961ad6ab44e4cf.png)
        no-repeat;
      background-size: contain;
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .port-combo {
    margin-top: 88px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;
        width: fit-content;
        margin: 0 auto;
        & > span:nth-child(1) {
          color: var(--Orange, #f90);
          font-family: var(--indexFontFamily);
          font-size: 62.931px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        & > span:nth-child(2) {
          color: var(--Orange, #f90);
          font-family: var(--indexFontFamily);
          font-size: 38px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          padding-bottom: 10px;
        }
        & > span:nth-child(3) {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 41.954px;
          font-style: normal;
          font-weight: 600;
          padding-bottom: 10px;
          line-height: normal;
        }
        & > span:nth-child(4) {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 69.923px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
      & > div:nth-child(1)::before {
        content: '';
        background: url(https://static.cmereye.com/imgs/2024/12/5115a14ce57ce053.png)
          no-repeat;
        background-size: contain;
        width: 265px;
        height: 78px;
        position: absolute;
        left: -70%;
        top: 30%;
        transform: translateY(-50%);
      }
      & > div:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0 14px;
        max-width: 900px;
        margin: 10px auto;
        & > div {
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          justify-content: space-between;
          & > span:nth-child(1) {
            position: absolute;
            top: -10%;
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 42.937px */
            letter-spacing: 2.067px;
          }
          & > span:nth-child(3) {
            color: var(--Theme-Color, #fc1682);
        font-family: 'FakePearl-Regular';
            font-size: 38.184px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
            text-align: center;
            i:nth-child(1) {
              color: var(--Theme-Color, #fc1682);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 24.095px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 44.952px */
            }
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
          font-family: 'FakePearl-Regular';
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
          & > span:nth-child(4) {
            border-radius: 12.041px;
            background: var(--Theme-Color, #fc1682);
            box-sizing: border-box;
            padding: 0 15px;
            color: var(--White, #fff);
        font-family: 'FakePearl-Regular';
            font-size: 58.98px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            i {
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 28.095px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.952px */
            }
          }
        }
        & > div:nth-child(1) {
          border-radius: 20.068px;
          border: 2.007px solid var(--Theme-Color, #fc1682);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 55px 15px 22px;
          & > span:nth-child(1) {
            color: var(--White, #fff);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 30.669px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 49.071px */
            letter-spacing: 2.067px;
            border-radius: 12.041px;
            background: var(--Theme-Color, #fc1682);
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            box-sizing: border-box;
            padding: 0 15px;
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%; /* 42.937px */
            letter-spacing: 2.067px;
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          margin-top: 20px;
          border-radius: 17.013px;
          border: 1.701px solid var(--Orange, #f90);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 30px 15px 18px;
          & > span:nth-child(1) {
            color: var(--White, #fff);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 41.6px */
            letter-spacing: 2.6px;
            border-radius: 10.208px;
            background: var(--Orange, #f90);
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            box-sizing: border-box;
            padding: 0 15px;
          }
          & > span:nth-child(3) {
            color: var(--Orange, #f90);
        font-family: 'FakePearl-Regular';
            font-size: 38.184px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
            text-align: center;
            i:nth-child(1) {
              color: var(--Orange, #f90);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 24.095px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 44.952px */
            }
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
          font-family: 'FakePearl-Regular';
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
          & > span:nth-child(4) {
            border-radius: 12.041px;
            background: var(--Orange, #f90);
            box-sizing: border-box;
            padding: 0 15px;
            color: var(--White, #fff);
        font-family: 'FakePearl-Regular';
            font-size: 58.98px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            i {
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 28.095px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.952px */
            }
          }
        }
        & > div:nth-child(4) {
          margin-top: 20px;
          border-radius: 17.013px;
          border: 1.701px solid var(--Orange, #f90);
          background: var(--White, #fff);
          box-sizing: border-box;
          padding: 30px 15px 18px;
          position: relative;
          & > span:nth-child(1) {
            position: relative;
            top: 0;
          }
          & > span:nth-child(4) {
            color: var(--Orange, #f90);
            background: transparent;
            i {
              font-size: 22.081px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 2.408px;
            }
          }
        }
        & > div:nth-child(4)::before {
          content: '';
          background: url(https://static.cmereye.com/imgs/2024/12/5695ec6f720ab1f7.png)
            no-repeat;
          background-size: contain;
          width: 296px;
          height: 162px;
          position: absolute;
          top: -61%;
          left: 0%;
        }
      }
      & > a {
        color: var(--White, #fff);
        text-align: center;

        /* PC/SubHead-PC */
    font-family: 'FakePearl-Regular';
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 13px 32px;
        border-radius: 100.806px;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 1.925px 3.851px 32.924px 0px rgba(252, 22, 130, 0.5);
        width: fit-content;
        margin: 60px auto;
        position: relative;
      }
      & > a::before {
        content: '';
        position: absolute;
        top: -20px;
        right: -50%;
        width: 233px;
        height: 64px;
        background: url(https://static.cmereye.com/imgs/2024/12/a0961ad6ab44e4cf.png)
          no-repeat;
        background-size: contain;
      }
    }
  }
  .bp {
    margin-top: 9.1667vw;
    &-lists {
      max-width: 57.2917vw;
      margin: 3.125vw auto;
      &-in {
        padding: 0 1.9vw 4.9839vw;
        &-title {
          min-width: 8.5938vw;
          height: 2.0833vw;
          line-height: 2.0833vw;
          font-size: 1.0417vw;
          &::after {
            bottom: -2vw;
            border-top: 1.0417vw solid;
            border-left: 0.4167vw solid;
            border-right: 0.4167vw solid;
            border-bottom: 1.0417vw solid;
            border-color: var(--indexColor1) transparent transparent transparent;
          }
        }
        img {
          margin-top: 1.5625vw;
        }
      }
    }
  }
  .principle {
    &-topCon {
      font-size: 1.4583vw;
      margin-top: 1.5625vw;
    }
    &-in {
      margin-top: 2.0833vw;
      &-box {
        max-width: 24.0625vw;
        div {
          &:nth-of-type(1) {
            padding: 0 3.125vw;
            font-size: 1.8229vw;
            border-radius: 1.5625vw;
            filter: drop-shadow(0px 0.1929vw 0.3859vw rgba(252, 22, 130, 0.38));
          }
          &:nth-of-type(2) {
            margin-top: 3.2813vw;
            font-size: 1.4583vw;
            padding: 0 2.0833vw;
          }
        }
      }
    }
    &-bottomCon {
      margin-top: 4.4271vw;
      img {
        width: 1.875vw;
        height: 2.0833vw;
      }
      div {
        font-size: 1.8229vw;
        max-width: 46.4583vw;
        margin-right: 1.3542vw;
        margin-left: 2.2917vw;
      }
    }
    &-btn {
      margin-top: 1.5104vw;
    }
  }
  .differ {
    margin-top: 7.0833vw;
    &-context {
      margin-top: 2.0833vw;
      font-size: 1.4583vw;
    }
    &-lists {
      max-width: 65.1563vw;
      margin: 2.0833vw auto 0;
      &-in {
        &:not(:last-child) {
          margin-bottom: 0.7813vw;
        }
        &:nth-of-type(1) {
          & > div {
            min-height: 2.3438vw;
            font-size: 1.4583vw;
          }
        }
        & > div {
          font-size: 1.0417vw;
          min-height: 5.8333vw;
          &:nth-of-type(1) {
            border-radius: 3.125vw 0 0 3.125vw;
          }
          &:nth-of-type(2) {
            margin-left: 0.1302vw;
          }
          &:nth-of-type(3) {
            margin-left: 0.1302vw;
            border-radius: 0 3.125vw 3.125vw 0;
          }
        }
      }
    }
  }
  .aesthetics {
    margin-top: 5.625vw;
    &-in {
      margin-top: 2.0833vw;
      padding: 4.5833vw 0;
      background: linear-gradient(
        -99deg,
        rgba(252, 22, 130, 0.4) -0.55%,
        rgba(252, 22, 130, 0.28) -0.54%,
        rgba(255, 168, 198, 0) 99.3%
      );
    }
    &-swiper {
      padding-bottom: 0.5208vw;
      max-width: 78.75vw;
      .swiper-slide {
        padding: 0 1.5625vw;
        &-in {
          box-shadow: 0.2083vw 0.2083vw 0.3125vw rgba(255, 163, 158, 0.25),
            inset 1px -1px 0px #ffccc7;
          border-radius: 0.7813vw;
          min-height: 25.2604vw;
          &-title {
            font-size: 1.4583vw;
            margin-top: 2.0833vw;
          }
          &-text {
            padding: 0.9375vw 1.7708vw 0.9375vw;
            font-size: 0.9375vw;
          }
        }
      }
    }
  }
  .step {
    padding: 3.1771vw 0 7.2917vw;
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
        &:nth-of-type(6) {
          .lastBox-b {
            margin-top: 0.7813vw;
          }
          .lastBox-t {
            img {
              width: 9.6875vw;
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
      margin: 2.8125vw auto 0;
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
          margin-top: 2.6563vw;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  :deep(.explain_box_mobile) {
    top: 110px !important;
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
      left: 0;
      right: auto;
      bottom: -20px;
      position: absolute;
      top: auto;
      z-index: 35;
    }
  }
  .dentistryServices-title-in.bb span {
    font-size: 20px;
  }
  .mobile-orthodontics {
    :deep(.introduce-in-l) {
      position: absolute;
      top: 14.665vw;
      br {
        display: block;
      }
      .title {
        color: var(--Grey-Deep, #4d4d4d);
        /* Headline-MB */
    font-family: 'FakePearl-Regular';
        font-size: 6.933vw;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
      }
      .content {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
    font-family: 'FakePearl-Regular';
        font-size: 4.2665vw;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
      }
    }
  }
  .youtobe-video {
    width: 100%;
    padding: 2.665vw 1.6vw;
    border-top: 1px solid #fc1682;
    border-bottom: 1px solid #fc1682;
    & > div {
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 23px;
    }
    position: relative;
  }
  .youtobe-video::before {
    content: '';
    color: #fff;
    text-align: center;
font-family: 'FakePearl-Regular';
    font-size: 5.33vw;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: url('https://static.cmereye.com/imgs/2024/08/70f1f6dc03eb021b.png')
      no-repeat;
    display: flex;
    width: 19.4665vw;
    height: 19.4665vw;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    animation: youtube_bg 3s linear infinite;
    background-position: center center;
  }
  .youtobe-video::after {
    content: '優惠';
    color: #fff;
    text-align: center;
font-family: 'FakePearl-Regular';
    font-size: 5.33vw;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    position: absolute;
    top: -12%;
    left: 50%;
    z-index: 5;
    transform: translateX(-50%);
  }
  @keyframes youtube_bg {
    0% {
      transform: translateX(-50%) rotate(0);
      top: -20%;
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
      top: -20%;
    }
  }
  .orthodonticsPage {
    padding: 14vw 0 24vw 0;
  }
  .bp {
    margin-top: 52px;
    &-lists {
      display: grid;
      grid-template-columns: auto auto;
      width: 100%;
      box-sizing: border-box;
      padding: 0 2.665vw;
      max-width: 100%;
      gap: 5.33vw 4.8vw;
      &-in {
        width: 100%;
        padding: 0;
        justify-content: space-between;
        & > img {
          width: 46.665vw;
        }
        &-title {
          font-size: 5.33vw;
          height: 10.665vw;
          min-width: 44vw;
        }
      }
    }
  }
  .aesthetics {
    margin-top: 52px;
    &-in {
      margin-top: 28px;
      padding: 44px 0;
      background: transparent;
    }
    &-swiper {
      flex-direction: column;
      padding-bottom: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3.328vw 3.328vw;
      box-sizing: border-box;
      padding: 0 5.33vw;
      .swiper-slide {
        width: 100%;
        &:not(:first-child) {
          margin-top: 0;
        }
        padding: 0;
        &-in {
          min-height: 73.865vw;
          &-title {
            margin-top: 5.33vw;
            color: var(--Theme-Color, #fc1682);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 4vw;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 24px */
            letter-spacing: 1.5px;
          }
          &-text {
            margin-top: 2.665vw;
            padding: 0 4.8vw;
            box-sizing: border-box;
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
        font-family: 'FakePearl-Regular';
            font-size: 3.2vw;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
        }
      }
    }
  }
  .care {
    margin-top: 40px;
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
          }
        }
        &:nth-of-type(1) {
          & > div {
            .text {
              padding: 0 30px;
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
  }
  .step {
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
    margin-top: 52px;
    padding: 0 0 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 40px 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        &:nth-of-type(n + 4) {
          margin-bottom: 30px;
        }
        &:nth-of-type(3) {
          .step-lists-in-r {
            // display: block;
            margin-top: 0;
          }
        }
        &-l {
          max-height: 140px;
          .title {
            padding: 0;
            font-size: 26px;
          }
          .image {
            padding: 0;
          }
          .name {
            margin-top: -25px;
            font-size: 16px;
            clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
          }
          .context {
            font-size: 16px;
            padding: 0;
          }
        }
        &-r {
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(6) {
          margin-top: 15px;
          width: 100%;
          .lastBox-t {
            img {
              width: 125px;
            }
          }
          .lastBox-b {
            margin-top: 20px;
          }
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
    height: 190vw;
    top: 10%;
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
      margin: 12px 8vw 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: 0 20px;
      &-in {
        width: calc(140 / 375 * 100vw);
        margin-bottom: 0;
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
            background-size: contain;
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
        font-family: 'FakePearl-Regular';
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
        font-family: 'FakePearl-Regular';
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
        margin-top: 40px;
      }
      & > div:nth-child(7) {
        margin-top: 20px;
      }
      & > div:nth-child(even) {
        margin-top: 120px;
      }
    }
    .lastBox-b {
      margin: 50px auto 0;
      display: flex;
      justify-content: center;
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
  .principle {
    padding: 0;
    box-sizing: border-box;
    &-topCon {
      font-size: 4.2665vw;
      font-weight: 500;
    }
    &-in {
      flex-direction: column;
      &-box {
        &:nth-of-type(2) {
          margin-left: 0;
          margin-top: 11.73vw;
        }
        div {
          &:nth-of-type(1) {
            font-size: 5.33vw;
            padding: 0.8vw 13.33vw;
          }
          &:nth-of-type(2) {
            font-size: 5.33vw;
            margin-top: 11.465vw;
            padding: 0 8vw;
          }
        }
      }
    }
    &-bottomCon {
      margin-top: 60px;
      img {
        width: 5.33vw;
        height: 5.8665vw;
      }
      div {
        font-size: 4.2665vw;
        margin-right: 4.8vw;
        margin-left: 4.53vw;
      }
    }
    &-btn {
      margin-top: 11.73vw;
      // a{
      //   font-size: 20px;
      //   padding: 5px 45px;
      // }
    }
  }
  .mobile_principle {
    margin-top: 31px;
    & > div:nth-child(1),
    & > div:nth-child(3) {
      box-sizing: border-box;
      padding: 0 6.665vw;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 4.265vw;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 32px */
      letter-spacing: 1.6px;
    }
    & > div:nth-child(2) {
      margin: 2.665vw 0;
      position: relative;
      padding: 13.33vw 0;

      & > div:nth-child(1),
      & > div:nth-child(3) {
        box-sizing: border-box;
        padding: 0 8vw;
        width: 64vw;
        position: absolute;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
    font-family: 'FakePearl-Regular';
        font-size: 3.2vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
      }
      & > div:nth-child(1) {
        left: 0;
        top: 8vw;
      }
      & > div:nth-child(3) {
        right: 0;
        bottom: 8vw;
      }
      & > div:nth-child(2) {
        margin: 0 auto;
        & > img {
          margin: 0 auto;
        }
      }
    }
  }
  .differ {
    margin-top: 52px;
    &-context {
      font-size: 16px;
      white-space: pre-wrap;
    }
    &-lists {
      padding: 0 30px;
      &-in {
        &:not(:last-child) {
          margin-bottom: 4px;
        }
        & > div {
          font-size: 12px;
          box-sizing: border-box;
          min-height: auto;
          &:nth-of-type(1) {
            border-radius: 0;
            // margin-left: 1px;
            padding: 20px 10px;
            font-size: 16px;
            width: auto;
            flex: 1;
            text-align: center;
            color: var(--Theme-Color, #fc1682);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
          &:nth-of-type(2) {
            padding: 20px 14px;
            margin-left: 1px;
            width: calc((127 / 315) * 100%);
            color: var(--Grey-Deep, #4d4d4d);
        font-family: 'FakePearl-Regular';
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
          &:nth-of-type(3) {
            border-radius: 0;
            margin-left: 1px;
            padding: 20px 14px;
            width: calc((127 / 315) * 100%);

            color: var(--Grey-Deep, #4d4d4d);
        font-family: 'FakePearl-Regular';
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
        }
        &:nth-of-type(1) {
          & > div {
            font-size: 16px;
            padding: 0;
            background: #fc1682;
            color: var(--White, #fff);
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 24px */
            letter-spacing: 1.5px;
            &:nth-of-type(1) {
              border-radius: 20px 0 0 0;
            }
            &:nth-of-type(3) {
              border-radius: 0 20px 0 0;
            }
          }
        }
        &:nth-of-type(2) {
          & > div {
            &:nth-of-type(1) {
              border-radius: 0 0 0 0;
            }
            &:nth-of-type(3) {
              border-radius: 0 0 0 0;
            }
          }
        }
        &:last-child {
          & > div {
            &:nth-of-type(1) {
              border-radius: 0 0 0 20px;
            }
            &:nth-of-type(3) {
              border-radius: 0 0 20px 0;
            }
          }
        }
      }
    }
  }
  .contactForm {
    :deep(.contactForm-bg) {
      background: linear-gradient(
        270deg,
        rgba(255, 241, 240, 0) 2.6%,
        rgba(255, 241, 240, 0.7) 23.89%,
        rgba(255, 241, 240, 0.7) 75.33%,
        rgba(255, 241, 240, 0) 97.4%
      );
    }
  }
  .traffic {
    margin-top: 30px;
    & > div:nth-child(2) {
      color: var(--Theme-Color, #fc1682);
      text-align: center;
  font-family: 'FakePearl-Regular';
      font-size: 5.128vw;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 32px */
      margin: 1.28vw auto 3.58vw;
    }
    .port-list {
      display: flex;
      flex-direction: column;
      max-width: 100vw;
      box-sizing: border-box;
      padding: 0 4.015vw;
      & > div {
        width: 100%;
        max-width: 100vw;
        box-sizing: border-box;
        & > div:nth-child(1) {
          width: 4.872vw !important;
          border-radius: 2.564vw 0px 0px 2.564vw;
          background: var(--Theme-Color, #fc1682);
        }
        & > div:nth-child(2) {
          padding: 5.128vw 2.05vw !important;
          gap: 0 2.05vw;
          & > span:nth-child(1) {
            width: 4.35vw;
            height: 6.15vw;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
        font-family: 'FakePearl-Regular';
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
        font-family: 'FakePearl-Regular';
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
          & > span:nth-child(3) {
            width: 11.5vw;
            height: 6.15vw;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > span:nth-child(4) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
        font-family: 'FakePearl-Regular';
            font-size: 4.015vw;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 24px */
            i {
              color: var(--Theme-Color, #fc1682) !important;
              font-size: 4.015vw !important;
              font-style: normal;
            }
            img {
              width: 4.87vw;
              height: 4.87vw;
              object-fit: contain;
            }
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > span:nth-child(4) {
            i {
              color: #00aeff !important;
            }
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          background: var(--Theme-Color, #fc1682);
        }
        & > div:nth-child(2) {
          border-radius: 0px 2.564vw 2.564vw 0px;
          border: 2px solid var(--Theme-Color, #fc1682);
          background: var(--White, #fff);
          & > span:nth-child(4) {
            i:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d) !important;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          background: var(--Blue-Deep, #00aeff);
        }
        & > div:nth-child(2) {
          border-radius: 0px 2.564vw 2.564vw 0px;
          border: 2px solid var(--Blue-Deep, #00aeff);
          background: var(--White, #fff);
          padding: 5.128vw 0px 5.128vw 2.05vw !important;
          & > span:nth-child(4) {
            display: flex;
            align-items: center;
            i {
              color: #00aeff !important;
            }
          }
        }
      }
    }
    .port-combo_mb {
      margin-top: 10.25vw;
      & > div:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        box-sizing: border-box;
        padding: 0 3.846vw;
        margin: 6.15vw auto 17.948vw;
        gap: 0 1.28vw;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          gap: 9.48vw 0;
          & > div:nth-child(1) {
            border-radius: 2.892vw;
            border: 1.128px solid var(--Theme-Color, #fc1682);
            background: var(--White, #fff);
            position: relative;
            box-sizing: border-box;
            padding: 5.128vw 1.79vw 2.307vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            & > span:nth-child(1) {
              position: absolute;
              top: -10%;
              left: 50%;
              transform: translateX(-50%);
              width: max-content;
              box-sizing: border-box;
              padding: 0 9px;
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 4.015vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
              border-radius: 6px;
              background: var(--Theme-Color, #fc1682);
            }
            & > span:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 4.015vw;
              font-style: normal;
              font-weight: 400;
              line-height: 120%; /* 14.4px */
              letter-spacing: 1.2px;
            }
            & > span:nth-child(3) {
              color: var(--Theme-Color, #fc1682);
          font-family: 'FakePearl-Regular';
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              text-align: center;
              i:nth-child(1) {
                color: var(--Theme-Color, #fc1682);
                text-align: center;
            font-family: 'FakePearl-Regular';
                font-size: 4.015vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
              i:nth-child(2) {
                color: var(--Theme-Color, #fc1682);
                text-align: center;
            font-family: 'FakePearl-Regular';
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
            }
            & > span:nth-child(4) {
              border-radius: 1.58vw;
              background: var(--Theme-Color, #fc1682);
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 3.58vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 22.4px */
              box-sizing: border-box;
              padding: 0 3.33vw;
              color: var(--White, #fff);
          font-family: 'FakePearl-Regular';
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              i {
                color: var(--White, #fff);
            font-family: 'FakePearl-Regular';
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;
              }
            }
          }
          & > div:nth-child(2) {
            position: relative;
          }
          & > div:nth-child(2)::after {
            content: '';
            width: 25.64vw;
            height: 8.97vw;
            background: url(https://static.cmereye.com/imgs/2024/12/fd7b50d5dae7aead.png)
              no-repeat;
            background-size: contain;
            bottom: -30%;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
          }
        }
        & > div:nth-child(2) {
          gap: 7.69vw 0;
          display: flex;
          flex-direction: column;
          margin-top: 2.564vw;
          & > div {
            border-radius: 2.564vw;
            border: 1px solid var(--Orange, #f90);
            background: var(--White, #fff);
            position: relative;
            box-sizing: border-box;
            padding: 5.128vw 1.79vw 2.3vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            & > span:nth-child(1) {
              position: absolute;
              top: -10%;
              left: 50%;
              transform: translateX(-50%);
              width: max-content;
              box-sizing: border-box;
              padding: 0 2.3vw;
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 3.07vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
              border-radius: 6px;
              background: var(--Orange, #f90);
            }
            & > span:nth-child(2) {
              color: var(--Grey-Deep, #4d4d4d);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 3.07vw;
              font-style: normal;
              font-weight: 400;
              line-height: 120%; /* 14.4px */
              letter-spacing: 1.2px;
            }
            & > span:nth-child(3) {
              color: var(--Orange, #f90);
          font-family: 'FakePearl-Regular';
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              text-align: center;
              i:nth-child(1) {
                color: var(--Orange, #f90);
                text-align: center;
            font-family: 'FakePearl-Regular';
                font-size: 3.07vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
              i:nth-child(2) {
                color: var(--Orange, #f90);
                text-align: center;
            font-family: 'FakePearl-Regular';
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 22.4px */
              }
            }
            & > span:nth-child(4) {
              border-radius: 6px;
              background: var(--Orange, #f90);
              color: var(--White, #fff);
              text-align: center;
          font-family: 'FakePearl-Regular';
              font-size: 3.58vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 22.4px */
              box-sizing: border-box;
              padding: 0 3.33vw;
              color: var(--White, #fff);
          font-family: 'FakePearl-Regular';
              font-size: 4.1vw;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              i {
                color: var(--White, #fff);
            font-family: 'FakePearl-Regular';
                font-size: 2.564vw;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;
              }
            }
          }
        }
        & > div:nth-child(3) {
          box-sizing: border-box;
          margin-top: 2.564vw;
          & > div:nth-child(2) {
            padding: 2.3vw 2.05vw;
            border-radius: 2.564vw;
            border: 1px solid var(--Orange, #f90);
            background: var(--White, #fff);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            & > span:nth-child(3) {
              width: 10.07vw;
              height: 8.97vw;
              display: flex;
              align-items: center;
              justify-content: center;
              & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
      & > a {
        border-radius: 4.1vw;
        background: var(--Theme-Color, #fc1682);

        /* Pink Glory */
        box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);

        color: var(--White, #fff);
        text-align: center;
    font-family: 'FakePearl-Regular';
        font-size: 4.1vw;
        font-style: normal;
        font-weight: 500;
        line-height: 130%; /* 20.8px */
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 1.79vw 4.358vw;
        position: relative;
      }
      & > a::before {
        content: '';
        background: url(https://statichk.cmermedical.com/ckj/image/3202412190223503.svg)
          no-repeat;
        background-size: contain;
        width: 25.64vw;
        height: 12.8vw;
        position: absolute;
        top: -90%;
        left: 70%;
      }
    }
  }
  .banner-in-box {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100vw;
    width: 100%;
    z-index: 22;
    box-sizing: border-box;
    padding-left: 20px;
    padding-bottom: 35px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .banner-content {
    align-items: flex-start;
    justify-content: flex-end;
    .content-remark {
      color: var(--White, #fff);
  font-family: 'FakePearl-Regular';
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 38.4px */
      letter-spacing: -0.48px;
      position: relative;
      bottom: -10px;
    }
    .content-title {
      color: var(--White, #fff);
      text-align: right;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%; /* 72px */
      letter-spacing: 2.7px;
      position: relative;
      z-index: 6;
      bottom: 0;
    }
    .content-title::after {
      content: '';
      display: inline-block;
      width: 98%;
      height: clamp(10px, 0.7vw, 15px);
      background: url('../../assets/images/2025010917480102.png') no-repeat;
      background-size: 100%;
      position: absolute;
      bottom: -3.9375vw;
      box-sizing: border-box;
      left: 0;
      right: 0;
      z-index: 5;
    }
    .content-price {
      & > div:not(:nth-child(2)) {
        padding-bottom: 22px;
      }
    }
    .price-style {
      width: 150px;
      height: 90px;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .content-subscribe {
      position: relative;
      z-index: 10;
      bottom: -10px;
      color: var(--Theme-Color, #fc1682);
      text-align: center;
  font-family: 'FakePearl-Regular';
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%;
    }
  }
}
</style>
