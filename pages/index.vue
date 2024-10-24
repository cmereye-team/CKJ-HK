<script lang="ts" setup>
import gsap from 'gsap'
import { Autoplay } from 'swiper'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding, useWindowSize } from '@vueuse/core'
import { use } from 'chai'
const appState = useAppState()
const { t } = useLang()
useHead({
  title: 'CKJ愛康健齒科連鎖 | 香港官方網站 | 長者醫療券大灣區試點',
  titleTemplate: '',
  meta: [
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
  ],
})

const caseSharingLists = [
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/72a1864e2021e804.jpg',
  },
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1fab4a43cdea943.jpg',
  },
]

const caseSharingTopData = {
  type: 'pages.index.caseSharing.caseSharingTopData.type',
  name: 'pages.index.caseSharing.caseSharingTopData.name',
  skill: 'pages.index.caseSharing.caseSharingTopData.skill',
  process: 'pages.index.caseSharing.caseSharingTopData.process',
  text: 'pages.index.caseSharing.caseSharingTopData.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png',
}

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
const onSlideDoctorTeamSwiperChange = (swiper: any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

let areaTabCurNum = computed(() => {
  return appState.areaTabCurNum
})

const treatmentData = [
  {
    name: '接診人數',
    num: '259,376',
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_1.svg',
    left: '30%',
    top: '-31%',
  },
  {
    name: '已修復牙冠',
    num: '25,295',
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_3.svg',
    left: '15%',
    top: '50%',
  },
  {
    name: '種植牙數',
    num: '27,008',
    bg: 'https://static.cmereye.com/imgs/2024/01/5bc753351f96d0d0.png',
    left: '15%',
    top: '-10%',
  },
  {
    name: '全瓷貼面數',
    num: '3,336',
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_4.svg',
    left: '53%',
    top: '-3%',
  },
]
let showTreatment = ref(false)
const scrollWatch = () => {
  let _dome: any = document.getElementsByClassName('treatment-data')
  let _offsetTop = 0
  if (_dome && _dome.length) {
    _offsetTop = _dome[0].offsetTop
  }
  if (
    _offsetTop >= window.pageYOffset &&
    _offsetTop + 200 <= window.pageYOffset + window.innerHeight
  ) {
    showTreatment.value = true
  }
}
onMounted(() => {
  scrollWatch()
  window.addEventListener('scroll', scrollWatch)
})

watch(
  areaTabCurNum,
  (newValue, oldValue) => {
    changeAreaTabCur(newValue)
  },
  {
    deep: true,
  }
)

const headerConfigData = {
  img: 'https://static.cmereye.com/imgs/2024/02/5605cbd7689de37c.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/216458f63817b47e.jpg',
  pageName: 'course-new',
  pcText: ['重拾自信笑容', '愛牙愛己，由你做起'],
  mbText: ['重拾自信笑容', '愛牙愛己，由你做起'],
}

let dentalProfessionCur = ref('0')
const dentalProfessionList = [
  {
    id: '101',
    name: '種植科',
  },
  {
    id: '102',
    name: '修復科',
  },
  {
    id: '103',
    name: '矯正科',
  },
  {
    id: '104',
    name: '牙髓病科',
  },
  {
    id: '105',
    name: '牙周病科',
  },
  {
    id: '106',
    name: '兒童牙科',
  },
  {
    id: '107',
    name: '口腔頜面外科',
  },
]

let doctorCur = ref('')

let actDoctorListd: any = ref([])

const changleDoctorLists: any = () => {
  let a = doctorLists_cs[appState.areaTabCurNum]
  let b =
    a.filter((temp: any) => {
      return (
        temp.dentalProfessionId.includes(dentalProfessionCur.value) &&
        temp.isIndexShow
      )
    }) || []
  actDoctorListd.value = b
}
let loading = ref(false)
const handletab2 = async (id: string, dpc: Boolean = false) => {
  if (!dpc && dentalProfessionCur.value === id) return
  actDoctorListd.value = []
  loading.value = true
  setTimeout(() => {
    dentalProfessionCur.value = id
    changleDoctorLists()
    doctorCur.value =
      actDoctorListd.value.length > 0 ? actDoctorListd.value[0].id : ''
    nextTick(() => {
      doctorItemSwiper.slideToLoop('0')
    })
    loading.value = false
  }, 500)
}
const changeAreaTabCur = (_idx: any) => {
  if (_idx === 3) {
    handletab2('102', true)
  } else {
    handletab2('101', true)
  }
}
const handleDoctorItem = (id: any) => {
  doctorCur.value = id
  let _idx = actDoctorListd.value.findIndex((item) => item.id === id) || 0
  doctorItemSwiper.slideToLoop(_idx)
}
let doctorItemSwiper: any = {
  slideToLoop: (a) => {},
}

const setDoctorItemSwiper = (swiper: any) => {
  doctorItemSwiper = swiper
}
const doctorItemSlideChange = (swiper) => {
  nextTick(() => {
    doctorCur.value = actDoctorListd.value[swiper.realIndex].id || ''
    doctorTabSwiper_pc.slideToLoop(swiper.realIndex)
    doctorTabSwiper_mb.slideToLoop(swiper.realIndex)
  })
}
let doctorTabSwiper_pc = {
  slideToLoop: (a) => {},
}
let doctorTabSwiper_mb = {
  slideToLoop: (a) => {},
}
const setDoctorTabSwiperRef_pc = (swiper: any) => {
  doctorTabSwiper_pc = swiper
}
const setDoctorTabSwiperRef_mb = (swiper: any) => {
  doctorTabSwiper_mb = swiper
}
const changeDentalProfessionList = () => {
  let _lists: any = []
  if (doctorLists_cs[appState.areaTabCurNum].length > 0) {
    for (var i = 0; i < doctorLists_cs[appState.areaTabCurNum].length; i++) {
      if (doctorLists_cs[appState.areaTabCurNum][i].isIndexShow) {
        _lists = [
          ..._lists,
          ...doctorLists_cs[appState.areaTabCurNum][i].dentalProfessionId,
        ]
        _lists = [...new Set(_lists)]
      }
    }
  }
  return dentalProfessionList.filter((item) => _lists.includes(item.id)) || []
}

let orgTabCur = ref(0)
const orgTabLists = ['監管單位', '戰略合作', '媒體合作', '服務客戶']
const orgLists = [
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-2001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2007.png',
  ],
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-1001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1008.png',
  ],
  [
    'https://static.cmereye.com/imgs/2024/05/10fa105dea15be81.png',
    'https://static.cmereye.com/imgs/2024/04/0a0cc588677cf1ab.png',
    'https://static.cmereye.com/imgs/2024/04/746c9bc800d9bd68.png',
    'https://static.cmereye.com/imgs/2024/04/9dd67f204905f590.png',
    'https://static.cmereye.com/imgs/2024/04/438936f0a5412fd7.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3008.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3009.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3010.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3011.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3012.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-3013.png',
  ],
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-4001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4008.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4009.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4010.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4011.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4012.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-4013.png',
    'https://static.cmereye.com/imgs/2024/08/649a4dcca06fa45a.png',
    'https://static.cmereye.com/imgs/2024/08/fb3b34ba5e3335e3.png',
  ],
]
const handleorgtabfun = (orgTabIndex) => {
  orgTabCur.value = orgTabIndex
  indexOrgSwiperRef.slideToLoop(orgTabIndex)
}
let indexOrgSwiperRef = {
  slideToLoop: (a) => {},
}
const setIndexOrgSwiperRef = (swiper: any) => {
  indexOrgSwiperRef = swiper
}
const onIndexOrgSlideChange = (swiper) => {
  orgTabCur.value = swiper.realIndex ? Number(swiper.realIndex) : 0
}

const doctorTeam = ref(null)
const { top, bottom } = useElementBounding(doctorTeam)
const { height } = useWindowSize()

