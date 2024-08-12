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
onMounted(() => {
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
        <div>
          <img
            loading="lazy"
            src="https://static.cmereye.com/imgs/2024/08/647df5e8d4744f56.png"
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
            網上查詢(https://bit.ly/%E6%84%9B%E5%BA%B7%E5%81%A5%E9%95%B7%E8%80%85%E9%86%AB%E7%99%82%E5%88%B8%E9%A0%90%E7%B4%84)
          </a>
        </div>
        <div class="new_defule">
          <span class="new_address_gray">或致電</span
          ><span class="new_address_pink"> 69338128 </span
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
  background: var(--Pink-Mid, #fdd3e3);
  border-radius: 20px;
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
          text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
            2px 2px 0 #fff;
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
