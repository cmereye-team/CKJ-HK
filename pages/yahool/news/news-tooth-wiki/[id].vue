<script lang="ts" setup>
import { ar } from 'element-plus/es/locale'
import { renderingDome } from '~/assets/yahool/js/commonFun'
const { t } = useLang()
const route = useRoute()
const router = useRouter()
let _nid = route.params.id
let coverageDeatail: any = ref({
  logo: '',
  link: '',
  id: '',
  img: '',
  desc: '',
  name: '',
  time: '',
  tags: '',
  author: '',
  visits: '',
  source: '',
  news_tag: '',
  content: '',
  pics: [],
  btnText: '',
  btnLink: '',
  hashtag: [],
  keywords: '',
  description: '',
  nextId: '',
  nextTitle: '',
  preId: '',
  preTitle: '',
})
useHead({
  title: '牙齒百科',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: () => {
        let _description =
          '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。'
        return coverageDeatail.value.description || _description
      },
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content: () => {
        let _keywords =
          '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健'
        return coverageDeatail.value.keywords || _keywords
      },
    },
    {
      property: 'og:title',
      content: () => {
        return coverageDeatail.value.name
      },
    },
    {
      property: 'og:description',
      content: () => {
        return coverageDeatail.value.desc
      },
    },
    {
      property: 'og:site_name',
      content: '牙齒百科 | 深圳愛康健口腔醫院',
    },
    {
      property: 'og:url',
      content: () => {
        return (
          'https://www.ckjhk.com/news/news-tooth-wiki/' +
          coverageDeatail.value.id
        )
      },
    },
    {
      property: 'og:image',
      content: () => {
        return coverageDeatail.value.img
      },
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/06/99b4542e84f6fd1e.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/06/cb4c9a34a7e67357.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: [],
}

let pageStatus = ref('loading') // loading, success, error
// let pageLoading = ref(false)

function copySpecifiedText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
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
    alert('Clipboard API is not supported by your browser.')
  }
}
const copyText = () => {
  copySpecifiedText(window.location.href)
}
const formatDate = (dateString) => {
  var date = new Date(dateString)
  var year = date.getFullYear()
  var month = ('0' + (date.getMonth() + 1)).slice(-2) // getMonth() is zero-based
  var day = ('0' + date.getDate()).slice(-2)
  return year + '-' + month + '-' + day
}
const getDetail = async (_nid) => {
  pageStatus.value = 'loading'
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/content/${_nid}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (_res.data.value === null) {
      pageStatus.value = 'error'
      return
    }
    if (res) {
      let _data = res.data
      let _Showpics = _data.pics.split(',')[0] === ''
      coverageDeatail.value = {
        id: _data.id || '',
        logo:
          (_data.ext_news_logo.indexOf('/static/upload/image') !== -1
            ? `https://admin.ckjhk.com${_data.ext_news_logo}`
            : _data.ext_news_logo) || '',
        link: '',
        img:
          (_data.ico.indexOf('/static/upload/image') !== -1
            ? `https://admin.ckjhk.com${_data.ico}`
            : _data.ico) || '',
        desc: _data.ext_news_desc || '',
        name: _data.title || '',
        time: formatDate(_data.update_time) || '',
        tags: _data.tags || '',
        author: _data.author || '',
        visits: _data.visits || '',
        source: _data.source || '',
        news_tag: _data.ext_news_tag || '',
        content: _data.content || '',
        pics:
          (!_Showpics &&
            _data.pics.split(',').map((tt) => {
              return (
                (tt.indexOf('/static/upload/image') !== -1
                  ? `https://admin.ckjhk.com${tt}`
                  : tt) || ''
              )
            })) ||
          [],
        btnText: _data.ext_news_btn_text || '',
        btnLink: _data.ext_news_btn_link || '',
        hashtag: _data.ext_news_hashtag.split(',') || [],
        keywords: _data.keywords || '',
        description: _data.description || '',
        nextId: _data.nextId || '',
        nextTitle: _data.nextTitle || '',
        preId: _data.preId || '',
        preTitle: _data.preTitle || '',
      }
      changeassociationData(JSON.parse(_data.ext_news_association || '[]'))
      coverageDeatail.value.content = renderingDome(
        coverageDeatail.value.content,
        t
      )
    }
  } catch {
    pageStatus.value = 'error'
  }
  pageStatus.value = 'success'
}
const toassociation = (_id) => {
  router.push(`/yahool/news/news-tooth-wiki/${_id}`)
}

const changeassociationData = (_data: any) => {
  associationData.value.isshowprev = coverageDeatail.value.preId !== ''
  associationData.value.isshownext = coverageDeatail.value.nextId !== ''
  associationData.value.prev_id = coverageDeatail.value.preId
  associationData.value.next_id = coverageDeatail.value.nextId
  associationData.value.prev_title = coverageDeatail.value.preTitle
  associationData.value.next_title = coverageDeatail.value.nextTitle
  if (Array.isArray(_data)) {
    _data.forEach((item) => {
      if (item.type === 'association') {
        associationData.value.lists = [...item.lists]
      }
    })
  }
}

let associationData = ref({
  isshowprev: false,
  isshownext: false,
  prev_id: '',
  prev_title: '',
  next_id: '',
  next_title: '',
  lists: <any>[],
})

let topimgSwiperRef = {
  slideToLoop: (a) => {},
}
const settopimgSwiperRef = (swiper: any) => {
  topimgSwiperRef = swiper
}
let topimgCur = ref(1)
const handleLineCur = (_value) => {
  topimgSwiperRef.slideToLoop(_value - 1)
  topimgCur.value = _value
}
const changetopimg = (swiper: any) => {
  topimgCur.value = (swiper.realIndex ? Number(swiper.realIndex) : 0) + 1
}

