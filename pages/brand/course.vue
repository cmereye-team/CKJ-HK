<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { ref } from 'vue'
import { Controller, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
const appState = useAppState()
appState.setBrand('course')

let swiperRef = {
  slidePrev: () => {},
  slideNext: () => {},
}
const setSwiperRef = (swiper: any) => {
  swiperRef = swiper
}
const handleProcessBtn = (_type: string) => {
  swiperRef[_type]()
}
useHead({
  title: '品牌介紹 | 口腔專科醫院',
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
  img: 'https://static.cmereye.com/imgs/2024/06/26b5fe0384118903.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/a59e0a87dfb394f1.jpg',
  pageName: 'course-new',
  pcText: [],
  mbText: [],
}

const introduceData = {
  title: 'pages.brand.course.introduce.title',
  content: 'pages.brand.course.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2024/01/64f1f4312e2a0f2c.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2024/01/f4ba25aef63c2a5b.jpg',
  tabNavName: 'pages.brand.course.introduce.tabNavName',
}

const courseData = {
  title: 'pages.brand.course.history.title',
  lists: [
    {
      timeNode: '1995',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_1995.context',
        },
      ],
    },
    {
      timeNode: '2000',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2000.context',
        },
      ],
    },
    {
      timeNode: '2006',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2006.context',
        },
      ],
    },
    {
      timeNode: '2008',
      events: [
        {
          month: '5月',
          context: 'pages.brand.course.history.time_2008.context_5',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2008.context_7',
        },
        {
          month: '10月',
          context: 'pages.brand.course.history.time_2008.context_10',
        },
        {
          month: '11月',
          context: 'pages.brand.course.history.time_2008.context_11',
        },
      ],
    },
    {
      timeNode: '2009',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2009.context_4',
        },
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2009.context_6',
        },
        {
          month: '7月',
          context: 'pages.brand.course.history.time_2009.context_7',
        },
      ],
    },
    {
      timeNode: '2010',
      events: [
        {
          month: '4月',
          context: 'pages.brand.course.history.time_2010.context_4',
        },
      ],
    },
    {
      timeNode: '2011',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2011.context',
        },
      ],
    },
    {
      timeNode: '2012',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2012.context',
        },
      ],
    },
    {
      timeNode: '2014',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2014.context',
        },
      ],
    },
    {
      timeNode: '2015',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2015.context',
        },
      ],
    },
    {
      timeNode: '2016',
      events: [
        {
          month: '1月',
          context: 'pages.brand.course.history.time_2016.context_1',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2016.context_12',
        },
      ],
    },
    {
      timeNode: '2017',
      events: [
        {
          month: '5月',
          context: 'pages.brand.course.history.time_2017.context_5',
        },
        {
          month: '8月',
          context: 'pages.brand.course.history.time_2017.context_8',
        },
      ],
    },
    {
      timeNode: '2018',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2018.context',
        },
      ],
    },
    {
      timeNode: '2019',
      events: [
        {
          month: '',
          context: 'pages.brand.course.history.time_2019.context',
        },
      ],
    },
    {
      timeNode: '2020',
      events: [
        {
          month: '11月',
          context: 'pages.brand.course.history.time_2020.context_11',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2020.context_12',
        },
      ],
    },
    {
      timeNode: '2021',
      events: [
        {
          month: '6月',
          context: 'pages.brand.course.history.time_2021.context_6',
        },
        {
          month: '9月',
          context: 'pages.brand.course.history.time_2021.context_9',
        },
        {
          month: '12月',
          context: 'pages.brand.course.history.time_2021.context_12',
        },
      ],
    },
    {
      timeNode: '2022',
      events: [
        {
          month: '12月',
          context: '榮獲「2022值得網民信賴品牌」稱號',
        },
      ],
    },
    {
      timeNode: '2023',
      events: [
        {
          month: '2月',
          context: `集團恒潔門診部榮獲醫療質量A級單位<br />深圳愛康健口腔醫院榮獲市醫療服務質量A級單位`,
        },
        {
          month: '11月',
          context: `榮獲深圳職業技術大學授牌「勞動教育示範基地」<br />集團雅健門診獲評2023年度醫療質量A級單位<br />深圳愛康健口腔醫院入選「全國商業健康保險合作試點基地」`,
        },
        {
          month: '12月',
          context: '榮獲「2023年度深圳值得網民信賴品牌」稱號',
        },
      ],
    },
    {
      timeNode: '2024',
      events: [
        {
          month: '2月',
          context: `愛康健口腔裕亨診所於福田口岸旁開業<br />深圳愛康健口腔醫院納入「香港長者醫療券大灣區試點計劃」牙科醫療機構`,
        },
        {
          month: '3月',
          context: `深圳愛康健口腔醫院榮獲「傑出大灣區牙科醫療服務機構」`,
        },
        {
          month: '7月',
          context: '深圳愛康健口腔醫院榮獲「傑出跨境牙科醫療服務」',
        },
        {
          month: '8月',
          context: '香港長者醫療券在深圳愛康健口腔醫院正式使用',
        },
      ],
    },
  ],
}

