<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import doctorLists_hk from '~/assets/js/doctor'
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
  img: 'https://ckjhk.com/images/c7ddb39c7305.avif',
  mbImg: 'https://ckjhk.com/images/e194b7c613f5.avif',
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
  mbImg: 'https://static.cmereye.com/imgs/2024/08/a8716b7fb39f2801.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/11/38143ec138e85da7.jpg',
  tabNavName: 'pages.dental-service.periodontal.introduce.tabNavName',
  pageName: 'periodontal-test',
}

const symptomData = {
  title: '牙周病的症狀',
  lists: [
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/407809ba68d40bca.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/15de17809a71d2a9.png',
      title: '牙齦萎縮牙根外露',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/1b662490098b35ee.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/84e7001089b55eb0.png',
      title: '牙齒對冷熱敏感',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/16f8714f61804929.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/94d041ef9700b12a.png',
      title: '牙縫變大',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/f7870df82236cf65.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/153e3de559d8e98b.png',
      title: '牙齒移位及鬆脫',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/f2aa30ef18d93722.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/2090d0e517f9769e.png',
      title: '口氣異常',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/e07094dd166ce5cc.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/1d066d3744f6e815.png',
      title: '牙齦疼痛',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/62cc5d45cc330a55.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/1d9c6d02532503a0.png',
      title: '牙齦腫脹變色及化膿',
    },
    {
      imgUrl: 'https://static.cmereye.com/imgs/2024/08/4d837df8e0a06d5c.png',
      imgMobileUrl:
        'https://static.cmereye.com/imgs/2024/08/12912d0da246a651.png',
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
      A: '<strong>1.牙周專業技術需求</strong><br />牙周病專科醫生的專業知識和技能是治療效果的關鍵。<br /><br /><strong>2.牙周治療過程複雜</strong><br />牙周病的治療的每一步都需要高度精確和專業的操作。<br /><br /><strong>3.牙周治療通常需要3-6個月</strong><br />牙周病治療不是一次性的過程，它需要多次訪問診所進行治療和後續的維護。<br />',
    },
    {
      Q: '牙齦炎係「熱氣」？',
      A: '香港人常將牙肉腫痛歸因於「熱氣」，這通常與進食辛辣、刺激或煎炸食物有關。若牙肉腫痛持續，建議儘早尋求專業牙醫的意見，以避免潛在的牙周問題惡化。專業治療能有效緩解症狀，維持口腔健康。',
    },
    {
      Q: '20歲就有牙周病？ 牙周病有年輕化趨勢？',
      A: '根據亞洲大學附屬醫院的發現，近年年紀約20歲左右青少年族群，也出現「青年型牙周病」症狀，有「口臭」、「刷牙流血」以及「對冷熱敏感」等，甚至有人已經出現牙齦萎縮等前兆，深度大於5毫米。＊由牙周病帶嚟嘅日常尷尬事件，嚴重阻礙到佢哋嘅社交和生活。<br /><br />*資料來源：亞洲大學附屬醫院，2022年，<br />https://www.auh.org.tw/NewsInfo/NewsArticle?no=1861',
    },
    {
      Q: '牙周病可以斷尾嗎？',
      A: '患上牙周病如得到適當的治療是可以「斷尾」的，但仍需定期覆診監控病程。但牙周病一旦發展到一定階段，對牙骨的損害是無法逆轉的。然而，透過及時的專業治療和良好的口腔護理，可以有效控制病情的進一步惡化，維持牙齒和牙齦的健康。定期檢查和清潔是關鍵。',
    },
    {
      Q: '網上流傳「自己治好了我的牙周病」偏方，可行的嗎?',
      A: '網上流傳的偏方通常缺乏科學驗證，對牙周病的治療效果不確定，甚至可能延誤專業治療，導致病情惡化。牙周病應由專業牙醫診斷和治療，建議儘早尋求專業意見，以確保口腔健康。',
    },
    {
      Q: '誰是牙周病高危一族？',
      A: '',
    },
  ],
}

