<script lang="ts" setup>
const route = useRoute()
onMounted(() => {
  console.log(1)
  console.log(route.path)
})
</script>

<template>
  <div class="global-alert"></div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
}
@media screen and (max-width: 767px) {
}
</style>