import axios from 'axios'

export async function translateApi(text) {
  const url = `${import.meta.env.VITE_APP_ENDPOINT}/translate?api-version=3.0&from=en&to=ja`

  try {
    const res = await axios.post(url, [{ Text: text }], {
      headers: {
        'Ocp-Apim-Subscription-Key': import.meta.env.VITE_APP_API_KEY,
        'Ocp-Apim-Subscription-Region': import.meta.env.VITE_APP_LOCATION,
        'Content-type': 'application/json',
      },
    })

    return res.data[0].translations[0].text
  } catch (err) {
    console.dir(err)
  }
}
