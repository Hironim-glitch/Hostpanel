<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PatientCard from '../components/PatientCard.vue'
import Powiadomienia from '../components/Powiadomienia.vue'
import OaskaCard from '../components/OaskaCard.vue'

import SerceIcon from '../components/icons/Serce.svg?url'
import SkalpelIcon from '../components/icons/Skalpel.svg?url'
import DrzwiIcon from '../components/icons/Drzwi.svg?url'

const seconds = ref(20)
let interval: ReturnType<typeof setInterval>

const view = ref(0)
let wheelCooldown = false

const handleWheel = (e: WheelEvent) => {
  if (wheelCooldown) return
  if (e.deltaY > 50 && view.value < 2) {
    view.value++
    wheelCooldown = true
    setTimeout(() => { wheelCooldown = false }, 800)
  } else if (e.deltaY < -50 && view.value > 0) {
    view.value--
    wheelCooldown = true
    setTimeout(() => { wheelCooldown = false }, 800)
  }
}

onMounted(() => {
  interval = setInterval(() => {
    seconds.value = seconds.value > 0 ? seconds.value - 1 : 20
  }, 1000)
  window.addEventListener('wheel', handleWheel, { passive: true })
})

onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener('wheel', handleWheel)})

const samplePatients8 = [
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
]

const samplePatients4 = samplePatients8.slice(0, 4)

// V1
const columns = [
  { title: 'MONITOROWANI', icon: SerceIcon, count: 5, page: 'str. 1/2', patients: samplePatients8 },
  { title: 'PACJENCI DO OPERACJI', icon: SkalpelIcon, count: 5, page: 'str. 2/3', patients: samplePatients8 },
  { title: 'PACJENCI DO WYPISU', icon: DrzwiIcon, count: 5, page: 'str. 2/2', patients: samplePatients8 },
]

// V2
const roomsV2 = [
  { title: 'Sala nr 1', count: 5, page: 'str. 1/2' },
  { title: 'Sala nr 3', count: 5, page: 'str. 1/2' },
  { title: 'Sala nr 2', count: 5, page: 'str. 1/2' },
  { title: 'Sala nr 4', count: 5, page: 'str. 1/2' },
]

// V3
const opaskaPatients = [
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15', puls: 146, saturacja: 98, temperatura: 36.6, komunikat: 'SOS!', alert: true },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15', puls: null, saturacja: null, temperatura: null, komunikat: 'Pacjent zdjął opaskę', alert: false },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15', puls: 146, saturacja: 98, temperatura: 36.6, komunikat: 'Upadek: korytarz, sala nr 5', alert: false },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15', puls: 146, saturacja: 85, temperatura: 36.6, komunikat: 'Niska saturacja!', alert: false },
]

const v3Columns = [
  { title: 'PACJENCI DO OPERACJI', icon: SkalpelIcon, count: 5, page: 'str. 2/3', patients: samplePatients8 },
  { title: 'PACJENCI DO WYPISU', icon: DrzwiIcon, count: 5, page: 'str. 2/2', patients: samplePatients8 },
]
</script>

