<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useCountryStore } from '../stores/flags.js'
import { useRouter } from 'vue-router'

const store = useCountryStore()
const getAllFlags = ref([])
const search = ref('')
// const selectRegion = ref('')
const router = useRouter()

// getter と setter functions
const selectRegion = computed({
  get: () => store.findRegion,
  set: (region) => (store.findRegion = region),
})
const filteredFlags = computed(() => store.filteredFlags)
const filteredCount = computed(() => store.filteredCategoriesCount)

watch(selectRegion, (newRegion) => {
  store.findRegion = newRegion
})

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
      <div class="w-33 mr-2">
        <v-combobox
          v-model="search"
          :items="filteredFlags"
          item-title="name.common"
          label="調べたい国を入力"
          clearable
        />
      </div>
      <div>
        <v-combobox
          label="カテゴリ"
          v-model="selectRegion"
          width="200px"
          :items="store.regions"
        ></v-combobox>
      </div>
      <div class="d-flex justify-center align-center mb-5 ml-3">
        <h3>表示国数:{{ filteredCount }}</h3>
      </div>
      <div sm="5" lg="3" class="d-flex justify-center align-center mb-5 ml-3">
        <v-btn @click="searchDetail" block>検索</v-btn>
      </div>
    </v-row>
    <v-row justify="center">
      <!-- <div data-aos="flip-up"> -->
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
        v-for="flag in filteredFlags"
      >
        <v-card class="pa-4" width="250px" height="159px" hover outlined>
          <p class="font-weight-black">{{ flag.name.common }}</p>
          <v-img :src="flag.flags.png" />
        </v-card>
      </v-col>
      <!-- </div> -->
    </v-row>
  </v-container>
</template>

<style scoped></style>
