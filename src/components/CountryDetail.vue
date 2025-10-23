<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  search: string
}>()

const countryName = ref('')

console.log('aniki', props.search)
</script>

<template>
  <div>
    <p>{{ props.search }}</p>
    <h1>国の名前: {{ props.search }}</h1>
    <h2>人口: {{ props.search }}</h2>
    <h3>人種: {{ props.search }}</h3>
    <h3>現地時間:{{ props.search }}</h3>
    <h3>エリア番号: {{ props.search }}</h3>
    <h3>マップ{{ props.search }}</h3>
    <h3>マップ{{ props.search }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
