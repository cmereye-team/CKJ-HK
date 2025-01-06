<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Autoplay } from 'swiper'
import { toWhatsApp } from '~/assets/js/common'
import { useElementBounding, useWindowSize } from '@vueuse/core'
const appState = useAppState()
appState.setDentistryService('scaling-and-polishing-test')
useHead({
  title: '洗牙',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健超聲波洗牙88元，定期進行洗牙可以有效去除牙齒上的牙石和牙菌膜，防止牙齒變色,香港熱線: 6933 8128免費預約掛號,羅湖福田深圳灣口岸分店',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 爱康健 CKJ aikangjian 牙科服務 內地牙科 深圳牙科 深圳睇牙 深圳整牙 愛康健洗牙 免費洗牙 深圳愛康健口腔醫院 愛康健齒科集團 美容牙科 醫療券 長者醫療券大灣區試點 洗牙步驟 無痛洗牙 牙醫 牙医 深圳洗牙 羅湖洗牙 福田洗牙 朱咪咪 掛號預約 收費價目表 洗牙 洗牙費用 洗牙服務 洗牙幾錢 洗牙價錢 深層洗牙 定期洗牙 洗牙推薦 牙齒清潔 清除牙石 牙菌膜 牙石 牙漬 口臭 線上預約 拋光 噴砂洗牙 琺瑯質 敏感牙齒 洗牙幾多錢',
    },
  ],
})

const headerConfig = {
  img: 'https://statichk.cmermedical.com/ckj/image/01cab5b8642a.avif',
  mbImg: 'https://statichk.cmermedical.com/ckj/image/f872ec6da288.avif',
  bg: '',
  pageName: 'scaling-and-polishing-test',
  pcText: [
    '定期洗牙，全方位清潔口腔盲點',
    '愛牙愛己，愛康健細心守護您牙齒健康',
  ],
  mbText: ['定期洗牙', '全方位清潔口腔盲點'],
}

const orthodonticsIntroduceData = {
  title: '洗牙服務',
  content:
    '提供洗牙和深層洗牙服務，定期洗牙有效去除\n牙齒上的牙垢、牙菌膜和牙結石，更能預防牙\n周病或其他口腔問題。\n\n建議每半年至一年進行一次洗牙，為您的口腔\n健康護航。',
  mbImg: 'https://static.cmereye.com/imgs/2023/10/6caab98f1d6e048f.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/10/cc2d7e8addcc8f94.jpg',
  tabNavName: 'pages.dental-service.scaling-and-polishing.introduce.tabNavName',
  pageName: 'scaling-and-polishing-test',
}

const introduceJY = {
  title: '洗牙服務',
  content:
    '提供洗牙和深層洗牙服務，定期洗牙有效去除牙齒上的牙垢、牙菌膜和牙結石，更能預防牙周病或其他口腔問題。<br class="pc" /><br class="pc" />建議每半年至一年進行一次洗牙，為您的口腔健康護航。',
  mbImg: 'https://static.cmereye.com/imgs/2024/11/e2060998e6c2c550.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/11/694b54ff0a7831fc.png',
}

const reasonData = {
  title: '為何要定期洗牙？',
  reasonLists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/c064878ac3598d1d.jpg',
      context: '預防牙周病',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/50a1890059584dcd.jpg',
      context: '防止蛀牙',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/f69af3e0ebae289f.jpg',
      context: '改善口氣及牙色',
    },
  ],
}

// const stepData = {
//   title: '洗牙過程',
//   remark:
//     '由於洗牙時會觸碰到牙肉的發炎位置，因此可能會導致牙齦出血或輕微痺痛感。特別是一些從未或相隔很久沒有洗牙的人士，不適感一般會在洗牙後的2至3天後逐漸消失（患有敏感牙齒或牙周病的人士或需更長時間）。如情況持續出現，應立即聯絡醫護人員。',
//   stepLists: [
//     [
//       {
//         title: 'Step 1',
//         text: '利用超聲波洗牙工具，清除牙石及牙菌膜',
//       },
//       {
//         title: 'Step 2',
//         text: '利用刮牙石器去除細小牙石',
//       },
//     ],
//     [
//       {
//         title: 'Step 3',
//         text: '利用牙科用浮石粉拋光打磨或特製混合物料高速噴洗牙齒表面，去除牙漬及保持牙齒平滑',
//       },
//       {
//         title: 'Step 4',
//         text: '利用氟化物鞏固琺瑯質，強化牙齒',
//       },
//     ],
//   ],
//   pageName: 'scaling-and-polishing',
// }

const problemData = {
  title: 'pages.dental-service.scaling-and-polishing.problem.title',
  lists: [
    // {
    //   Q: 'pages.dental-service.scaling-and-polishing.problem.lists[0].Q',
    //   A: 'pages.dental-service.scaling-and-polishing.problem.lists[0].A'
    // },
    // {
    //   Q: 'pages.dental-service.scaling-and-polishing.problem.lists[1].Q',
    //   A: 'pages.dental-service.scaling-and-polishing.problem.lists[1].A'
    // },
    {
      Q: '定期洗牙頻率是多久？診所洗牙與家中刷牙分別？',
      A: '牙醫一般建議每六個月至一年洗牙一次。但具體頻率應根據個人口腔衛生狀況和牙醫的建議而定。如果您有牙周病或正接受牙齒矯正治療，可能需要更頻繁地洗牙。<br /><br />定期洗牙至關重要，它不僅僅是為了讓牙齒看起來更潔白，更是為了維護口腔健康，預防各種牙齒和牙齦疾病。<br />1. 清除牙菌斑和牙結石： 即使每天認真刷牙和使用牙線，仍然會有難以清除的牙菌斑積聚在牙齒表面，尤其是在牙齒與牙齦交界處以及牙齒排列不整齊的地方。牙菌斑是牙周病的主要致病因素。隨著時間推移，牙菌斑會鈣化形成牙結石，牙結石粗糙的表面更容易吸附牙菌斑，形成惡性循環，導致牙齦發炎、出血，甚至牙周病。洗牙可以有效清除牙菌斑和牙結石，從而預防牙周病。<br />2. 預防牙齦炎和牙周炎： 牙齦炎是牙周病的早期階段，表現為牙齦紅腫、出血。如果不及时治疗，牙齦炎會發展成牙周炎，牙周炎會破壞牙周組織，包括牙齦、牙周韌帶和牙槽骨，最終導致牙齒鬆動甚至脫落。定期洗牙可以去除導致牙齦炎的牙菌斑和牙結石，有效預防牙周病的發生和發展。<br />3. 保持口腔清新，去除口臭： 牙菌斑和牙結石會滋生細菌，產生硫化物，導致口臭。洗牙可以清除這些細菌和污垢，保持口腔清新，消除口臭。<br />4. 早期發現口腔問題： 洗牙過程中，牙醫會檢查您的口腔健康狀況，可以早期發現蛀牙、牙周病等問題，並及時進行治療，避免病情惡化。<br />5. 維持牙齒美白： 洗牙可以去除牙齒表面的色素沉積，例如咖啡、茶、煙漬等，讓牙齒恢復自然潔白。<br />6. 節省醫療費用： 定期洗牙可以預防牙齒和牙齦疾病，避免日後昂貴的治療費用。',
    },
    {
      Q: '什麼是噴沙洗牙?與一般洗牙的分別？',
      A: '噴砂洗牙，又稱為空氣拋光，是一種利用高壓氣流將細小的顆粒噴射到牙齒表面，有效去除牙菌斑、牙結石和外源性色素，例如咖啡、茶、煙、中藥漬等。<br /><br />噴砂洗牙相對舒適： 與一般的超聲波洗牙相比，噴砂洗牙的震動感較小，怕洗牙的患者會感覺更舒適。<br />更有效清潔牙齒縫隙： 噴砂洗牙可以清潔牙刷和牙線難以到達的牙齒縫隙，更有效地清除牙菌斑。<br />噴砂洗牙快速便捷： 噴砂洗牙過程相對快速，通常只需幾分鐘即可完成。<br />有效去除牙漬：噴砂洗牙過可去除咖啡漬、茶漬、煙漬、中藥漬等，所以有一定的美白效果。',
    },
    {
      Q: '洗牙可以美白牙齒嗎？',
      A: '洗牙的主要目的是清除牙結石，維護口腔健康。洗牙本身並不能改變牙齒的顏色，而是去除覆蓋在牙齒表面的牙菌斑、牙結石及外源性色素（如茶漬、咖啡漬），使牙齒恢復其原本的色澤。因此，洗牙後牙齒可能會看起來比較潔白，但這並非真正意義上的美白。若您希望達到更顯著的美白效果，改善牙齒本身的顏色，則建議尋求專業的牙齒美白療程。',
    },
    {
      Q: '洗牙過程需要多久時間?',
      A: '洗牙時間通常在30分鐘至1小時之間，具體時間取決於客人的口腔衛生狀況和牙結石的多少。',
    },
    {
      Q: '沒有提前預約，可以即時洗牙嗎?',
      A: '由於大多數診所洗牙的預約都十分緊湊，通常未能安排即時洗牙。有可能需要等待一段時間。建議您先透過網上或致電預約洗牙，以確保可以獲得及時的服務。',
    },
    {
      Q: '什麼是深層洗牙?',
      A: '深層洗牙是一種治療牙周病的方法之一，並非人人需要。<br /><br />一般洗牙是清潔牙齦線以上、肉眼可見的牙齒表面，去除牙菌斑和牙結石。<br />深層洗牙是牙清潔牙齦線以下、牙根表面的牙菌斑、牙結石和受感染的牙骨質。這個過程更深入、更複雜，通常需要局部麻醉以減輕不適感。<br /><br />如果您有牙周病的症狀，例如牙齦出血、紅腫、疼痛、口臭等，請及時就診，讓牙醫評估是否需要進行深層洗牙。',
    },
    {
      Q: '洗牙會損琺瑯質？',
      A: '洗牙本身並不會損害琺瑯質。洗牙的目的是去除牙結石和牙菌斑，這些沉積物附著在牙齒表面，會引發牙齦炎和牙周病。洗牙過程中，使用的超聲波震動或手動刮除工具並不會直接接觸或磨損琺瑯質。<br /><br />然而，操作不當的洗牙的確有可能造成牙齒損傷。因此，選擇正規的牙科診所和經驗豐富的牙醫至關重要，以確保洗牙過程的安全性及有效性。',
    },
    {
      Q: '哪些疾病患者洗牙前需要特別注意？',
      A: '以下疾病患者在洗牙前需要特別注意，並務必告知醫生自身的健康狀況：<br /><br />心血管疾病患者： 尤其是先天性心臟病或曾患細菌性心內膜炎者，洗牙後有細菌進入血液循環，引發感染的風險。<br />使用心律調節器者： 洗牙的超音波器械產生的電磁效應可能干擾心律調節器的正常運作。<br />凝血功能異常者： 包括服用抗凝血藥物或本身凝血功能較差者，洗牙可能導致出血難以止住，甚至增加感染風險。<br />肺部慢性疾病者： 洗牙時產生的水霧或小水珠可能刺激呼吸道，引發不適或呼吸困難。',
    },
  ],
}

