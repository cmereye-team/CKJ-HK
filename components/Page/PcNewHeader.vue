<script lang="ts" setup>
import { smallPhoneNum } from '~/assets/js/common'

const props = defineProps({
  headerConfig: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="pc_new_header">
    <div>
      <img
        :src="props.headerConfig.img"
        :srcset="`${props.headerConfig.mbImg} 400w, ${props.headerConfig.img}`"
        alt=""
      />
      <div class="coverage waterBg"></div>
    </div>
    <div class="header">
      <div class="logo_right">
        <nuxt-link :to="'/'" title="深圳愛康健口腔醫院" alt="深圳愛康健口腔醫院"
          ><img src="@/assets/images/logo_11.svg" alt=""
        /></nuxt-link>
        <div class="health_care_voucher">
          <span>香港長者醫療券</span>
          <span>政府指定預約網站</span>
        </div>
      </div>
      <div class="right_link">
        <div></div>
        <div>香港真人熱線電話:：(852){{ smallPhoneNum }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
@media screen and (min-width: 768px) {
  .header {
    display: flex;
    position: relative;
    z-index: 38;
    &>a:nth-child(1){
      display: flex;
      flex-direction: column;
    }
  }
  .pc_new_header {
    position: relative;
    width: 100%;
    & > div:nth-child(1) {
      img {
        width: 100%;
        height: 100%;
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
      height: 178px;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 35;
    }
    .waterBg::before {
      content: '';
      background-image: url(@/assets/images/back_wave03.png);
      background-repeat: repeat-x;
      background-position: center bottom;
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
  }
}
@media screen and (max-width: 767px) {
}
</style>