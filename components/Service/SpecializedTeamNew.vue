<script lang="ts" setup>
import { defineProps } from 'vue'
import { toWhatsApp } from '~/assets/js/common'
// import { Autoplay } from 'swiper'
defineProps({
  doctorData: {
    type: Object,
    default() {
      return {
        title: '',
        lists: [],
      }
    },
  },
})
const handleDoctor = () => {}
</script>

<template>
  <div class="Specialized_team">
    <div class="dentistryServices-title">
      <div class="dentistryServices-title-in bb">
        {{ doctorData.title }}
      </div>
    </div>
    <div class="Specialized_team-content">
      <div class="Specialized_team_swiper">
        <div
          class="Specialized_team_swiper_slide"
          v-for="(doctorItem, doctorIndex) in doctorData.lists"
          :key="doctorIndex"
        >
          <div class="doctorContent">
            <div class="doctorContent-img">
              <img :src="doctorItem.img || ''" alt="" />
            </div>
            <div class="doctorContent-name">
              {{ doctorItem.name || '' }}
              <span>{{ doctorItem.job || '' }}</span>
            </div>
            <div
              class="doctorContent-address"
              :class="`doctorContent-address-${doctorItem.addressType}`"
            >
              {{ doctorItem.addressname || '' }}
            </div>
            <div class="doctorContent-context">
              <span>擅長項目：</span>
              <span>{{ doctorItem.text || '' }}</span>
            </div>
            <div class="doctorContent-btn">
              <!-- <span @click="toWhatsApp">線上諮詢</span> -->
              <PageAnimBtnTypeTwo typeClass="smallmb" str="線上諮詢" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
