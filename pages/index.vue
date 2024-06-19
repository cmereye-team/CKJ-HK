<script lang="ts" setup>
import gsap from 'gsap';
import { Autoplay } from 'swiper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppState } from '~/stores/appState'
import doctorLists_cs from '~/assets/js/doctor'
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding,useWindowSize } from '@vueuse/core'
const appState = useAppState()
const { t } = useLang()
useHead({
  title: "CKJ愛康健齒科連鎖 | 香港官方網站 | 長者醫療券大灣區試點",
  titleTemplate: '',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '愛康健集團是大灣區牙科連鎖機構，其口腔醫院為香港政府指定長者醫療券大灣區試點。（香港熱線: 6933 8128）14間門診有超過20種牙科治療項目，專注為港服務超過29年，可線上預約。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳愛康健口腔醫院 愛康健齒科集團 基楚牙科 美容牙科 深圳牙科 醫療券 長者醫療券大灣區試點 深圳睇牙 深圳整牙 種植牙 假牙 洗牙 補牙 拔牙 智慧齒 杜牙根 根管治療 兒童牙科 牙齒美白 牙齒檢查 矯齒 箍牙 牙醫 牙医 深圳 羅湖 朱咪咪 掛號收費 牙科價目表 線上預約 愛康健齒科,深圳爱康健口腔医院,深圳市口腔医院,深圳牙齿矫正多少钱,愛康健口腔醫院,希玛爱康健,深圳口腔医院,深圳牙科医院,深圳种植牙,深圳植牙價錢,愛康健,香港長者醫療券,愛康健牙科,愛康健牙科中心,愛康健牙科診所',
    },
  ],
})

const caseSharingLists = [
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_1.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/72a1864e2021e804.jpg'
  },
  {
    name: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.name',
    skill: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.skill',
    text: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.text',
    context: 'pages.index.caseSharing.caseSharingLists.caseSharing_2.context',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/f1fab4a43cdea943.jpg'
  },
]

const caseSharingTopData = {
  type: 'pages.index.caseSharing.caseSharingTopData.type',
  name: 'pages.index.caseSharing.caseSharingTopData.name',
  skill: 'pages.index.caseSharing.caseSharingTopData.skill',
  process: 'pages.index.caseSharing.caseSharingTopData.process',
  text: 'pages.index.caseSharing.caseSharingTopData.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/06/b6685121c74c93e0.png'
}

//医生模块轮播图事件
let doctorTeamCurrent = ref(1)
const onSlideDoctorTeamSwiperChange = (swiper:any) => {
  doctorTeamCurrent.value = swiper.realIndex + 1
}

let areaTabCurNum = computed(()=>{
  return appState.areaTabCurNum
})

const treatmentData = [
  {
    name: '接診人數',
    num: "259,376",
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_1.svg',
    left: '30%',
    top: '-31%'
  },
  {
    name: '已修復牙冠',
    num: "25,295",
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_3.svg',
    left: '15%',
    top: '50%'
  },
  {
    name: '種植牙數',
    num: "27,008",
    bg: 'https://static.cmereye.com/imgs/2024/01/5bc753351f96d0d0.png',
    left: '15%',
    top: '-10%'
  },
  {
    name: '全瓷貼面數',
    num: "3,336",
    bg: 'https://static.cmereye.com/static/ckj/imgs/svg/icon_16_4.svg',
    left: '53%',
    top: '-3%'
  }
]
let showTreatment = ref(false)
const scrollWatch = () => {
  let _dome:any = document.getElementsByClassName('treatment-data')
  let _offsetTop = 0
  if(_dome && _dome.length){
    _offsetTop = _dome[0].offsetTop
  }
  if(_offsetTop >= window.pageYOffset && _offsetTop + 200 <= window.pageYOffset + window.innerHeight){
    showTreatment.value = true
  }
}
onMounted(()=>{
  scrollWatch()
  window.addEventListener('scroll',scrollWatch)
})

watch(
  areaTabCurNum, (newValue, oldValue) => {
    changeAreaTabCur(newValue)
  },
  {
    deep: true,
  }
);

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

let actDoctorListd:any = ref([])

const changleDoctorLists:any = () =>{
  let a = doctorLists_cs[appState.areaTabCurNum]
  let b = a.filter((temp:any)=>{
    return temp.dentalProfessionId.includes(dentalProfessionCur.value) && temp.isIndexShow
  }) || []
  actDoctorListd.value = b
}
let loading = ref(false)
const handletab2 = async (id:string,dpc:Boolean = false)=>{
  if(!dpc && dentalProfessionCur.value === id) return 
  actDoctorListd.value = []
  loading.value = true
  setTimeout(() => {
    dentalProfessionCur.value = id;
    changleDoctorLists()
    doctorCur.value = actDoctorListd.value.length>0 ? actDoctorListd.value[0].id : ''
    nextTick(()=>{
      doctorItemSwiper.slideToLoop('0')
    })
    loading.value = false
  }, 500);
}
const changeAreaTabCur = (_idx:any) => {
  if(_idx === 3){
    handletab2('102',true)
  }else{
    handletab2('101',true)
  }
}
const handleDoctorItem = (id:any) =>{
  doctorCur.value = id
  let _idx = actDoctorListd.value.findIndex(item=>item.id === id) || 0
  doctorItemSwiper.slideToLoop(_idx)
}
let doctorItemSwiper:any = {
  slideToLoop: (a)=>{}
}

