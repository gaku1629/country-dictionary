import { defineStore } from 'pinia'
import { getCountryInfo } from '@/services/api/get/countryInfo'
import { translateApi } from '@/services/api/post/translate'

export const useCountryStore = defineStore('flags', {
  state: () => ({
    allFlags: [],
    country: [],
    selectedCountry: null,
    translatedFlags: null,
    filteredCategoriesCount: 0,
    regions: ['Asia', 'Americas', 'Europe', 'ALL'],
    findRegion: null,
  }),

  getters: {
    filteredFlags: (state) => {
      if (!state.findRegion || state.findRegion === 'ALL') {
        return state.allFlags
      }
      return state.allFlags.filter((flag) => flag.region === state.findRegion)
    },

    filteredCategoriesCount: (state) => {
      return state.filteredFlags.length
    },
  },

  actions: {
    async getFlags() {
      const flags = await getCountryInfo()
      this.allFlags = flags
      console.log('atai', this.allFlags)
      return this.allFlags
    },

    async translateCountryInfo() {
      const country = this.selectedCountry
      if (!country || !country.name?.common) {
        console.log('翻訳対象外')
        return
      }

      const name = await translateApi(country.name.common)

      let language = ''
      if (country.languages) {
        const langArr = Object.values(country.languages)
        language = await translateApi(langArr.join(','))
      }

      const region = await translateApi(country.region)

      let flagAlt = null
      if (country.flags?.alt) {
        flagAlt = await translateApi(country.flags.alt)
      }

      this.translatedFlags = {
        ...country,
        translatedName: name,
        translatedLanguages: language,
        translatedRegion: region,
        translatedFlagAlt: flagAlt,
      }

      console.log(
        '翻訳結果',
        this.translatedFlags.translatedName,
        this.translatedFlags.translatedFlagAlt,
        this.translatedFlags.translatedRegion,
        this.translatedFlags.population,
      )
    },
  },
})
