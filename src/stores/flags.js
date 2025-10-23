import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountryInfo } from '@/services/api/get/countryInfo'
import { detailCountryInfo } from '@/services/api/get/detailInfo'

export const useCountryStore = defineStore('flags', {
  state: () => ({
    allFlags: [],
    country: [],
    selectedCountry: null,
  }),

  actions: {
    async getFlags() {
      const flags = await getCountryInfo()
      this.allFlags = flags
      console.log('atai', this.allFlags)
      return this.allFlags
    },

    async findFlag(language) {
      const detail = await detailCountryInfo(language)
      this.country = detail
      console.log(this.country)
      return this.country
    },
  },
})
