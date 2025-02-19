<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})

const idNum = ref(0)
onMounted(() => {
  id()
})
// watch 监听 props.id 的变化
watch(
  () => props.id,
  (newValue, oldValue) => {
    id()
  }
)
const id = () => {
  switch (props.id) {
    case '101':
      return (idNum.value = 0)
    case '102':
      return (idNum.value = 1)
    case '103':
      return (idNum.value = 2)
    case '104':
      return (idNum.value = 3)
    case '105':
      return (idNum.value = 4)
    case '106':
      return (idNum.value = 5)
    case '107':
      return (idNum.value = 6)

    default:
      idNum.value = 0
  }
}
const doctorList2 = ref([
  [
    {
      id: 1,
      name: '李川',
      title: '深圳愛康健齒科集團',
      tag: '常務院長',
      img: 'https://static.cmereye.com/imgs/2023/05/d9f1c5bebf5ff081.png',
    },
    {
      id: 2,
      name: '盧勇輝',
      title: '醫院種植學',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/461a7a6f0f90fd9d.png',
    },
    {
      id: 3,
      name: '代堂華',
      title: '醫院種植科',
      tag: '醫生',
      img: 'https://static.cmereye.com/imgs/2023/05/d259e4a0df06c23e.png',
    },
  ],
  [
    {
      id: 1,
      name: '鞏賢平',
      title: '愛康健口腔醫院',
      tag: '院長',
      img: 'https://static.cmereye.com/imgs/2023/05/6a7b889f6f185f2a.png',
    },
    {
      id: 2,
      name: '楊福強',
      title: '口腔醫院綜合科',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/81d8c2ccb62f31a9.png',
    },
    {
      id: 3,
      name: '李洪偉',
      title: '口腔醫院口腔修復科',
      tag: '醫生',
      img: 'https://static.cmereye.com/imgs/2023/05/fbb778e5a0bab563.png',
    },
  ],
  [
    {
      id: 1,
      name: '陸卉',
      title: '愛康健口腔醫院',
      tag: '副主任醫生',
      img: '	https://static.cmereye.com/imgs/2023/05/23ee1b943d47241e.png',
    },
    {
      id: 2,
      name: '杜藝平',
      title: '口腔醫院正畸科',
      tag: '主任',
      img: 'https://static.cmereye.com/imgs/2023/05/6fe02422ecae81a5.png',
    },
    {
      id: 3,
      name: '白海軍',
      title: '正畸學',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/34c030521f10d54e.png',
    },
  ],
  [
    {
      id: 1,
      name: '鞏賢平',
      title: '愛康健口腔醫院',
      tag: '院長',
      img: 'https://static.cmereye.com/imgs/2023/05/6a7b889f6f185f2a.png',
    },
    {
      id: 2,
      name: '楊福強',
      title: '口腔醫院綜合科',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/81d8c2ccb62f31a9.png',
    },
    {
      id: 3,
      name: '李洪偉',
      title: '口腔醫院口腔修復科',
      tag: '醫生',
      img: 'https://static.cmereye.com/imgs/2023/05/fbb778e5a0bab563.png',
    },
  ],
  [
    {
      id: 1,
      name: '鞏賢平',
      title: '愛康健口腔醫院',
      tag: '院長',
      img: 'https://static.cmereye.com/imgs/2023/05/6a7b889f6f185f2a.png',
    },
    {
      id: 2,
      name: '楊福強',
      title: '口腔醫院綜合科',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/81d8c2ccb62f31a9.png',
    },
    {
      id: 3,
      name: '趙瑩',
      title: '深圳愛康健口腔醫院',
      tag: '主治醫生',
      img: 'https://static.cmereye.com/imgs/2023/05/02d96f63cef851a3.png',
    },
  ],
  [
    {
      id: 1,
      name: '李紅枝',
      title: '兒童口腔科',
      tag: '主任',
      img: 'https://static.cmereye.com/imgs/2023/05/5f623594b86acf8e.png',
    },
    {
      id: 2,
      name: '林珍晶',
      title: '兒牙專科',
      tag: '醫師',
      img: 'https://static.cmereye.com/imgs/2023/05/bb4d2346bd68da59.png',
    },
    {
      id: 3,
      name: '郭文倩',
      title: '深圳愛康健口腔醫院',
      tag: '醫生',
      img: 'https://static.cmereye.com/imgs/2023/05/683cbbcb44c60068.png',
    },
  ],
  [
    {
      id: 1,
      name: '李川',
      title: '深圳愛康健齒科集團',
      tag: '常務院長',
      img: 'https://static.cmereye.com/imgs/2023/05/d9f1c5bebf5ff081.png',
    },
    {
      id: 2,
      name: '盧勇輝',
      title: '醫院種植學',
      tag: '總監',
      img: 'https://static.cmereye.com/imgs/2023/05/461a7a6f0f90fd9d.png',
    },
  ],
])