const closeAd = ref(false)
let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  setTimeout(() => {
    getDetail(_nid)
  })

  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  setTimeout(() => {
    if (route.path == '/yahool/news/news-tooth-wiki/219') {
      const img_id_219 = document.getElementById('img_id_219')
      if (img_id_219) {
        img_id_219.insertAdjacentHTML(
          'afterend',
          `
          <style>body{margin:0}.box-bg-width{max-width:960px;margin:100px auto 0;display:flex;flex-direction:column;gap:115px 0}.explain{color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:30px;font-style:normal;font-weight:400;line-height:160%;letter-spacing:3px}.blue-one,.carmine-one{position:relative}.blue-float_box,.carmine-float_box{border-radius:83.478px 83.478px 5.565px 83.478px;border:5.565px solid var(--Theme-Color,#fc1682);background:var(--White,#fff);width:140px;height:140px;position:absolute;top:-6%;left:20%;display:flex;flex-direction:column}.blue-float_box>span:nth-child(1),.carmine-float_box>span:nth-child(1){color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%}.blue-float_box>span:nth-child(2),.carmine-float_box>span:nth-child(2){color:var(--Theme-Color,#fc1682);text-align:center;font-family:FakePearl;font-size:75px;font-style:normal;font-weight:400;line-height:80%}.carmine-float_box{border:5.565px solid var(--Blue-Deep,#00aeff)}.carmine-float_box>span:nth-child(2){color:var(--Blue-Deep,#00aeff)}.blue-table,.carmine-table{border-radius:55.652px;overflow:hidden}.blue-table-header{border-radius:55.652px 55.652px var(--Count,0) var(--Count,0);background:var(--Blue-Deep,#00aeff);color:var(--White,#fff);text-align:center;font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%;box-sizing:border-box;padding:28px;border-bottom:5.57px solid #fff}.carmine-table-header{border-radius:55.652px 55.652px var(--Count,0) var(--Count,0);background:var(--Theme-Color,#fc1682);color:var(--White,#fff);text-align:center;font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%;box-sizing:border-box;padding:28px;border-bottom:5.57px solid #fff}.blue-table-body,.carmine-table-body{display:grid;gap:5.57px 0;grid-template-columns:repeat(1,1fr)}.blue-table-body>div,.carmine-table-body>div{display:flex;gap:0 5.57px}.blue-table-body>div>div:nth-child(1),.carmine-table-body>div>div:nth-child(1){flex:3;background:var(--Blue-Lightest,#e6f6ff);color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%;display:flex;flex-direction:column;justify-content:center;align-items:center}.carmine-table-body>div>div:nth-child(1){background:var(--Pink-Pale,#fee6f1)}.blue-table-body>div>div:nth-child(2),.carmine-table-body>div>div:nth-child(2){flex:7;background:var(--Blue-Lightest,#e6f6ff);display:flex;align-items:flex-end;box-sizing:border-box;padding:36px 34px;position:relative}.carmine-table-body>div>div:nth-child(2){background:var(--Pink-Pale,#fee6f1)}.blue-table-body>div>div:nth-child(2)>div:nth-child(1),.blue-table-body>div>div:nth-child(2)>div:nth-child(2),.carmine-table-body>div>div:nth-child(2)>div:nth-child(1),.carmine-table-body>div>div:nth-child(2)>div:nth-child(2){color:var(--Grey-Deep,#4d4d4d);font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%;position:relative}.blue-table-body>div>div:nth-child(2)>div:nth-child(2)::after,.carmine-table-body>div>div:nth-child(2)>div:nth-child(2)::after{content:'';position:absolute;display:inline-block;width:100%;height:3px;background:#00aeff;transform:rotate(-8deg) translateY(-50%);left:0;top:50%}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p{margin:0;white-space:nowrap}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p>i,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p>i{color:var(--Theme-Color,#fc1682);font-family:FakePearl;font-size:40px;font-style:normal;font-weight:500;line-height:160%}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p>span,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p>span{color:var(--Theme-Color,#fc1682);font-family:FakePearl;font-size:75px;font-style:normal;font-weight:400;line-height:130%;white-space:nowrap}.blue-table-body>div>div:nth-child(2)>div:nth-child(2),.carmine-table-body>div>div:nth-child(2)>div:nth-child(2){position:absolute;bottom:36px;right:34px}@media screen and (max-width:768px){.box-bg-width{max-width:960px;width:100%;box-sizing:border-box;margin:100px auto 0;display:flex;flex-direction:column;gap:25.85vw 0}.explain{color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:400;line-height:160%;letter-spacing:.8vw;white-space:nowrap}.blue-float_box,.carmine-float_box{border-radius:30px 30px 2px 30px;border:2px solid var(--Theme-Color,#fc1682);background:var(--White,#fff);width:50px;height:50px;position:absolute;top:-6%;left:20%;display:flex;flex-direction:column}.blue-float_box>span:nth-child(1),.carmine-float_box>span:nth-child(1){color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:16px;font-style:normal;font-weight:500;line-height:150%}.blue-float_box>span:nth-child(2),.carmine-float_box>span:nth-child(2){color:var(--Theme-Color,#fc1682);text-align:center;font-family:FakePearl;font-size:28px;font-style:normal;font-weight:400;line-height:80%;letter-spacing:5.6px}.carmine-float_box{border:2px solid var(--Blue-Deep,#00aeff)}.carmine-float_box>span:nth-child(2){color:var(--Blue-Deep,#00aeff)}.blue-table,.carmine-table{border-radius:20px;overflow:hidden}.blue-table-header{border-radius:20px 20px var(--Count,0) var(--Count,0);background:var(--Blue-Deep,#00aeff);color:var(--White,#fff);text-align:center;font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:500;line-height:130%;box-sizing:border-box;padding:2.895vw;border-bottom:2px solid #fff}.carmine-table-header{border-radius:55.652px 55.652px var(--Count,0) var(--Count,0);background:var(--Theme-Color,#fc1682);color:var(--White,#fff);text-align:center;font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:500;line-height:130%;box-sizing:border-box;padding:2.895vw;border-bottom:2px solid #fff}.blue-table-body,.carmine-table-body{display:grid;gap:2px 0;grid-template-columns:repeat(1,1fr)}.blue-table-body>div,.carmine-table-body>div{display:flex;gap:0 2px}.blue-table-body>div>div:nth-child(1),.carmine-table-body>div>div:nth-child(1){flex:3;background:var(--Blue-Lightest,#e6f6ff);color:var(--Grey-Deep,#4d4d4d);text-align:center;font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:500;line-height:130%;display:flex;flex-direction:column;justify-content:center;align-items:center}.carmine-table-body>div>div:nth-child(1){background:var(--Pink-Pale,#fee6f1)}.blue-table-body>div>div:nth-child(2),.carmine-table-body>div>div:nth-child(2){flex:7;background:var(--Blue-Lightest,#e6f6ff);display:flex;align-items:flex-end;box-sizing:border-box;padding:3.768vw 3.47vw;position:relative}.carmine-table-body>div>div:nth-child(2){background:var(--Pink-Pale,#fee6f1)}.blue-table-body>div>div:nth-child(2)>div:nth-child(1),.blue-table-body>div>div:nth-child(2)>div:nth-child(2),.carmine-table-body>div>div:nth-child(2)>div:nth-child(1),.carmine-table-body>div>div:nth-child(2)>div:nth-child(2){color:var(--Grey-Deep,#4d4d4d);font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:500;line-height:130%;position:relative}.blue-table-body>div>div:nth-child(2)>div:nth-child(2)::after,.carmine-table-body>div>div:nth-child(2)>div:nth-child(2)::after{content:'';position:absolute;display:inline-block;width:100%;height:3px;background:#00aeff;transform:rotate(-8deg) translateY(-50%);left:0;top:50%}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p{margin:0;white-space:nowrap}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p>i,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p>i{color:var(--Theme-Color,#fc1682);font-family:FakePearl;font-size:4vw;font-style:normal;font-weight:500;line-height:130%}.blue-table-body>div>div:nth-child(2)>div:nth-child(1) p>span,.carmine-table-body>div>div:nth-child(2)>div:nth-child(1) p>span{color:var(--Theme-Color,#fc1682);font-family:FakePearl;font-size:7.536vw;font-style:normal;font-weight:400;line-height:130%;white-space:nowrap}.blue-table-body>div>div:nth-child(2)>div:nth-child(2),.carmine-table-body>div>div:nth-child(2)>div:nth-child(2){position:absolute;bottom:3.768vw;right:3.7vw}}</style><div class="box-bg-width"><div class="blue-one"><div class="blue-table"><div class="blue-table-header">保健+美白</div><div class="blue-table-body"><div><div><span>超聲波洗牙</span></div><div><div><p>成人超聲波洗牙</p><p><i>+</i>拋光<i>+</i>檢查</p><p><span>88</span>元/次</p></div><div class="original-cost">原價180元/次</div></div></div><div><div><span>菌斑導向</span> <span>專業洗牙</span></div><div><div><p>成人超聲波洗牙</p><p><i>+</i>拋光<i>+</i>檢查<i>+噴沙去漬</i></p><p><span>168</span>元/次</p></div><div class="original-cost">原價350元/次</div></div></div><div><div><span>高濃度</span> <span>藍光美白</span></div><div><div><p>提升3-5個色階*</p><p><span>980</span>元/全口</p></div><div class="original-cost">原價1800元/次</div></div></div></div></div><div class="explain">*有蛀牙或牙周問題要先治療才能做藍光美白</div><div class="blue-float_box"><span>優惠</span> <span>1</span></div></div><div class="carmine-one"><div class="carmine-table"><div class="carmine-table-header">改善牙形/牙色</div><div class="carmine-table-body"><div><div><span>E·max</span> <span>美學瓷貼面</span></div><div><div><p>前牙</p><p><span>1980</span><i>元/顆</i></p></div><div class="original-cost">原價3700元/顆</div></div></div><div><div><span>格萊美全瓷牙</span></div><div><div><p>後牙<i>+</i>防杜牙根牙齒碎裂</p><p><span>2380</span><i>元/顆</i></p></div><div class="original-cost">原價3000元/顆</div></div></div></div></div><div class="explain">優惠1及2有效至2024年8月31日</div><div class="carmine-float_box"><span>優惠</span> <span>2</span></div></div></div>
          `
        )
      }
    }
    if (route.path == '/yahool/news/news-tooth-wiki/271') {
      const img_table_271_2 = document.getElementById('img_table_271_2')
      if (img_table_271_2) {
        img_table_271_2.insertAdjacentHTML(
          'afterend',
          `
        <style>.box_271_2{max-width:960px;margin:0 auto;border-radius:20px;overflow:hidden}.title_box{color:#fff;font-family:FakePearl;font-size:35px;font-style:normal;font-weight:500;line-height:160%;padding:20px 0;text-align:center;border-radius:20px 20px var(--Count,0) var(--Count,0);border:2px solid #fff;background:#14a033;margin-bottom:2px}.clo_one,.clo_two{display:flex;flex-direction:column}.clo_one div{border:2px solid #fff;background:var(--Blue-Lightest,#e6f6ff)}.clo_two div{border:2px solid #fff;background:#dfede2;height:max-content}.clo_one,.clo_two{flex:1;gap:2px}.clo_one>div:nth-child(1),.clo_two>div:nth-child(1){color:#14a033;font-family:FakePearl;font-size:24px;font-style:normal;font-weight:500;line-height:140%;min-height:109px;display:flex;align-items:center;justify-content:center;text-align:center}.clo_one>div:nth-child(2),.clo_two>div:nth-child(2){color:#4d4d4d;font-family:FakePearl;font-size:17px;font-style:normal;font-weight:400;line-height:135%;box-sizing:border-box;padding:40px 16px 40px 10px;min-height:420px}.clo_one>div:nth-child(2) li,.clo_two>div:nth-child(2) li{margin-bottom:20px}.box_271_content{display:flex}.clo_one>div:nth-child(2) ul,.clo_two>div:nth-child(2) ul{list-style:disc}@media screen and (max-width:768px){.title_box{padding:2.65vw 0;font-size:4.8vw}.clo_one>div:nth-child(1),.clo_two>div:nth-child(1){font-size:2.65vw;min-height:18.4vw}.clo_one>div:nth-child(2),.clo_two>div:nth-child(2){font-size:2.13vw;padding:2.65vw 2.13vw 2.65vw 0;min-height:53.65vw}.clo_one>div:nth-child(2) ul,.clo_two>div:nth-child(2) ul{padding-left:5.03vw}.clo_one>div:nth-child(2) li,.clo_two>div:nth-child(2) li{margin-bottom:2.65vw}}</style><div class="box_271_2"><div class="title_box">醫療券涵蓋牙科服務</div><div class="box_271_content"><div class="clo_one"><div>預防性牙科項目</div><div><ul><li>牙齒檢查</li><li>牙科放射照（CT拍片／Ｘ光）</li><li>口腔衞生指導／口腔健康教育</li><li>洗牙／打磨</li><li>塗搽高濃度氟化物劑</li></ul></div></div><div class="clo_two"><div>跟進／監察<br>慢性病症牙科項目</div><div><ul><li>覆檢假牙托／牙橋／種植體</li><li>治理顳下頷關節（牙骹）病症／痛症</li><li>治理蛀牙，包括補牙、脫牙、杜牙根（牙髓治療）</li><li>治理牙周病，包括進階牙周治療</li></ul></div></div><div class="clo_one"><div>治理急性<br>病症牙科項目</div><div><ul><li>牙根刮治／清創</li><li>牙髓摘除</li><li>小型口腔手術</li><li>處方藥物</li></ul></div></div><div class="clo_two"><div>復康性牙科項目</div><div><ul><li>洞內嵌體／高嵌體</li><li>鑲配人造牙冠／牙橋</li><li>鑲配假牙托</li><li>種植牙</li></ul></div></div></div></div>
          `
        )
      }
    }
  }, 3000)
})