<template>
  <div class="dashboard">

    <!-- V1 -->
    <transition name="slide">
      <div v-if="view === 0" class="columns-area">
        <div class="column" v-for="col in columns" :key="col.title">
          <div class="column-header">
            <div class="header-left">
              <img :src="col.icon" class="col-icon" />
              <span class="col-title">{{ col.title }}</span>
            </div>
            <div class="header-right">
              <span class="col-count">{{ col.count }}</span>
              <span class="col-page">{{ col.page }}</span>
            </div>
          </div>
          <div class="cards-grid">
            <PatientCard
              v-for="(p, i) in col.patients"
              :key="i"
              :name="p.name"
              :roomId="p.roomId"
              :patientId="p.patientId"
              :date="p.date"
              :time="p.time"
            />
          </div>
        </div>
      </div>
    </transition>

    <!-- V2 -->
    <transition name="slide">
      <div v-if="view === 1" class="v2-area">
        <div class="rooms-grid">
          <div class="room-column" v-for="room in roomsV2" :key="room.title">
            <div class="column-header">
              <div class="header-left">
                <svg width="22" height="19" viewBox="0 0 75 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.8936 56.5605L51.5361 41.4873H61.1543L40.1953 63.0205C39.2383 63.9775 38.1377 64.4561 36.8936 64.4561C35.7451 64.4561 34.6924 63.9775 33.7354 63.0205L12.9199 41.4873H22.5381L36.8936 56.5605ZM66.7529 4.59375C71.251 8.70898 73.5957 13.5898 73.7871 19.2363C73.9785 24.9785 72.0645 30.0508 68.0449 34.4531L65.6045 36.8936H49.2393L46.0811 30.5771L38.9033 44.7891C38.4248 45.6504 37.7549 46.0811 36.8936 46.0811C35.9365 46.0811 35.2188 45.6504 34.7402 44.7891L26.7012 26.5576L22.3945 36.8936H8.46973L6.0293 34.4531C2.00977 30.0508 0.0957031 24.9785 0.287109 19.2363C0.478516 13.5898 2.82324 8.70898 7.32129 4.59375C10.8623 1.62695 14.8818 0.143555 19.3799 0.143555C25.0264 0.239258 29.9551 2.34473 34.166 6.45996L37.0371 9.33105L39.9082 6.45996C44.1191 2.34473 49.0479 0.239258 54.6943 0.143555C59.0967 0.0478516 63.1162 1.53125 66.7529 4.59375ZM63.1641 29.5723C65.5566 26.9883 66.8008 23.7822 66.8965 19.9541C66.9922 16.126 65.4609 12.7285 62.3027 9.76172C59.2402 7.36914 56.082 6.50781 52.8281 7.17773C49.4785 7.84766 46.7988 9.1875 44.7891 11.1973L37.0371 19.2363L29.2852 11.1973C27.1797 9.0918 24.5 7.75195 21.2461 7.17773C17.9922 6.60352 14.8818 7.46484 11.915 9.76172C8.66113 12.7285 7.08203 16.126 7.17773 19.9541C7.27344 23.7822 8.51758 26.9883 10.9102 29.5723L13.6377 32.2998H19.2363L24.4043 19.9541C24.8828 18.9971 25.6006 18.5186 26.5576 18.5186C27.5146 18.5186 28.2324 18.9492 28.7109 19.8105L37.0371 38.4727L44.0713 24.4043C44.5498 23.543 45.2197 23.1123 46.0811 23.1123C46.9424 23.1123 47.6123 23.543 48.0908 24.4043L52.1104 32.2998H60.4365L63.1641 29.5723Z" fill="#133AD8"/>
                </svg>
                <span class="col-title">{{ room.title }}</span>
              </div>
              <div class="header-right">
                <span class="col-count">{{ room.count }}</span>
                <span class="col-page">{{ room.page }}</span>
              </div>
            </div>
            <div class="cards-grid-v2">
              <div class="card-scale-wrapper" v-for="(p, i) in samplePatients4" :key="i">
                <PatientCard
                  :name="p.name"
                  :roomId="p.roomId"
                  :patientId="p.patientId"
                  :date="p.date"
                  :time="p.time"
                />
              </div>
            </div>
          </div>
        </div>
        <Powiadomienia />
      </div>
    </transition>

    <!-- V3 -->
    <transition name="slide">
      <div v-if="view === 2" class="v3-area">
        <!-- MONITOROWANI z opaską -->
        <div class="column">
          <div class="column-header">
            <div class="header-left">
              <img :src="SerceIcon" class="col-icon" />
              <span class="col-title">MONITOROWANI</span>
            </div>
            <div class="header-right">
              <span class="col-count">5</span>
              <span class="col-page">str. 1/2</span>
            </div>
          </div>
          <div class="opaski-grid">
            <OaskaCard
              v-for="(p, i) in opaskaPatients"
              :key="i"
              :name="p.name"
              :roomId="p.roomId"
              :patientId="p.patientId"
              :date="p.date"
              :time="p.time"
              :puls="p.puls"
              :saturacja="p.saturacja"
              :temperatura="p.temperatura"
              :komunikat="p.komunikat"
              :alert="p.alert"
            />
          </div>
        </div>
        <!-- Pozostałe 2 kolumny -->
        <div class="column" v-for="col in v3Columns" :key="col.title">
          <div class="column-header">
            <div class="header-left">
              <img :src="col.icon" class="col-icon" />
              <span class="col-title">{{ col.title }}</span>
            </div>
            <div class="header-right">
              <span class="col-count">{{ col.count }}</span>
              <span class="col-page">{{ col.page }}</span>
            </div>
          </div>
          <div class="cards-grid">
            <PatientCard
              v-for="(p, i) in col.patients"
              :key="i"
              :name="p.name"
              :roomId="p.roomId"
              :patientId="p.patientId"
              :date="p.date"
              :time="p.time"
            />
          </div>
        </div>
      </div>
    </transition>

    <!-- Status bar -->
    <div class="status-bar">
      <div class="bar-left">
        <div class="logo-section">
          <img src="../components/icons/Hospanel.svg?url" class="logo-img" />
        </div>
        <span class="session"><span class="session-label">SESJA:</span> <span class="session-val">669</span></span>
        <span class="info-badge">INFO</span>
      </div>
      <div class="bar-center">
        <button class="nav-btn">
          NASTĘPNA STRONA <img src="../components/icons/NastepnaStrona.svg?url" class="icon-sm icon-white" />
        </button>
        <div class="timer-box">
          <span class="pause-icon">⏸</span>
          <span class="timer-val">0:{{ String(seconds).padStart(2, '0') }}</span>
        </div>
      </div>
      <div class="bar-right">
        <button class="btn-blue">
          <img src="../components/icons/k1-1.svg?url" class="icon-sm icon-white" /> K1-L
        </button>
        <button class="btn-blue">
          <img src="../components/icons/odswiez.svg?url" class="icon-sm icon-white" /> ODŚWIEŻ TERAZ
        </button>
        <div class="separator"></div>
        <span class="mode-text">
          <img src="../components/icons/paleta.svg?url" class="icon-sm" /> DOMYŚLNY
        </span>
        <div class="separator"></div>
        <img src="../components/icons/ksiezyc.svg?url" class="icon-sm" />
        <div class="separator"></div>
        <span class="grupuj-text">
          <img src="../components/icons/KopiujWSekcji.svg?url" class="icon-sm" />
          GRUPUJ WG SEKCJI
        </span>
        <div class="separator"></div>
        <span class="nurse-section">
          <img src="../components/icons/pielegniarka.svg?url" class="icon-sm" /> PIELĘGNIARKA DASHBOARD
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background: #F3F4F6;
  padding-bottom: 60px;
  position: relative;
}

