<script lang="ts" setup>

useHead({
  title: '牙齒百科',
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

interface informationLists {
  id: string
  img: string
  desc: string
  name: string
  time: string
  tags: string[]
}
let informationLists = ref<informationLists[]>([])
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

let totalPageNum = ref(1)
let actPageNum = ref(1)
let loadingShow = ref(false)
let strS = ref('')
const getNewsLists = async (str: string) => {
  strS.value = ''
  if (str) {
    strS.value = str
  }
  let url = `https://admin.ckjhk.com/api.php/list/16/page/${actPageNum.value}/num/6`
  let filterUrl = `https://admin.ckjhk.com/api.php/list/16/num/99`
  loadingShow.value = true
  try {
    const _res: any = await useFetch(strS.value === '' ? url : filterUrl, {
      method: 'post',
    })
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      totalPageNum.value = Math.ceil(res.rowtotal / 6)
      informationLists.value = res.data.map((item) => {
        return {
          id: item.id || '',
          img:
            (item.ico.indexOf('/static/upload/image') !== -1
              ? `https://admin.ckjhk.com${item.ico}`
              : item.ico) || '',
          desc: item.ext_news_desc || '',
          name: item.title || '',
          time: formatDate(item.update_time) || '',
          tags: handleTags(item.ext_news_hashtag) || [''],
        }
      })
    }
    sessionStorage.setItem('toothWikiPage', String(actPageNum.value))
    loadingShow.value = false
  } catch {
    errorpage.value = true
    loadingShow.value = false
  }
}
const checkAndRemoveLastChar = (str, charToRemove)=> {
  // 检查字符串的最后一位是否为指定字符
  if (str.endsWith(charToRemove)) {
    // 如果是，则去除最后一位
    return str.slice(0, -1);
  }
  // 如果不是，则返回原字符串
  return str;
}
const handleTags = (tags: any) => {
  let _tags = tags.split('#')
  return _tags.filter((item) => {
    return item !== ''
  })
}
let arrTags = ref<informationLists[]>([])
const getTags = async (ele: any, str: string) => {
  informationLists.value = []
  arrTags.value = []
  await getNewsLists(str)
  informationLists.value.forEach((item) => {
    item.tags.forEach((it) => {
      if (it.indexOf(ele) !== -1) {
        arrTags.value.push(item)
      } 
    })
  })
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  informationLists.value  = Array.from(new Map(arrTags.value.map(item => [item.id, item])).values());
  totalPageNum.value = Math.ceil(informationLists.value.length / 6)
  return informationLists
}

const subNum = () => {
  if (actPageNum.value > 1) {
    actPageNum.value--
    window.location.href = '#information'
    getNewsLists('')
  }
}

const addNum = () => {
  if (actPageNum.value < totalPageNum.value) {
    actPageNum.value++
    window.location.href = '#information'
    getNewsLists('')
  }
}

const toPage = (_page) => {
  if (actPageNum.value === _page) {
    return
  }
  actPageNum.value = _page
  window.location.href = '#information'
  getNewsLists('')
}

const handlelink = (id) => {
  // sessionStorage.setItem('informationid', String(id))
}
const goAnchor = (_hash: any) => {
  const a = document.querySelector(_hash)
  let top = a.offsetTop - 300
  if (a) {
    let b = 0
    const timeTop = setInterval(() => {
      document.body.scrollTop = document.documentElement.scrollTop = b += 50
      if (b >= top) {
        clearInterval(timeTop)
      }
    }, 10)
  }
}

onMounted(() => {
  if (sessionStorage.getItem('toothWikiPage')) {
    actPageNum.value = Number(sessionStorage.getItem('toothWikiPage')) || 1
  }
  setTimeout(() => {
    getNewsLists('')
  })

  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

if (process.server) {
  // console.log('server');
  getNewsLists('')
}

const getPagination = (pageitem) => {
  if (actPageNum.value >= 4 && actPageNum.value < totalPageNum.value - 3) {
    return actPageNum.value - 3 + pageitem
  } else {
    if (actPageNum.value < 4) {
      return pageitem + 1
    } else if (actPageNum.value >= totalPageNum.value - 3) {
      return totalPageNum.value - 6 + pageitem
    } else {
      return 0
    }
  }
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
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

let actShowShare = ref('')
const handleClick = (event, _id) => {
  event.preventDefault()
  if (actShowShare.value === _id) {
    actShowShare.value = ''
  } else {
    actShowShare.value = _id
  }
}
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor informationPage">
      <div
        class="index_title smallPageCon informationPage-title"
        id="information"
      >
        牙齒百科
      </div>
      <div class="tabNav noTitle smallPageCon">
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
        <span :title="'牙齒百科'">牙齒百科</span>
      </div>
      <div class="smallPageCon">
        <!-- <nuxt-link to="/news/news-tooth-wiki/102">测试</nuxt-link> -->
        <div class="lists" v-if="!errorpage">
          <div class="str_s_black" v-if="strS !== ''" @click="getNewsLists('')">
            返回列表
          </div>
          <div v-loading="loadingShow" class="listsbox">
            <!-- :to="`/news/news-tooth-wiki/${item.id}`" -->
            <nuxt-link
              :id="`i${item.id}`"
              :alt="item.name"
              :title="item.name"
              class="lists-in"
              v-for="(item, index) in informationLists"
              :key="index"
            >
              <div class="lists-in-img">
                <img loading="lazy" :src="item.img" alt="" />
              </div>
              <div class="lists-in-context">
                <div class="lists-in-context-top">
                  <div class="title">
                    {{ item.name }}
                  </div>
                  <div class="time">
                    <span>
                      {{ item.time }}
                    </span>
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
                </div>
                <div class="desc" v-html="item.desc"></div>
                <div class="tags">
                  <span
                    @click.stop="getTags(el, 'tag')"
                    v-for="(el, index) in item.tags"
                    :key="index"
                    >#{{ el }}</span
                  >
                </div>
                <div style="flex: 1"></div>
                <div class="btn">
                  <PageAnimBtnTypeTwo
                    :link="`/news/news-tooth-wiki/${item.id}`"
                    str="查看原文"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="lists-btn" v-if="strS === ''">
            <div @click="subNum" :class="{ btndisabled: actPageNum === 1 }">
              <span class="subNum">
                <img src="@/assets/images/icon_25.svg" alt="" />
              </span>
            </div>
            <div class="lists-btn-page">
              <section v-if="totalPageNum <= 7">
                <span
                  class="y"
                  :class="{ act: actPageNum === pageitem }"
                  v-for="pageitem in totalPageNum"
                  :key="pageitem"
                  @click="toPage(pageitem)"
                >
                  {{ pageitem }}
                </span>
              </section>
              <section v-else>
                <span
                  class="y"
                  :class="{ act: actPageNum === 1 }"
                  @click="toPage(1)"
                  >1</span
                >
                <span v-if="actPageNum > 4">...</span>
                <span
                  class="y"
                  :class="{ act: actPageNum === getPagination(pageitem) }"
                  v-for="pageitem in 5"
                  :key="pageitem"
                  @click="toPage(getPagination(pageitem))"
                >
                  {{ getPagination(pageitem) }}
                </span>
                <span v-if="actPageNum <= totalPageNum - 4">...</span>
                <span
                  class="y"
                  :class="{ act: actPageNum === totalPageNum }"
                  @click="toPage(totalPageNum)"
                  >{{ totalPageNum }}</span
                >
              </section>
            </div>
            <div
              @click="addNum"
              :class="{ btndisabled: actPageNum === totalPageNum }"
            >
              <span class="addNum">
                <img src="@/assets/images/icon_25.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div class="lists" v-else></div>
      </div>
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar />
  </div>
</template>


<style lang="scss" scoped>
// :deep(.is_new_tooth_wiki) {
//   display: none !important;
//   flex-direction: column-reverse;
//   position: fixed;
//   right: 150px;
//   bottom: 300px;
//   &>div:nth-child(1){
//     width: 240px;
//   }
//   &>div:nth-child(2){
//     position: absolute;
//     right: 20px;
//     top: -15px;
//     &>svg {
//       width: 30px;
//       height: 30px;
//     }
//   }
// }
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
.lists {
  margin-top: calc(77 / 1448 * 100%);
  min-height: 300px;
  .listsbox {
    display: flex;
    flex-wrap: wrap;
  }
  .str_s_black {
    margin: 10px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: var(--indexColor1);
  }
  &-in {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    margin-bottom: 80px;
    padding: 0 30px;
    &-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    &-context {
      flex: 1;
      display: flex;
      flex-direction: column;
      &-top {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 10px;
        margin-top: 15px;
        .title {
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time {
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          color: #aaa;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          & > span {
            max-width: 340px;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            flex: 1;
            &::after {
              content: '';
              height: 100%;
              width: 30px;
              background: linear-gradient(90deg, transparent, #fff);
              position: absolute;
              right: 0;
              top: 0;
            }
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
      }
      .desc {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 2px;
        color: #aaa;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tags {
        margin-top: 5px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 2px;
        color: #818080;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .btn {
        display: flex;
        padding: 20px;
        a {
          font-size: 35px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 56px */
          letter-spacing: 7px;
          color: #fff;
          text-align: center;
          background: var(--indexColor1);
          border-radius: 40px;
          padding: calc(7 / 922 * 100%) calc(40 / 922 * 100%);
          transition: all 0.3s;
          box-shadow: 3px 3px 12.4px 0px rgba(252, 22, 130, 0.5);
          &:hover {
            background: #ff85af;
          }
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      font-size: 26px;
      margin: 0 10px;
      color: var(--textColor);
      span {
        color: var(--indexColor1);
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      &.btndisabled {
        span {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }
    }
    .subNum,
    .addNum {
      img {
        width: 12px;
        height: auto;
      }
    }
    .addNum {
      img {
        transform: rotate(180deg);
      }
    }
    &-page {
      display: flex;
      & > section {
        display: flex;
        height: 30px;
      }
      .y {
        margin: 0 5px;
        color: var(--indexColor1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: block;
        border: 2px solid var(--indexColor1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        letter-spacing: -0.8px;
        transition: all 0.3s;
        &.act {
          background: var(--indexColor1);
          color: #fff;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .lists {
    &-in {
      margin-bottom: 4.1667vw;
      padding: 0 1.5625vw;
      &-context {
        &-top {
          margin-bottom: 0.5208vw;
          margin-top: 0.7813vw;
          .title {
            font-size: 1.0417vw;
          }
          .time {
            font-size: 0.7813vw;
            margin-top: 0.5208vw;
            span {
              max-width: 17.7083vw;
              &::after {
                width: 1.5625vw;
              }
            }
          }
        }
        .desc {
          font-size: 0.8333vw;
          letter-spacing: 0.1042vw;
        }
        .tags {
          font-size: 0.8333vw;
          letter-spacing: 0.1042vw;
        }
        .btn {
          padding: 1.0417vw;
          a {
            font-size: 1.8229vw;
            letter-spacing: 0.3646vw;
            border-radius: 2.0833vw;
          }
        }
      }
    }
    &-btn {
      & > div {
        font-size: 1.3542vw;
        margin: 0 0.5208vw;
      }
      .subNum,
      .addNum {
        img {
          width: 0.625vw;
        }
      }
      &-page {
        & > section {
          height: 1.5625vw;
        }
        .y {
          margin: 0 0.2604vw;
          width: 1.5625vw;
          height: 1.5625vw;
          font-size: 1.0417vw;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .informationPage {
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
  .lists {
    .str_s_black {
      margin: 10px 20px;
      font-size: 16px;
    }
    &-in {
      flex-direction: column;
      width: 100%;
      margin-bottom: 90px;
      padding: 0;
      &-img {
        order: 1;
        width: 100%;
        margin-left: 0;
      }
      &-context {
        order: 2;
        padding: 10px 30px 0;
        &-top {
          margin-bottom: 10px;
          flex-direction: column;
          .title {
            font-size: 20px;
            color: var(--indexColor1);
          }
          .time {
            & > span {
              text-align: left;
              font-size: 16px;
            }
            .shareIcon {
              &-in {
                &-item {
                  padding: 3px 10px;
                }
              }
            }
          }
        }
        .desc {
          font-size: 16px;
          text-align: justify;
        }
        .tags {
          font-size: 16px;
          text-align: justify;
        }
        .btn {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          a {
            margin: 0 auto;
            font-size: 28px;
            padding: 8px 29px;
          }
        }
      }
    }
    &-btn {
      & > div {
        font-size: 20px;
        margin: 0 5px;
      }
      &-page {
        & > section {
          height: 25px;
        }
        .y {
          width: 25px;
          height: 25px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