let Latest_Movies_cur = ref(0)
const Latest_Movies = ref([
  [
    {
      link: 'https://youtu.be/0UslK-Xrm5o',
      url: 'https://www.youtube.com/embed/0UslK-Xrm5o?si=bpyjiRhIMOLrIM1Q',
      name: '🛍️ 潮流興北上消費，超值吃喝玩樂睇牙！🎤 咪咪姐推薦實力牙科 🦷 北上睇牙 | 大灣區醫療',
    },
    {
      link: 'https://youtu.be/Hxm0arbKJbc',
      url: 'https://www.youtube.com/embed/Hxm0arbKJbc?si=1Xat0Ooo-lIWqyaS',
      name: '愛康健超聲波洗牙 ¥88 🦷 超級抵呀！| 北上睇牙 | 大灣區醫療 | 洗牙',
    },
  ],
  [
    {
      link: 'https://youtu.be/izyVofSiVas',
      url: 'https://www.youtube.com/embed/izyVofSiVas?si=VJ-9jtOD1Nx2Ctpz',
      name: '【什麼是種植牙「即剝即種」?】愛康健齒科 | 植牙 | 牙科常見問題 | 鞏賢平醫生',
    },
    {
      link: 'https://youtu.be/sVCzNLe7i_s',
      url: 'https://www.youtube.com/embed/sVCzNLe7i_s?si=JpX5VvPxZz7AexFD',
      name: '【新種植牙新技術】愛康健齒科 | 植牙 | 牙科常見問題 | 鞏賢平醫生',
    },
  ],
  [
    {
      link: 'https://youtu.be/7pDm-bLWrSM',
      url: 'https://www.youtube.com/embed/7pDm-bLWrSM?si=79EOTWDF5JRtovIu',
      name: '【愛康健王琦口腔診所】福田口岸最近牙科診所 | 覆診方便 | 過馬路即到 | 港人北上睇牙首選 🦷',
    },
    {
      link: 'https://youtu.be/OEMkvjgnhtw',
      url: 'https://www.youtube.com/embed/OEMkvjgnhtw?si=7MpoHt3ny6um6KTv',
      name: '【愛康健李川口腔診所】福田旗艦店 | 4層26個診症間 | 北上睇牙唔使等 🦷',
    },
  ],
])

let actShowShare = ref('')
const handleClick = (event, _id) => {
  event.preventDefault()
  if (actShowShare.value === _id) {
    actShowShare.value = ''
  } else {
    actShowShare.value = _id
  }
}

