<script setup>
import { onMounted, ref } from 'vue'
import { useCountryStore } from '../stores/flags.js'
import { useRouter } from 'vue-router'

const store = useCountryStore()
const getAllFlags = ref([])
const search = ref('')
const router = useRouter()

onMounted(async () => {
  getAllFlags.value = await store.getFlags()
  console.log(getAllFlags.value)
})

const searchDetail = async () => {
  store.selectedCountry = search.value
  console.log(store.selectedCountry)
  await store.translateCountryInfo()
  await router.push({ name: 'detail' })
  //return router.push({ name: 'detail', query: { data: toString } })
}
</script>

<template>
  <v-container class="bg-grey-lighten-4 rounded-lg mt-5 mb-5">
    <v-row justify="center" class="mt-5">
      <v-col lg="3">
        <v-combobox
          v-model="search"
          :items="getAllFlags"
          item-title="name.common"
          label="調べたい国を入力"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="4" md="2" lg="1" class="d-flex align-center mb-5">
        <v-btn @click="searchDetail" block>検索</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        v-for="flag in getAllFlags"
        :key="flag.name.common"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <v-card class="pa-4" width="250px" height="159px" hover outlined>
          <p class="font-weight-black">{{ flag.name.common }}</p>
          <v-img :src="flag.flags.png" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
