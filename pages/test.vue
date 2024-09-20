<script lang="ts" setup>
const router = useRouter()

interface code {
  code: number
}
const res = ref<code>({ code: 1 })

const btn = () => {
  console.log('btn')
  router.push({ path: `/messagePage?c=${res.value.code}` })
}
</script>

<template>
  <div class="container">
    <el-button @click="btn">btnnnnnnnnnnn</el-button>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>