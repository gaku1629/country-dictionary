<script setup lang="ts">
import { useCountryStore } from '../stores/flags.js'

const store = useCountryStore()
const countryInfo = store.selectedCountry

console.log('受け取ったデータ:', countryInfo)
</script>

<template>
  <div>
    <h1>国の名前: {{ countryInfo.name?.common }}</h1>
    <h2>人口: {{ countryInfo.population }}</h2>
    <h3>人種: {{ countryInfo.region }}</h3>
    <h3>現地時間: {{ countryInfo.timezones?.[0] }}</h3>
    <h3>エリア番号: {{ countryInfo.area }}</h3>
    <h3>マップ: {{ countryInfo.maps?.googleMaps }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
