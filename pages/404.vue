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
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <Error :code="404" />
    <div style="width: 100%;margin-top:100px;">
      <serviceCard :isIndexShow="true" />
    </div>
  </PageWrapper>
</template>
