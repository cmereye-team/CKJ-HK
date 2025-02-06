<script lang="ts" setup>
import { useAppState } from '~/stores/appState'
import { Scrollbar } from 'swiper'
const appState = useAppState()
appState.setBrand('honor')
useHead({
  title: '品牌榮譽 | 口腔專科醫院',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健作為深圳愛康健口腔醫院，是一家牙科齒科品牌連鎖醫院，專注於口腔醫療，以醫療品質為核心，注重提升醫療技術水準。在口腔學術領域競賽中，我們連年斬獲大獎。我們秉承著「專科 · 專業 · 專注 · 專心」的初心，為廣大患者提供優質的牙科醫療服務。',
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
  img: 'https://static.cmereye.com/imgs/2024/06/d1a92001b420ca10.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/06/e62305ddc5e9766c.jpg',
  pageName: 'course-new',
  pcText: [],
  mbText: [],
}

const introduceData = {
  title: 'pages.brand.honor.introduce.title',
  content: 'pages.brand.honor.introduce.content',
  mbImg: 'https://static.cmereye.com/imgs/2023/05/080b60a67d204e25.jpg',
  pcImg: 'https://static.cmereye.com/imgs/2023/05/3db5860b4c31810e.jpg',
  tabNavName: 'pages.brand.honor.introduce.tabNavName',
}

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
</script>


<template>
  <div>
    <PageHeader :headerConfig="headerConfig" />
    <div class="pageIn whitebgColor">
      <div class="index_title smallPageCon">{{ $t('pages.brand.title') }}</div>
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
            <nuxt-link :to="''">
              <span>{{ $t('pages.brand.title') }}</span>
            </nuxt-link>
            <span :title="$t(introduceData.tabNavName)">{{
              $t(introduceData.tabNavName)
            }}</span>
          </div>
          <div class="introduce-in-t mbBox">
            <img loading="lazy" :src="introduceData.mbImg" />
          </div>
          <div class="introduce-in-l smallPageCon">
            <div class="title">{{ $t(introduceData.title) }}</div>
            <div class="content">{{ $t(introduceData.content) }}</div>
          </div>
        </div>
      </div>
      <!-- 荣誉 -->
      <div class="honor">
        <div class="honor-bg">
          <div class="honor-title">
            <span>{{ $t('pages.brand.honor.honorSwiper.title.span_1') }}</span>
            <span>{{ $t('pages.brand.honor.honorSwiper.title.span_2') }}</span>
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
            <div class="rightBtn" @click="handleProcessBtn('slideNext')"></div>
          </div>
        </div>
      </div>
      <!-- 国际 -->
      <div class="international">
        <div class="international-title">
          <span>{{ $t('pages.brand.honor.international.title.span_1') }}</span>
          <span>{{ $t('pages.brand.honor.international.title.span_2') }}</span>
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
              <span>{{ $t('pages.brand.honor.brand_item.in_3.span_1') }}</span>
              <span>{{ $t('pages.brand.honor.brand_item.in_3.span_2') }}</span>
              <span>{{ $t('pages.brand.honor.brand_item.in_3.span_3') }}</span>
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
              <span>{{ $t('pages.brand.honor.brand_item.in_4.span_1') }}</span>
              <span>{{ $t('pages.brand.honor.brand_item.in_4.span_2') }}</span>
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
      <NewAddress />
      <ContactForm-new />
    </div>
    <PageFooter />
    <PageNavbar />
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
      padding-bottom: 0px;
      font-style: normal;
      .title {
        font-weight: 700;
        font-size: 35px;
        margin-top: 96px;
      }
      .content {
        font-weight: 600;
        font-size: 20px;
        max-width: 650px;
        width: 650px;
        margin-top: 68px;
        white-space: pre-wrap;
      }
    }
  }
}
.tabNav {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 160%;
  color: #cbcbcb;
  margin-top: 83px;
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
    font-family: 'FakePearl-Regular';
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

@media (min-width: 768px) and (max-width: 1452px) {
  .introduce {
    &-in {
      margin-top: 3.5vw;
      &-l {
        padding-bottom: 7vw;
        .title {
          font-size: 2.2vw;
          margin-top: 6vw;
        }
        .content {
          font-size: 1.7vw;
          margin-top: 4vw;
          width: 33vw;
        }
      }
    }
  }
  .tabNav {
    font-size: 1.5vw;
    margin-top: 6vw;
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
        font-family: 'FakePearl-Regular';
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>