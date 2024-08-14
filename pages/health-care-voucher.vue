<script lang="ts" setup>
import { phoneNum } from '~/assets/js/common'
const locale = useState<string>('locale.setting')
const { width, height } = useWindowSize()
const { x, y } = useWindowScroll()
const router = useRouter()
useHead({
  title: '長者醫療券',
})

let langCur = ref('chinese_traditional')
// const changepcimg = () =>{
//   return `https://static.cmereye.com/imgs/2024/02/4c1e46eab9adb6de_${locale.value}.webp`
// }
const headerConfig = ref({
  img: `https://static.cmereye.com/imgs/2024/07/1ea1941fc1372858.webp`,
  bg: '',
  mbImg: `https://static.cmereye.com/imgs/2024/07/cd882e950625e695.webp`,
  pageName: 'health-care-voucher',
  pcText: [],
  mbText: [],
})
interface plist {
  type: String
  text: String
}

const pageDetail: any = {
  title: '',
  img: '',
  content: [
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_1.text_1',
        },
        {
          type: 'indexColor',
          text: 'health-care-voucher.pageDetail.content_1.list_1.text_2',
        },
      ],
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_2.text',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_3.text',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_4.text',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_5.text',
        },
      ],
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_6.text',
      className: 'nob',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/07/40092437294c9e2b.webp',
        'https://static.cmereye.com/imgs/2024/02/8b093aa825acf2bf.webp',
      ],
      className: 'imgLists nob twoImg',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_7.text',
        },
      ],
    },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_8.text',
      className: 'nob',
    },
    {
      type: 'img',
      list: ['https://static.cmereye.com/imgs/2024/02/b4e5c4e78e6d820e.webp'],
      className: 'imgone nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_9.text',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_9.text1',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_9.text2',
        },
      ],
    },
    // {
    //   type: 'h3',
    //   text: 'health-care-voucher.pageDetail.content_1.list_10.text',
    //   className: 'nob',
    // },
    // {
    //   type: 'ul',
    //   list: [
    //     'health-care-voucher.pageDetail.content_1.list_11.text_1',
    //     'health-care-voucher.pageDetail.content_1.list_11.text_2',
    //     'health-care-voucher.pageDetail.content_1.list_11.text_3',
    //   ],
    //   className: 'nob',
    // },
    // {
    //   type: 'img',
    //   list: [
    //     'https://static.cmereye.com/imgs/2024/02/f3dd07a845186d32.webp',
    //     'https://static.cmereye.com/imgs/2024/02/5f756747940bec34.webp',
    //     'https://static.cmereye.com/imgs/2024/02/2fb9546a9917caae.webp',
    //   ],
    //   className: 'imgListsMB imgLists nob',
    // },
    // {
    //   type: 'p',
    //   list: [
    //     {
    //       type: 'defule',
    //       text: 'health-care-voucher.pageDetail.content_1.list_12.text',
    //     },
    //   ],
    // },
    {
      type: 'h2',
      text: 'health-care-voucher.pageDetail.content_1.list_13.text',
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_14.text',
        },
      ],
      className: 'nob',
    },
    {
      type: 'img',
      list: [
        'https://static.cmereye.com/imgs/2024/07/af47792c9813ef40.webp',
        // 'https://static.cmereye.com/imgs/2024/02/079da74dd10b39ac.webp'
      ],
      className: 'imgLists nob imgStyle',
    },
    // {
    //   type: 'p',
    //   list: [
    //     {
    //       type: 'defule',
    //       text: 'health-care-voucher.pageDetail.content_1.list_15.text',
    //     },
    //   ],
    // },
    // {
    //   type: 'p',
    //   list: [
    //     {
    //       type: 'defule',
    //       text: 'health-care-voucher.pageDetail.content_1.list_16.text_1',
    //     },
    //     {
    //       type: 'indexColor',
    //       text: 'health-care-voucher.pageDetail.content_1.list_16.text_2',
    //     },
    //     {
    //       type: 'defule',
    //       text: 'health-care-voucher.pageDetail.content_1.list_16.text_3',
    //     },
    //     {
    //       type: 'indexColor',
    //       text: 'health-care-voucher.pageDetail.content_1.list_16.text_4',
    //     },
    //     {
    //       type: 'defule',
    //       text: 'health-care-voucher.pageDetail.content_1.list_16.text_5',
    //     },
    //   ],
    // },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_17.text',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_18.text',
        },
        {
          type: 'indexColor a',
          text: 'https://bit.ly/愛康健長者醫療券預約',
          link: 'https://bit.ly/愛康健長者醫療券預約',
        },
      ],
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_19.text',
        },
        {
          type: 'indexColor a',
          text: '+852 69338128',
          link: 'tel: +852 69338128',
        },
      ],
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_20.text',
        },
        {
          type: 'indexColor a',
          text: 'https://ckjhk.com/health-care-voucher',
          link: 'https://ckjhk.com/health-care-voucher',
        },
      ],
      className: 'nob',
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_21.text',
        },
        {
          type: 'indexColor a',
          text: 'https://www.hcv.gov.hk/tc/index.html',
          link: 'https://www.hcv.gov.hk/tc/index.html',
        },
      ],
    },
    {
      type: 'p',
      list: [
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_22.text_1',
        },
        {
          type: 'defule',
          text: 'health-care-voucher.pageDetail.content_1.list_22.text_2',
        },
        {
          type: 'a',
          text: 'https://www.info.gov.hk/gia/general/202305/10/P2023051000264.html',
          link: 'https://www.info.gov.hk/gia/general/202305/10/P2023051000264.html',
        },
      ],
      className: 'lastpa pa nob',
    },
  ],
  tags: [
    'health-care-voucher.pageDetail.content_1.list_23.text_1',
    'health-care-voucher.pageDetail.content_1.list_23.text_2',
    'health-care-voucher.pageDetail.content_1.list_23.text_3',
  ],
}

const handleLocale = (l) => {
  locale.value = l
  headerConfig.value.img = `https://static.cmereye.com/imgs/2024/02/4c1e46eab9adb6de_${locale.value}.webp`
  headerConfig.value.mbImg = `https://static.cmereye.com/imgs/2024/02/9798849854855a0c_${locale.value}.webp`
  if (l == 'zh') {
    var _text = '微软雅黑'
  } else {
    var _text = "'FakePearl-Regular','幼圆', Serif"
  }
  document.documentElement.style.setProperty('--indexFontFamily', _text)
}

