<script lang="ts" setup>
let windowWidth = ref(390)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const shareFacebook = (event, shareLink) => {
  event.preventDefault()
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`)
}
function copySpecifiedText(event, copyLink) {
  event.preventDefault()
  if (navigator.clipboard) {
    navigator.clipboard.writeText(copyLink).then(
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
interface ListItem {
  id: number
  title: string
  date: string
  content: string
  copyLink: string
  shareLink: string
  routeLink: string
  img: string
}
const newListActive = ref<ListItem[]>([
  {
    id: 1,
    title: '香港工聯會參觀交流',
    date: '2023年11月11日',
    content:
      '2023年深圳市發放港人都有份的消費券，令大家北上開心消費，有一樣CP值超高的事，港人都應該去試試，那就是去愛康健睇牙！「講嘢最緊要有牙力，睇牙就係要揀有實力」，愛康健由1995年成立，成為早期深圳二級口腔醫院的服務絕對有保證！',
    copyLink: 'https://ckjhk.com/brand/action-message',
    shareLink: 'https://ckjhk.com/brand/action-message',
    routeLink: '/brand/action-message',
    img: 'https://static.cmereye.com/imgs/2024/09/0b5c6f4f20e141c7.png',
  },
  {
    id: 2,
    title: '香港華人牙醫公會參觀交流',
    date: '2024年5月22日',
    content:
      '2024年5月22日，我們接待了香港華人牙醫公會的訪問團隊，此次訪問旨在進一步加强與香港在口腔醫療領域的學習與交流。作為大灣區的領先口腔醫療機構，愛康健口腔集團致力於提升醫療服務質量，此次交流將有助於推動地區醫療服務的共同發展。',
    copyLink:
      'https://ckjhk.com/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association',
    shareLink:
      'https://ckjhk.com/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association',
    routeLink:
      '/brand/visit-and-exchange-with-the-Hong-Kong-chinese-dental-association',
    img: 'https://static.cmereye.com/imgs/2024/09/b66233300b6fc256.png',
  },
  {
    id: 3,
    title: '愛心洗牙啟動禮公益活動',
    date: '2024年5月25日',
    content:
      '2024年5月25日，愛康健齒科集團在立法會議員梁文廣的倡議下，聯同香港中旅集團、油深起動、深水埗居民聯會及油尖旺社團聯會，成功舉辦了「健康社區由『齒』起」愛心洗牙啟動禮」。本次公益活動為逾千名長者及其他有需求的市民提供無償援助，提供免費牙科檢查、洗牙及交通接送服務，目的是為了減輕香港基層市民的牙科醫療負擔。',
    copyLink:
      'https://ckjhk.com/brand/love-teeth-wash-launching-ceremony-public-welfare-activity',
    shareLink:
      'https://ckjhk.com/brand/love-teeth-wash-launching-ceremony-public-welfare-activity',
    routeLink:
      '/brand/love-teeth-wash-launching-ceremony-public-welfare-activity',
    img: 'https://static.cmereye.com/imgs/2024/09/f8ab960ceeab195e.png',
  },
])
let actShowShare = ref(null)
const handleClick = (event, _id) => {
  event.preventDefault()
  if (actShowShare.value === _id) {
    actShowShare.value = null
  } else {
    actShowShare.value = _id
  }
}
</script>

<template>
  <div class="activity">
    <div v-for="item in newListActive" :key="item.id">
      <div>
        <div>{{ item.title }}</div>
        <div>
          <div>{{ item.date }}</div>
          <div
            class="shareIcon"
            @click.stop="handleClick($event, item.id)"
            alt=""
          >
            <div
              :class="['shareIcon-img', { act: actShowShare === item.id }]"
              alt="分享"
              title="分享"
            >
              <img src="@/assets/images/icon_47.svg" alt="" />
            </div>
            <div class="shareIcon-in" v-if="actShowShare === item.id">
              <div
                class="shareIcon-in-item"
                @click="shareFacebook($event, item.shareLink)"
                alt="Facebook 分享"
                title="Facebook 分享"
              >
                <img src="@/assets/images/icon_49.svg" alt="" /><span
                  >Facebook 分享</span
                >
              </div>
              <div
                class="shareIcon-in-item"
                @click="copySpecifiedText($event, item.copyLink)"
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
        <div>{{ item.content }}</div>
        <div class="btn">
          <PageAnimBtnTypeTwo :link="item.routeLink" str="查看原文" />
        </div>
      </div>
      <div><img :src="item.img" :alt="item.title" /></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.activity {
  max-width: 1448px;
  margin: 65px auto 0;
  display: flex;
  flex-direction: column;
  gap: 60px 0;
  & > div {
    display: flex;
    gap: 0 30px;
    & > div:nth-child(1) {
      width: 542px;
      max-width: 542px;
      min-width: 542px;
      & > div:nth-child(1) {
        color: var(--Theme-Color, #fc1682);
        font-family: FakePearl;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 48px */
        letter-spacing: 3px;
        margin-bottom: 23px;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;
        & > div:nth-child(1) {
          color: var(--Grey-Deep, #4d4d4d);
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 32px */
          letter-spacing: 4px;
        }
      }
      & > div:nth-child(3) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 32px */
        letter-spacing: 4px;
        margin-bottom: 60px;
      }
    }
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
@media screen and (max-width: 768px) {
  .activity {
    width: 100%;
    box-sizing: border-box;
    padding: 0 8vw;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
      flex-direction: column-reverse;
      & > div:nth-child(1) {
        margin-top: 10px;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        & > div:nth-child(1) {
          overflow: hidden;
          color: var(--Theme-Color, #fc1682);
          text-align: justify;
          text-overflow: ellipsis;
          font-family: FakePearl;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%; /* 32px */
          margin-bottom: 16px;
        }
        & > div:nth-child(2) {
          margin-bottom: 16px;
          & > div:nth-child(1) {
            font-size: 16px;
            font-weight: 400;
            line-height: 200%; /* 32px */
            letter-spacing: 1.6px;
          }
        }
        & > div:nth-child(3) {
          overflow: hidden;
          color: var(--Grey-Mid, #666);
          text-align: justify;
          text-overflow: ellipsis;
          font-family: 'Noto Sans HK';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 200%; /* 32px */
          letter-spacing: 1.6px;
          margin-bottom: 0;
        }
        .btn{
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>