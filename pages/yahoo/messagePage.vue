<script lang="ts" setup>
useHead({
  title: '聯絡我們 | 牙科服務',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '愛康健為香港希瑪眼科醫療控股有限公司（股份代號：3309）旗下的內地牙科品牌，各門診位於內地深圳市，包括: 雅健口腔門診部、恒樂口腔門診、深圳愛康健口腔醫院、富康口腔門診部、李川口腔診所、王琦口腔診所等牙科診所及醫院。',
    },
    {
      hid: 'Keywords',
      name: 'Keywords',
      content:
        '愛康健 深圳愛康健 深圳專業牙科中心 愛康健醫院 愛康健口腔醫院 深圳愛康健口腔醫院 愛康健 CKJ愛康健齒科集團 深圳口腔專科醫院 愛康健齒科集團 深圳牙科醫院 牙科服務 內地牙科 深圳口腔專科希瑪眼科醫療控股有限公司雅健口腔門診部 恒樂口腔門診 富康口腔門診部 李川口腔診所 王琦口腔診所 恒潔口腔門診部 康輝口腔門診部 顏麗口腔診所 恒雅口腔門診部 恒美口腔門診部 沈虹口腔診所 炫雅口腔門診部',
    },
  ],
})

const headerConfig = {
  img: 'https://static.cmereye.com/imgs/2024/06/e95ec940e8903f32.jpg',
  bg: '',
  mbImg: 'https://static.cmereye.com/imgs/2024/02/2f6494de27de8323.jpg',
  pageName: 'coverage',
  pcText: [],
  mbText: [],
}
let windowWidth = ref(390)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

interface detail {
  name: string
  phone: string
  area: string
  service: string
  careVoucher: boolean
  dayOne: string
}

const messageDetail = ref({
  name: '陳大文',
  phone: '+852 98765432',
  area: '羅湖區',
  service: '洗牙',
  careVoucher: false,
  dayOne: '2024-XX-XX',
})

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  if (localStorage.getItem('contactForm')) {
    const message = localStorage.getItem('contactForm')
      ? JSON.parse(localStorage.getItem('contactForm')!)
      : null
    messageDetail.value = message
    messageDetail.value.phone = `+852 ${message.phone}`
  }
})
</script>