const differenceData = {
  title: '洗牙技術及過程的區別？',
  tables: [
    {
      a: '',
      b: '超聲波洗牙',
      c: '含鹽洗牙',
      d: '無鹽洗牙',
    },
    {
      a: '所需時間',
      b: '20 分鐘',
      c: '30分鐘',
      d: '30 分鐘',
    },
    {
      a: '菌斑染色定位',
      b: 'n',
      c: 'n',
      d: 'y',
    },
    {
      a: '超聲波技術',
      b: 'y',
      c: 'y',
      d: 'y',
    },
    {
      a: '噴砂技術',
      b: 'n',
      c: '含鹽',
      d: '無鹽',
    },
    {
      a: '氟化物',
      b: 'y',
      c: 'y',
      d: 'y',
    },
    {
      a: '拋光護理',
      b: 'y',
      c: 'y',
      d: 'y',
    },
  ],
}

const chargeData = {
  title: '項目收費詳情',
  tables: [
    {
      a: '服務',
      b: '價格',
    },
    {
      a: '超聲波洗牙',
      b: '¥88',
      c: '原價 ¥180',
    },
    {
      a: '菌斑導向專業洗牙（含鹽）',
      b: '¥168',
      c: '原價 ¥350',
    },
    {
      a: '菌斑導向專業洗牙（無鹽）',
      b: '¥550',
      c: '',
    },
  ],
}
const careData = {
  title: '洗牙後注意事項',
  lists: [
    {
      img: 'https://static.cmereye.com/imgs/2023/10/9ee1140fe832c40d.png',
      text: `避免過度<br class="pc" />清潔口腔`,
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/29723aa73549d385.png',
      text: '注意清潔牙縫',
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/fa97affc4ee443a6.png',
      text: `避免吃冰冷、<br  class="pc"  />酸、甜的食物`,
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/b00b6fbbd953800a.png',
      text: `避免喝酒和<br  class="pc"  />吸煙`,
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/b681fad6412d727b.png',
      text: `使用防敏感<br class="pc" />牙膏`,
    },
    {
      img: 'https://static.cmereye.com/imgs/2023/10/678fdab4c186e0d6.png',
      text: `定期覆診檢查`,
    },
  ],
}
const stepData = {
  title: '洗牙6步曲',
  lists: [
    {
      title: '第1步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/e0feaceff214278b.png',
      img: 'https://static.cmereye.com/imgs/2024/02/6731dba434edd53f.jpg',
      name: '口腔檢查',
      context: '洗牙前，醫師會對全口的口腔狀況進行檢查',
    },
    {
      title: '第2步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/120738fb56a5d759.png',
      img: 'https://static.cmereye.com/imgs/2024/02/c8aa8929874fd251.jpg',
      name: '消毒',
      context:
        '使用漱口水漱口，此過程能夠降低唾液中細菌的含量，從而減少細菌感染',
    },
    {
      title: '第3步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/59c210a9e06a8624.png',
      img: 'https://static.cmereye.com/imgs/2024/02/ea678899b066c7cb.jpg',
      name: '牙石去除',
      context: '以手工或超音波的方式進行去除牙結石',
    },
    {
      title: '第4步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/dabb11b53d7c5e07.png',
      img: 'https://static.cmereye.com/imgs/2024/02/e134fd577d7f9467.jpg',
      name: '噴砂',
      context: '透過特製的鹽加上高壓水為牙齒做進一步的清洗',
    },
    {
      title: '第5步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/9b5323760b492f54.png',
      img: 'https://static.cmereye.com/imgs/2024/02/58ba4fa2a7ff9ffa.jpg',
      name: '拋光',
      context:
        '透過拋光可以使牙齒光亮，牙面更光滑，從而減輕牙菌斑及色素的附著和牙石的生成',
    },
    {
      title: '第6步',
      imgNum: 'https://static.cmereye.com/imgs/2024/07/90802da91d96398f.png',
      img: 'https://static.cmereye.com/imgs/2024/02/c881f0c09986279f.jpg',
      name: '牙周保護',
      context: '洗牙完成後，我們為牙齒周邊塗抹藥物進行牙肉保護',
    },
  ],
}
const doctorData = {
  title: '專業醫療團隊',
  lists: [
    {
      id: '101',
      name: '曾紅艷',
      job: '主任醫生',
      addressType: '101',
      addressname: '羅湖區',
      text: '牙潔治技術、各種牙周疾病的專業治療及手術治療（翻瓣術及牙周引導骨組織再造術、齦切除術）以及種植體周圍感染疾病的治療。',
      img: 'https://static.cmereye.com/imgs/2024/02/50b761413772724d.png',
    },
    {
      id: '102',
      name: '李洪偉',
      job: '醫生',
      addressType: '101',
      addressname: '羅湖區',
      text: '牙齒美容修復，各類牙列缺損的固定及活動義齒的修復、鑄造支架式可摘局部義齒、 數字化修復、種植上部義齒修復等。在口腔數字化修復、口腔色度學、口腔仿生材料等領域進行過深入研究，成績顯著。',
      img: 'https://static.cmereye.com/imgs/2024/02/2f77790cc4d81a82.png',
    },
    {
      id: '103',
      name: '周小明',
      job: '院長',
      addressType: '102',
      addressname: '福田區',
      text: '各類口腔疾病診斷與治療、熟練開展微創種植、即拔即種即刻修復等前沿技術，在各類口腔複雜案例多學科聯合診療方面有獨到的診療思路及技術經驗，積累案例數千例。',
      img: 'https://static.cmereye.com/imgs/2024/02/e88238abad82c427.png',
    },
    {
      id: '104',
      name: '曹小蘭',
      job: '醫生',
      addressType: '102',
      addressname: '福田區',
      text: '牙周病系統性治療、輕中重度四環素牙、牙體牙髓病治療、牙體缺損修復、根管治療及其他各種疑難著色牙的美白治療。',
      img: 'https://static.cmereye.com/imgs/2024/02/fdb9c21dfd4b91d4.png',
    },
    {
      id: '105',
      name: '趙董博',
      job: '醫生',
      addressType: '103',
      addressname: '南山區',
      text: '牙周病的診斷及序列治療，前後牙的美學樹脂充填，牙體牙髓疾病及根尖週疾病的診治，前牙貼面及後牙嵌體、全冠的修復，口腔常見多發疾病的預防及保健。',
      img: 'https://static.cmereye.com/imgs/2024/02/45665cefc05c177a.png',
    },
    {
      id: '106',
      name: '朱艷秀',
      job: '醫生',
      addressType: '104',
      addressname: '寶安區',
      text: '各類牙周、牙髓疾病的診斷治療，牙體缺損的修復、各類牙齒的外科拔除。',
      img: 'https://static.cmereye.com/imgs/2024/02/1551fb960998a5a8.png',
    },
    {
      id: '107',
      name: '韋秋紅',
      job: '院長',
      addressType: '105',
      addressname: '龍華區',
      text: '複雜修復設計及齲病、牙體牙髓和牙周病的治療，尤其在美學修復有較深的造詣，熟練運用MICD微創牙科及DSD數字微笑設計理念。',
      img: 'https://static.cmereye.com/imgs/2024/02/07f09b9fd1ccf36f.png',
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

let Plant_brand_series_cur = ref(0)
const plant_brand_series_ref = ref({
  slideToLoop: (a) => {},
  slidePrev: () => {},
  slideNext: () => {},
})
const set_plant_brand_series_ref = (swiper: any) => {
  plant_brand_series_ref.value = swiper
}
const on_plant_brand_series_change = (swiper: any) => {
  // plant_brand_series_ref.value.slideToLoop(swiper.realIndex)
  Plant_brand_series_cur.value = swiper.realIndex
}
const handle_lant_brand_series_tab = (_idx: number) => {
  plant_brand_series_ref.value.slideToLoop(_idx)
}

const brand_btn = (_type: string) => {
  plant_brand_series_ref.value[_type]()
}
const Plant_brand_series_data = [
  {
    id: '1101',
    name: ['基礎專業', '洗牙'],
    // price: '88',
    price: '68', // 圣诞价格
    oldPrice: '180',
    img: 'https://static.cmereye.com/imgs/2024/11/01fd99a1cf216221.png',
    compare: [
      'https://static.cmereye.com/static/ckj/imgs/svg/pc3star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc2star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc3star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc5star.svg',
    ],
    lists: [
      '· 超聲波清除牙結石',
      '· 有效預防牙周炎、細菌引起的牙齒疾病',
      '· 有拋光處理',
    ],
  },
  {
    id: '1102',
    name: ['菌斑導向專業洗牙', '(含鹽)'],
    // price: '168',
    price: '128', // 圣诞价格
    oldPrice: '350',
    img: 'https://static.cmereye.com/imgs/2024/11/7d36488bc41e7ad6.png',
    compare: [
      'https://static.cmereye.com/static/ckj/imgs/svg/pc4star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc4star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc4star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc5star.svg',
    ],
    lists: [
      '· 噴砂能深入清潔細小牙縫',
      '· 菌斑導向能及早找出潛在隱患',
      '· 減少一般超聲波洗牙引致的痛楚不適',
      '· 有效清除牙齒上煙、茶、咖啡漬',
    ],
  },
  {
    id: '1103',
    name: ['菌斑導向專業洗牙', '(無鹽)'],
    price: '550',
    oldPrice: '',
    img: 'https://static.cmereye.com/imgs/2024/11/958f0c3e3acf223f.png',
    compare: [
      'https://static.cmereye.com/static/ckj/imgs/svg/pc5star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc5star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc5star.svg',
      'https://static.cmereye.com/static/ckj/imgs/svg/pc4star.svg',
    ],
    lists: ['· 能減緩牙石積聚速度', '· 略帶薄荷清香，無鹽不帶咸味'],
  },
]

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const removeSurroundingParentheses = (str) => {
  // 直接尝试移除括号，如果没有括号则不会改变原字符串
  return str.replace(/^\((.*)\)$/, '$1')
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
      <div class="tabNav pageCon">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><span>{{ $t('pages.index.title') }}</span></nuxt-link
        >
        <nuxt-link
          :to="'/dental-service'"
          :title="$t('pages.dental-service.title')"
          :alt="'pages.dental-service.title'"
          ><span>{{ $t('pages.dental-service.title') }}</span></nuxt-link
        >
        <span :title="$t(orthodonticsIntroduceData.tabNavName)">{{
          $t(orthodonticsIntroduceData.tabNavName)
        }}</span>
      </div>
      <!-- <ServiceIntroduce :introduce-data="orthodonticsIntroduceData" />
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
        <div class="new-reason-lists">
          <div class="bg_new_reason"></div>
          <div class="item-list">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/11/7dc685808f0eef3b.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/11/bc74f8baed0214c8.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/11/a883fc9ca408b1ec.png"
                alt=""
              />
            </div>
          </div>
        </div> 
      </div> -->
      <!-- <div class="introduceJY">
        <ServiceIntroduceJY :introduceData="introduceJY" />
      </div> -->
      <div class="Plant_brand_series" v-if="windowWidth > 768">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">洗牙技術及類別</div>
        </div>
        <div class="Plant_brand_series-tab" v-if="windowWidth > 768">
          <span
            :class="{ active: Plant_brand_series_cur === tabIndex }"
            v-for="(tabItem, tabIndex) in Plant_brand_series_data"
            :key="tabIndex"
            @click="handle_lant_brand_series_tab(tabIndex)"
          >
            <span
              v-for="(tabspanitem, tabspanindex) in tabItem.name"
              :key="tabspanindex"
            >
              {{ tabspanitem }}
            </span>
          </span>
        </div>
        <Swiper
          :loop="true"
          :modules="[Autoplay]"
          :autoplay="{
            delay: 3000,
          }"
          @swiper="set_plant_brand_series_ref"
          @slideChange="on_plant_brand_series_change"
        >
          <Swiper-slide
            v-for="(
              plant_brand_series_item, plant_brand_series_index
            ) in Plant_brand_series_data"
            :key="plant_brand_series_index"
          >
            <div class="Plant_brand_series-content">
              <div>
                <div>
                  <span>{{ plant_brand_series_item.name[0] }}</span>
                  <span>{{
                    removeSurroundingParentheses(
                      plant_brand_series_item.name[1]
                    )
                  }}</span>
                </div>
                <div>
                  <span v-if="plant_brand_series_item.oldPrice"
                    >原價￥{{ plant_brand_series_item.oldPrice }}</span
                  >
                  <span v-else></span>
                  <span
                    ><i>￥</i>{{ plant_brand_series_item.price
                    }}<i class="icon-emoji">🎅</i></span
                  >
                </div>
              </div>
              <div>
                <div class="Plant_brand_series-content-r">
                  <div class="item_compare">
                    <div>
                      <div>潔淨度</div>
                      <div>
                        <img :src="plant_brand_series_item.compare[0]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>美白度</div>
                      <div>
                        <img :src="plant_brand_series_item.compare[1]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>舒適度</div>
                      <div>
                        <img :src="plant_brand_series_item.compare[2]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>性價比</div>
                      <div>
                        <img :src="plant_brand_series_item.compare[3]" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Plant_brand_series-content-l">
                  <img :src="plant_brand_series_item.img" alt="" />
                </div>
              </div>
              <div>
                <span
                  v-for="(item, index) in plant_brand_series_item.lists"
                  :key="index"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </Swiper-slide>
        </Swiper>
        <div class="brand_btn">
          <div class="brand_btn_left" @click="brand_btn('slidePrev')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="107"
              viewBox="0 0 107 107"
              fill="none"
            >
              <g filter="url(#filter0_d_1167_2367)">
                <circle cx="51.5" cy="51.5" r="49.5" fill="white" />
              </g>
              <path
                d="M59.0859 69.3037L38.999 51.4994L59.0859 33.695"
                stroke="#FC1682"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_1167_2367"
                  x="0"
                  y="0"
                  width="107"
                  height="107"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1167_2367"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1167_2367"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="brand_btn_right" @click="brand_btn('slideNext')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="107"
              viewBox="0 0 107 107"
              fill="none"
            >
              <g filter="url(#filter0_d_1166_2259)">
                <circle cx="51.5" cy="51.5" r="49.5" fill="white" />
              </g>
              <path
                d="M43 31L65.6154 51.4878L43 73"
                stroke="#FC1682"
                stroke-width="9.69231"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_1166_2259"
                  x="0"
                  y="0"
                  width="107"
                  height="107"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.988235 0 0 0 0 0.0862745 0 0 0 0 0.509804 0 0 0 0.24 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1166_2259"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1166_2259"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div class="bottom_info">
          <div>
            <span>把握限時優惠</span>
            <span>現在就來預約我們的洗牙服務吧！</span>
          </div>
          <div class="charge-btn">
            <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" />
          </div>
        </div>
      </div>
      <div class="brand_mobile" v-if="windowWidth < 768">
        <div class="dentistryServices-title">
          <div class="dentistryServices-title-in bb">洗牙技術及類別</div>
        </div>
        <div class="brand_mobile_items">
          <div class="mobile_item_lien">
            <div
              v-for="(item_mobile, index) in Plant_brand_series_data"
              :key="index"
            >
              <div>
                <div>
                  <span>{{ item_mobile.name[0] }}</span>
                  <span>{{
                    removeSurroundingParentheses(item_mobile.name[1])
                  }}</span>
                </div>
                <div>
                  <span v-if="item_mobile.oldPrice"
                    >原價￥{{ item_mobile.oldPrice }}</span
                  >
                  <span v-else></span>
                  <span><i>￥</i>{{ item_mobile.price }}<i>🎅</i></span>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>潔淨度</div>
                      <div>
                        <img :src="item_mobile.compare[0]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>美白度</div>
                      <div>
                        <img :src="item_mobile.compare[1]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>舒適度</div>
                      <div>
                        <img :src="item_mobile.compare[2]" alt="" />
                      </div>
                    </div>
                    <div>
                      <div>性價比</div>
                      <div>
                        <img :src="item_mobile.compare[3]" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img :src="item_mobile.img" alt="" />
                </div>
              </div>
              <div>
                <span v-for="(item, index) in item_mobile.lists" :key="index">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_info">
          <div>
            <span>把握限時優惠</span>
            <span>現在就來預約我們的洗牙服務吧！</span>
          </div>
          <div class="charge-btn">
            <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" />
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
          <div class="step-lists" v-if="windowWidth > 767">
            <div
              v-for="(stepItem, stepIndex) in stepData.lists"
              :key="stepIndex"
              class="step-lists-in"
            >
              <div class="step-lists-in-l">
                <div class="title">
                  <div>
                    <img
                      src="https://static.cmereye.com/imgs/2024/11/3b0a5e9326c68638.png"
                      alt=""
                    />
                  </div>
                  <div>0{{ stepIndex + 1 }}</div>
                </div>
                <div class="image"><img :src="stepItem.img" alt="" /></div>
                <div class="name">{{ stepItem.name }}</div>
                <div class="context">{{ stepItem.context }}</div>
              </div>
              <div class="step-lists-in-r">
                <img
                  src="https://static.cmereye.com/imgs/2024/11/5e6a778026dfcb28.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="mobile-new-step" v-else>
            <div
              v-for="(stepItem, stepIndex) in stepData.lists"
              :key="stepIndex"
            >
              <div>
                <img :src="stepItem.img" alt="" />
                <span>{{ stepItem.name }}</span
                ><br />
                <span>{{ stepItem.context }}</span>
              </div>
              <div><img :src="stepItem.imgNum" alt="" /></div>
            </div>
          </div>
          <div class="step-bg step-mobile-bg-one" v-if="windowWidth < 767">
            <img
              src="https://static.cmereye.com/imgs/2024/07/0f9506f5f2e7252f.png"
              alt=""
            />
          </div>
          <div class="step-bg step-mobile-bg-two" v-if="windowWidth < 767">
            <img
              src="https://static.cmereye.com/imgs/2024/07/6d29b5a6949eb591.png"
              alt=""
            />
          </div>
          <div class="step-bg step-mobile-bg-three" v-if="windowWidth < 767">
            <img
              src="https://static.cmereye.com/imgs/2024/07/2c52c0d9059dac7d.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="charge" style="display: none !important">
        <div class="dentistryServices-title charge-title">
          <div class="dentistryServices-title-in bb charge-title-in">
            {{ chargeData.title }}
          </div>
        </div>
        <div class="charge-tables">
          <div class="charge-tables-in">
            <div
              v-for="(chargeItem, chargeIndex) in chargeData.tables"
              :key="chargeIndex"
              class="charge-tables-item"
            >
              <div class="item-in">{{ chargeItem.a }}</div>
              <div class="item-in">
                <span>{{ chargeItem.b }}</span>
                <span>{{ chargeItem.c }}</span>
              </div>
            </div>
          </div>
          <!-- <div class="charge-rightBox">
            <div class="a">二人同行優惠</div>
            <div class="b">¥<span>320</span>/2次</div>
            <div class="c">原價¥700/2次</div>
          </div> -->
        </div>
        <div class="charge-text">
          <span>把握限時優惠</span>
          <span>，</span>
          <span>現在就來預約我們的洗牙服務吧！</span>
        </div>
        <div class="charge-btn">
          <!-- <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" /> -->
          <PageAnimBtnTypeTwo :str="'預約檢查及諮詢'" />
        </div>
      </div>
      <div class="Medical_sterilization_equipment">
        <div class="dentistryServices-title plague-title">
          <div class="dentistryServices-title-in bb plague-title-in">
            醫療滅菌設備
          </div>
        </div>
        <div
          class="Medical_sterilization_equipment-in pageCon"
          v-if="windowWidth > 767"
        >
          <div class="Medical_sterilization_equipment-in-box">
            <img
              src="https://static.cmereye.com/imgs/2024/02/30f4f16be7ec0112.jpg"
              alt=""
            />
            <div>
              <span
                >瑞士EMS超音波科技採用光學數位掃描，高頻聲納定位，作用於清潔牙結石，預防牙周病和蛀牙。</span
              >
            </div>
          </div>
          <div class="Medical_sterilization_equipment-in-box">
            <div>
              <span
                >以「一醫一診室」、「一機一用一消毒」的無菌治療模式，避免交叉感染機會。</span
              >
            </div>
            <img
              src="https://static.cmereye.com/imgs/2024/02/166a2c06cc4acf88.jpg"
              alt=""
            />
          </div>
        </div>
        <div v-else style="margin: 20px 30px">
          <Swiper
            :loop="true"
            :modules="[Autoplay]"
            :autoplay="{
              delay: 0,
            }"
            :spaceBetween="20"
            :speed="6000"
            :slidesPerView="1"
          >
            <SwiperSlide class="equipment-item">
              <div class="equipment-img">
                <img
                  src="https://static.cmereye.com/imgs/2024/07/975a459555d529a8.png"
                  alt="瑞士EMS超音波科技採用光學數位掃描"
                />
              </div>
              <div class="equipment-bg equipment-one">
                瑞士EMS超音波科技採用光學數位掃描，高頻聲納定位，作用於清潔牙結石，預防牙周病和蛀牙。
              </div>
            </SwiperSlide>
            <SwiperSlide class="equipment-item">
              <div class="equipment-img">
                <img
                  src="https://static.cmereye.com/imgs/2024/07/83c4a9219458e923.png"
                  alt="無菌治療模式"
                />
              </div>
              <div class="equipment-bg equipment-two">
                以「一醫一診室」、「一機一用一消毒」的無菌治療模式，避免交叉感染機會。
              </div>
            </SwiperSlide>
            <SwiperSlide class="equipment-item">
              <div class="equipment-img">
                <img
                  src="https://static.cmereye.com/imgs/2024/07/975a459555d529a8.png"
                  alt="瑞士EMS超音波科技採用光學數位掃描"
                />
              </div>
              <div class="equipment-bg equipment-one">
                瑞士EMS超音波科技採用光學數位掃描，高頻聲納定位，作用於清潔牙結石，預防牙周病和蛀牙。
              </div>
            </SwiperSlide>
            <SwiperSlide class="equipment-item">
              <div class="equipment-img">
                <img
                  src="https://static.cmereye.com/imgs/2024/07/83c4a9219458e923.png"
                  alt="無菌治療模式"
                />
              </div>
              <div class="equipment-bg equipment-two">
                以「一醫一診室」、「一機一用一消毒」的無菌治療模式，避免交叉感染機會。
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="doctorTeam" ref="doctorTeam">
        <ServiceSpecializedTeam :doctorData="doctorData" />
      </div>
      <div class="care">
        <div class="dentistryServices-title care-title">
          <div class="dentistryServices-title-in bb care-title-in">
            {{ careData.title }}
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
              <div class="text" v-html="careItem.text"></div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProblem :problem-data="problemData" />
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
@font-face {
  font-family: 'Noto Color Emoji';
  src: url(https://statichk.cmermedical.com/ckj/font/NotoColorEmoji.woff2)
    format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
.icon-emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    'Noto Color Emoji';
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
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 20px;
  a {
    &:not(:last-child)::after {
      content: '';
      width: 20px;
      height: 2px;
      margin: 0 10px;
      background: #cbcbcb;
      display: inline-block;
      vertical-align: middle;
      margin-top: -4px;
    }
  }
  & > span {
    cursor: pointer;
    color: var(--indexColor1);
  }
}
.introduceJY {
  margin-top: 140px;
}
.reason {
  margin-top: 20px;
  &-lists {
    width: 100%;
    max-width: 1656px;
    display: flex;
    margin: 116px auto 0;
    &-item {
      padding: 0 45px;
      .image {
        position: relative;
        img {
          width: 100%;
        }
        div {
          position: absolute;
          top: -29px;
          left: -13px;
          width: 110px;
          height: 113px;
          color: #fff;
          text-align: center;
          font-size: 50px;
          font-style: normal;
          font-weight: 900;
          background: url(https://static.cmereye.com/imgs/2023/10/d9a06b8771bc917a.png)
            no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .text {
        color: #fc1682;
        font-size: 35px;
        font-style: normal;
        font-weight: 900;
        line-height: 160%;
        text-align: center;
        margin-top: 35px;
      }
    }
  }
}
.new-reason-lists {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 55px auto 0;
  .bg_new_reason {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 725.458px;
    height: 725.458px;
    flex-shrink: 0;
    border-radius: var(--Count, 725.458px);
    border: var(--Count, 138px) solid var(--Theme-Color, #fc1682);
    opacity: 0.3;
  }
  .item-list {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    z-index: 10;
    gap: 0 180px;
    position: relative;
    width: fit-content;
    & > div:nth-child(1) {
      grid-column: 1 / 3;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
    }
  }
}
.Plant_brand_series {
  margin-top: 80px;
  position: relative;
  & > div {
    align-items: center;
  }
  :deep(.swiper) {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      #fff5f4 12%,
      #fff5f4 78%,
      transparent 100%
    );
    .swiper-slide:nth-child(2),
    .swiper-slide:nth-child(3) {
      .Plant_brand_series-content {
        & > div:nth-child(1) {
          & > div:nth-child(1) {
            position: relative;
            & > span:nth-child(2) {
              background: #00aeff !important;
              position: absolute;
              width: 80px;
              height: 80px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              border: 5px solid #b9d9fc;
              color: var(--White, #fff);
              text-align: center;
              font-family: var(--indexFontFamily);
              font-size: 28px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.8px */
              letter-spacing: 2.8px;
              right: -10%;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .swiper-slide:nth-child(3) {
      .Plant_brand_series-content {
        & > div:nth-child(1) {
          & > div:nth-child(1) {
            position: relative;
            & > span:nth-child(2) {
              background: #f90 !important;
              position: absolute;
              width: 80px;
              height: 80px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              border: 5px solid #ffcd81;
              color: var(--White, #fff);
              text-align: center;
              font-family: var(--indexFontFamily);
              font-size: 28px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 44.8px */
              letter-spacing: 2.8px;
              right: -10%;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
  }
  &-tab {
    width: 100%;
    max-width: 864px;
    margin: 30px auto;
    display: flex;
    & > span {
      flex: 1;
      color: var(--indexColor1);
      font-size: 22px;
      border-top: 2px solid var(--indexColor1);
      border-bottom: 2px solid var(--indexColor1);
      border-left: 2px solid var(--indexColor1);
      padding: 7px 20px;
      width: fit-content;
      white-space: nowrap;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
      &:first-child {
        border-radius: 5px 0 0 5px;
      }
      &:last-child {
        border-radius: 0 5px 5px 0;
        border-right: 2px solid var(--indexColor1);
      }
      &:hover,
      &.active {
        background: var(--indexColor1);
        color: #fff;
      }
    }
  }
  .brand_btn {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    z-index: 10;
    justify-content: space-around;
    .brand_btn_left {
      position: absolute;
      left: calc((100% - 562px - 495px) / 2);
      top: 25%;
      cursor: pointer;
      z-index: 2;
    }
    .brand_btn_right {
      position: absolute;
      right: calc((100% - 562px - 495px) / 2);
      top: 25%;
      cursor: pointer;
      z-index: 2;
    }
  }
  .bottom_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: FakePearl;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 48px */
      letter-spacing: 3px;
    }
  }
  &-content {
    width: 100%;
    max-width: 625px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px 0;
    & > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div:nth-child(1) {
        border-radius: 40px;
        background: var(--Theme-Color, #fc1682);
        color: var(--White, #fff);
        font-family: FakePearl;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 44.8px */
        box-sizing: border-box;
        padding: 5px 60px;
      }
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        & > span:nth-child(1) {
          position: relative;
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          font-family: var(--indexFontFamily);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 32px */
        }
        & > span:nth-child(1)::before {
          content: '';
          position: absolute;
          width: 100%;
          display: inline-block;
          height: 0.7px;
          background: #4d4d4d;
          transform: rotate(-7deg) translateY(-50%);
          top: 50%;
        }
        & > span:nth-child(2) {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 36px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          margin-left: 18px;
          & > i {
            color: var(--Theme-Color, #fc1682);
            font-family: var(--indexFontFamily);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 44.8px */
            position: relative;
            bottom: 2px;
          }
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 0 65px;
      // flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: var(--indexFontFamily);
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      .item_compare {
        margin-top: 14px;
        & > div {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 0 12px;
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 41.6px */
          letter-spacing: 2.6px;
        }
      }
    }
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: var(--indexFontFamily);
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      margin: 10px 0;
    }
  }
}
.charge {
  margin-top: 206px;
  &-tables {
    width: 100%;
    max-width: 1491px;
    margin: 54px auto 0;
    position: relative;
    &-in {
      width: auto;
      max-width: 1091px;
      margin: 0 200px;
      border-radius: 60px;
      overflow: hidden;
    }
    &-item {
      display: flex;
      width: 100%;
      height: 130px;
      margin-bottom: 8px;
      .item-in {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: var(--indexColor2);
        color: #4d4d4d;
        font-size: 24px;
        font-weight: 600;
        span {
          font-size: 37px;
          font-weight: 700;
          color: var(--indexColor);
          &:nth-of-type(2) {
            color: #4c4c4c;
            font-size: 16px;
            position: relative;
            &::before {
              content: '';
              width: 100%;
              height: 1px;
              background: #4c4c4c;
              position: absolute;
              top: 55%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(5deg);
            }
          }
        }
        &:nth-of-type(1) {
          flex: 2;
        }
        &:not(:last-child) {
          margin-right: 8px;
        }
      }
      &:nth-of-type(1) {
        height: 70px;
        margin-bottom: 0;
        .item-in {
          color: #fff;
          font-size: 28px;
          font-weight: 700;
          background: var(--indexColor);
          span {
            color: #fff;
          }
        }
      }
      &:nth-of-type(3) {
        .item-in {
          background: #fdd3e3;
          font-size: 28px;
          font-weight: 900;
          span {
            font-size: 37px;
            line-height: 1.2;
            &:nth-of-type(2) {
              color: #4c4c4c;
              font-size: 16px;
              position: relative;
              &::before {
                content: '';
                width: 100%;
                height: 1px;
                background: #4c4c4c;
                position: absolute;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(5deg);
              }
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &-text {
    color: var(--indexColor1);
    font-size: 35px;
    font-weight: 700;
    line-height: 160%;
    text-align: center;
    margin: 54px auto 34px;
  }
  &-btn {
    margin-top: 35px;
    display: flex;
    justify-content: center;
  }
}
.doctorTeam {
  margin-top: 140px;
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
  margin-top: 140px;
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
      position: relative;
      z-index: 5;
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-bottom: 0;
      }
      &:nth-of-type(3),
      &:nth-of-type(6) {
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
        position: relative;
        .title {
          z-index: 5;
          position: absolute;
          left: -8px;
          top: -8px;
          & > div:nth-child(1) {
            position: relative;
            width: 66px;
            height: 66px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          & > div:nth-child(2) {
            color: var(--White, #fff);
            text-align: center;
            font-family: var(--indexFontFamily);
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 56px */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
            right: -52.5%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: url(https://static.cmereye.com/imgs/2024/11/5e6a778026dfcb28.png);
            background-size: 100% 100%;
            width: 148px;
            height: 50px;
            z-index: -1;
          }
        }
        .name {
          color: var(--Theme-Color, #fc1682);
          font-family: var(--indexFontFamily);
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 44.8px */
          margin-top: 16px;
          margin-bottom: 8px;
          padding: 0;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          background: transparent;
        }
        .context {
          font-size: 20px;
          font-weight: 700;
          color: #4d4d4d;
          padding: 0;
          color: var(--Grey-Deep, #4d4d4d);
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 32px */
          letter-spacing: 4px;
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
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        .lastBox-t {
          // display: flex;
          // align-items: flex-end;
          & > div {
            color: var(--indexColor1);
            font-size: 55px;
            font-weight: 700;
            text-align: center;
            span {
              font-size: 85px;
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
    }
  }
}
.care {
  margin-top: 30px;
  padding-bottom: 108px;
  &-lists {
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 89px;
    width: 100%;
    max-width: 819px;
    margin: 54px auto 0;
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          width: 100%;
          position: relative;
          // padding: 0 calc((89px / 273px) * 100% / 2);
          padding: 0;
          max-width: 184px;
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
              max-width: 70%;
              max-height: 70%;
            }
          }
        }
        .text {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          font-family: var(--indexFontFamily);
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 35.2px */
          :deep(.pc) {
            display: none;
          }
        }
      }
      &:nth-of-type(n + 4) {
        margin-top: 0;
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
}

.Medical_sterilization_equipment {
  // background: ;
  // background: linear-gradient(
  //   90deg,
  //   rgba(255, 241, 240, 0) 0%,
  //   rgba(255, 241, 240, 0.7) 12.5%,
  //   rgba(255, 241, 240, 0.7) 81.99%,
  //   rgba(255, 241, 240, 0) 100%
  // );
  margin-top: 0;
  padding: 50px 0 10px;
  &-in {
    margin-top: 60px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    &-box {
      width: 100%;
      max-width: 1205px;
      display: flex;
      margin-bottom: 40px;
      img {
        width: calc(696 / 1205 * 100%);
        border-radius: 20px;
      }
      & > div {
        font-size: 28px;
        line-height: 160%;
        color: #fff;
        margin-top: calc(50 / 1205 * 100%);
        display: inline-block;
        height: max-content;
        text-align: justify;
        border-radius: 20px;
        position: relative;
        span {
          position: relative;
          z-index: 1;
        }
        &::after {
          content: '';
          position: absolute;
          display: block;
          top: 0;
          width: calc(100% + 30px);
          height: 100%;
          z-index: 0;
          border-radius: 20px;
        }
      }
      &:nth-of-type(1) {
        & > div {
          padding: 30px 30px 30px 0;
          &::after {
            background: var(--indexColor1);
            left: -30px;
          }
        }
      }
      &:nth-of-type(2) {
        & > div {
          padding: 30px 0 30px 30px;
          &::after {
            background: #00aeff;
            right: -30px;
          }
        }
      }
    }
  }
}
:deep(.problem) {
  margin-top: 0;
}
// @media (min-width: 768px) and (max-width: 1300px) {
//   .step {
//     &-lists {
//       &-in{
//         &:nth-of-type(6) {
//           .lastBox-t {
//             &>div{
//               font-size: 35px;
//               span{
//                 font-size: 60px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
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
//   .charge {
//     &-tables {
//       &-in {
//         margin: 0 150px;
//       }
//     }
//   }
//   .step {
//     &-lists {
//       &-in{
//         width: calc(100% / 2);
//       }
//     }
//   }
// }
// @media (min-width: 768px) and (max-width: 1100px) {
//   .step {
//     &-lists {
//       &-in{
//         // padding: 0 calc((61 / ( 1444 + 122 )) * 100%);
//         &-l {
//           .image{
//             &::after{
//               right: -10%;
//             }
//           }
//         }
//       }
//     }
//   }
// }
@media (min-width: 768px) and (max-width: 1920px) {
  .introduceJY {
    margin-top: 7.2917vw;
  }
  .reason {
    margin-top: 9.7917vw;
    &-lists {
      max-width: 86.25vw;
      margin: 6.0417vw auto 0;
      &-item {
        padding: 0 2.3438vw;
        .image {
          div {
            top: -1.5104vw;
            left: -0.6771vw;
            width: 5.7292vw;
            height: 5.8854vw;
            font-size: 2.6042vw;
          }
        }
        .text {
          font-size: 1.8229vw;
          margin-top: 1.8229vw;
        }
      }
    }
  }
  .step {
    padding: 3.1771vw 0 5.1563vw;
    margin-top: 7.2917vw;
    &-in {
      max-width: calc(75.2083vw + 6.3542vw);
    }
    &-lists {
      margin-top: 5.1042vw;
      padding: 0 1.0417vw;
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
            &::after {
              content: '';
              position: absolute;
              left: 115%;
              top: 50%;
              transform: translate(-50%);
              background: url(https://static.cmereye.com/imgs/2024/11/5e6a778026dfcb28.png);
              background-size: 100% 100%;
              width: 148px;
              height: 50px;
              z-index: -1;
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
          img {
            width: 0.7813vw;
          }
        }
        &:nth-of-type(6) {
          .lastBox-t {
            & > div {
              font-size: 2.8646vw;
              span {
                font-size: 4.4271vw;
              }
              &:nth-of-type(1) {
                margin-bottom: 0.7813vw;
              }
            }
          }
          .lastBox-b {
            margin-top: 1.0417vw;
            .bigBan {
              font-size: 2.2917vw;
            }
          }
        }
      }
    }
  }
  .charge {
    margin-top: 10.7292vw;
    &-tables {
      max-width: 77.6563vw;
      margin: 2.8125vw auto 0;
      &-in {
        max-width: 56.8229vw;
        margin: 0 10.4167vw;
        border-radius: 3.125vw;
      }
      &-item {
        height: 6.7708vw;
        margin-bottom: 0.4167vw;
        .item-in {
          font-size: 1.25vw;
          span {
            font-size: 1.9271vw;
            &:nth-of-type(2) {
              font-size: 0.8333vw;
            }
          }
          &:not(:last-child) {
            margin-right: 0.4167vw;
          }
        }
        &:nth-of-type(1) {
          height: 3.6458vw;
          .item-in {
            font-size: 1.9271vw;
          }
        }
        &:nth-of-type(3) {
          .item-in {
            font-size: 1.4583vw;
            span {
              font-size: 1.9271vw;
              &:nth-of-type(2) {
                font-size: 0.8333vw;
              }
            }
          }
        }
      }
    }
    &-text {
      font-size: 1.8229vw;
      margin: 2.8125vw auto 1.7708vw;
    }
    &-btn {
      margin-top: 1.8229vw;
    }
  }
  .Medical_sterilization_equipment {
    margin-top: 7.2917vw;
    padding: 2.6042vw 0 0.5208vw;
    &-in {
      margin-top: 3.125vw;
      &-box {
        max-width: 62.7604vw;
        margin-bottom: 2.0833vw;
        img {
          border-radius: 1.0417vw;
        }
        & > div {
          font-size: 1.4583vw;
          border-radius: 1.0417vw;
          &::after {
            width: calc(100% + 1.5625vw);
            border-radius: 1.0417vw;
          }
        }
        &:nth-of-type(1) {
          & > div {
            padding: 1.5625vw 1.5625vw 1.5625vw 0;
            &::after {
              left: -1.5625vw;
            }
          }
        }
        &:nth-of-type(2) {
          & > div {
            padding: 1.5625vw 0 1.5625vw 1.5625vw;
            &::after {
              right: -1.5625vw;
            }
          }
        }
      }
    }
  }
  .doctorTeam {
    margin-top: 7.2917vw;
  }
  .care {
    margin-top: 10.7292vw;
    padding-bottom: 5.625vw;
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
          margin-top: 3.125vw;
        }
      }
    }
  }
  .Plant_brand_series {
    margin-top: 80px;
    position: relative;
    & > div {
      align-items: center;
    }
    &-tab {
      width: 100%;
      max-width: 864px;
      margin: 30px auto;
      display: flex;
      & > span {
        flex: 1;
        color: var(--indexColor1);
        font-size: 22px;
        border-top: 2px solid var(--indexColor1);
        border-bottom: 2px solid var(--indexColor1);
        border-left: 2px solid var(--indexColor1);
        padding: 7px 0;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
          border-right: 2px solid var(--indexColor1);
        }
        &:hover,
        &.active {
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
    .brand_btn {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      display: flex;
      z-index: 10;
      justify-content: space-around;
      .brand_btn_left {
        position: absolute;
        left: calc((100% - 562px - 495px) / 2);
        top: 25%;
        cursor: pointer;
        z-index: 2;
      }
      .brand_btn_right {
        position: absolute;
        right: calc((100% - 562px - 495px) / 2);
        top: 25%;
        cursor: pointer;
        z-index: 2;
      }
    }
    &-content {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      display: flex;
      &-l {
        width: calc(300 / 700 * 100%);
        margin-right: calc(30 / 695 * 100%);
        img {
          width: 100%;
        }
      }
      &-r {
        flex: 1;
        & > div {
          & > img {
            max-width: 100%;
          }
          &:nth-of-type(2) {
            width: 70%;
            color: #fff;
            background: var(--indexColor1);
            font-size: 30px;
            line-height: 160%;
            padding-left: 17px;
            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
            margin: 10px 0;
          }
          &:nth-of-type(3) {
            display: flex;
            flex-direction: column;
            span {
              font-size: 26px;
              line-height: 1.6;
              &::before {
                content: '·';
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  :deep(.problem) {
    margin-top: 45px;
  }
  :deep(.header-content) {
    .explain_box_mobile {
      margin-right: auto;
      margin-left: 0;
      top: 0px;
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
  .reason-lists {
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 0;
  }
  .introduceJY {
    margin-top: 60px;
  }
  .reason {
    margin-top: 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      margin: 72px auto 0;
      &-item {
        padding: 0;
        width: 40%;
        .image {
          div {
            top: -18px;
            left: -8px;
            width: 64px;
            height: 66px;
            background-size: 100% 100%;
            font-size: 34px;
          }
        }
        .text {
          font-size: 20px;
          margin-top: 20px;
        }
        &:not(:last-child) {
          margin-bottom: 53px;
        }
      }
    }
  }
  .new-reason-lists {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 55px auto 0;
    .bg_new_reason {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 231.743px;
      height: 231.743px;
      flex-shrink: 0;
      border-radius: var(--Count, 725.458px);
      border: var(--Count, 38px) solid var(--Theme-Color, #fc1682);
      opacity: 0.3;
    }
    .item-list {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(2, 1fr);
      z-index: 10;
      gap: 0 60px;
      position: relative;
      width: fit-content;
      & > div:nth-child(1) {
        grid-column: 1 / 3;
      }
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        width: 126.608px;
        height: 127.009px;
        & > img {
          width: 100%;
          height: 100%;
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
    margin-top: 60px;
    padding: 46px 0;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      width: auto;
      margin: 57px 40px 0;
      padding: 0;
      &-in {
        flex-direction: column;
        margin-bottom: 30px;
        width: 100%;
        padding: 0;
        &:nth-of-type(n + 5) {
          margin-bottom: 30px;
        }
        &:nth-of-type(6) {
          .step-lists-in-r {
            display: none;
          }
        }
        &-l {
          .title {
            padding: 0 6px;
            font-size: 26px;
          }
          .image {
            padding: 0 6px;
            &::after {
              display: none;
            }
          }
          .name {
            margin-top: -25px;
            font-size: 16px;
            clip-path: polygon(0 0, 80% 0, 85% 100%, 0 100%);
          }
          .context {
            font-size: 16px;
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
          .lastBox-t {
            & > div {
              font-size: 16px;
              span {
                font-size: 24px;
                display: inline-block;
                &::before {
                  content: '，';
                  font-size: 16px;
                  font-family: var(--contextFamily);
                }
              }
              img {
                width: 20px;
                height: 22px;
              }
              &:nth-of-type(1) {
                display: none;
              }
              &:nth-of-type(2) {
                // display: none;
                &::before,
                &::after {
                  content: '';
                  display: inline-block;
                  width: 20px;
                  height: 22px;
                  margin: 0 9px;
                  background: url(@/assets/images/icon_13.png);
                  background-size: 100% 100%;
                }
              }
              // &:nth-of-type(3) {
              //   padding-bottom: 5px;
              //   margin-left: 7px;
              // }
            }
          }
          .lastBox-b {
            margin-top: 30px;
            .bigBan {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
  .charge {
    margin-top: 40px;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-tables {
      margin: 28px auto 0;
      &-in {
        // margin: 0 50px 0 30px;
        margin: 0 30px;
        border-radius: 20px;
      }
      &-item {
        height: 68px;
        margin-bottom: 2px;
        .item-in {
          font-size: 15px;
          span {
            font-size: 20px;
            &:nth-of-type(2) {
              font-size: 9px;
              font-weight: 500;
            }
          }
          &:nth-of-type(1) {
            flex: 1;
          }
          &:not(:last-child) {
            margin-right: 2px;
            padding: 0 20px;
          }
        }
        &:nth-of-type(1) {
          height: 40px;
          margin-bottom: 0;
          .item-in {
            font-size: 20px;
          }
        }
        &:nth-of-type(3) {
          height: 96px;
          .item-in {
            font-size: 16px;
            span {
              font-size: 20px;
              &:nth-of-type(2) {
                font-size: 9px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
    &-text {
      font-size: 16px;
      margin: 14px auto 25px;
      span {
        display: block;
        &:nth-of-type(2) {
          display: none;
        }
      }
    }
    &-btn {
      margin-top: 0;
      // .btn {
      //   margin-top: 0;
      //   span {
      //     font-size: 20px;
      //     padding: 5px 70px;
      //     box-shadow: 0px 3.70444px 7.40887px 0px rgba(252, 22, 130, 0.38);
      //   }
      // }
    }
    // &-rightBox {
    //   width: 84px;
    //   height: 84px;
    //   .a {
    //     font-size: 9.803px;
    //   }
    //   .b {
    //     font-size: 11.168px;
    //     span {
    //       font-size: 15.464px;
    //     }
    //   }
    //   .c {
    //     font-size: 6.033px;
    //   }
    // }
  }
  .doctorTeam {
    margin-top: 60px;
  }
  .care {
    margin-top: 80px;
    padding-bottom: 0px;
    max-width: 100%;
    &-title {
      &-in {
        font-size: 26px;
      }
    }
    &-lists {
      // width: auto;
      // margin: 34px 15px 0;
      gap: 30px 10px;
      box-sizing: border-box;
      padding: 0 30px;
      &-item {
        width: 100%;
        & > div {
          width: 100%;
          .image {
            padding: 0;
          }
          .text {
            // white-space: pre-wrap;
            padding: 0 !important;
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            font-family: var(--indexFontFamily);
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 130%; /* 20.8px */
            :deep(.pc) {
              display: flex;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
  .Medical_sterilization_equipment {
    // padding: 30px 0 10px;
    margin-top: 0px;
    padding-top: 0;
    background: transparent;
    &-in {
      margin-top: 40px;
      &-box {
        flex-direction: column;
        img {
          width: 100%;
          border-radius: 0;
        }
        & > div {
          width: calc(100% - 60px);
          font-size: 16px;
          margin: -20px auto 0;
          &::after {
            width: 100%;
            border-radius: 8px;
          }
        }
        &:nth-of-type(1) {
          & > div {
            padding: 20px;
            &::after {
              left: 0;
            }
          }
        }
        &:nth-of-type(2) {
          img {
            order: 1;
          }
          & > div {
            order: 2;
            padding: 20px;
            &::after {
              right: 0;
            }
          }
        }
      }
    }
  }
  .step-in {
    position: relative;
  }
  .step-bg {
    position: absolute;
    z-index: 2;
  }
  .step-mobile-bg-one {
    top: 88px;
    left: 0;
    right: 0;
    & > img {
      width: 100%;
    }
  }
  .step-mobile-bg-two {
    top: 330px;
    right: 0;
    left: 0;
    & > img {
      width: 100%;
    }
  }
  .step-mobile-bg-three {
    bottom: 31.46vw;
    left: 0;
    right: 0;
    // width: 85%;
    & > img {
      width: 100%;
    }
  }
  .mobile-new-step {
    margin: 25px 27px 47px 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 28px;
    position: relative;
    z-index: 5;
    & > div {
      position: relative;
      & > div:nth-child(1) {
        & > img {
          border-radius: 12px;
          border: 1px solid var(--Theme-Color, #fc1682);
          margin-bottom: 6px;
        }
        & > span:nth-child(2) {
          color: var(--Theme-Color, #fc1682);
          font-family: FakePearl;
          font-size: 4.1vw;
          font-style: normal;
          font-weight: 600;
          line-height: 130%; /* 20.8px */
        }
        & > span:nth-child(4) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: justify;
          font-family: FakePearl;
          font-size: 3.07vw;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 19.2px */
          letter-spacing: 1.2px;
        }
      }
      & > div:last-child {
        position: absolute;
        top: -6px;
        left: -6px;
      }
    }
    & > div:nth-child(even) {
      margin-top: 25px;
    }
  }
  .equipment-img {
    margin: auto;
    & > img {
      width: 100%;
    }
  }
  .equipment-bg {
    border-radius: 5px;
    max-width: 243px;
    margin: 0 auto;
    padding: 11px 15px;
    color: var(--White, #fff);
    text-align: justify;
    font-family: FakePearl;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    letter-spacing: 1.2px;
    box-sizing: border-box;
    position: relative;
    z-index: 5;
    top: -10px;
  }
  .equipment-one {
    background: var(--Theme-Color, #fc1682);
  }
  .equipment-two {
    background: var(--Blue-Deep, #00aeff);
  }
  .Plant_brand_series {
    margin-top: 30px;
    display: none !important;
    &-tab {
      padding: 0 30px;
      & > span {
        font-size: 15px;
        line-height: 160%;
        & > span {
          display: block;
        }
        &:nth-of-type(1) {
          flex: 1;
        }
        &:nth-of-type(2) {
          flex: 1.2;
        }
        &:nth-of-type(3) {
          flex: 1.4;
        }
        &:nth-of-type(4) {
          flex: 1;
        }
        &:nth-of-type(5) {
          flex: 1.2;
        }
        &:hover {
          background: none;
          color: var(--indexColor1);
        }
        &.active {
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
    &-content {
      padding: 0 30px;
      &-r {
        & > div {
          & > img {
            max-width: 80%;
          }
          &:nth-of-type(2) {
            width: 90%;
            font-size: 15px;
            padding: 2px 0 2px 15px;
            margin: 5px 0;
            clip-path: polygon(0 0, 87% 0, 100% 100%, 0 100%);
          }
          &:nth-of-type(3) {
            span {
              font-size: 12px;
              &::before {
                margin-right: 6px;
                font-size: 20px;
                line-height: 100%;
                vertical-align: middle;
                margin-top: -2px;
              }
            }
          }
        }
      }
    }
  }
  .brand_mobile {
    margin: 45px auto 55px;
  }
  .mobile_item_lien {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;
      & > div {
        display: flex;
        justify-content: space-between;
      }
      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        & > div:nth-child(1) {
          border-radius: var(--Count, 0px) 20px 20px var(--Count, 0px);
          background: var(--Theme-Color, #fc1682);
          color: var(--White, #fff);
          text-align: center;
          font-family: var(--indexFontFamily);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%; /* 20.8px */
          box-sizing: border-box;
          padding: 5px 20px 5px 30px;
          position: relative;
        }
        & > div:nth-child(2) {
          position: relative;
          & > span:nth-child(1) {
            position: relative;
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            font-family: var(--indexFontFamily);
            font-size: 9px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 14.4px */
            z-index: 5;
            right: 15px;
            bottom: -5px;
          }
          & > span:nth-child(1)::after {
            content: '';
            position: absolute;
            width: 100%;
            display: inline-block;
            height: 0.7px;
            transform: rotate(-7deg);
            background: #4d4d4d;
            right: 0;
            top: 50%;
          }
          & > span:nth-child(2) {
            margin-left: 10px;
            color: var(--Theme-Color, #fc1682);
            font-family: var(--indexFontFamily);
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            & > i {
              color: var(--Theme-Color, #fc1682);
              font-family: var(--indexFontFamily);
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 32px */
            }
            position: relative;
            right: 20px;
            z-index: 5;
            bottom: -5px;
          }
        }
        & > div:nth-child(2)::after {
          content: '';
          width: 77px;
          height: 10px;
          border-radius: 4px var(--Count, 0px) var(--Count, 0px) 4px;
          background: var(--Skin, #fff1f0);
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      & > div:nth-child(2) {
        box-sizing: border-box;
        padding: 7px 30px 0;
        align-items: center;
        & > div:nth-child(1) {
          & > div {
            display: flex;
            flex-direction: column;
            & > div {
              display: flex;
              color: var(--Theme-Color, #fc1682);
              font-family: var(--indexFontFamily);
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 130%; /* 20.8px */
              & > div:nth-child(2) {
                width: 84px;
                margin-left: 7px;
                & > img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }
            }
          }
        }
        & > div:nth-child(2) {
          width: 130px;
          height: 130px;
          & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
      & > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0 15px;
        & > p {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: var(--indexFontFamily);
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 24px */
          letter-spacing: 1.5px;
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > span:nth-child(2) {
            position: absolute;
            background: var(--Blue-Deep, #00aeff);
            border: 5px solid var(--Blue-Light, #b9d9fc);
            width: 50px;
            height: 50px;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            right: -20%;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > span:nth-child(2) {
            position: absolute;
            background: var(--Orange, #f90);
            border: 5px solid #ffcd81;
            width: 50px;
            height: 50px;
            display: flex;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            right: -20%;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .bottom_info {
    & > div:nth-child(1) {
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: var(--indexFontFamily);
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
}
</style>