let saveData = ref({
  newLists_0: [],
  newLists_1: [],
  newLists_2: [],
})
let indexNewsCur = ref(0)
let indexNewsLists = ref([[] as any, [] as any, [] as any])
const handleNewsTab = (idx) => {
  if (indexNewsCur.value === idx) return
  indexNewsCur.value = idx
  getNewsLists(idx)
}
const formatDate = (dateString) => {
  let _date = new Date(dateString)
  if (_date.getTime() > Date.now() - 86400000 * 2) {
    if (Math.floor((Date.now() - _date.getTime()) / 1000 / 60 / 60)) {
      return (
        Math.floor((Date.now() - _date.getTime()) / 1000 / 60 / 60) + '小時前'
      )
    } else {
      return '剛剛'
    }
  } else if (_date.getTime() > Date.now() - 86400000 * 7) {
    return (
      Math.floor((Date.now() - _date.getTime()) / 1000 / 60 / 60 / 24) + '天前'
    )
  } else {
    var date = new Date(dateString)
    var year = date.getFullYear()
    var month = ('0' + (date.getMonth() + 1)).slice(-2)
    var day = ('0' + date.getDate()).slice(-2)
    return year + '年' + month + '月' + day + '日'
  }
}
const getNewsLists = async (idx = 0) => {
  if (indexNewsLists.value[idx].length) return
  let a = [
    {
      idx: 0,
      id: 14,
      url: '/news/article/',
    },
    {
      idx: 1,
      id: 15,
      url: '/news/news-information/',
    },
    {
      idx: 2,
      id: 16,
      url: '/news/news-tooth-wiki/',
    },
  ]
  let b: any = a.find((item) => item.idx === idx)
  let c = 16
  if (b) {
    c = b.id
  } else return
  const _res: any = await useFetch(
    `https://admin.ckjhk.com/api.php/list/${c}/page/1/num/3`
  )
  let res = JSON.parse(_res.data.value) || null
  if (res) {
    // console.log(res)
    indexNewsLists.value[idx] = res.data.map((item) => {
      return {
        id: item.id || '',
        logo:
          (item.ext_news_logo.indexOf('/static/upload/image') !== -1
            ? `https://admin.ckjhk.com${item.ext_news_logo}`
            : item.ext_news_logo) || '',
        img:
          (item.ico.indexOf('/static/upload/image') !== -1
            ? `https://admin.ckjhk.com${item.ico}`
            : item.ico) || '',
        desc: item.ext_news_desc || '',
        name: item.title || '',
        logoText: item.tags || '',
        time:
          idx === 2
            ? formatDate(item.update_time)
            : formatDate(item.ext_news_time),
        link: `${b.url}${item.id}`,
      }
    })
  }
}
const shareFacebook = (event, id) => {
  event.preventDefault()
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/news/news-tooth-wiki/${id}`
  )
}
function copySpecifiedText(event, text) {
  event.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(`https://www.ckjhk.com/news/news-tooth-wiki/${text}`)
      .then(
        function () {
          ElMessage({
            showClose: true,
            message: '已複製到剪切板',
            type: 'success',
          })
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
    alert('您的瀏覽器不支持此功能，請更新瀏覽器')
  }
}

const router = useRouter()
const handlevideBoxBtn = () => {
  // router.push('')
  let _arr = ['/news/coverage', '/news/information', '/news/tooth-wiki']
  router.push(_arr[indexNewsCur.value])
}
onMounted(() => {
  handletab2('101')
  nextTick(() => {
    getNewsLists(0)
  })
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
    {
      Q: '請問可以使用醫療券嗎？',
      A: '預計2024年第三季度（約9月份）將陸續展開相關安排，讓合資格的香港長者可使用醫療券支付費用。',
    },
    {
      Q: '一般洗牙需要多長時間？',
      A: '一次基本的洗牙程序通常需要30至60分鐘完成。具體時間會根據您的口腔情況和需要的清潔程度而有所不同。我們建議您預留1小時的時間。',
    },
    {
      Q: '植牙需要多少時間才能完成？',
      A: '植牙是一個多步驟的過程，通常需要2至3次就診才能完成。從植入牙根到完成冠修復，整個過程約需3至6個月。我們會為您詳細解釋每個步驟，檢查後再設計方案。',
    },
    // {
    //   Q: '牙周治療大約需要多長時間？',
    //   A: '這要視乎牙周的程度。一般來說，牙周基本治療大約需要2至3次就診，每次就診時間約1至2小時。具體時間需由牙醫根據您的情況評估。',
    // },
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
    // {
    //   Q: '預約需要提前多少天？',
    //   A: '平日最好提前3天預約，週末建議提前1至2星期預約。',
    // },
    {
      Q: '不預約可以直接到診所嗎？',
      A: '我們診所需要提前預約，這樣能提高就診效率，避免客人等待時間過長。',
    },
    // {
    //   Q: '請問診所有提供Wi-Fi嗎？',
    //   A: '有的，我們提供Wi-Fi服務。',
    // },
  ],
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
let currtNew = ref(1)
const handleLineCur = (_value: number) => {
  newsSwiperRef.slideToLoop(_value - 1)
}

let newsSwiperRef = {
  slideToLoop: (a) => {},
}
const setNewsSwiperRef = (swiper: any) => {
  newsSwiperRef = swiper
}
const onSlideChange = (swiper: any) => {
  currtNew.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

let messageCurrtNew = ref(1)
const handleMessageLineCur = (_value: number) => {
  newsMessageSwiperRef.slideToLoop(_value - 1)
}

let newsMessageSwiperRef = {
  slideToLoop: (a) => {},
}
const setMessageNewsSwiperRef = (swiper: any) => {
  newsMessageSwiperRef = swiper
}
const onMessageNewSlideChange = (swiper: any) => {
  messageCurrtNew.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

// 临时隐藏  contentDom
const contentDom = ref(false)
</script>

<template>
  <div>
    <PageNewHeader :headerConfig="headerConfigData" />
    <div class="indexPage">
      <!-- 最新消息 -->
      <!-- <LatestNews /> -->
      <!-- 牙科服務 -->
      <serviceCard :isIndexShow="true" />
      <!-- 醫生團隊 -->
      <div class="index-doctorTeam" ref="doctorTeam">
        <div class="index-doctorTeam-t smallPageCon">
          <div class="index_title index_title_2">醫生團隊</div>
        </div>
        <div class="index-doctorTeam-tab1 index-doctorTeam-con">
          <AreaTab />
        </div>
        <div class="index-doctorTeam-tab2 index-doctorTeam-con">
          <div
            class="index-doctorTeam-tab2-in"
            :class="`tablang-${changeDentalProfessionList().length}`"
          >
            <div
              :class="[
                {
                  'index-doctorTeam-tab2-in-active':
                    dentalProfessionCur === dentalProfessionItem.id,
                },
                `textlang-${dentalProfessionItem.name.length}`,
              ]"
              v-for="(
                dentalProfessionItem, dentalProfessionIndex
              ) in changeDentalProfessionList()"
              :key="dentalProfessionIndex"
              @click="handletab2(dentalProfessionItem.id)"
            >
              {{ dentalProfessionItem.name }}
            </div>
          </div>
        </div>
        <div class="index-doctorTeam-lists index-doctorTeam-con">
          <div class="pcLists">
            <section v-if="actDoctorListd.length < 7">
              <div
                class="pcLists-in"
                :class="{ acitve: doctorCur === doctorItem.id }"
                v-for="doctorItem in actDoctorListd"
                :key="doctorItem.id"
                @click="handleDoctorItem(doctorItem.id)"
              >
                <div class="pcLists-in-img">
                  <img
                    :src="doctorItem.mbImg || ''"
                    :alt="doctorItem.name"
                    :title="doctorItem.name"
                  />
                </div>
              </div>
            </section>
            <section v-else>
              <Swiper
                class="swiperpcLists-in"
                :slidesPerView="7"
                @swiper="setDoctorTabSwiperRef_pc"
              >
                <SwiperSlide
                  class="swiperpcLists-in-slide"
                  v-for="doctorItem in actDoctorListd"
                  :key="doctorItem.id"
                >
                  <div
                    class="swiperpcLists-in-img"
                    :class="{ acitve: doctorCur === doctorItem.id }"
                    @click="handleDoctorItem(doctorItem.id)"
                  >
                    <img
                      :src="doctorItem.mbImg || ''"
                      :alt="doctorItem.name"
                      :title="doctorItem.name"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </section>
          </div>
          <div class="mbLists">
            <Swiper
              class="mbLists-in"
              :slidesPerView="3"
              @swiper="setDoctorTabSwiperRef_mb"
            >
              <SwiperSlide
                class="mbLists-in-slide"
                v-for="doctorItem in actDoctorListd"
                :key="doctorItem.id"
              >
                <div
                  class="mbLists-in-img"
                  :class="{ acitve: doctorCur === doctorItem.id }"
                  @click="handleDoctorItem(doctorItem.id)"
                >
                  <img
                    :src="doctorItem.mbImg || ''"
                    :alt="doctorItem.name"
                    :title="doctorItem.name"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="index-doctorTeam-detailBox" v-loading="loading">
          <Swiper
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 2000,
            }"
            v-if="actDoctorListd.length"
            class="index-doctorTeam-detail-swiper"
            @swiper="setDoctorItemSwiper"
            @slideChange="doctorItemSlideChange"
            :class="[windowWidth > 768 ? 'swiper-no-swiping' : '']"
          >
            <Swiper-slide
              v-for="doctorItem in actDoctorListd"
              :key="`d${doctorItem.id}`"
            >
              <div
                class="index-doctorTeam-detail index-doctorTeam-con"
                :id="`d${doctorItem.id}`"
              >
                <div class="index-doctorTeam-detail-l">
                  <div class="index-doctorTeam-detail-l-in">
                    <img
                      :srcset="'https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp 768w, https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp'"
                      src="https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp"
                      alt=""
                    />
                    <img
                      :srcset="`${doctorItem.mbImg} 768w, ${doctorItem.imgUrl}`"
                      :src="doctorItem.imgUrl"
                      :alt="doctorItem.name"
                      :title="doctorItem.name"
                    />
                  </div>
                  <div class="index-doctorTeam-detail-l-btn">
                    <PageAnimBtnTypeTwo str="線上咨詢" />
                  </div>
                </div>
                <div class="index-doctorTeam-detail-r">
                  <div class="detail-1">
                    <span>{{ doctorItem.name }}</span>
                    <span>{{ doctorItem.text }}</span>
                  </div>
                  <div class="detail-2" v-if="doctorItem.newOrg">
                    <span>{{ doctorItem.newOrg }}</span>
                  </div>
                  <div
                    class="detail-3"
                    v-if="!contentDom && windowWidth < 767 == false"
                  >
                    <span
                      v-for="(jobItem, jobIndex) in doctorItem.newJobs"
                      :key="jobIndex"
                      >{{ jobItem }}</span
                    >
                  </div>
                  <div
                    class="detail-4"
                    v-if="!contentDom && windowWidth < 767 == false"
                  >
                    <span>擅長項目：</span>
                    <span>
                      {{ doctorItem.newSkilled }}
                    </span>
                  </div>
                  <!-- doctorItem.tags 为空判断    windowWidth < 767 == false  判断移动端增加margin -->
                  <div
                    class="detail-5"
                    v-if="doctorItem.tags.length > 0"
                    :style="{
                      marginTop: windowWidth < 767 == false ? '' : '30px',
                    }"
                  >
                    <span
                      v-for="(tagItem, tagIndex) in doctorItem.tags"
                      :key="tagIndex"
                    >
                      {{ tagItem }}
                    </span>
                  </div>
                  <div class="detail-6">
                    <PageAnimBtnTypeTwo str="線上咨詢" />
                  </div>
                </div>
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
      <!-- 關於我們 -->
      <AboutUs />
      <!-- 品牌理念 -->
      <brandConcept-test />
      <div class="Latest_Movies">
        <div class="Latest_Movies_t smallPageCon">
          <div class="Latest_Movies_t_title">
            <div class="index_title index_title_2">最新影片</div>
          </div>
          <nuxt-link to="https://www.youtube.com/@ckjhkofficial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="36"
              viewBox="0 0 44 36"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.6583 2.69702C42.341 3.48136 42.8312 4.45663 43.08 5.52523C44 9.46938 44 17.6944 44 17.6944C44 17.6944 44 25.9195 43.08 29.8637C42.8312 30.9323 42.341 31.9075 41.6583 32.6919C40.9756 33.4762 40.1245 34.0421 39.19 34.3329C35.75 35.3889 22 35.3889 22 35.3889C22 35.3889 8.25 35.3889 4.81 34.3329C3.87554 34.0421 3.02438 33.4762 2.34169 32.6919C1.65901 31.9075 1.16876 30.9323 0.92 29.8637C0 25.9195 0 17.6944 0 17.6944C0 17.6944 0 9.46938 0.92 5.52523C1.16876 4.45663 1.65901 3.48136 2.34169 2.69702C3.02438 1.91268 3.87554 1.34678 4.81 1.05596C8.25 0 22 0 22 0C22 0 35.75 0 39.19 1.05596C40.1245 1.34678 40.9756 1.91268 41.6583 2.69702ZM29.0048 17.6954L17.5048 10.2266V25.1641L29.0048 17.6954Z"
                fill="#FC1682"
              />
            </svg>
            <span>@ckjhkofficial</span>
          </nuxt-link>
        </div>
        <div class="Latest_Movies_in smallPageCon">
          <div class="Latest_Movies_in_l">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ti7Mms_BJoI?si=t-STRbG6jNVpU3m3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <span
              >愛康健超聲波洗牙 ¥88 🦷 超級抵呀！| 北上睇牙 | 大灣區醫療 |
              洗牙</span
            >
          </div>
          <div class="Latest_Movies_in_r">
            <div class="Latest_Movies_in_r_t">
              <div
                class="tab-in"
                :class="{ active: Latest_Movies_cur === 0 }"
                @click="Latest_Movies_cur = 0"
              >
                優惠推廣
              </div>
              <div
                class="tab-in"
                :class="{ active: Latest_Movies_cur === 1 }"
                @click="Latest_Movies_cur = 1"
              >
                醫師解難
              </div>
              <div
                class="tab-in"
                :class="{ active: Latest_Movies_cur === 2 }"
                @click="Latest_Movies_cur = 2"
              >
                到診攻略
              </div>
            </div>
            <div class="Latest_Movies_in_r_b" v-if="windowWidth > 767">
              <nuxtLink
                class="list-in"
                v-for="(item, index) in Latest_Movies[Latest_Movies_cur]"
                :key="index"
              >
                <iframe
                  width="560"
                  height="315"
                  :src="item.url"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <span>{{ item.name }}</span>
              </nuxtLink>
            </div>
            <div class="Latest_Movies_in_r_b" v-else>
              <Swiper
                class="index-org-content-swiper mobile-style"
                :loop="true"
                :modules="[Autoplay]"
                :autoplay="{
                  delay: 3000,
                }"
                @swiper="setNewsSwiperRef"
                @slideChange="onSlideChange"
              >
                <Swiper-slide
                  class="index-org-content-swiper-slie"
                  v-for="(item, index) in Latest_Movies[Latest_Movies_cur]"
                  :key="index"
                >
                  <nuxtLink class="list-in">
                    <iframe
                      width="560"
                      height="315"
                      :src="item.url"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <span>{{ item.name }}</span>
                  </nuxtLink>
                </Swiper-slide>
              </Swiper>
            </div>
            <div
              class="index-latestNews-line brandConcept-line"
              v-if="windowWidth < 767"
            >
              <PageSwiperPointLine
                :latestNewsNum="Latest_Movies[Latest_Movies_cur].length"
                :latestNewsCurrent="currtNew"
                @changeLineCur="handleLineCur"
              ></PageSwiperPointLine>
            </div>
          </div>
        </div>
      </div>
      <div class="index-videoBox">
        <div class="index-videoBox-t smallPageCon">
          <div class="index_title index_title_2">睇牙新資訊</div>
        </div>
        <div class="index-videoBox-tab">
          <div
            class="tab-in"
            :class="{ active: indexNewsCur === 0 }"
            @click="handleNewsTab(0)"
          >
            媒體報導
          </div>
          <div
            class="tab-in"
            :class="{ active: indexNewsCur === 1 }"
            @click="handleNewsTab(1)"
          >
            最新資訊
          </div>
          <div
            class="tab-in"
            :class="{ active: indexNewsCur === 2 }"
            @click="handleNewsTab(2)"
          >
            牙齒百科
          </div>
        </div>
        <div class="index-videoBox-in" v-if="windowWidth > 767">
          <nuxtLink
            :to="item.link"
            class="list-in"
            :class="`list-in-${indexNewsCur}`"
            v-for="(item, index) in indexNewsLists[indexNewsCur]"
            :key="index"
          >
            <div class="image">
              <img :title="item.name" :src="item.img" alt="" />
            </div>
            <div class="logo" v-if="indexNewsCur === 0">
              <div class="logo-image">
                <img :src="item.logo" :title="item.logoText" alt="" />
              </div>
              <div class="logo-text">
                <span>{{ item.time }}</span>
                <span>{{ item.logoText }}</span>
              </div>
            </div>
            <h2 :title="item.name">{{ item.name }}</h2>
            <div class="time" v-if="indexNewsCur === 2">
              <div class="time-l">{{ item.time }}</div>
              <div
                class="shareIcon"
                @click.stop="handleClick($event, item.id)"
                alt=""
              >
                <div
                  :class="['shareIcon-img', { act: actShowShare === item.id }]"
                  alt="分享"
                  title="分享"
                >
                  <img src="@/assets/images/icon_47.svg" alt="" />
                </div>
                <div class="shareIcon-in" v-if="actShowShare === item.id">
                  <div
                    class="shareIcon-in-item"
                    @click="shareFacebook($event, item.id)"
                    alt="Facebook 分享"
                    title="Facebook 分享"
                  >
                    <img src="@/assets/images/icon_49.svg" alt="" /><span
                      >Facebook 分享</span
                    >
                  </div>
                  <div
                    class="shareIcon-in-item"
                    @click="copySpecifiedText($event, item.id)"
                    alt="複製連結"
                    title="複製連結"
                  >
                    <img src="@/assets/images/icon_48.svg" alt="" /><span
                      >複製連結</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <p :title="item.desc">{{ item.desc }}</p>
            <div class="btn">
              <PageAnimBtnTypeTwo str="查看全文" :link="item.link" />
            </div>
          </nuxtLink>
        </div>
        <div class="index-videoBox-in" v-else>
          <Swiper
            class="index-org-content-swiper mobile-style"
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
            }"
            @swiper="setMessageNewsSwiperRef"
            @slideChange="onMessageNewSlideChange"
          >
            <Swiper-slide
              class="index-org-content-swiper-slie"
              v-for="(item, index) in indexNewsLists[indexNewsCur]"
              :key="index"
            >
              <nuxtLink
                :to="item.link"
                class="list-in"
                :class="`list-in-${indexNewsCur}`"
              >
                <div class="image">
                  <img :title="item.name" :src="item.img" alt="" />
                </div>
                <div class="logo" v-if="indexNewsCur === 0">
                  <div class="logo-image">
                    <img :src="item.logo" :title="item.logoText" alt="" />
                  </div>
                  <div class="logo-text">
                    <span>{{ item.time }}</span>
                    <span>{{ item.logoText }}</span>
                  </div>
                </div>
                <h2 :title="item.name">{{ item.name }}</h2>
                <div class="time" v-if="indexNewsCur === 2">
                  <div class="time-l">{{ item.time }}</div>
                  <div
                    class="shareIcon"
                    @click.stop="handleClick($event, item.id)"
                    alt=""
                  >
                    <div
                      :class="[
                        'shareIcon-img',
                        { act: actShowShare === item.id },
                      ]"
                      alt="分享"
                      title="分享"
                    >
                      <img src="@/assets/images/icon_47.svg" alt="" />
                    </div>
                    <div class="shareIcon-in" v-if="actShowShare === item.id">
                      <div
                        class="shareIcon-in-item"
                        @click="shareFacebook($event, item.id)"
                        alt="Facebook 分享"
                        title="Facebook 分享"
                      >
                        <img src="@/assets/images/icon_49.svg" alt="" /><span
                          >Facebook 分享</span
                        >
                      </div>
                      <div
                        class="shareIcon-in-item"
                        @click="copySpecifiedText($event, item.id)"
                        alt="複製連結"
                        title="複製連結"
                      >
                        <img src="@/assets/images/icon_48.svg" alt="" /><span
                          >複製連結</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <p :title="item.desc">{{ item.desc }}</p>
                <div class="btn">
                  <PageAnimBtnTypeTwo str="查看全文" :link="item.link" />
                </div>
              </nuxtLink>
            </Swiper-slide>
          </Swiper>
        </div>
        <div class="index-videoBox-btn smallPageCon" @click="handlevideBoxBtn">
          <span>更多資訊 </span>
        </div>
        <div
          class="index-latestNews-line brandConcept-line"
          v-if="windowWidth < 768"
        >
          <PageSwiperPointLine
            :latestNewsNum="indexNewsLists[indexNewsCur].length"
            :latestNewsCurrent="messageCurrtNew"
            @changeLineCur="handleMessageLineCur"
          ></PageSwiperPointLine>
        </div>
      </div>

      <div class="index-org">
        <div class="index-org-t smallPageCon">
          <div class="index_title index_title_2">相關機構</div>
        </div>
        <div class="index-org-tag smallPageCon">
          <div
            class="index-org-tag-in"
            :class="{ active: orgTabCur === orgTabIndex }"
            v-for="(orgTabItem, orgTabIndex) in orgTabLists"
            :key="orgTabIndex"
            @click="handleorgtabfun(orgTabIndex)"
          >
            {{ orgTabItem }}
          </div>
        </div>
        <div class="index-org-content smallPageCon">
          <Swiper
            class="index-org-content-swiper"
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 3000,
            }"
            @swiper="setIndexOrgSwiperRef"
            @slideChange="onIndexOrgSlideChange"
          >
            <Swiper-slide
              class="index-org-content-swiper-slie"
              v-for="(orgListItem, orgListIndex) in orgLists"
              :key="orgListIndex"
            >
              <div
                class="index-org-content-in"
                :class="`index-org-content-${orgTabCur}`"
                v-for="(orgItem, orgIndex) in orgListItem"
                :key="orgIndex"
              >
                <img loading="lazy" :src="orgItem" alt="" />
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>

      <!-- 個案分享 -->
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="index_title">
            {{ $t('pages.index.caseSharing.title') }}
          </div>
        </div>
        <div class="index-caseSharing-in">
          <div class="in-top">
            <!-- <CaseSharingVideoItem :caseSharingData="caseSharingTopData" /> -->
            <iframe
              src="https://www.youtube.com/embed/Q7sHcjs6oCs?si=JmhIgriXU-qvuOkg"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>
          <div class="share-item" style="display: none">
            <div>
              <div>
                <div>
                  <img src="../assets/images/zmm.svg" alt="星級客戶" />
                </div>
                <div>
                  <div class="item-date">17/4/24</div>
                  <div>
                    <span>朱咪咪 Mimi</span>
                    <span>星級客戶</span>
                    <span>種植牙療程</span>
                  </div>
                </div>
              </div>
              <div class="item-content">
                <span
                  >做得呢行講嘢一定要清楚，點可以畀牙齒問題影響到！植完牙同真牙一樣，咬得到自然胃口好。</span
                >
                <span></span>
                <span>代言已經廿三年，睇我棚牙就知掂！</span>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span class="item-title">Tommy Chan</span>
                  <span class="item-tag">根管治療(杜牙根)療程客戶</span>
                </div>
                <div class="item-date">13/6/24</div>
              </div>
              <div class="item-content">
                蛀牙痛到死，差啲以為要剝牙😱好在牙醫建議杜牙根就得，手術快脆又留到隻牙！😁
              </div>
            </div>
            <div>
              <div>
                <div>
                  <span class="item-title">余小姐</span>
                  <span class="item-tag">矯齒(箍牙)療程客戶</span>
                </div>
                <div class="item-date">22/4/24</div>
              </div>
              <div class="item-content">
                中學開始就包包面，兩年前的起心肝去左箍牙。杜醫生手勢好又跟得足，而家啲牙齊得尼又瘦到面，好滿意呀。
              </div>
            </div>
          </div>
          <div class="in-cen" style="display: none">
            <div
              class="in-cen-box"
              v-for="(caseSharingItem, caseSharingIndex) in caseSharingLists"
              :key="caseSharingIndex"
            >
              <CaseSharingImageItem
                :userInfo="caseSharingItem"
                :userIndex="caseSharingIndex"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="treatment-data" v-if="contentDom">
        <div class="treatment-data-title">
          <span>早期深圳二級口腔醫院</span>
          <span>香港品牌 實力信心</span>
        </div>
        <div class="treatment-data-in smallPageCon">
          <div
            class="dataBox"
            v-for="(treatmentItem, treatmentIndex) in treatmentData"
            :key="treatmentIndex"
          >
            <div class="num">
              <img
                loading="lazy"
                :src="treatmentItem.bg"
                :style="{ left: treatmentItem.left, top: treatmentItem.top }"
                alt=""
              />
              <div
                class="numIn"
                v-for="(numItem, numIndex) in treatmentItem.num"
                :key="numIndex"
              >
                <span v-if="numItem === ','">{{ numItem }}</span>
                <div
                  v-else
                  class="numInAnim"
                  :class="[{ showNumInAnim: showTreatment }]"
                  :style="{
                    'animation-delay': `${
                      (treatmentItem.num.length - numIndex) * 0.2
                    }s`,
                  }"
                >
                  <span
                    v-for="numInItem in Number(numItem) ? Number(numItem) : 10"
                    :key="numInItem"
                  >
                    {{ numInItem === 10 ? 0 : numInItem }}
                  </span>
                </div>
              </div>
              <span class="numBold">+</span>
            </div>
            <div class="name">{{ treatmentItem.name }}</div>
          </div>
        </div>
        <div class="treatment-data-bText">*以上數據由2019年開始統計至今</div>
      </div>
      <ServiceProblem :problem-data="problemData" />
      <!-- 聯絡我們 -->
      <NewAddress />
      <ContactForm-new />
    </div>
    <!-- <div style="position: fixed; top: 50%; left: 0;z-index: 9999;">{{top}} --- {{bottom}} --- {{(top<(height / 3 * 2)) && (bottom > 0)}}</div> -->
    <!-- <PageAdbox /> -->
    <PageFooter />
    <!-- <PageNavbar
      :showDialogBox="top < (height / 3) * 2 && bottom > height / 3"
    /> -->
    <PageNewNavbarSide v-if="windowWidth > 768" />
    <PageNavbar v-else
      :showDialogBox="top < (height / 3) * 2 && bottom > height / 3"
    />
  </div>