const reasonData = {
  title: '牙周病的成因及過程',
  reasonLists: [
    {
      mbImg: 'https://static.cmereye.com/imgs/2024/08/1febe76f3bf3a2c7.png',
      img: 'https://static.cmereye.com/imgs/2024/08/c0ae0e2872ccdb66.png',
      context:
        '牙齦及牙齒邊緣長期積聚牙菌膜，細菌分泌毒素刺激牙齦，引發牙齦炎。',
    },
    {
      mbImg: 'https://static.cmereye.com/imgs/2024/08/14f5a8eaf87394f2.png',
      img: 'https://static.cmereye.com/imgs/2024/08/1c4e9101522b2eaa.png',
      context: '牙齦發炎時，牙肉紅腫，刷牙時易出血，牙齒表面積聚牙結石。',
    },
    {
      mbImg: 'https://static.cmereye.com/imgs/2024/08/a67de0db8328d902.png',
      img: 'https://static.cmereye.com/imgs/2024/08/ebf17b409ca7617d.png',
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
      pcImg: 'https://static.cmereye.com/imgs/2024/08/322b56c67f917afe.jpg',
      name: '檢查與診斷',
      text: [
        {
          l: '詳細檢查',
          r: '：牙齦狀況、牙周袋深度測量',
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
      pcImg: 'https://static.cmereye.com/imgs/2024/08/055c2a585f4a7411.jpg',
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
      pcImg: 'https://static.cmereye.com/imgs/2024/08/6b13facaf4e76d0d.jpg',
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
      pcImg: 'https://static.cmereye.com/imgs/2024/08/8d9372e49fd474fd.jpg',
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

const locale = useState<string>('locale.setting')
let doctorObjs = {
  doctorLists_hk,
}
let doctorLists = ref(doctorLists_hk)

let windowWidth = ref(390)
let mobileShow = ref(false)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value >= 768) {
    mobileShow.value = true
  } else {
    mobileShow.value = false
  }
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  setTimeout(() => {
    egImg(0)
  }, 500)
  // doctorList_periodontal()
})
// 处理医生数据 获得有 牙周病tag的医生
interface doctorList_type {
  name: string
  mbImg: string
  tags: string[]
  posts: string
  org: string
  skilled: string
  newSkilled: string
}

// const list = ref([] as any[])
// const periodontalList = ref<doctorList_type[]>([])
// const doctorList_periodontal = () => {
//   list.value = [
//     ...doctorLists.value[0],
//     ...doctorLists.value[1],
//     ...doctorLists.value[2],
//     ...doctorLists.value[3],
//   ]
//   console.log(list.value[0],'newSkilled');

//   list.value.map((items) => {
//     if (items.tags.includes('口腔牙周病科')) {
//       periodontalList.value.push(items)
//     }
//   })
// }

const periodontalList = [
  {
    id: '139',
    dentalProfessionId: ['105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/9e64ca61ad962a93.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Longhua/doctor502.png',
    name: '曾紅艷',
    org: '羅湖區，福田區，寶安區，龍華區 李川口腔診所，康輝門診，恆潔門診，雅健門診，炫雅門診',
    newOrg:
      '羅湖區，福田區，寶安區，龍華區 李川口腔診所，康輝門診，恆潔門診，雅健門診，炫雅門診',
    tags: [],
    text: '醫生',
    posts: '集團牙周學總監',
    job: '深圳愛康健口腔醫院牙周科主任',
    skilled:
      '牙潔治技術、各種牙周疾病的專業治療及手術治療（翻瓣術及牙周引導骨組織再造術、齦切除術）以及種植體周圍感染疾病的治療。',
    newSkilled:
      '牙潔治技術、各種牙周疾病的專業治療及手術治療（翻瓣術及牙周引導骨組織再造術、齦切除術），種植體周圍感染疾病治療 等。',
    context:
      '深圳愛康健口腔醫院牙周科主任， 集團牙周學總監， 集團牙周學科帶頭人， 美國牙周學會國際會員， 中華口腔醫學會牙周病學專委會會員， 畢業於南華大學口腔醫學專業， 2018年獲得廣東省民營口腔醫師病例展示競賽銀獎， 2020年華南國際會展牙周優秀病例大賽金獎， 2020廣東省口腔醫師病例大賽金獎。 曾於武漢大學口腔醫學院任職5年，從事口腔臨床工作20余年，完成5000余例牙周病的成功治療。師從香港大學牙學院牙體牙髓科主任張成飛教授及北京大學口腔醫學院胡文傑教授，常年參加國內外前沿口腔學術交流，並多次赴北京、上海、韓國、意大利等地參加口腔醫學領域專業培訓，受邀全國性牙周病學學術會議做病例分享。',
    educated: '',
    isIndexShow: true,
  },
  {
    id: '101',
    dentalProfessionId: ['102', '104', '105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/6a7b889f6f185f2a.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor101.png',
    name: '鞏賢平',
    org: '羅湖區 深圳愛康健口腔醫院，口腔牙周病科，口腔修復科，牙體牙髓科',
    newOrg: '羅湖區 深圳愛康健口腔醫院',
    tags: ['口腔牙周病科', '口腔修復科', '牙體牙髓科'],
    text: '醫生',
    newJobs: [
      '愛康健口腔醫院院長',
      '口腔專業主治醫師生',
      '華西口腔醫學院碩士研究生',
    ],
    posts: '主治醫師',
    job: '愛康健口腔醫院院長',
    skilled:
      '種植修復，微創美學修復，全口咬合重建等；熟練應用口腔顯微鏡並在顯微放大設備下進行種植手術、牙周美學手術及各類修復操作。熟練處理牙周病及牙體缺失、四環素、氟斑牙的全口美學修復工作，對於顯微治療有深入研究，具有豐富的口腔全科診療經驗。',
    newSkilled:
      '牙齒美容修復、烤瓷及全瓷修復、 各類復雜義齒修復、種植修復 等。',
    context:
      '主治醫師， 深圳愛康健口腔醫院院長， 集團口腔修復專業學科帶頭人， 華西口腔醫學院醫學碩士， 深圳電視臺第一現場《名醫直播問診》節目特邀專家。 從事口腔修復臨床、教學和科研工作近20年，多次赴香港、美國等地進行學習和學術交流，並受邀出席全國口腔修復學術研討會，在微創美學修復領域有著豐富的診療經驗，迄今已完成5000余例口腔微創美學修復。為人親和、細致認真、嫻熟的醫學素養是鞏醫生給人的印象，在簡短的交流中對顧客需求了如指掌，在結合專業技能使得顧客稱贊不已，充分發揮優秀醫務工作者的本質。',
    educated: '口腔醫學碩士',
    isIndexShow: true,
  },
  {
    id: '103',
    dentalProfessionId: ['102', '104', '105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/81d8c2ccb62f31a9.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor103.png',
    name: '楊福強',
    org: '羅湖區 深圳愛康健口腔醫院，口腔牙周病科，口腔修復科，牙體牙髓科',
    newOrg: '羅湖區 深圳愛康健口腔醫院',
    tags: ['口腔牙周病科', '口腔修復科', '牙體牙髓科'],
    text: '醫生',
    newJobs: [
      '口腔醫院綜合科總監',
      '口腔修復科醫生',
      '口腔專業主治醫生',
      '中華口腔醫學會委員',
      '國際牙科研究會(IADR)會員',
    ],
    posts: '主治醫師',
    job: '深圳愛康健口腔醫院副院長',
    skilled:
      '冠根一體化牙體牙髓及牙周病的診療，複雜牙的拔除，牙體缺損的嵌體修復，以及烤瓷冠、義齒的修復等方面的診治，在水激光治牙方面有著豐富的臨床經驗。臨床工作中致力於牙體保存，種植修復設計，咬合功能重建，微創美學牙體修復等。',
    newSkilled:
      '口腔美觀設計、瓷牙修復、牙體牙髓病的診治、牙體缺損的修復以及瓷冠、義齒的修復等方面的診治，水激光無痛治牙 等。',
    context:
      '主治醫師， 深圳愛康健口腔醫院副院長， 粵港資深修復醫師， 牙科研究會(IADR)會員， 中華口腔醫學會種植專科會員， 深圳口腔醫學會專業委員會委員， 德國漢堡大學牙科學院訪問學者。 口腔專業畢業後曾在三甲醫院從事口腔診療、科研、教學工作20多年，多次在北大口腔醫學院、中山大學光華口腔醫學院等國內口腔專業學府進修學習，累積豐富經驗，操作手法靈巧精確，善於解決疑難案例，擁有1萬多例烤瓷美容修復和牙周治療案例。近年來，多篇論文在國內外核心期刊發表，他主導的《烤瓷牙的遠期效果觀察》、《活動義齒的臨床設計》等論文，多次在國內各地口腔醫療技術研討會上獲得一等獎。',
    educated: '',
    isIndexShow: true,
  },
  {
    id: '112',
    dentalProfessionId: ['102', '104', '105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/02d96f63cef851a3.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor112.png',
    name: '趙瑩',
    org: '羅湖區，龍華區 深圳愛康健口腔醫院，口腔牙周病科，口腔修復科，牙體牙髓科',
    newOrg: '羅湖區，龍華區 深圳愛康健口腔醫院',
    tags: ['口腔牙周病科', '口腔修復科', '牙體牙髓科'],
    text: '醫生',
    newJobs: ['主治醫生', '口腔醫學碩士'],
    posts: '主治醫師',
    job: '主治醫師',
    skilled:
      '對牙體牙髓、各類義齒修復、外科拔牙、複雜牙周病的系統治療等方面有豐富的臨床經驗，在多發病聯合診治中有獨到思路，制定科學的治療計劃。熟悉掌握口腔科常見病、多發病的診斷、治療工作。',
    newSkilled:
      '對牙體牙髓、各類義齒修復、外科拔牙、複雜牙周病的系統治療，多發病聯合診治熟悉掌握口腔科常見病、多發病的診斷、治療工作',
    context:
      '主治醫師， 畢業於蘭州大學口腔醫學院， 中山大學光華口腔醫學碩士。 專注口腔醫療工作十余年。曾在深圳市人民醫院學習進修一年，曾被集團選派前往韓國首爾口腔整形醫院進行學術交流和學習，青年骨幹醫生，數次獲得省內口腔修復病例大賽優秀獎。趙醫生具有良好的醫德醫風，秉承專業、細心、手法輕巧，在牙體牙髓方面采用微創、無痛治療技術，嚴格執行無菌操作流程，在治療過程中注意顧客的感受，力求操作無痛、無不適、效果適合客戶滿意的體驗式服務。',
    educated: '口腔醫學碩士',
    isIndexShow: true,
  },
  {
    id: '119',
    dentalProfessionId: ['102', '104', '105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/2c9d3870859fa8ab.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor119.png',
    name: '牟宇',
    org: '羅湖區 深圳愛康健口腔醫院，口腔牙周病科，口腔修復科，牙體牙髓科',
    newOrg: '羅湖區 深圳愛康健口腔醫院',
    tags: ['口腔牙周病科', '口腔修復科', '牙體牙髓科'],
    text: '醫生',
    newJobs: ['主治醫生'],
    posts: '主治醫師',
    job: '',
    skilled:
      '牙齒疼痛的治療，各類缺失牙的活動、全瓷修復、烤瓷修復、嵌體修復、固定修復，前牙美容瓷牙修復，牙周炎的治療，種植牙的方案制定等。',
    newSkilled:
      '牙齒疼痛的治療，各類缺失牙的活動、全瓷修復、烤瓷修復、嵌體修復、固定修復，前牙美容瓷牙修復，牙周炎的治療，種植牙的方案制定等',
    context:
      '主治醫師， 全科醫師， 粵港口腔修復醫師， 中華口腔醫學會會員， 畢業於華西醫科大學。 從事口腔臨床工作10余年，有豐富的臨床經驗。具有良好的醫德醫風，多次參加口腔醫學會舉辦的口腔學研討論會及培訓，注重專業、無痛、細致的客戶服務。在口腔內科學、口腔修復學、口腔外科學積累了大量的臨床經驗，獲得廣大顧客一直好評。',
    educated: '',
    isIndexShow: true,
  },
  {
    id: '140',
    dentalProfessionId: ['105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/a6e66496c44b89da.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor140.png',
    name: '陳蓉蓉',
    org: '羅湖區，龍華區 康輝門診',
    newOrg: '羅湖區，龍華區 康輝門診',
    tags: [],
    text: '醫生',
    newJobs: ['牙周專科醫生'],
    posts: '主治醫師',
    job: '牙周專科醫師',
    skilled:
      '牙周治療、無痛拔牙、美容修復等，尤其擅長無痛治療在口腔臨床診療中的運用。',
    newSkilled:
      '牙周治療、無痛拔牙、美容修復等，尤其擅長無痛治療在口腔臨床診療中的運用',
    context:
      '執業醫師， 全科醫師， 牙周專科醫師， 曾在北京大學深圳醫院學習進修。 畢業於廣東醫科大學口腔醫學專業，積累了豐富的口腔臨床診療經驗，多次赴外學習交流牙周專科、修復專科理論知識和臨床操作技藝。追求無痛治療原則，工作認真，操作溫柔。技術嫻熟，有良好醫德，對待患者溫和負責，為患者提供個性化診療方案，深得患者信賴。',
    educated: '',
    isIndexShow: true,
  },
  {
    id: '322',
    dentalProfessionId: ['105'],
    imgUrl:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Nanshan/doctor322pc.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Nanshan/doctor322.png',
    name: '趙董博',
    org: '南山區 恒雅口腔門診',
    newOrg: '南山區 恒雅口腔門診',
    tags: [],
    text: '醫生',
    newJobs: ['中華口腔醫學會會員', '體牙髓及牙周專委會會員'],
    posts: '主治醫師',
    job: '中華口腔醫學會會員，牙體牙髓及牙周專委會會員',
    skilled:
      '牙周病的診斷及序列治療，前後牙的美學樹脂充填，牙體牙髓疾病及根尖週疾病的診治，前牙貼面及後牙嵌體、全冠的修復，口腔常見多發疾病的預防及保健。',
    newSkilled:
      '牙周病的診斷及序列治療，前後牙的美學樹脂充填，牙體牙髓疾病及根尖週疾病的診治，前牙貼面及後牙嵌體、全冠的修復 等。',
    context:
      '畢業於河南大學醫學院口腔醫學專業，10餘年工作經驗，有豐富的口腔臨床操作經驗，多次參加國內知名專家教授的臨床技術操作培訓班，並應用於日常臨床診療操作中，給予不同患者個性化解決方案。',
    educated: '口腔學士學位',
    isIndexShow: true,
  },
  {
    id: '120',
    dentalProfessionId: ['105'],
    imgUrl: 'https://static.cmereye.com/imgs/2023/05/001263c1e4ed1caa.png',
    mbImg:
      'https://static.cmereye.com/static/ckj/imgs/doctor/Luohu/doctor120.png',
    name: '劉國強',
    org: '羅湖區 深圳愛康健口腔醫院，口腔牙周病科',
    newOrg: '羅湖區 深圳愛康健口腔醫院',
    tags: ['口腔牙周病科'],
    text: '醫生',
    newJobs: [
      '顯微根管治療醫生',
      '中華口腔醫學會會員',
      '牙體牙髓專委會成員',
      '口腔修復學專委會成員',
    ],
    posts: '執業醫師',
    job: '顯微根管治療醫師',
    skilled:
      '現代化根管治療，美學樹脂修復，各類固定及活動修復，各類複雜牙拔除。',
    newSkilled:
      '現代化根管治療，美學樹脂修復，各類固定及活動修復，各類複雜牙拔除。',
    context:
      '執業醫師， 顯微根管治療醫師， 中華口腔醫學會會員， 牙體牙髓專委會成員， 口腔修復學專委會成員。 畢業於荊楚理工大學醫學院，曾在湖北省三甲醫院進修，對於常見口腔疾病的診療積累了豐富的臨床診療經驗與深厚的口腔醫學理論知識，多次參加國內重大口腔行業學術會議的交流，熱衷於口腔修復及顯微根管治療牙病領域，善於制定個性化的科學治療方案，幫助患者快速恢復口腔健康。',
    educated: '',
    isIndexShow: true,
  },
]

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

const levenList = ref([] as any[])
const checkbox = (i: number, type: any) => {
  levenList.value.push(type)
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

  // 对象转 数组
  const arr = Object.values(levenList.value)
  if (arr.length === 0) {
    leven_one?.classList.add('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    levenList.value = []
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (arr.includes(1)) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.add('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    levenList.value = []
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (arr.includes(2)) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.add('leven_active')
    leven_four?.classList.remove('leven_active')
    question?.classList.add('question_active')
    levenList.value = []
    checkItems.forEach((item, index) => {
      item.classList.remove('check_active')
    })
  }
  if (arr.includes(3)) {
    leven_one?.classList.remove('leven_active')
    leven_two?.classList.remove('leven_active')
    leven_three?.classList.remove('leven_active')
    leven_four?.classList.add('leven_active')
    question?.classList.add('question_active')
    levenList.value = []
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
  levenList.value = []

  const checkItems = document.querySelectorAll('.checkItem')
  checkItems.forEach((item, index) => {
    item.classList.remove('check_active')
  })
}

const isShow = ref(false)
const showDetail = () => {
  isShow.value = !isShow.value
}
const isShowOldNode = ref(false)
const imgSrc = ref(false)
const imgSrcHandel = (i: any) => {
  if (i == 0) {
    imgSrc.value = false
  }
  if (i == 1) {
    imgSrc.value = true
  }
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
      <div class="mobile-orthodontics">
        <ServiceIntroduce :introduceData="orthodonticsIntroduceData" />
      </div>
      <div class="mobile_introduce_one">
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/93cb783ce4a8daab.png"
              srcset="
                https://static.cmereye.com/imgs/2024/08/fbbfeeb7b74cc160.png 400w,
                https://static.cmereye.com/imgs/2024/08/93cb783ce4a8daab.png
              "
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
        <div class="mobile_introduce_one_waring">
          <div>「老掉牙」</div>
          <div>並非正常現象</div>
          <div>
            人們常說「老掉牙」了，認為人老掉牙是必然現象，其實這是一種錯誤的觀念。如果做好口腔保健，健康的牙齒是應該是伴隨人一生的。
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
      <div class="step_new_mobile">
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
                src="https://static.cmereye.com/imgs/2024/08/cb4f7d50c4e973a6.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/d9576e4ef6c8bbfa.png 400w,
                  https://static.cmereye.com/imgs/2024/08/cb4f7d50c4e973a6.png
                "
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
                src="https://static.cmereye.com/imgs/2024/08/8945b67ff72e1e10.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/2adbffbe54b348b4.png 400w,
                  https://static.cmereye.com/imgs/2024/08/8945b67ff72e1e10.png
                "
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
                src="https://static.cmereye.com/imgs/2024/08/34b59fb25e487f68.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/1c4237335dc21b2d.png 400w,
                  https://static.cmereye.com/imgs/2024/08/34b59fb25e487f68.png
                "
                alt=""
              />
            </div>
            <div>重度牙周病</div>
            <div>
              <span>≥5 mm牙周袋</span>
              <span>牙肉萎縮或牙齒鬆動</span>
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/7d1a41a4f40c936c.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/e4bcb7a79d8ce9e2.png 400w,
                  https://static.cmereye.com/imgs/2024/08/7d1a41a4f40c936c.png
                "
                alt=""
              />
            </div>
            <div>非常嚴重的牙周病</div>
            <div>
              <span>牙齒脫落</span>
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
      <div class="health_mobile">
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
          <div>
            *可使用醫院券或一般付款方式支付醫療費用<br />優惠只限於網上及電話預約客戶。
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
        <div>政府指定長者醫療券機構</div>
        <div class="care2-btn">
          <PageAnimBtnTypeTwo :str="'立即線上諮詢'" />
        </div>
      </div>
      <div class="pc_hospital" v-else>
        <div>
          <span>羅湖區</span>
          <span>深圳愛康健口腔醫院</span>
        </div>
        <div>
          <div>
            <img
              :src="
                imgSrc
                  ? 'https://static.cmereye.com/imgs/2024/02/2f20ab9660e0bfa7.webp'
                  : 'https://static.cmereye.com/imgs/2024/02/3cc92ffa0caa8ed1.webp'
              "
              alt=""
            />
          </div>
          <div>
            <div>
              <div
                @click="imgSrcHandel(0)"
                style="border-radius: 5px"
                :style="{
                  border:
                    imgSrc == false ? '1px solid #FC1682' : '1px solid #fff',
                }"
              >
                <img
                  src="https://static.cmereye.com/imgs/2024/08/8f0a70c1e09405e6.png"
                  alt=""
                />
              </div>
              <div
                @click="imgSrcHandel(1)"
                style="border-radius: 5px"
                :style="{
                  border:
                    imgSrc == true ? '1px solid #FC1682' : '1px solid #fff',
                }"
              >
                <img
                  src="https://static.cmereye.com/imgs/2024/08/bdfac71abee9d68d.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                    >
                      <path
                        d="M7 0C8.85652 0 10.637 0.737125 11.9497 2.04922C13.2625 3.36131 14 5.14088 14 6.99646C14 9.95291 11.9215 13.1749 7.81846 16.6968C7.59031 16.8927 7.29943 17.0003 6.99866 17C6.69789 16.9997 6.40719 16.8916 6.17939 16.6954L5.908 16.46C1.98656 13.0299 0 9.8869 0 6.99646C0 5.14088 0.737498 3.36131 2.05025 2.04922C3.36301 0.737125 5.14348 0 7 0ZM7 4.30551C6.28596 4.30551 5.60116 4.58902 5.09625 5.09367C4.59135 5.59832 4.30769 6.28278 4.30769 6.99646C4.30769 7.71014 4.59135 8.3946 5.09625 8.89925C5.60116 9.4039 6.28596 9.68741 7 9.68741C7.71404 9.68741 8.39884 9.4039 8.90375 8.89925C9.40866 8.3946 9.69231 7.71014 9.69231 6.99646C9.69231 6.28278 9.40866 5.59832 8.90375 5.09367C8.39884 4.58902 7.71404 4.30551 7 4.30551Z"
                        fill="#FC1682"
                      />
                    </svg>
                  </div>
                  <div>地址</div>
                </div>
                <div>
                  <div>深圳市羅湖區火車站大廈</div>
                  <div>C區1-8樓</div>
                </div>
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
                        d="M9.09375 17.1875C13.5639 17.1875 17.1875 13.5639 17.1875 9.09375C17.1875 4.62357 13.5639 1 9.09375 1C4.62357 1 1 4.62357 1 9.09375C1 13.5639 4.62357 17.1875 9.09375 17.1875Z"
                        stroke="#FC1682"
                        stroke-width="1.61875"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.09375 4.23828V9.09858L12.5251 12.5303"
                        stroke="#FC1682"
                        stroke-width="1.61875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div>營業時間</div>
                </div>
                <div>
                  <div>9:00-18:00</div>
                  <div>（假日照常應診）</div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5057 16.9976C11.2796 16.9525 7.80492 16.4724 4.16587 12.8349C0.527673 9.19659 0.0483124 5.72343 0.00233464 4.49676C-0.0657805 2.62738 1.36634 0.811633 3.02069 0.10253C3.2199 0.0165239 3.43806 -0.0162212 3.65376 0.00750781C3.86945 0.0312368 4.07527 0.110625 4.25102 0.237881C5.61332 1.23046 6.55331 2.73209 7.36047 3.91279C7.53807 4.1722 7.614 4.48786 7.57381 4.79964C7.53361 5.11141 7.38009 5.3975 7.1425 5.6034L5.48135 6.83689C5.40109 6.89483 5.3446 6.97992 5.32236 7.07637C5.30013 7.17281 5.31366 7.27404 5.36044 7.36126C5.73678 8.04483 6.40601 9.06294 7.1723 9.82908C7.93945 10.5952 9.00545 11.3086 9.73684 11.7274C9.82854 11.7789 9.93648 11.7933 10.0385 11.7676C10.1405 11.742 10.2287 11.6782 10.2852 11.5895L11.3665 9.944C11.5653 9.67998 11.8586 9.50311 12.1849 9.45042C12.5112 9.39774 12.8452 9.47334 13.1171 9.66138C14.315 10.4905 15.7131 11.4141 16.7365 12.7242C16.8741 12.9012 16.9617 13.1119 16.99 13.3343C17.0183 13.5567 16.9863 13.7826 16.8974 13.9884C16.1848 15.6509 14.3814 17.0665 12.5057 16.9976Z"
                        fill="#FC1682"
                      />
                    </svg>
                  </div>
                  <div>查詢電話</div>
                </div>
                <div>
                  <div>+852 3892 5049</div>
                </div>
              </div>
            </div>
            <div>
              <a
                @click="showDetail()"
                :class="[isShow == true ? 'pc_hospital_btn_active' : '']"
              >
                <span>交通路線</span>
                <span
                  ><img
                    :style="{
                      transform: isShow == true ? 'rotate(90deg)' : 'rotate(0)',
                      transition: 'all 0.3s',
                    }"
                    src="https://static.cmereye.com/imgs/2024/08/b62f3468ff037777.png"
                    alt=""
                /></span>
                <div
                  class="pc_hospital_address"
                  :class="[isShow ? 'pc_hospital_address_active' : '']"
                >
                  <div>
                    <span data-v-91bb1c0f="">巴士路線</span
                    ><span data-v-91bb1c0f=""
                      >羅湖火車站：1路、7路、12路、17路、38路、82路、83路、97路、101路、102路、205路、215路、306路、387路、E13路、M112路、M152路、M401路、M508路、N14路、N16路、N18路、N2路、N4路、N7路、高峰專線73號</span
                    >
                  </div>
                  <div>
                    <span data-v-91bb1c0f="">地鐵路線</span
                    ><span data-v-91bb1c0f=""
                      >地鐵1號線「羅湖站」C出口； 地鐵9號線「人民南站」
                      A1出口</span
                    >
                  </div>
                </div>
              </a>
              <a href="https://j.map.baidu.com/b3/j3Yu" target="_blank"
                >百度地圖</a
              >
            </div>
          </div>
        </div>
        <div>政府指定長者醫療券機構</div>
        <div class="care2-btn">
          <PageAnimBtnTypeTwo :str="'立即預約牙齒檢查'" />
        </div>
      </div>
      <div class="care">
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
                  <img
                    v-if="windowWidth > 768"
                    :src="careItem.imgUrl"
                    :alt="careItem.title"
                  />
                  <img
                    v-else
                    :src="careItem.imgMobileUrl"
                    :alt="careItem.title"
                  />
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
      <div class="mobile_youtube">
        <a>
          <!-- <img
            src="https://static.cmereye.com/imgs/2024/08/109d93d287fc37a0.png"
            srcset="
              https://static.cmereye.com/imgs/2024/08/d14596dd773dd95b.png 400w,
              https://static.cmereye.com/imgs/2024/08/109d93d287fc37a0.png
            "
            alt=""
          /> -->
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Lb5GAx2ivrA?si=zWvVWe_NbC4Aqq5T"
            frameborder="0"
          ></iframe>
        </a>
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
      <div class="mobile_introduce_one_pc" v-else>
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周病治療簡介
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/c739e45383fa3cc0.png"
              alt="牙周病治療簡介"
            />
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
      </div>
      <div class="method_new_mobile">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            一般牙周病治療方法
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/c0fc2e262b036b20.png"
              srcset="
                https://static.cmereye.com/imgs/2024/08/3a724f5c62c66bca.png 400w,
                https://static.cmereye.com/imgs/2024/08/c0fc2e262b036b20.png
              "
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
      <div class="table_new_mobile">
        <div>愛康健提供的非手術性牙周治療服務</div>
        <div>
          早期發現<br v-if="!mobileShow" />牙周問題<br v-if="!mobileShow" />患者
        </div>
        <div>預防<br v-if="!mobileShow" />與維護</div>
        <div>定期的口腔清潔和回診洗牙可以大大降低病情惡化的風險</div>
        <div>
          輕度及<br v-if="!mobileShow" />中度牙周<br v-if="!mobileShow" />患者
        </div>
        <div>齦上<br v-if="!mobileShow" />潔治術</div>
        <div>清除牙齒表面的牙菌斑和牙結石</div>
        <div>
          牙結石<br class="table_new_mobile_br" />刮除術<br />(深層洗牙/<br
            class="table_new_mobile_br"
          />洗牙腳)
        </div>
        <div>深入牙齦，清除牙周袋內的牙菌斑和牙結石</div>
        <div>鬆牙<br v-if="!mobileShow" />固定術</div>
        <div>固定因牙周病而鬆動的牙齒</div>
        <div>重度<br v-if="!mobileShow" />牙周患者</div>
        <div>牙周<br v-if="!mobileShow" />翻瓣手術</div>
        <div>切開牙齦組織，徹底清除牙根表面的牙垢</div>
        <div>牙齦<br v-if="!mobileShow" />切除術</div>
        <div>移除受感染的牙齦組織</div>
        <div>牙周<br v-if="!mobileShow" />植骨術</div>
        <div>對骨缺損進行填補，促進骨組織再生</div>
        <div>膜齦<br v-if="!mobileShow" />移植術</div>
        <div>移植健康的牙齦組織以修復受損區域</div>
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
              <div class="step-lists-in-l" v-if="windowWidth > 767">
                <div class="title">
                  <img src="@/assets/images/icon_13.png" alt="" />
                  {{ stepItem.title }}
                </div>
                <div class="image"><img :src="stepItem.pcImg" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
                <div class="mobile_text">
                  <p v-for="(el, i) in stepItem.text" :key="i">
                    <span>{{ el.l }}</span
                    ><span>{{ el.r }}</span>
                  </p>
                </div>
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
      <div class="care2-btn">
        <PageAnimBtnTypeTwo :str="'立即WhatsApp預約檢查'" />
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
      <div class="eg_new_pc" v-else>
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周治療案例
          </div>
        </div>
        <div class="eg_img_pc">
          <div class="eeg_img_pc_one">
            <div>案列1</div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/dffbc9f5aee12fc7.png"
              alt=""
            />
          </div>
          <div class="eg_img_pc_two">
            <div>案列2</div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/322e356aeddc49a1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="evaluate">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            真實用戶評價
          </div>
        </div>
        <div>
          <div class="evaluate_item_one">
            <div>
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
                <!-- <img
                  src="https://static.cmereye.com/imgs/2024/08/b55bd699396049d1.png"
                  srcset="
                    https://static.cmereye.com/imgs/2024/08/ce865f7b5fa26303.png 400w,
                    https://static.cmereye.com/imgs/2024/08/b55bd699396049d1.png
                  "
                  alt=""
                /> -->

                <iframe
                  src="https://www.youtube.com/embed/EVErMNv6P8A?si=L2_6UX_eqjGzPnEX"
                  width="100%"
                  height="100%"
                  frameborder="0"
                ></iframe>
              </a>
            </div>

            <div v-if="windowWidth > 768">
              <img
                src="https://static.cmereye.com/imgs/2024/08/1ea128fa7a2f4ba4.png"
                alt=""
              />
            </div>
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
      <div class="doctor_new_mobile">
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
            <div v-if="doc.newSkilled.length > 0">
              <span>擅長項目：</span>
              <span>{{ doc.newSkilled }}</span>
            </div>
            <div class="consult_mobile">線上諮詢</div>
          </div>
        </div>
      </div>
      <div class="test_tooth">
        <div class="questions">
          <div>
            <div>牙周病自我檢查小測驗</div>
            <div>請選取你有的症狀（可以多選）</div>
          </div>
          <div>
            <div class="checkItem" @click="checkbox(0, 1)">
              <span>即使刷牙後，口腔仍然持續有異味</span>
            </div>
            <div class="checkItem" @click="checkbox(1, 1)">
              <span>刷牙或使用牙線時牙齦經常會出血</span>
            </div>
            <div class="checkItem" @click="checkbox(2, 2)">
              <span> 牙齦比往時更加紅腫或容易疼痛 </span>
            </div>
            <div class="checkItem" @click="checkbox(3, 2)">
              <span> 牙齦有膿瘡或牙齦間有膿液滲出 </span>
            </div>
            <div class="checkItem" @click="checkbox(4, 3)">
              <span> 牙齦出現退縮，多隻牙齒看起來比往時更長 </span>
            </div>
            <div class="checkItem" @click="checkbox(5, 3)">
              <span> 牙齒有鬆動的感覺或者咬合時感覺不對勁 </span>
            </div>
            <div class="checkItem" @click="checkbox(6, 3)">
              <span> 牙齒之間出現新的縫隙或者牙齦分隔 </span>
            </div>
          </div>
          <a @click="result()">看結果</a>
        </div>
        <div class="item_leven leven_one">
          <div>Level 0</div>
          <div>
            結果顯示沒有明顯的牙周問題，建議定期每半年洗牙及做好日常牙齒護理。
          </div>
          <div @click="close">
            <img src="../../assets/images/reload.svg" alt="" />
            <div>重新測試</div>
          </div>
          <div>
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
            <img src="../../assets/images/reload.svg" alt="" />
            <div>重新測試</div>
          </div>
          <div>
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
            <img src="../../assets/images/reload.svg" alt="" />
            <div>重新測試</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/08/f6a89210c4a12d3b.png"
              alt=""
            />
          </div>
        </div>
        <div class="item_leven leven_four">
          <div>Level 3</div>
          <div>
            結果顯示有牙周炎症狀，建議盡快盡求牙科醫生專業意見。一旦進一步的感染，可導致牙骨受到不能逆轉的傷害，
            有機會造成牙齒脫落。
          </div>
          <div @click="close">
            <img src="../../assets/images/reload.svg" alt="" />
            <div>重新測試</div>
          </div>
          <div>
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
      <div class="nurse_mobile">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周治療後維護
          </div>
        </div>
        <div>
          <div>口腔衛生控制</div>
          <div>
            <img
              v-if="windowWidth > 768"
              src="https://static.cmereye.com/imgs/2024/08/49483bffaefde82d.png"
              alt=""
            />
            <svg
              v-else
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
              <img
                v-if="windowWidth > 768"
                src="https://static.cmereye.com/imgs/2024/08/adba6bbd0084e3b8.png"
                alt=""
              />
              <svg
                v-else
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
              <img
                v-if="windowWidth > 768"
                src="https://static.cmereye.com/imgs/2024/08/adba6bbd0084e3b8.png"
                alt=""
              />
              <svg
                v-else
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
      <ServiceProblem :problemData="problemData" />
      <div class="mobile_faq">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            常見牙周問題
          </div>
        </div>
        <div>
          <div>
            <div>
              <img
                srcset="
                  https://static.cmereye.com/imgs/2024/08/f70a8c03df580ef7.png 400w,
                  https://static.cmereye.com/imgs/2024/08/5a8a206bcf96fc52.png
                "
                src="https://static.cmereye.com/imgs/2024/08/5a8a206bcf96fc52.png"
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
                srcset="
                  https://static.cmereye.com/imgs/2024/08/449d691464bd572e.png 400w,
                  https://static.cmereye.com/imgs/2024/08/329c15a4b7b8bc46.png
                "
                src="https://static.cmereye.com/imgs/2024/08/329c15a4b7b8bc46.png"
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
      <div class="reason">
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            牙周病的成因
          </div>
        </div>
        <div class="reason-lists">
          <div
            v-for="(item, index) in reasonData.reasonLists"
            :key="index"
            class="reason-lists-item"
          >
            <div class="image">
              <img :src="item.img" alt="" v-if="windowWidth > 768" />
              <img :src="item.mbImg" alt="" v-else />
            </div>
            <div class="text">
              {{ item.context }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="step_new_mobile">
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
                src="https://static.cmereye.com/imgs/2024/08/cb4f7d50c4e973a6.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/d9576e4ef6c8bbfa.png 400w,
                  https://static.cmereye.com/imgs/2024/08/cb4f7d50c4e973a6.png
                "
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
                src="https://static.cmereye.com/imgs/2024/08/8945b67ff72e1e10.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/2adbffbe54b348b4.png 400w,
                  https://static.cmereye.com/imgs/2024/08/8945b67ff72e1e10.png
                "
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
                src="https://static.cmereye.com/imgs/2024/08/34b59fb25e487f68.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/1c4237335dc21b2d.png 400w,
                  https://static.cmereye.com/imgs/2024/08/34b59fb25e487f68.png
                "
                alt=""
              />
            </div>
            <div>重度牙周病</div>
            <div>
              <span>≥5 mm牙周袋</span>
              <span>牙肉萎縮或牙齒鬆動</span>
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/08/7d1a41a4f40c936c.png"
                srcset="
                  https://static.cmereye.com/imgs/2024/08/e4bcb7a79d8ce9e2.png 400w,
                  https://static.cmereye.com/imgs/2024/08/7d1a41a4f40c936c.png
                "
                alt=""
              />
            </div>
            <div>非常嚴重的牙周病</div>
            <div>
              <span>牙齒脫落</span>
            </div>
          </div>
        </div>
      </div> -->

      <!-- 以下為舊版 -->
      <div class="reason2" v-if="isShowOldNode">
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
      <div class="care" v-if="isShowOldNode">
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
      <div class="note" v-if="isShowOldNode">
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
      <ServiceProcess :processData="processData" v-if="isShowOldNode" />
      <div class="care2" v-if="isShowOldNode">
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

      <serviceCard />
      <NewAddress />
      <div class="contact-box">
        <ContactForm-new2 />
      </div>
    </div>
    <PageFooter />
    <PageNewNavbarSide v-if="windowWidth > 768" />
    <PageNavbar v-else />
  </div>
</template>



<style lang="scss" scoped>
:deep(.pageIn){
  padding-top: 70px;
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
.mobile_faq {
  margin-top: 125px;
  background: linear-gradient(
    90deg,
    rgba(255, 241, 240, 0) 0%,
    rgba(255, 241, 240, 0.7) 12.5%,
    rgba(255, 241, 240, 0.7) 81.99%,
    rgba(255, 241, 240, 0) 100%
  );
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 55px;
  & > div:nth-child(2) {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    gap: 0 180px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 416px;
      & > div:nth-child(2) {
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 65px */
        & > div:nth-child(1) {
          margin-top: 30px;
          margin-bottom: 20px;
        }
        & > div:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: FakePearl;
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 44.8px */
        }
      }
    }
  }
}
.reason {
  margin-top: 128px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    justify-content: center;
    gap: 0 88px;
    &-item {
      width: 462px;
      box-sizing: border-box;
      padding: 22px 30px 22px 30px;
      border-radius: 20px;
      background: #fff;
      display: flex;
      align-items: center;
      border: 3px solid var(--Theme-Color, #fc1682);
      border-top: 52px solid #fc1682;
      gap: 0 20px;
      .image {
        position: relative;
        width: 200px;
        height: 200px;
        min-width: 200px;
        min-height: 200px;
        img {
          width: 100%;
        }
      }
      .text {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 4px;
      }
      position: relative;
    }
    &-item:nth-child(2) {
      border: 3px solid var(--Theme-Color, #00aeff);
      border-top: 52px solid #00aeff;
    }
    &-item:nth-child(1)::before,
    &-item:nth-child(3)::before,
    &-item:nth-child(2)::before {
      content: '1';
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
    }
    &-item:nth-child(2)::before {
      content: '2';
    }
    &-item:nth-child(3)::before {
      content: '3';
    }
  }
}
.mobile_youtube {
  margin: 33px auto 130px;
  & > a {
    width: 1000px;
    height: 560px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}

.mobile_introduce_one {
  max-width: 1320px;
  margin: 125px auto;
  position: relative;
  gap: 0 66px;
  justify-content: flex-end;
  & > div:nth-child(1) {
    padding: 0 15px;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 30px 0;
    gap: 0 30px;
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
      font-size: 50px;
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
    content: none;
  }

  & > div:nth-child(2) {
    position: absolute;
    top: 40%;
    left: 35%;
    width: 442px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 0;
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
  }
}
.mobile_introduce_one_waring {
  box-sizing: border-box;
  padding: 30px 33px;
  width: 373px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: #fff1f0;
  & > div:nth-child(1) {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: center;
    font-family: FakePearl;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 48px */
    letter-spacing: 3px;
  }
  & > div:nth-child(2) {
    color: var(--Theme-Color, #fc1682);
    font-family: FakePearl;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 3px;
    text-align: center;
  }
  & > div:nth-child(3) {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
  }
}
.mobile_introduce_one_waring::before {
  content: '';
  position: absolute;
  display: inline-block;
  background: url('https://static.cmereye.com/imgs/2024/08/36d155c84abe8513.png')
    no-repeat;
  width: 56px;
  height: 50px;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // flex-wrap: wrap;
    width: 100%;
    max-width: 1140px;
    margin: 54px auto 0;
    gap: 46px 88px;
    &-item {
      // width: calc(100% / 4);
      & > div {
        .image {
          padding: 0;
          &-in {
            border-radius: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .text {
          margin-top: 10px;
          text-align: center;
          font-size: 24px;
          font-weight: 500;
          padding: 0;
          // white-space: nowrap;
        }
      }
      &:nth-of-type(1) {
        .text {
          padding: 0 40px;
        }
      }
      &:nth-of-type(2),
      &:nth-of-type(4) {
        .text {
          padding: 0 20px;
        }
      }
      &:nth-of-type(7) {
        .text {
          padding: 0 20px;
        }
      }
      &:nth-of-type(n + 5) {
        // margin-top: 90px;
      }
      &:nth-of-type(2),
      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(7) {
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
  margin-bottom: 60px;
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
      margin-bottom: 12px;
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
          width: 80%;
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
        .mobile_text {
          & > p {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            letter-spacing: 4px;
            & > span:nth-child(1) {
              color: var(--Theme-Color, #fc1682);
            }
          }
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
            width: 80%;
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
          }
        }
      }
    }
    & > div:nth-child(3),
    & > div:last-child {
      & > div {
        .image::after {
          content: none;
        }
      }
    }
  }
}
.pc_hospital {
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 125px;
  align-items: center;
  & > div:nth-child(1) {
    color: var(--Theme-Color, #fc1682);
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    & > span:nth-child(1) {
      color: var(--Blue-Deep, #00aeff);
    }
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 0 32px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        display: flex;
        gap: 0 28px;
      }
      & > div:nth-child(2) {
        display: flex;
        gap: 0 64px;
        margin-top: 50px;
        margin-bottom: 20px;
        & > div {
          & > div:nth-child(1) {
            & > div:nth-child(2) {
              margin-left: 6px;
            }
            display: flex;
            align-items: center;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 35.2px */
          }
          & > div:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: FakePearl;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 32px */
            letter-spacing: 2px;
          }
        }
      }
      & > div:nth-child(3) {
        display: flex;
        gap: 0 55px;
        & > a {
          color: var(--Theme-Color, #fc1682);
          text-align: center;
          font-family: FakePearl;
          font-size: 35px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 56px */
          letter-spacing: 7px;
          border-radius: 92px;
          background: var(--White, #fff);
          box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.5);
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 7px 40px;
          position: relative;
          transition: all 0.3s ease;
        }
        & > a:nth-child(2) {
          color: var(--White, #fff);
          background: var(--Theme-Color, #fc1682);
        }
      }
    }
  }
  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    color: #358639;
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
}
.pc_hospital_btn_active {
  transition: all 0.3s ease;
  border-radius: 50px 50px 0 0 !important;
}
.pc_hospital_address {
  display: none;
  opacity: 0;
  position: absolute;
  top: 72px;
  left: 0;
  width: 220%;
  z-index: 10;
  border-radius: 0 22px 22px 22px;
  background: var(--White, #fff);
  box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.5);
  transition: all 0.5s ease;
  & > div {
    flex: 4;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > span:nth-child(1) {
      font-size: 20px;
      font-weight: 400;
      line-height: 160%; /* 32px */
      letter-spacing: 4px;
    }
    & > span:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      letter-spacing: 4px;
    }
  }
  & > div:nth-child(2) {
    flex: 4;
  }
}
.pc_hospital_address_active {
  display: flex;
  transition: all 0.5s ease;
  opacity: 1;
}
.step_new_mobile {
  margin-top: 125px;
  .step_new_items {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 70px;
    max-width: 1280px;
    margin: 50px auto 0;
    & > div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > div:nth-child(1) {
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 40.857px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 65.371px */
      }
      & > div:nth-child(2) {
        display: flex;
        align-items: flex-end;
        height: 228px;
      }
      & > div:nth-child(3) {
        margin-top: 22px;
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        border-radius: 36.915px;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 3.692px 3.692px 0px 0px #fff;
        padding: 0 25px;
        white-space: nowrap;
      }
      & > div:nth-child(4) {
        display: flex;
        flex-direction: column;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 4px;
      }
    }
  }
}
.mobile_introduce_one_pc {
  max-width: 1250px;
  margin: 125px auto 125px;
  & > div:nth-child(2) {
    margin-top: 52px;
    display: flex;
    gap: 0 50px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 30px 0;
      max-width: 705px;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: 'Noto Sans HK';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      letter-spacing: 4px;
      span {
        color: var(--Theme-Color, #fc1682);
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 4px;
      }
    }
  }
}
.method_new_mobile {
  max-width: 1250px;
  margin: 125px auto 125px;
  & > div:nth-child(2) {
    margin-top: 50px;
    display: flex;
    gap: 0 60px;
    & > div:nth-child(1) {
      min-width: 480px;
      & > img {
        width: 100%;
        border-radius: 11px;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 30px 0;
      & > div {
        & > div:nth-child(1) {
          color: #fc1682;
          font-family: FakePearl;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 48px */
          letter-spacing: 3px;
        }
        & > div:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 32px */
          letter-spacing: 4px;
        }
      }
    }
  }
}
.table_new_mobile {
  margin-top: 13.33vw;
  box-sizing: border-box;
  padding: 0;
  display: grid;
  gap: 4px 4px;
  // grid-template-columns: repeat(3, 1fr);
  border-radius: 20px;
  // overflow: hidden;
  width: 100%;
  max-width: 1245px;
  margin: 0 auto;
  & > div {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    background: var(--Pink-Pale, #fee6f1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    max-width: 100%;
    width: 100%;
  }
  & > div:nth-child(1) {
    grid-column: span 3;
    background: var(--Theme-Color, #fc1682);
    height: fit-content;
    padding: 2.665vw 6.665vw 2.665vw 7.2vw;
    color: var(--White, #fff);
    text-align: center;
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    border-radius: 5.33vw 5.33vw 0 0;
    white-space: nowrap;
    padding: 12px 395px;
  }
  & > div:nth-child(2) {
    background: #ccecbc;
    text-align: center;
    -webkit-text-stroke-width: 2;
    -webkit-text-stroke-color: #fff;
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    text-align: center;
    width: 316px;
    padding: 30px 15px;
    justify-content: center;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    white-space: nowrap;
  }
  & > div:nth-child(5) {
    text-align: center;
    grid-row: span 3;
    background: #ffdbb1;
    text-align: center;
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    width: 316px;
    padding: 30px 15px;
    justify-content: center;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    white-space: nowrap;
  }
  & > div:nth-child(12) {
    text-align: center;
    grid-row: span 4;
    width: 316px;
    padding: 30px 15px;
    border-radius: var(--Count, 0px) var(--Count, 0px) var(--Count, 0px) 20px;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    background: #fca3a3;
    text-align: center;
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    justify-content: center;
    white-space: nowrap;
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
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 41.6px */
    letter-spacing: 2.6px;
    width: 280px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.table_new_mobile_br {
  display: none;
}
.eg_new_pc {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .eg_img_pc {
    margin-top: 63px;
    display: flex;
    flex-direction: column;
    gap: 155px 0;
    position: relative;
    & > div {
      & > div:nth-child(1) {
        margin-bottom: 12px;
        color: #fc1682;
        text-align: center;
        font-family: FakePearl;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        text-decoration-line: underline;
      }
    }
    & > div:nth-child(1)::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #fc1682;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}
.evaluate {
  margin-top: 170px;
  background: url('https://static.cmereye.com/imgs/2024/08/8bf5803f370150a6.png')
    no-repeat;
  padding: 80px 0 220px;
  width: 100%;
  background-size: 100% 100%;
  position: relative;
  & > div:nth-child(2) {
    max-width: 1290px;
    margin: 55px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 34px;
    & > div:nth-child(1) {
      grid-row: span 2;
      & > div:nth-child(1) {
        background: #fff;
        box-sizing: border-box;
        padding: 22px 23px 30px;
        border-radius: 18.377px;
        & > div {
          display: flex;
          align-items: center;
          gap: 0 5px;
          margin-bottom: 10px;
          & > div:nth-child(1) {
            min-width: 43px;
            & > img {
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            display: flex;
            align-items: baseline;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 36.754px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 58.807px */
            white-space: nowrap;
            span {
              font-size: 29.404px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%;
            }
          }
        }
        & > a:nth-child(2) {
          margin-top: 8px;
          height: 225px;
          display: block;
        }
      }
    }
    .evaluate_item_two {
      border-radius: 4.331px;
      background: var(--White, #fff);
      box-sizing: border-box;
      padding: 25px;
      & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        & > div:nth-child(1) {
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 25.985px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 41.576px */
          letter-spacing: 2.599px;
        }
        & > div:nth-child(2) {
          color: var(--Grey-Mid, #666);
          text-align: right;
          font-family: 'Noto Sans HK';
          font-size: 17.324px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 27.718px */
          letter-spacing: 3.465px;
        }
      }
      & > div:nth-child(2) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 17.324px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 27.718px */
        letter-spacing: 3.465px;
      }
    }
    .evaluate_item_two:nth-child(3),
    .evaluate_item_two:nth-child(5) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          color: var(--Blue-Deep, #00aeff);
        }
      }
    }
  }
}
.evaluate::before {
  content: '';
  background: url('https://static.cmereye.com/imgs/2024/08/a6ffed7809ac7793.png')
    no-repeat;
  background-position: center center;
  width: 376px;
  height: 104px;
  display: inline-block;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
}

.test_tooth {
  margin-top: 125px;
  background: url('https://static.cmereye.com/imgs/2024/08/542f707beac2323d.png')
    no-repeat;
  background-position: center center;
  min-height: 995px;
}
.questions {
  max-width: 500px;
  margin: 0 auto;
  padding: 140px 0 90px;
  & > div:nth-child(1) {
    & > div:nth-child(1) {
      color: #fc1682;
      font-family: FakePearl;
      font-size: 31.392px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%; /* 40.809px */
      text-align: center;
      margin: 0 auto;
    }
    & > div:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 18.835px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 30.136px */
      letter-spacing: 1.884px;
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
      font-size: 18.835px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 30.136px */
      letter-spacing: 1.884px;
      padding: 0;
      box-sizing: border-box;
      margin-bottom: 12px;
      transition: all 0.5s ease;
      overflow: hidden;
      position: relative;
      & > span {
        position: relative;
        z-index: 2;
        display: block;
        padding: 10px 0;
      }
    }
    & > div::before {
      content: '';
      position: absolute;
      top: 0;
      // width: 40%;
      height: 100%;
      // background: linear-gradient(90deg, #ffffff00, #fdd3e3 50%, #ffffff00);
      width: 100%;
      left: 0;
      background: #fff;
      border-radius: 90px;
      // transition: all 0.5s linear;
      // animation: flow 2s linear infinite;
      animation-duration: 2.5s;
      animation-name: flow2;
      animation-delay: 0s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
    }
    & > div:nth-child(1):before {
      animation-delay: 0s;
    }
    & > div:nth-child(2):before {
      animation-delay: 0.4s;
    }
    & > div:nth-child(3):before {
      animation-delay: 0.8s;
    }
    & > div:nth-child(4):before {
      animation-delay: 1.2s;
    }
    & > div:nth-child(5):before {
      animation-delay: 1.6s;
    }
    & > div:nth-child(6):before {
      animation-delay: 2s;
    }
    & > div:nth-child(7):before {
      animation-delay: 2.4s;
    }
    & > div:hover {
      background: #fee6f1;
    }
  }
  & > a:nth-child(3) {
    display: block;
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 15px 85px;
    border-radius: 90px;
    background: #fc1682;
    color: var(--White, #fff);
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: 18.835px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 30.136px */
    letter-spacing: 4px;
    margin-top: 51px;
    box-shadow: 10px 10px 8px #fdd3e3;
  }
  & > a:hover {
    transition: all 0.5s ease;
    // padding: 10px 45px;
    // letter-spacing: 1.884px;
    transform: translateY(-10px);
    box-shadow: 16px 16px 8px #e0acc4;
  }
  & > a:active {
    transition: all 0.5s ease;
    padding: 10px 45px;
    letter-spacing: 1.884px;
  }
}
@keyframes flow {
  0% {
    left: -20%;
  }
  100% {
    left: 120%;
  }
}
@keyframes flow2 {
  0% {
    background: #fff;
    opacity: 0;
  }
  40% {
    background: #fff;
    opacity: 0;
  }
  80% {
    background: #fdd3e3;
    opacity: 1;
  }
  90% {
    background: #fff;
    opacity: 0;
  }
  100% {
    background: #fff;
    opacity: 0;
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
  max-width: 500px;
  margin: 0 auto;
  padding: 140px 0;
  position: relative;
  & > div:nth-child(1) {
    color: #14a033;
    font-family: FakePearl;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 24px */
    letter-spacing: 1.5px;
  }
  & > div:nth-child(3) {
    position: absolute;
    bottom: 160px;
    left: 75px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      width: 100%;
    }
    & > div {
      color: #fc1682;
      text-align: center;
      font-family: FakePearl;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 160%; /* 24px */
      letter-spacing: 1.5px;
      white-space: nowrap;
    }
  }
  & > div:nth-child(4) {
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
  & > span {
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    background: #fc1682 !important;
    color: #fff !important;
    transition: all 0.5s ease !important;
  }
}

.nurse_mobile {
  max-width: 1500px;
  margin: 25px auto 125px;
  & > div:nth-child(2) {
    margin-top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      color: var(--White, #fff);
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
      border-radius: 55.897px;
      background: var(--Theme-Color, #fc1682);
      box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.3);
      box-sizing: border-box;
      padding: 8.8px 255.5px;
    }
    & > div:nth-child(3) {
      display: flex;
      gap: 0 360px;
      & > div {
        border-radius: 44.718px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.5);
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        box-sizing: border-box;
        padding: 21px 140px;
      }
    }
    & > div:nth-child(4) {
      display: flex;
      gap: 0 360px;
    }
    & > div:nth-child(5) {
      display: flex;
      gap: 0 120px;
      & > div {
        border-radius: 44.718px;
        background: var(--Pink-Pale, #fee6f1);
        box-shadow: 5.59px 5.59px 0px 0px rgba(252, 22, 130, 0.5);
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        box-sizing: border-box;
        padding: 21px 92px;
      }
    }
  }
}
.health_mobile {
  background: url('https://static.cmereye.com/imgs/2024/08/1a7e7351a27885bc.png')
    no-repeat;
  background-position: center center;
  min-height: 1028px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div:nth-child(1) {
    color: var(--Theme-Color, #fc1682);
    text-align: center;
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    display: flex;
    flex-direction: column;
    & > span {
      i {
        color: #00963e;
        font-style: normal;
      }
    }
  }
  & > div:nth-child(2) {
    max-width: 818px;
    margin: 0 auto;
    gap: 0 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 10px;
    box-sizing: border-box;
    padding: 30px;
    border-radius: 20px 20px var(--Count, 0px) var(--Count, 0px);
    background: transparent;
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
      height: fit-content;
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
    & > div:nth-child(1)::after {
      content: '';
      position: absolute;
      right: 0;
      background: url('https://static.cmereye.com/imgs/2024/08/108f8b713654014e.png')
        no-repeat;
      background-size: 100% 100%;
      width: 230px;
      height: 203px;
      display: inline-block;
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
      grid-column: 2 span;
      margin-top: 20px;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: 'Noto Sans HK';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      letter-spacing: 4px;
      text-align: center;
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
    margin: 20px 100px 0;
    overflow-y: scroll;
    display: flex;
    gap: 0 30px;
    box-sizing: border-box;
    padding: 280px 10px 20px 10px;
    & > div {
      background: var(--Pink-Pale, #fee6f1);
      position: relative;
      min-width: 360px;
      padding-top: 170px;
      box-sizing: border-box;
      padding: 90px 7px 20px 7px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 500px;
      & > div:nth-child(1) {
        background: var(--Pink-Pale, #fee6f1);
        position: absolute;
        top: -235px;
        width: 310px;
        height: 310px;
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
        top: 15px;
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: FakePearl;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 56px */
        letter-spacing: 7px;
        background: #fff;
        border: 5px solid #ffdde9;
        width: 100%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 120px;
        & > span {
          position: absolute;
          padding-top: 5px;
          left: 60%;
          text-align: left;
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          letter-spacing: 1px;
          max-width: 160px;
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
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 24px */
        letter-spacing: 2.5px;
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
          font-size: 26px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 24px */
          letter-spacing: 2.5px;
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 19.2px */
          letter-spacing: 4px;
        }
      }
    }
  }
  & > div:nth-child(2)::-webkit-scrollbar {
    height: 18px;
    width: 0;
    cursor: pointer;
  }
  & > div:nth-child(2)::-webkit-scrollbar-thumb {
    height: 15px;
    background: #fc1682;
    cursor: pointer;
  }
  & > div:nth-child(2)::-webkit-scrollbar-track {
    background: #ececec;
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
@media (min-width: 768px) and (max-width: 1920px) {
  .reason {
    margin-top: 9.7917vw;
    &-lists {
      max-width: 86.25vw;
      margin: 6.0417vw auto 0;
      &-item {
        padding: 0 2.3438vw;
        .text {
          font-size: 1.1229vw;
          margin: 1vw auto;
          min-width: 186px;
        }
      }
    }
  }
  .table_new_mobile_br {
    display: none;
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
          // margin-top: 4.6875vw;
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
  :deep(.header-content) {
    .explain_box_mobile {
      margin-right: auto;
      margin-left: 0;
      top: 110px;
      z-index: 35px;
    }
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
  .table_new_mobile_br {
    display: block;
  }
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
        align-items: center;
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
          width: 94px !important;
          height: 94px !important;
          min-width: 94px !important;
          min-height: 94px !important;
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
        left: -3.33vw !important;
        top: -0.533vw !important;
        height: 104% !important;
        width: 5.33vw !important;
        border-radius: 10px var(--Count, 0px) var(--Count, 0px) 10px;
        background: var(--Theme-Color, #fc1682);
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 5.33vw !important;
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
      max-width: 100%;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px 10px;
      &-item {
        // width: calc(100% / 3);
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .image {
            padding: 0;
            width: 105px;
            height: 105px;
            & > img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            white-space: pre-wrap;
            padding: 0;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
          }
        }
        &:nth-of-type(1) {
          .text {
            padding: 0 5.4665vw;
            width: fit-content;
          }
        }
        &:nth-of-type(n + 4) {
          // margin-top: 20px;
        }
        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5),
        &:nth-of-type(7) {
          & > div {
            .image {
              &-in {
                // background: #fff1f0;
              }
            }
          }
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
        padding: 160px 0 30px 0;
        background: rgb(255 255 255 / 16%);
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
      justify-content: center;
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
      width: 100%;
      height: 56.41vw;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .mobile_introduce_one_waring {
    display: none;
  }
  .mobile_introduce_one {
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    margin: 125px auto 75px;
    & > div:nth-child(1) {
      padding: 0 15px;
      position: relative;
      display: flex;
      align-items: flex-end;
      gap: 0 3.2vw;
      & > div:nth-child(1) {
        max-width: 175px;
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
      width: 100%;
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
      position: static;
    }
  }
  .mobile_introduce_two {
    margin-top: 50px;
    & > div:nth-child(1) {
      justify-content: center;
      gap: 0 20px;
      & > div:nth-child(1) {
        position: relative;
        left: -8vw;
      }
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
      margin: 57px 8vw 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8vw 3.2vw;
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
    & > div:nth-child(2) {
      & > img {
        margin: 0 auto;
      }
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
      justify-content: center;
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
    & > div:nth-child(5) {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      color: #358639;
      text-align: center;
      margin: 20px 0 0 0;
    }
  }
  .step_new_mobile {
    margin-top: 50px;
    box-sizing: border-box;
    padding: 0 4vw;
  }
  .step_new_items {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    box-sizing: border-box;
    padding: 0;
    justify-content: center;
    gap: 25px 15px !important;
    max-width: 100%;
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
        font-size: 26px !important;
        font-style: normal;
        font-weight: 600;
        line-height: 160%; /* 41.6px */
      }
      & > div:nth-child(2) {
        width: 28vw;
        height: 22.665vw !important;
        margin: 0 auto;
        & > img {
          width: 100%;
        }
      }
      & > div:nth-child(3) {
        margin-top: 12px !important;
        box-sizing: border-box;
        padding: 5px 20px !important;
        border-radius: 20px !important;
        background: var(--Theme-Color, #fc1682);
        box-shadow: 2px 2px 0px 0px #fff !important;
        width: fit-content;
        color: var(--White, #fff);
        text-align: center;
        font-family: FakePearl;
        font-size: 16px !important;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
      }

      & > div:nth-child(4) {
        margin-top: 8px;
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
        font-family: FakePearl;
        font-size: 12px !important;
        font-style: normal;
        font-weight: 400 !important;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px !important;
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
      & > div:nth-child(1) {
        min-width: 100%;
      }
      & > div:nth-child(2) {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
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
    margin-top: 13.33vw;
    box-sizing: border-box;
    padding: 0 8vw;
    display: grid;
    gap: 0.53vw 0.53vw;
    // grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    & > div {
      color: var(--Grey-Deep, #4d4d4d);
      font-family: FakePearl;
      font-size: 3.2vw;
      width: max-content;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 0.32vw;
      background: var(--Pink-Pale, #fee6f1);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25.8665vw;
      padding-left: 2.665vw;
      padding-right: 2.665vw;
      max-width: 42.133vw;
      width: 100%;
    }
    & > div:nth-child(1) {
      max-width: 84.2665vw;
      grid-column: span 3;
      background: var(--Theme-Color, #fc1682);
      height: fit-content;
      padding: 2.665vw 6.665vw 2.665vw 7.2vw;
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 4vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 24px */
      letter-spacing: 0.4vw;
      border-radius: 5.33vw 5.33vw 0 0;
      white-space: nowrap;
    }
    & > div:nth-child(2) {
      max-width: 22.133vw;
      background: #ccecbc;
      text-align: center;
      font-family: FakePearl;
      font-size: 3.2vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 0.32vw;
      text-align: center;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }
    & > div:nth-child(5) {
      max-width: 22.133vw;
      text-align: center;
      grid-row: span 3;
      background: #ffdbb1;
      text-align: center;
      font-family: FakePearl;
      font-size: 3.2vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 0.32vw;
      min-height: 100%;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }
    & > div:nth-child(12) {
      max-width: 22.133vw;
      text-align: center;
      grid-row: span 4;
      height: 100%;
      border-radius: var(--Count, 0px) var(--Count, 0px) var(--Count, 0px) 20px;
      background: #fca3a3;
      text-align: center;
      font-family: FakePearl;
      font-size: 3.2vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 0.32vw;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
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
      font-size: 3.2vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 19.2px */
      letter-spacing: 0.32vw;
      width: 22.665vw;
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
    max-width: 100%;
    margin-top: 50px;
    background: url('https://static.cmereye.com/imgs/2024/08/5d6748e39cf5023e.png')
      no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 35px 30px 40px;
    position: relative;

    & > div:nth-child(2) {
      margin-top: 20px;
      max-width: 100%;
      display: flex;
      gap: 0;
      flex-direction: column;
      & > div {
        grid-row: span 1;
        & > div:nth-child(1) {
          padding: 0 !important;
          & > a {
            width: 100%;
            height: 43.585vw !important;
          }
        }
      }
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
      display: flex;
      flex-direction: column;
      & > div:nth-child(1) {
        margin-bottom: 7px;
        justify-content: flex-start;
        gap: 0 10px;
        align-items: flex-end;
        padding-left: 4px;
        & > div:nth-child(2) {
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 20px !important;
          font-style: normal;
          font-weight: 400 !important;
          line-height: 160%; /* 32px */
          & > span {
            font-size: 16px !important;
            font-weight: 400 !important;
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
    & > div:nth-child(2) {
      display: none;
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
        font-size: 20px !important;
        font-style: normal;
        font-weight: 600 !important;
        line-height: 160%; /* 32px */
      }
      & > div:nth-child(2) {
        color: var(--Grey-Mid, #666);
        text-align: right;
        font-family: 'Noto Sans HK';
        font-size: 12px !important;
        font-style: normal;
        font-weight: 500 !important;
        line-height: 160%; /* 19.2px */
        letter-spacing: 1.2px;
      }
    }
    & > div:nth-child(2) {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 12px !important;
      font-style: normal;
      font-weight: 500 !important;
      line-height: 160%; /* 19.2px */
      letter-spacing: 1.2px !important;
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
    top: -20px;
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
    padding: 0;
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
        margin-bottom: 10px;
        transition: all 0.5s ease;
      }
    }
    & > a {
      display: block;
      width: fit-content;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 10px 45px !important;
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
      position: absolute;
      bottom: 160px;
      left: 75px;
      & > img {
        width: 100%;
      }
      & > div {
        color: #fc1682;
        text-align: center;
        font-family: FakePearl;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 24px */
        letter-spacing: 1.5px;
      }
    }
    & > div:nth-child(4) {
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
    background: #fc1682 !important;
    color: #fff !important;
    transition: all 0.5s ease !important;
  }

  .nurse_mobile {
    margin: 0 auto;
    max-width: 100%;
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
    min-height: 828px;
    background: none;
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
      gap: 0;
      max-width: 100%;
      margin-top: 10px;
      box-sizing: border-box;
      padding: 30px;
      border-radius: 20px 20px var(--Count, 0px) var(--Count, 0px);
      background: linear-gradient(
        180deg,
        #fee6f1 -23.02%,
        rgba(255, 255, 255, 0) 58.97%
      );
      display: flex;
      flex-direction: column;
      & > div:nth-child(1) {
        margin-bottom: 30px;
      }
      & > div:nth-child(1)::after {
        content: none;
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
        letter-spacing: 0.8px;
        text-align: left;
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
        min-height: 360px;
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
          font-size: 18px;
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
          padding-right: 80px;
          letter-spacing: 2px;
          & > span {
            position: absolute;
            padding-top: 5px;
            color: var(--Theme-Color, #fc1682);
            font-family: FakePearl;
            font-size: 10px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%;
            letter-spacing: 0px;
            max-width: 180px;
            left: 52%;
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