<template>
  <div>
    <YahooPageHeader :headerConfig="headerConfig" :isPageNoBanner="true" />
    <div class="main">
      <div class="index_title smallPageCon">聯絡我們</div>
      <div class="tabNav noTitle smallPageCon">
        <nuxt-link
          :to="'/yahoo'"
          title="深圳愛康健口腔醫院"
          alt="深圳愛康健口腔醫院"
        >
          <span>{{ $t('pages.index.title') }}</span>
        </nuxt-link>
        <span :title="'聯絡我們'">聯絡我們</span>
      </div>
      <div class="message-success">
        <span>表格提交成功！</span><span>我們將盡快聯絡閣下。</span>
      </div>
      <div class="message">
        <div class="message-detail">
          <div class="user-submit">
            <div>
              <div>姓名：</div>
              <div>WhatsApp電話：</div>
              <div>預約日期：</div>
              <div>預約區域：</div>
              <div>診症服務：</div>
              <div>使用長者醫療券：</div>
            </div>
            <div>
              <div>{{ messageDetail.name }}</div>
              <div>{{ messageDetail.phone }}</div>
              <div>{{ messageDetail.dayOne }}</div>
              <div>{{ messageDetail.area }}</div>
              <div>{{ messageDetail.service }}</div>
              <div>{{ messageDetail.careVoucher ? '是' : '否' }}</div>
            </div>
          </div>
          <div class="contact">
            <div>客戶服務專員會在24小時內與您聯絡。</div>
            <div>
              真人查詢熱線：<a
                href="tel:// +852 6912 2011"
                target="_blank"
                rel="noopener noreferrer"
                >+852 6912 2011</a
              >
            </div>
          </div>
          <div class="extend">
            <div class="dentistryServices-title charge-title">
              <div class="dentistryServices-title-in bb charge-title-in">
                推廣優惠
              </div>
            </div>
            <li>
              <ul>
                <nuxt-link to="/yahoo/dental-service/scaling-and-polishing"
                  >超聲波洗牙 ¥88/次</nuxt-link
                >
              </ul>
              <ul>
                <nuxt-link to="/yahoo/dental-service/teeth-whitening"
                  >藍光美白療程 ¥980/次</nuxt-link
                >
              </ul>
            </li>
          </div>
          <div class="charge-btn">
            <YahooPageAnimBtnTypeTwo :link="'/yahoo'" :str="'返回首頁'" />
          </div>
        </div>
      </div>
      <YahooNewAddress />
    </div>
    <YahooPageFooter />
    <YahooPageNavbar />
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: #fff;
  padding-top: 50px;
}
.contactUs {
  background: #fff;
  // padding-bottom: 143px;
  position: relative;
  z-index: 1;
  // padding-top: 120px;
}
:deep(.contactUs) {
  .index-contactUs-t {
    display: none !important;
  }
}
.mbShow {
  display: none;
}
.message-success {
  color: var(--Grey-Deep, #4d4d4d);
  text-align: center;
  font-family: FakePearl;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 48px */
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;
}
.message {
  background: var(
    --Skin-Grad,
    linear-gradient(
      0deg,
      rgba(255, 241, 240, 0) 0%,
      rgba(255, 241, 240, 0.7) 15.5%,
      rgba(255, 241, 240, 0.7) 91.99%,
      rgba(255, 241, 240, 0) 100%
    )
  );
}
.message-detail {
  max-width: 700px;
  margin: 0 auto 125px;
}
.user-submit {
  display: flex;
  justify-content: center;
  gap: 0 10px;
  margin: 32px auto;
  & > div:nth-child(1) {
    text-align: right;
    width: max-content;
    color: var(--Theme-Color, #fc1682);
    text-align: right;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 32px */
    letter-spacing: 2px;
  }
  & > div:nth-child(2) {
    color: var(--Grey-Deep, #4d4d4d);
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
    letter-spacing: 4px;
  }
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Grey-Deep, #4d4d4d);
  text-align: center;
  font-family: FakePearl;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 41.6px */
  letter-spacing: 2.6px;
  a {
    color: var(--Theme-Color, #fc1682);
    font-family: FakePearl;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: 2.6px;
    text-decoration-line: underline;
  }
}
.extend {
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px 0;
  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      color: var(--Theme-Color, #fc1682);
      text-align: center;
      font-family: FakePearl;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 44.8px */
      text-decoration-line: underline;
      position: relative;
    }
    ul::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--Theme-Color, #fc1682);
    }
  }
}
.charge-btn {
  display: flex;
  justify-content: center;
  margin-top: 55px;
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
@media screen and (max-width: 768px) {
  .main {
    background: #fff;
    padding-top: 0;
  }
  .mbShow {
    display: block;
  }
  :deep(.header-content) {
    .coverage {
      padding-bottom: 50px;
    }
  }
  :deep(.waterBg-implant::before) {
    height: 162px;
  }
  :deep(.index_title) {
    position: relative;
    z-index: 10;
  }
  .tabNav {
    padding: 0 30px;
    font-size: 1rem;
    margin-top: 10px;
  }
  .contactUs {
    padding-bottom: 90px;
    padding-top: 0;
  }
  .index-contactUs {
    padding-top: 0;
    :deep(.index-contactUs-t) {
      position: relative;
      z-index: 1 !important;
    }
  }
  .message-success {
    margin-top: 30px;
    color: var(--Grey-Deep, #4d4d4d);
    text-align: center;
    font-family: FakePearl;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
  }
  .message-detail {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0 5.3vw;
    .user-submit {
      & > div:nth-child(1) {
        color: var(--Theme-Color, #fc1682);
        text-align: right;
        font-family: 'Noto Sans HK';
        font-size: 4.265vw;
        font-style: normal;
        font-weight: 700;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
      }
      & > div:nth-child(2) {
        color: var(--Grey-Deep, #4d4d4d);
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 4.265vw;
        font-style: normal;
        font-weight: 400;
        line-height: 200%; /* 32px */
        letter-spacing: 1.6px;
      }
    }

    .contact {
      color: var(--Grey-Deep, #4d4d4d);
      text-align: center;
      font-family: FakePearl;
      font-size: 4vw;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 24px */
      letter-spacing: 1.5px;
      a {
        color: var(--Theme-Color, #fc1682);
        font-family: FakePearl;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 1.5px;
        text-decoration-line: underline;
      }
    }
    .extend {
      & > li {
        ul {
          color: var(--Theme-Color, #fc1682);
          text-align: center;
          font-family: FakePearl;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 24px */
          text-decoration-line: underline;
        }
      }
    }
  }
}
</style>

