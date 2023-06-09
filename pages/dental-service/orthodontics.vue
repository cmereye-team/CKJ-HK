<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
const appState = useAppState()
appState.setDentistryService('orthodontics')
useHead({
  title: "矯齒(箍牙) | 牙科服務",
  meta: [
   {
      hid: 'description',
      name: 'description',
      content: '愛康健提供矯齒(箍牙)服務，傳統箍牙包括金屬箍牙、陶瓷箍牙、樹脂箍牙。矯齒(箍牙)治療除了能矯正不整齊排列的牙齒，如牙齒太擠、太疏，或矯正後再次移位的情況，更能有助減低患上牙齒問題的風險。',
   },
   {
      hid: 'Keywords',
      name: 'Keywords',
      content: '矯齒 箍牙 固定式外箍 固定式內箍 金屬箍牙 陶瓷箍牙 樹脂箍牙 傳統箍牙 矯齒價錢 箍牙價錢 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
   },
  ]
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2023/06/853005c3e17e4c2a.png',
  bg: 'https://static.cmereye.com/imgs/2023/06/6d1016f37061df54.png',
  mbImg: 'https://static.cmereye.com/imgs/2023/06/0c4c600f0e07547d.jpg',
  pageName: 'orthodontics',
  pcText: ['追求美學極致，展現最燦爛笑容','愛康健為愛美的您打造完美面部輪廓'],
  mbText: ['追求美學極致','展現最燦爛笑容']
}

const orthodonticsIntroduceData = {
  title: 'pages.dental-service.orthodontics.introduce.title',
  content: 'pages.dental-service.orthodontics.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/04/78f038c56a4dc38b.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/9993e95bc1c6a9c9.jpg',
  tabNavName: 'pages.dental-service.orthodontics.introduce.tabNavName',
  pageName: 'orthodontics'
}

const reasonData = {
  title: 'pages.dental-service.orthodontics.reason.title',
  text: 'pages.dental-service.orthodontics.reason.text',
  imgUrl: 'https://static.cmereye.com/imgs/2023/05/39b4d45b6b7bc2ab.jpg',
  reasonLists:[
    {
      context: 'pages.dental-service.orthodontics.reason.lists[0].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[1].context',
    },
    {
      context: 'pages.dental-service.orthodontics.reason.lists[2].context',
    }
  ]
}

const stepData = {
  title: '矯齒(箍牙)過程',
  stepLists: [
    [
      {
        title: 'Step 1',
        text: '醫生會先進行檢查及評估，確認矯齒的需要'
      },
      {
        title: 'Step 2',
        text: '拍攝牙齒外觀照片，包括全口腔及側面X光照片，以印製牙模'
      },
      {
        title: 'Step 3',
        text: '醫生講解情況及治療方案'
      }, 
    ],
    [
      {
        title: 'Step 4',
        text: '配戴牙箍及定期覆診'
      },
      {
        title: 'Step 5',
        text: '矯齒完成後，需定期覆診，晚上佩戴固定器，防止牙齒移位'
      }
    ]
  ],
  isShowBottom: true,
  bottomText: '*不建議牙齒還沒完成發育、智慧齒還沒長出的人士接受牙齒矯正治療'
}

const differData = {
  title: '貴不等於最好\t要選擇自己最合適的！',
  text: '價格高不代表就是最好的選擇，選擇適合自己的矯正方式才是最重要的。不同的矯正方式有著各自的優缺點，需要根據自己的口腔情況、個人需求和預算來選擇最適合的方案。所以，在決定矯正牙齒之前，一定要找到專業的牙醫進行詳細的診斷和建議，選擇最適合自己的矯正方式。',
  firstTextTh: '固定式外箍/內箍',
  secondTextTh: '透明配戴式牙箍',
  listDatas: [
    {
      name: '原理',
      firstText: '將矯正器黏貼在牙齒表面，以鋼絲連上牙釘，施加外力移動牙齒',
      secondText: '運用電腦模擬牙齒移動位置，按牙齒移動速度，定期更換度身訂造牙箍，慢慢移動牙齒'
    },
    {
      name: '物料',
      firstText: '金屬/ 搪瓷/ 樹脂',
      secondText: '醫學塑膠'
    },
    {
      name: '拆卸',
      firstText: '不能自行拆卸',
      secondText: '能隨時戴上及脫下'
    },
    {
      name: '美觀',
      isArrayType: true,
      firstText: ['• 牙箍固定於牙齒外側會外露(固定式外箍)','• 牙箍固定於牙齒內側較難察覺(固定式內箍)'],
      secondText: '透明牙箍，近乎隱形，極難察覺'
    },
    {
      name: '清潔',
      firstText: '需以工具輔助清潔矯正器與鋼絲死角',
      secondText: '拆卸後獨立清洗'
    },
    {
      name: '成效',
      firstText: '比較適合齒列嚴重不正的人士',
      secondText: '適合輕度或中度齒列不正的人士'
    },
    {
      name: '其他',
      firstText: '牙箍可能會引起不適',
      secondText: '隱形牙套表面平滑'
    }
  ]
}

const problemData = {
  title: 'pages.dental-service.orthodontics.problem.title',
  lists: [
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[0].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[0].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[1].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[1].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[2].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[2].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[3].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[3].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[4].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[4].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[5].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[5].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[6].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[6].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[7].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[7].A'
    },
    {
      Q: 'pages.dental-service.orthodontics.problem.lists[8].Q',
      A: 'pages.dental-service.orthodontics.problem.lists[8].A'
    },
  ]
}

