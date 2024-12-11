<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))

const router = useRouter()
let _s = ref(4)
const change_s = () => {
  clearInterval(_timer)
  var _timer: any = setInterval(() => {
    if (_s.value > 0) {
      _s.value--
    } else {
      clearInterval(_timer)
      router.push({ path: '/' })
    }
  }, 1000)
}
onMounted(() => {
  change_s()
})
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <!-- <Error :code="404" /> -->
    <div class="img_err">
      <img
        src="https://static.cmereye.com/imgs/2024/07/ce0c4dabdd6a15f8.png"
        alt=""
      />
    </div>
    <nuxt-link to="/" class="black">{{ _s + 1 }}返回首頁</nuxt-link>
    <div class="menus">
      <serviceCard :isIndexShow="true" />
    </div>
  </PageWrapper>
</template>
<style>
.menuBar {
  z-index: 99;
}
</style>
<style scoped lang="scss">
:deep(.cursor-pointer) {
  display: none;
}
:deep(.text-center) {
  display: none;
}

.img_err {
  margin: 0 auto;
  z-index: 1;
}
.black {
  font-size: 40px;
  font-family: var(--contextFamily);
}
.black:hover {
  color: var(--indexColor1);
}
.menus {
  width: 100%;
  z-index: 1;
}
.s {
  margin-top: 30px;
  font-size: 26px;
  color: #666666;
  span {
    color: var(--indexColor1);
  }
}

@media screen and (max-width: 768px) {
  .black {
    font-size: 20px;
    font-family: var(--contextFamily);
  }
  .black:hover {
    color: var(--indexColor1);
  }
}
</style>