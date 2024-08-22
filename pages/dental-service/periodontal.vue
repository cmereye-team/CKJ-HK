<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { toWhatsApp } from '~/assets/js/common'
const { t } = useLang()
const appState = useAppState()
appState.setDentistryService('periodontal')
useHead({
  title: '牙周病治療 | 牙科服務',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健提供牙周病治療服務，牙周病是慢性炎症，分為輕微牙齦炎和嚴重牙周炎。牙周病會導致牙齒鬆動、移位，影響外觀和口腔健康。牙周病治療可分為非手術和手術治療。非手術治療包括牙根刮治（深層洗牙），利用儀器刮除發炎組織，促進健康組織的再生，以達到牙周病治療效果。對於嚴重牙周病或牙齦厚實，則需要進行牙周手術來改善牙周病。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '牙周病 牙周炎 牙齦炎 牙周病治療 牙齦炎治療 牙根刮治 深層洗牙 輕微牙周病 牙菌膜 牙周手術 愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/07/3f7664e32f68531c.webp',
  mbImg: 'https://static.cmereye.com/imgs/2024/07/f7fb0336dfc73077.webp',
  bg: '',
  pageName: 'periodontal-test',
  pcText: ['健康牙齒，從牙周病治療開始', '保持清新口氣、牙肉年輕'],
  mbText: ['健康牙齒', '從牙周病治療開始'],
}

const orthodonticsIntroduceData = {
  // title: 'pages.dental-service.periodontal.introduce.title',
  // title:['牙周治療',' (深層洗牙/洗牙腳）'],
  title: '牙周治療',
  content:
    '牙周病為常見的口腔疾病，是牙齒周圍組織的一種慢性、感染性、破壞性的疾病。主要由牙菌斑和牙結石等長期累積所引起。這種慢性疾病隨著病情進展階段會破壞牙周組織，導致牙齦萎縮和牙骨吸收，重度牙周病患者可導致牙齒脫落。所以有牙周病應該盡快接受系統性治療，防止進一步惡化。',
  mbImg: 'https://static.cmereye.com/imgs/2023/11/3f3d338958c5f8d6.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/11/38143ec138e85da7.jpg',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName',
  pageName: 'periodontal-test',
}

const symptomData = {
  title: '牙周病的症狀',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/255727cb71ff0818.png',
      title: '口氣異常',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/ba588e0ec3a4886b.png',
      title: '牙齒移位及鬆脫',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/7a881e098e009caf.png',
      title: '牙齒對冷熱敏感',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/fa8e1c16a765fd83.png',
      title: '牙根外露',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/34ff8a710678a5ce.png',
      title: '牙齦萎縮',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/dc65923fd22afa42.png',
      title: '牙縫變大',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/c3f0969e2ce1ca7c.png',
      title: '牙齦腫脹變色',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/05/74f3d9aa48972f0b.png',
      title: '牙齦流血',
    },
  ],
}

const care2Data = {
  title: '牙周病高危族群',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/3a8aebd98eb367cb.png',
      title: '吸煙人士',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/9d13ef2ecc25ed5a.png',
      title: '糖尿病患者',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/e74f0a6deb9d93ed.png',
      title: '長期服用藥物',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/9f370e5d5c8691e6.png',
      title: '孕婦',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/8091ef6de0090f9c.png',
      title: '衛生意識薄弱',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/dd6302ca7772dcf9.png',
      title: '飲食不均衡',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/666042444d5e8fbf.png',
      title: '壓力大',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2023/11/78e22b1ad88aee0f.png',
      title: '家族遺傳',
    },
  ],
}

const processData = {
  title: '牙周病治療過程',
  tabs: ['牙根刮治\n(深層洗牙)', '牙肉翻瓣手術', '引導組織再生手術'],
  context: [
    '若牙周病屬輕微情況，一般僅需進行初診及微創牙周病治療，再定期覆診即可。若錯過治療牙周病的黃金時機，延誤到牙周炎程度，則需要進行牙周手術。',
  ],
  lists: [
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '口腔檢查',
            textIn: '',
          },
          {
            title: 'Step 2',
            text: '利用牙科儀器深入牙齦發炎的底部',
            textIn: '',
          },
          {
            title: 'Step 3',
            text: '刮除乾淨牙結石及發炎的牙肉組織',
            textIn: '',
          },
        ],
      ],
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '局部麻醉',
            textIn: '',
          },
          {
            title: 'Step 2',
            text: '切開牙齦組織，分開牙齦組織與牙齒',
            textIn: '',
          },
          {
            title: 'Step 3',
            text: '用超聲波徹底清潔牙根表面及牙周囊袋下的牙垢、牙菌斑和生物膜',
            textIn: '',
          },
        ],
        [
          {
            title: 'Step 4',
            text: '修整牙周骨缺損',
            textIn: '',
          },
          {
            title: 'Step 5',
            text: '縫合傷口',
            textIn: '',
          },
        ],
      ],
    },
    {
      listItem: [
        [
          {
            title: 'Step 1',
            text: '評估是否適合進行牙周組織擴增、增生手術',
            textIn: '',
          },
          {
            title: 'Step 2',
            text: '根據牙肉狀態及骨頭的再生狀況，設計牙周再生計劃',
            textIn: '',
          },
          {
            title: 'Step 3',
            text: '在骨缺損處以骨粉填充',
            textIn: '',
          },
        ],
        [
          {
            title: 'Step 4',
            text: '覆蓋再生膜，提供牙周組織的生長空間',
            textIn: '',
          },
          {
            title: 'Step 5',
            text: '牙周組織增加，使牙周更鞏固，牙齒存活時間更長',
            textIn: '',
          },
        ],
      ],
    },
  ],
  pageName: 'periodontal-test',
}

const noteData = {
  title: '牙周病一定要進行手術嗎？',
  lists: [
    {
      name: '一般牙周病治療可分為非手術性和手術性。醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。',
    },
    {
      name: '非手術治療即牙根刮治（深層洗牙），通過儀器刮除發炎組織，讓牙周健康的組織能在短時間內長回來。',
    },
    {
      name: '對於較嚴重的牙周病，或是牙齦厚實經由非手術治療不易達到良好效果者，就會進行牙周手術改善牙周病的情況。',
    },
    {
      name: '牙周病手術主要分成兩類，牙肉翻瓣手術及牙周再生手術，更深入地把發炎組織處理乾淨，防止發炎繼續惡化。',
    },
  ],
}

const problemData = {
  title: 'pages.dental-service.periodontal.problem.title',
  lists: [
    {
      Q: '什麼是牙周袋？',
      A: '牙周病會使齒槽骨遭受破壞，導致牙齦萎縮。牙菌斑和牙結石引發的發炎腫脹會使牙肉與牙齒分離，形成「牙周袋」。牙周袋愈深，便愈難清潔，內藏細菌逐漸積聚，令病情惡化。',
    },
    {
      Q: '牙周病可自行痊癒嗎？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
    {
      Q: '接受牙周病治療後，會出現哪些副作用？',
      A: '牙周病令牙齦萎縮，牙根外露。接受牙周病治療後，會出現暫時性牙齒敏感，這種情況一般會在三至四天後自行消退。若副作用持續，建議及時與牙醫聯繫。',
    },
    {
      Q: '牙周病會遺傳嗎？',
      A: '國際牙周病研討會研究指出，牙周病中的侵襲性牙周炎是有遺傳傾向的。若家族中有牙周病史，或年輕人罹患牙周病，建議其家人也定期檢查牙周狀況，以及採取預防措施，減低牙周病的發病率。',
    },
    {
      Q: '為什麼牙周治療需要經驗豐富的牙周專科醫生？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
    {
      Q: '牙齦炎係「熱氣」？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
    {
      Q: '20歲就有牙周病？ 牙周病有年輕化趨勢？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
    {
      Q: '牙周病可以斷尾嗎？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
    {
      Q: '誰是牙周病高危一族？',
      A: '牙周病無法自行痊癒，需透過牙醫的深層清潔牙周袋，並配合調整生活習慣與加強口腔清潔，持續細心觀察，才能緩解病情。',
    },
  ],
}

const reasonData = {
  title: '牙周病的成因及過程',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/11/c4238b3a85294efc.jpg',
      context:
        '牙齦及牙齒邊緣長期積聚牙菌膜，細菌分泌毒素刺激牙齦，引發牙齦炎。',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/809923ea93fc6e3d.jpg',
      context: '牙齦發炎時，牙肉紅腫，刷牙時易出血，牙齒表面積聚牙結石。',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/034a5f0ca1755f9c.jpg',
      context:
        '牙齦炎情況持續，形成「牙周袋」，食物殘渣、牙菌膜和牙石等更易堆積在內，牙周組織遭受破壞，令情況進一步惡化，進而形成牙周炎。',
    },
  ],
}

const reason2Data = {
  title: '牙周病4階段',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/11/4e55161480814853.png',
      context: '牙齦炎',
      numTag: 'https://static.cmereye.com/imgs/2024/07/e0feaceff214278b.png',
      mbImg: 'https://static.cmereye.com/imgs/2024/07/767d249375923cf2.png',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/f7510b958ec91963.png',
      context: '輕度牙周病',
      numTag: 'https://static.cmereye.com/imgs/2024/07/120738fb56a5d759.png',
      mbImg: 'https://static.cmereye.com/imgs/2024/07/dc8254d7c4b6833a.png',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/1c6c60d91d583f84.png',
      context: '中度牙周病',
      numTag: 'https://static.cmereye.com/imgs/2024/07/59c210a9e06a8624.png',
      mbImg: 'https://static.cmereye.com/imgs/2024/07/c28cded0a6ef76a7.png',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/11/c90e097b4197e5ba.png',
      context: '重度牙周病',
      numTag: 'https://static.cmereye.com/imgs/2024/07/dabb11b53d7c5e07.png',
      mbImg: 'https://static.cmereye.com/imgs/2024/07/d9718482c09cb712.png',
    },
  ],
}
const stepData = {
  title: '牙周治療過程',
  lists: [
    {
      title: '第1步',
      img: 'https://static.cmereye.com/imgs/2024/08/c6abd76aae7bf1ad.png',
      name: '檢查與診斷',
      text: [
        {
          l: '詳細檢查',
          r: '牙齦狀況、牙周袋深度測量',
        },
        {
          l: 'X光檢查',
          r: '：觀察牙齒與支持骨骼的健康狀況',
        },
        {
          l: '診斷分析',
          r: '：確定牙周疾病的類型和嚴重程度',
        },
      ],
    },
    {
      title: '第2步',
      img: 'https://static.cmereye.com/imgs/2024/08/39a6b316050e40dc.png',
      name: '治療方案制定',
      text: [
        {
          l: '個性化治療計劃',
          r: '：根據檢查結果和患者需求制定專屬方案',
        },
      ],
    },
    {
      title: '第3步',
      img: 'https://static.cmereye.com/imgs/2024/08/04e9730b1897960b.png',
      name: '治療步驟',
      text: [
        {
          l: '洗牙',
          r: '：去除牙菌斑和牙結石',
        },
        {
          l: '深層清潔（刮治和根面平整）',
          r: '：清除牙齦下的菌斑和結石，平整牙根表面',
        },
        {
          l: '抗生素治療',
          r: '：如有需要，使用藥物控制感染',
        },
        {
          l: '牙齒固定',
          r: '：對於鬆動的牙齒，可能需要進行加固處理，以恢復穩定性並防止進一步損傷。',
        },
      ],
    },
    {
      title: '第4步',
      img: 'https://static.cmereye.com/imgs/2024/08/37aa400a1cb8957b.png',
      name: '後續護理',
      text: [
        {
          l: '日常護理',
          r: '：正確刷牙和使用牙線、牙縫刷',
        },
        {
          l: '定期覆診',
          r: '：監控治療效果及防止復發',
        },
        {
          l: '生活習慣調整',
          r: '：戒煙酒',
        },
      ],
    },
  ],
}
import doctorLists_hk from '~/assets/js/doctor';
const doctorList = doctorLists_hk;

let windowWidth = ref(390)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  egImg(0)
  doctorList_periodontal()
})
// 处理医生数据 获得有 牙周病tag的医生
interface doctorList_type {
  name: string
  mbImg: string
  tags: string[]
  posts: string
  org: string
  skilled: string
}
const periodontalList = ref<doctorList_type[]>([])
const doctorList_periodontal = () => {
  doctorList.forEach((item) => {
    item.forEach((el, i) => {
      if (el.tags.includes('口腔牙周病科')) {
        periodontalList.value.push(el)
      }
    })
  })
}

