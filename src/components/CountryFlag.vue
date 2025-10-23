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
  console.log(search.value)
  store.selectedCountry = search.value
  router.push({ name: 'detail' })
  //return router.push({ name: 'detail', query: { data: toString } })
}
</script>

<template>
  <v-container>
    <v-col>
      <div>
        <!-- item-titleでObject配列の値を表示できる -->
        <v-combobox
          v-model="search"
          :items="getAllFlags"
          item-title="name.common"
          label="調べたい国を入力"
          clearable
        >
        </v-combobox>
        <v-btn @:click="searchDetail">検索</v-btn>
      </div>
    </v-col>
    <v-row>
      <v-col v-for="flag in getAllFlags" :key="flag.name.common" cols="6">
        <v-card class="pa-2" outlined>
          <p class="font-weight-black">{{ flag.name.common }}</p>
          <v-img :src="flag.flags.png" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
