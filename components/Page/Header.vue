<script lang="ts" setup>
import { defineProps } from "vue"
import { useAppState } from '~/stores/appState'
import gsap from 'gsap';
const route = useRoute()
const appState = useAppState()
defineProps({
  headerConfig: {
    type: Object,
    default(){
      return {
        img: 'https://static.cmereye.com/imgs/2023/05/71929ca4c90a8d1e.png',
        bg: 'https://static.cmereye.com/imgs/2023/05/d8084e8da90409aa.jpg',
        mbImg: 'https://static.cmereye.com/imgs/2023/04/b0d950232420bf46.jpg',
        pageName: 'index',
        pcText: ['重拾自信笑容','愛牙愛己，由你做起'],
        mbText: ['重拾自信笑容','愛牙愛己，由你做起']
      }
    }
  },
})

const menuLists = [
  {
    name: 'components.header.menuLists.menu_index.name',
    link: '/',
    child: [],
  },
  // {
  //   name: '最新消息',
  //   link: '/newsPage',
  //   child: [],
  // },
  {
    name: 'components.header.menuLists.menu_brand.name',
    link: `/brand/${appState.brand}`,
    child: [
      {
        name: 'components.header.menuLists.menu_brand.course',
        link: '/brand/course',
      },
      {
        name: 'components.header.menuLists.menu_brand.honor',
        link: '/brand/honor',
      },
    ],
  },
  {
    name: 'components.header.menuLists.menu_dental_service.name',
    link: `/dental-service`,
    child: [
      // {
      //   name: '',
      //   link: ''
      // }
      {
        name: 'service.implant',
        link: '/dental-service/implant',
      },
      {
        name: 'service.orthodontics',
        link: '/dental-service/orthodontics',
      },
      {
        name: 'service.rootCanal',
        link: '/dental-service/rootCanal',
      },
      {
        name: 'service.invisalign',
        link: '/dental-service/invisalign',
      },
      {
        name: 'service.veneers',
        link: '/dental-service/veneers',
      },
      {
        name: 'service.all_ceramic_crowns',
        link: '/dental-service/all-ceramic-crowns',
      },
      {
        name: 'service.wisdom_teeth_extraction',
        link: '/dental-service/wisdom-teeth-extraction',
      },
      {
        name: 'service.periodontal',
        link: '/dental-service/periodontal',
      },
      {
        name: 'service.toothtray',
        link: '/dental-service/toothtray',
      },
      {
        name: 'service.teeth_whitening',
        link: '/dental-service/teeth-whitening',
      },
      {
        name: 'service.scaling_and_polishing',
        link: '/dental-service/scaling-and-polishing',
      },
      {
        name: 'service.fillings',
        link: '/dental-service/fillings',
      },
      {
        name: 'service.general_oral_examination',
        link: '/dental-service/general-oral-examination',
      },
      {
        name: 'service.children_dentistry',
        link: '/dental-service/children-dentistry',
      }
    ],
  },
  {
    name: 'components.header.menuLists.menu_medical_team.name',
    link: `/medical-team`,
    child: [
      {
        name: 'components.areaTabs.luohu',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.futian',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.nanshan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.baoan',
        link: '/medical-team',
      },
      {
        name: 'components.areaTabs.longhua',
        link: '/medical-team',
      },
    ],
  },
  // {
  //   name: 'components.header.menuLists.menu_caseSharing.name',
  //   link: '/aboutUs',
  //   child: [],
  // },
  {
    name: 'components.header.menuLists.menu_contactUs.name',
    link: '/contactUs',
    child: [],
  },
]

const headerData = {
  bannerTitleSpanOne: '重拾自信笑容',
  bannerTitleSpanTwo: '愛牙愛己，由你做起',
  bannerText: '全程式預約一體化診療服務，讓每一位顧客享受',
  bannerTextSpan: '健康微笑之旅。',
  menuBoxBtn: '立即預約',
  menuBoxPhone: '6912 2011'
}

