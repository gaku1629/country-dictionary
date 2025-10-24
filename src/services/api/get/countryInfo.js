import { language } from '@vue/eslint-config-prettier/skip-formatting'
import axios from 'axios'

export const getCountryInfo = async (language) => {
  try {
    const res = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name,flags,languages,region,population,area,maps,timezones',
      // 'https://restcountries.com/v3.1/lang/spanish',
    )
    console.log(res.data)
    return res.data
  } catch (err) {}
}

// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/all?fields=name,flags