const itemList = () => {
  console.log(idNum.value, 'index')
  console.log(doctorList2.value[idNum.value], 'list index')
  return doctorList2.value[idNum.value]
}
</script>

<template>
  <div class="NewDoctor" :class="idNum == 6 ? 'TwoDoctor' : ''">
    <div v-for="(item, index) in itemList()" :key="index">
      <div v-if="item.img">
        <div class="item">
          <div class="item_img"><img :src="item.img" :alt="item.name" /></div>
          <div class="item_name">{{ item.name }}<span>醫生</span></div>
        </div>
        <div class="item_title_tag">
          <span>{{ item.title }}</span
          ><span>{{ item.tag }}</span>
        </div>
        <div class="item_btn">
          <PageAnimBtnTypeTwo
            str="線上諮詢"
            :link="`https://wa.me/85269338128?text=取得種植牙免費CT檢查`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .NewDoctor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 94px;
    margin: 64px auto;
    width: 100%;
    max-width: 1000px;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 100px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      .item {
        position: relative;
        width: fit-content;
        .item_img {
          background: url('https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp')
            no-repeat;
          background-size: cover;
          background-position: center center;
          width: 272px;
          height: 358px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          filter: drop-shadow(0px 0px 10px rgba(162, 52, 78, 0.65));
          // width: 100%;
        }
        .item_name {
          position: absolute;
          bottom: 0;
          padding-left: 16px;
          background: linear-gradient(
            180deg,
            rgba(252, 22, 130, 0) 0%,
            rgba(252, 22, 130, 0.85) 100%
          );
          min-height: 146.631px;
          color: #fff;
          text-align: center;
          text-shadow: 0px 4px 4px #fc1682;
      font-family: 'FakePearl-Regular';
          font-size: 45px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 72px */
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          & > span {
            color: #fff;
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 40px */
            padding-bottom: 10px;
            padding-left: 10px;
          }
        }
      }
      .item_title_tag {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
    font-family: 'FakePearl-Regular';
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 41.6px */
        letter-spacing: 2.6px;
        margin: 10px auto 20px;
        min-height: 87px;
        display: flex;
        flex-direction: column;
      }
      .item_btn {
        display: flex;
        justify-content: center;
      }
    }
  }
  .TwoDoctor{
    display: flex;
    justify-content: center;
    gap: 0 94px;
    margin: 64px auto;
  }
}
@media screen and (max-width: 767px) {
  .NewDoctor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 16px;
    margin: 24px auto;
    width: 100%;
    max-width: 100%;
    padding: 0 18px;
    box-sizing: border-box;
    margin-bottom: 100px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      .item {
        position: relative;
        width: fit-content;
        .item_img {
          background: url('https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp')
            no-repeat;
          background-size: cover;
          background-position: center center;
          width: 102px;
          height: 134px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          // filter: drop-shadow(0px 0px 10px rgba(162, 52, 78, 0.65));
          filter: drop-shadow(0px 0px 3.75px rgba(162, 52, 78, 0.65));
          // width: 100%;
        }
        .item_name {
          position: absolute;
          bottom: 0;
          padding-left: 5px;
          padding-bottom: 2px;
          background: linear-gradient(
            180deg,
            rgba(252, 22, 130, 0) 0%,
            rgba(252, 22, 130, 0.85) 100%
          );
          min-height: 54px;
          color: var(--White, #fff);
          text-align: center;
          text-shadow: 0px 4px 2px #fc1682;
      font-family: 'FakePearl-Regular';
          font-size: 18.75px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%; /* 24.375px */
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          & > span {
            color: #fff;
            text-align: center;
        font-family: 'FakePearl-Regular';
            font-size: 9.375px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 40px */
            padding-bottom: 3px;
            padding-left: 5px;
          }
        }
      }
      .item_title_tag {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: center;
    font-family: 'FakePearl-Regular';
        font-size: 9.75px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 15.6px */
        letter-spacing: 0.975px;
        margin: 3px auto 10px;
        display: flex;
        flex-direction: column;
      }
      .item_btn {
        display: flex;
        justify-content: center;
        :deep(.animbtntypetwo-in) {
          span {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 18px */
            letter-spacing: 1.125px;
            padding: 7px 18px;
          }
        }
      }
    }
  }
  .TwoDoctor{
    display: flex;
    justify-content: center;
    gap: 0 16px;
    margin: 24px auto;
  }
}
</style>