const egActive = ref(false)
const egImg = (i: number) => {
  const egImgOne = document.querySelectorAll('.eg_img_one')
  const egImgTwo = document.querySelectorAll('.eg_img_two')
  if (i == 0) {
    egImgOne[0].classList.add('eg_img_active')
    egImgTwo[0].classList.remove('eg_img_active')
    egActive.value = false
  } else {
    egImgOne[0].classList.remove('eg_img_active')
    egImgTwo[0].classList.add('eg_img_active')
    egActive.value = true
  }
}

const checkboxNum = ref(0)
const checkbox = (i: number) => {
  checkboxNum.value++
  // 获取所有 class checkItem
  const checkItems = document.querySelectorAll('.checkItem')
  checkItems.forEach((item, index) => {
    if (index === i) {
      // 互斥点击
      if (item.classList.contains('check_active')) {
        item.classList.remove('check_active')
      } else {
        item.classList.add('check_active')
      }
    }
  })
}
const result = () => {
  const leven_one = document.querySelector('.leven_one')
  const leven_two = document.querySelector('.leven_two')
  const leven_three = document.querySelector('.leven_three')
  const leven_four = document.querySelector('.leven_four')
  const question = document.querySelector('.questions')
  const checkItems = document.querySelectorAll('.checkItem')

  if (checkboxNum.value == 0) {
    leven_one?.classList.add('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    checkboxNum.value = 0
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (checkboxNum.value >= 1 && checkboxNum.value < 3) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.add('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    checkboxNum.value = 0
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (checkboxNum.value >= 3 && checkboxNum.value < 5) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.add('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    checkboxNum.value = 0
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (checkboxNum.value >= 5) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.add('leven_active')
    question?.classList.add('question_active')
    checkboxNum.value = 0
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
}

const close = () => {
  const leven_one = document.querySelector('.leven_one')
  const leven_two = document.querySelector('.leven_two')
  const leven_three = document.querySelector('.leven_three')
  const leven_four = document.querySelector('.leven_four')
  const question = document.querySelector('.questions')

  leven_one?.classList.remove('leven_active')
  leven_two?.classList.remove('leven_active')
  leven_three?.classList.remove('leven_active')
  leven_four?.classList.remove('leven_active')
  question?.classList.remove('question_active')
  checkboxNum.value = 0

  const checkItems = document.querySelectorAll('.checkItem')
  checkItems.forEach((item, index) => {
    item.classList.remove('check_active')
  })
}
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title pageCon">
        {{ $t('pages.dental-service.title') }}
      </div>
      <div class="mobile-orthodontics">
        <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      </div>
      <div class="mobile_faq" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            常見牙周問題
          </div>
        </div>
        <div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/f70a8c03df580ef7.png"
                alt=""
              />
            </div>
            <div>
              <div>牙齦炎</div>
              <div>
                牙齦發炎，常由於牙菌斑堆積引起，若不及時治療，可能發展為更嚴重的問題
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/449d691464bd572e.png"
                alt=""
              />
            </div>
            <div>
              <div>牙周炎</div>
              <div>
                進一步的感染，可能導致牙齦退縮和牙齒鬆動，嚴重時可導致牙齒脫落
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="care" v-if="windowWidth < 768">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            {{ symptomData.title }}
          </div>
        </div>
        <div class="care-lists">
          <div
            v-for="(careItem, careIndex) in symptomData.lists"
            :key="careIndex"
            class="care-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.imgUrl" :alt="careItem.title" />
                </div>
              </div>
              <div class="text">{{ careItem.title }}</div>
            </div>
          </div>
        </div>
        <div class="care-btn" style="display: none">
          <PageAnimBtnTypeTwo :str="'與我們了解更多'" />
        </div>
      </div>
      <div class="mobile_youtube" v-if="windowWidth < 768">
        <a href="https://www.youtube.com/watch?v=Lb5GAx2ivrA" target="_blank">
          <img
            src="https://static.cmereye.com/imgs/2024/08/d14596dd773dd95b.png"
            alt=""
          />
        </a>
      </div>
      <div class="mobile_introduce_one" v-if="windowWidth < 768">
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/fbbfeeb7b74cc160.png"
              alt=""
            />
          </div>
          <div><span>牙周病又稱為</span><span>牙齒頭號殺手</span></div>
        </div>
        <div>
          <div>
            牙周慢性炎症可造成牙周支持組織受破壞，是導致成年人缺牙的最主要原因。
          </div>
          <div>
            大量研究證明，牙周病能透過齦下菌斑生物膜中的微生物及其產物引起全身性發炎及免疫反應，可能成為一些全身性疾病的危險因子。
          </div>
        </div>
      </div>
      <div
        class="mobile_introduce_one mobile_introduce_two"
        v-if="windowWidth < 768"
      >
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="93"
              height="83"
              viewBox="0 0 93 83"
              fill="none"
            >
              <g clip-path="url(#clip0_8429_38936)">
                <path
                  d="M46.51 82.9946C33.6063 82.9946 20.7079 83.005 7.80419 82.9841C4.14642 82.9841 1.04538 80.5709 0.218091 77.0503C-0.30742 74.8095 0.134842 72.6992 1.30554 70.6778C7.39315 60.1683 13.4339 49.6274 19.4903 39.1023C26.1295 27.5585 32.7842 16.02 39.3921 4.4606C40.8854 1.85411 43.0031 0.203515 45.9845 0.0206959C49.2416 -0.183017 51.7547 1.27954 53.3989 4.13152C56.656 9.76236 59.8871 15.4089 63.1286 21.0501C72.6451 37.5927 82.1615 54.1352 91.6676 70.683C93.8164 74.4177 93.3274 78.3457 90.4136 80.9992C88.8683 82.4043 87.0264 83.005 84.9504 83.005C72.1352 82.9946 59.32 83.005 46.5048 82.9998L46.51 82.9946ZM41.3173 39.891C41.3173 40.7581 41.3069 41.6252 41.3173 42.4923C41.3589 45.4853 41.2965 48.4835 41.4994 51.4608C41.6347 53.5032 43.2008 54.9187 45.1832 55.2687C49.1844 55.9687 51.6714 53.9106 51.687 49.852C51.7078 43.2131 51.6974 36.5741 51.687 29.9352C51.687 29.3293 51.6402 28.7129 51.5101 28.1279C51.1147 26.3101 49.9752 25.1035 48.2114 24.6439C44.1842 23.594 41.3485 25.8243 41.3225 29.9979C41.3017 33.2938 41.3225 36.595 41.3225 39.891H41.3173ZM46.4527 72.4694C49.3196 72.4799 51.583 70.286 51.6402 67.4288C51.6974 64.5977 49.304 62.1532 46.4839 62.1636C43.7159 62.1741 41.3797 64.5298 41.3589 67.3296C41.3381 70.1554 43.6171 72.459 46.4527 72.4694Z"
                  fill="#FC1682"
                />
                <path
                  d="M41.3174 39.8907C41.3174 36.5947 41.3018 33.2935 41.3174 29.9975C41.3383 25.824 44.1791 23.5936 48.2063 24.6435C49.9702 25.1032 51.1097 26.3098 51.5051 28.1276C51.6352 28.7178 51.6768 29.3342 51.682 29.9349C51.6924 36.5738 51.7028 43.2128 51.682 49.8517C51.6716 53.9103 49.1793 55.9683 45.1781 55.2684C43.1958 54.9237 41.6296 53.5029 41.4943 51.4605C41.2966 48.478 41.3591 45.4797 41.3122 42.4919C41.3018 41.6248 41.3122 40.7578 41.3122 39.8907H41.3174Z"
                  fill="white"
                />
                <path
                  d="M46.4524 72.4699C43.6219 72.4594 41.3377 70.1559 41.3585 67.33C41.3794 64.5303 43.7155 62.1745 46.4836 62.1641C49.3037 62.1536 51.6971 64.5982 51.6398 67.4293C51.5826 70.2865 49.3193 72.4856 46.4524 72.4699Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8429_38936">
                  <rect width="93" height="83" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div><span>「老掉牙」</span><span>並非正常現象</span></div>
        </div>
        <div>
          <div>
            人們常說「老掉牙」了，認為人老掉牙是必然現象，其實這是一種錯誤的觀念。如果做好口腔保健，健康的牙齒是應該是伴隨人一生的。
          </div>
        </div>
      </div>
      <div class="step" v-if="windowWidth < 768">
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
              <div class="step-lists-in-l" v-if="windowWidth > 767">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="" />
                  {{ stepItem.title }}
                </div>
                <div class="image"><img :src="stepItem.img" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
              </div>
              <div class="step-lists-in-l" v-else>
                <div class="title">
                  {{ stepItem.title.charAt(1) }}
                </div>
                <div class="image"><img :src="stepItem.img" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
                <div class="mobile_text">
                  <p v-for="(el, i) in stepItem.text" :key="i">
                    <span>{{ el.l }}</span
                    ><span>{{ el.r }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hospital" v-if="windowWidth < 768">
        <div>
          <span>羅湖區</span>
          <span>深圳愛康健口腔醫院</span>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/08/746591e91923c8a0.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4432 16.9976C12.2171 16.9525 8.74242 16.4724 5.10337 12.8349C1.46517 9.19659 0.985812 5.72343 0.939835 4.49676C0.87172 2.62738 2.30384 0.811633 3.95819 0.10253C4.1574 0.0165239 4.37556 -0.0162212 4.59126 0.00750781C4.80695 0.0312368 5.01277 0.110625 5.18852 0.237881C6.55082 1.23046 7.49081 2.73209 8.29797 3.91279C8.47557 4.1722 8.5515 4.48786 8.51131 4.79964C8.47111 5.11141 8.31759 5.3975 8.08 5.6034L6.41885 6.83689C6.33859 6.89483 6.2821 6.97992 6.25986 7.07637C6.23763 7.17281 6.25116 7.27404 6.29794 7.36126C6.67428 8.04483 7.34351 9.06294 8.1098 9.82908C8.87695 10.5952 9.94295 11.3086 10.6743 11.7274C10.766 11.7789 10.874 11.7933 10.976 11.7676C11.078 11.742 11.1662 11.6782 11.2227 11.5895L12.304 9.944C12.5028 9.67998 12.7961 9.50311 13.1224 9.45042C13.4487 9.39774 13.7827 9.47334 14.0546 9.66138C15.2525 10.4905 16.6506 11.4141 17.674 12.7242C17.8116 12.9012 17.8992 13.1119 17.9275 13.3343C17.9558 13.5567 17.9238 13.7826 17.8349 13.9884C17.1223 15.6509 15.3189 17.0665 13.4432 16.9976Z"
                    fill="#FC1682"
                  />
                </svg>
              </div>
              <div>查詢電話</div>
            </div>
            <div>+852 3892 5049</div>
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                >
                  <path
                    d="M9.9375 0C11.794 0 13.5745 0.737125 14.8872 2.04922C16.2 3.36131 16.9375 5.14088 16.9375 6.99646C16.9375 9.95291 14.859 13.1749 10.756 16.6968C10.5278 16.8927 10.2369 17.0003 9.93616 17C9.63539 16.9997 9.34469 16.8916 9.11689 16.6954L8.8455 16.46C4.92406 13.0299 2.9375 9.8869 2.9375 6.99646C2.9375 5.14088 3.675 3.36131 4.98775 2.04922C6.30051 0.737125 8.08098 0 9.9375 0ZM9.9375 4.30551C9.22346 4.30551 8.53866 4.58902 8.03375 5.09367C7.52885 5.59832 7.24519 6.28278 7.24519 6.99646C7.24519 7.71014 7.52885 8.3946 8.03375 8.89925C8.53866 9.4039 9.22346 9.68741 9.9375 9.68741C10.6515 9.68741 11.3363 9.4039 11.8412 8.89925C12.3462 8.3946 12.6298 7.71014 12.6298 6.99646C12.6298 6.28278 12.3462 5.59832 11.8412 5.09367C11.3363 4.58902 10.6515 4.30551 9.9375 4.30551Z"
                    fill="#FC1682"
                  />
                </svg>
              </div>
              <div>地址</div>
            </div>
            <div>深圳市羅湖區火車站大廈C區1-8樓</div>
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.03125 17.1875C13.5014 17.1875 17.125 13.5639 17.125 9.09375C17.125 4.62357 13.5014 1 9.03125 1C4.56107 1 0.9375 4.62357 0.9375 9.09375C0.9375 13.5639 4.56107 17.1875 9.03125 17.1875Z"
                    stroke="#FC1682"
                    stroke-width="1.61875"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.03125 4.23828V9.09858L12.4626 12.5303"
                    stroke="#FC1682"
                    stroke-width="1.61875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>營業時間</div>
            </div>
            <div><span>9:00-18:00 </span><span>（假日照常應診）</span></div>
          </div>
        </div>
        <div>
          <div>交通路線</div>
          <div>百度地圖</div>
        </div>
        <div class="care2-btn">
          <PageAnimBtnTypeTwo :str="'立即線上諮詢'" />
        </div>
      </div>
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
              {{ item.context }}
            </div>
          </div>
        </div>
      </div>
      <div class="step_new_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周病病變過程
          </div>
        </div>
        <div class="step_new_items">
          <div>
            <div>1</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/d9576e4ef6c8bbfa.png"
                alt=""
              />
            </div>
            <div>輕度牙周病</div>
            <div>
              <span>1-2 mm牙周袋</span>
              <span>無牙齒移動</span>
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/2adbffbe54b348b4.png"
                alt=""
              />
            </div>
            <div>中度牙周病</div>
            <div>
              <span>3-4 mm牙周袋</span>
              <span>輕微牙齒鬆動</span>
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/1c4237335dc21b2d.png"
                alt=""
              />
            </div>
            <div>重度牙周病</div>
            <div>
              <span>≥5 mm牙周袋</span>
              <span>牙肉萎縮或牙齒鬆動</span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mobile_introduce_one mobile_introduce_three"
        v-if="windowWidth < 768"
      >
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/3ed09fc6f9c1a6a2.png"
              alt=""
            />
          </div>
          <div><span>牙周病</span><span>治療簡介</span></div>
        </div>
        <div>
          <div>
            牙結石一旦形成只能透過牙醫專業清理，普通刷牙無法去除牙結石。
          </div>
          <div>
            牙結石包括齦上結石和齦下結石，齦上結石可以透過超音波洗牙或噴砂洗牙等簡單方法清除。齦下結石必須進行專業的牙周刮治，也就是牙周治療，又稱深層洗牙或洗牙腳。
          </div>
          <div>
            <span>重度牙周患者</span
            >有機會需要做手術性治療，切開牙齦組織，徹底清除牙根表面的牙垢。每個人的情況都是不同的，醫生會透過檢查及評估，再按照病人的病情，擬定適切的治療方案。
          </div>
        </div>
      </div>
      <div class="method_new_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            一般牙周病治療方法
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/3a724f5c62c66bca.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <div>齦下刮治</div>
              <div>用齦下刮治器清除附著於牙周囊袋內牙石和菌斑。</div>
            </div>
            <div>
              <div>根面平整</div>
              <div>
                用齦下刮治器清除附著和嵌入牙骨質內的牙石，並刮除牙根表面受到毒素污染的病變骨質。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table_new_mobile" v-if="windowWidth < 768">
        <div>愛康健提供的非手術性牙周治療服務</div>
        <div>早期發現<br />牙周問題<br />患者</div>
        <div>預防<br />與維護</div>
        <div>定期的口腔清潔和回診洗牙可以大大降低病情惡化的風險</div>
        <div>輕度及<br />中度牙周<br />患者</div>
        <div>齦上<br />潔治術</div>
        <div>清除牙齒表面的牙菌斑和牙結石</div>
        <div>牙結石<br />刮除術<br />(深層洗牙/<br />洗牙腳)</div>
        <div>深入牙齦，清除牙周袋內的牙菌斑和牙結石</div>
        <div>鬆牙<br />固定術</div>
        <div>固定因牙周病而鬆動的牙齒</div>
        <div>重度<br />牙周患者</div>
        <div>牙周<br />翻瓣手術</div>
        <div>切開牙齦組織，徹底清除牙根表面的牙垢</div>
        <div>牙齦<br />切除術</div>
        <div>移除受感染的牙齦組織</div>
        <div>牙周<br />植骨術</div>
        <div>對骨缺損進行填補，促進骨組織再生</div>
        <div>膜齦<br />移植術</div>
        <div>移植健康的牙齦組織以修復受損區域</div>
      </div>
      <div class="eg_new_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周治療案例
          </div>
        </div>
        <div class="eg_img">
          <div class="eg_img_one eg_img_active">
            <img
              src="https://static.cmereye.com/imgs/2024/08/091427f9f6f9c833.png"
              alt=""
            />
          </div>
          <div class="eg_img_two">
            <img
              src="https://static.cmereye.com/imgs/2024/08/c88443de6854dfd1.png"
              alt=""
            />
          </div>
        </div>
        <div class="eg_nav">
          <div :class="[egActive ? '' : 'eg_nav_active']" @click="egImg(0)">
            <img
              src="https://static.cmereye.com/imgs/2024/08/8a8dfb382242eb05.png"
              alt=""
            />
          </div>
          <div @click="egImg(1)" :class="[egActive ? 'eg_nav_active' : '']">
            <img
              src="https://static.cmereye.com/imgs/2024/08/8a8dfb382242eb05.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="evaluate" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            真實用戶評價
          </div>
        </div>
        <div>
          <div class="evaluate_item_one">
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/08/ede79e70a7975b34.png"
                  alt="網紅Ryan"
                />
              </div>
              <div>網紅Ryan <span>@RM Channel</span></div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=EVErMNv6P8A&list=PLP24ZB2HTnRicsyIlRD7e70kZjbRmqBoO&index=9"
              target="_blank"
            >
              <img
                src="https://static.cmereye.com/imgs/2024/08/ce865f7b5fa26303.png"
                alt=""
              />
            </a>
          </div>
          <div class="evaluate_item_two">
            <div>
              <div class="item_name">林先生</div>
              <div class="item_date">3/4/24</div>
            </div>
            <div>
              我一直有牙周問題，之前係香港做過一次深層洗牙，但實在太貴，而且診所週末唔開門，如果要我成日請假好唔方便。來到愛康健齒科，利展鴻醫生非常細心，令我覺得非常安心，治療效果也非常好。而且診所好就腳，真心推薦愛康健給所有需要牙周治療的香港人！👍
            </div>
          </div>
          <div class="evaluate_item_two">
            <div>
              <div class="item_name item_name_even">張太太</div>
              <div class="item_date">20/2/24</div>
            </div>
            <div>
              院長非常細心，深層洗牙做得非常徹底，整個過程舒適又高效。總共做了4次治療已經斷尾，只需按時覆診觀察。
            </div>
          </div>
          <div class="evaluate_item_two">
            <div>
              <div class="item_name">王先生</div>
              <div class="item_date">5/11/23</div>
            </div>
            <div>
              曾醫生盡力幫我保留牙齒，口臭和牙齒鬆問題明顯改善，有醫德又有技術！不像另一間診所一味叫我做種牙，又唔放我走！曾醫生及護士們經驗十足，果然係老字號品牌，超級讚！
            </div>
          </div>
          <div class="evaluate_item_two">
            <div>
              <div class="item_name item_name_even">劉先生</div>
              <div class="item_date">20/2/24</div>
            </div>
            <div>
              我太遲看醫生，有3隻牙已經留不住要拔掉，幸好其他牙齒還有救，但都已經十分嚴重，接近無晒牙骨。現在加固了牙齒，防止牙齒愈來愈鬆。江冬曉醫生很懂得照顧老人家，我很怕看牙，他令我堅持完成療程。同時也很感謝太太每次都陪我深圳睇牙。
            </div>
          </div>
        </div>
      </div>
      <div class="test_tooth" v-if="windowWidth < 768">
        <div class="questions">
          <div>
            <div>牙周病自我檢查小測驗</div>
            <div>請選取你有的症狀（可以多選）</div>
          </div>
          <div>
            <div class="checkItem" @click="checkbox(0)">
              即使刷牙後，口腔仍然持續有異味
            </div>
            <div class="checkItem" @click="checkbox(1)">
              刷牙或使用牙線時牙齦經常會出血
            </div>
            <div class="checkItem" @click="checkbox(2)">
              牙齦比往時更加紅腫或容易疼痛
            </div>
            <div class="checkItem" @click="checkbox(3)">
              牙齦有膿瘡或牙齦間有膿液滲出
            </div>
            <div class="checkItem" @click="checkbox(4)">
              牙齦出現退縮，多隻牙齒看起來比往時更長
            </div>
            <div class="checkItem" @click="checkbox(5)">
              牙齒有鬆動的感覺或者咬合時感覺不對勁
            </div>
            <div class="checkItem" @click="checkbox(6)">
              牙齒之間出現新的縫隙或者牙齦分隔
            </div>
          </div>
          <div @click="result()">看結果</div>
        </div>
        <div class="item_leven leven_one">
          <div>Level 0</div>
          <div>
            結果顯示沒有明顯的牙周問題，建議定期每半年洗牙及做好日常牙齒護理。
          </div>
          <div @click="close">
            <img
              src="https://static.cmereye.com/imgs/2024/08/f9c47a61ad1c98f4.png"
              alt=""
            />
          </div>
        </div>
        <div class="item_leven leven_two">
          <div>Level 1</div>
          <div>
            結果顯示有輕度口腔衛生煩惱，建議預約洗牙並向牙科醫生請教正確日常牙齒護理方法。
          </div>
          <div @click="close">
            <img
              src="https://static.cmereye.com/imgs/2024/08/f9c47a61ad1c98f4.png"
              alt=""
            />
          </div>
        </div>
        <div class="item_leven leven_three">
          <div>Level 2</div>
          <div>結果顯示有牙齦炎症狀，建議盡快盡求牙科醫生專業意見。</div>
          <div @click="close">
            <img
              src="https://static.cmereye.com/imgs/2024/08/f6a89210c4a12d3b.png"
              alt=""
            />
          </div>
        </div>
        <div class="item_leven leven_four">
          <div>Level 3</div>
          <div>
            結果顯示有周炎症狀，建議盡快盡求牙科醫生專業意見。一旦進一步的感染，可導致牙骨受到不能逆轉的傷害，
            有機會造成牙齒脫落。
          </div>
          <div @click="close">
            <img
              src="https://static.cmereye.com/imgs/2024/08/f6a89210c4a12d3b.png"
              alt=""
            />
          </div>
        </div>
        <div class="care2-btn">
          <PageAnimBtnTypeTwo :str="'立即WhatsApp預約檢查'" />
        </div>
      </div>
      <div class="nurse_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周治療後維護
          </div>
        </div>
        <div>
          <div>口腔衛生控制</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="176"
              height="22"
              viewBox="0 0 176 22"
              fill="none"
            >
              <path d="M87 0L87 12" stroke="#FC1682" stroke-width="2" />
              <path d="M1 22V12H175V22" stroke="#FC1682" stroke-width="2" />
            </svg>
          </div>
          <div>
            <div><span>個人</span><span>口腔清潔</span></div>
            <div><span>牙科</span><span>檢查保健</span></div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="22"
                viewBox="0 0 86 22"
                fill="none"
              >
                <path d="M42 0L42 12" stroke="#FC1682" stroke-width="2" />
                <path d="M1 22V12H85V22" stroke="#FC1682" stroke-width="2" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="86"
                height="22"
                viewBox="0 0 86 22"
                fill="none"
              >
                <path d="M42 0L42 12" stroke="#FC1682" stroke-width="2" />
                <path d="M1 22V12H85V22" stroke="#FC1682" stroke-width="2" />
              </svg>
            </div>
          </div>
          <div>
            <div>
              <span>刷牙</span>
            </div>
            <div>
              <span>輔助</span>
              <span>工具</span>
            </div>
            <div>
              <span>定期</span>
              <span>洗牙</span>
            </div>
            <div>
              <span>按時</span>
              <span>覆診</span>
            </div>
          </div>
        </div>
      </div>
      <div class="health_mobile" v-if="windowWidth < 768">
        <div>
          <span>深圳愛康健口腔醫院</span>
          <span>65歲及以上<i>長者優惠政策</i></span>
        </div>
        <div>
          <div>
            <div>
              <div>首次到診長者</div>
              <div>
                <span>免掛號費</span><span><i>及</i>CT拍片檢查費</span>
              </div>
            </div>
            <div class="abs_box"><span>優惠</span><span>1</span></div>
          </div>
          <div>
            <div>
              <div>牙周治療套餐</div>
              <div>
                <div>
                  <span>牙周病專科檢查記錄</span>
                  <span
                    ><i style="color: #fc1682">￥</i>240<span
                      >(原價¥300/次)</span
                    ></span
                  >
                </div>
                <div>
                  <span>輕度/中度/重度 牙周療程</span>
                  <span
                    >原價<span>9</span><i style="color: #fc1682">折</i></span
                  >
                </div>
                <div>
                  <span
                    >贈送<i>2<i style="color: #fc1682">次</i></i
                    >牙周治療後維</span
                  >
                  <span>護<i>（價值¥800/次）</i></span>
                </div>
              </div>
            </div>
            <div class="abs_box"><span>優惠</span><span>2</span></div>
          </div>
          <div>*可使用醫院券或一般付款方式支付醫療費用</div>
        </div>
      </div>
      <div class="doctor_new_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周病牙醫推薦
          </div>
        </div>
        <div>
          <div v-for="(doc, i) in periodontalList" :key="i" class="doc_item">
            <div><img :src="doc.mbImg" alt="" /></div>
            <div>
              {{ doc.name }} <span>{{ doc.posts }}</span>
            </div>
            <div>{{ doc.org.slice(0, 3) }}</div>
            <div v-if="doc.skilled.length > 0">
              <span>擅長項目：</span>
              <span>{{ doc.skilled }}</span>
            </div>
            <div class="consult_mobile">線上諮詢</div>
          </div>
        </div>
      </div>
      <div class="reason2" v-if="windowWidth > 768">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">
            {{ reason2Data.title }}
          </div>
        </div>
        <div class="reason2-lists">
          <div
            v-for="(item, index) in reason2Data.reasonLists"
            :key="index"
            class="reason2-lists-item"
          >
            <div class="image">
              <!-- <span>{{ index + 1 }}</span> -->
              <img :src="item.mbImg" alt="" />
            </div>
            <div class="text">
              {{ item.context }}
            </div>
            <div><img :src="item.numTag" alt="" /></div>
          </div>
        </div>
        <div class="reason2-lists-bg" v-if="windowWidth < 767">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/07/78899ac5edd7bdf7.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/07/7f76acbb92a54700.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="care" v-if="windowWidth > 768">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            {{ symptomData.title }}
          </div>
        </div>
        <div class="care-lists">
          <div
            v-for="(careItem, careIndex) in symptomData.lists"
            :key="careIndex"
            class="care-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.imgUrl" :alt="careItem.title" />
                </div>
              </div>
              <div class="text">{{ careItem.title }}</div>
            </div>
          </div>
        </div>
        <div class="care-btn">
          <PageAnimBtnTypeTwo :str="'與我們了解更多'" />
        </div>
      </div>
      <div class="note" v-if="windowWidth > 768">
        <div class="dentistryServices-title note-title">
          <div class="dentistryServices-title-in bb note-title-in">
            {{ noteData.title }}
          </div>
        </div>
        <div class="note-content" v-if="windowWidth > 767">
          <div class="note-content-l">
            <img
              src="https://static.cmereye.com/imgs/2023/11/5ef6ba18cee4782a.jpg"
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
        <div class="note-content-mobile" v-else>
          <div>
            一般牙周病治療可分為<span>非手術性</span>和<span>手術性</span>，醫生會檢查及評估病人情況，擬定最適切的治療方案。
          </div>
          <div>
            <div>
              <div>非手術治療</div>
              <div>
                <div>
                  <div>
                    <img
                      src="../../assets/images/periodontal1.svg"
                      alt="清除"
                    />
                  </div>
                  <div>
                    清除黏附在牙齦邊緣的牙菌膜、牙石和牙漬，使牙齒回復乾淨和平滑。有助預防牙周病、牙齦炎、牙周炎。
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="../../assets/images/periodontal2.svg"
                      alt="清除牙菌斑、牙結石及毒素"
                    />
                  </div>
                  <div>
                    利用牙科儀器，深入牙齦發炎的底部，清除牙菌斑、牙結石及毒素。
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>手術治療</div>
              <div>
                <div>
                  有嚴重牙周病或是牙齦太厚實患者，進行牙周手術會較理想。
                </div>
                <div>
                  <div>
                    <img
                      src="../../assets/images/periodontal3.svg"
                      alt="局部麻醉後修整或填補"
                    />
                  </div>
                  <div>
                    局部麻醉後切開牙齦組織，徹底清除牙根表面及牙周袋下的牙垢。若牙周骨缺損會修整或填補。
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="../../assets/images/periodontal4.svg"
                      alt="填補骨頭缺損部分"
                    />
                  </div>
                  <div>
                    填補骨頭缺損部分，讓齒槽骨、牙周韌帶、牙骨質結構再生。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProcess :processData="processData" v-if="windowWidth > 768" />
      <div class="care2" v-if="windowWidth > 768">
        <div class="care2-btn">
          <PageAnimBtnTypeTwo :str="'立即線上諮詢'" />
        </div>
        <div class="dentistryServices-title care2-title">
          <div class="dentistryServices-title-in bb care2-title-in">
            {{ care2Data.title }}
          </div>
        </div>
        <div class="care2-lists">
          <div
            v-for="(careItem, careIndex) in care2Data.lists"
            :key="careIndex"
            class="care2-lists-item"
          >
            <div>
              <div class="image">
                <div class="image-in">
                  <img :src="careItem.imgUrl" :alt="careItem.title" />
                </div>
              </div>
              <div class="text">{{ careItem.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProblem :problemData="problemData" />
      <serviceCard />
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>



<style lang="scss" scoped>
.reason {
  margin-top: 188px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 45px;
      width: calc(100% / 3);
      .image {
        position: relative;
        img {
          width: 100%;
        }
      }
      .text {
        color: #fc1682;
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%;
        width: 100%;
        max-width: 90%;
        margin: 35px auto 0;
      }
    }
  }
}
.reason2 {
  margin-top: 150px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 53px auto 0;
    &-item {
      padding: 0 45px;
      width: calc(100% / 4);
      .image {
        position: relative;
        img {
          width: 100%;
        }
        span {
          font-size: 50px;
          font-weight: 700;
          color: #4d4d4d;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .text {
        color: #4d4d4d;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-align: center;
        width: 100%;
        max-width: 90%;
        margin: 20px auto 0;
      }
    }
  }
}
.symptom {
  margin-top: 126px;
  width: 100%;
  max-width: 1200px;
  margin: 126px auto 0;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    margin-top: 54px;
    padding: 0 45px;
    &-in {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img {
        width: 184px;
        height: 184px;
        margin: 0 auto;
        background: #fff1f0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
      &-title {
        width: 100%;
        max-width: 184px;
        padding: 12px 0;
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 160%;
        color: #666666;
      }
      &:nth-of-type(2),
      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(7) {
        .symptom-lists-in-img {
          background: var(--indexColor2);
        }
      }
    }
  }
}
.note {
  margin-top: 100px;
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
.care {
  margin-top: 140px;
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 54px auto 0;
    &-item {
      width: calc(100% / 4);
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
      &:nth-of-type(n + 5) {
        margin-top: 90px;
      }
      &:nth-of-type(2),
      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(7) {
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
    margin-top: 55px;
    display: flex;
    justify-content: center;
  }
}
.care2 {
  margin-top: 78px;
  padding-bottom: 25px;
  &-title {
    margin-top: 126px;
    &-in {
      font-size: 50px;
    }
  }
  &-lists {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1000px;
    margin: 54px auto 0;
    &-item {
      width: calc(100% / 4);
      & > div {
        .image {
          width: 100%;
          position: relative;
          padding: 0 calc((89px / 273px) * 100% / 2);
          &-in {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background: #fee6f1;
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
      &:nth-of-type(n + 5) {
        margin-top: 15px;
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
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
  padding: 61px 0 99px;
  margin-top: 70px;
  &-in {
    width: 100%;
    max-width: calc(1444px + 122px);
    margin: 0 auto;
  }
  &-lists {
    margin-top: 98px;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-in {
      display: flex;
      align-items: center;
      margin-bottom: 92px;
      padding: 0 calc((61 / (1444 + 122)) * 100%);
      width: calc(100% / 3);
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-bottom: 0;
      }
      &:nth-of-type(5) {
        .step-lists-in-l {
          .image {
            &::after {
              display: none;
            }
          }
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
          color: #4d4d4d;
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
          position: relative;
          &::after {
            content: '';
            position: absolute;
            right: -17%;
            top: 50%;
            transform: translateY(-50%);
            background: url(@/assets/images/icon_12.png);
            background-size: 100% 100%;
            width: 16px;
            height: 30px;
          }
        }
        .name {
          width: 100%;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          background: var(--indexColor1);
          margin-top: 24px;
          margin-bottom: 15px;
          padding: 8px 15px;
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
          white-space: pre-wrap;
        }
      }
      &-r {
        display: none;
        img {
          width: 15px;
          height: auto;
        }
      }
      &:nth-of-type(6) {
        margin-bottom: 0;
        align-items: flex-end;
        justify-content: center;
        & > div {
          margin-bottom: 20px;
        }
        .lastBox-t {
          & > div {
            color: var(--indexColor1);
            font-size: 50px;
            font-weight: 700;
            text-align: center;
            span {
              font-size: 50px;
              line-height: 120%;
              display: block;
            }
            &:nth-of-type(1) {
              display: flex;
              justify-content: center;
              width: 100%;
              margin-bottom: 15px;
            }
          }
        }
        .lastBox-b {
          margin-top: 20px;
          .bigBan {
            font-size: 44px;
            line-height: 1.2;
          }
        }
      }
      &:nth-of-type(2),
      &:nth-of-type(5) {
        .step-lists-in-l {
          .name {
            width: 110%;
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .reason {
    margin-top: 9.7917vw;
    &-lists {
      max-width: 86.25vw;
      margin: 6.0417vw auto 0;
      &-item {
        padding: 0 2.3438vw;
        .text {
          font-size: 1.8229vw;
          margin: 1.8229vw auto 0;
        }
      }
    }
  }
  .reason2 {
    margin-top: 7.8125vw;
    &-lists {
      max-width: 86.25vw;
      margin: 2.7604vw auto 0;
      &-item {
        padding: 0 2.3438vw;
        .image {
          span {
            font-size: 2.6042vw;
          }
        }
        .text {
          font-size: 1.4583vw;
          margin: 1.0417vw auto 0;
        }
      }
    }
  }
  .care {
    margin-top: 7.2917vw;
    &-lists {
      max-width: 52.0833vw;
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
        &:nth-of-type(n + 5) {
          margin-top: 4.6875vw;
        }
      }
    }
    &-btn {
      margin-top: 2.8646vw;
    }
  }
  .note {
    margin-top: 5.2083vw;
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
  .care2 {
    margin-top: 4.0625vw;
    padding-bottom: 1.3021vw;
    &-title {
      margin-top: 6.5625vw;
      &-in {
        font-size: 2.6042vw;
      }
    }
    &-lists {
      max-width: 52.0833vw;
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
        &:nth-of-type(n + 5) {
          margin-top: 0.7813vw;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .reason {
    margin-top: 55px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 20px auto 0;
      box-sizing: border-box;
      padding: 0px 15px 0px 35px;
      &-item {
        padding: 0 52px;
        width: 100%;
        .text {
          font-size: 20px;
          margin-top: 20px;
        }
        border-radius: var(--Count, 0px) 10px 10px var(--Count, 0px);
        border: 2px solid var(--Theme-Color, #fc1682);
        background: var(--White, #fff);
        box-sizing: border-box;
        padding: 14px 16px;
        display: flex;
        flex-direction: row-reverse;
        gap: 0 16px;
        & > div:nth-child(1) {
          width: 94px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          margin-top: 0;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: 'Noto Sans HK';
          font-size: 3.2vw;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 19.2px */
          letter-spacing: 1.2px;
        }
        &:not(:last-child) {
          margin-bottom: 6px;
        }
        position: relative;
      }
      &-item:nth-child(2) {
        border-radius: var(--Count, 0px) 10px 10px var(--Count, 0px);
        border: 2px solid var(--Blue-Deep, #00aeff);
        background: var(--White, #fff);
      }
      &-item::before {
        content: '1';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -5.33vw;
        top: -0.533vw;
        height: 104%;
        width: 5.33vw;
        border-radius: 10px var(--Count, 0px) var(--Count, 0px) 10px;
        background: var(--Theme-Color, #fc1682);
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 5.33vw;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
      }
      &-item:nth-child(2)::before {
        content: '2';
        border-radius: 10px var(--Count, 0px) var(--Count, 0px) 10px;
        background: var(--Blue-Deep, #00aeff);
      }
      &-item:nth-child(3)::before {
        content: '3';
      }
    }
  }
  .reason2 {
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );
    margin-top: 80px;
    position: relative;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      flex-direction: column;
      margin: 11.2vw 7.2vw 0 8vw;
      display: grid;
      gap: 13.333vw 7.4667vw;
      width: fit-content;
      grid-template-columns: repeat(2, 1fr);
      position: relative;
      z-index: 5;
      &-item {
        position: relative;
        padding: 0;
        width: fit-content;
        .image {
          width: 38.667vw;
        }
        .text {
          // font-size: 20px;
          text-align: left;
          margin: 0;
          margin-top: 6px;
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%; /* 20.8px */
          width: fit-content;
        }
        // &:not(:last-child) {
        //   margin-bottom: 53px;
        // }
        & > div:nth-child(3) {
          position: absolute;
          top: -6px;
          left: -6px;
        }
      }
      &-item:nth-child(even) {
        margin-top: 28px;
      }
    }
    .reason2-lists-bg {
      position: relative;
      z-index: 2;
      & > div {
        width: 100vw;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(1) {
        position: absolute;
        left: 0;
        top: -90vw;
      }
      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        bottom: 10vw;
      }
    }
  }
  .symptom {
    margin-top: 70px;
    &-lists {
      padding: 0 15px;
      margin-top: 28px;
      &-in {
        width: calc(100% / 3);
        &-img {
          width: 149px;
          height: 149px;
          img {
            max-width: 85%;
            max-height: 85%;
          }
        }
        &-title {
          max-width: 149px;
          padding: 10px 0;
          font-size: 15px;
        }
        &:nth-of-type(4),
        &:nth-of-type(8) {
          .symptom-lists-in-img {
            background: var(--indexColor2);
          }
        }
        &:nth-of-type(3),
        &:nth-of-type(7) {
          .symptom-lists-in-img {
            background: #fff1f0;
          }
        }
      }
    }
  }
  .note {
    margin-top: 55px;
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
      margin: 54px auto 0;
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
    .note-content-mobile {
      & > div:nth-child(1) {
        margin: 20px 30px 0;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 24px */
        & > span:nth-child(1) {
          color: var(--Theme-Color, #fc1682);
        }
        & > span:nth-child(2) {
          color: var(--Blue-Deep, #00aeff);
        }
      }
      & > div:not(:first-child) {
        & > div {
          margin-top: 20px;
          & > div:nth-child(1) {
            border-radius: var(--Count, 0px) 20px 20px var(--Count, 0px);
            background: var(--Theme-Color, #fc1682);
            color: var(--White, #fff);
            text-align: right;
            font-family: FakePearl;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 130%; /* 20.8px */
            box-sizing: border-box;
            padding: 5px 30px;
            width: fit-content;
            margin-bottom: 12px;
          }
          & > div:nth-child(2) {
            padding: 0 30px;
            & > :not(:last-child) {
              margin-bottom: 20px;
              font-size: 18px;
            }
            & > div {
              display: flex;
              gap: 0 20px;
              & > div:nth-child(1) {
                width: 20.266vw;
                min-width: 20.266vw;
                & > img {
                  width: 100%;
                }
                position: relative;
                z-index: 5;
              }
              & > div:nth-child(1)::before {
                content: '';
                display: inline-block;
                width: 95.787px;
                height: 24.832px;
                background: var(--Theme-Color, #fc1682);
                border-radius: 12px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -5px;
                color: #fff;
                text-align: center;
                font-family: FakePearl;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 150%; /* 20.8px */
              }
              & > div:nth-child(2) {
                color: var(--Grey-Deep, #4d4d4d);
                text-align: justify;
                font-family: 'Noto Sans HK';
                font-size: 15px;
                font-style: normal;
                font-weight: 500;
                line-height: 160%; /* 19.2px */
                letter-spacing: 1.2px;
              }
            }
            & > div:nth-child(2) {
              & > div:nth-child(1) {
                color: var(--Grey-Deep, #4d4d4d);
                font-family: FakePearl;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 150%; /* 24px */
              }
            }
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div:nth-child(1)::before {
                content: '定期洗牙';
              }
            }
            & > div:nth-child(2) {
              & > div:nth-child(1)::before {
                content: '齦下刮治術';
              }
            }
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              & > div:nth-child(1)::before {
                background: var(--Blue-Deep, #00aeff);
                content: '牙周翻瓣術';
              }
            }
            & > div:nth-child(3) {
              & > div:nth-child(1)::before {
                background: var(--Blue-Deep, #00aeff);
                content: '牙周植骨術';
              }
            }
          }
        }
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
            font-size: 20px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 20px;
        }
        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(7) {
          & > div {
            .image {
              &-in {
                background: #fff1f0;
              }
            }
          }
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
      margin-top: 35px;
    }
  }
  :deep(.process) {
    .process-step {
      padding: 0 8vw 12.665vw;
      .step-in {
        padding: 6.133vw 0 6.133vw 6.4vw;
        .round {
          width: 4.265vw;
          height: 4.265vw;
        }
        .title {
          margin-right: 3.2vw;
        }
      }
    }
    & > .periodontal-test {
      & > div {
        height: auto;
        flex: 1;
        box-sizing: border-box;
        max-width: 28vw;
        padding: 1.33vw 1.865vw;
        line-height: 1.5;
        font-size: 4vw;
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        padding: 1.33vw 5.33vw;
      }
    }
  }
  .care2 {
    margin-top: 0px;
    padding-bottom: 0px;
    &-title {
      margin-top: 57px;
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
            &-in {
              img {
                max-width: 70%;
                max-height: 70%;
              }
            }
          }
          .text {
            white-space: pre-wrap;
            font-size: 20px;
          }
        }
        &:nth-of-type(n + 4) {
          margin-top: 20px;
        }
      }
    }
    &-btn {
      margin-top: 35px;
    }
  }
  .mobile-orthodontics {
    :deep(.introduce) {
      position: relative;
      .introduce-in-l {
        margin-bottom: 75px;
        position: absolute;
        top: 0;
        padding: 300px 0 30px 0;
      }
    }
  }
  .mobile_faq {
    margin-top: 200px;
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 12.5%,
      rgba(255, 241, 240, 0.7) 81.99%,
      rgba(255, 241, 240, 0) 100%
    );

    & > div:nth-child(2) {
      margin-top: 25px;
      box-sizing: border-box;
      padding: 0 62px;
      display: flex;
      gap: 0 28px;
      & > div {
        & > div:nth-child(2) {
          max-width: 111px;
          & > div:nth-child(1) {
            color: var(--Theme-Color, #fc1682);
            text-align: center;
            font-family: FakePearl;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 20.8px */
            margin-top: 5px;
          }
          & > div:nth-child(2) {
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
      }
    }
  }
  .mobile_youtube {
    margin: 22px auto 50px;
    & > a {
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .mobile_introduce_one {
    box-sizing: border-box;
    & > div:nth-child(1) {
      padding: 0 15px;
      position: relative;
      display: flex;
      align-items: flex-end;
      & > div:nth-child(1) {
        & > img {
          position: relative;
          z-index: 10;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 31.2px */
        padding-bottom: 10px;
        & > span:nth-child(2) {
          color: var(--Theme-Color, #fc1682);
        }
      }
    }
    & > div:nth-child(1)::after {
      content: '';
      width: 100%;
      height: 1px;
      background: var(--indexColor1);
      width: 68%;
      bottom: 5px;
      right: 0;
      position: absolute;
    }

    & > div:nth-child(2) {
      margin-top: 20px;
      box-sizing: border-box;
      padding: 0 30px;
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 32px */
      letter-spacing: 1.6px;
    }
  }
  .mobile_introduce_two {
    margin-top: 50px;
    & > div:nth-child(1) {
      justify-content: center;
      gap: 0 20px;
    }
    & > div:nth-child(1)::after {
      width: 55%;
    }
  }
  .mobile_introduce_three {
    margin-top: 50px;
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        margin: 35px 0;
      }
      & > div:nth-child(3) {
        & > span {
          color: var(--Theme-Color, #fc1682);
          font-family: 'Noto Sans HK';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 200%;
          letter-spacing: 1.6px;
        }
      }
    }
  }
  .step {
    // background: #fff;
    // 背景渐变3色
    background: url('https://static.cmereye.com/imgs/2024/08/6b7abb73df76f85e.png')
      no-repeat;
    background-position: center 0;
    margin-top: 0;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 30px 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 25px;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        width: 100%;
        padding: 0;
        min-height: 250px;
        &:nth-of-type(n + 4) {
          margin-bottom: 30px;
        }
        &:nth-of-type(5) {
          .step-lists-in-r {
            display: none;
          }
        }
        &-l {
          width: 145px;
          position: relative;
          .title {
            padding: 0 6px;
            font-size: 26px;
            width: 70px;
            height: 61.286px;
            background: url('https://static.cmereye.com/imgs/2024/08/a53173454afef713.png')
              no-repeat;
            background-position: center center;
            background-size: 100% 100%;
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
            align-items: center;
            position: absolute;
            z-index: 5;
            top: -30px;
            left: -20px;
          }
          .image {
            padding: 0;
            border-radius: 12px;
            border: 1px solid var(--Theme-Color, #fc1682);
            height: 98px;
            overflow: hidden;
            &::after {
              display: none;
            }
            & > img {
              border-radius: 0;
              width: 100%;
              height: 100%;
            }
          }
          .name {
            margin-top: 5px;
            padding: 0;
            width: 100%;
            font-size: 16px;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            background: transparent;
            white-space: initial;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 20.8px */
            margin-bottom: 5px;
          }
          .mobile_text {
            P {
              color: var(--Grey-Deep, #4d4d4d);
              font-family: FakePearl;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
              letter-spacing: 1.2px;
              & > span:nth-child(1) {
                color: var(--Theme-Color, #fc1682);
              }
            }
          }
        }
        &-r {
          display: block;
          margin-top: 30px;
          margin-left: 0;
          img {
            transform: rotate(90deg);
          }
        }
        &:nth-of-type(6) {
          margin-top: 15px;
          align-items: initial;
          grid-column: span 2;
          .lastBox-t {
            & > div {
              font-size: 26px;
              span {
                font-size: 26px;
                display: inline-block;
              }
              img {
                width: 20px;
                height: 22px;
              }
            }
          }
          .lastBox-b {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .bigBan {
              font-size: 28px;
            }
          }
        }

        &:nth-of-type(2),
        &:nth-of-type(5) {
          .step-lists-in-l {
            .name {
              width: 100%;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(4) {
          position: relative;
          top: 220px;
        }
      }
    }
  }
  .hospital {
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 20px 0 30px;
    & > div:nth-child(1) {
      color: var(--Blue-Deep, #00aeff);
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      display: flex;
      flex-direction: column;
      & > span:nth-child(2) {
        color: var(--Theme-Color, #fc1682);
      }
      margin-bottom: 10px;
    }
    & > div:nth-child(3) {
      margin-top: 8px;
      & > div {
        display: flex;
        gap: 0 20px;
        align-items: center;
        & > div:nth-child(1) {
          display: flex;
          gap: 0 5.5px;
          & > div:nth-child(2) {
            min-width: 66px;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 24px */
            letter-spacing: 1.5px;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          color: var(--Grey-Deep, #4d4d4d);
          font-family: FakePearl;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;
        }
        padding: 10px 0;
        border-bottom: 1px solid #fc1682;
      }
      & > div:last-child {
        border-bottom: none;
      }
    }
    & > div:nth-child(4) {
      margin-top: 10px;
      display: flex;
      gap: 0 38px;
      & > div {
        width: fit-content;
        padding: 10px 30px;
        text-align: center;
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 32px */
      }
      & > div:nth-child(1) {
        color: var(--Theme-Color, #fc1682);
        border-radius: 95px;
        background: var(--White, #fff);
        box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
      }
      & > div:nth-child(2) {
        color: var(--White, #fff);
        border-radius: 63px;
        background: var(--Theme-Color, #fc1682);
      }
    }
  }
  .step_new_mobile {
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .step_new_items {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px 25px;
    & > div {
      position: relative;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 41.6px */
      }
      & > div:nth-child(3) {
        margin-top: 12px;
        box-sizing: border-box;
        padding: 5px 20px;
        border-radius: 20px;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 2px 2px 0px 0px #fff;
        width: fit-content;
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
      }

      & > div:nth-child(4) {
        margin-top: 8px;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: FakePearl;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .method_new_mobile {
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 30px;
    & > div:nth-child(2) {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      & > div:nth-child(2) {
        margin-top: 20px;
        display: flex;
        gap: 0 40px;
        box-sizing: border-box;
        padding: 0 23px;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;

          & > div:nth-child(1) {
            color: #fc1682;
            font-family: FakePearl;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 24px */
            letter-spacing: 1.5px;
          }
          & > div:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: 'Noto Sans HK';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 200%; /* 32px */
            letter-spacing: 1.6px;
          }
        }
      }
    }
  }
  .table_new_mobile {
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 30px;
    display: grid;
    gap: 2px 2px;
    // grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    & > div {
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 12px;
      width: max-content;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
      background: var(--Pink-Pale, #fee6f1);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 97px;
      padding-left: 10px;
      padding-right: 10px;
      max-width: 158px;
      width: 100%;
    }
    & > div:nth-child(1) {
      max-width: 316px;
      grid-column: span 3;
      background: var(--Theme-Color, #fc1682);
      height: fit-content;
      padding: 10px 25px 10px 27px;
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 24px */
      letter-spacing: 1.5px;
      border-radius: 20px 20px 0 0;
      white-space: nowrap;
    }
    & > div:nth-child(2) {
      max-width: 83px;
      background: #ccecbc;
      text-align: center;
      font-family: FakePearl;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
      text-align: center;
    }
    & > div:nth-child(5) {
      max-width: 83px;
      text-align: center;
      grid-row: span 3;
      background: #ffdbb1;
      text-align: center;
      font-family: FakePearl;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
      min-height: 100%;
    }
    & > div:nth-child(12) {
      max-width: 83px;
      text-align: center;
      grid-row: span 4;
      height: 100%;
      border-radius: var(--Count, 0px) var(--Count, 0px) var(--Count, 0px) 20px;
      background: #fca3a3;
      text-align: center;
      font-family: FakePearl;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
    }
    & > div:last-child {
      border-radius: var(--Count, 0px) var(--Count, 0px) 20px var(--Count, 0px);
    }
    & > div:nth-child(3),
    & > div:nth-child(6),
    & > div:nth-child(8),
    & > div:nth-child(10),
    & > div:nth-child(13),
    & > div:nth-child(15),
    & > div:nth-child(17),
    & > div:nth-child(19) {
      text-align: center;
      color: var(--Theme-Color, #fc1682);
      font-family: FakePearl;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
      width: 85px;
    }
  }
  .eg_new_mobile {
    margin-top: 50px;
    position: relative;
    & > div:nth-child(2) {
      margin-top: 20px;
      overflow: hidden;
    }
  }
  .eg_img_one {
    display: none;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
  }
  .eg_img_two {
    display: none;
    flex-direction: column;
    align-items: center;
  }
  .eg_img_active {
    display: flex;
  }
  .eg_nav {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    & > div:nth-child(1) {
      transform: rotate(180deg);
    }
    position: absolute;
    top: 53%;
    width: 100%;
  }
  .eg_nav_active {
    opacity: 0.2;
  }
  .evaluate {
    margin-top: 50px;
    background: url('https://static.cmereye.com/imgs/2024/08/5d6748e39cf5023e.png')
      no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 35px 30px 40px;
    position: relative;
    & > div:nth-child(2) {
      margin-top: 20px;
    }
  }
  .evaluate_item_one,
  .evaluate_item_two {
    border-radius: 5px;
    background: var(--White, #fff);
    box-sizing: border-box;
    padding: 15px;
    & > div:nth-child(1) {
      display: flex;
    }
  }
  .evaluate_item_one {
    margin-bottom: 16px;
    & > div:nth-child(1) {
      margin-bottom: 7px;
      justify-content: flex-start;
      gap: 0 10px;
      align-items: flex-end;
      padding-left: 4px;
      & > div:nth-child(2) {
        color: var(--Theme-Color, #fc1682);
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        & > span {
          font-size: 16px;
          font-weight: 400;
          line-height: 160%;
        }
      }
    }
    & > a {
      & > img {
        width: 100%;
      }
    }
  }
  .evaluate_item_two {
    margin-bottom: 35px;
    & > div:nth-child(1) {
      justify-content: space-between;
      align-items: flex-end;
      & > div:nth-child(1) {
        color: var(--Theme-Color, #fc1682);
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 32px */
      }
      & > div:nth-child(2) {
        color: var(--Grey-Mid, #666);
        text-align: right;
        font-family: 'Noto Sans HK';
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
      }
    }
    & > div:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px;
    }
  }
  .item_name_even {
    color: var(--Blue-Deep, #00aeff) !important;
  }
  .evaluate::before {
    position: absolute;
    content: '';
    background: url('https://static.cmereye.com/imgs/2024/08/576948e3b341c654.png')
      no-repeat;
    transform: translateX(-50%);
    left: 50%;
    display: inline-block;
    width: 178px;
    height: 38px;
    top: -25px;
  }
  .test_tooth {
    margin-top: 40px;
    background: url('https://static.cmereye.com/imgs/2024/08/716e8ff52efa5754.png')
      no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 85px 30px 40px;
    min-height: 615px;
  }
  .questions {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        color: #fc1682;
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
        width: fit-content;
        margin: 0 auto;
      }
      & > div:nth-child(2) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
        width: fit-content;
        margin: 0 auto;
      }
      margin-bottom: 35px;
    }
    & > div:nth-child(2) {
      & > div {
        width: 100%;
        border-radius: 90px;
        border: 1px solid #fc1682;
        background: #fff;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;

        font-family: 'Noto Sans HK';
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
        padding: 10px 0;
        box-sizing: border-box;
        margin-bottom: 7px;
        transition: all 0.5s ease;
      }
    }
    & > div:nth-child(3) {
      width: fit-content;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 10px 45px;
      border-radius: 90px;
      background: #fc1682;
      color: var(--White, #fff);
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 32px */
      letter-spacing: 1.6px;
      margin-top: 21px;
    }
  }
  .item_leven {
    display: none;
  }
  .leven_active {
    display: flex;
  }
  .question_active {
    display: none;
  }
  .leven_one,
  .leven_two,
  .leven_three,
  .leven_four {
    display: noe;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      color: #14a033;
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      position: relative;
      width: fit-content;
      padding-bottom: 10px;
    }
    & > div:nth-child(1)::after {
      content: '';
      width: 120%;
      height: 1px;
      background: #14a033;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      display: inline-block;
    }
    & > div:nth-child(2) {
      box-sizing: border-box;
      padding: 0 65px;
      margin-top: 30px;
      color: #14a033;
      text-align: justify;
      /* ServiceList-MB */
      font-family: FakePearl;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 24px */
      letter-spacing: 1.5px;
    }
    & > div:nth-child(3) {
      margin-top: 70px;
      margin-right: 0;
      margin-left: auto;
    }
  }
  .leven_two {
    & > div:nth-child(1) {
      color: #febf44;
    }
    & > div:nth-child(1)::after {
      background: #febf44;
    }
    & > div:nth-child(2) {
      color: #febf44;
    }
  }
  .leven_three {
    & > div:nth-child(1) {
      color: #ff7c1c;
    }
    & > div:nth-child(1)::after {
      background: #ff7c1c;
    }
    & > div:nth-child(2) {
      color: #ff7c1c;
    }
  }
  .leven_four {
    & > div:nth-child(1) {
      color: #ff1313;
    }
    & > div:nth-child(1)::after {
      background: #ff1313;
    }
    & > div:nth-child(2) {
      color: #ff1313;
    }
  }
  .check_active {
    background: #fee6f1 !important;
    transition: all 0.5s ease;
  }

  .nurse_mobile {
    & > div:nth-child(2) {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        color: var(--White, #fff);
        font-family: FakePearl;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */

        border-radius: 20px;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 2px 2px 0px 0px rgba(252, 22, 130, 0.3);
        box-sizing: border-box;
        padding: 12px 16px;
        width: fit-content;
        margin: 0 auto 4px;
      }
      & > div:nth-child(5),
      & > div:nth-child(3),
      & > div:nth-child(4) {
        margin-top: 4px;
        display: flex;
        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
      & > div:nth-child(3) {
        width: 100%;
        justify-content: center;
        gap: 0 77.5px;

        & > div {
          border-radius: 16px;
          background: var(--Pink-Pale, #fee6f1);
          box-shadow: 2px 2px 0px 0px rgba(252, 22, 130, 0.5);

          color: var(--Theme-Color, #fc1682);
          text-align: center;
          font-family: FakePearl;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;

          box-sizing: border-box;
          padding: 12px 16px;
        }
      }
      & > div:nth-child(4) {
        justify-content: center;
        gap: 0 90px;
      }
      & > div:nth-child(5) {
        justify-content: center;
        gap: 0 20px;
        & > div {
          border-radius: 12px;
          background: var(--Pink-Pale, #fee6f1);
          box-shadow: 2px 2px 0px 0px rgba(252, 22, 130, 0.5);
          box-sizing: border-box;
          padding: 12px 16px;
          color: var(--Theme-Color, #fc1682);
          text-align: center;
          font-family: FakePearl;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;
        }
      }
    }
  }
  .health_mobile {
    margin-top: 52px;
    & > div:nth-child(1) {
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 26px */
      display: flex;
      flex-direction: column;
      & > span {
        i {
          color: #00963e;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 10px;
      box-sizing: border-box;
      padding: 30px;
      border-radius: 20px 20px var(--Count, 0px) var(--Count, 0px);
      background: linear-gradient(
        180deg,
        #fee6f1 -23.02%,
        rgba(255, 255, 255, 0) 58.97%
      );
      & > div:nth-child(1) {
        margin-bottom: 30px;
      }

      & > div:nth-child(1) {
        border-radius: 21.211px;
        border: 1.414px solid #fc1682;
        background: #fff;
        box-shadow: 4.242px 4.242px 0px 0px rgba(252, 22, 130, 0.3);
        position: relative;
        box-sizing: border-box;

        & > div:nth-child(1) {
          & > div:nth-child(1) {
            color: #14a033;
            text-align: center;
            font-family: FakePearl;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 32px */
            padding: 20px 20px 10px 20px;
          }
          & > div:nth-child(2) {
            border-radius: var(--Count, 0px) var(--Count, 0px) 21.211px 21.211px;
            background: var(--Pink-Pale, #fee6f1);
            padding: 15px 20px 20px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--Theme-Color, #fc1682);
            text-align: center;
            text-shadow: 0px 1.414px 0px var(--White, #fff);
            -webkit-text-stroke-width: 1.4140625;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 38.4px */
            letter-spacing: 3.84px;

            i {
              color: var(--Grey-Deep, #4d4d4d);
              font-family: 'Noto Sans HK';
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%;
              letter-spacing: 3.2px;
            }
          }
        }
      }
      & > div:nth-child(2) {
        border-radius: 21.211px;
        border: 1.414px solid #fc1682;
        background: #fff;
        box-shadow: 4.242px 4.242px 0px 0px rgba(252, 22, 130, 0.3);
        position: relative;
        box-sizing: border-box;

        & > div:nth-child(1) {
          & > div:nth-child(1) {
            color: #14a033;
            text-align: center;
            font-family: FakePearl;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 32px */
            padding: 20px 20px 10px 20px;
          }
          & > div:nth-child(2) {
            border-radius: var(--Count, 0px) var(--Count, 0px) 21.211px 21.211px;
            background: var(--Pink-Pale, #fee6f1);
            & > div:nth-child(1) {
              padding: 15px 20px 0 20px;
              & > span:nth-child(2) {
                & > i {
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 160%; /* 32px */
                  letter-spacing: 3.2px;
                }
                color: var(--Theme-Color, #fc1682);
                font-family: 'Noto Sans HK';
                font-size: 35px;
                font-style: normal;
                font-weight: 700;
                line-height: 160%;
                letter-spacing: 5.6px;
                & > span {
                  color: var(--Grey-Deep, #4d4d4d);
                  font-family: 'Noto Sans HK';
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 160%;
                  letter-spacing: 2.4px;
                  position: relative;
                }
                & > span::after {
                  position: absolute;
                  top: 38%;
                  left: 50%;
                  content: '';
                  display: inline-block;
                  width: 100%;
                  height: 1px;
                  background: var(--Grey-Deep, #4d4d4d);
                  transform: rotate(-6deg) translate(-50%, -50%);
                }
              }
            }
            & > div:nth-child(2) {
              padding: 10px 20px;
              border-top: 1px solid #fc1682;
              border-bottom: 1px solid #fc1682;
              & > span:nth-child(2) {
                & > span {
                  color: var(--Theme-Color, #fc1682);
                  font-family: 'Noto Sans HK';
                  font-size: 35px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 120%;
                  letter-spacing: 5.6px;
                }
                & > i {
                  color: var(--Theme-Color, #fc1682);
                  font-family: 'Noto Sans HK';
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 100%;
                  letter-spacing: 3.2px;
                }
              }
            }
            & > div:nth-child(3) {
              padding: 0 20px 20px 20px;
              & > span:nth-child(1) {
                & > i {
                  color: var(--Theme-Color, #fc1682);
                  font-family: 'Noto Sans HK';
                  font-size: 35px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 160%;
                  letter-spacing: 5.6px;
                  & > i {
                    color: var(--Theme-Color, #fc1682);
                    font-family: 'Noto Sans HK';
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 160%;
                    letter-spacing: 3.2px;
                  }
                }
              }
              & > span:nth-child(2) {
                & > i {
                  color: var(--Grey-Deep, #4d4d4d);
                  font-family: 'Noto Sans HK';
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 160%;
                  letter-spacing: 2.4px;
                  position: relative;
                }
                & > i::after {
                  position: absolute;
                  top: 38%;
                  left: 50%;
                  content: '';
                  display: inline-block;
                  width: 85%;
                  height: 1px;
                  background: var(--Grey-Deep, #4d4d4d);
                  transform: rotate(-6deg) translate(-50%, -50%);
                }
              }
            }
            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            text-shadow: 0px 1.414px 0px var(--White, #fff);
            -webkit-text-stroke-width: 1.4140625;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 32px */
            letter-spacing: 3.2px;
          }
        }
      }
      & > div:last-child {
        margin-top: 20px;
        color: var(--Grey-Deep, #4d4d4d);
        font-family: 'Noto Sans HK';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
      }
    }
  }
  .abs_box {
    position: absolute;
    top: -10px;
    left: -10px;
    background: url(https://static.cmereye.com/imgs/2024/08/804246100e3ed97f.png)
      no-repeat;
    background-size: 100% 100%;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > span:nth-child(1) {
      color: #fff;
      text-align: center;
      font-family: FakePearl;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 110%; /* 22.4px */
    }
    & > span:nth-child(2) {
      color: #fff;
      text-align: center;
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 32px */
    }
  }
  .doctor_new_mobile {
    margin-top: 50px;
    & > div:nth-child(2) {
      margin-top: 20px;
      max-width: 100%;
      margin: 20px 20px 0;
      overflow-y: scroll;
      display: flex;
      gap: 0 10px;
      box-sizing: border-box;
      padding: 110px 10px 10px 10px;
      & > div {
        background: var(--Pink-Pale, #fee6f1);
        position: relative;
        min-width: 170px;
        padding-top: 170px;
        box-sizing: border-box;
        padding: 90px 7px 20px 7px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 480px;
        & > div:nth-child(1) {
          background: var(--Pink-Pale, #fee6f1);
          position: absolute;
          top: -80px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
          overflow: hidden;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          z-index: 5;
          top: 40px;
          color: var(--Theme-Color, #fc1682);
          text-align: center;
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 32px */
          background: #fff;
          border: 5px solid #ffdde9;
          width: 100%;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          & > span {
            padding-top: 5px;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%;
            letter-spacing: 1.2px;
          }
        }
        & > div:nth-child(3) {
          background: var(
            --Grad-Pink-Double,
            linear-gradient(
              90deg,
              rgba(255, 221, 218, 0) 12.24%,
              #fc1682 42.01%,
              #fc1682 61.44%,
              rgba(255, 221, 218, 0) 94.94%
            )
          );
          color: var(--White, #fff);
          text-align: center;
          font-family: FakePearl;
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;
          width: 100%;
        }
        & > div:nth-child(4) {
          margin-top: 5px;
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          & > span:nth-child(1) {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: FakePearl;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 160%; /* 24px */
            letter-spacing: 1.5px;
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: justify;
            font-family: FakePearl;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 19.2px */
            letter-spacing: 1.2px;
          }
        }
      }
    }
    & > div:nth-child(2)::-webkit-scrollbar {
      height: 3px;
      width: 0;
    }
    & > div:nth-child(2)::-webkit-scrollbar-thumb {
      height: 3px;
    }
    & > div:nth-child(2)::-webkit-scrollbar-track {
      background: #fc1682;
    }
  }
  .consult_mobile {
    width: fit-content;
    border-radius: 95px;
    background: var(--Theme-Color, #fc1682);
    box-shadow: 1px 2px 17.1px 0px rgba(252, 22, 130, 0.5);
    box-sizing: border-box;
    padding: 6px 20px;
    color: var(--White, #fff);
    text-align: center;
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    position: absolute;
    bottom: 20px;
  }
}
</style>