const bpData ={
  title: '您是否有牙齒不齊問題困擾？',
  text: '在當今競爭激烈的社會中，個人形象已成為一種重要的競爭力。不論是在現實社會還是網絡中，個人形象都能給人留下深刻的印象，對於找工作、交朋友、學習、升職等方面都有著不可忽視的影響。牙齒不僅直接影響面容和微笑，更能夠反映一個人的健康和生活態度。所以，關注自己的形象不但是邁向成功的第一步，更是建立自信微笑的重要一步！',
  lists: [
    {
      title: '咬合過深',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/9e889b19a082e947.jpg'
    },
    {
      title: '倒 及',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/048d9aa589afe550.jpg'
    },
    {
      title: '錯咬/反咬合',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/b00ece7e972d0c6a.jpg'
    },
    {
      title: '牙縫過大',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/03d8d7e690946901.jpg'
    },
    {
      title: '開 咬',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/a47574b0e83d0c42.jpg'
    },
    {
      title: '齒列擠擁',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/65c91ee1b7b46f5d.jpg'
    },
    {
      title: '前排齒列擠擁',
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/e53653134a5709f1.jpg'
    }
  ]
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
  title: '美學牙齒矯正',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/056cf3b645f697c6.jpg',
      title: '隱形牙箍矯正',
      text: '全透明全隱形，不影響美觀，並在矯正牙齒的同時矯正頜面形態，矯治過程自然舒適，收獲自信笑容！'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/eb84d445e77694da.jpg',
      title: '陶瓷半隱形矯正',
      text: '使用陶瓷透明托槽和鋼絲，顏色與牙齒相似，美觀度高，不易發現。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/1fc83a75a1e52762.jpg',
      title: '金屬托槽矯正',
      text: '是矯正牙齒中價格最實惠的一種，適用性廣泛，適合各種牙齒矯正情況，是一種經濟實惠且有效的矯正方法。'
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/06/bef07fba3d050f64.jpg',
      title: '舌側隱形矯正',
      text: '在於不影響外觀，且能夠有效地矯正各種牙齒問題，包括咬合問題和牙齒排列不整齊等。'
    }
  ]
}

let windowWidth = ref(1920)

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

</script>


