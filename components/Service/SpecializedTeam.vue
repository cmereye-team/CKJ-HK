<script lang="ts" setup>
import { defineProps } from 'vue'
import { toWhatsApp } from '~/assets/js/common'
import { Autoplay } from 'swiper'
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
      <div class="Specialized_team-content-in">
        <Swiper
          :loop="true"
          :modules="[Autoplay]"
          :autoplay="{
            delay: 0,
          }"
          :speed="6000"
          class="Specialized_team_swiper"
          :slidesPerView="2"
        >
          <SwiperSlide
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
          </SwiperSlide>
        </Swiper>
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
    &-in {
      width: 100%;
      max-width: 784px;
      margin: 0 auto;
      .Specialized_team_swiper {
        width: 100%;
        overflow: visible;
        .Specialized_team_swiper_slide {
          padding: calc(150 / 750 * 100%) 20px 20px;
          height: 100%;
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
              font-size: 35px;
              color: var(--indexColor1);
              text-align: center;
              margin-top: -45px;
              span {
                font-size: 26px;
              }
            }
            &-address {
              margin-top: 20px;
              font-size: 26px;
              color: #fff;
              background: linear-gradient(
                90deg,
                rgba(255, 168, 198, 0) 0%,
                rgba(252, 22, 130, 1) 40%,
                rgba(252, 22, 130, 1) 60%,
                rgba(255, 168, 198, 0) 100%
              );
              width: 80%;
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
                font-size: 20px;
                line-height: 1.6;
                text-align: justify;
                &:nth-of-type(1) {
                  font-size: 26px;
                  line-height: 1.6;
                  font-weight: 600;
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
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .Specialized_team {
    &-content {
      margin-top: 2.6042vw;
      &-in {
        max-width: 40.8333vw;
        .Specialized_team_swiper {
          .Specialized_team_swiper_slide {
            padding: calc(150 / 750 * 100%) 1.0417vw 1.0417vw;
            .doctorContent {
              min-height: 37.1875vw;
              filter: drop-shadow(0 0.2604vw 0.2604vw rgba(255, 96, 150, 0.5));
              &-name {
                width: calc(100% + 1.0417vw);
                border: 0.2083vw solid rgb(255, 168, 198, 0.4);
                font-size: 1.8229vw;
                margin-top: -2.3438vw;
                span {
                  font-size: 1.3542vw;
                }
              }
              &-address {
                margin-top: 1.0417vw;
                font-size: 1.3542vw;
                padding: 0.2604vw 0;
              }
              &-context {
                padding: 1.0417vw 1.5625vw;
                span {
                  font-size: 1.0417vw;
                  &:nth-of-type(1) {
                    font-size: 1.3542vw;
                  }
                }
              }
              &-btn {
                margin-bottom: 1.5625vw;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Specialized_team {
    &-content {
      margin-top: 30px;
      &-in {
        max-width: 100%;
        .Specialized_team_swiper {
          overflow: hidden;
          .Specialized_team_swiper_slide {
            padding: calc(150 / 750 * 100%) 15px 20px;
            .doctorContent {
              min-height: 302px;
              filter: drop-shadow(0 2px 3px rgba(255, 96, 150, 0.5));
              &-img {
                display: flex;
                justify-content: center;
                img {
                  width: calc(100% - 20px);
                }
              }
              &-name {
                width: calc(100% + 10px);
                border: 2px solid rgb(255, 168, 198, 0.4);
                font-size: 16px;
                margin-top: -15px;
                span {
                  font-size: 9px;
                }
              }
              &-address {
                font-size: 11px;
                margin-top: 10px;
              }
              &-context {
                padding: 10px 20px;
                span {
                  font-size: 9px;
                  &:nth-of-type(1) {
                    font-size: 11px;
                  }
                }
              }
              &-btn {
                margin-bottom: 15px;
                // span{
                //   font-size: 16px;
                //   padding: 5px 30px;
                // }
              }
            }
          }
        }
      }
    }
  }
}
</style>