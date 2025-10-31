<script setup>
import { onMounted, ref } from 'vue'
import { useCountryStore } from '../stores/flags.js'

const store = useCountryStore()
const countryName = store.translatedFlags
const countryTime = ref(null)
const apiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY
const embedUrl = ref(
  `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(countryName.translatedName)}`,
)

console.log('受け取ったデータ:', countryName)

const getNowTime = () => {
  const timezone = countryName.timezones?.[0]

  const offset = timezone.replace('UTC', '').split(':')[0]
  const offsetHours = parseInt(offset)

  const nowDate = new Date()
  const utcTime = nowDate.getTime() + nowDate.getTimezoneOffset() * 60000
  const localTime = new Date(utcTime + offsetHours * 60 * 60 * 1000)
  const year = localTime.getFullYear()
  const month = String(localTime.getMonth() + 1).padStart(2, '0')
  const day = String(localTime.getDate()).padStart(2, '0')
  const hour = String(localTime.getHours()).padStart(2, '0')
  const minute = String(localTime.getMinutes()).padStart(2, '0')

  return `${year}/${month}/${day}  ${hour}:${minute}`
}

onMounted(() => {
  countryTime.value = getNowTime()
})
</script>

<template>
  <div class="book">
    <v-container>
      <div class="d-flex justify-sm-space-between">
        <div>
          <div>
            <h1>国の名前: {{ countryName.translatedName }}</h1>

          </div>
          <h2>人口: {{ countryName.population }}人</h2>
          <h3>地域: {{ countryName.translatedRegion }}</h3>
          <h3>現地時間: {{ countryTime }}</h3>
          <h3>エリア番号: {{ countryName.area }}番</h3>
        </div>
  
        <div>
            <v-img :src="countryName.flags.png" width="400px" class="flag-card"/>
        </div>
      </div>
      <br></br>
      <div class="d-flex">
        <iframe width="450px" height="300px" :src="embedUrl"></iframe>
      <div class="card">
        <div class="tools">
          <div class="tools-btn">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
          </div>
          <div>
            <p class="xedge">Studio Xedge</p>
          </div>
        </div>
          <div class="card__content">
            <h3>{{ countryName.translatedName }}(<span class="eng-font">{{ countryName.name.common }}</span>)</h3>
            <p>{{ countryName.translatedFlagAlt }}</p>
          </div>
        </div>
      </div>
    </v-container>
     <div class="cover">
        <h1>Dictionary Country</h1>
    </div>
  </div>
</template>

<style lang="css" scoped>

.book {
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
}

.book:hover .cover {
  -webkit-transition: all 1s;
  transition: all 1s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}

p {
  font-size: 20px;
  font-weight: bolder;
}
.cover {
  top: 0;
  position: absolute;
  background-color: rgb(150, 66, 66);
  width: 1000px;
  height: 100vh;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 900;
}
.card {
 width: 450px;
 height: 300px;
 margin: 0 auto;
 background-color: #F8FBFE;
 border-radius: 8px;
 /* z-index: 1; */
 margin-left: 5px;
}

.card__content{
  color: black;
  padding: 20px;
}

.card__content h3 {
  border-bottom: 2px solid grey;
}

.card__content p{
font-size: 14px;
margin-top: 15px;
}

.tools {
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 9px;
}

.tools-btn {
  display: flex;
  align-items: center;
}

.circle {
 padding: 0 4px;
}

.tools p {
  color: #ffbd44;
  text-stroke: 1px #000;
  -webkit-text-stroke: 1px #000;
}

.box {
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}

.flag-card {
  box-sizing: border-box;
  width: auto;
  height: 200px;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.flag-card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.flag-card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.eng-font {
  font-family: 'Times New Roman', Times, serif;
  color: red;
}
</style>
