<script lang="ts" setup>
import { log } from 'console'

const route = useRoute()
const router = useRouter()
let _nid = route.params.id
let pageType: any = ref('1')
if (route.query.SDLDNZYP) {
  pageType.value = route.query.SDLDNZYP
}
let coverageDeatail = ref({
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
  nextId: '',
  nextTitle: '',
  preId: '',
  preTitle: '',
  subtitle: '',
})
useHead({
  title: pageType.value === '1' ? '媒體報導' : '最新資訊',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健作為深圳愛康健口腔醫院是一家專業口腔醫院，秉承著「專科·專業」的服務理念，科學、合理地整合醫療資源。我們的醫師團隊均畢業於國內知名口腔學院，包括種植醫師、美學修復醫師、牙周病醫師等專業人員。他們帶領著醫護人員共同構成我們的服務團隊，為患者提供專業、優質的口腔醫療服務。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院牙科服務內地牙科 深圳口腔專科 基本牙科 美容牙科 高階牙科 愛康健',
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
      content: '媒體報導 | 深圳愛康健口腔醫院',
    },
    {
      property: 'og:url',
      content: () => {
        return 'https://www.ckjhk.com/news/article/' + coverageDeatail.value.id
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

let errorpage = ref(false)
let pageLoading = ref(false)

function copySpecifiedTextArticle(text) {
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
  copySpecifiedTextArticle(window.location.href)
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

// const copyText = () => {
//   copySpecifiedText(window.location.href)
// }
const formatDate = (dateString) => {
  var date = new Date(dateString)
  var year = date.getFullYear()
  var month = ('0' + (date.getMonth() + 1)).slice(-2) // getMonth() is zero-based
  var day = ('0' + date.getDate()).slice(-2)
  return year + '年' + month + '月' + day + '日'
}
const getDetail = async () => {
  pageLoading.value = true
  try {
    const _res: any = await useFetch(
      `https://admin.ckjhk.com/api.php/content/${_nid}`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (_res.data.value === null) {
      errorpage.value = true
      return
    }
    if (res) {
      // console.log(res)
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
        time: formatDate(_data.ext_news_time) || '',
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
        nextId: _data.nextId || '',
        nextTitle: _data.nextTitle || '',
        preId: _data.preId || '',
        preTitle: _data.preTitle || '',
        subtitle: _data.subtitle || '',
      }
      changeassociationData(JSON.parse(_data.ext_news_association || '[]'))
    }
  } catch {
    errorpage.value = true
    pageLoading.value = false
  }
  pageLoading.value = false
}
const toassociation = (_id) => {
  router.push(`/news/article/${_id}`)
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
onMounted(() => {
  setTimeout(() => {
    getDetail()
  })
})
const handlegetData = () => {
  getDetail()
}

if (process.server) {
  // console.log('server');
  getDetail()
} else {
  // console.log('client');
  getDetail()
}

let actShowShare = ref('')
const handleClick = (event, _id) => {
  event.preventDefault()
  if (actShowShare.value === _id) {
    actShowShare.value = ''
  } else {
    actShowShare.value = _id
  }
}

let indexNewsCur = ref(0)
let indexNewsLists = ref([[] as any, [] as any, [] as any])
const handleNewsTab = (idx) => {
  if (indexNewsCur.value === idx) return
  indexNewsCur.value = idx
  getNewsLists(idx)
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
const handlevideBoxBtn = () => {
  // router.push('')
  let _arr = ['/news/coverage', '/news/information', '/news/tooth-wiki']
  router.push(_arr[indexNewsCur.value])
}
onMounted(() => {
  nextTick(() => {
    getNewsLists(0)
  })
})
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor articlePage">
      <div class="index_title pageCon articlePage-title">
        {{ pageType.value === '2' ? '最新資訊' : '媒體報導' }}
      </div>
      <div class="tabNav noTitle pageCon">
        <nuxt-link
          :to="'/'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>主頁</span>
        </nuxt-link>
        <nuxt-link :to="''">
          <span>睇牙新資訊</span>
        </nuxt-link>
        <nuxt-link :to="'/news/coverage'">
          <span :title="pageType.value === '2' ? '最新資訊' : '媒體報導'">{{
            pageType.value === '2' ? '最新資訊' : '媒體報導'
          }}</span>
        </nuxt-link>
        <span>{{ coverageDeatail.name }}</span>
      </div>
      <div class="articlePage-in" v-if="!errorpage" v-loading="pageLoading">
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
            <PageSwiperPointLine
              :latestNewsNum="coverageDeatail.pics.length"
              :latestNewsCurrent="topimgCur"
              @changeLineCur="handleLineCur"
            ></PageSwiperPointLine>
          </div>
        </div>
        <div class="content-topimg" v-else>
          <img
            :src="coverageDeatail.img"
            :alt="coverageDeatail.name"
            :title="coverageDeatail.name"
          />
          <p v-if="coverageDeatail.subtitle !== ''">
            {{ coverageDeatail.subtitle }}
          </p>
        </div>
        <div class="content-title">
          <h1>{{ coverageDeatail.name }}</h1>
        </div>
        <div class="content" v-html="coverageDeatail.content"></div>
        <!-- <div class="content-bbtn" v-if="pageType === '1'">
          <nuxt-link to="/dental-service/scaling-and-polishing" v-if="coverageDeatail.news_tag === '洗牙'">了解更多洗牙資訊</nuxt-link>
        </div> -->
        <div class="content-bbtn" v-if="coverageDeatail.btnText !== ''">
          <div class="content-bbtn-in">
            <PageAnimBtnTypeTwo
              :link="coverageDeatail.btnLink"
              :str="coverageDeatail.btnText"
            />
          </div>
        </div>
        <div class="content-bdetail">
          <div class="content-bdetail-in">
            <div class="context">
              <div v-if="pageType === '1'">
                新聞來源︰{{ coverageDeatail.tags }}
              </div>
              <div v-if="pageType === '1'">
                作者︰{{ coverageDeatail.author }}
              </div>
              <div>
                資料來源︰<a :href="coverageDeatail.source">原文鏈接</a>
              </div>
              <div>瀏覽次數︰{{ coverageDeatail.visits }}</div>
              <div>更新時間︰{{ coverageDeatail.time }}</div>
              <div class="righeBox">
                <span
                  class="copy"
                  title="複製鏈接"
                  @click="copyText"
                ></span>
                <a
                  :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.ckjhk.com/news/article/${_nid}`"
                  target="_block"
                  class="facebook"
                  title="分享facebook"
                ></a>
              </div>
            </div>
            <div class="news" style="display: none" v-if="pageType === '1'">
              <h4>閱讀更多媒體報導︰</h4>
              <nuxtLink
                :to="`/news/article/${associationItem.id}`"
                v-for="(
                  associationItem, associationIndex
                ) in associationData.lists"
                :key="associationIndex"
                >{{ associationItem.title }}</nuxtLink
              >
            </div>
            <div class="tags" v-if="pageType === '1'">
              <span>{{ coverageDeatail.news_tag }}</span>
            </div>
            <div class="btn" style="display: none">
              <el-button
                :title="associationData.prev_title"
                :style="{
                  background: !associationData.isshowprev
                    ? '#FF85AF'
                    : '#FC1682',
                }"
                :disabled="!associationData.isshowprev"
                @click="toassociation(associationData.prev_id)"
                >上一篇</el-button
              >
              <nuxt-link
                :to="pageType === '1' ? '/news/coverage' : '/news/information'"
                >返回所有文章目錄</nuxt-link
              >
              <el-button
                :title="associationData.next_title"
                :style="{
                  background: !associationData.isshownext
                    ? '#FF85AF'
                    : '#FC1682',
                }"
                :disabled="!associationData.isshownext"
                @click="toassociation(associationData.next_id)"
                >下一篇</el-button
              >
              <!-- <a href="#" v-disabled="true">下一篇</a> -->
            </div>
          </div>
          <div class="index-videoBox">
            <div class="index-videoBox-t smallPageCon">
              <div class="index_title index_title_2">睇牙新資訊</div>
            </div>
            <div class="index-videoBox-in">
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
            </div>
            <div
              class="index-videoBox-btn smallPageCon"
              @click="handlevideBoxBtn"
            >
              <span>更多資訊 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="articlePage-err" v-else>
        <span>服務異常或内容已删除！</span>
      </div>
      <!-- <div @click="handlegetData">獲取數據</div> -->
      <NewAddress />
     <contact-form-new-form />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
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
  p {
    color: var(--textColor);
    font-size: 14px;
    text-align: center;
    margin-top: 3px;
  }
}
.content-title {
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 30px auto 0;
  color: var(--indexColor1);
  font-size: 50px;
  h1 {
    font-weight: 600;
    font-family: var(--contextTitleFamily);
  }
}
.content {
  width: calc(100% - 60px);
  max-width: 960px;
  margin: 63px auto calc(37 / 1920 * 100%);
  height: auto;
  overflow: hidden;
  :deep(ul) {
    width: calc(100% - 60px);
    max-width: 960px;
    // padding-left: 20px;
    margin: 0 auto;
    p {
      width: 100%;
    }
  }
  :deep(span) {
    text-wrap: wrap !important;
    word-break: break-all !important;
  }
  :deep(img) {
    margin: 8px 0;
  }
  :deep(.content-img) {
    width: 100%;
  }
  :deep(.content-h1) {
    margin-top: 30px;
    color: var(--indexColor1);
    font-size: 50px;
    font-weight: 600;
    font-family: var(--contextTitleFamily);
  }
  :deep(.content-time) {
    margin: 50px 0;
    color: #666;
    font-size: 28px;
  }
  :deep(.content-h2) {
    color: var(--indexColor1);
    font-size: 30px;
    font-weight: 600;
    font-family: var(--contextTitleFamily);
  }
  :deep(.content-text) {
    color: var(--textColor);
    font-size: 20px;
    font-family: var(--contextFamily);
    span {
      font-family: var(--contextFamily);
    }
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
  :deep(.youtobe-video) {
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    .youtobe-video-in {
      width: 100%;
      height: 0;
      padding-bottom: calc(316 / 560 * 100%);
      position: relative;
      & > iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.content-bbtn {
  display: flex;
  justify-content: center;
  padding: 50px 0;
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
      position: absolute;
      top: -70px;
      right: 0;
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
@media (min-width: 768px) and (max-width: 850px) {
  .content-bdetail {
    .btn {
      button,
      a {
        font-size: 24px;
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
}
@media screen and (max-width: 768px) {
  :deep(iframe) {
    max-width: 100%;
    height: auto;
    min-height: 200px;
  }
  :deep(p img) {
    max-width: 100%;
    height: auto !important;
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
      margin-top: 30px;
    }
    &-btn {
      position: relative;
      inset: auto;
      top: 0;
      display: flex;
      justify-content: center;

      span {
        float: initial;
        font-size: 20px;
        margin-left: 10px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(-100%);
        left: auto;
        &::before {
          border-bottom: 1px solid var(--indexColor1);
        }
        &::after {
          font-size: 18px;
        }
      }
    }
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
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 0 30px;
    :deep(.content-h1) {
      // padding: 0 30px;
      margin-top: 30px;
      font-size: 20px;
    }
    :deep(.content-time) {
      // padding: 0 30px;
      margin: 10px 0 30px;
      font-size: 16px;
    }
    :deep(.content-h2) {
      // padding: 0 30px;
      font-size: 20px;
    }
    :deep(.content-text) {
      // padding: 0 30px;
      font-size: 16px;
      display: inline-block;
      text-align: justify;
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
    :deep(.youtobe-video) {
      width: 100%;
      margin: 30px auto 0;
      .youtobe-video-in {
        padding-bottom: calc(315 / 560 * 100%);
      }
    }
  }
  .content-bbtn {
    padding: 0 0 50px;
  }
  .content-bdetail {
    &-in {
      padding: 35px 0 0;
      .context {
        font-size: 15px;
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
}
</style>