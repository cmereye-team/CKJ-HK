<script lang="ts" setup>
const windowWidth = ref(1920)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

defineProps({
  headerConfig: {
    type: Object,
    default() {
      return {
        img: 'https://static.cmereye.com/imgs/2024/06/d1a92001b420ca10.jpg',
        bg: '',
        mbImg: 'https://static.cmereye.com/imgs/2024/01/a59e0a87dfb394f1.jpg',
        pageName: 'index',
        pcText: [],
        mbText: [],
      }
    },
  },
  btnText: {
    type: String,
    default: '',
  },
  isPageNoBanner: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="new_header">
    <div class="header_img" v-if="windowWidth > 768">
      <PagePcNewHeader :headerConfig="headerConfig" :btnText="btnText" />
    </div>
    <div v-else>222</div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>