const docHeight = ref('')
const changeConfig = () => {
  if (width.value > 768) {
    if (y.value > 4400) {
      docHeight.value = 'pc'
    }
  } else {
    if (y.value > 3300) {
      docHeight.value = 'mb'
    }
  }
}
watch(y, (n, o) => {
  if (width.value > 768) {
    changeConfig()
  } else {
    changeConfig()
  }
})
let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)

  if (width.value > 768) {
    changeConfig()
  } else {
    changeConfig()
  }
  window.addEventListener('scroll', () => {
    if (width.value > 768) {
      changeConfig()
    } else {
      changeConfig()
    }
  })
})
const newsmoduleLists = [
  {
    id: '192',
    img: 'https://static.cmereye.com/imgs/2024/06/247bc49f8a117cf8.jpg',
    name: '【#長者醫療券使用指南】配偶共用醫療券方法',
    desc: '為了更好地照顧家庭健康，長者醫療券計劃允許配偶之間共享使用醫療券餘額。這意味著，如果其中一方醫療券戶口內的餘額耗盡後，便可以使用配偶戶口內的醫療券餘額。',
    link: '/news/news-information/192',
  },
  {
    id: '164',
    img: 'https://static.cmereye.com/imgs/2024/08/32c328667af0ce46.png',
    name: '【#長者醫療券使用指南】提早下載醫健通 用醫療券好輕鬆 📱👍',
    desc: '親愛嘅長者們！使用醫療劵前，可以先下載 📱「醫健通eHealth」App 同進行登記啊！利用呢個App，您可以更方便地管理您嘅醫療劵，包括：✅ 查閱醫療劵戶口餘額 - 隨時了解剩餘金額，合理規劃使用。✅ 查閱過去使用醫療劵紀錄 - 明白每一筆交易，清楚消費。✅ 查閱提供服務嘅醫療機構 - 揾到最適合您嘅醫療服務地點。✅ 獲取最新醫療劵消息 - 不錯過任何重要更新同資訊。',
    link: '/news/news-information/164',
  },
  {
    id: '152',
    img: 'https://static.cmereye.com/imgs/2024/08/cab2e7dea18bbfe2.png',
    name: '【#長者醫療券使用指南】首次使用醫療券要登記',
    desc: '長者朋友們，首次使用醫療券需要前往已註冊的醫療券服務提供的醫院或診所進行戶口登記。不過唔使擔心，登記過程非常簡單，而且完全免費。如果您覺得有需要，可以帶埋照顧者一齊前往進行登記手續。',
    link: '/news/news-information/152',
  },
]
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="health-care-voucher pageIn whitebgColor">
      <div class="smallPageCon health-care-voucher-top">
        <div class="index_title health-care-voucher-title">
          {{ $t('components.header.menuLists.health-care-voucher.name') }}
        </div>
      </div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link
          :to="'/'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>{{ $t('components.footer.nav_index') }}</span>
        </nuxt-link>
        <span>{{
          $t('components.header.menuLists.health-care-voucher.name')
        }}</span>
      </div>
      <div class="content">
        <div class="new_defule">
          2024年2月19日，政府公布深圳愛康健齒科已經正式成為「長者醫療券大灣區試點計劃」的參與機構。這個計劃旨在資助符合條件的長者跨境到愛康健齒科口腔醫院使用長者醫療券支付治療費用。政府預計約有170萬名合資格的長者將從中受益。
        </div>
        <div>
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/02/74d44b6145445bfd.webp"
            title="灣區長者醫療券"
            alt="灣區長者醫療券"
          />
        </div>
        <div class="new_defule">
          2024年8月5日，香港衛生署正式與深圳愛康健口腔醫院簽署服務協議，並公布相關使用細節。「長者醫療券大灣區試點計劃」首次有牙科專業醫療機構參與，為醫療券計劃在內地推行帶來一大突破，讓合資格香港長者可在深圳使用醫療券接受牙科服務的選擇更多，以回應香港長者對牙科服務的殷切需求。
        </div>
        <div>
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/08/4831c2a8a353d328.png"
            title="灣區長者醫療券"
            alt="灣區長者醫療券"
          />
        </div>
        <div class="new_defule">
          2024年8月14日起，合資格申領醫療券的香港長者將可在深圳愛康健口腔醫院使用醫療券支付門診醫療護理費用，為居住在大灣區內地城市的合資格香港長者提供更大的便利和靈活性。
        </div>
        <div style="margin: 0 0 80px 0">
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/08/dc30c123de004e45.png"
            title="灣區長者醫療券"
            alt="灣區長者醫療券"
          />
        </div>
        <div class="nob" style="margin: 0 0 20px 0">
          <h1>深圳愛康健口腔醫院簡介</h1>
        </div>
        <div class="new_two_img">
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/08/22290f84b6d30b72.jpg"
            title="灣區長者醫療券"
            alt="灣區長者醫療券"
          />
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/08/e664507ec2ca2726.jpg"
            title="灣區長者醫療券"
            alt="灣區長者醫療券"
          />
        </div>
        <div class="new_defule">
          深圳愛康健口腔醫院是深圳市政府批准成立的二級口腔專科醫院，位於深圳市羅湖區建設路羅湖火車站大樓C區1-2樓北側、4-8樓，建築面積約8500平方米，設置牙椅64台，床位20張。醫院內有數十位來自華西、北大、港大等高校畢業的醫生，設置六大專科，提供全面性牙科醫療服務。以及提供優質醫療服務，包括無假日齒科、可自選預約醫生、一醫一患一診室、全程陪護、廣東話服務等。
        </div>
        <div class="new_address">
          <div>
            <span>醫院地址：</span>
            <span class="indexColor a"
              >深圳市羅湖區羅湖火車站大廈C區1樓大堂（出關後步行4分鐘）</span
            >
          </div>
          <div>
            <span>醫院營業時間：</span>
            <span class="indexColor a">上午9:00-下午6:00（假日照常應診）</span>
          </div>
          <div>
            <span>查詢及預約電話：</span>
            <span class="indexColor a">(852) 6933 8128 </span>
          </div>
        </div>
        <div class="btn">
          <a href="https://bit.ly/愛康健長者醫療券預約">{{
            $t('health-care-voucher.pageDetail.btn')
          }}</a>
        </div>
        <div class="nob" style="margin: 100px 0 50px 0">
          <h1>使用醫療券預約方法及就醫流程</h1>
        </div>
        <div class="new_defule">
          <span class="new_address_gray"
            >長者可透過深圳愛康健口腔醫院香港官方網站進行</span
          ><a
            href="https://bit.ly/%E6%84%9B%E5%BA%B7%E5%81%A5%E9%95%B7%E8%80%85%E9%86%AB%E7%99%82%E5%88%B8%E9%A0%90%E7%B4%84"
            target="_blank"
            class="new_address_pink"
          >
            網上查詢
          </a>
        </div>
        <div class="new_defule">
          <span class="new_address_gray">或致電</span
          ><a
            class="new_address_pink"
            href="tel://852 69338128"
            target="_blank"
          >
            69338128 </a
          ><span class="new_address_gray">進行登記預約。</span>
        </div>
        <div class="new_defule">
          長者亦可親身前往該院一樓大堂接待處，待醫院職員安排分診。完成分診後，長者可前往五樓、六樓或七樓出示有效香港身份證或由入境事務處發出的《豁免登記證明書》進行身份認證及掛號。在接受牙科治療後，長者可按醫院指示到收費專窗使用醫療券支付服務費用。
        </div>
        <!-- <div class="nob">
          <h1>{{$t('health-care-voucher.pageDetail.nob')}}</h1>
        </div> -->
        <!-- <div>
          <p class="time">{{$t('health-care-voucher.pageDetail.time')}}</p>
        </div> -->
        <!-- <div v-for="(item,index) in pageDetail.content" :key="index" :class="item.className || ''">
          <section v-if="item.type === 'p'">
            <p :class="{english:langCur === 'english'}">
              <section v-for="(pitem,pindex) in item.list" :key="pindex">
                <section v-if="pitem.type.includes('a')">
                  <a :href="pitem.link" :class="pitem.type">{{pitem.text}}</a>
                </section>
                <section v-else>
                  <span :class="pitem.type">
                    {{$t(pitem.text)}}
                  </span>
                </section>
              </section>
            </p>
          </section>
          <section v-else-if="item.type === 'h2'">
            <h2>{{$t(item.text)}}</h2>
          </section>
          <section v-else-if="item.type === 'h3'">
            <h3>{{$t(item.text)}}</h3>
          </section>
          <section v-else-if="item.type === 'img'">
            <section class="imgItem" v-for="(imgItem,imgIndex) in item.list" :key="imgIndex">
              <img loading="lazy" :src="imgItem" alt="">
            </section>
          </section>
          <section v-else-if="item.type === 'ul'">
            <ul>
              <li v-for="(liItem,liIndex) in item.list" :key="liIndex">
                {{$t(liItem)}}
              </li>
            </ul>
          </section>
          <section v-else></section>
        </div> -->
        <!-- <div class="btn">
          <a href="https://bit.ly/愛康健長者醫療券預約">{{$t('health-care-voucher.pageDetail.btn')}}</a>
        </div> -->
        <!-- <div class="tags">
          <span v-for="(tagItem,tagIndex) in pageDetail.tags" :key="tagIndex">
            {{$t(tagItem)}}
          </span>
        </div> -->
      </div>
      <div class="new_step">
        <div class="resolve_step">
          <div>
            <div>醫院就醫流程</div>
            <div>
              <img src="../assets/images/step.svg" alt="step" />
            </div>
            <div
              :class="[
                docHeight == 'pc'
                  ? 'step_shade step_active'
                  : 'step_shade_mb step_active_mb',
              ]"
            ></div>
          </div>
        </div>
        <div class="step_pink">
          *長者在香港以外地方使用醫療券時，需要先同意加入電子健康紀錄互通系統（「醫健通」）（如未曾加入）。
        </div>
      </div>
      <div class="content new_table">
        <div
          class="new_table_title"
          style="margin: 100px 0 50px 0; justify-content: center"
        >
          <h1>可使用長者醫療券的牙科治療項目</h1>
        </div>
        <div class="new_table_tbody">
          <div>
            <div>
              <span>預防性牙科項目</span>
            </div>
            <div>
              <span><i>1</i>牙齒檢查</span>
              <span><i>2</i>牙科放射照（CT拍片／Ｘ光）</span>
              <span><i>3</i>口腔衞生指導／口腔健康教育</span>
              <span><i>4</i>洗牙／打磨</span>
              <span><i>5</i>塗搽高濃度氟化物劑</span>
              <p>
                ＊可參與長者醫療券獎賞先導計劃，累計使用至少1,000元醫療券可發放500元獎賞
              </p>
            </div>
          </div>
          <div>
            <div>
              <span>治理急性病症牙科項目</span>
            </div>
            <div>
              <span><i>1</i>牙根刮治／清創</span>
              <span><i>2</i>牙髓摘除</span>
              <span><i>3</i>小型口腔手術</span>
              <span><i>4</i>處方藥物</span>
            </div>
          </div>
          <div>
            <div>
              <span>跟進／監察慢性病症</span>
              <span>牙科項目</span>
            </div>
            <div>
              <span><i>1</i>覆檢假牙托／牙橋／種植體</span>
              <span><i>2</i>治理顳下頷關節（牙骹）病症／痛症</span>
              <span><i>3</i>治理蛀牙，包括補牙、脫牙、杜牙根（牙髓治療）</span>
              <span><i>4</i>治理牙周病，包括進階牙周治療</span>
              <p>
                ＊可參與長者醫療券獎賞先導計劃，累計使用至少1,000元醫療券可發放500元獎賞
              </p>
            </div>
          </div>
          <div>
            <div>
              <span>復康性牙科項目</span>
            </div>
            <div>
              <span><i>1</i>洞內嵌體／高嵌體</span>
              <span><i>2</i>鑲配人造牙冠／牙橋</span>
              <span><i>3</i>鑲配假牙托</span>
              <span><i>4</i>鑲配假牙托</span>
            </div>
          </div>
        </div>
        <div class="btn">
          <a href="https://bit.ly/愛康健長者醫療券預約">{{
            $t('health-care-voucher.pageDetail.btn')
          }}</a>
        </div>
      </div>
      <div class="content">
        <div class="nob" style="margin: 100px 0 50px 0">
          <h1>如何參加長者醫療券計劃？</h1>
        </div>
        <div class="new_defule">
          凡年滿
          65歲並持有有效香港身份證或入境事務處發出的《豁免登記證明書》的長者，即符合資格領取及使用醫療券支付私營基層醫療服務的費用。
        </div>
        <div class="new_defule">
          每名合資格長者每年可獲發的醫療券金額為2,000港元，醫療券的累積金額上限為
          8,000港元。
        </div>
        <div class="mb_new_defule">
          <span class="new_address_pink">查詢醫療券使用記錄</span><br />
          <div class="new_defule">
            醫院為長者申報使用醫療券，有關戶口内的醫療券使用記錄亦會即時更新。在完成申報後醫院會給長者一份《醫療券使用記錄》，列明扣取前、已扣取及剩餘的醫療券金額，以供保存。
          </div>
        </div>
        <div class="mb_new_defule">
          <span class="new_address_pink">長者醫療券獎賞先導計劃</span><br />
          <div class="new_defule">
            於2023年11月13日推出，為期3年的「長者醫療券獎賞先導計劃」（「獎賞先導計劃」），透過發放獎賞，鼓勵65歲或以上的合資格香港長者使用醫療券，接受私營醫療服務提供者提供的健康檢查、慢性疾病診斷和管理等特定基層醫療服務。只要主要到診原因屬指明的特定基層醫療用途，長者在該次服務所使用的醫療券金額便可累積計算以賺取獎賞，供日後用作支付該等特定基層醫療服務費用。
          </div>
        </div>
        <div class="new_defule">
          長者醫療券獎賞先導計劃」適用於愛康健口腔醫院，接受預防性牙科項目及跟進／監察慢性病症牙科項目時，
          同一年度內累計使用至少1,000元醫療券，醫健通（資助）系統即會自動發放500元獎賞至其醫療券戶口。
        </div>
      </div>
      <div class="content" style="margin-bottom: 85px">
        <div class="nob" style="margin: 100px 0 50px 0">
          <h1 style="text-align: left">長者醫療券相關連結</h1>
        </div>
        <div class="new_address">
          <div>
            <span>醫療券官方網頁：</span
            ><a
              href="https://www.hcv.gov.hk/tc/index.html"
              target="_blank"
              class="new_address_pink"
              >https://www.hcv.gov.hk/tc/index.html</a
            >
          </div>
          <div>
            <span>醫健通官方網頁：</span
            ><a
              href="https://www.ehealth.gov.hk/tc/"
              target="_blank"
              class="new_address_pink"
              >https://www.ehealth.gov.hk/tc/</a
            >
          </div>
          <div>
            <span>醫療券深圳愛康健口腔醫院官方網頁：</span
            ><a
              href="https://www.hcv.gov.hk/tc/hcv_gba_pilot_scheme/szckjsh.html"
              target="_blank"
              class="new_address_pink"
              >https://www.hcv.gov.hk/tc/hcv_gba_pilot_scheme/szckjsh.html</a
            >
          </div>
        </div>
      </div>
      <div class="new_info_health">
        <div class="new_info_header">
          <div>
            <svg
              width="248"
              height="316"
              viewBox="0 0 248 316"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M226.24 207.832C228.89 207.012 234.778 205.739 237.485 206.293C241.147 207.037 238.2 210.347 234.658 211.633C231.123 212.926 226.481 215.605 226.481 215.605C226.481 215.605 220.106 221.797 213.674 220.214L203.587 211.066C203.587 211.066 202.246 206.974 203.391 203.557C203.391 203.557 199.881 196.269 200.766 193.066C201.759 189.479 207.622 189.548 209.886 198.217C209.886 198.217 213.174 189.775 213.434 187.033C214.016 180.898 219.239 180.98 219.682 186.03C219.973 189.296 219.227 194.308 218.36 197.297C217.892 198.929 217.949 199.951 217.949 199.951L215.85 200.159C215.85 200.159 223.262 204.629 224.381 208.531L225.178 208.91L226.221 207.832H226.24Z"
                fill="white"
              />
              <path
                d="M224.647 199.478C224.647 199.478 231.743 196.149 235.512 195.172C238.915 194.296 241.28 198.999 234.703 202.668C231.364 204.534 227.449 207.788 226.715 208.412C226.715 208.412 226.709 208.412 226.709 208.418C225.779 208.708 225.197 208.903 225.197 208.903L224.401 208.525C223.275 204.629 215.869 200.153 215.869 200.153L217.115 199.806C217.115 199.806 218.108 197.568 218.576 195.941C218.576 195.941 221.858 191.509 225.501 186.352C227.367 183.71 233.811 185.324 228.809 192.972C226.557 196.42 225.659 197.82 224.647 199.472V199.478Z"
                fill="white"
              />
              <path
                d="M213.68 220.215C220.111 221.797 226.486 215.606 226.486 215.606C226.486 215.606 231.628 212.737 235.17 211.445C238.705 210.159 241.146 207.044 237.491 206.294C234.784 205.739 233.626 206.887 228.143 207.24"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M212.959 204.087C213.218 200.695 210.037 198.274 209.961 198.035C208.001 190.45 201.765 189.479 200.772 193.066C199.887 196.269 203.397 203.557 203.397 203.557C202.252 206.975 203.593 211.066 203.593 211.066"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M210.113 197.65C210.113 197.65 213.187 189.782 213.446 187.039C214.028 180.905 219.252 180.987 219.695 186.037C219.985 189.303 219.214 193.546 218.354 196.534"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M218.619 195.538C218.619 195.538 221.851 191.516 225.494 186.359C227.359 183.717 233.804 185.331 228.801 192.978C226.55 196.427 225.652 197.827 224.64 199.479"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M224.646 199.478C224.646 199.478 231.774 196.553 235.512 195.172C238.807 193.956 241.279 198.999 234.702 202.669C231.363 204.535 228.871 206.609 228.137 207.233"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M217.215 198.218C217.215 198.218 223.476 201.994 224.425 205.292"
                stroke="#A4D8F1"
                stroke-width="0.84"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M95.5946 208.96C92.4704 228.511 82.01 252.91 86.0892 267.133C89.8395 280.215 90.9525 296.86 89.9976 302.345C89.6561 304.312 87.4615 309.148 90.1873 311.915C92.9067 314.683 99.8381 315.446 111.949 315.377C130.346 315.269 136.279 314.267 135.785 309.885C135.26 305.213 131.618 305.989 131.491 303.707C130.941 293.739 132.275 281.483 132.275 281.483C132.275 281.483 137.385 275.846 141.566 301.538C141.566 301.538 140.75 308.568 143.355 309.948C144.791 310.711 149.832 310.219 166.49 311.102C181.484 311.896 186.329 307.401 186.487 305.333C186.911 299.716 180.428 298.064 180.428 298.064C180.428 298.064 178.487 271.944 178.563 266.963C179.644 195.966 144.45 177.985 144.45 177.985L90.9399 178.723C90.9399 178.723 90.0735 182.304 88.8655 188.117"
                fill="white"
              />
              <path
                d="M80.8273 240.118C80.8273 240.118 80.157 228.965 84.9128 210.133"
                stroke="#96BDD2"
                stroke-width="0.53"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M86.0879 267.134C89.8382 280.216 91.0777 295.965 90.1228 301.457C89.8255 303.165 87.7385 309.955 90.5718 312.162C93.8667 314.734 98.7934 315.447 113.428 315.358C129.491 315.258 136.119 315.226 135.784 309.886C135.55 306.198 131.616 305.99 131.49 303.707C130.94 293.74 132.274 281.484 132.274 281.484C132.274 281.484 137.378 276.213 141.564 301.539C141.564 301.539 140.749 308.568 143.354 309.949C144.79 310.712 158.476 311.223 166.488 311.103C185.449 310.825 186.068 307.364 186.486 305.334C187.517 300.341 180.427 298.065 180.427 298.065C180.427 298.065 177.581 271.85 178.561 266.964"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M132.028 284.043C132.028 284.043 133.362 279.617 138.491 278.243C144.809 276.547 141.925 269.605 141.925 269.605L121.498 271.453L122.902 279.17L132.028 284.043Z"
                fill="white"
              />
              <path
                d="M131.99 284.522C131.99 284.522 131.877 280.915 138.492 278.242L131.99 284.522Z"
                fill="white"
              />
              <path
                d="M131.99 284.522C131.99 284.522 131.877 280.915 138.492 278.242"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M79.3965 245.478C79.3965 245.478 81.2432 247.552 81.376 248.409L79.3965 245.478Z"
                fill="white"
              />
              <path
                d="M79.3965 245.478C79.3965 245.478 81.2432 247.552 81.376 248.409"
                stroke="#8FB2C4"
                stroke-width="0.19"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M143.012 200.562L141.741 197.978L137.251 197.908L135.828 200.966L138.446 205.606L140.951 205.543L143.012 200.562Z"
                fill="#FC1682"
              />
              <path
                d="M138.578 205.802L140.855 205.776L147.546 236.486L143.081 246.315C143.081 246.315 136.782 238.34 136.188 237.129C135.593 235.919 138.572 205.795 138.572 205.795L138.578 205.802Z"
                fill="#FC1682"
              />
              <path
                d="M161.062 195.632C176.405 192.575 188.13 214.42 188.908 213.866C192.07 211.621 197.345 208.046 200.381 205.026C200.381 205.026 214.92 219.376 217.956 222.112C217.956 222.112 199.457 244.431 189.509 243.794C182.622 243.352 178.125 237.678 178.125 237.678"
                fill="white"
              />
              <path
                d="M161.062 195.632C176.405 192.575 188.13 214.42 188.908 213.866C192.07 211.621 197.345 208.046 200.381 205.026C200.381 205.026 214.92 219.376 217.956 222.112C217.956 222.112 199.457 244.431 189.509 243.794C182.622 243.352 178.125 237.678 178.125 237.678"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M170.789 206.993C173.888 215.322 177.556 228.448 178.688 243.34C180.668 269.378 186.581 276.25 188.326 284.528C188.326 284.528 172.718 294.943 148.509 290.284C148.509 290.284 144.822 255.363 146.105 236.152C146.807 225.624 152.581 204.162 154.276 196.912"
                fill="white"
              />
              <path
                d="M170.789 206.993C173.888 215.322 177.556 228.448 178.688 243.34C180.668 269.378 186.581 276.25 188.326 284.528C188.326 284.528 172.718 294.943 148.509 290.284C148.509 290.284 144.822 255.363 146.105 236.152C146.807 225.624 152.581 204.162 154.276 196.912"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M155.814 198.324L162.094 208.046L156.428 213.67L160.987 217.553L146.891 244.437"
                fill="white"
              />
              <path
                d="M155.814 198.324L162.094 208.046L156.428 213.67L160.987 217.553L146.891 244.437"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M152.342 210.183L160.987 217.553"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M95.7457 211.602C92.6468 219.93 88.1756 228.246 87.0372 243.138C85.0577 269.176 84.1407 282.473 81.377 288.399C81.377 288.399 112.126 295.82 136.335 291.167C136.335 291.167 137.125 256.775 135.842 237.564C135.14 227.036 129.366 205.575 127.671 198.324"
                fill="white"
              />
              <path
                d="M95.7457 211.602C92.6468 219.93 88.1756 228.246 87.0372 243.138C85.0577 269.176 84.1407 282.473 81.377 288.399C81.377 288.399 112.126 295.82 136.335 291.167C136.335 291.167 137.125 256.775 135.842 237.564C135.14 227.036 129.366 205.575 127.671 198.324"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M124.824 199.271L116.824 208.185L123.199 213.727L117.931 217.693L134.918 245.477"
                fill="white"
              />
              <path
                d="M124.824 199.271L116.824 208.185L123.199 213.727L117.931 217.693L134.918 245.477"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M127.918 210.171L117.932 217.693"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M238.803 124.642C239.233 132.106 241.067 134.855 244.033 134.546C247.037 134.231 248.093 129.837 247.999 123.935C247.904 118.034 245.45 114.043 242.439 114.27C238.999 114.529 238.461 118.753 238.803 124.648V124.642Z"
                fill="#A4D8F1"
              />
              <path
                d="M233.901 150.731H234.363C238.682 150.655 243.818 147.528 243.014 122.246C242.414 103.37 237.822 98.3388 233.503 98.4144H233.041C228.721 98.4901 225.281 102.04 225.351 106.339L225.958 143.07C226.027 147.376 229.588 150.806 233.901 150.737V150.731Z"
                fill="#D8F0FC"
              />
              <mask
                id="mask0_8026_36930"
                style="mask-type: luminance"
                maskUnits="userSpaceOnUse"
                x="225"
                y="98"
                width="19"
                height="53"
              >
                <path
                  d="M233.901 150.731H234.363C238.682 150.655 243.818 147.528 243.014 122.246C242.414 103.37 237.822 98.3388 233.503 98.4144H233.041C228.721 98.4901 225.281 102.04 225.351 106.339L225.958 143.07C226.027 147.376 229.588 150.806 233.901 150.737V150.731Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_8026_36930)">
                <path
                  d="M234.289 124.653C234.62 109.983 231.806 98.0225 228.003 97.9371C224.201 97.8517 220.849 109.674 220.518 124.344C220.187 139.013 223.001 150.974 226.803 151.059C230.606 151.145 233.957 139.322 234.289 124.653Z"
                  fill="#A4D8F1"
                />
              </g>
              <path
                d="M210.317 50.5621C204.922 38.9552 194.184 2.2053 173.282 1.97203C149.212 1.70093 144.709 32.4488 129.645 32.2786C129.467 32.2786 129.297 32.2723 129.126 32.2659C129.126 32.2659 129.069 32.2659 129.037 32.2659C129.006 32.2659 128.98 32.2659 128.949 32.2659C128.778 32.2659 128.607 32.2723 128.43 32.2659C113.36 32.0957 110.596 1.26591 86.5256 1.00111C65.6239 0.76784 54.4047 37.2719 48.7508 48.7527C40.6241 65.2583 16.6614 93.5158 28.5827 142.787C41.5221 196.276 104.904 196.988 126.571 197.234C126.931 197.234 127.311 197.24 127.697 197.246C128.082 197.246 128.462 197.253 128.822 197.259C150.489 197.505 213.871 198.211 228.019 145.025C241.047 96.0313 218.077 67.2505 210.323 50.5621H210.317Z"
                fill="white"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M85.1841 107.386C80.1816 116.528 77.7152 130.48 89.8767 137.283C102.607 144.401 117.065 138.411 118.994 122.801C121.454 102.872 110.209 96.1638 103.834 96.0251C98.971 95.9179 90.5155 97.6391 85.1778 107.386H85.1841Z"
                fill="#D8F0FC"
              />
              <path
                d="M94.0198 108.351C89.5296 115.166 89.0616 122.044 91.3383 127.845C93.7289 133.922 107.054 138.569 113.467 128.028C117.565 121.288 114.953 109.675 109.799 104.99C105.941 101.491 98.1559 102.071 94.0198 108.351Z"
                fill="#004571"
              />
              <path
                d="M97.3204 121.143C101.753 121.143 105.346 117.561 105.346 113.142C105.346 108.724 101.753 105.142 97.3204 105.142C92.8881 105.142 89.2949 108.724 89.2949 113.142C89.2949 117.561 92.8881 121.143 97.3204 121.143Z"
                fill="white"
              />
              <path
                d="M111.941 132.258C114.641 132.258 116.83 130.076 116.83 127.384C116.83 124.693 114.641 122.511 111.941 122.511C109.241 122.511 107.053 124.693 107.053 127.384C107.053 130.076 109.241 132.258 111.941 132.258Z"
                fill="white"
              />
              <path
                d="M195.632 108.622C200.426 117.871 202.582 131.88 190.263 138.405C177.374 145.233 163.056 138.922 161.481 123.274C159.47 103.301 170.86 96.8384 177.241 96.8447C182.111 96.8447 190.522 98.7551 195.632 108.622Z"
                fill="#D8F0FC"
              />
              <path
                d="M186.777 109.391C191.109 116.307 191.425 123.192 189.015 128.936C186.492 134.963 173.066 139.3 166.887 128.62C162.941 121.792 165.818 110.236 171.074 105.671C175.007 102.254 182.78 103.017 186.777 109.385V109.391Z"
                fill="#004571"
              />
              <path
                d="M171.733 121.981C176.165 121.981 179.758 118.399 179.758 113.981C179.758 109.562 176.165 105.98 171.733 105.98C167.3 105.98 163.707 109.562 163.707 113.981C163.707 118.399 167.3 121.981 171.733 121.981Z"
                fill="white"
              />
              <path
                d="M186.348 133.09C189.048 133.09 191.236 130.908 191.236 128.217C191.236 125.525 189.048 123.343 186.348 123.343C183.648 123.343 181.459 125.525 181.459 128.217C181.459 130.908 183.648 133.09 186.348 133.09Z"
                fill="white"
              />
              <path
                d="M128.728 117.619C125.522 117.537 124.908 121.074 124.579 122.688C124.44 123.362 123.023 131.136 118.767 136.589C115.365 140.946 111.741 143.335 107.738 144.483C104.152 145.517 99.8703 146.04 96.0315 145.889C92.1863 145.769 87.9554 144.943 84.4518 143.663C80.5434 142.232 76.9385 139.698 74.0104 135.013C71.3162 130.701 70.083 125.298 69.1597 121.257C68.7929 119.643 68.0529 115.784 64.8592 115.866C60.1919 115.98 60.4764 119.869 60.5334 120.412C61.033 125.632 61.4757 126.704 62.437 130.676C63.6323 135.593 65.6118 139.597 68.2616 142.976C71.5692 147.188 75.8444 150.201 81.3465 152.194C85.7166 153.776 90.4156 154.684 95.7153 154.974C101.021 155.056 105.771 154.482 110.242 153.215C115.864 151.62 120.348 148.915 123.947 144.943C126.831 141.759 129.531 137.92 131.144 133.122C132.529 128.999 132.839 127.656 133.256 123.022C133.275 122.82 133.389 117.745 128.741 117.625L128.728 117.619Z"
                fill="#FC1682"
              />
              <path
                d="M151.874 117.877C155.081 117.865 155.618 121.414 155.909 123.041C156.029 123.715 157.275 131.527 161.405 137.069C164.712 141.501 168.279 143.966 172.251 145.208C175.812 146.318 180.08 146.942 183.926 146.872C187.771 146.841 192.021 146.109 195.55 144.905C199.49 143.562 203.151 141.11 206.181 136.489C208.97 132.239 210.329 126.868 211.341 122.839C211.746 121.238 212.568 117.398 215.762 117.543C220.423 117.764 220.05 121.641 219.987 122.183C219.367 127.391 218.905 128.456 217.849 132.397C216.54 137.283 214.478 141.249 211.752 144.565C208.35 148.701 204.005 151.62 198.465 153.486C194.063 154.968 189.339 155.768 184.039 155.945C178.733 155.907 173.996 155.226 169.557 153.858C163.966 152.137 159.546 149.331 156.042 145.284C153.234 142.037 150.616 138.14 149.11 133.305C147.82 129.15 147.536 127.801 147.226 123.161C147.213 122.959 147.213 117.884 151.862 117.865L151.874 117.877Z"
                fill="#FC1682"
              />
              <path
                d="M139.864 172.646C128.791 172.646 119.816 165.439 119.816 156.55C119.816 156.367 119.816 156.19 119.829 156.008C119.987 152.225 121.878 149.715 123.567 149.413C126.065 148.972 133.009 150.819 139.864 150.825C146.486 150.831 153.632 148.984 156.674 149.413C158.363 149.652 159.748 152.225 159.906 156.008C159.912 156.184 159.919 156.367 159.919 156.55C159.919 165.439 150.944 172.652 139.871 172.652L139.864 172.646Z"
                fill="#DD0074"
              />
              <mask
                id="mask1_8026_36930"
                style="mask-type: luminance"
                maskUnits="userSpaceOnUse"
                x="119"
                y="149"
                width="41"
                height="24"
              >
                <path
                  d="M139.864 172.646C128.791 172.646 119.816 165.439 119.816 156.55C119.816 156.367 119.816 156.19 119.829 156.008C119.987 152.225 121.878 149.715 123.567 149.413C126.065 148.972 133.009 150.819 139.864 150.825C146.486 150.831 153.632 148.984 156.674 149.413C158.363 149.652 159.748 152.225 159.906 156.008C159.912 156.184 159.919 156.367 159.919 156.55C159.919 165.439 150.944 172.652 139.871 172.652L139.864 172.646Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_8026_36930)">
                <path
                  d="M134.602 177.922C147.019 177.922 157.085 172.427 157.085 165.647C157.085 158.868 147.019 153.372 134.602 153.372C122.185 153.372 112.119 158.868 112.119 165.647C112.119 172.427 122.185 177.922 134.602 177.922Z"
                  fill="#FC1682"
                />
              </g>
              <path
                d="M112.69 85.5215C112.905 86.5807 112.81 87.6777 112.234 88.5225C109.749 92.1351 101.831 87.0094 98.5234 83.9579C99.763 81.0388 103.38 78.9898 106.878 79.8157C109.534 80.4462 111.88 82.615 112.582 85.099C112.62 85.2377 112.658 85.3828 112.683 85.5215H112.69Z"
                fill="#D8F0FC"
              />
              <path
                d="M168.634 86.1522C168.394 87.205 168.464 88.3084 169.027 89.1595C171.43 92.8288 179.462 87.8796 182.832 84.9038C181.663 81.9596 178.089 79.8286 174.573 80.5725C171.898 81.14 169.507 83.2583 168.748 85.7234C168.704 85.8621 168.666 86.0072 168.634 86.1459V86.1522Z"
                fill="#D8F0FC"
              />
              <path
                d="M28.6586 150.825L28.1653 150.838C23.498 150.964 15.4788 145.327 15.3396 121.88C15.2132 100.741 21.9422 94.3983 26.6095 94.2722L27.1028 94.2596C29.6009 94.1903 35.5583 92.923 36.5639 123.04C37.5884 153.776 30.4736 150.775 28.6586 150.825Z"
                fill="#A4D8F1"
              />
              <mask
                id="mask2_8026_36930"
                style="mask-type: luminance"
                maskUnits="userSpaceOnUse"
                x="15"
                y="94"
                width="22"
                height="57"
              >
                <path
                  d="M28.6586 150.825L28.1653 150.838C23.498 150.964 15.4788 145.327 15.3396 121.88C15.2132 100.741 21.9422 94.3983 26.6095 94.2722L27.1028 94.2596C29.6009 94.1903 35.5583 92.923 36.5639 123.04C37.5884 153.776 30.4736 150.775 28.6586 150.825Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask2_8026_36930)">
                <path
                  d="M27.573 123.445C27.8242 107.141 24.8739 93.8759 20.9834 93.8163C17.0929 93.7567 13.7354 106.926 13.4842 123.23C13.2329 139.534 16.1832 152.799 20.0737 152.859C23.9642 152.918 27.3218 139.75 27.573 123.445Z"
                  fill="#D8F0FC"
                />
              </g>
              <path
                d="M17.7429 134.105C17.0978 133.891 -1.45758 130.108 0.0918634 79.5381C0.268943 74.8979 7.83277 73.4667 9.27471 82.35C10.3056 86.2904 13.7776 106.037 18.5777 109.763C18.8117 118.211 22.0371 135.524 17.7429 134.111V134.105Z"
                fill="#D8F0FC"
              />
              <path
                d="M22.3215 121.528C23.0298 130.436 21.3033 133.992 17.7427 134.105C14.1315 134.225 12.1647 129.181 11.3172 122.177C10.4698 115.166 12.7212 110.041 16.3261 109.826C20.4432 109.574 21.7649 114.498 22.3215 121.528Z"
                fill="#A4D8F1"
              />
              <path
                d="M92.0837 194.498C92.0837 194.498 86.7397 194.498 84.9119 196.528C78.9102 203.192 63.9723 217.22 64.5288 228.745C65.0664 239.86 78.1766 255.288 80.1561 257.261C80.1561 257.261 90.2243 257.173 100.413 244.639C100.95 243.977 95.328 232.616 92.2481 229.029C92.2481 229.029 94.4932 222.119 98.0917 213.09"
                fill="white"
              />
              <path
                d="M92.0837 194.498C92.0837 194.498 86.7397 194.498 84.9119 196.528C78.9102 203.192 63.9723 217.22 64.5288 228.745C65.0664 239.86 78.1766 255.288 80.1561 257.261C80.1561 257.261 90.2243 257.173 100.413 244.639C100.95 243.977 95.328 232.616 92.2481 229.029C92.2481 229.029 94.4932 222.119 98.0917 213.09"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M81.3765 252.848C82.606 252.848 83.6027 251.854 83.6027 250.628C83.6027 249.403 82.606 248.409 81.3765 248.409C80.1471 248.409 79.1504 249.403 79.1504 250.628C79.1504 251.854 80.1471 252.848 81.3765 252.848Z"
                fill="white"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M209.963 225.126C211.251 225.126 212.296 224.084 212.296 222.799C212.296 221.514 211.251 220.473 209.963 220.473C208.674 220.473 207.629 221.514 207.629 222.799C207.629 224.084 208.674 225.126 209.963 225.126Z"
                fill="white"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
              />
              <path
                d="M91.7923 280.178L84.4941 265.696L106.49 254.676L113.794 269.158"
                fill="white"
              />
              <path
                d="M118.574 225.435L100.77 223.682L100.448 226.932L118.252 228.685L118.574 225.435Z"
                fill="white"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M186.17 216.664C186.17 216.664 187.39 214.792 188.908 213.865L186.17 216.664Z"
                fill="white"
              />
              <path
                d="M186.17 216.664C186.17 216.664 187.39 214.792 188.908 213.865"
                stroke="#A4D8F1"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M171.966 228.512L171.84 228.524L171.821 228.304L171.953 228.291C172.023 228.285 172.067 228.279 172.08 228.285C172.111 228.285 172.13 228.297 172.149 228.31C172.168 228.329 172.175 228.348 172.181 228.379C172.181 228.405 172.181 228.43 172.168 228.442C172.156 228.461 172.143 228.474 172.124 228.487C172.105 228.493 172.055 228.506 171.966 228.512ZM172.364 228.808C172.314 228.745 172.282 228.701 172.251 228.676C172.225 228.651 172.187 228.632 172.149 228.613C172.225 228.594 172.276 228.562 172.314 228.518C172.345 228.474 172.364 228.417 172.358 228.354C172.358 228.304 172.339 228.26 172.308 228.222C172.276 228.184 172.244 228.159 172.2 228.146C172.156 228.134 172.086 228.134 171.998 228.146L171.631 228.178L171.713 229.035L171.89 229.016L171.859 228.657H171.896C171.934 228.651 171.966 228.651 171.985 228.657C172.004 228.657 172.023 228.669 172.042 228.688C172.061 228.701 172.093 228.745 172.143 228.808L172.289 228.985L172.497 228.966L172.377 228.808H172.364Z"
                fill="#FC1682"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M172.075 229.205C171.727 229.237 171.417 228.984 171.385 228.638C171.354 228.291 171.607 227.982 171.954 227.951C172.302 227.919 172.612 228.171 172.644 228.518C172.675 228.865 172.422 229.174 172.075 229.205ZM171.942 227.774H171.935C171.493 227.818 171.17 228.215 171.208 228.657C171.246 229.098 171.644 229.426 172.094 229.382C172.543 229.338 172.865 228.947 172.821 228.499C172.777 228.051 172.384 227.73 171.942 227.768V227.774Z"
                fill="#FC1682"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M165.8 229.369L164.586 229.483C164.25 229.514 163.947 229.697 163.763 229.981L162.334 232.2L162.024 229.716L161.246 229.791C160.823 229.829 160.513 230.208 160.557 230.63L161.385 238.278L161.974 238.221C162.492 238.17 162.878 237.71 162.827 237.193L162.65 235.321L164.56 237.571C164.763 237.805 165.06 237.931 165.37 237.899L166.59 237.786L163.302 233.656L165.793 229.356L165.8 229.369Z"
                fill="#FC1682"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M160.551 236.859C160.045 236.916 159.451 236.966 158.825 237.004C158.224 237.061 157.832 236.947 157.655 236.878C156.87 236.556 156.118 235.819 155.928 234.526C155.808 233.272 156.421 232.301 157.661 231.79C157.901 231.676 158.869 231.563 159.046 231.557L159.476 231.519C159.855 231.487 160.14 231.153 160.102 230.775L160.026 229.911L159.881 229.924C159.476 229.962 159.065 230.006 158.648 230.05C158.338 230.081 158.034 230.113 157.73 230.144C157.724 230.144 157.718 230.144 157.705 230.144C157.503 230.163 157.345 230.201 157.218 230.239C155.283 230.932 154.183 232.546 154.284 234.602C154.53 237.256 156.301 238.183 157.591 238.504C157.712 238.53 158.072 238.593 158.521 238.555C158.806 238.53 159.097 238.498 159.381 238.473C159.558 238.454 159.83 238.429 160.089 238.404C160.494 238.366 160.798 238.006 160.76 237.597C160.741 237.388 160.722 237.18 160.709 236.991L160.697 236.846L160.551 236.865V236.859Z"
                fill="#FC1682"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M169.051 229.148C168.798 229.117 168.564 229.117 168.412 229.129C168.362 229.129 168.318 229.136 168.267 229.142C168.248 229.142 168.235 229.142 168.235 229.142C167.989 229.161 167.748 229.186 167.502 229.205C167.091 229.243 166.68 229.274 166.269 229.312L166.123 229.325L166.142 229.47C166.155 229.564 166.18 229.829 166.212 230.107C166.256 230.529 166.629 230.838 167.059 230.8L167.502 230.756C168.166 230.687 168.545 230.668 168.817 230.737C170.12 231.002 170.904 231.84 171.024 233.089C171.075 234.4 170.474 235.264 169.772 235.73C169.76 235.743 169.747 235.749 169.728 235.756C169.69 235.781 169.652 235.806 169.608 235.825C169.38 235.945 169.146 236.002 169.007 236.02C168.261 236.121 167.527 236.203 166.92 236.247L166.774 236.26L166.787 236.405C166.793 236.474 166.812 236.676 166.838 236.903C166.882 237.37 167.299 237.71 167.767 237.666C167.995 237.647 168.216 237.628 168.368 237.609C168.716 237.578 168.95 237.559 169.298 237.527C169.424 237.515 169.791 237.445 170.031 237.357C170.101 237.326 170.133 237.313 170.202 237.281C171.397 236.708 172.903 235.466 172.65 232.856C172.365 230.857 171.031 229.489 169.058 229.142L169.051 229.148Z"
                fill="#FC1682"
              />
            </svg>
          </div>
          <div>
            <span>深圳愛康健口腔醫院65歲及以上</span>
            <span style="color: #00963e">長者優惠</span>
          </div>
        </div>
        <div class="new_info_content_bg">
          <div class="new_info_content">
            <div>
              為迎接香港長者醫療券在深圳愛康健口腔醫院全面啟用，口腔醫院為65歲及以上的長者制定折扣及套餐優惠，可以使用醫院券或一般付款方式支付醫療費用。
            </div>
            <div>
              <div>凡65歲及以上香港長者：</div>
              <div v-if="windowWidth > 768" class="new_info_content_items">
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
                    <div>義齒修復</div>
                    <div>
                      <span>免費拔牙<i>1顆</i></span
                      ><span>（智慧齒除外）</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>2</span></div>
                </div>
                <div>
                  <div>
                    <div>超聲波洗牙</div>
                    <div>
                      <span><i>￥</i>58</span><span>(原價¥180/次)</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
                <div>
                  <div>
                    <div>無鹽噴砂洗牙</div>
                    <div>
                      <span><i>￥</i>168</span><span>(原價¥550/次)</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
                <div>
                  <div>
                    <div>全科治療</div>
                    <div>
                      <span><i>原價</i>9<i style="color: #fc1682">折</i></span
                      ><span>（或使用網上優惠）</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
                <div>
                  <div>
                    <div>牙周治療套餐</div>
                    <div>
                      <div>
                        <span><i>原價</i>9<i style="color: #fc1682">折</i></span
                        ><span>牙周專科檢查記錄</span>
                      </div>
                      <div>
                        <span><i>￥</i>240</span><span>(原價¥300/次)</span>
                      </div>
                      <div>
                        <span
                          >贈送<i>2<i style="color: #fc1682">次</i></i
                          >牙周治療後</span
                        >
                        <span>維護<i>（價值¥800/次）</i></span>
                      </div>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
                <div>
                  <div>
                    <div>首次到診長者</div>
                    <div>
                      <span>可延長<i>1</i></span
                      ><span><i style="color: #fc1682">年</i>保修期</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
                <div>
                  <div>
                    <div>首次到診長者</div>
                    <div>
                      <span>享有網上優惠再<i>9</i><i>折</i></span
                      ><span>（特價種植牙產品除外）</span>
                    </div>
                  </div>
                  <div class="abs_box"><span>優惠</span><span>1</span></div>
                </div>
              </div>
              <div v-else class="new_info_content_items">
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/8279b13d1912c282.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/dd417005f534468c.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/df4c6a96fbb13ef9.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/9c26e58109a6de6d.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/5a5088a37e34f365.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/e5c4975daa297f62.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/cb0fcf90019e71a0.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2024/08/bfbcf123f2684b67.png"
                    alt=""
                  />
                </div>

                <div><img src="" alt="" /></div>
              </div>
            </div>
            <div>
              以上優惠政策，只針對65歲及以上長者，以及深圳愛康健口腔醫院內使用，于<span
                style="color: #fc1682"
                >2024年8月14日</span
              >開始執行。
            </div>
          </div>
        </div>
      </div>
      <div class="newsmodule smallPageCon">
        <div class="newsmodule-title">
          <div class="index_title">醫療券資訊</div>
          <div class="mewsmodule-btn">
            <NuxtLink to="/news/information">更多資訊 </NuxtLink>
          </div>
        </div>
        <div class="newsmodule-lists">
          <div
            @click="router.push(item.link)"
            class="list-in"
            v-for="item in newsmoduleLists"
            :key="item.id"
          >
            <div class="image">
              <img :title="item.name" :src="item.img" alt="" />
            </div>
            <h2 :title="item.name">{{ item.name }}</h2>
            <p :title="item.desc">{{ item.desc }}</p>
            <div class="btn">
              <PageAnimBtnTypeTwo
                str="查看全文"
                :link="item.link"
                :key="item.id"
              />
            </div>
          </div>
        </div>
      </div>
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar :langType="langCur" />
  </div>