const setDoctorItemSwiper = (swiper:any)=>{
  doctorItemSwiper = swiper;
}
const doctorItemSlideChange = (swiper) =>{
  nextTick(()=>{
    doctorCur.value = actDoctorListd.value[swiper.realIndex].id || ''
    doctorTabSwiper_pc.slideToLoop(swiper.realIndex)
    doctorTabSwiper_mb.slideToLoop(swiper.realIndex)
  })
}
let doctorTabSwiper_pc = {
  slideToLoop: (a)=>{}
}
let doctorTabSwiper_mb = {
  slideToLoop: (a)=>{}
}
const setDoctorTabSwiperRef_pc = (swiper:any) => {
  doctorTabSwiper_pc = swiper;
}
const setDoctorTabSwiperRef_mb = (swiper:any) => {
  doctorTabSwiper_mb = swiper;
}
const changeDentalProfessionList = () =>{
  let _lists:any = []
  if(doctorLists_cs[appState.areaTabCurNum].length>0){
    for(var i = 0; i<doctorLists_cs[appState.areaTabCurNum].length;i++ ){
      if(doctorLists_cs[appState.areaTabCurNum][i].isIndexShow){
        _lists = [ ..._lists, ...doctorLists_cs[appState.areaTabCurNum][i].dentalProfessionId]
        _lists = [...new Set(_lists)];
      }
    }
  }
  return dentalProfessionList.filter(item => _lists.includes(item.id)) || []
}


let orgTabCur = ref(0)
const orgTabLists = [
  '監管單位',
  '戰略合作',
  '媒體合作',
  '服務客戶'
]
const orgLists = [
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-2001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-2007.png'
  ],
  [
    'https://static.cmereye.com/static/ckjnewsite/org/org-1001.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1002.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1003.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1004.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1005.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1006.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1007.png',
    'https://static.cmereye.com/static/ckjnewsite/org/org-1008.png'
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
    'https://static.cmereye.com/static/ckjnewsite/org/org-3013.png'
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
    'https://static.cmereye.com/static/ckjnewsite/org/org-4013.png'
  ]
]
const handleorgtabfun = (orgTabIndex) =>{
  orgTabCur.value = orgTabIndex
  indexOrgSwiperRef.slideToLoop(orgTabIndex)
}
let indexOrgSwiperRef ={
  slideToLoop: (a)=>{}
}
const setIndexOrgSwiperRef = (swiper:any)=>{
  indexOrgSwiperRef = swiper;
}
const onIndexOrgSlideChange = (swiper) =>{
  orgTabCur.value = (swiper.realIndex ? Number(swiper.realIndex) : 0)
}

const doctorTeam = ref(null)
const { top,bottom } = useElementBounding(doctorTeam)
const { height } = useWindowSize()

let Latest_Movies_cur = ref(0)
const Latest_Movies = ref([
  [
    {
      link: 'https://youtu.be/0UslK-Xrm5o',
      url: 'https://www.youtube.com/embed/0UslK-Xrm5o?si=bpyjiRhIMOLrIM1Q',
      name: '🛍️ 潮流興北上消費，超值吃喝玩樂睇牙！🎤 咪咪姐推薦實力牙科 🦷 北上睇牙 | 大灣區醫療'
    },{
      link: 'https://youtu.be/Hxm0arbKJbc',
      url: 'https://www.youtube.com/embed/Hxm0arbKJbc?si=1Xat0Ooo-lIWqyaS',
      name: '愛康健超聲波洗牙 ¥88 🦷 超級抵呀！| 北上睇牙 | 大灣區醫療 | 洗牙'
    }
  ],
  [
    {
      link: 'https://youtu.be/izyVofSiVas',
      url: 'https://www.youtube.com/embed/izyVofSiVas?si=VJ-9jtOD1Nx2Ctpz',
      name: '【什麼是種植牙「即剝即種」?】愛康健齒科 | 植牙 | 牙科常見問題 | 鞏賢平醫生'
    },{
      link: 'https://youtu.be/sVCzNLe7i_s',
      url: 'https://www.youtube.com/embed/sVCzNLe7i_s?si=JpX5VvPxZz7AexFD',
      name: '【新種植牙新技術】愛康健齒科 | 植牙 | 牙科常見問題 | 鞏賢平醫生'
    }
  ],
  [
    {
      link: 'https://youtu.be/7pDm-bLWrSM',
      url: 'https://www.youtube.com/embed/7pDm-bLWrSM?si=79EOTWDF5JRtovIu',
      name: '【愛康健王琦口腔診所】福田口岸最近牙科診所 | 覆診方便 | 過馬路即到 | 港人北上睇牙首選 🦷'
    },{
      link: 'https://youtu.be/OEMkvjgnhtw',
      url: 'https://www.youtube.com/embed/OEMkvjgnhtw?si=7MpoHt3ny6um6KTv',
      name: '【愛康健李川口腔診所】福田旗艦店 | 4層26個診症間 | 北上睇牙唔使等 🦷'
    }
  ]
])


