<script setup>
import { onMounted, ref } from 'vue'
import { useCountryStore } from '../stores/flags.js'

const store = useCountryStore()
const countryName = store.translatedFlags
const countryTime = ref(null)

console.log('受け取ったデータ:', countryName)

const getNowTime = () => {
  const timezone = countryName.timezones?.[0]

  const offset = timezone.replace('UTC', '').split(':')[0]
  const offsetHours = parseInt(offset)

  const nowDate = new Date()
  const utcTime = nowDate.getTime() + nowDate.getTimezoneOffset() * 60000
  const localTime = new Date(utcTime + offsetHours * 60 * 60 * 1000)
  const year = localTime.getFullYear()
  const month = String(localTime.getMonth() + 1).padStart(2, '0')
  const day = String(localTime.getDate()).padStart(2, '0')
  const hour = String(localTime.getHours()).padStart(2, '0')
  const minute = String(localTime.getMinutes()).padStart(2, '0')

  return `${year}/${month}/${day}  ${hour}:${minute}`
}

onMounted(() => {
  countryTime.value = getNowTime()
})
</script>

<template>
  <div>
    <h1>国の名前: {{ countryName.translatedName }}</h1>
    <h2>人口: {{ countryName.population }}</h2>
    <h3>人種: {{ countryName.translatedRegion }}</h3>
    <h3>現地時間: {{ countryTime }}</h3>
    <h3>エリア番号: {{ countryName.area }}</h3>
    <h3>マップ: {{ countryName.maps?.googleMaps }}</h3>
    <h3>国の説明: {{ countryName.translatedFlagAlt }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