let _lists = JSON.parse(JSON.stringify(courseData.lists))
let newCourseLists = _lists.reverse()

let currtNum = ref(0)

const firstSwiper: any = ref(null)
const secondSwiper = ref(null)
const handleFirstSwiper = (swiper) => {
  let _index = swiper.clickedIndex
  firstSwiper.value.slideToLoop(_index)
}

const setFirstSwiper = (swiper) => {
  firstSwiper.value = swiper
}
const setSecondSwiper = (swiper) => {
  secondSwiper.value = swiper
}

const changeSwiper = (swiper) => {
  currtNum.value = swiper.activeIndex
}

const is_shade = ref(false)
const shadeOpen = () => {
  is_shade.value = !is_shade.value
}

let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>

<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title smallPageCon">關於愛康健</div>
      <div class="introduce bigPageCon">
        <div
          class="introduce-in"
          :style="{
            background: `url(${introduceData.pcImg}) no-repeat`,
            backgroundPosition: 'right top',
            backgroundSize: 'auto 100%',
          }"
        >
          <div class="tabNav noTitle smallPageCon">
            <nuxt-link
              :to="'/'"
              title="深圳愛康健口腔醫院"
              alt="深圳愛康健口腔醫院"
            >
              <span>{{ $t('pages.index.title') }}</span>
            </nuxt-link>
            <!-- <nuxt-link :to="''">
              <span>{{ $t('pages.brand.title') }}</span>
            </nuxt-link> -->
            <span :title="'關於愛康健'">關於愛康健</span>
          </div>
          <div class="introduce-in-t mbBox">
            <img :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l smallPageCon">
            <div class="title">關於愛康健</div>
            <div class="content">
              作為深圳口腔專科醫院，深圳愛康健口腔醫院秉承著“專科·專業”的服務宗旨，對醫療資源進行了科學、合理的整合。
              醫師團隊是畢業於國內知名口腔學院的專業人員；醫院各專業帶頭人，包括種植醫師、美學修復醫師、牙周病醫師等共同組成，帶領一批醫護人員一起構成愛康健口腔醫院的服務團隊。全程式預約一體化診療服務，讓每一位顧客享受健康微笑之旅。
            </div>
          </div>
        </div>
      </div>
      <!--       
      <div class="course-action">
        <div class="course-action-in">
          <div class="course-action-in-l">
            <img loading="lazy" src="https://static.cmereye.com/imgs/2024/01/84dc48aa55e716a2.jpg" alt="">
          </div>
          <div class="course-action-in-r">
            <div class="t">
              <div class=t-t>
                <div class="title">香港工聯會參觀交流</div>
                <div class="time">2023年12月15日</div>
              </div>
              <div class="context">接待香港工聯會代表團，交流牙科醫療服務發展及趨勢</div>
            </div>
            <div class="b">
              <div class="btn">
                <a href="/brand/action-message">查看全文</a>
              </div>
              <div class="text">團體交流</div>
            </div>
          </div>
        </div>
        <div class="course-action-in">
          <div class="course-action-in-l">
            <img loading="lazy" src="https://static.cmereye.com/imgs/2024/06/b487c07b1769be56.jpg" alt="">
          </div>
          <div class="course-action-in-r">
            <div class="t">
              <div class=t-t>
                <div class="title">香港華人牙醫公會參觀交流</div>
                <div class="time">2024年5月30日</div>
              </div>
              <div class="context">我們接待了香港華人牙醫公會的訪問團隊，此次訪問旨在進一步加強與香港在口腔醫療領域的學習與交流。</div>
            </div>
            <div class="b">
              <div class="btn">
                <a href="/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association">查看全文</a>
              </div>
              <div class="text">團體交流</div>
            </div>
          </div>
        </div>
        <div class="course-action-in">
          <div class="course-action-in-l">
            <img loading="lazy" src="https://static.cmereye.com/imgs/2024/06/7ea5e8d2d7e2be8c.jpg" alt="">
          </div>
          <div class="course-action-in-r">
            <div class="t">
              <div class=t-t>
                <div class="title">愛心洗牙啟動禮公益活動</div>
                <div class="time">2024年5月30日</div>
              </div>
              <div class="context">與立法會議員、香港中旅集團及社福團體，為過千位長者及有需要人士提供免費基層牙科醫療及交通接送服務</div>
            </div>
            <div class="b">
              <div class="btn">
                <a href="/brand/love-teeth-wash-launching-ceremony-public-welfare-activity">查看全文</a>
              </div>
              <div class="text">公益活動</div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="course">
        <div class="course-title dentistryServices-title">
          <div class="course-title-in dentistryServices-title-in bb">
            {{$t(courseData.title)}}
          </div>
        </div>
        <div class="course-in">
          <div class="historyNode-pc">
            <div class="historyNode-pc-t">
              <swiper
                :slidesPerView="1"
                class="courseSwiperT"
                :modules="[Controller]"
                :width="145"
                :translate="145"
                @swiper="setFirstSwiper"
                @click="handleFirstSwiper"
                @slideChange="changeSwiper"
                :controller="{ control: secondSwiper }"
              >
                <swiper-slide :class="['swiper-slide']" v-for="(courseItem,courseIndex) in newCourseLists" :key="courseIndex">
                  <div class="timeNode">{{courseItem.timeNode}}</div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="historyNode-pc-line">
              <div class="historyNode-pc-line-in"></div>
            </div>
            <div class="historyNode-pc-b">
              <swiper
                class="courseSwiperB"
                :modules="[Controller]"
                @swiper="setSecondSwiper"
                @click="handleFirstSwiper"
                :controller="{ control: firstSwiper }"
              >
                <swiper-slide :class="['swiper-slide']" v-for="(courseItem,courseIndex) in newCourseLists" :key="courseIndex">
                  <div class="courseBox">
                    <div class="courseBox-line">
                      <div class="round" :class="{currtNumRound: currtNum >= courseIndex}"></div>
                    </div>
                    <div class="courseBox-in">
                      <div class="courseBox-in-lists">
                        <div class="courseBox-in-listItem" v-for="(courseTimeNodeItem,courseTimeNodeIndex) in courseItem.events" :key="courseTimeNodeIndex">
                          <div class="month">{{courseTimeNodeItem.month}}</div>
                          <div class="context">{{$t(courseTimeNodeItem.context)}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="historyNode-mb">
            <div class="historyNode-in" v-for="(courseItem,courseIndex) in courseData.lists" :key="courseIndex">
              <div :class="['historyNode-box',{'act-historyNode-box': currtNum === courseIndex}]" >
                <div class="year" @click="currtNum = courseIndex">{{courseItem.timeNode}}</div>
                <div :class="['eventsItem',{'act-eventsItem': currtNum === courseIndex}]" v-for="(eventsItem,eventsIndex) in courseItem.events" :key="eventsIndex">
                  <div class="month">{{eventsItem.month}}</div>
                  <div class="context">{{$t(eventsItem.context)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="new_course_bg">
        <a id="course" class="hash_link"></a>
        <div class="new_course">
          <!-- <div class="new_course_name">{{ $t(courseData.title) }}11</div> -->
          <div class="dentistryServices-title reason-title">
            <div class="dentistryServices-title-in bb reason-title-in">
              {{ $t(courseData.title) }}
            </div>
          </div>
          <div>
            <div v-for="(item, index) in newCourseLists" :key="index">
              <div
                class="new_node_time"
                :id="`${item.timeNode == 2019 ? 'is_2019' : ''}`"
              >
                {{ item.timeNode }}
              </div>
              <div
                v-for="(el, indexI) in item.events"
                :key="indexI"
                class="detail"
              >
                <div>{{ el.month }}</div>
                <div v-html="$t(el.context)" class="new_context"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mobile_shade"
          v-if="windowWidth < 768 && !is_shade"
          @click="shadeOpen"
        >
          <div>1995-2019</div>
          <div><img src="../../assets/images/roteaDow.svg" alt="" /></div>
        </div>
        <div v-if="windowWidth > 768" class="sidebar_1">
          <img
            src="https://static.cmereye.com/imgs/2024/08/fb4142fe516f3d53.png"
            alt=""
          />
        </div>
        <div v-if="windowWidth > 768" class="sidebar_2">
          <img
            src="https://static.cmereye.com/imgs/2024/08/abb28f29a6f4050f.png"
            alt=""
          />
        </div>
        <div v-if="windowWidth > 768" class="sidebar_3">
          <img
            src="https://static.cmereye.com/imgs/2024/08/110c782184754389.png"
            alt=""
          />
        </div>
      </div>
      <div class="new_course_box">
        <a id="activity" class="hash_link"></a>
        <div class="dentistryServices-title reason-title">
          <div class="dentistryServices-title-in bb reason-title-in">
            最新活動
          </div>
        </div>
        <BrandCourse />
      </div>
      <div class="honor-box">
        <a id="honor" class="hash_link"></a>
        <!-- 荣誉 -->
        <div class="honor">
          <div class="honor-bg">
            <div class="dentistryServices-title reason-title">
              <div class="dentistryServices-title-in bb reason-title-in">
                品牌榮譽
              </div>
            </div>
            <div class="honor-new_text">
              <p>CKJ愛康健口腔品牌連鎖</p>
              <p>專注口腔，屢獲殊榮</p>
            </div>
            <div class="honor-title">
              <span>{{
                $t('pages.brand.honor.honorSwiper.title.span_1')
              }}</span>
              <span>{{
                $t('pages.brand.honor.honorSwiper.title.span_2')
              }}</span>
            </div>
            <div class="honor-in smallPageCon">
              <div class="leftBtn" @click="handleProcessBtn('slidePrev')"></div>
              <swiper
                slidesPerView="auto"
                :loop="true"
                class="honorSwiper"
                @swiper="setSwiperRef"
              >
                <swiper-slide class="swiper-slide">
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/06/154e36113fa5e579.png"
                    alt=""
                  />
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                  <img
                    loading="lazy"
                    src="https://static.cmereye.com/imgs/2023/06/ac0aa9264119857f.png"
                    alt=""
                  />
                </swiper-slide>
              </swiper>
              <div
                class="rightBtn"
                @click="handleProcessBtn('slideNext')"
              ></div>
            </div>
          </div>
        </div>
        <!-- 国际 -->
        <div class="international">
          <div class="international-title">
            <span>{{
              $t('pages.brand.honor.international.title.span_1')
            }}</span>
            <span>{{
              $t('pages.brand.honor.international.title.span_2')
            }}</span>
          </div>
          <div class="international-context">
            {{ $t('pages.brand.honor.international.context.item_1') }}<br />
            {{ $t('pages.brand.honor.international.context.item_2') }}<br />
            {{ $t('pages.brand.honor.international.context.item_3') }}<br />
            <br />
            {{ $t('pages.brand.honor.international.context.item_4') }}<br />
            {{ $t('pages.brand.honor.international.context.item_5') }}<br />
            {{ $t('pages.brand.honor.international.context.item_6') }}<br />
            {{ $t('pages.brand.honor.international.context.item_7') }}<br />
          </div>
          <div class="international-in smallPageCon">
            <!-- https://static.cmereye.com/imgs/2023/05/f358efedd13763fe.jpg -->
            <swiper
              slidesPerView="auto"
              :scrollbar="{
                hide: true,
              }"
              :modules="[Scrollbar]"
              class="internationalSwiper"
            >
              <swiper-slide class="swiper-slide">
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2023/05/077256e4a998aad2.jpg"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2023/05/d528ef75d3159deb.jpg"
                  alt=""
                />
              </swiper-slide>
              <swiper-slide class="swiper-slide">
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2023/05/bd7fb4779d941c03.jpg"
                  alt=""
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 品牌 -->
        <div class="brand">
          <div class="brand-title">
            <div class="brand-title-in">
              <span>{{ $t('pages.brand.honor.brand_item.title.span_1') }}</span>
              <span>{{ $t('pages.brand.honor.brand_item.title.span_2') }}</span>
            </div>
          </div>
          <div class="brand-context">
            {{ $t('pages.brand.honor.brand_item.context') }}
          </div>
          <div class="brand-in">
            <div>
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/9c91a9fd48c2180b.png"
                  alt=""
                />
              </div>
              <div>
                <span>{{ $t('pages.brand.honor.brand_item.in_1') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/922c7507efcd0304.png"
                  alt=""
                />
              </div>
              <div>
                <span>{{ $t('pages.brand.honor.brand_item.in_2') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/5b76646f4c37c695.png"
                  alt=""
                />
              </div>
              <div>
                <span>{{
                  $t('pages.brand.honor.brand_item.in_3.span_1')
                }}</span>
                <span>{{
                  $t('pages.brand.honor.brand_item.in_3.span_2')
                }}</span>
                <span>{{
                  $t('pages.brand.honor.brand_item.in_3.span_3')
                }}</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/c68bc087e539b6d1.png"
                  alt=""
                />
              </div>
              <div>
                <span>{{
                  $t('pages.brand.honor.brand_item.in_4.span_1')
                }}</span>
                <span>{{
                  $t('pages.brand.honor.brand_item.in_4.span_2')
                }}</span>
              </div>
            </div>
            <a
              href="https://www.gma-awards.hk01.group/%E5%BE%97%E7%8D%8E%E5%90%8D%E5%96%AE"
              target="_blank"
            >
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/017d06980d9fe3b3.png"
                  alt=""
                />
              </div>
              <div>
                <span>香港01</span>
                <span>傑出大灣區牙科醫療</span>
                <span>服務機構</span>
              </div>
            </a>
            <a
              href="https://iet2.hket.com/event/hket_excellence_awards/zh/2024-winner-list.html"
              target="_blank"
            >
              <div>
                <img
                  loading="lazy"
                  src="https://static.cmereye.com/imgs/2024/07/44b305dac44d3274.png"
                  alt=""
                />
              </div>
              <div>
                <span>香港經濟日報</span>
                <span>傑出跨境牙科</span>
                <span>醫療服務</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <NewAddress />
      <ContactForm-new2 />
    </div>
    <PageFooter />
    <PageNewNavbarSide v-if="windowWidth > 768" />
    <PageNavbar v-else />
  </div>
</template>



<style lang="scss" scoped>
// 介绍
.introduce {
  &-in {
    margin-top: 45px;
    height: 32.709vw;
    max-height: 628px;
    &-l {
      color: #666666;
      padding-bottom: 90px;
      .title {
        font-weight: 700;
        font-size: 36px;
        margin-top: 96px;
        color: var(--indexColor1);
      }
      .content {
        font-weight: 500;
        font-size: 20px;
        max-width: 500px;
        width: 500px;
        margin-top: 56px;
        text-align: justify;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 50px;
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
.course {
  margin-top: 100px;
  &-in {
    width: 100%;
    margin: 36px auto 0;
    overflow-x: hidden;
    .courseSwiperT {
      width: 732px;
      overflow: visible;
      .swiper-slide {
        width: auto;
        transition: all 0.5s;
        display: flex;
        align-items: flex-end;
        height: 96px;
        width: 145px;
        box-sizing: content-box;
        .timeNode {
          color: var(--textColor);
          text-align: center;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
          transition: all 0.5s;
          opacity: 0.6;
          width: 100%;
        }
        &.swiper-slide-active {
          padding: 0 62px 0 40px;
          .timeNode {
            font-size: 60px;
            opacity: 1;
            color: var(--indexColor1);
          }
        }
      }
    }
    .courseSwiperB {
      width: 100%;
      max-width: calc(284px + 82px);
      margin: 0 auto 0 calc((100% - 732px) / 2);
      overflow: visible;
      .swiper-slide {
        max-width: max-content;
        padding: 31px 41px;
        position: relative;
        height: auto;
        .courseBox {
          width: 284px;
          &-line {
            .round {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #fdd3e3;
              position: absolute;
              top: -9px;
              left: 41px;
              transition: all 0.3s;
              &.currtNumRound {
                background: var(--indexColor1);
              }
            }
          }
          &-in {
            opacity: 0.6;
            transition: all 0.5s;
            &-listItem {
              .month {
                color: var(--indexColor1);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
              .context {
                color: var(--textColor);
                text-align: justify;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 32px */
                letter-spacing: 2px;
              }
            }
          }
        }
        &.swiper-slide-active {
          .courseBox {
            &-in {
              opacity: 1;
            }
          }
        }
      }
    }
    .historyNode-pc-t {
      width: 100%;
      max-width: max-content;
      margin: 0 auto 33px;
    }
    .historyNode-pc-b {
      background: linear-gradient(
        rgba(252, 22, 130, 0.4) -68.47%,
        rgba(252, 22, 130, 0.28) -68.46%,
        rgba(255, 168, 198, 0) 63.88%
      );
    }
    .historyNode-pc-line {
      width: 100%;
      height: 2px;
      background: #fdd3e3;
      position: relative;
      &-in {
        position: absolute;
        top: 0;
        left: 0;
        height: 2px;
        width: calc((100% - 732px + 90px) / 2);
        background: var(--indexColor1);
      }
    }
    .historyNode-mb {
      display: none;
    }
  }
}
.sidebar_1 {
  position: absolute;
  right: 0;
  top: 0;
}
.sidebar_3 {
  position: absolute;
  right: 0;
  bottom: 9.7%;
}
.sidebar_2 {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.new_course_bg {
  margin-top: 125px;
  width: 100%;
  position: relative;
  display: block;
  .new_course_name {
    margin-top: 70px;
    margin-bottom: 45px;
    color: #fc1682;
    text-align: center;
    font-family: FakePearl;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 65px */
  }
  .new_node_time {
    color: #fc1682;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
    margin-bottom: 10px;
  }
  .hash_link {
    display: block;
    position: absolute;
    top: -250px;
  }
}
.new_course_box {
  margin: 125px auto;
  position: relative;
  .hash_link {
    display: block;
    position: absolute;
    top: -250px;
  }
}
.detail {
  display: flex;
  gap: 0 20px;
  & > div:nth-child(1) {
    color: #fc1682;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%; /* 32px */
    letter-spacing: 4px;
    width: 55px;
    min-width: 55px;
  }
  .new_context {
    color: #4d4d4d;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 190%; /* 32px */
    letter-spacing: 4px;
    padding-bottom: 0px;
  }
}
.new_course {
  max-width: 925px;
  margin: 125px auto 0;
  display: block;
  & > div:nth-child(2) {
    & > div:not(:last-child) {
      padding-bottom: 16px;
      border-bottom: 1px solid #fc1682;
    }
    & > div {
      padding-top: 16px;
      padding-right: 40px;
    }
  }
}
.course-action {
  width: 100%;
  padding: 0 30px;
  margin: 80px auto 0;
  max-width: 1280px;
  &-in {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    &-l {
      width: calc((520 / 1410) * 100%);
      margin-right: calc((40 / 1410) * 100%);
      img {
        width: 100%;
      }
    }
    &-r {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .t {
        .t-t {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            color: var(--indexColor1);
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
          }
          .time {
            color: var(--textColor);
            text-align: right;
            font-family: var(--contextFamily);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%;
          }
        }
        .context {
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 160%; /* 32px */
          margin-top: 14px;
        }
      }
      .b {
        .btn {
          background: var(--indexColor1);
          box-shadow: 0px 3.704px 7.409px 0px rgba(252, 22, 130, 0.38);
          // width: 157px;
          width: calc(400 / 892 * 100%);
          max-width: 400px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          transition: all 0.3s;
          border-radius: 30px;
          text-align: center;
          font-size: 35px;
          &:hover {
            background: var(--indexColor3);
          }
          a {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .text {
          color: var(--textColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%; /* 32px */
          // text-decoration-line: underline;
          margin-top: 22px;
          // padding-bottom: 3px;
          display: inline-block;
          border-bottom: 1px solid var(--textColor);
        }
      }
    }
  }
}
.honor-box {
  margin-top: 125px;
  margin-bottom: 125px;
  position: relative;
  .hash_link {
    display: block;
    position: absolute;
    top: -250px;
  }
}
.honor {
  margin-top: 20px;
  &-bg {
    padding: 70px 0 106px;
    background: linear-gradient(
      270deg,
      rgba(255, 241, 240, 0) 2.6%,
      rgba(255, 241, 240, 0.7) 23.89%,
      rgba(255, 241, 240, 0.7) 75.33%,
      rgba(255, 241, 240, 0) 97.4%
    );
  }
  &-new_text {
    color: var(--Black, #4d4d4d);
    text-align: center;
    font-family: FakePearl;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 44.8px */
    margin: 50px auto 80px;
  }
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      // color: #666666;
      color: var(--indexColor1);
      // &:last-child {
      //   border-bottom: 4px solid var(--indexColor1);
      // }
    }
  }
  &-in {
    margin-top: 72px;
    display: flex;
    .leftBtn {
      width: 70px;
      background: var(--indexColor2);
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-75%, -50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent #fff transparent transparent;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .rightBtn {
      width: 70px;
      background: var(--indexColor);
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -50%);
        border-top: 20px solid;
        border-right: 30px solid;
        border-bottom: 20px solid;
        border-left: 30px solid;
        border-color: transparent transparent transparent #fff;
        filter: drop-shadow(0px 0px 7.21491px rgba(255, 120, 117, 0.25));
      }
    }
    .honorSwiper {
      width: calc(100% - 140px);
      overflow: hidden;
      margin: 0;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
  }
}
.international {
  margin-top: 60px;
  &-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span {
      display: inline-block;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 160%;
      color: #666666;
      &:last-child {
        border-bottom: 4px solid var(--indexColor1);
      }
    }
  }
  &-context {
    text-align: center;
    margin-top: 44px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #666666;
  }
  &-in {
    margin-top: 58px;
    .internationalSwiper {
      padding-bottom: 44px;
      .swiper-slide {
        padding: 0 15px;
        &:nth-of-type(1) {
          width: 105%;
        }
        &:nth-of-type(2) {
          width: 91%;
        }
        &:nth-of-type(3) {
          width: 131.5%;
        }
      }
      :deep(.swiper-scrollbar) {
        opacity: 1 !important;
        width: 450px;
        margin: 0 auto;
        background: var(--indexColor2);
        left: 50%;
        transform: translateX(-50%);
      }
      :deep(.swiper-scrollbar-drag) {
        background: var(--indexColor1);
      }
    }
  }
}
.brand {
  margin-top: 80px;
  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 160%;
    color: #666666;
    display: flex;
    justify-content: center;
    &-in {
      display: inline-block;
      border-bottom: 4px solid var(--indexColor1);
      span {
        text-align: center;
        display: block;
      }
    }
  }
  &-context {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
    text-align: center;
    color: var(--indexColor1);
    margin-top: 28px;
  }
  &-in {
    width: 100%;
    max-width: 1480px;
    opacity: 0.8;
    background: linear-gradient(
      270deg,
      rgba(255, 241, 240, 0) 2.6%,
      rgba(255, 241, 240, 0.7) 23.89%,
      rgba(255, 241, 240, 0.7) 75.33%,
      rgba(255, 241, 240, 0) 97.4%
    );
    padding: 51px 0;
    margin: 61px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px 0px;
    justify-content: space-between;
    & > div,
    & > a {
      // flex: 1;
      padding: 0 15px;
      display: flex;
      align-items: center;
      & > div {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        text-align: center;
        color: #4c4c4c;
        white-space: pre-wrap;
        &:last-child {
          padding: 0 5px;
        }
        img {
          // margin: 0 auto;
          // max-width: 120px;
        }
      }
      & > div:nth-child(2) {
        color: var(--Grey-Deep, #4d4d4d);
        font-family: FakePearl;
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
@media (min-width: 1451px) and (max-width: 1920px) {
  .sidebar_1 {
    position: absolute;
    right: 0;
    top: 0;
    width: 23.4375vw;
    & > img {
      width: 100%;
    }
  }
  .sidebar_3 {
    position: absolute;
    right: 0;
    bottom: 12.7%;
    width: 29.795vw;
    & > img {
      width: 100%;
    }
  }
  .sidebar_2 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 13.95vw;
    & > img {
      width: 100%;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
  .introduce {
    &-in {
      margin-top: 3.5vw;
      &-l {
        padding-bottom: 7vw;
        .title {
          font-size: 1.875vw;
          margin-top: 6vw;
        }
        .content {
          font-size: 1.0417vw;
          margin-top: 3vw;
          width: 42vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
  }
  .course {
    margin-top: 120px;
  }
  .sidebar_1 {
    position: absolute;
    right: 0;
    top: 0;
    width: 23.4375vw;
    & > img {
      width: 100%;
    }
  }
  .sidebar_3 {
    position: absolute;
    right: 0;
    bottom: 15.625vw;
    width: 29.795vw;
    & > img {
      width: 100%;
    }
  }
  .sidebar_2 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 13.95vw;
    & > img {
      width: 100%;
    }
  }
  .brand {
    &-in {
      & > div,
      & > a {
        padding: 0 2vw;
      }
    }
  }
}

//md
@media only screen and (max-width: 768px) {
  .new_course_bg {
    margin-top: 60px;
    width: 100%;
    position: relative;
    .new_course_name {
      margin-top: 60px;
      margin-bottom: 15px;
      color: var(--Theme-Color, #fc1682);
      font-family: FakePearl;
      font-size: 26px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 41.6px */
    }
    .new_node_time {
      color: #fc1682;
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 180%; /* 32px */
    }
  }
  .new_course_box {
    margin: 60px auto 75px;
  }
  .detail {
    display: flex;
    gap: 0;
    & > div:nth-child(1) {
      color: #fc1682;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 180%; /* 19.2px */
      letter-spacing: 1.2px;
      width: 35px;
      min-width: 35px;
    }
    .new_context {
      color: #4d4d4d;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 19.2px */
      letter-spacing: 1.2px;
      padding-bottom: 10px;
    }
  }
  .mobile_shade {
    width: 100%;
    background: linear-gradient(0deg, #fff 57%, rgba(255, 255, 255, 0) 100%);
    // background: #fff;
    // background: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 145px 0 40px;
    position: absolute;
    top: 35%;
    & > div:nth-child(1) {
      color: var(--Theme-Color, #fc1682);
      text-align: justify;
      font-family: FakePearl;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 32px */
    }
  }
  .new_course {
    max-width: 925px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    & > div:nth-child(2) {
      & > div:not(:last-child) {
        padding-bottom: 16px;
        border-bottom: 1px solid #fc1682;
      }
      & > div {
        padding-top: 16px;
      }
    }
  }
  .introduce {
    &-in {
      height: auto;
      max-height: 300%;
      background: none !important;
      margin-top: 0;
      &-t {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-l {
        padding-bottom: 0;
        .title {
          padding: 0 30px;
          font-weight: 700;
          font-size: 26px;
          margin-top: 0;
        }
        .content {
          font-size: 1rem;
          width: 95%;
          padding: 0 30px;
          margin-top: 30px;
        }
      }
    }
  }
  .tabNav {
    padding: 30px;
    font-size: 1rem;
    margin-top: 20px;
  }
  .course {
    margin-top: 90px;
    &-in {
      margin-top: 0;
      padding: 42px 53px 0;
      .historyNode-pc {
        display: none;
      }
      .historyNode-mb {
        display: block;
        .year {
          color: var(--indexColor1);
          // text-align: center;
          font-size: 30px;
          font-weight: 700;
          line-height: 160%;
          background: #fff;
          display: inline-block;
          position: relative;
          z-index: 1;
          padding: 0 10px;
          animation: modulFontAnim 2s infinite;
        }
        .month {
          color: var(--indexColor1);
          text-align: justify;
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .context {
          color: var(--textColor);
          font-size: 16px;
          font-weight: 500;
          line-height: 160%;
        }
        .eventsItem {
          opacity: 0;
          transition: all 0.5s;
          transition-delay: 0.5s;
          height: 0;
          overflow: hidden;
          margin-bottom: 0;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          &.act-eventsItem {
            height: initial;
            opacity: 1;
            &:not(:last-child) {
              margin-bottom: 25px;
            }
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        .historyNode-in {
          padding-bottom: 47px;
          padding-left: 33px;
          position: relative;
          .historyNode-box {
            &::before {
              content: '';
              width: 90px;
              height: 2px;
              background: var(--indexColor1);
              position: absolute;
              top: 25.5px;
              left: 0;
              transition: all 0.5s;
              // animation: modulAnim 3s infinite;
            }
            &::after {
              content: '';
              background: url(@/assets/images/icon_15.svg);
              width: 15px;
              height: 15px;
              background-size: 100% 100%;
              position: absolute;
              top: 19px;
              left: 130px;
              transition: all 0.5s;
            }
            &.act-historyNode-box {
              &::before {
                width: calc(100% - 20px);
              }
              &::after {
                left: calc(100% - 16px);
                transform: rotate(90deg);
              }
            }
          }
          &::before {
            content: '';
            width: 2px;
            height: 100%;
            background: var(--indexColor1);
            position: absolute;
            top: 30px;
            left: 0;
          }
          &::after {
            content: '';
            width: 16px;
            height: 16px;
            background: var(--indexColor1);
            border-radius: 50%;
            position: absolute;
            top: 18px;
            left: -7.5px;
          }
          &:last-child::before {
            display: none;
          }
        }
      }
    }
  }
  .course-action {
    margin: 65px auto 0;
    padding: 0;
    &-in {
      flex-direction: column;
      &-l {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &-r {
        padding: 0 30px;
        .t {
          .t-t {
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            .title {
              margin-top: 17px;
              font-size: 18px;
            }
            .time {
              font-size: 16px;
              text-align: left;
            }
          }
          .context {
            font-size: 16px;
          }
        }
        .b {
          display: flex;
          flex-direction: column;
          .btn {
            order: 2;
            margin: 13px auto 0;
            width: 137px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
          }
          .text {
            order: 1;
            font-size: 16px;
            width: max-content;
          }
        }
      }
    }
  }
  .honor {
    margin-top: 30px;
    &-bg {
      padding: 44px 30px;
      background: linear-gradient(
        360deg,
        rgba(255, 241, 240, 0) 0%,
        rgba(255, 241, 240, 0.3) 12.5%,
        rgba(255, 241, 240, 0.3) 81.99%,
        rgba(255, 241, 240, 0) 100%
      );
    }
    &-title {
      span {
        font-size: 26px;
        &:last-child {
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-in {
      margin-top: 35px;
      .leftBtn {
        width: 15.5px;
        &::after {
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent #fff transparent transparent;
        }
      }
      .rightBtn {
        width: 15.5px;
        &::after {
          border-top: 5px solid;
          border-right: 7px solid;
          border-bottom: 5px solid;
          border-left: 7px solid;
          border-color: transparent transparent transparent #fff;
        }
      }
      .honorSwiper {
        width: calc(100% - 31px);
      }
    }
  }
  .international {
    margin-top: 30px;
    &-title {
      span {
        font-size: 26px;
        &:last-child {
          border-bottom: 2.5px solid var(--indexColor1);
        }
      }
    }
    &-context {
      font-weight: 500;
      font-size: 14px;
      margin-top: 28px;
    }
    &-in {
      margin-top: 28px;
      .internationalSwiper {
        padding-bottom: 30px;
        .swiper-slide {
          padding: 0 5px;
          &:nth-of-type(1) {
            margin-left: 25px;
          }
        }
        :deep(.swiper-scrollbar) {
          width: 249px;
        }
      }
    }
  }
  .brand {
    margin-top: 50px;
    &-title {
      font-size: 26px;
      &-in {
        border-bottom: 2.5px solid var(--indexColor1);
      }
    }
    &-context {
      margin-top: 8px;
      font-size: 14px;
    }
    &-in {
      margin: 24.68px auto 0;
      padding: 0 21.5px;
      display: grid;
      // flex-wrap: wrap;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px 0px;
      // justify-content: center;
      padding: 35px 0;
      box-sizing: border-box;
      justify-items: center;
      & > div,
      & > a {
        // flex: initial;
        // width: calc(100% / 3);
        // padding: 0 8.5px 10px;
        gap: 0 5px;
        padding: 0;
        & > div:nth-child(1) {
          font-size: 8px;
          width: 17.94vw;
          height: 17.94vw;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          min-width: 19.23vw;
          display: flex;
          text-align: left;
          font-weight: 600;
          line-height: 130%; /* 12.12px */
          font-size: 2.3vw;
          padding: 0;
          flex-direction: column;
          letter-spacing: 0;
          & > span {
            display: inline;
            color: var(--Grey-Deep, #4d4d4d);
            font-family: FakePearl;
            font-style: normal;
          }
        }
      }
    }
  }
  .honor-box {
    margin-top: 60px;
    margin-bottom: 0;
    opacity: 0.8;
    background: linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0.89%,
      rgba(255, 241, 240, 0.7) 22.95%,
      rgba(255, 241, 240, 0.7) 76.25%,
      rgba(255, 241, 240, 0) 99.11%
    );
  }
}
</style>