// const articlePage = ref()
// const articlePageIn = ref()
// onUpdated(() => {
//   articlePageIn.value = document.querySelector('.articlePage-in')
//   articlePage.value = document.querySelector('.articlePage')

//   window.addEventListener('scroll', function () {
//     let scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop
//     let documentHeight = articlePageIn.value.offsetHeight - scrollTop - 440
//     if (documentHeight < 200) {
//       getDetail(coverageDeatail.value.preId)
//     }
//   })
// })

let imgcur = ref(0)

const handlegetData = async () => {
  await getDetail(_nid)
}

if (process.server) {
  getDetail(_nid)
}
</script>

<template>
  <div>
    <YahooPageHeader class="yahoo_header" :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor articlePage">
      <div class="index_title pageCon articlePage-title">牙齒百科</div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link
          :to="'/yahool'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <nuxt-link :to="'/yahool/news/tooth-wiki'">
          <span :title="'牙齒百科'">牙齒百科</span>
        </nuxt-link>
        <span>{{ coverageDeatail.name }}</span>
      </div>
      <!-- <div class="is_new_tooth_wiki" v-if="!closeAd">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/08/e76f7c7e81a0f86e.png"
            alt=""
          />
        </div>
        <div @click="closeAd = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
              fill="#AAAAAA"
            />
          </svg>
        </div>
      </div> -->
      <div
        class="articlePage-in"
        v-if="pageStatus !== 'error'"
        v-loading="pageStatus === 'loading'"
      >
        <div class="content-topimg" v-if="coverageDeatail.pics.length">
          <Swiper @swiper="settopimgSwiperRef" @slideChange="changetopimg">
            <Swiper-slide
              v-for="(topimg, topimgIndex) in coverageDeatail.pics"
              :key="topimgIndex"
            >
              <img :src="topimg" alt="" />
            </Swiper-slide>
          </Swiper>
          <div
            class="content-topimg-line"
            :style="{
              'max-width':
                coverageDeatail.pics.length < 5
                  ? `${50 * coverageDeatail.pics.length}px`
                  : '330px',
            }"
            v-if="coverageDeatail.pics.length > 1"
          >
            <YahooPageSwiperPointLine
              :latestNewsNum="coverageDeatail.pics.length"
              :latestNewsCurrent="topimgCur"
              @changeLineCur="handleLineCur"
            ></YahooPageSwiperPointLine>
          </div>
        </div>
        <div class="content-topimg" v-else>
          <img
            :src="coverageDeatail.img"
            :alt="coverageDeatail.name"
            :title="coverageDeatail.name"
          />
        </div>
        <div class="content-title">
          <h1>{{ coverageDeatail.name }}</h1>
        </div>
        <div class="content" v-html="coverageDeatail.content"></div>
        <div class="content-bbtn" v-if="coverageDeatail.btnText !== ''">
          <div class="content-bbtn-in">
            <YahooPageAnimBtnTypeTwo
              :link="coverageDeatail.btnLink"
              :str="coverageDeatail.btnText"
            />
            <img
              class="content-bbtn-in-img"
              src="@/assets/images/icon_35.svg"
              alt=""
            />
          </div>
        </div>
        <div class="content-hashtag">
          <div
            class="content-hashtag-in"
            v-for="(hashtagItem, hashtagIndex) in coverageDeatail.hashtag"
            :key="hashtagIndex"
          >
            {{ hashtagItem }}
          </div>
        </div>
        <div class="content-bdetail">
          <div class="content-bdetail-in">
            <div class="context">
              <!-- <div>資料來源︰<a :href="coverageDeatail.source">原文鏈接</a></div> -->
              <div>瀏覽次數︰{{ coverageDeatail.visits || 0 }}</div>
              <div>更新時間︰{{ coverageDeatail.time }}</div>
              <div class="righeBox">
                <span class="copy" title="複製鏈接" @click="copyText"></span>
                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/news/news-tooth-wiki/${_nid}`"
                  target="_block"
                  class="facebook"
                  title="分享facebook"
                ></a>
              </div>
            </div>
            <div class="btn">
              <el-button
                :title="associationData.prev_title"
                :style="{
                  background: !associationData.isshowprev
                    ? '#FF85AF'
                    : '#FC1682',
                  opacity: associationData.isshowprev ? 1 : 0,
                }"
                :disabled="!associationData.isshowprev"
                @click="toassociation(associationData.prev_id)"
                >上一篇</el-button
              >
              <nuxt-link :to="'/yahool/news/tooth-wiki'"
                >返回所有文章目錄</nuxt-link
              >
              <el-button
                :title="associationData.next_title"
                :style="{
                  background: !associationData.isshownext
                    ? '#FF85AF'
                    : '#FC1682',
                  opacity: associationData.isshownext ? 1 : 0,
                }"
                :disabled="!associationData.isshownext"
                @click="toassociation(associationData.next_id)"
                >下一篇</el-button
              >
              <!-- <a href="#" v-disabled="true">下一篇</a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="articlePage-err" v-else>
        <span>服務異常或内容已删除！</span>
      </div>
      <!-- <div @click="handlegetData">獲取數據</div> -->
      <YahooNewAddress />
      <YahooContactForm-new />
    </div>
    <YahooPageFooter />
    <YahooPageNavbar />
  </div>
</template>


<style lang="scss" scoped>
:deep(.yahoo_header) {
  .explain_box_mobile {
    position: absolute;
    bottom: 70px;
    right: 0;
    left: 0;
    top: auto;
    justify-content: flex-end;
    margin: 0 auto !important;
  }
}
@keyframes btntestAnima {
  5% {
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
  8% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntesthoverAnima {
  5% {
    transform: scale(0.95);
    -webkit-transform: scale(0.95);
  }
  8% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
@keyframes btntestafterAnima {
  0% {
    width: 90%;
    height: 90%;
    border: 10px solid #b9d9fc;
  }
  19% {
    border: 10px solid rgba(185, 217, 252, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29% {
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100% {
    border: 0 solid rgba(185, 217, 252, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes btntestafterhoverAnima {
  0% {
    width: 90%;
    height: 90%;
    border: 10px solid #fcd1b9;
  }
  19% {
    border: 10px solid rgba(252, 209, 185, 0.5);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  24% {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  29% {
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
  100% {
    border: 0 solid rgba(252, 209, 185, 0);
    width: calc(100% + 40px);
    height: calc(100% + 40px);
  }
}
@keyframes lxAinma {
  100% {
    opacity: 1;
  }
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
.articlePage-in {
  :deep(.content) {
    .twenty-three-container {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .twenty-three-container-header {
      display: flex;
      border-bottom: 8px solid #fff;
      border-radius: 60px 60px 0 0;
      background: var(--Theme-Color, #fc1682);
    }

    .twenty-three-container-header-one {
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 7px;
      flex: 2;
      border: none !important;
      padding: 8px 0;
    }

    .twenty-three-container-header-two-only {
      border-right: 8px solid #fff;
      border-left: 8px solid #fff;
    }

    .twenty-three-container-header-two-three {
      color: var(--White, #fff);
      text-align: center;
      font-family: FakePearl;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 7px;
      flex: 4;
    }

    .twenty-three-container-content-row {
      background: var(--Pink-Pale, #fee6f1);
      display: flex;
    }

    .twenty-three-container-content-row-border {
      border-top: 8px solid #ffff;
      border-bottom: 8px solid #fff;
    }

    .twenty-three-container-content-one {
      flex: 2;
      color: var(--Theme-Color, #fc1682);
      font-family: FakePearl;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 8px;
      letter-spacing: 4px;
    }

    .twenty-three-container-content-two-only {
      border-left: 8px solid #fff;
      border-right: 8px solid #fff;
    }

    .twenty-three-container-content-two-three {
      flex: 4;
      padding: 24px 15px 24px 20px;
      color: var(--Grey-Deep, #4d4d4d);
      font-family: 'Noto Sans HK';
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        margin: 0;
        list-style-type: disc;
        width: 100%;
      }
    }
  }
}
.articlePage {
  &-err {
    padding: 100px 0;
    text-align: center;
  }
}
.content-topimg {
  width: 100%;
  max-width: 960px;
  margin: 63px auto 0;
  img {
    width: 100%;
  }
  &-line {
    margin: 40px auto 50px;
  }
}
.content-title {
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 30px auto 0;
  color: var(--indexColor1);
  font-size: 50px;
}
.content {
  margin: 0 auto calc(37 / 1920 * 100%);
  height: auto;
  :deep(p),
  :deep(h3),
  :deep(h2),
  :deep(h1),
  :deep(h4) {
    width: calc(100% - 60px);
    max-width: 960px;
    margin: 0 auto;
    &.content-doctor,
    &.content-address {
      max-width: 1450px;
      width: calc(100%);
    }
  }
  :deep(ul) {
    width: calc(100% - 60px);
    max-width: 960px;
    padding-left: 20px;
    margin: 0 auto;
    p {
      width: 100%;
    }
  }
  :deep(span) {
    text-wrap: wrap !important;
    word-break: break-all !important;
  }
  :deep(.content-img img) {
    margin: 8px 0;
  }
  :deep(.content-img) {
    width: 100%;
  }
  :deep(.content-h1) {
    margin-top: 30px;
    color: var(--indexColor1);
    font-size: 50px;
  }
  :deep(.content-time) {
    margin: 50px 0;
    color: #666;
    font-size: 28px;
  }
  :deep(.content-h2) {
    color: var(--indexColor1);
    font-size: 30px;
  }
  :deep(.content-text) {
    color: var(--textColor);
    font-size: 20px;
    font-family: var(--contextFamily);
    span {
      font-family: var(--contextFamily);
    }
  }
  :deep(.content-imgMessage) {
    font-size: 16px;
    text-align: center;
    color: var(--textColor);
  }
  :deep(.indexColor) {
    color: var(--indexColor1);
  }
  :deep(.textColor) {
    color: var(--textColor);
  }
  :deep(.md-flex-col) {
    flex-direction: row;
  }
  :deep(.md-p-30) {
    padding: 0;
  }
  :deep(.justify-between) {
    justify-content: space-between;
  }
  :deep(.underline) {
    text-decoration: underline;
  }
  :deep(.content-time-2) {
    color: var(--textColor);
    font-size: 20px;
    margin-top: 35px;
  }
  :deep(.content-doctor) {
    max-width: 1450px;
    width: calc(100%);
    margin: 0 auto;
    .index-doctorTeam {
      margin: 60px auto;
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
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding-bottom: 5px;
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
            margin-top: 10px;
            span {
              &:not(:last-child) {
                &::after {
                  content: '、';
                }
              }
            }
          }
          .detail-4 {
            flex: 1;
            color: var(--textColor);
            padding-left: 20px;
            font-size: 20px;
            margin-bottom: 20px;
            span {
              display: block;
              // display: -webkit-box;
              // -webkit-line-clamp: 3;
              // line-clamp: 3;
              // -webkit-box-orient: vertical;
              // overflow: hidden;
              // text-overflow: ellipsis;
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
            display: none;
          }
        }
      }
    }
    .animbtntypetwo {
      position: relative;
      display: flex;
      &-in {
        position: relative;
        display: inline-block;
        & > span {
          padding: 10px 50px;
          color: #fff;
          background: #00aeff;
          position: relative;
          z-index: 1;
          border-radius: 50px;
          display: inline-block;
          animation: btntestAnima 5.6s infinite;
          box-shadow: 10px 10px 20px rgba(103, 214, 239, 0.75);
          cursor: pointer;
          transition: all 0.5s;
          font-size: 30px;
        }
        &::after {
          content: '';
          position: absolute;
          display: inline-block;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
          border: 10px solid #b9d9fc;
          z-index: 0;
          border-radius: 70px;
          animation: btntestafterAnima 5.6s infinite;
          transition: all 0.5s;
        }
        &:hover {
          & > span {
            background: #ff9900;
            box-shadow: 10px 10px 20px rgba(239, 176, 103, 0.75);
            animation: btntesthoverAnima 5.6s infinite;
          }
          &::after {
            border: 10px solid #fcd1b9;
            animation: btntestafterhoverAnima 5.6s infinite;
          }
        }
      }
    }
  }
  :deep(.content-address) {
    max-width: 1450px;
    width: calc(100%);
    margin: 0 auto;
    .address {
      display: flex;
      margin-top: 30px;
      &-l {
        width: calc(600 / 1460 * 100%);
        img {
          width: 100%;
          border-radius: 20px 0 0 20px;
        }
      }
      &-r {
        flex: 1;
        &-img {
          padding: 0 30px 20px 30px;
          display: flex;
          & > div {
            cursor: pointer;
            max-width: 175px;
            flex: 1;
            box-sizing: border-box;
            display: flex;
            border: 1px solid #fff;
            &:not(:last-child) {
              margin-right: calc(30 / 860 * 100%);
            }
            img {
              width: 100%;
            }
            &.cur {
              border: 1px solid var(--indexColor1);
            }
          }
          &.mbimg {
            display: none;
          }
        }
        &-name {
          display: inline-block;
          color: #fff;
          background: var(--indexColor1);
          padding: 5px 70px 5px 30px;
          font-size: 35px;
          clip-path: polygon(0 0, 93% 0, 100% 100%, 0 100%);
          span {
            &.mbname {
              display: none;
            }
          }
        }
        &-content {
          display: flex;
          padding: 20px 0 40px;
          & > div {
            flex: 1;
            padding-left: 30px;
            span {
              display: inline-block;
              font-size: 20px;
              line-height: 1.6;
              color: var(--textColor);
              padding-right: 30px;
              white-space: pre-wrap;
              width: 100%;
              &:nth-of-type(1) {
                font-size: 22px;
                line-height: 1.6;
                color: var(--indexColor1);
                font-weight: 600;
              }
            }
            &:nth-of-type(1) {
              flex: 1.4;
              span {
                &:nth-of-type(1) {
                  &::before {
                    content: '';
                    width: 17px;
                    height: 17px;
                    display: inline-block;
                    background: url(@/assets/images/icon_21.svg) no-repeat;
                    margin-right: 5px;
                  }
                }
              }
            }
            &:nth-of-type(2) {
              span {
                &:nth-of-type(1) {
                  &::before {
                    content: '';
                    width: 17px;
                    height: 17px;
                    display: inline-block;
                    background: url(@/assets/images/icon_22.svg) no-repeat;
                    background-size: 100% 100%;
                    margin-right: 5px;
                  }
                }
              }
            }
            &:nth-of-type(3) {
              span {
                &:nth-of-type(1) {
                  &::before {
                    content: '';
                    width: 17px;
                    height: 17px;
                    display: inline-block;
                    background: url(@/assets/images/icon_23.svg) no-repeat;
                    margin-right: 5px;
                  }
                }
              }
            }
            &:not(:last-child) {
              span {
                &:not(:first-child) {
                  border-right: 1px solid #fdd3e3;
                }
              }
            }
          }
        }
        &-btn {
          display: flex;
          padding: 0 30px;
          & > div {
            filter: drop-shadow(0 3px 5px var(--indexColor3));
            -webkit-filter: drop-shadow(0 3px 5px var(--indexColor3));
            max-width: calc(100% / 2);
            a,
            span {
              display: inline-block;
              padding: 5px 40px;
              border-radius: 40px;
              cursor: pointer;
              font-size: 35px;
              transition: all 0.3s;
              opacity: 1;
            }
          }
          &-lx {
            position: relative;
            z-index: 20;
            & > span {
              color: var(--indexColor1);
              background: #fff;
              margin-right: 50px;
              &::after {
                content: '';
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url(@/assets/images/icon_24.svg) no-repeat;
                margin-left: 5px;
                transition: all 0.3s;
                transform: rotate(-90deg);
                vertical-align: middle;
                margin-top: -5px;
              }
              &.cur {
                border-radius: 40px 40px 0 0;
                padding-bottom: 20px;
                &::after {
                  transform: none;
                }
              }
            }
            .lx-box {
              position: absolute;
              top: 100%;
              left: 0;
              background: #fff;
              display: flex;
              width: 200%;
              max-width: 200%;
              padding: 20px 10px;
              display: none;
              opacity: 0;
              & > div {
                flex: 1;
                padding: 0 10px;
                span {
                  text-align: justify;
                  font-size: 20px;
                  line-height: 1.6;
                  padding: 0;
                  width: 100%;
                  &:nth-of-type(1) {
                    color: var(--indexColor1);
                  }
                  &:nth-of-type(2) {
                    color: var(--textColor);
                  }
                }
              }
              &.cur {
                border-radius: 0 30px 30px;
                display: flex;
                animation: lxAinma 0.5s 0.3s forwards;
              }
            }
          }
          &-bd {
            & > span,
            & > a {
              color: #fff;
              background: var(--indexColor1);
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
.content-bbtn {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  position: relative;
  &-in {
    position: relative;
    &-img {
      position: absolute;
      z-index: 1;
      right: -5px;
      bottom: -5px;
      width: 45px;
    }
  }
}
.content-hashtag {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 30px auto 100px;
  &-in {
    font-size: 20px;
    line-height: 100%;
    color: var(--textColor);
    // border-bottom: 1px solid var(--textColor);
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
.content-bdetail {
  background: linear-gradient(
    180deg,
    rgba(252, 22, 130, 0.4) -68.47%,
    rgba(252, 22, 130, 0.28) -68.46%,
    rgba(255, 168, 198, 0) 63.88%
  );
  width: 100%;
  &-in {
    width: calc(100% - 60px);
    max-width: 960px;
    margin: 0 auto;
    padding: 46px 0 0;
    .context {
      color: var(--textColor);
      text-align: justify;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      position: relative;
      div {
        a {
          color: var(--indexColor1);
          transition: all 0.3s;
          &:hover {
            color: #ff85af;
          }
        }
      }
      .righeBox {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        span,
        a {
          width: 82px;
          height: 82px;
          display: block;
          transition: all 0.3s;
          cursor: pointer;
          &.copy {
            background: url(@/assets/images/icon_19.svg);
            background-size: 100% 100%;
          }
          &.facebook {
            background: url(@/assets/images/icon_20.svg);
            background-size: 100% 100%;
            margin-left: 14px;
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .news {
      margin-top: calc(55 / 960 * 100%);
      color: var(--textColor);
      text-align: justify;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 41.6px */
      letter-spacing: 2.6px;
      a {
        color: var(--indexColor1);
        transition: all 0.3s;
        display: block;
        &:hover {
          color: #ff85af;
        }
      }
    }
    .tags {
      margin-top: calc(55 / 960 * 100%);
      span {
        color: var(--textColor);
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        text-decoration: underline;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      margin-top: calc(55 / 960 * 100%);
      button,
      a {
        color: #fff;
        text-align: center;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 56px */
        letter-spacing: 7px;
        background: var(--indexColor1);
        border-radius: 50px;
        box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.5);
        padding: calc(7 / 960 * 100%) calc(40 / 960 * 100%);
        transition: all 0.3s;
        height: auto;
        border: none;
        &:hover {
          background: #ff85af;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .content-bbtn {
    &-in {
      &-img {
        width: 2.3438vw;
        min-width: 25px;
      }
    }
  }
  .content {
    :deep(p) {
      &.content-doctor {
        width: calc(1450 / 1920 * 100%);
        min-width: 960px;
      }
    }
    :deep(.content-doctor) {
      .index-doctorTeam {
        margin: 3.125vw auto;
        &-detail {
          padding: 1.0417vw;
          margin-top: 2.6042vw;
          &-l {
            max-width: 22.6042vw;
            &-in {
              width: 100%;
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
            padding-bottom: 0.2604vw;
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
              margin-top: 0.5208vw;
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
            }
          }
        }
      }
      .animbtntypetwo {
        &-in {
          & > span {
            font-size: 1.5625vw;
            padding: 0.5208vw 2.6042vw;
          }
        }
      }
    }
    :deep(.content-address) {
      .address {
        width: 80%;
        margin: 0 auto;
        margin-top: 1.5625vw;
        &-l {
          img {
            border-radius: 1.0417vw 0 0 1.0417vw;
          }
        }
        &-r {
          &-img {
            padding: 0 1.5625vw 1.0417vw 1.5625vw;
            & > div {
              max-width: 9.1146vw;
            }
          }
          &-name {
            padding: 0.2604vw 3.6458vw 0.2604vw 1.5625vw;
            font-size: 1.8229vw;
          }
          &-content {
            padding: 1.0417vw 0 2.0833vw;
            & > div {
              padding-left: 1.5625vw;
              span {
                font-size: 1.0417vw;
                padding-right: 1.5625vw;
                &:nth-of-type(1) {
                  font-size: 1.1458vw;
                }
              }
              &:nth-of-type(1) {
                span {
                  &:nth-of-type(1) {
                    &::before {
                      width: 0.8854vw;
                      height: 0.8854vw;
                      margin-right: 0.2604vw;
                    }
                  }
                }
              }
              &:nth-of-type(2) {
                span {
                  &:nth-of-type(1) {
                    &::before {
                      width: 0.8854vw;
                      height: 0.8854vw;
                      margin-right: 0.2604vw;
                    }
                  }
                }
              }
              &:nth-of-type(3) {
                span {
                  &:nth-of-type(1) {
                    &::before {
                      width: 0.8854vw;
                      height: 0.8854vw;
                      margin-right: 0.2604vw;
                    }
                  }
                }
              }
            }
          }
          &-btn {
            padding: 0 1.5625vw;
            & > div {
              filter: drop-shadow(0 0.1563vw 0.2604vw var(--indexColor3));
              -webkit-filter: drop-shadow(
                0 0.1563vw 0.2604vw var(--indexColor3)
              );
              a,
              span {
                padding: 0.2604vw 2.0833vw;
                border-radius: 2.0833vw;
                font-size: 1.8229vw;
              }
            }
            &-lx {
              & > span {
                margin-right: 2.6042vw;
                &::after {
                  width: 1.0417vw;
                  height: 1.0417vw;
                  margin-left: 0.2604vw;
                  margin-top: -0.2604vw;
                  background-size: 100% auto;
                }
                &.cur {
                  border-radius: 2.0833vw 2.0833vw 0 0;
                  padding-bottom: 1.0417vw;
                }
              }
              .lx-box {
                padding: 1.0417vw 0.5208vw;
                & > div {
                  padding: 0 0.5208vw;
                  span {
                    font-size: 1.0417vw;
                  }
                }
                &.cur {
                  border-radius: 0 1.5625vw 1.5625vw;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1020px) {
  .content {
    :deep(p) {
      &.content-doctor {
        width: 100%;
        max-width: calc(100% - 60px);
        min-width: 0;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 850px) {
  .content-bdetail {
    .btn {
      button,
      a {
        font-size: 24px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .is_new_tooth_wiki {
    position: fixed;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    z-index: 29;
    // background: #fff;
    filter: drop-shadow(0 -3px 5px rgba(252, 22, 130, 0.3));
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
    }
    & > div:nth-child(2) {
      position: absolute;
      top: 15px;
      right: 15%;
    }
  }
  :deep(iframe) {
    max-width: 100%;
    height: auto;
    min-height: 200px;
  }
  :deep(p img) {
    max-width: 100%;
    height: auto !important;
  }
  .articlePage {
    padding: 0 0 90px;
    &-title {
      z-index: 1;
    }
  }
  .tabNav {
    padding: 23px 30px 0;
    font-size: 1rem;
    margin-top: 0px;
  }
  .content-topimg {
    margin-top: 30px;
  }
  .content-title {
    margin-top: 30px;
    font-size: 28px;
  }
  .content {
    margin-bottom: 50px;
    padding: 0 30px;
    :deep(p),
    :deep(h3),
    :deep(h2),
    :deep(h1),
    :deep(h4) {
      width: 100%;
      &.content-doctor,
      &.content-address {
        width: calc(100% + 60px);
        margin-left: -30px;
        padding: 0;
      }
    }
    :deep(ul) {
      width: 100%;
      padding-left: 20px;
    }
    :deep(.content-h1) {
      margin-top: 30px;
      font-size: 20px;
      span {
        font-size: 28px !important;
        font-weight: 500 !important;
        line-height: 44.8px;
        font-family: var(--indexFontFamily) !important;
      }
    }
    :deep(.content-time) {
      margin: 10px 0 30px;
      font-size: 16px;
    }
    :deep(.content-h2) {
      font-size: 20px;
    }
    :deep(.content-text) {
      font-size: 16px;
      display: inline-block;
      text-align: justify;
    }
    :deep(.content-imgMessage) {
      font-size: 12px;
      text-align: center;
    }
    :deep(.md-flex-col) {
      flex-direction: column;
    }
    :deep(.md-p-30) {
      padding: 0 30px;
    }
    :deep(.content-time-2) {
      margin: 0 30px 23px;
      font-size: 16px;
    }
    :deep(.content-doctor) {
      width: calc(100% + 60px);
      margin-left: -30px;
      padding: 0;
      .index-doctorTeam {
        margin: 50px 0;
        width: 100%;
        &-detail {
          flex-direction: column;
          align-items: center;
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
                // width: 55%;
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
              & > span {
                width: 100%;
                max-width: 95%;
                font-size: 20px;
                padding: 5px 50px 5px 30px;
                clip-path: polygon(0 0, 90% 0, 95% 100%, 0 100%);
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
            }
          }
        }
      }
      .animbtntypetwo {
        &-in {
          & > span {
            font-size: 20px;
            padding: 8px 30px;
          }
          &::after {
            border: 7px solid #b9d9fc;
          }
          &.smallmb {
            & > span {
              font-size: 16px;
              padding: 5px 20px;
            }
          }
        }
      }
    }
    :deep(.content-address) {
      width: calc(100% + 60px);
      margin-left: -30px;
      padding: 0;
      .address {
        &-l {
          display: none;
        }
        &-r {
          width: 100%;
          &-img {
            display: none;
            width: 100%;
            overflow: hidden;
            & > div {
              max-width: 100%;
            }
            &.mbimg {
              display: block;
              margin: 0 auto;
              overflow: hidden;
            }
            &-swiper {
              width: 100%;
              overflow-x: scroll;
              scroll-snap-type: x mandatory;
              padding: 0 40px;
              &::-webkit-scrollbar {
                //隐藏滚动条
                display: none;
              }
              &-slide {
                padding: 0 15px;
                width: 100%;
                flex: 0 0 100%;
                scroll-snap-align: start;
                scroll-snap-stop: always;
                white-space: nowrap;
                img {
                  width: 100%;
                  margin: 0 auto;
                }
              }
            }
          }
          &-name {
            max-width: 90%;
            padding: 5px 50px 5px 30px;
            font-size: 20px;
            clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
            span {
              &.mbname {
                display: block;
              }
              &.pcname {
                display: none;
              }
            }
          }
          &-content {
            flex-direction: column;
            padding: 20px 30px 20px 0;
            & > div {
              display: flex;
              span {
                padding-right: 0;
                font-size: 16px;
                line-height: 2;
                &:nth-of-type(1) {
                  font-size: 16px;
                  line-height: 2;
                  max-width: 35%;
                }
              }
              &:nth-of-type(1),
              &:nth-of-type(2),
              &:nth-of-type(3) {
                span {
                  &:nth-of-type(1) {
                    &::before {
                      margin-top: -5px;
                      vertical-align: middle;
                    }
                  }
                }
              }
              &:not(:last-child) {
                margin-bottom: 20px;
                span {
                  &:not(:first-child) {
                    border-right: none;
                  }
                }
              }
            }
          }
          &-btn {
            display: block;
            position: relative;
            padding: 0 20px;
            & > div {
              max-width: 100%;
              a,
              span {
                padding: 7px 25px;
                border-radius: 30px;
                font-size: 20px;
                font-weight: 600;
              }
            }
            &-lx {
              width: 100%;
              padding: 10px;
              & > span {
                &::after {
                  width: 10px;
                  height: 10px;
                  background-size: 100% auto;
                }
                &.cur {
                  padding-bottom: 20px;
                  border-radius: 30px 30px 0 0;
                }
              }
              .lx-box {
                position: initial;
                max-width: 100%;
                padding: 10px 10px;
                & > div {
                  span {
                    font-size: 16px;
                    line-height: 2;
                  }
                }
                &.cur {
                  display: block;
                }
              }
            }
            &-bd {
              padding: 10px 0;
              position: absolute;
              right: 30px;
              top: 0;
            }
          }
        }
      }
    }
  }
  .content-bbtn {
    padding: 0 0 50px;
    &-in {
      &-img {
        width: 30px;
      }
    }
  }
  .content-hashtag {
    margin: 0px auto 50px;
    &-in {
      font-size: 16px;
    }
  }
  .content-bdetail {
    &-in {
      padding: 35px 0 0;
      .context {
        font-size: 15px;
        letter-spacing: 1px;
        .righeBox {
          span,
          a {
            width: 40px;
            height: 40px;
            &.facebook {
              margin-left: 10px;
            }
          }
        }
      }
      .news {
        font-size: 15px;
      }
      .tags {
        span {
          font-size: 15px;
        }
      }
      .btn {
        flex-wrap: wrap;
        margin-top: 30px;
        button,
        a {
          font-size: 22px;
          padding: 8px 29px;
          letter-spacing: 2px;
          width: calc(50% - 15px);
        }
        button:nth-of-type(1) {
          order: 2;
        }
        button:nth-of-type(2) {
          order: 3;
        }
        a {
          width: 100%;
          order: 1;
          margin-bottom: 20px;
        }
      }
    }
  }
  @keyframes btntestafterAnima {
    0% {
      width: 90%;
      height: 90%;
      border: 7px solid #b9d9fc;
    }
    19% {
      border: 7px solid rgba(185, 217, 252, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24% {
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29% {
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100% {
      border: 0 solid rgba(185, 217, 252, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  @keyframes btntestafterhoverAnima {
    0% {
      width: 90%;
      height: 90%;
      border: 7px solid #fcd1b9;
    }
    19% {
      border: 7px solid rgba(252, 209, 185, 0.5);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    24% {
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    29% {
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
    100% {
      border: 0 solid rgba(252, 209, 185, 0);
      width: calc(100% + 28px);
      height: calc(100% + 28px);
    }
  }
  .articlePage-in {
    :deep(.content) {
      .twenty-three-container-header {
        border-radius: 40px 40px 0 0;
      }

      .twenty-three-container-header-one {
        padding: 8px 0;
        letter-spacing: 1px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .twenty-three-container-header-two-three {
        font-size: 20px;
        font-size: 14px;
        letter-spacing: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .twenty-three-container-content-one {
        padding: 8px 4px;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 160%;
      }

      .twenty-three-container-content-two-three {
        padding: 10px;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 140%;
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          padding-left: 15px;
        }
      }
    }
  }
}
</style>