:deep(.Specialized_team_swiper > .swiper-wrapper) {
  transition-timing-function: linear;
}
.Specialized_team {
  overflow-x: hidden;
  &-content {
    margin-top: 50px;
    .Specialized_team_swiper {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
      padding-bottom: 50px;
      display: flex;
      width: 100%;
      overflow-x: scroll;
      .Specialized_team_swiper_slide {
        padding: calc(75 / 750 * 100%) 29px 20px;
        height: 100%;
        min-width: 362px;
        .doctorContent {
          width: 100%;
          min-height: 714px;
          background: #fee6f1;
          filter: drop-shadow(0 5px 5px rgba(255, 96, 150, 0.5));
          display: flex;
          align-items: center;
          flex-direction: column;
          transition: all 0.3s;
          cursor: pointer;
          &-img {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: -45%;
            img {
              width: calc(100% - 40px);
            }
          }
          &-name {
            width: calc(100% + 20px);
            border: 4px solid rgb(255, 168, 198, 0.4);
            background: #fff;
            font-size: clamp(14px, 1.40625vw, 27px);
            color: var(--indexColor1);
            text-align: center;
            margin-top: -45px;
            span {
              font-size: 24px;
            }
          }
          &-address {
            margin-top: 20px;
            font-size: clamp(14px, 1.40625vw, 27px);
            color: #fff;
            background: linear-gradient(
              90deg,
              rgba(255, 168, 198, 0) 0%,
              rgba(252, 22, 130, 1) 40%,
              rgba(252, 22, 130, 1) 60%,
              rgba(255, 168, 198, 0) 100%
            );
            width: 100%;
            text-align: center;
            padding: 5px 0;
            &.doctorContent-address-102 {
              background: linear-gradient(
                90deg,
                transparent,
                #923fc6 40%,
                #923fc6 60%,
                transparent
              );
            }
            &.doctorContent-address-103 {
              background: linear-gradient(
                90deg,
                transparent,
                #169bfc 40%,
                #169bfc 60%,
                transparent
              );
            }
            &.doctorContent-address-104 {
              background: linear-gradient(
                90deg,
                transparent,
                #20bd4b 40%,
                #20bd4b 60%,
                transparent
              );
            }
            &.doctorContent-address-105 {
              background: linear-gradient(
                90deg,
                transparent,
                #fc7716 40%,
                #fc7716 60%,
                transparent
              );
            }
          }
          &-context {
            padding: 20px 30px;
            flex: 1;
            span {
              display: block;
              color: var(--Grey-Deep, #4d4d4d);
              text-align: justify;
              font-family: 'Noto Sans HK';
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
              line-height: 160%; /* 38.4px */
              letter-spacing: 4.8px;
              text-align: justify;
              &:nth-of-type(1) {
                color: var(--Grey-Deep, #4d4d4d);
                text-align: justify;
                font-family: 'Noto Sans HK';
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 38.4px */
                letter-spacing: 4.8px;
              }
            }
          }
          &-btn {
            margin-bottom: 30px;
          }
          &:hover {
            transform: translateY(-20px);
          }
        }
      }
    }

    .Specialized_team_swiper::-webkit-scrollbar {
      width: 100%; /* 滚动条的宽度 */
      height: 20px; /* 垂直滚动条的高度 */
    }
    .Specialized_team_swiper::-webkit-scrollbar-track {
      border-radius: 10.5px;
      background: var(--Pink-Dark, #ffa8c6);
    }
    .Specialized_team_swiper::-webkit-scrollbar-thumb {
      width: 20px;
      border-radius: 8px;
      background: #fff;
    }
  }
}

@media (min-width: 768px) and (max-width: 1920px) {
  .Specialized_team {
    overflow-x: hidden;
    &-content {
      margin-top: 50px;
      .Specialized_team_swiper {
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
        padding-bottom: clamp(20px, 2.6vw, 50px);
        display: flex;
        width: 100%;
        overflow-x: scroll;
        .Specialized_team_swiper_slide {
          padding: clamp(150px, 9.375vw, 180px) clamp(16px, 1.51vw, 29px)
            clamp(10px, 1.0416vw, 20px);
          height: 100%;
          min-width: clamp(242px, 18.854vw, 362px);
          .doctorContent {
            width: 100%;
            min-height: clamp(514px, 3.71875vw, 714px);
            background: #fee6f1;
            filter: drop-shadow(0 5px 5px rgba(255, 96, 150, 0.5));
            display: flex;
            align-items: center;
            flex-direction: column;
            transition: all 0.3s;
            cursor: pointer;
            &-img {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-top: -45%;
              img {
                width: calc(100% - 40px);
              }
            }
            &-name {
              width: calc(100% + 20px);
              border: 4px solid rgb(255, 168, 198, 0.4);
              background: #fff;
              font-size: clamp(14px, 1.40625vw, 27px);
              color: var(--indexColor1);
              text-align: center;
              margin-top: clamp(-15px, -2.34vw, -45px);
              span {
                font-size: clamp(12px, 1.25vw, 24px);
              }
            }
            &-address {
              margin-top: clamp(10px, 1.0416vw, 20px);
              font-size: clamp(14px, 1.40625vw, 27px);
              color: #fff;
              background: linear-gradient(
                90deg,
                rgba(255, 168, 198, 0) 0%,
                rgba(252, 22, 130, 1) 40%,
                rgba(252, 22, 130, 1) 60%,
                rgba(255, 168, 198, 0) 100%
              );
              width: 100%;
              text-align: center;
              padding: 5px 0;
              &.doctorContent-address-102 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #923fc6 40%,
                  #923fc6 60%,
                  transparent
                );
              }
              &.doctorContent-address-103 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #169bfc 40%,
                  #169bfc 60%,
                  transparent
                );
              }
              &.doctorContent-address-104 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #20bd4b 40%,
                  #20bd4b 60%,
                  transparent
                );
              }
              &.doctorContent-address-105 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #fc7716 40%,
                  #fc7716 60%,
                  transparent
                );
              }
            }
            &-context {
              padding: clamp(10px, 1.0416vw, 20px) clamp(12px, 1.5625vw, 30px);
              flex: 1;
              min-height: clamp(255px, 20.05vw, 385px);
              span {
                display: block;
                color: var(--Grey-Deep, #4d4d4d);
                text-align: justify;
                font-family: 'Noto Sans HK';
                font-size: clamp(12px, 1.25vw, 24px);
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 38.4px */
                letter-spacing: clamp(2px, 0.25vw, 4.8px);
                text-align: justify;
                &:nth-of-type(1) {
                  color: var(--Grey-Deep, #4d4d4d);
                  text-align: justify;
                  font-family: 'Noto Sans HK';
                  font-size: clamp(12px, 1.25vw, 24px);
                  font-style: normal;
                  font-weight: 400;
                  line-height: 160%; /* 38.4px */
                  letter-spacing: clamp(2px, 0.25vw, 4.8px);
                }
              }
            }
            &-btn {
              margin-bottom: 30px;
            }
            &:hover {
              transform: translateY(-20px);
            }
          }
        }
      }

      .Specialized_team_swiper::-webkit-scrollbar {
        width: 100%; /* 滚动条的宽度 */
        height: clamp(10px, 1.0416vw, 20px); /* 垂直滚动条的高度 */
      }
      .Specialized_team_swiper::-webkit-scrollbar-track {
        border-radius: 10.5px;
        background: var(--Pink-Dark, #ffa8c6);
      }
      .Specialized_team_swiper::-webkit-scrollbar-thumb {
        width: clamp(10px, 1.0416vw, 20px);
        border-radius: 8px;
        background: #fff;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Specialized_team {
    overflow-x: hidden;
    &-content {
      margin-top: 50px;
      .Specialized_team_swiper {
        width: 100%;
        max-width: 90%;
        margin: 0 auto;
        padding-bottom: 10px;
        display: flex;
        width: 100%;
        overflow-x: scroll;
        .Specialized_team_swiper_slide {
          padding: calc(140 / 750 * 100%) 16px 20px;
          height: 100%;
          min-width: 152px;
          .doctorContent {
            width: 100%;
            min-height: 220px;
            background: #fee6f1;
            filter: drop-shadow(0 5px 5px rgba(255, 96, 150, 0.5));
            display: flex;
            align-items: center;
            flex-direction: column;
            transition: all 0.3s;
            cursor: pointer;
            &-img {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-top: -45%;
              img {
                width: calc(100% - 40px);
              }
            }
            &-name {
              width: calc(100% + 20px);
              border: 4px solid rgb(255, 168, 198, 0.4);
              background: #fff;
              font-size: 16px;
              color: var(--indexColor1);
              text-align: center;
              margin-top: -5px;
              span {
                font-size: 14px;
              }
            }
            &-address {
              margin-top: 10px;
              font-size: 16px;
              color: #fff;
              background: linear-gradient(
                90deg,
                rgba(255, 168, 198, 0) 0%,
                rgba(252, 22, 130, 1) 40%,
                rgba(252, 22, 130, 1) 60%,
                rgba(255, 168, 198, 0) 100%
              );
              width: 100%;
              text-align: center;
              padding: 5px 0;
              &.doctorContent-address-102 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #923fc6 40%,
                  #923fc6 60%,
                  transparent
                );
              }
              &.doctorContent-address-103 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #169bfc 40%,
                  #169bfc 60%,
                  transparent
                );
              }
              &.doctorContent-address-104 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #20bd4b 40%,
                  #20bd4b 60%,
                  transparent
                );
              }
              &.doctorContent-address-105 {
                background: linear-gradient(
                  90deg,
                  transparent,
                  #fc7716 40%,
                  #fc7716 60%,
                  transparent
                );
              }
            }
            &-context {
              padding: 10px 8px;
              flex: 1;
              span {
                display: block;
                color: var(--Grey-Deep, #4d4d4d);
                text-align: justify;
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 38.4px */
                letter-spacing: 1.2px;
                text-align: justify;
                &:nth-of-type(1) {
                  color: var(--Grey-Deep, #4d4d4d);
                  text-align: justify;
                  font-family: 'Noto Sans HK';
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 120%; /* 38.4px */
                  letter-spacing: 1.2px;
                }
              }
            }
            &-btn {
              margin-bottom: 20px;
            }
            &:hover {
              transform: translateY(-20px);
            }
          }
        }
      }

      .Specialized_team_swiper::-webkit-scrollbar {
        width: 100%; /* 滚动条的宽度 */
        height: 10px; /* 垂直滚动条的高度 */
      }
      .Specialized_team_swiper::-webkit-scrollbar-track {
        border-radius: 10.5px;
        background: var(--Pink-Dark, #ffa8c6);
      }
      .Specialized_team_swiper::-webkit-scrollbar-thumb {
        width: 20px;
        border-radius: 8px;
        background: #fff;
      }
    }
  }
  .doctorContent-context {
    min-height: 220px !important;
  }
}
</style>