<template>
<div>
  <PageHeader :headerConfig="headerConfig" /> 
  <div class="orthodonticsPage">
    <div class="index_title pageCon">{{$t('pages.dental-service.title')}}</div>
    <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
    <ServiceReason :reasonData="reasonData" />
    <div class="bp">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>{{bpData.title}}</span>
        </div>
      </div>
      <div class="bp-text">
        {{bpData.text}}
      </div>
      <div class="bp-swiper mbBox">
        <swiper
          :slidesPerView="1"
          class="swiper-wrapper"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="swiper-slide" v-for="slideItem in 4" :key="slideItem">
            <div class="swiper-slide-in" v-for="(bpItem,bpIndex) in bpData.lists.slice(2*(slideItem-1),2*slideItem)" :key="bpIndex">
              <div class="swiper-slide-in-title">{{bpItem.title}}</div>
              <img :src="bpItem.imgUrl" alt="" />
            </div>
          </swiper-slide>
        </swiper>
        <div class="bp-swiper-line mbBox">
          <PageSwiperPointLine :latestNewsNum="4" :latestNewsCurrent="bpCurrent"></PageSwiperPointLine>
        </div>
      </div>
      <div class="bp-lists">
        <div class="bp-lists-in" v-for="(bpItem,bpIndex) in bpData.lists" :key="bpIndex">
          <div class="bp-lists-in-title">{{bpItem.title}}</div>
          <img :src="bpItem.imgUrl" alt="" />
        </div>
      </div>
    </div>
    <ServiceStep :stepData="stepData" />
    <ServiceDiffer :differData="differData" />
    <div class="aesthetics">
      <div class="dentistryServices-title">
        <div class="dentistryServices-title-in bb">
          <span>{{aestheticsData.title}}</span>
        </div>
      </div>
      <div class="aesthetics-in">
        <swiper
          :slidesPerView="windowWidth>768 ? 4:1"
          class="swiper-wrapper aesthetics-swiper"
          @slideChange="onAestheticsSlideChange"
        >
          <swiper-slide class="swiper-slide" v-for="(aestheticsItem,aestheticsIndex) in aestheticsData.lists" :key="aestheticsIndex">
            <div class="swiper-slide-in">
              <img :src="aestheticsItem.imgUrl" alt="" />
              <div class="swiper-slide-in-title">{{aestheticsItem.title}}</div>
              <div class="swiper-slide-in-text">{{aestheticsItem.text}}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="bp-swiper-line mbBox">
          <PageSwiperPointLine :latestNewsNum="4" :latestNewsCurrent="aestheticsCurrent"></PageSwiperPointLine>
        </div>
      </div>
    </div>
    <ServiceProblem :problemData="problemData" />
    <serviceCard />
    <ContactUs />
  </div>
  <PageFooter />
  <PageNavbar />
</div>
</template>



<style lang="scss" scoped>
.orthodonticsPage{
  background: #fff;
  padding: 140px 0;
}
.bp{
  margin-top: 176px;
  &-swiper{
    margin-top: 42px;
    .swiper-slide-in{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 83.1px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: #FFA09E;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: #FFA09E transparent transparent transparent;
        }
      }
      img{
        width: 100%;
        max-width: 267px;
        margin: 36px auto 0;
      }
      &:last-child{
        padding: 0 39.5px;
      }
    }
    .swiper-slide{
      padding: 0 30px;
      height: 100%;
      &:nth-of-type(3){
        .swiper-slide-in{
          padding: 0 39.5px 53.1px;
          &:last-child{
            padding: 0 39.5px;
          }
        }
      }
    }
    &-line{
      max-width: 216px;
      margin: 53px auto 0;
    }
  }
  &-text{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
    width: 100%;
    max-width: 1042px;
    text-align: center;
    margin: 36px auto 0;
  }
  &-lists{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 60px auto;
    &-in{
      min-width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 39.5px 95.69px;
      box-sizing: border-box;
      align-items: center;
      &-title{
        min-width: 165px;
        height: 40px;
        line-height: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        background: #FFA09E;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 20px solid;
          border-left: 8px solid;
          border-right: 8px solid;
          border-bottom: 20px solid;
          border-color: #FFA09E transparent transparent transparent;
        }
      }
      img{
        margin-top: 30px;
        width: 100%;
      }
      &:last-child{
        padding: 0 39.5px;
      }
    }
  }
}
.aesthetics{
  margin-top: 108px;
  &-in{
    margin-top: 40px;
    padding: 88px 0;
    background: linear-gradient(180deg, #FFF1F0 0%, rgba(255, 241, 240, 0) 100%);
  }
  &-swiper{
    padding-bottom: 10px;
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    .swiper-slide{
      height: 100%;
      padding: 0 30px;
      &-in{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 4px 4px 6px rgba(255, 163, 158, 0.25), inset 1px -1px 0px #FFCCC7;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        min-height: 539px;
        img{
          width: 100%;
          box-sizing: border-box;
          padding-left: 1px;
        }
        &-title{
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 160%;
          text-align: center;
          color: #FFA09E;
          margin-top: 40px;
        }
        &-text{
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
@media (min-width: 768px) and (max-width: 1100px) {
  .bp{
    &-text{
      padding: 0 30px;
    }
    &-list{
      &-in{
        min-width: 50%;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .orthodonticsPage{
    padding: 90px 0;
  }
  .bp{
    margin-top: 94px;
    &-text{
      padding: 0 30px;
      font-weight: 500;
      font-size: 16px;
      margin: 47px auto 0;
      text-align: justify;
    }
    &-lists{
      display: none;
    }
  }
  .aesthetics{
    margin-top: 90px;
    &-in{
      margin-top: 28px;
      padding: 0;
      background: none;
    }
  }
}
</style>