let menuBoxBool = ref(false)

let menuActNum = ref(0)
const handleMenu = (_idx: number) => {
  if(menuActNum.value === _idx)
    menuActNum.value = 0
  else
    menuActNum.value = _idx
  // console.log(menuActNum)
}

const handleMenuChild = ( _menu:any, _idx: number) =>{
  if(_menu.link.includes('medical-team')){
    appState.setCurNum(_idx)
    menuBoxBool.value = false
  }
}
const classNamefilter = ( _menu:any, _idx: number) => {
  let className = ''
  if(route.path === '/medical-team'){
    if(_menu.link.includes('medical-team')){
      if(appState.areaTabCurNum === _idx){
        className = 'menuChildCurrent'
      }
    }
  }else if(route.path.includes('/brand')){
    if(_menu.link.includes(appState.brand)){
      className = 'menuChildCurrent'
    }
  }else if(route.path.includes('/dental-service')){
    if(_menu.link.includes(appState.dentistryService)){
      className = 'menuChildCurrent'
    }
  }

  return className
}

const imgBgHeight = ref({
  clientHeight: 0
})

let isFiexdHeader = ref(false)
onMounted(() => {
  gsap.from('.header-content-bgImg-in', {
    opacity: 0, 
    y: 100, 
    duration: 2
  })
  gsap.from('.header-content-bgImg-imgInfo', {
    opacity: 0, 
    y: 100, 
    duration: 2
  })
  // gsap.to(".header-content-in", {
  //   duration: 0.5,
  //   y: 0,
  //   ease: "power1.inOut",
  //   scrollTrigger: {
  //     trigger: ".header-content-in",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //     pin: true,
  //     pinSpacing: false
  //   }
  // });
  getScrollHeight()
  getWindowWidth()
  window.addEventListener('scroll',getScrollHeight)
  window.addEventListener('resize',getWindowWidth)
});
let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
let isShowLanguageBool = ref(false)
const getScrollHeight = () => {
  // console.log('windowScrollY: ----->',window.scrollY)
  if(imgBgHeight.value.clientHeight < window.scrollY){
    isFiexdHeader.value = true
  }else{
    isFiexdHeader.value = false
  }
  if(window.scrollY === 0){
    isShowLanguageBool.value = true
  }else{
    isShowLanguageBool.value = false
  }
}


const handleMbMenu = () => {
  // console.log('navigator ----- >',window.navigator.onLine)
  if(!window.navigator.onLine){
    ElMessage({
      showClose: true,
      message: '網路異常，請檢查網路後重試',
      type: 'warning',
      // duration: 0
    })
  }
}

</script>

