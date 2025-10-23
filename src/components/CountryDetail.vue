<script setup lang="ts">
import { useCountryStore } from '../stores/flags.js'

const store = useCountryStore()
const countryName = store.selectedCountry

console.log('受け取ったデータ:', countryName)
</script>

<template>
  <div>
    <h1>国の名前: {{ countryName.name?.common }}</h1>
    <h2>人口: {{ countryName.population }}</h2>
    <h3>人種: {{ countryName.region }}</h3>
    <h3>現地時間: {{ countryName.timezones?.[0] }}</h3>
    <h3>エリア番号: {{ countryName.area }}</h3>
    <h3>マップ: {{ countryName.maps?.googleMaps }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
