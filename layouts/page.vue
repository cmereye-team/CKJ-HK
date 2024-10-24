<script lang="ts" setup>
let windowWidth = ref(390)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>
<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNewNavbarSide v-if="windowWidth > 768" />
        <PageNavbar v-else />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