/* V1 */
.columns-area {
  display: flex;
  gap: 9px;
  padding: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

/* V2 */
.v2-area {
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 8px 0 8px 8px;
  min-width: 0;
  gap: 8px;
}

.rooms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.room-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  min-height: 0;
}

.cards-grid-v2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.card-scale-wrapper {
  overflow: hidden;
  position: relative;
  min-height: 0;
  min-width: 0;
}

.card-scale-wrapper > * {
  transform: scale(0.78);
  transform-origin: top left;
  width: calc(100% / 0.78);
  height: calc(100% / 0.78);
  position: absolute;
  top: 0;
  left: 0;
}

/* V3 */
.v3-area {
  display: flex;
  gap: 9px;
  padding: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.opaski-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.opaski-grid > * {
  flex: 1;
  min-height: 0;
}

/* Shared */
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  min-height: 0;
  min-width: 0;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  flex-shrink: 0;
  box-sizing: border-box;
  border: 1px solid #E5E7EB;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.col-icon { width: 22px; height: 22px; }

.col-title {
  font-size: 16px;
  font-weight: 700;
  color: #141522;
  font-family: Inter, sans-serif;
}

.col-count {
  height: 36px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #141522;
  background: #E5E7EB;
  border-radius: 6px;
  font-family: Inter, sans-serif;
  flex-shrink: 0;
}

.col-page {
  color: #141522;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter, sans-serif;
  background: #E5E7EB;
  border-radius: 6px;
  padding: 0 10px;
  height: 36px;
  display: flex;
  align-items: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-bottom: 60px;
  box-sizing: border-box;
}
.slide-enter-from { opacity: 0; transform: translateY(20px); }
.slide-leave-to { opacity: 0; transform: translateY(-20px); }

/* Status bar */
.status-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #FFFFFF;
  border-top: 1px solid #CBD2E1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  box-sizing: border-box;
}

.bar-left, .bar-center, .bar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-section { display: flex; align-items: center; }
.logo-img { width: 120px; height: 36px; object-fit: contain; }
.icon-sm { width: 16px; height: 16px; }

.session-label {
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  font-family: Inter, sans-serif;
}

.session-val {
  font-size: 16px;
  font-weight: 700;
  color: #133AD8;
  font-family: Inter, sans-serif;
}

.info-badge {
  background: #133AD8;
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  font-family: Inter, sans-serif;
}

.nav-btn {
  background: #133AD8;
  border: none;
  color: #fff;
  padding: 7px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  white-space: nowrap;
  height: 29px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.timer-box {
  color: #133AD8;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Inter, sans-serif;
}

.pause-icon { font-size: 18px; color: #133AD8; }

.timer-val {
  font-size: 24px;
  font-weight: 700;
  color: #133AD8;
}

.btn-blue {
  background: #133AD8;
  border: none;
  color: #fff;
  padding: 7px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  height: 29px;
  box-sizing: border-box;
}

.mode-text {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  font-family: Inter, sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
}

.separator {
  width: 1px;
  height: 24px;
  background: #CBD2E1;
  flex-shrink: 0;
}

.icon-white { filter: brightness(0) invert(1); }

.grupuj-text {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  font-family: Inter, sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  cursor: pointer;
}

.nurse-section {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  font-family: Inter, sans-serif;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
</style>