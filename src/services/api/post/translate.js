import axios from 'axios'

export async function translateApi(text) {
  const url = `${VUE_APP_ENDPOINT}`

  try {
    const res = await axios.post(url, [{ Text: text }], {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.VUE_APP_API_KEY,
        'Ocp-Apim-Subscription-Region': process.env.VUE_APP_LOCATION,
        'Content-type': 'application/json',
      },
    })

    return res.data
  } catch (err) {
    console.dir(err)
  }
}