</template>


<style lang="scss" scoped>
.new_info_health {
  position: relative;
  margin-top: 330px;
  margin-bottom: 220px;
}
.new_info_header {
  display: flex;
  justify-content: center;
  position: relative;
  & > div:nth-child(1) {
    position: absolute;
    z-index: 1;
    bottom: -35%;
    left: 16.5%;
  }
  color: var(--Theme-Color, #fc1682);
  text-align: justify;
  font-family: FakePearl;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 62.4px */
}
.new_info_content_bg {
  border-radius: 60px 60px var(--Count, 0px) var(--Count, 0px);
  background: linear-gradient(180deg, #fee6f1 -15.1%, #fff 68.08%);
}
.new_info_content {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  padding: 120px 0;
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 30px;
  & > div:nth-child(1) {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
  }
  & > div:nth-child(2) {
    margin-top: 60px;
    & > div:nth-child(1) {
      margin-bottom: 60px;
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
  & > div:nth-child(3) {
    margin-top: 70px;
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
.new_info_content_items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px 125px;
  & > div {
    width: 402px;
    position: relative;
    z-index: 5;
    & > div:nth-child(1) {
      border-radius: 30px;
      border: 2px solid #fc1682;
      background: #fff;
      box-shadow: 6px 6px 0px 0px rgba(252, 22, 130, 0.3);
      & > div:nth-child(1) {
        padding: 30px 0 15px;
        color: #14a033;
        text-align: center;
        font-family: FakePearl;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
      }
      & > div:nth-child(2) {
        box-sizing: border-box;
        padding: 20px 30px;
        border-radius: var(--Count, 0px) var(--Count, 0px) 30px 30px;
        background: var(--Pink-Pale, #fee6f1);
      }
    }

    & > div:nth-child(1) {
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        text-shadow: 0px 2px 0px var(--White, #fff);
        -webkit-text-stroke-width: 2;
        -webkit-text-stroke-color: #fff;
        font-family: 'Noto Sans HK';
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 56px */
        letter-spacing: 5.6px;
        i {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: 'Noto Sans HK';
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%;
          letter-spacing: 4.8px;
        }
      }
    }
  }
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      text-shadow: 0px 2px 0px var(--White, #fff);
      -webkit-text-stroke-width: 2;
      -webkit-text-stroke-color: #fff;
      font-family: 'Noto Sans HK';
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 56px */
      letter-spacing: 5.6px;
      & > div:nth-child(2) {
        & > span:nth-child(2) {
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
  & > div:nth-child(3) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      text-shadow: 0px 2px 0px var(--White, #fff);
      -webkit-text-stroke-width: 2;
      -webkit-text-stroke-color: #fff;
      font-family: 'Noto Sans HK';
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 56px */
      letter-spacing: 5.6px;
      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        & > span:nth-child(1) {
          color: var(--Theme-Color, #fc1682);
          font-family: 'Noto Sans HK';
          font-size: 60px;
          font-style: normal;
          font-weight: 900;
          line-height: 100%;
          letter-spacing: 9.6px;
          & > i {
            color: var(--Theme-Color, #fc1682);
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
          }
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 200%;
          letter-spacing: 3.2px;
          position: relative;
        }
        & > span:nth-child(2)::after {
          content: '';
          width: 100%;
          height: 2px;
          background: #4d4d4d;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 50%;
          transform: rotate(-5deg);
        }
      }
    }
  }
  & > div:nth-child(4) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      text-shadow: 0px 2px 0px var(--White, #fff);
      -webkit-text-stroke-width: 2;
      -webkit-text-stroke-color: #fff;
      font-family: 'Noto Sans HK';
      font-size: 35px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 56px */
      letter-spacing: 5.6px;
      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        & > span:nth-child(1) {
          color: var(--Theme-Color, #fc1682);
          font-family: 'Noto Sans HK';
          font-size: 60px;
          font-style: normal;
          font-weight: 900;
          line-height: 100%;
          letter-spacing: 9.6px;
          & > i {
            color: var(--Theme-Color, #fc1682);
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
          }
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 200%;
          letter-spacing: 3.2px;
          position: relative;
        }
        & > span:nth-child(2)::after {
          content: '';
          width: 100%;
          height: 2px;
          background: #4d4d4d;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 50%;
          transform: rotate(-5deg);
        }
      }
    }
  }
  & > div:nth-child(5) {
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        white-space: nowrap;
        & > span:nth-child(1) {
          text-align: center;
          text-shadow: 0px 2px 0px var(--White, #fff);
          -webkit-text-stroke-width: 2;
          -webkit-text-stroke-color: #fff;
          font-family: 'Noto Sans HK';
          font-size: 45px;
          i {
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
          }
        }
        & > span:nth-child(2) {
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
  & > div:nth-child(6) {
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        padding-top: 48px;
        padding-bottom: 68px;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          & > span:nth-child(1) {
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
            letter-spacing: 9.6px;
            font-family: 'Noto Sans HK';
            & > i {
              color: var(--Grey-Deep, #4d4d4d);
              font-size: 30px;
              font-style: normal;
              font-weight: 500;
              line-height: 160%; /* 48px */
              letter-spacing: 4.8px;
            }
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          margin-top: 10px;
          & > span:nth-child(1) {
            color: var(--Theme-Color, #fc1682);
            font-family: 'Noto Sans HK';
            font-size: 60px;
            font-style: normal;
            font-weight: 900;
            line-height: 100%;
            letter-spacing: 9.6px;
            & > i {
              color: var(--Theme-Color, #fc1682);
              text-align: center;
              text-shadow: 0px 2px 0px var(--White, #fff);
              -webkit-text-stroke-width: 2;
              -webkit-text-stroke-color: #fff;
              font-family: 'Noto Sans HK';
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 160%; /* 48px */
              letter-spacing: 4.8px;
            }
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 200%;
            letter-spacing: 3.2px;
            position: relative;
          }
          & > span:nth-child(2)::after {
            content: '';
            width: 100%;
            height: 2px;
            background: #4d4d4d;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 50%;
            transform: rotate(-5deg);
          }
        }
        & > div:nth-child(3) {
          & > span:nth-child(1) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
            & > i {
              color: var(--Theme-Color, #fc1682);
              font-family: 'Noto Sans HK';
              font-size: 60px;
              font-style: normal;
              font-weight: 900;
              line-height: 160%;
              letter-spacing: 9.6px;
              & > i {
                font-size: 30px;
                letter-spacing: 4.8px;
              }
            }
          }
          & > span:nth-child(2) {
            color: var(--Grey-Deep, #4d4d4d);
            text-align: center;
            text-shadow: 0px 2px 0px var(--White, #fff);
            -webkit-text-stroke-width: 2;
            -webkit-text-stroke-color: #fff;
            font-family: 'Noto Sans HK';
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 48px */
            letter-spacing: 4.8px;
            & > i {
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
    }
  }
  & > div:nth-child(7) {
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        & > span:nth-child(1) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          text-shadow: 0px 2px 0px var(--White, #fff);
          -webkit-text-stroke-width: 2;
          -webkit-text-stroke-color: #fff;
          font-family: 'Noto Sans HK';
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 48px */
          letter-spacing: 4.8px;
          & > i {
            color: var(--Theme-Color, #fc1682);
            font-family: 'Noto Sans HK';
            font-size: 45px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
            letter-spacing: 7.2px;
          }
        }
        & > span:nth-child(2) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          text-shadow: 0px 2px 0px var(--White, #fff);
          -webkit-text-stroke-width: 2;
          -webkit-text-stroke-color: #fff;
          font-family: 'Noto Sans HK';
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 48px */
          letter-spacing: 4.8px;
          & > i {
            color: var(--Theme-Color, #fc1682);
          }
        }
      }
    }
  }
  & > div:nth-child(8) {
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        // align-items: flex-end;
        // justify-content: center;
        & > span:nth-child(1) {
          color: var(--Grey-Deep, #4d4d4d);
          text-align: center;
          text-shadow: 0px 2px 0px var(--White, #fff);
          -webkit-text-stroke-width: 2;
          -webkit-text-stroke-color: #fff;
          font-family: 'Noto Sans HK';
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 48px */
          letter-spacing: 4.8px;
          & > i {
            color: var(--Theme-Color, #fc1682);
            font-family: 'Noto Sans HK';
            font-size: 45px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
            letter-spacing: 7.2px;
          }
          & > i:nth-child(2) {
            font-size: 30px;
            letter-spacing: 4.8px;
          }
        }
        & > span:nth-child(2) {
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
  .abs_box {
    position: absolute;
    top: -16px;
    left: -16px;
    z-index: 2;
    background: url('https://static.cmereye.com/imgs/2024/08/804246100e3ed97f.png')
      no-repeat;
    width: 86px;
    height: 86px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  }
}
.new_info_content_items > div:nth-child(6) {
  grid-row: 2 / span 3;
  grid-column: 3 / span 1;
}
.navbar-content {
  display: none;
}
.health-care-voucher-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .lang {
    display: flex;
    span {
      cursor: pointer;
      color: var(--textColor);
      &:hover {
        color: var(--indexColor1);
      }
      &:not(:last-child) {
        &::after {
          content: '|';
          display: inline-block;
          color: var(--textColor);
          margin: 0 10px;
        }
      }
    }
  }
}
.new_defule {
  color: #4d4d4d;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  letter-spacing: 4px;
}
.new_step {
  background: linear-gradient(
    180deg,
    rgba(252, 22, 130, 0.4) -68.47%,
    rgba(252, 22, 130, 0.28) -68.46%,
    rgba(255, 168, 198, 0) 63.88%
  );
  .resolve_step {
    max-width: 960px;
    margin: 0 auto;
    padding: 42px 195.91px;
    position: relative;
    & > div {
      & > div:nth-child(1) {
        color: #fc1682;
        text-align: center;
        font-family: FakePearl;
        font-size: 36.075px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 57.72px */
        margin-bottom: 35px;
      }
      box-sizing: border-box;
      padding: 36px 25px;
      border-radius: 18.037px;
      background: #fff;
      box-shadow: 3.607px 3.607px 7.215px 0px rgba(252, 22, 130, 0.2);
    }
  }
  .resolve_step::after {
    content: '';
    position: absolute;
    left: 15%;
    bottom: 20px;
    width: 167.765px;
    height: 212.842px;
    background: url('https://static.cmereye.com/imgs/2024/08/b952133d20d8754c.png')
      no-repeat;
    z-index: 99;
  }
  .step_shade {
    position: absolute;
    width: 519.085px;
    height: 1004.393px;
    border-radius: 7.21px;
    background: #fff;
    top: 170px;
  }
  .step_active {
    animation-fill-mode: forwards;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-name: mask;
  }
  .step_pink {
    color: var(--indexColor1);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
    max-width: 960px;
    margin: 100px auto;
  }
}
@keyframes mask {
  // 从上到下 失去高度
  0% {
    top: auto;
    bottom: 75px;
    height: 1004.393px;
  }
  98% {
    height: 0;
    top: auto;
    bottom: 75px;
  }
  100% {
    display: none;
  }
}
.new_address_pink {
  color: var(--indexColor1);
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 4px;
  word-break: break-word;
}
.new_address_gray {
  color: #4d4d4d;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  letter-spacing: 4px;
}
.new_address > div {
  span:nth-child(1) {
    color: #4d4d4d;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
  }
  span:nth-child(2) {
    color: var(--indexColor1);
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 4px;
  }
}
.new_two_img {
  width: 100%;
  display: flex;
  gap: 0 10px;
  & > img {
    flex: 1;
    width: 50%;
  }
}
.new_table {
  margin: 98px auto 100px;
  max-width: 1100px;
}
.new_table_title {
  h1 {
    color: #fc1682;
    text-align: center;
    font-family: FakePearl;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 48px */
    letter-spacing: 3px;
  }
}
.new_table_tbody {
  display: flex;
  flex-direction: column;
  background: var(--Pink-Mid, #fee6f1);
  border-radius: 20px;
  overflow: hidden;
  width: 1100px;
  margin-left: -70px;
  & > div {
    display: flex;
    gap: 0 4px;
    border-bottom: 4px solid #fff;
    & > div:nth-child(1) {
      width: 315px;
      border-right: 4px solid #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-family: FakePearl;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 38.4px */
      background: var(--Pink-Mid, #fdd3e3);
      & > span {
        color: #fc1682;
        text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
          2px 2px 0 #fff;
      }
    }
    & > div:nth-child(2) {
      flex: 6;
      display: flex;
      flex-direction: column;
      padding: 30px 25px;
      & > span {
        display: flex;
        color: #4d4d4d;
        font-family: FakePearl;
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 30.4px */
        letter-spacing: 1px;
        & > i {
          margin-right: 5px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--Theme-Color, #fc1682);
          color: #fff;
          font-family: FakePearl;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%; /* 38.4px */
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        margin-bottom: 12px;
      }
      & > p {
        color: #808080;
        font-family: FakePearl;
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 30.4px */
        letter-spacing: 1px;
      }
    }
  }
  & > div:nth-of-type(4) {
    border-bottom: none;
  }
}
.health-care-voucher {
  padding-top: 100px;
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 44px;
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
@keyframes btnAnim {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
    width: calc(100% + 35px);
    height: calc(100% + 35px);
    border: 10px solid #b9d9fc;
  }
  20% {
    border: 0px solid #b9d9fc;
    opacity: 0;
    width: calc(100% + 35px);
    height: calc(100% + 35px);
  }
  100% {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
@keyframes btnAnimHover {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
    width: calc(100% + 35px);
    height: calc(100% + 35px);
    border: 10px solid #fcd1b9;
  }
  20% {
    border: 0px solid #fcd1b9;
    opacity: 0;
    width: calc(100% + 35px);
    height: calc(100% + 35px);
  }
  100% {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
.content {
  width: 100%;
  max-width: 960px;
  margin: 60px auto;
  & > div {
    margin-bottom: 45px;
    &.nob {
      margin-bottom: 0;
    }
    &.imgLists {
      margin: 5px 0;
      section {
        display: flex;
        flex: 1;
        img {
          width: 100%;
        }
      }
      .imgItem:not(:last-child) {
        margin-right: 10px;
      }
    }
    &.imgStyle {
      section {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    &.imgone {
      margin: 5px 0;
    }
    &.lastpa {
      p {
        font-size: 14px;
        letter-spacing: 1.5px;
      }
    }
    &.btn {
      display: flex;
      justify-content: center;
      margin: 80px auto 0;
      max-width: calc(100% - 30px);
      a {
        font-size: 35px;
        line-height: 160%;
        background: #00aeff;
        padding: 10px 35px;
        border-radius: 50px;
        color: #fff;
        transition: all 0.3s;
        position: relative;
        box-shadow: 3px 3px 12.4px 0px rgba(0, 174, 255, 0.5);
        text-align: center;
        &:hover {
          background: #ff9900;
          box-shadow: 3px 3px 12.4px 0px rgba(255, 153, 0, 0.5);
          &::before {
            animation: btnAnimHover 5s linear infinite;
          }
        }
        &::after {
          content: '';
          position: absolute;
          right: -15px;
          top: 30%;
          background: url(https://static.cmereye.com/imgs/2024/02/e750f6e517ea0dee.png);
          background-size: 100% 100%;
          width: 50px;
          height: 60px;
        }
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 10px solid var(--Blue-Light, #b9d9fc);
          animation: btnAnim 5s linear infinite;
          border-radius: 100px;
          z-index: -1;
        }
      }
    }
    &.tags {
      margin-top: 60px;
      span {
        font-size: 20px;
        line-height: 160%;
        margin-right: 20px;
        color: var(--textColor);
        border-bottom: 1px solid var(--textColor);
      }
    }
  }
  h1 {
    line-height: 130%;
    color: var(--indexColor1);
    text-align: center;
    color: var(--Theme-Color, #fc1682);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 3px;
  }
  h2 {
    font-size: 30px;
    line-height: 160%;
    color: var(--indexColor1);
  }
  h3 {
    font-size: 28px;
    line-height: 160%;
    color: var(--textColor);
  }
  ul {
    margin: 10px 0;
    li {
      font-size: 20px;
      line-height: 160%;
      color: var(--textColor);
      &::before {
        content: '·';
        margin-right: 10px;
      }
    }
  }
  p {
    font-size: 20px;
    line-height: 160%;
    color: var(--textColor);
    text-align: justify;
    letter-spacing: 2px;
    &.english {
      text-align: initial;
    }
    section {
      display: initial;
    }
    span {
      &.indexColor {
        color: var(--indexColor1);
      }
    }
    a {
      word-break: break-all; /* 允许在单词内换行 */
      white-space: normal;
      &.indexColor {
        color: var(--indexColor1);
      }
    }
    &.time {
      font-size: 28px;
      line-height: 160%;
    }
  }
}
.newsmodule {
  &-title {
    display: flex;
    justify-content: space-between;
    .mewsmodule-btn {
      & > a {
        // float: right;
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
  &-lists {
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
      display: block;
      .image {
        width: 100%;
        height: 0;
        padding-bottom: 100%;
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
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px;
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
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px;
        flex: 1;
      }
      .btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .newsmodule {
    &-title {
      .mewsmodule-btn {
        & > a {
          font-size: 1.5625vw;
          &::after {
            font-size: 1.4583vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .new_info_health {
    position: relative;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .new_info_header {
    display: flex;
    justify-content: center;
    position: relative;
    & > div:nth-child(1) {
      position: absolute;
      z-index: 1;
      bottom: -40%;
      left: -10%;
      width: 64.001px;
      height: 81.128px;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
    & > div:nth-child(2) {
      transform: translateX(30%);
    }
    color: var(--Theme-Color, #fc1682);
    text-align: justify;
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
    max-width: 200px;
    margin-left: 80px;
  }
  .new_info_content {
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    padding: 30px;
    max-width: 1450px;
    margin: 0 auto;
    margin-top: 10px;
    & > div:nth-child(1) {
      color: var(--Grey-Deep, #4d4d4d);
      font-family: 'Noto Sans HK';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 32px */
      letter-spacing: 1.6px;
    }
    & > div:nth-child(2) {
      margin-top: 30px;
      & > div:nth-child(1) {
        margin-bottom: 20px;
        color: var(--Theme-Color, #fc1682);
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
      }
    }
    & > div:nth-child(3) {
      margin-top: 0;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: 'Noto Sans HK';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 200%; /* 32px */
      letter-spacing: 1.6px;
    }
  }
  .new_info_content_bg {
    border-radius: 20px 20px var(--Count, 0px) var(--Count, 0px);
    background: linear-gradient(180deg, #FEE6F1 -23.02%, #FFF 58.97%);
    position: relative;
    z-index: 5;
  }
  .new_info_content_items {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    & > div {
      margin: 0;
      & > div:nth-child(2) {
        margin: 0;
      }
    }
  }
  .new_info_content_items > div:nth-child(6) {
    grid-row: 3 / span 3;
    grid-column: 3 / span 3;
  }
  @keyframes mask {
    // 从上到下 失去高度
    0% {
      top: auto;
      bottom: 75px;
      height: 1004.393px;
    }
    98% {
      height: 0;
      top: auto;
      bottom: 75px;
    }
    100% {
      display: none;
    }
  }
  .new_step {
    background: linear-gradient(
      180deg,
      rgba(252, 22, 130, 0.4) -68.47%,
      rgba(252, 22, 130, 0.28) -68.46%,
      rgba(255, 168, 198, 0) 63.88%
    );
    .resolve_step {
      max-width: 960px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 40px 30px;
      position: relative;
      & > div {
        & > div:nth-child(1) {
          color: #fc1682;
          text-align: center;
          font-family: FakePearl;
          font-size: 36.075px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 57.72px */
          margin-bottom: 35px;
        }
        box-sizing: border-box;
        padding: 36px 25px;
        border-radius: 18.037px;
        background: #fff;
        box-shadow: 3.607px 3.607px 7.215px 0px rgba(252, 22, 130, 0.2);
      }
    }
    .resolve_step::after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 20px;
      width: 95px;
      height: 118px;
      background: url('https://static.cmereye.com/imgs/2024/08/b952133d20d8754c.png')
        no-repeat;
      background-size: cover;
      z-index: 99;
    }
    .step_shade_mb {
      display: none !important;
      position: absolute;
      width: 76.5vw;
      height: 148.53vw;
      border-radius: 10px;
      background: #fff;
      top: 36vw;
    }
    .step_active_mb {
      // 播放一次 消失
      animation-fill-mode: forwards;
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: mask;
    }
    .step_pink {
      color: var(--indexColor1);
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
      letter-spacing: 4px;
      max-width: 960px;
      margin: 50px auto;
      box-sizing: border-box;
      padding: 0 30px;
    }
  }
  .new_defule {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 32px */
    letter-spacing: 1.6px;
    box-sizing: border-box;
    padding: 0 30px;
  }
  .new_address {
    padding: 0 30px;
    & > div {
      span:nth-child(1) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
      }
      span:nth-child(2) {
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
  .new_address_pink {
    color: var(--indexColor1);
    font-family: 'Noto Sans HK';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;
    letter-spacing: 1.6px;
    word-break: break-all;
  }
  .new_address_gray {
    color: var(--Grey-Deep, #4d4d4d);
    font-family: 'Noto Sans HK';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 32px */
    letter-spacing: 1.6px;
  }
  .health-care-voucher-top {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    .lang {
      width: calc(100% - 30px);
      // margin-right: 30px;
      margin-left: 30px;
      // margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .health-care-voucher {
    position: relative;
    z-index: 1;
    padding-top: 0px;
  }
  .tabNav {
    padding: 23px 30px 0;
    font-size: 1rem;
    margin-top: 0px;
  }
  .content {
    margin: 30px auto 0;
    & > div {
      margin-bottom: 35px;
      &.imgLists {
        margin: 10px 0;
      }
      &.imgListsMB {
        // display: flex;
        padding: 0 30px;
        section {
          flex-direction: column;
          .imgItem {
            width: 100%;
            img {
              width: 100%;
            }
          }
          .imgItem:not(:last-child) {
            margin-right: 0px;
            margin-bottom: 8px;
          }
        }
      }
      &.imgone {
        margin: 10px 0;
      }
      &.pa {
        span {
          display: block;
          letter-spacing: 1.5px;
        }
      }
      &.lastpa {
        p {
          font-size: 12px;
        }
      }
      &.btn {
        max-width: 100%;
        margin-top: 30px;
        padding: 30px 0;
        overflow: hidden;
        a {
          font-size: 26px;
          padding: 5px 20px;

          &::after {
            right: -10px;
            top: 45%;
            width: 28px;
            height: 33px;
          }
        }
      }
      &.tags {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 40px;
        margin-bottom: 0;
        span {
          font-size: 16px;
          border-bottom: 0;
          text-decoration-line: underline;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    h1 {
      font-size: 20px;
      color: var(--indexColor1);
      padding: 0 30px;
    }
    h2 {
      font-size: 20px;
      line-height: 200%;
      padding: 0 30px;
    }
    h3 {
      font-size: 20px;
      padding: 0 30px;
    }
    ul {
      padding: 0 30px;
      li {
        font-size: 16px;
        line-height: 200%;
      }
    }
    p {
      padding: 0 30px;
      font-size: 16px;
      line-height: 200%;
      letter-spacing: 3px;
      text-align: justify;
      &.time {
        font-size: 16px;
        margin-top: 20px;
      }
      a {
        text-align: initial;
        display: block;
        letter-spacing: 1px;
      }
    }
  }
  .newsmodule {
    position: relative;
    margin-top: 60px;
    &-title {
      .mewsmodule-btn {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 200%);
        & > a {
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
    }
    &-lists {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 30px;
    }
  }
  .new_table_title h1 {
    color: #fc1682;
    text-align: center;
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 1px;
  }
  .new_table {
    box-sizing: border-box;
    padding: 0 15px;
  }
  .new_table_tbody {
    width: 100%;
    margin-left: 0;
    & > div {
      display: flex;
      gap: 0 2px;
      border-bottom: 2px solid #fff;
      & > div:nth-child(1) {
        flex: 1;
        width: 110px;
        min-width: 110px;
        box-sizing: border-box;
        padding: 0 20px;
        border-right: 2px solid #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 65px;
        text-align: center;
        -webkit-text-stroke-width: 2;
        -webkit-text-stroke-color: #fff;
        font-family: FakePearl;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 24px */
        & > span {
          color: #fc1682;
          text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
            1px 1px 0 #fff;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        padding: 20px 0 20px 20px;
        flex: 1;
        max-width: 235px;
        & > span {
          display: flex;
          color: #4d4d4d;
          font-family: FakePearl;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 19.2px */
          letter-spacing: 1.2px;
          letter-spacing: 1px;
          & > i {
            margin-right: 2px;
            width: 18px;
            height: 18px;
            min-width: 18px;
            border-radius: 50%;
            background: var(--Theme-Color, #fc1682);
            color: #fff;
            font-family: FakePearl;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 130%; /* 20.8px */

            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
          }
          margin-bottom: 10px;
        }
        & > p {
          color: #808080;
          font-family: FakePearl;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 19.2px */
          letter-spacing: 1.2px;
          padding: 0;
        }
      }
    }
    & > div:nth-of-type(4) {
      border-bottom: none;
    }
  }
  .mb_new_defule {
    & > span {
      margin-left: 30px;
    }
  }
}
</style>
