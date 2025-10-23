import axios from 'axios'

export const detailCountryInfo = async (language) => {
  const res = await axios.get(`https://restcountries.com/v3.1/lang/${language}`)
  return res.data
}