</template>

<style lang="scss" scoped>
@keyframes numAnim {
  100% {
    // transform: translateY(calc((100% - 96px) * -1));
    transform: none;
  }
}
svg:hover path {
  cursor: pointer;
  fill: rgba(255, 120, 117, 0.65);
}
.indexPage {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1;
  // padding-bottom: 140px;
  // overflow: hidden;
}
.treatment-data {
  margin-top: 80px;
  &-title {
    span {
      color: var(--indexColor1);
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      display: block;
    }
  }
  &-in {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    .dataBox {
      flex: 1;
      .num {
        color: var(--indexColor1);
        text-align: center;
        font-size: 60px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        display: flex;
        justify-content: center;
        position: relative;
        img {
          position: absolute;
        }
        .numBold {
          font-family: initial;
          font-weight: bold;
          margin-top: 5px;
        }
        .numIn {
          height: 96px;
          overflow: hidden;
          position: relative;
          span {
            line-height: 96px;
            display: block;
          }
          .numInAnim {
            opacity: 0;
            transition: all 0.3s;
            display: flex;
            flex-direction: column-reverse;
            transform: translateY(-100%);
            &.showNumInAnim {
              opacity: 1;
              animation: numAnim 1s ease-in-out forwards;
            }
          }
        }
      }
      .name {
        color: var(--textColor);
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        margin-top: -10px;
      }
    }
  }
  &-bText {
    color: var(--textColor);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    margin-top: 30px;
  }
}
//醫生團隊
.index-doctorTeam {
  margin: 60px auto 50px;
  &-t {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-con {
    width: 70%;
    max-width: 1280px;
    margin: 25px auto 0;
  }
  &-tab1 {
    :deep(.areaTab) {
      div {
        flex: 1;
        text-align: center;
        font-size: 20px;
      }
    }
  }
  &-tab2 {
    margin-top: 10px;
    &-in {
      width: 100%;
      display: flex;
      & > div {
        flex: 1;
        color: #00aeff;
        transition: all 0.3s;
        border-top: 2px solid #00aeff;
        border-bottom: 2px solid #00aeff;
        border-left: 2px solid #00aeff;
        padding: 5px 0;
        font-size: 18px;
        text-align: center;
        letter-spacing: 3px;
        cursor: pointer;
        &:nth-of-type(4) {
          flex: 1.3;
        }
        &:nth-of-type(5) {
          flex: 1.3;
        }
        &:nth-of-type(6) {
          flex: 1.3;
        }
        &:nth-of-type(7) {
          flex: 1.7;
        }
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
          border-right: 2px solid #00aeff;
        }
        &:hover,
        &.index-doctorTeam-tab2-in-active {
          color: #fff;
          background: #00aeff;
        }
      }
    }
  }
  &-lists {
    width: 100%;
    min-height: 152px;
    .pcLists {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      &-in {
        cursor: pointer;
        margin-bottom: 30px;
        &:not(:last-child) {
          margin-right: 30px;
        }
        &-img {
          width: 150px;
          height: 150px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.5);
          transition: all 0.3s;
        }
        &:hover,
        &.acitve {
          .pcLists-in-img {
            background: #ffa8c6;
          }
        }
      }
      & > section {
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .swiperpcLists-in {
        width: 100%;
        overflow: visible;
        &-img {
          margin: 0 15px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.7);
          transition: all 0.3s;
          cursor: pointer;
          &:hover,
          &.acitve {
            background: #ffa8c6;
          }
        }
      }
    }
    .mbLists {
      width: calc(100% - 40px);
      margin: 0 auto;
      display: none;
      &-in {
        width: 100%;
        overflow: visible;
        &-img {
          // width: calc(100% - 20px);
          margin: 0 10px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209, 0.7);
          &.acitve {
            background: #ffa8c6;
          }
        }
      }
    }
  }
  &-detail {
    padding: 20px;
    display: flex;
    margin-top: 50px;
    &-l {
      width: calc(434 / 1365 * 100%);
      max-width: 434px;
      position: relative;
      height: max-content;
      &-in {
        width: 100%;
        &::after {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background: rgba(254, 169, 209, 0.7);
          z-index: 0;
        }
      }
      img {
        position: relative;
        border-radius: 30px;
        z-index: 1;
        &:nth-of-type(1) {
          border: 3px solid var(--indexColor1);
        }
        &:nth-of-type(2) {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          max-height: calc(92% - 3px);
          display: block;
        }
      }
      &-btn {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        z-index: 1;
        width: max-content;
      }
    }
    &-r {
      flex: 1;
      .detail-1 {
        color: var(--indexColor1);
        padding-left: 20px;
        span {
          font-size: 20px;
          &:nth-of-type(1) {
            font-size: 35px;
            margin-right: 5px;
          }
        }
      }
      .detail-2 {
        color: #fff;
        span {
          font-size: 28px;
          padding: 5px 70px 5px 20px;
          display: inline-block;
          background: var(--indexColor1);
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
        }
      }
      .detail-3 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 30px;
        margin-top: 5px;
        span {
          display: block;
        }
      }
      .detail-4 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 20px;
        span {
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .detail-5 {
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        span {
          border-bottom: 1px solid var(--textColor);
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
      .detail-6 {
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
        display: none;
      }
    }
  }
  &-detailBox {
    min-height: 550px;
  }
  .index-doctorTeam-detail-swiper {
    // overflow: visible;
    padding-bottom: 40px;
  }
}
//個案分享
.index-caseSharing {
  padding: 35px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 240, 0) 0%,
    var(--indexColor2) 100%
  );
  margin-top: 80px;
  &-title {
    display: flex;
    justify-content: center;
  }
  &-in {
    width: 80%;
    max-width: 1046px;
    margin: 45px auto;
    .in-top {
      display: flex;
      height: 587px;
    }
    .in-cen {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 120px;
      &-box {
        width: calc(50% - 8px);
      }
    }
  }
}
.index-org {
  margin-top: 120px;
  &-tag {
    width: 80%;
    max-width: 804px;
    display: flex;
    margin-top: 50px;
    &-in {
      flex: 1;
      color: var(--indexColor1);
      padding: 5px;
      font-size: 24px;
      text-align: center;
      border-top: 2px solid var(--indexColor1);
      border-bottom: 2px solid var(--indexColor1);
      border-left: 2px solid var(--indexColor1);
      transition: all 0.3s;
      cursor: pointer;
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
        border-right: 2px solid var(--indexColor1);
      }
      &:hover,
      &.active {
        color: #fff;
        background: var(--indexColor1);
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin-top: 30px;
    &-swiper {
      width: 100%;
      &-slie {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    &-in {
      width: calc((100% - 300px) / 5);
      margin: 0 30px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-0 {
      align-items: flex-start !important;
    }
  }
}
.index-videoBox {
  margin-top: 90px;
  margin-bottom: 90px;
  position: relative;
  &-tab {
    display: flex;
    justify-content: center;
    margin-top: 37px;
    .tab-in {
      border: 2px solid #fdd3e3;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%;
      letter-spacing: 2.6px;
      cursor: pointer;
      padding: 3px 30px 0;
      position: relative;
      transition: all 0.3s;
      &:not(:last-child) {
        border-right: none;
      }
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
      }
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 24px;
        height: 12px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 12px solid #fdd3e3;
        opacity: 0;
        transition: all 0.3s;
      }
      &.active {
        color: #fff;
        background: var(--indexColor1);
        &::after {
          opacity: 1;
        }
      }
    }
  }
  &-in {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    max-width: 1187px;
    margin: 50px auto;
    gap: 31px;
    .list-in {
      width: 100%;
      display: flex;
      flex-direction: column;
      .image {
        width: 100%;
        height: 0;
        padding-bottom: calc(383 / 680 * 100%);
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
        img {
          position: absolute;
          width: 100%;
          height: auto;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s;
        }
        &:hover {
          img {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      }
      h2 {
        color: var(--Theme-Color, #fc1682);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px;
        font-family: 'FakePearl-Regular', 'NotoSansHans', 'Noto Sans HK', Serif;
      }
      p {
        color: var(--Grey-Mid, #666);
        text-overflow: ellipsis;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
        margin-top: 10px;
        padding: 0 20px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px;
        flex: 1;
      }
      .time {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        &-l {
          color: var(--Grey-Mid, #666);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 200%; /* 32px */
          letter-spacing: 1.6px;
        }
        .shareIcon {
          position: relative;
          &-img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border: 2px solid #aaa;
            z-index: 21;
            & > img {
              width: 16px;
              height: auto;
            }
            &.act {
              border: none;
            }
          }
          &-in {
            position: absolute;
            z-index: 20;
            top: 0;
            right: 0;
            width: 159px;
            height: 115px;
            background: url(https://static.cmereye.com/static/ckj/imgs/default/shareIcon.svg);
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
            padding: 12px 0;
            &-item {
              display: flex;
              align-items: center;
              padding: 5px 10px;
              margin: 0 2px;
              border-radius: 3px;
              & > img {
                width: 20px;
                margin-right: 5px;
              }
              & > span {
                font-size: 14px;
              }
              &:hover {
                background: #f6f6f6;
              }
            }
          }
        }
      }
      .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        &-image {
          max-width: 100px;
          max-height: 59px;
        }
        &-text {
          display: flex;
          flex-direction: column;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: right;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 200%; /* 32px */
          letter-spacing: 1.6px;
        }
      }
      .btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      &.list-in-1 {
        .image {
          padding-bottom: 100%;
        }
        h2 {
          -webkit-line-clamp: 1;
          line-clamp: 1;
        }
        p {
          -webkit-line-clamp: 2;
          line-clamp: 2;
        }
      }
      &.list-in-2 {
        .image {
          padding-bottom: calc(562 / 1000 * 100%);
        }
        h2 {
          -webkit-line-clamp: 2;
          line-clamp: 2;
        }
        p {
          -webkit-line-clamp: 5;
          line-clamp: 5;
        }
      }
    }
  }
  &-btn {
    position: absolute;
    inset: 0;
    top: 65px;
    pointer-events: none;
    span {
      float: right;
      display: inline-block;
      color: var(--Theme-Color, #fc1682);
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 3px;
      position: relative;
      pointer-events: auto;
      cursor: pointer;
      &::before {
        content: '';
        height: 0;
        width: 90%;
        position: absolute;
        border-bottom: 2px solid var(--indexColor1);
        bottom: 0;
        left: 0;
      }
      &::after {
        content: '》';
        font-size: 28px;
      }
    }
  }
}
.Latest_Movies {
  margin-top: 60px;
  &_t {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      svg {
        width: 44px;
        height: 35px;
        margin-right: 10px;
      }
      span {
        color: #4d4d4d;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }
  }
  &_in {
    margin-top: 38px;
    display: flex;
    &_l {
      margin-right: 33px;
      width: 540px;
      display: flex;
      flex-direction: column;
      span {
        padding: 15px 20px 0;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        display: block;
      }
      iframe {
        width: 540px;
        height: 303px;
      }
    }
    &_r {
      &_t {
        display: flex;
        .tab-in {
          border: 2px solid #fdd3e3;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          letter-spacing: 2.6px;
          cursor: pointer;
          padding: 3px 30px 0;
          position: relative;
          transition: all 0.3s;
          &:not(:last-child) {
            border-right: none;
          }
          &:first-child {
            border-radius: 5px 0 0 5px;
          }
          &:last-child {
            border-radius: 0 5px 5px 0;
          }
          &::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 12px;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-top: 12px solid #fdd3e3;
            opacity: 0;
            transition: all 0.3s;
          }
          &.active {
            color: #fff;
            background: var(--indexColor1);
            &::after {
              opacity: 1;
            }
          }
        }
      }
      &_b {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 34px;
        margin-top: 43px;
        .list-in {
          iframe {
            width: 375px;
            height: 211px;
            max-width: 100%;
          }
          span {
            padding: 15px 20px 0;
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            display: block;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .index-org {
    margin-top: 6.25vw;
    &-tag {
      max-width: 41.875vw;
      margin-top: 2.6042vw;
      &-in {
        padding: 0.2604vw;
        font-size: 1.25vw;
        &:first-child {
          border-radius: 0.2604vw 0 0 0.2604vw;
        }
        &:last-child {
          border-radius: 0 0.2604vw 0.2604vw 0;
        }
      }
    }
    &-content {
      max-width: 62.5vw;
      margin-top: 1.5625vw;
      &-in {
        width: calc((100% - 15.625vw) / 5);
        margin: 0 1.5625vw 2.0833vw;
      }
    }
  }
  .index-videoBox {
    margin-top: 4.6875vw;
    margin-bottom: 4.6875vw;
    &-tab {
      margin-top: 1.9271vw;
      .tab-in {
        font-size: 1.3542vw;
        letter-spacing: 2.6px;
        padding: 0.1563vw 1.5625vw 0;
        &:first-child {
          border-radius: 0.2604vw 0 0 0.2604vw;
        }
        &:last-child {
          border-radius: 0 0.2604vw 0.2604vw 0;
        }
        &::after {
          width: 1.25vw;
          height: 0.625vw;
          border-left: 0.625vw solid transparent;
          border-right: 0.625vw solid transparent;
          border-top: 0.625vw solid #fdd3e3;
        }
      }
    }
    &-in {
      max-width: 61.8229vw;
      margin: 2.6042vw auto;
      gap: 1.6146vw;
      .list-in {
        .image {
          margin-bottom: 0.5208vw;
        }
        h2 {
          font-size: 1.0417vw;
          padding: 0 1.0417vw;
        }
        p {
          font-size: 0.8333vw;
          margin-top: 0.5208vw;
          padding: 0 1.0417vw;
        }
        .time {
          margin-top: 0.5208vw;
          padding: 0 1.0417vw;
          &-l {
            font-size: 0.8333vw;
          }
        }
        .logo {
          padding: 0.5208vw 1.0417vw;
          &-image {
            max-width: 5.2083vw;
            max-height: 3.0729vw;
          }
          &-text {
            font-size: 0.8333vw;
          }
        }
        .btn {
          margin-top: 1.0417vw;
        }
      }
    }
    &-btn {
      top: 4.1667vw;
      span {
        font-size: 1.5625vw;
        letter-spacing: 0.1563vw;
        &::after {
          font-size: 1.4583vw;
        }
      }
    }
  }
  .index-caseSharing {
    padding: 1.8229vw 0;
    margin-top: 4.1667vw;
    &-in {
      width: 70%;
      max-width: 54.4792vw;
      margin: 2.3438vw auto;
      .in-top {
        display: flex;
        height: 30.2vw;
      }
      .in-cen {
        margin-top: 6.25vw;
        &-box {
          width: calc(50% - 0.4167vw);
        }
      }
    }
  }
  .treatment-data {
    margin-top: 4.1667vw;
    &-title {
      span {
        font-size: 1.8229vw;
      }
    }
    &-in {
      margin-top: 2.5vw;
      .dataBox {
        .num {
          font-size: 3.125vw;
          .numBold {
            margin-top: 0.2604vw;
          }
          .numIn {
            height: 5vw;
            span {
              line-height: 5vw;
            }
          }
        }
        .name {
          font-size: 1.4583vw;
          margin-top: -0.5208vw;
        }
      }
    }
    &-bText {
      font-size: 1.0417vw;
      margin-top: 1.5625vw;
    }
  }
  .index-doctorTeam {
    margin: 3.125vw auto 2.6042vw;
    &-con {
      max-width: 66.6667vw;
      margin: 1.3021vw auto 0;
    }
    &-tab1 {
      :deep(.areaTab) {
        div {
          font-size: 1.0417vw;
        }
      }
    }
    &-tab2 {
      margin-top: 0.5208vw;
      &-in {
        & > div {
          padding: 0.2604vw 0;
          font-size: 0.9375vw;
          letter-spacing: 0.1563vw;
          &:first-child {
            border-radius: 0.2604vw 0 0 0.2604vw;
          }
          &:last-child {
            border-radius: 0 0.2604vw 0.2604vw 0;
          }
        }
      }
    }
    &-lists {
      min-height: 7.9167vw;
      .pcLists {
        &-in {
          margin-bottom: 1.5625vw;
          &:not(:last-child) {
            margin-right: 1.5625vw;
          }
          &-img {
            width: 7.8125vw;
            height: 7.8125vw;
            border-radius: 0.5208vw;
          }
        }
        .swiperpcLists-in {
          &-img {
            margin: 0 0.7813vw;
            border-radius: 0.5208vw;
          }
        }
      }
      .mbLists {
        width: calc(100% - 2.0833vw);
        &-in {
          &-img {
            margin: 0 0.5208vw;
            border-radius: 0.5208vw;
          }
        }
      }
    }
    &-detail {
      padding: 1.0417vw;
      margin-top: 2.6042vw;
      &-l {
        max-width: 22.6042vw;
        &-in {
          &::after {
            top: -1.0417vw;
            left: -1.0417vw;
            border-radius: 1.5625vw;
          }
        }
        img {
          border-radius: 1.5625vw;
        }
      }
      &-r {
        .detail-1 {
          padding-left: 1.0417vw;
          span {
            font-size: 1.0417vw;
            &:nth-of-type(1) {
              font-size: 1.8229vw;
              margin-right: 0.2604vw;
            }
          }
        }
        .detail-2 {
          span {
            font-size: 1.4583vw;
            padding: 0.2604vw 3.6458vw 0.2604vw 1.0417vw;
          }
        }
        .detail-3 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.5625vw;
          margin-top: 0.2604vw;
        }
        .detail-4 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
        .detail-5 {
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          span {
            &:not(:last-child) {
              margin-right: 0.5208vw;
            }
          }
        }
        .detail-6 {
          margin-top: 1.5625vw;
          margin-left: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
      }
    }
    &-detailBox {
      min-height: 28.6458vw;
    }
    .index-doctorTeam-detail-swiper {
      padding-bottom: 2.0833vw;
    }
  }
  .Latest_Movies {
    margin-top: 50px;
    &_t {
      a {
        svg {
          width: 2.2917vw;
          height: 1.8229vw;
          margin-right: 0.5208vw;
        }
        span {
          font-size: 1.1458vw;
        }
      }
    }
    &_in {
      margin-top: 1.9792vw;
      &_l {
        margin-right: 1.7188vw;
        width: 28.125vw;
        span {
          padding: 0.7813vw 1.0417vw 0;
          font-size: 1.0417vw;
        }
        iframe {
          width: 28.125vw;
          height: 15.7813vw;
        }
      }
      &_r {
        &_t {
          .tab-in {
            font-size: 1.3542vw;
            letter-spacing: 0.1354vw;
            padding: 0.1563vw 1.5625vw 0;
            &:first-child {
              border-radius: 0.2604vw 0 0 0.2604vw;
            }
            &:last-child {
              border-radius: 0 0.2604vw 0.2604vw 0;
            }
            &::after {
              width: 1.25vw;
              height: 0.625vw;
              border-left: 0.625vw solid transparent;
              border-right: 0.625vw solid transparent;
              border-top: 0.625vw solid #fdd3e3;
            }
          }
        }
        &_b {
          gap: 1.7708vw;
          margin-top: 2.2396vw;
          .list-in {
            iframe {
              width: 19.5313vw;
              height: 10.9896vw;
            }
            span {
              padding: 0.7813vw 1.0417vw 0;
              font-size: 1.0417vw;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .treatment-data {
    margin-top: 70px;
    overflow: hidden;
    &-title {
      span {
        font-size: 20px;
      }
    }
    &-in {
      padding: 0 20px;
      margin-top: 60px;
      .dataBox {
        width: 50%;
        &:not(:last-child) {
          margin-bottom: 62px;
        }
        .num {
          font-size: 35px;
          img {
            width: 100px;
          }
          .numIn {
            height: 50px;
            span {
              line-height: 50px;
            }
          }
        }
        .name {
          font-size: 24px;
        }
        &:nth-of-type(1) {
          img {
            left: 15% !important;
            top: -60% !important;
          }
        }
        &:nth-of-type(2) {
          img {
            left: -5% !important;
            top: -30% !important;
            width: 50%;
          }
        }
        &:nth-of-type(3) {
          img {
            left: 5% !important;
            top: -50% !important;
          }
        }
        &:nth-of-type(4) {
          img {
            width: 70%;
            left: 45% !important;
            top: -10% !important;
          }
        }
      }
    }
    &-bText {
      font-size: 16px;
      margin-top: 0px;
    }
  }
  .indexPage {
    width: 100%;
    background: #fff;
    // padding: 0 0 90px;
  }
  //醫生團隊
  .index-doctorTeam {
    margin: 50px 0 0;
    width: 100%;
    &-con {
      width: 100%;
    }
    &-t {
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }
    &-tab1 {
      :deep(.areaTab) {
        div {
          font-size: 16px;
        }
      }
    }
    &-tab2 {
      padding: 0 30px;
      margin-top: 20px;
      &-in {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #00aeff;
        border-radius: 5px;
        & > div {
          font-size: 16px;
          border: none;
          &:not(:nth-of-type(n + 4)) {
            border-right: 1px solid #00aeff;
          }
          &:not(:nth-of-type(n + 5)) {
            border-bottom: 1px solid #00aeff;
          }
          &:nth-of-type(n + 6) {
            border-left: 1px solid #00aeff;
          }
          &.textlang-3,
          &.textlang-4 {
            min-width: calc(100% / 4);
          }
          &:first-child {
            border-radius: 0;
          }
          &:last-child {
            border-right: none;
            border-radius: 0;
          }
          &:hover {
            color: #00aeff;
            background: #fff;
          }
          &.index-doctorTeam-tab2-in-active {
            color: #fff;
            background: #00aeff;
          }
        }
        &.tablang-1,
        &.tablang-2,
        &.tablang-3,
        &.tablang-4 {
          & > div {
            border-bottom: none;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
    &-lists {
      margin-top: 20px;
      min-height: 96px;
      overflow: hidden;
      .pcLists {
        display: none;
      }
      .mbLists {
        display: block;
      }
    }
    &-detail {
      flex-direction: column;
      padding: 0;
      margin-top: 30px;
      &-l {
        width: 100%;
        &-in {
          &::after {
            display: none;
          }
        }
        img {
          border-radius: 0;
          &:nth-of-type(1) {
            border: none;
          }
          &:nth-of-type(2) {
            height: 100%;
            max-height: 90%;
            left: 50%;
            top: auto;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
        &-btn {
          display: none;
        }
      }
      &-r {
        .detail-1 {
          margin: 5px 0;
          padding: 0 30px;
          span {
            font-size: 18px;
            display: inline-block;
            &:nth-of-type(1) {
              font-size: 30px;
              letter-spacing: 2px;
              margin-right: 5px;
            }
          }
        }
        .detail-2 {
          span {
            width: 100%;
            font-size: 20px;
            padding: 5px 75px 5px 30px;
            clip-path: polygon(0 0, 85% 0, 90% 100%, 0 100%);
          }
        }
        .detail-3 {
          margin-top: 10px;
          padding: 0 30px;
          font-size: 16px;
        }
        .detail-4 {
          font-size: 16px;
          padding: 0 30px;
          margin-bottom: 30px;
          span {
            text-align: justify;
          }
        }
        .detail-5 {
          font-size: 12px;
          padding: 0 30px;
          display: flex;
          justify-content: center;
        }
        .detail-6 {
          display: flex;
          justify-content: center;
          margin-left: 0;
          span {
            font-size: 28px;
          }
        }
      }
    }
  }
  //個案分享
  .index-caseSharing {
    background: none;
    background: linear-gradient(0, #fee6f1 0%, rgba(255, 241, 240, 0) 100%);
    padding: 0;
    margin-top: 40px;
    &-in {
      width: 100%;
      margin: 15px auto 0;
      // padding: 20px 30px;
      padding: 20px 0;
      .in-top {
        display: flex;
        width: 100%;
        height: 56vw;
      }
      .in-cen {
        margin-top: 34px;
        flex-direction: column;
        &-box {
          width: 100%;
        }
      }
      .in-bottom {
        width: 100%;
        background: linear-gradient(
          0deg,
          rgba(255, 241, 240, 0.7) 41.54%,
          rgba(255, 241, 240, 0) 137.31%
        );
        padding: 20px 0;
        margin-top: 0;
        span {
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #ffffff;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #666666;
          transition: all 0.3s;
          &:hover {
            background: var(--indexColor3);
            color: #ffffff;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
  .index-org {
    margin-top: 90px;
    &-tag {
      width: 100%;
      max-width: calc(100% - 60px);
      margin-top: 30px;
      &-in {
        font-size: 16px;
      }
    }
    &-content {
      max-width: calc(100% - 20px);
      justify-content: flex-start;
      &-swiper {
        &-slie {
          justify-content: initial;
        }
      }
      &-in {
        margin: 0 10px 30px;
        width: calc((100% - 60px) / 3);
        img {
          max-height: 70px;
        }
      }
    }
  }
  .index-videoBox {
    &-tab {
      margin-top: 30px;
      .tab-in {
        border: 1px solid #fdd3e3;
        letter-spacing: 1.588px;
        font-size: 16px;
        padding: 3px 16px 0;
      }
    }
    &-in {
      grid-template-columns: repeat(1, 1fr);
      margin: 30px 30px 0 30px;
    }
    &-btn {
      position: relative;
      inset: auto;
      top: 0;
      display: flex;
      justify-content: center;
      margin: 10px auto 30px;

      span {
        float: initial;
        font-size: 20px;
        margin-left: 10px;
        &::before {
          border-bottom: 1px solid var(--indexColor1);
        }
        &::after {
          font-size: 18px;
        }
      }
    }
    .index-latestNews-line {
      width: 45%;
      margin: 0 auto;
    }
  }
  .Latest_Movies {
    margin-top: 70px;
    max-width: 100vw;
    overflow: hidden;
    opacity: 0.8;
    background: linear-gradient(
      270deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 1) 100%
    );
    padding: 20px 0;
    box-sizing: border-box;
    &_t {
      // width: 100vw;
      // margin-left: -30px;
      a {
        svg {
          width: 32px;
          height: 26px;
        }
        span {
          font-size: 18px;
          padding-right: 30px;
        }
      }
    }
    &_in {
      margin: 30px 30px 0;
      flex-direction: column;
      // margin-top: ;
      &_l {
        width: 84%;
        margin: 0;
        span {
          color: var(--indexColor1);
          padding-left: 0;
        }
        iframe {
          width: 100%;
          height: calc(153 / 315 * 100vw);
        }
      }
      &_r {
        &_t {
          justify-content: center;
          margin-top: 30px;
          margin-left: -50px;
          .tab-in {
            border: 1px solid #fdd3e3;
            letter-spacing: 1.588px;
            font-size: 16px;
            padding: 3px 16px 0;
          }
        }
        &_b {
          grid-template-columns: repeat(1, 1fr);
          gap: 25px;
          margin-top: 30px;
          width: 84%;
          .list-in {
            iframe {
              width: 100%;
              height: calc(153 / 315 * 100vw);
            }
            span {
            }
          }
        }
      }
      .index-latestNews-line {
        margin: 20px 0;
        margin-left: -60px;
        .point {
          width: calc(100% - 365px) !important;
          margin: 0px auto;
        }
      }
    }
  }
  .share-item {
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    & > div:nth-child(1) {
      max-width: 74.35vw;
      margin-left: 0;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      background: var(--White, #fff);
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        & > div:nth-child(1) {
          width: 29.48vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            & > span:nth-child(1) {
              color: var(--Theme-Color, #fc1682);
              font-family: FakePearl;
              font-size: 5.12vw;
              font-style: normal;
              font-weight: 600;
              line-height: 160%; /* 32px */
            }
            & > span {
              color: var(--Grey-Mid, #666);
              font-family: 'Noto Sans HK';
              font-size: 3.07vw;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 19.2px */
              letter-spacing: 1.2px;
            }
          }
        }
      }
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      background: var(--White, #fff);
      padding: 10px 15px;
      box-sizing: border-box;
      max-width: 74.35vw;
      display: flex;
      flex-direction: column;
      gap: 6px 0;
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
        }
      }
    }
    & > div:nth-child(2) {
      margin-left: auto;
      margin-right: 0;
      .item-title {
        color: var(--Theme-Color, #fc1682);
      }
    }
  }
  .item-title {
    color: var(--Blue-Deep, #00aeff);
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 32px */
  }
  .item-tag {
    color: var(--Grey-Pale, #aaa);
    font-family: 'Noto Sans HK';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
    letter-spacing: 1.2px;
  }
  .item-date {
    color: var(--Grey-Mid, #666);
    font-family: 'Noto Sans HK';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
    letter-spacing: 1.2px;
    text-align: right;
  }
  .item-content {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 3.07vw;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
    letter-spacing: 1.2px;
    display: flex;
    flex-direction: column;
    & > span {
      line-height: 160%;
      min-height: 19.19px;
    }
  }
}
</style>