<template>
  <header>
    <div class="header-content">
      <!-- <div class="LanguageSwitcher" :style="{opacity:isShowLanguageBool?'1':'0'}">
        <div class="LanguageSwitcher-in pageCon">
          <LanguageSwitcher />
        </div>
      </div> -->
      <div class="header-content-bgImg">
        <img class="imgBgBox pcBox" :src="headerConfig.bg" alt="">
        <div class="header-content-bgImg-imgInfo bigPageCon">
          <img
            :class="['pcBox',headerConfig.pageName]"
            :src="headerConfig.img"
            alt=""
          />
        </div>
        <img
          :class="['mbBox','header-content-bgImg-mbImg',headerConfig.pageName]"
          :src="headerConfig.mbImg"
          alt=""
        />
        <div class="header-content-bgImg-textInfo pageCon">
          <div :class="['header-content-bgImg-in',headerConfig.pageName]">
            <div :class="['bannerTitle',headerConfig.pageName]">
              <span>{{windowWidth>768?headerConfig.pcText[0]:headerConfig.mbText[0]}}</span>
              <span>{{windowWidth>768?headerConfig.pcText[1]:headerConfig.mbText[1]}}</span>
            </div>
            <div class="text">
              {{headerData.bannerText}}
              <span>{{headerData.bannerTextSpan}}</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="header-content-bgImgBB pageCon pcBox" ref="imgBgHeight">
        <img
          :src="headerConfig.img"
          alt=""
        />
      </div>
      <!-- pc菜单 -->
      <div :class="isFiexdHeader ? 'headerBox02': 'headerBox01'">
        <div class="pageCon header-content-in" ref="headerMenu">
          <div class="logo">
            <nuxt-link :to="'/'"
              ><img src="@/assets/images/logo_1.png" alt=""
            /></nuxt-link>
          </div>
          <div class="menu">
            <div class="menuItem"
              v-for="(menuItem, menuIndex) in menuLists"
              :key="menuIndex"
            >
              <nuxt-link :class="menuItem.child.length ? 'triangleIcon' : ''" :to="menuItem.link">
              {{ $t(menuItem.name) }}
              </nuxt-link>
              <div class="menuChild" v-if="menuItem.child.length && !menuItem.link.includes('/dental-service')">
                <div :class="['menuChild-item', classNamefilter(menuChildItem,menuChildIndex)]" v-for="(menuChildItem,menuChildIndex) in menuItem.child" :key="menuChildIndex" @click="handleMenuChild(menuItem,menuChildIndex)">
                  <nuxt-link :to="menuChildItem.link">
                  {{ $t(menuChildItem.name) }}
                  </nuxt-link>
                </div>
              </div>
              <div class="menuChild serviceCard" v-if="menuItem.link.includes('/dental-service')">
                <serviceCard :isMenu="true" />
              </div>
            </div>
          </div>
          <div class="icon" @click="menuBoxBool = !menuBoxBool">
            <img v-if="!menuBoxBool" src="@/assets/images/icon_6.png" >
            <img v-else src="@/assets/images/icon_7.png" >
          </div>
        </div>
      </div>
      <!-- mb菜单 -->
      <div class="menuBox" :style="{top: (menuBoxBool ? '0' : '-100vh')}">
        <div class="menuLists">
          <div :class="['menuLists-item',item.child.length ? 'childIcon' : '']" v-for="(item, index) in menuLists" :key="index">
            <nuxt-link :to="!item.child.length ? item.link : ''">
              <div @click="handleMenu(index)">
                {{$t(item.name)}}
              </div>
            </nuxt-link>
            <div class="menuLists-childLists" v-if="item.child.length" v-show="menuActNum === index">
              <div class="menuLists-childLists-item" v-for="(itemChild,itemChildIndex) in item.child" :key="itemChildIndex" @click="handleMenuChild(item,itemChildIndex)">
                <nuxt-link :to="itemChild.link" @click.native="handleMbMenu">
                {{$t(itemChild.name)}}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 立即預約 -->
        <nuxt-link to="tel: 6912 2011">
          <div class="menuBox-btn">
            {{headerData.menuBoxBtn}}
          </div>
        </nuxt-link>
        <div class="menuBox-phone">
          <img src="@/assets/images/icon_11.png" >{{headerData.menuBoxPhone}}
        </div>
        <div class="menuBox-icon">
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.facebook.com/ckjdental.hk/" target="_blank">
              <img src="@/assets/images/icon_01.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.instagram.com/ckj_hk/" target="_blank">
              <img src="@/assets/images/icon_02.png" />
            </nuxt-link>
          </div>
          <div class="menuBox-icon-in">
            <nuxt-link to="https://www.youtube.com/channel/UCKYINBITo-8P37-SQDRSr_g"  target="_blank">
              <img src="@/assets/images/icon_03.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- 水波纹盒子 -->
      <div class="waterBg"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.LanguageSwitcher{
  width: 100%;
  background: rgba(255, 255, 255,.5);
  height: 30px;
  position: fixed;
  z-index: 38;
  transition: all 1s;
  &-in{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  // display: none;
}
.header-content {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  &-bgImg {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    &-imgInfo{
      &>img{
        &.brand{
          float: right;
        }
        &.implant{
          float: right;
          margin-right: calc((100% - 1452px)/2);
        }
        &.rootCanal,&.orthodontics{
          float: right;
          margin-right: calc((100% - 1600px)/2);
        }
        &.toothtray,&.general-oral-examination{
          float: right;
          margin-right: calc((100% - 1700px)/2);
        }
        &.invisalign,&.veneers,&.wisdom-teeth-extraction,&.periodontal,&.teeth-whitening,&.scaling-and-polishing,&.children-dentistry,&.all-ceramic-crowns{
          float: right;
          margin-right: calc((100% - 1920px)/2);
        }
        &.fillings{
          float: right;
          margin-right: calc((100% - 1200px)/2);
        }
      }
    }
    &-mbImg{
      &.veneers,&.periodontal{
        -moz-transform: matrix(-1,0,0,1,0,0);
        -o-transform: matrix(-1,0,0,1,0,0);
        -webkit-transform: matrix(-1,0,0,1,0,0);
        transform: matrix(-1,0,0,1,0,0);
      }
    }
    &-textInfo{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    .imgBgBox{
      width: 100%;
      min-height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -2;
    }
    .imgBgBox-1{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -3;
      filter: blur(10px);
    }
    &>img {
      width: 100%;
    }
    &-in{
      position: absolute;
      left: 55%;
      top: 30%;
      .bannerTitle{
        font-weight: 700;
        font-size: 42px;
        line-height: 160%;
        color: #666666;
        span{
          display: block;
          &:last-child{
            margin-left: 200px;
          }
        }
        &.rootCanal,&.wisdom-teeth-extraction{
          span{
            &:last-child{
              margin-left: 120px;
            }
          }
        }
        &.toothtray,&.scaling-and-polishing,&.invisalign{
          span{
            &:last-child{
              margin-left: 130px;
            }
          }
        }
      }
      .text{
        margin-top: 32px;
        max-width: 550px;
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 160%;
        color: #666666;
        width: 73%;
        span{
          font-size: 25px;
          color: #FFCECB;
        }
      }
      &.brand{
        left: 0;
      }
      &.implant,&.orthodontics,&.rootCanal,&.invisalign,&.veneers,&.all-ceramic-crowns{
        left: 0;
        top: 25%;
      }
      &.wisdom-teeth-extraction,&.periodontal,&.toothtray,&.teeth-whitening,&.scaling-and-polishing{
        left: 0;
        top: 25%;
      }
      &.fillings,&.general-oral-examination,&.children-dentistry{
        left: 0;
        top: 25%;
      }
    }
  }
  &-bgImgBB{
    opacity: 0;
  }
  &-in {
    width: 100%;
    max-width: 1512px;
    display: flex;
    background: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px 0 30px;
    // padding-top: 20px;
    align-items: flex-end;
    z-index: 40;
    position: relative;
    transition: all .5s;
    .logo {
      width: 290px;
      margin-bottom: 20px;
    }
    .menu {
      flex: 1;
      color: #666666;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .menuItem {
        padding: 0 0 20px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        position: relative;
        &>a{
          padding: 0 20px 20px;
        }
        .triangleIcon:after {
          content: '';
          width: 0px;
          height: 0px;
          border: 10px solid;
          border-color: #666666 transparent transparent transparent;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .triangleIcon:hover{
          &:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &>.router-link-exact-active{
          color: #ffa09e;
          text-decoration-line: underline;
          &.triangleIcon:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &:hover {
          color: #ffa09e;
          text-decoration-line: underline;
          .triangleIcon:after{
            border-color: #ffa09e transparent transparent transparent;
          }
        }
        &:hover .menuChild{
          display: flex;
        }
        .menuChild{
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 130%;
          z-index: 2;
          display: none;
          flex-direction: column;
          transition: all .3s;
          padding: 0 20px 5px;
          box-sizing: border-box;
          background: #FFFFFF;
          filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.15));
          border-radius: 6px;
          &-item{
            width: 100%;
            text-align: center;
            padding: 10px 0 5px;
            font-weight: 500;
            font-size: 18px;
            color: #666666;
            transition: all .3s;
            &:not(:last-child){
              border-bottom: 1px solid #FFF1F0;
            }
            &:hover{
              color: #FFA09E;
            }
            &.menuChildCurrent{
              color: #FFA09E;
            }
          }
          &::before{
            content: '';
            width: 0px;
            height: 0px;
            border: 10px solid;
            border-color: transparent transparent #fff transparent;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .serviceCard{
          width: 428px;
          padding: 12px 6px;
        }
      }
    }
    .icon{
      display: none;
    }
  }
  .waterBg{
    position: relative;
    z-index: 35;
  }
  .headerBox01{
    position: relative;
    background: #fff;
    width: 100%;
  }
  .headerBox02{
    position: fixed;
    background: #fff;
    top: 0;
    width: 100vw;
    z-index: 100;
    box-shadow: 0px 4px 8px #FFDDDA;
    .header-content-in{
      align-items: center;
    }
  }
}
.waterBg::after {
  content: '';
  background-image: url(@/assets/images/back_wave01.png);
  background-repeat: repeat-x;
  background-position: center 20px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 35;
  left: 0px;
  bottom: 0px;
  animation-name: wave1;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave1;
  -webkit-animation-duration: 20s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  filter: drop-shadow(0px -8px 4px rgba(77, 77, 77, 0.15));
}
@keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
@-webkit-keyframes wave1 {
  0% {
    background-position: 0px 20px;
  }
  100% {
    background-position: 1080px 20px;
  }
}
.waterBg::before {
  content: '';
  background-image: url(@/assets/images/back_wave03.png);
  background-repeat: repeat-x;
  background-position: center bottom;
  // background-size: auto 80px;
  height: 162px;
  width: 100%;
  position: absolute;
  z-index: 35;
  left: 0px;
  bottom: 0px;
  animation-name: wave2;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave2;
  -webkit-animation-duration: 10s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}
@keyframes wave2 {
  0% {
    background-position: 0px bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
@-webkit-keyframes wave2 {
  0% {
    background-position: 0 bottom;
  }
  100% {
    background-position: 1080px bottom;
  }
}
.menuBox{
  display: none;
}

@media (min-width: 768px) and (max-width: 1000px) {
  .header-content {
    &-bgImg {
      &-in{
        left: 50%;
        // top: 15%;
        .bannerTitle{
          font-size: 2.0rem;
          line-height: 130%;
          span{
            display: block;
            &:last-child{
              margin-left: 10%;
            }
          }
        }
        .text{
          margin-top: 1%;
          font-size: 1.2rem;
          line-height: 130%;
          span{
            font-size: 1.2rem;
            color: #FFCECB;
          }
        }
      }
    }
  }
  .waterBg::after,.waterBg::before {
    height: 140px;
  }
}
@media (min-width: 1000px) and (max-width: 1452px) {
  .header-content {
    &-bgImg {
      &-in{
        top: 30%;
        .bannerTitle{
          font-size: 2.5rem;
          line-height: 130%;
          span{
            display: block;
            &:last-child{
              margin-left: 15%;
            }
          }
        }
        .text{
          margin-top: 2%;
          font-size: 1.4rem;
          line-height: 130%;
          span{
            font-size: 1.4rem;
            color: #FFCECB;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .header-content {
    &-in {
      padding: 20px 15px 0 30px;
      .logo {
        width: 22%;
        margin-bottom: 10px;
      }
      .menu {
        .menuItem {
          font-size: 100%;
          padding: 0 0 10px;
          &>a{
            padding: 0 1.3vw 10px;
            box-sizing: border-box;
          }
          .triangleIcon:after {
            border: 5px solid;
            border-color: #666666 transparent transparent transparent;
          }
          .menuChild{
            padding: 0 10px;
            &-item{
              font-size: 1rem;
            }
            &::before{
              border: 5px solid;
              border-color: transparent transparent #fff transparent;
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          .serviceCard{
            padding: 12px 6px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  // header{
    // position: relative;
    // z-index: 60;
  // }
  .header-content {
    &-bgImg {
      position: relative;
      // padding-top: 20px;
      &-textInfo{
        position: static;
        width: 100%;
        background: #fff;
        transform: none;
      }
      &-in{
        position: static;
        .bannerTitle{
          position: absolute;
          line-height: 140%;
          color: #000;
          font-weight: 400;
          font-size: 1.25rem;
          left: auto;
          top: auto;
          right: 30px;
          bottom: 0;
          span {
            padding: 10px 2px;
            background: #fff;
            text-align: center;
            writing-mode: tb-rl;
            text-align: center;
            letter-spacing: 7px;
            vertical-align: middle;
            &:first-child {
              margin-left: 50px;
            }
            &:last-child {
              margin-left: 0;
              margin-top: -120px;
            }
          }
        }
        .text{
          left: 55%;
          font-weight: 500;
          font-size: 1.25rem;
          width: 60vw;
          padding-left: 30px;
          // margin-top: 30px;
          margin-top: 0;
          span{
            font-size: 1.25rem;
          }
        }
      }
    }
    &-in {
      position: fixed;
      top: 0;
      justify-content: space-between;
      margin: 0;
      padding: 10px 10px 0 30px;
      .logo{
        width: 150px;
        margin-bottom: 0;
      }
      .menu{
        display: none;
      }
      .icon{
        display: block;
        width: 24px;
        margin-right: 30px;
      }
    }
    &-span {
      width: 70px;
      font-weight: 400;
      font-size: 20px;
      right: 30px;
      bottom: 60px;
    }
    .waterBg{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .headerBox02{
      position: relative;
      z-index: 40;
    }
  }
  .waterBg::after{
    transform: rotate(180deg);
    // box-shadow: 0px 4px 8px rgba(77, 77, 77, 0.15);
    // filter: drop-shadow(0px 4px 8px rgba(77, 77, 77, 0.15));
    top: -30px;
  }
  .waterBg::before{
    transform: rotate(180deg);
    top: -40px;
  }
  .menuBox{
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 30;
    font-style: normal;
    font-weight: 600;
    line-height: 160%;
    color: #FFA09E;
    transition: all .3s;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
      display: none;
    }
    .menuLists{
      margin-top: 120px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      // padding: 0 30px;
      // box-sizing: border-box;
      &-item{
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 18px;
        position: relative;
        &.childIcon{
        }
        &:not(:last-child)::before{
          content: '';
          width: calc(100% - 60px);
          height: 2px;
          background: #FFF1F0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          // border-bottom: 2px solid #FFF1F0;
        }
        &.childIcon:after{
          content: '';
          width: 0;
          height: 0;
          display: inline-block;
          position: absolute;
          right: 34%;
          top: 29px;
          border-top: 10px solid;
          border-left: 6px solid;
          border-right: 6px solid;
          border-bottom: 10px solid;
          border-color: #FFA09E transparent transparent transparent;
          vertical-align: middle;
        }
      }
      &-childLists{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 20px;
        color: #FFCECB;
        &-item{
          width: 100%;
          height: 100%;
          // box-sizing: border-box;
          // padding: 10px 0;
          a{
            width: 100%;
            height: 100%;
            padding: 10px 0;
            display: block;
            &.router-link-exact-active{
              background: #FFF1F0;
            }
          }
        }
      }
    }
    &-btn{
      margin-top: 51px;
      // font-size: 20px;
      font-size: 1.25rem;
    }
    &-phone{
      font-weight: 400;
      // font-size: 20px;
      font-size: 1.25rem;
      line-height: 23px;
      margin-top: 20px;
      img{
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
      }
    }
    &-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px auto 180px;
      &-in:not(:last-child){
        margin-right: 25px;
      }
    }
  }
}
</style>
