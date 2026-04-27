<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PatientCard from '../components/PatientCard.vue'
import Powiadomienia from '../components/Powiadomienia.vue'

// Dodano ?url na końcu importów, aby bundler (np. Vite) poprawnie załadował pliki jako ścieżki do obrazków
import SerceIcon from '../components/icons/Serce.svg?url'
import SkalpelIcon from '../components/icons/Skalpel.svg?url'
import DrzwiIcon from '../components/icons/Drzwi.svg?url'

const seconds = ref(20)
let interval: ReturnType<typeof setInterval>

const showV2 = ref(false)

const handleWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) showV2.value = true
  else if (e.deltaY < 0) showV2.value = false
}

onMounted(() => {
  interval = setInterval(() => {
    seconds.value = seconds.value > 0 ? seconds.value - 1 : 20
  }, 1000)
  window.addEventListener('wheel', handleWheel)
})

onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener('wheel', handleWheel)
})

const columns = [
  {
    title: 'MONITOROWANI',
    icon: SerceIcon,
    count: 5,
    page: 'str. 1/2',
    patients: [
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
    ]
  },
  {
    title: 'PACJENCI DO OPERACJI',
    icon: SkalpelIcon,
    count: 5,
    page: 'str. 2/3',
    patients: [
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
    ]
  },
  {
    title: 'PACJENCI DO WYPISU',
    icon: DrzwiIcon,
    count: 5,
    page: 'str. 2/2',
    patients: [
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
      { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
    ]
  },
]

const roomsV2 = [
  { title: 'Sala nr 1', count: 5, page: 'str. 1/2', icon: SerceIcon },
  { title: 'Sala nr 3', count: 5, page: 'str. 1/2', icon: SerceIcon },
  { title: 'Sala nr 2', count: 5, page: 'str. 1/2', icon: SerceIcon },
  { title: 'Sala nr 4', count: 5, page: 'str. 1/2', icon: SerceIcon },
]

const samplePatients = [
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
  { name: 'Barnaba Bazyli', roomId: 'T01', patientId: '2024/6920', date: '2024-09-30', time: '12:15' },
]
</script>

<template>
  <div class="dashboard">

    <transition name="slide">
      <div v-if="!showV2" class="columns-area">
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

    <transition name="slide">
      <div v-if="showV2" class="v2-area">
        <div class="rooms-grid">
          <div class="room-column" v-for="room in roomsV2" :key="room.title">
            <div class="column-header">
              <div class="header-left">
                <img :src="room.icon" class="col-icon" />
                <span class="col-title">{{ room.title }}</span>
              </div>
              <div class="header-right">
                <span class="col-count">{{ room.count }}</span>
                <span class="col-page">{{ room.page }}</span>
              </div>
            </div>
            <div class="cards-grid-v2">
              <PatientCard
                v-for="(p, i) in samplePatients"
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
        <Powiadomienia />
      </div>
    </transition>

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
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
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