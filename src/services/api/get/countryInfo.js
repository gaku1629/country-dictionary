import axios from 'axios'

export const getCountryInfo = async (flags, flag) => {
  axios.get('https://restcountries.com/v3.1/all?fields=name,flags').then((res) => {
    flags.value = res.data
    const randomIndex = Math.floor(Math.random() * flags.value.length)
    flag.value = flags.value[randomIndex]
    flag.value
    return {
      flags,
      flag,
    }
  })
}