onMounted(()=>{
  handletab2('101')
})
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
          <div class="index-doctorTeam-tab2-in" :class="`tablang-${changeDentalProfessionList().length}`">
            <div :class="[{'index-doctorTeam-tab2-in-active': dentalProfessionCur === dentalProfessionItem.id},`textlang-${dentalProfessionItem.name.length}`]" v-for="(dentalProfessionItem,dentalProfessionIndex) in changeDentalProfessionList()" :key="dentalProfessionIndex" @click="handletab2(dentalProfessionItem.id)">
              {{dentalProfessionItem.name}}
            </div>
          </div>
        </div>
        <div class="index-doctorTeam-lists index-doctorTeam-con">
          <div class="pcLists">
            <section v-if="actDoctorListd.length < 7">
              <div class="pcLists-in" :class="{acitve:doctorCur===doctorItem.id}" v-for="doctorItem in actDoctorListd" :key="doctorItem.id" @click="handleDoctorItem(doctorItem.id)">
                <div class="pcLists-in-img">
                  <img :src="doctorItem.mbImg || ''" :alt="doctorItem.name" :title="doctorItem.name">
                </div>
              </div>
            </section>
            <section v-else>
              <Swiper
                class="swiperpcLists-in"
                :slidesPerView="7"
                @swiper="setDoctorTabSwiperRef_pc"
              >
                <SwiperSlide class="swiperpcLists-in-slide" v-for="doctorItem in actDoctorListd" :key="doctorItem.id">
                  <div class="swiperpcLists-in-img" :class="{acitve:doctorCur===doctorItem.id}" @click="handleDoctorItem(doctorItem.id)">
                    <img :src="doctorItem.mbImg || ''" :alt="doctorItem.name" :title="doctorItem.name">
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
              <SwiperSlide class="mbLists-in-slide" v-for="doctorItem in actDoctorListd" :key="doctorItem.id">
                <div class="mbLists-in-img" :class="{acitve:doctorCur===doctorItem.id}" @click="handleDoctorItem(doctorItem.id)">
                  <img :src="doctorItem.mbImg || ''" :alt="doctorItem.name" :title="doctorItem.name">
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
          >
            <Swiper-slide v-for="doctorItem in actDoctorListd" :key="`d${doctorItem.id}`">
              <div class="index-doctorTeam-detail index-doctorTeam-con" :id="`d${doctorItem.id}`">
                <div class="index-doctorTeam-detail-l">
                  <div class="index-doctorTeam-detail-l-in">
                    <img :srcset="'https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp 768w, https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp'" src="https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp" alt="">
                    <img :srcset="`${doctorItem.mbImg} 768w, ${doctorItem.imgUrl}`" :src="doctorItem.imgUrl" :alt="doctorItem.name" :title="doctorItem.name"> 
                  </div>
                  <div class="index-doctorTeam-detail-l-btn">
                    <PageAnimBtnTypeTwo str="線上咨詢" />
                  </div>
                </div>
                <div class="index-doctorTeam-detail-r">
                  <div class="detail-1">
                    <span>{{doctorItem.name}}</span>
                    <span>{{doctorItem.text}}</span>
                  </div>
                  <div class="detail-2" v-if="doctorItem.newOrg">
                    <span>{{doctorItem.newOrg}}</span>
                  </div>
                  <div class="detail-3">
                    <span v-for="(jobItem,jobIndex) in doctorItem.newJobs" :key="jobIndex">{{jobItem}}</span>
                  </div>
                  <div class="detail-4">
                    <span>擅長項目：</span>
                    <span>
                      {{doctorItem.newSkilled}}
                    </span>
                  </div>
                  <div class="detail-5">
                    <span v-for="(tagItem,tagIndex) in doctorItem.tags" :key="tagIndex">
                      {{tagItem}}
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
      <div class="Latest_Movies">
        <div class="Latest_Movies_t smallPageCon">
          <div class="Latest_Movies_t_title">
            <div class="index_title index_title_2">最新影片</div>
          </div>
          <nuxt-link to="https://www.youtube.com/@ckjhkofficial">
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="36" viewBox="0 0 44 36" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.6583 2.69702C42.341 3.48136 42.8312 4.45663 43.08 5.52523C44 9.46938 44 17.6944 44 17.6944C44 17.6944 44 25.9195 43.08 29.8637C42.8312 30.9323 42.341 31.9075 41.6583 32.6919C40.9756 33.4762 40.1245 34.0421 39.19 34.3329C35.75 35.3889 22 35.3889 22 35.3889C22 35.3889 8.25 35.3889 4.81 34.3329C3.87554 34.0421 3.02438 33.4762 2.34169 32.6919C1.65901 31.9075 1.16876 30.9323 0.92 29.8637C0 25.9195 0 17.6944 0 17.6944C0 17.6944 0 9.46938 0.92 5.52523C1.16876 4.45663 1.65901 3.48136 2.34169 2.69702C3.02438 1.91268 3.87554 1.34678 4.81 1.05596C8.25 0 22 0 22 0C22 0 35.75 0 39.19 1.05596C40.1245 1.34678 40.9756 1.91268 41.6583 2.69702ZM29.0048 17.6954L17.5048 10.2266V25.1641L29.0048 17.6954Z" fill="#FC1682"/>
</svg>
            <span>@ckjhkofficial</span>
          </nuxt-link>
        </div>
        <div class="Latest_Movies_in smallPageCon">
          <div class="Latest_Movies_in_l">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Hxm0arbKJbc?si=7xJZxGlpRw9GxkIZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <span>愛康健超聲波洗牙 ¥88 🦷 超級抵呀！| 北上睇牙 | 大灣區醫療 | 洗牙</span>
          </div>
          <div class="Latest_Movies_in_r">
            <div class="Latest_Movies_in_r_t">
              <div class="tab-in" :class="{active: Latest_Movies_cur === 0}" @click="Latest_Movies_cur = 0">優惠推廣</div>
              <div class="tab-in" :class="{active: Latest_Movies_cur === 1}" @click="Latest_Movies_cur = 1">醫師解難</div>
              <div class="tab-in" :class="{active: Latest_Movies_cur === 2}" @click="Latest_Movies_cur = 2">到診攻略</div>
            </div>
            <div class="Latest_Movies_in_r_b">
              <nuxtLink class="list-in" v-for="(item,index) in Latest_Movies[Latest_Movies_cur]" :key="index">
                <iframe width="560" height="315" :src="item.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span>{{item.name}}</span>
              </nuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="index-videoBox">
        <div class="index-videoBox-t smallPageCon">
          <div class="index_title index_title_2">專題報導</div>
        </div>
        <div class="index-videoBox-c smallPageCon">
          <div class="index-videoBox-c-l">
            <div>HK01</div>
            <div>深圳食買玩，點少得睇牙!口岸位置、性價比高 咪咪姐推薦口腔醫院</div>
            <div class="index-videoBox-c-l-btn">
              <PageAnimBtnTypeTwo link="/news/article/31" str="查看原文" />
            </div>
          </div>
          <div class="index-videoBox-c-r">
            <!-- <a href="https://www.hk01.com/%E5%81%A5%E5%BA%B7Easy/959987/%E6%B7%B1%E5%9C%B3%E9%A3%9F%E8%B2%B7%E7%8E%A9-%E9%BB%9E%E5%B0%91%E5%BE%97%E7%9D%87%E7%89%99-%E5%8F%A3%E5%B2%B8%E4%BD%8D%E7%BD%AE-%E6%80%A7%E5%83%B9%E6%AF%94%E9%AB%98-%E5%92%AA%E5%92%AA%E5%A7%90%E6%8E%A8%E8%96%A6%E5%8F%A3%E8%85%94%E9%86%AB%E9%99%A2" target="black">
              <img src="https://static.cmereye.com/imgs/2023/12/0ef603cd96873713.webp" alt="專題報導" title="專題報導">
              <img src="https://static.cmereye.com/imgs/2023/12/e974c03be612528f.png" class="icon" alt="">
            </a> -->
            <nuxt-link to="/news/article/31">
              <img src="https://static.cmereye.com/imgs/2023/12/0ef603cd96873713.webp" alt="專題報導" title="專題報導">
            </nuxt-link>
          </div>
        </div>
      </div> 
      <!-- 關於我們 -->
      <AboutUs />
      <!-- 品牌理念 -->
      <brandConcept-test />
      <div class="index-org">
        <div class="index-org-t smallPageCon">
          <div class="index_title index_title_2">相關機構</div>
        </div>
        <div class="index-org-tag smallPageCon">
          <div class="index-org-tag-in" :class="{'active': orgTabCur === orgTabIndex}" v-for="(orgTabItem,orgTabIndex) in orgTabLists" :key="orgTabIndex" @click="handleorgtabfun(orgTabIndex)">
            {{orgTabItem}}
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
            <Swiper-slide class="index-org-content-swiper-slie" v-for="(orgListItem,orgListIndex) in orgLists" :key="orgListIndex">
              <div class="index-org-content-in" :class="`index-org-content-${orgTabCur}`" v-for="(orgItem,orgIndex) in orgListItem" :key="orgIndex">
                <img :src="orgItem" alt="">
              </div>
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
        
      <!-- 個案分享 -->
      <div class="index-caseSharing">
        <div class="index-caseSharing-title">
          <div class="index_title">{{$t('pages.index.caseSharing.title')}}</div>
        </div>
        <div class="index-caseSharing-in">
          <div class="in-top">
            <CaseSharingVideoItem :caseSharingData="caseSharingTopData" />
          </div>
          <div class="in-cen">
            <div class="in-cen-box" v-for="(caseSharingItem,caseSharingIndex) in caseSharingLists" :key="caseSharingIndex">
              <CaseSharingImageItem :userInfo="caseSharingItem" :userIndex="caseSharingIndex" />
            </div>
          </div>
        </div>
      </div>
      <div class="treatment-data">
        <div class="treatment-data-title">
          <span>早期深圳二級口腔醫院</span>
          <span>香港品牌 實力信心</span>
        </div>
        <div class="treatment-data-in smallPageCon">
          <div class="dataBox" v-for="(treatmentItem,treatmentIndex) in treatmentData" :key="treatmentIndex">
            <div class="num">
              <img :src="treatmentItem.bg" :style="{left: treatmentItem.left,top: treatmentItem.top}" alt="">
              <div class="numIn" v-for="(numItem,numIndex) in treatmentItem.num" :key="numIndex">
                <span v-if="numItem === ','">{{numItem}}</span>
                <div v-else class="numInAnim" :class="[{showNumInAnim: showTreatment}]" :style="{'animation-delay': `${(treatmentItem.num.length - numIndex) * 0.2}s`}">
                  <span v-for="numInItem in Number(numItem) ? Number(numItem) : 10" :key="numInItem">
                    {{numInItem === 10 ? 0 : numInItem}}
                  </span>
                </div>
              </div>
              <span class="numBold">+</span>
            </div>
            <div class="name">{{treatmentItem.name}}</div>
          </div>
        </div>
        <div class="treatment-data-bText">
          *以上數據由2019年開始統計至今
        </div>
      </div>
      <!-- 聯絡我們 -->
      <NewAddress />
      <ContactForm-new />
    </div>
    <!-- <div style="position: fixed; top: 50%; left: 0;z-index: 9999;">{{top}} --- {{bottom}} --- {{(top<(height / 3 * 2)) && (bottom > 0)}}</div> -->
    <!-- <PageAdbox /> -->
    <PageFooter />
    <PageNavbar :showDialogBox="(top<(height / 3 * 2)) && (bottom > (height / 3))" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes numAnim {
  100%{
    // transform: translateY(calc((100% - 96px) * -1));
    transform: none;
  }
}
svg:hover path{
  cursor: pointer;
  fill:rgba(255, 120, 117, 0.65)
}
.indexPage {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 1;
  // padding-bottom: 140px;
  // overflow: hidden;
}
.treatment-data{
  margin-top: 80px;
  &-title{
    span{
      color: var(--indexColor1);
      text-align: center;
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      display: block;
    }
  }
  &-in{
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    .dataBox{
      flex: 1;
      .num{
        color: var(--indexColor1);
        text-align: center;
        font-size: 60px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%;
        display: flex;
        justify-content: center;
        position: relative;
        img{
          position: absolute;
        }
        .numBold{
          font-family: initial;
          font-weight: bold;
          margin-top: 5px;
        }
        .numIn{
          height: 96px;
          overflow: hidden;
          position: relative;
          span{
            line-height: 96px;
            display: block;
          }
          .numInAnim{
            opacity: 0;
            transition: all .3s;
            display: flex;
            flex-direction: column-reverse;
            transform: translateY(-100%);
            &.showNumInAnim{
              opacity: 1;
              animation: numAnim 1s ease-in-out forwards;
            }
          }
        }
      }
      .name{
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
  &-bText{
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
.index-doctorTeam{
  margin: 60px auto 50px;
  &-t{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-con{
    width: 70%;
    max-width: 1280px;
    margin: 25px auto 0;
  }
  &-tab1{
    :deep(.areaTab){
      div{
        flex: 1;
        text-align: center;
        font-size: 20px;
      }
    }
  }
  &-tab2{
    margin-top: 10px;
    &-in{
      width: 100%;
      display: flex;
      &>div{
        flex: 1;
        color: #00AEFF;
        transition: all .3s;
        border-top: 2px solid #00AEFF;
        border-bottom: 2px solid #00AEFF;
        border-left: 2px solid #00AEFF;
        padding: 5px 0;
        font-size: 18px;
        text-align: center;
        letter-spacing: 3px;
        cursor: pointer;
        &:nth-of-type(4){
          flex: 1.3;
        }
        &:nth-of-type(5){
          flex: 1.3;
        }
        &:nth-of-type(6){
          flex: 1.3;
        }
        &:nth-of-type(7){
          flex: 1.7;
        }
        &:first-child{
          border-radius: 5px 0 0 5px;
        }
        &:last-child{
          border-radius: 0 5px 5px 0;
          border-right: 2px solid #00AEFF;
        }
        &:hover,&.index-doctorTeam-tab2-in-active{
          color: #fff;
          background: #00AEFF;
        }
      }
    }
  }
  &-lists{
    width: 100%;
    min-height: 152px;
    .pcLists{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      &-in{
        cursor: pointer;
        margin-bottom: 30px;
        &:not(:last-child){
          margin-right: 30px;
        }
        &-img{
          width: 150px;
          height: 150px;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209,.5);
          transition: all .3s;
        }
        &:hover,&.acitve{
          .pcLists-in-img{
            background: #FFA8C6;
          }
        }
      }
      &>section{
        max-width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .swiperpcLists-in{
        width: 100%;
        overflow: visible;
        &-img{
          margin: 0 15px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209,.7);
          transition: all .3s;
          cursor: pointer;
          &:hover,&.acitve{
            background: #FFA8C6;
          }
        }
      }
    }
    .mbLists{
      width: calc(100% - 40px);
      margin: 0 auto;
      display: none;
      &-in{
        width: 100%;
        overflow: visible;
        &-img{
          // width: calc(100% - 20px);
          margin: 0 10px;
          height: auto;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(254, 169, 209,.7);
          &.acitve{
            background: #FFA8C6;
          }
        }
      }
    }
  }
  &-detail{
    padding: 20px;
    display: flex;
    margin-top: 50px;
    &-l{
      width: calc(434 / 1365 * 100%);
      max-width: 434px;
      position: relative;
      height: max-content;
      &-in{
        width: 100%;
        &::after{
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background: rgba(254, 169, 209,.7);
          z-index: 0;
        }
      }
      img{
        position: relative;
        border-radius: 30px;
        z-index: 1;
        &:nth-of-type(1){
          border: 3px solid var(--indexColor1);
        }
        &:nth-of-type(2){
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          max-height: calc(92% - 3px);
          display: block;
        }
      }
      &-btn{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,50%);
        z-index: 1;
        width: max-content;
      }
    }
    &-r{
      flex: 1;
      .detail-1{
        color: var(--indexColor1);
        padding-left: 20px;
        span{
          font-size: 20px;
          &:nth-of-type(1){
            font-size: 35px;
            margin-right: 5px;
          }
        }
      }
      .detail-2{
        color: #fff;
        span{
          font-size: 28px;
          padding: 5px 70px 5px 20px;
          display: inline-block;
          background: var(--indexColor1);
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
        }
      }
      .detail-3{
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 30px;
        margin-top: 5px;
        span{
          display: block;
        }
      }
      .detail-4{
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        margin-bottom: 20px;
        span{
          display: block;
          display: -webkit-box;  
          -webkit-line-clamp: 3; 
          line-clamp: 3; 
          -webkit-box-orient: vertical;  
          overflow: hidden;  
          text-overflow: ellipsis; 
        }
      }
      .detail-5{
        color: var(--textColor);
        padding-left: 20px;
        font-size: 20px;
        span{
          border-bottom: 1px solid var(--textColor);
          &:not(:last-child){
            margin-right: 10px;
          }
        }
      }
      .detail-6{
        margin-top: 30px;
        margin-left: 20px;
        margin-bottom: 20px;
        display: none;
      }
    }
  }
  &-detailBox{
    min-height: 550px;
  }
  .index-doctorTeam-detail-swiper{
    // overflow: visible;
    padding-bottom: 40px;
  }
}
//個案分享
.index-caseSharing{
  padding: 35px 0;
  background: linear-gradient(180deg,rgba(255, 241, 240, 0) 0%,var(--indexColor2) 100%);
  margin-top: 80px;
  &-title{
    display: flex;
    justify-content: center;
  }
  &-in{
    width: 80%;
    max-width: 1046px;
    margin: 45px auto 0;
    .in-top{
      display: flex;
    }
    .in-cen{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 120px;
      &-box{
        width: calc(50% - 8px);
      }
    }
  }
}
.index-org{
  margin-top: 120px;
  &-tag{
    width: 80%;
    max-width: 804px;
    display: flex;
    margin-top: 50px;
    &-in{
      flex: 1;
      color: var(--indexColor1);
      padding: 5px;
      font-size: 24px;
      text-align: center;
      border-top: 2px solid var(--indexColor1);
      border-bottom: 2px solid var(--indexColor1);
      border-left: 2px solid var(--indexColor1);
      transition: all .3s;
      cursor: pointer;
      &:first-child{
        border-radius: 5px 0 0 5px;
      }
      &:last-child{
        border-radius: 0 5px 5px 0;
        border-right: 2px solid var(--indexColor1);
      }
      &:hover,&.active{
        color: #fff;
        background: var(--indexColor1);
      }
    }
  }
  &-content{
    max-width: 1200px;
    margin-top: 30px;
    &-swiper{
      width: 100%;
      &-slie{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    &-in{
      width: calc((100% - 300px) / 5);
      margin: 0 30px 40px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    &-0{
      align-items: flex-start !important;
    }
  }
}
.index-videoBox{
  margin-top: 60px;
  margin-bottom: 60px;
  &-c{
    display: flex;
    align-items: center;
    margin-top: 50px;
    &-l{
      flex: 1;
      &>div{
        &:nth-of-type(1){
          color: #4D4D4D;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; 
        }
        &:nth-of-type(2){
          color: #FC1682;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; 
        }
      }
      &-btn{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        line-height: 1.6;
      }
    }
    &-r{
      width: calc((966 / 1432) * 100%);
      padding-left: calc((100 / 1432) * 100%);
      img{
        width: 100%;
      }
      a{
        position: relative;
      }
      .icon{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 20%;
        height: auto;
        transition: all .3s;
        &:hover{
          width: 23%;
        }
      }
    }
  }
}
.Latest_Movies{
  &_t{
    display: flex;
    justify-content: space-between;
    a{
      display: flex;
      align-items: center;
      svg{
        width: 44px;
        height: 35px;
        margin-right: 10px;
      }
      span{
        color: #4D4D4D;
        text-align: center;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
      }
    }
  }
  &_in{
    margin-top: 38px;
    display: flex;
    &_l{
      margin-right: 33px;
      width: 540px;
      display: flex;
      flex-direction: column;
      span{
        padding: 15px 20px 0;
        color: var(--Grey-Deep, #4D4D4D);
        text-align: justify;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        display: block;
      }
      iframe{
        width: 540px;
        height: 303px;
      }
    }
    &_r{
      &_t{
        display: flex;
        .tab-in{
          border: 2px solid #FDD3E3;
          color: var(--Grey-Deep, #4D4D4D);
          text-align: center;
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          letter-spacing: 2.6px;
          cursor: pointer;
          padding: 3px 30px 0;
          position: relative;
          transition: all .3s;
          &:not(:last-child){
            border-right: none;
          }
          &:first-child{
            border-radius: 5px 0 0 5px;
          }
          &:last-child{
            border-radius: 0 5px 5px 0;
          }
          &::after{
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 12px;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-top: 12px solid #FDD3E3;
            opacity: 0;
            transition: all .3s;
          }
          &.active{
            color: #fff;
            background: var(--indexColor1);
            &::after{
              opacity: 1;
            }
          }
        }
      }
      &_b{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 34px;
        margin-top: 43px;
        .list-in{
          iframe{
            width: 375px;
            height: 211px;
            max-width: 100%;
          }
          span{
            padding: 15px 20px 0;
            color: var(--Grey-Deep, #4D4D4D);
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
@media (min-width: 768px) and (max-width: 1920px){
  .index-org{
    margin-top: 6.25vw;
    &-tag{
      max-width: 41.875vw;
      margin-top: 2.6042vw;
      &-in{
        padding: .2604vw;
        font-size: 1.25vw;
        &:first-child{
          border-radius: .2604vw 0 0 .2604vw;
        }
        &:last-child{
          border-radius: 0 .2604vw .2604vw 0;
        }
      }
    }
    &-content{
      max-width: 62.5vw;
      margin-top: 1.5625vw;
      &-in{
        width: calc((100% - 15.625vw) / 5);
        margin: 0 1.5625vw 2.0833vw;
      }
    }
  }
  .index-videoBox{
    // margin-top: 4.1667vw;
    &-c{
      margin-top: 2.6042vw;
      &-l{
        &>div{
          &:nth-of-type(1){
            font-size: 1.0417vw;
          }
          &:nth-of-type(2){
            font-size: 1.4583vw;
          }
        }
        &-btn{
          margin-top: 1.0417vw;
        }
      }
    }
  }
  .index-caseSharing{
    padding: 1.8229vw 0;
    margin-top: 4.1667vw;
    &-in{
      width: 70%;
      max-width: 54.4792vw;
      margin: 2.3438vw auto 0;
      .in-cen{
        margin-top: 6.25vw;
        &-box{
          width: calc(50% - .4167vw);
        }
      }
    }
  }
  .treatment-data{
    margin-top: 4.1667vw;
    &-title{
      span{
        font-size: 1.8229vw;
      }
    }
    &-in{
      margin-top: 2.5vw;
      .dataBox{
        .num{
          font-size: 3.125vw;
          .numBold{
            margin-top: .2604vw;
          }
          .numIn{
            height: 5vw;
            span{
              line-height: 5vw;
            }
          }
        }
        .name{
          font-size: 1.4583vw;
          margin-top: -0.5208vw;
        }
      }
    }
    &-bText{
      font-size: 1.0417vw;
      margin-top: 1.5625vw;
    }
  }
  .index-doctorTeam{
    margin: 3.125vw auto 2.6042vw;
    &-con{
      max-width: 66.6667vw;
      margin: 1.3021vw auto 0;
    }
    &-tab1{
      :deep(.areaTab){
        div{
          font-size: 1.0417vw;
        }
      }
    }
    &-tab2{
      margin-top: .5208vw;
      &-in{
        &>div{
          padding: .2604vw 0;
          font-size: .9375vw;
          letter-spacing: .1563vw;
          &:first-child{
            border-radius: .2604vw 0 0 .2604vw;
          }
          &:last-child{
            border-radius: 0 .2604vw .2604vw 0;
          }
        }
      }
    }
    &-lists{
      min-height: 7.9167vw;
      .pcLists{
        &-in{
          margin-bottom: 1.5625vw;
          &:not(:last-child){
            margin-right: 1.5625vw;
          }
          &-img{
            width: 7.8125vw;
            height: 7.8125vw;
            border-radius: .5208vw;
          }
        }
        .swiperpcLists-in{
          &-img{
            margin: 0 .7813vw;
            border-radius: .5208vw;
          }
        }
      }
      .mbLists{
        width: calc(100% - 2.0833vw);
        &-in{
          &-img{
            margin: 0 .5208vw;
            border-radius: .5208vw;
          }
        }
      }
    }
    &-detail{
      padding: 1.0417vw;
      margin-top: 2.6042vw;
      &-l{
        max-width: 22.6042vw;
        &-in{
          &::after{
            top: -1.0417vw;
            left: -1.0417vw;
            border-radius: 1.5625vw;
          }
        }
        img{
          border-radius: 1.5625vw;
        }
      }
      &-r{
        .detail-1{
          padding-left: 1.0417vw;
          span{
            font-size: 1.0417vw;
            &:nth-of-type(1){
              font-size: 1.8229vw;
              margin-right: .2604vw;
            }
          }
        }
        .detail-2{
          span{
            font-size: 1.4583vw;
            padding: .2604vw 3.6458vw .2604vw 1.0417vw;
          }
        }
        .detail-3{
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.5625vw;
          margin-top: .2604vw;
        }
        .detail-4{
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
        .detail-5{
          padding-left: 1.0417vw;
          font-size: 1.0417vw;
          span{
            &:not(:last-child){
              margin-right: .5208vw;
            }
          }
        }
        .detail-6{
          margin-top: 1.5625vw;
          margin-left: 1.0417vw;
          margin-bottom: 1.0417vw;
        }
      }
    }
    &-detailBox{
      min-height: 28.6458vw;
    }
    .index-doctorTeam-detail-swiper{
      padding-bottom: 2.0833vw;
    }
  }
  .Latest_Movies{
    &_t{
      a{
        svg{
          width: 2.2917vw;
          height: 1.8229vw;
          margin-right: .5208vw;
        }
        span{
          font-size: 1.1458vw;
        }
      }
    }
    &_in{
      margin-top: 1.9792vw;
      &_l{
        margin-right: 1.7188vw;
        width: 28.125vw;
        span{
          padding: .7813vw 1.0417vw 0;
          font-size: 1.0417vw;
        }
        iframe{
          width: 28.125vw;
          height: 15.7813vw;
        }
      }
      &_r{
        &_t{
          .tab-in{
            font-size: 1.3542vw;
            letter-spacing: .1354vw;
            padding: .1563vw 1.5625vw 0;
            &:first-child{
              border-radius: .2604vw 0 0 .2604vw;
            }
            &:last-child{
              border-radius: 0 .2604vw .2604vw 0;
            }
            &::after{
              width: 1.25vw;
              height: .625vw;
              border-left: .625vw solid transparent;
              border-right: .625vw solid transparent;
              border-top: .625vw solid #FDD3E3;
            }
          }
        }
        &_b{
          gap: 1.7708vw;
          margin-top: 2.2396vw;
          .list-in{
            iframe{
              width: 19.5313vw;
              height: 10.9896vw;
            }
            span{
              padding: .7813vw 1.0417vw 0;
              font-size: 1.0417vw;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .treatment-data{
    margin-top: 70px;
    overflow: hidden;
    &-title{
      span{
        font-size: 20px;
      }
    }
    &-in{
      padding: 0 20px;
      margin-top: 60px;
      .dataBox{
        width: 50%;
        &:not(:last-child){
          margin-bottom: 62px;
        }
        .num{
          font-size: 35px;
          img{
            width: 100px;

          }
          .numIn{
            height: 50px;
            span{
              line-height: 50px;
            }
          }
        }
        .name{
          font-size: 24px;
        }
        &:nth-of-type(1){
          img{
            left: 15% !important;
            top: -60% !important;
          }
        }
        &:nth-of-type(2){
          img{
            left: -5% !important;
            top: -30% !important;
            width: 50%;
          }
        }
        &:nth-of-type(3){
          img{
            left: 5% !important;
            top: -50% !important;
          }
        }
        &:nth-of-type(4){
          img{
            width: 70%;
            left: 45% !important;
            top: -10% !important;
          }
        }
      }
    }
    &-bText{
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
  .index-doctorTeam{
    margin: 50px 0 0;
    width: 100%;
    &-con{
      width: 100%;
    }
    &-t{
      flex-direction: column;
      align-items: flex-start;
      box-sizing: border-box;
    }
    &-tab1{
      :deep(.areaTab){
        div{
          font-size: 16px;
        }
      }
    }
    &-tab2{
      padding: 0 30px;
      margin-top: 20px;
      &-in{
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #00AEFF;
        border-radius: 5px;
        &>div{
          font-size: 16px;
          border: none;
          &:not(:nth-of-type(n+4)){
            border-right: 1px solid #00AEFF;
          }
          &:not(:nth-of-type(n+5)){
            border-bottom: 1px solid #00AEFF;
          }
          &:nth-of-type(n+6){
            border-left: 1px solid #00AEFF;
          }
          &.textlang-3,&.textlang-4{
            min-width: calc(100% / 4);
          }
          &:first-child{
            border-radius: 0;
          }
          &:last-child{
            border-right: none;
            border-radius: 0;
          }
          &:hover{
            color: #00AEFF;
            background: #fff;
          }
          &.index-doctorTeam-tab2-in-active{
            color: #fff;
            background: #00AEFF;
          }
        }
        &.tablang-1,&.tablang-2,&.tablang-3,&.tablang-4{
          &>div{
            border-bottom: none;
            &:last-child{
              border-right: none;
            }
          }
        }
      }
    }
    &-lists{
      margin-top: 20px;
      min-height: 96px;
      overflow: hidden;
      .pcLists{
        display: none;
      }
      .mbLists{
        display: block;
      }
    }
    &-detail{
      flex-direction: column;
      padding: 0;
      margin-top: 30px;
      &-l{
        width: 100%;
        &-in{
          &::after{
            display: none;
          }
        }
        img{
          border-radius: 0;
          &:nth-of-type(1){
            border: none;
          }
          &:nth-of-type(2){
            height: 100%;
            max-height: 90%;
            left: 50%;
            top: auto;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
        &-btn{
          display: none;
        }
      }
      &-r{
        .detail-1{
          margin: 5px 0;
          padding: 0 30px;
          span{
            font-size: 18px;
            display: inline-block;
            &:nth-of-type(1){
              font-size: 30px;
              letter-spacing: 2px;
              margin-right: 5px;
            }
          }
        }
        .detail-2{
          span{
            width: 100%;
            font-size: 20px;
            padding: 5px 75px 5px 30px;
            clip-path: polygon(0 0, 85% 0, 90% 100%, 0 100%);
          }
        }
        .detail-3{
          margin-top: 10px;
          padding: 0 30px;
          font-size: 16px;
        }
        .detail-4{
          font-size: 16px;
          padding: 0 30px;
          margin-bottom: 30px;
          span{
            text-align: justify;
          }
        }
        .detail-5{
          font-size: 12px;
          padding: 0 30px;
          display: flex;
          justify-content: center;
        }
        .detail-6{
          display: flex;
          justify-content: center;
          margin-left: 0;
          span{
            font-size: 28px;
          }
        }
      }
    }
    
  }
  //個案分享
  .index-caseSharing{
    padding: 0;
    background:none;
    margin-top: 90px;
    &-in{
      width: 100%;
      margin: 35px auto 0;
      .in-cen{
        margin-top: 34px;
        flex-direction: column;
        &-box{
          width: 100%;
        }
      }
      .in-bottom{
        width: 100%;
        background: linear-gradient(0deg, rgba(255, 241, 240, 0.7) 41.54%, rgba(255, 241, 240, 0) 137.31%);
        padding: 20px 0;
        margin-top: 0;
        span{
          width: 137px;
          height: 40px;
          font-weight: 500;
          font-size: 1rem;
          background: #FFFFFF;
          line-height: 40px;
          padding: 0;
          box-shadow: 1px 1px 4px rgba(255, 163, 158, 0.45);
          color: #666666;
          transition: all .3s;
          &:hover{
            background: var(--indexColor3);
            color: #FFFFFF;
            text-shadow: 0px 0px 8px rgba(255, 120, 117, 0.65);
          }
        }
      }
    }
  }
  .index-org{
    margin-top: 90px;
    &-tag{
      width: 100%;
      max-width: calc(100% - 60px);
      margin-top: 30px;
      &-in{
        font-size: 16px;
      }
    }
    &-content{
      max-width: calc(100% - 20px);
      justify-content: flex-start;
      &-swiper{
        &-slie{
          justify-content: initial;
        }
      }
      &-in{
        margin: 0 10px 30px;
        width: calc((100% - 60px) / 3);
        img{
          max-height: 70px;
        }
      }
    }
  }
  .index-videoBox{
    margin-top: 20px;
    &-c{
      flex-direction: column-reverse;
      text-align: center;
      margin-top: 34px;
      &-l{
        width: auto;
        margin: 19px 30px 0;
        &>div{
          &:nth-of-type(1){
            font-size: 16px;
          }
          &:nth-of-type(2){
            font-size: 18px;
          }
        }
      }
      &-r{
        width: 100%;
        padding-left: 0;
        a{
          display: block;
        }
      }
    }
  }
  .Latest_Movies{
    &_t{
      a{
        svg{
          width: 32px;
          height: 26px;
        }
        span{
          font-size: 18px;
          padding-right: 30px;
        }
      }
    }
    &_in{
      flex-direction: column;
      margin-top: 30px;
      &_l{
        width: 100%;
        margin-right: 0;
        span{
          color: var(--indexColor1);
        }
        iframe{
          width: 100%;
          height: calc(303 / 540 * 100vw);
        }
      }
      &_r{
        &_t{
          justify-content: center;
          margin-top: 30px;
          .tab-in{
            border: 1px solid #FDD3E3;
            letter-spacing: 1.588px;
            font-size: 16px;
            padding: 3px 16px 0;
          }
        }
        &_b{
          grid-template-columns: repeat(1,1fr);
          gap: 25px;
          margin-top: 30px;
          .list-in{
            iframe{
              width: 100%;
              height: calc(303 / 540 * 100vw);
            }
            span{

            }
          }
        }
      }
    }
  }
}
</style>
