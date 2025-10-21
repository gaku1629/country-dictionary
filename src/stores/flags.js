import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountryInfo } from '@/services/api/get/countryInfo'

export const useFlagsStore = defineStore('flags', {
  state: () => ({
    flags: ref([]),
    flag: ref(null),
    userInput: ref(''),
  }),

  actions: {
    getFlags() {
      const flags = getCountryInfo()
      return flags
    },

    selectFlag() {
      const flag = this.flags.filter((flag) => flag.name.common === userInput)
      return flag
    },
  },
})
