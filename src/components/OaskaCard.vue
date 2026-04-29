<script setup lang="ts">
defineProps<{
  name: string
  roomId: string
  patientId: string
  date: string
  time: string
  puls?: number | null
  saturacja?: number | null
  temperatura?: number | null
  komunikat?: string | null
  alert?: boolean
  komunikatType?: 'sos' | 'zdjal' | 'upadek' | 'saturacja' | null
}>()
</script>

<template>
  <div
    class="opaski-card"
    :class="{
      'opaski-card--alert': alert && komunikatType !== 'zdjal',
      'opaski-card--zdjal': komunikatType === 'zdjal',
    }"
  >

    <!-- Lewa: identyczna jak PatientCard -->
    <div class="left">
      <div class="card-header">
        <div class="header-left">
          <div class="status-square">S</div>
          <div class="info-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#133AD8" stroke-width="2"/>
              <path d="M12 11V17" stroke="#133AD8" stroke-width="2" stroke-linecap="round"/>
              <circle cx="12" cy="8" r="1" fill="#133AD8"/>
            </svg>
          </div>
          <div class="room-badge">
            <span class="room-text">Sala: {{ roomId }}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#133AD8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="header-right">
          <button class="icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#133AD8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8V12" stroke="#133AD8" stroke-width="2" stroke-linecap="round"/>
              <path d="M10 10H14" stroke="#133AD8" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="card-body">
        <p class="name">{{ name }}</p>
        <div class="meta-row">
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="15" rx="2" stroke="#555" stroke-width="1.8"/>
              <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="#555" stroke-width="1.8"/>
              <path d="M12 10V16" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M9 13H15" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span class="meta">{{ patientId }}</span>
          </div>
          <span class="divider">|</span>
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#555" stroke-width="1.8"/>
              <path d="M3 9H21" stroke="#555" stroke-width="1.8"/>
              <path d="M8 2V5" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M16 2V5" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M7 13H9" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M11 13H13" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span class="meta">{{ date }} ({{ time }})</span>
          </div>
        </div>
      </div>

      <div class="vitals">
        <div class="vital-icon-box">
          <img src="./icons/Biohazard.svg" class="vital-icon-img" />
        </div>
        <div class="vital-item" style="background: #FEECDC">
          <div class="vital-content">
            <div class="val-col">
              <span class="val">2</span>
              <span class="label" style="color: #FF5A1F">qSOFA</span>
            </div>
            <span class="arrow" style="color: #FF5A1F">↑</span>
          </div>
        </div>
        <div class="vital-item" style="background: #FDE8E8">
          <div class="vital-content">
            <div class="val-col">
              <span class="val">10</span>
              <span class="label" style="color: #FF5A1F">NEWS</span>
            </div>
            <span class="arrow" style="color: #FF5A1F">↑</span>
          </div>
        </div>
        <div class="vital-item" style="background: #FDE8EB">
          <div class="vital-content">
            <div class="val-col">
              <span class="val">38.9</span>
              <span class="label" style="color: #FF5A1F">Temp.</span>
            </div>
            <span class="arrow" style="color: #FF5A1F">↑</span>
          </div>
        </div>
      </div>

      <div class="actions">
        <div class="actions-left">
          <button class="action-btn" title="Skalpel">
            <img src="./icons/Skalpel.svg" class="action-icon" />
          </button>
          <button class="action-btn" title="Dłoń">
            <img src="./icons/Dlon.svg" class="action-icon" />
          </button>
          <button class="action-btn" title="Łóżko">
            <img src="./icons/Lozko.svg" class="action-icon" />
          </button>
          <button class="action-btn" title="Tabletki">
            <img src="./icons/Tabletki.svg" class="action-icon" />
          </button>
          <button class="action-btn" title="Dodaj">
            <img src="./icons/Plus.svg" class="action-icon" />
          </button>
        </div>
      </div>
    </div>

    <!-- Prawa: Parametry z opaski -->
    <div class="right">

      <!-- Nagłówek z Opaska.svg -->
      <div class="right-title">
        <img src="./icons/Opaska.svg" class="title-icon" />
        <span class="right-title-text">Parametry z opaski</span>
      </div>

      <!-- Parametry -->
      <div class="params">
        <div class="param-row">
          <span class="param-name">Puls</span>
          <span class="param-value" :class="{ 'param-na': !puls }">
            {{ puls ? puls + ' / min' : 'n/a' }}
          </span>
        </div>
        <div class="param-divider"></div>
        <div class="param-row">
          <span class="param-name">Saturacja</span>
          <span class="param-value" :class="{ 'param-na': !saturacja }">
            {{ saturacja ? saturacja + ' %' : 'n/a' }}
          </span>
        </div>
        <div class="param-divider"></div>
        <div class="param-row">
          <span class="param-name">Temperatura ciała</span>
          <span class="param-value" :class="{ 'param-na': !temperatura }">
            {{ temperatura ? temperatura + ' °C' : 'n/a' }}
          </span>
        </div>
      </div>

      <!-- Komunikat -->
      <div v-if="komunikat" class="komunikat-section">
        <div
          class="komunikat-box"
          :style="{ borderColor: komunikatType === 'zdjal' ? '#FF5A1F' : '#E02424' }"
        >
          <span
            class="komunikat-label"
            :style="{
              color: komunikatType === 'zdjal' ? '#FF5A1F' : '#E02424',
            }"
          >KOMUNIKAT</span>
          <span
            class="komunikat-text"
            :style="{ color: '#111928' }"
          >{{ komunikat }}</span>
        </div>
      </div>

      <!-- Dolne przyciski z prawdziwymi ikonami -->
      <div class="right-actions">
        <button class="right-action-btn" title="Serce">
          <img src="./icons/RedSerce.svg" class="btn-icon" />
        </button>
        <button class="right-action-btn" title="Brak zasięgu">
          <img src="./icons/BrakZasiegu.svg" class="btn-icon" />
        </button>
        <button class="right-action-btn" title="Ostrzeżenie">
          <img src="./icons/CzerwonyWykrzyknik.svg" class="btn-icon" />
        </button>
        <button class="right-action-btn" title="Płuca">
          <img src="./icons/CzerwonyPluca.svg" class="btn-icon" />
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.opaski-card {
  display: flex;
  flex-direction: row;
  background: #F2F4F7;
  border: 1px solid #CBD2E1;
  border-radius: 12px;
  overflow: hidden;
  min-height: 0;
  box-sizing: border-box;
}

.opaski-card--alert {
  border-color: #E02424;
  border-width: 2px;
}

.opaski-card--zdjal {
  border-color: #FF5A1F;
  border-width: 2px;
}

/* ── Lewa strona ── */
.left {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 1px solid #CBD2E1;
  min-width: 0;
  box-sizing: border-box;
}

.card-header { display: flex; justify-content: space-between; align-items: center; }
.header-left { display: flex; align-items: center; gap: 6px; }

.status-square {
  width: 36px; height: 36px; border-radius: 6px;
  background: #133AD8; border: 2px solid white; color: white;
  font-family: Inter, sans-serif; font-weight: 500; font-size: 14px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

.info-btn {
  width: 36px; height: 36px; border-radius: 6px; background: #E8ECFC;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0;
}

.room-badge {
  display: flex; align-items: center; gap: 4px;
  background: #E8ECFC; border-radius: 6px; padding: 4px 8px;
}

.room-text { font-size: 14px; color: #133AD8; font-family: Inter, sans-serif; font-weight: 500; }

.icon-btn {
  background: #E8ECFC; border: none; border-radius: 6px;
  width: 36px; height: 36px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}

.card-body { display: flex; flex-direction: column; gap: 4px; flex: 1; }

.name { font-family: Inter, sans-serif; font-size: 18px; font-weight: 600; color: #111928; margin: 0; }

.meta-row { display: flex; align-items: center; gap: 6px; }
.meta-item { display: flex; align-items: center; gap: 3px; }
.meta { font-size: 11px; color: #555; margin: 0; }
.divider { color: #ccc; font-size: 11px; }

.vitals { display: flex; align-items: center; gap: 2px; align-self: flex-start; }

.vital-icon-box {
  width: 36px; height: 36px; background: #FBD5D5; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.vital-icon-img { width: 22px; height: 22px; }

.vital-item { display: flex; align-items: center; border-radius: 4px; padding: 4px; width: 35px; height: 25px; }
.vital-content { display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 2px; }
.val-col { display: flex; flex-direction: column; gap: 1px; }
.val { font-size: 8px; font-weight: 600; color: #111928; line-height: 1; }
.label { font-size: 6px; line-height: 1; }
.arrow { font-size: 8px; line-height: 1; }

.actions { display: flex; align-items: center; padding-top: 4px; }
.actions-left { display: flex; gap: 6px; align-items: center; }

.action-btn {
  background: #E8ECFC; border: none; cursor: pointer;
  width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  border-radius: 6px; transition: background 0.15s ease; box-sizing: border-box;
}
.action-btn:hover { background: #d0d8f8; }
.action-icon { width: 22px; height: 22px; }

/* ── Prawa strona ── */
.right {
  flex: 1.2;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  background: #F2F4F7;
  box-sizing: border-box;
}

.right-title { display: flex; align-items: center; gap: 5px; flex-shrink: 0; }
.title-icon { width: 15px; height: 15px; }

.right-title-text {
  font-size: 15px;
  font-weight: 500;
  color: #133AD8;
  font-family: Inter, sans-serif;
}

/* Parametry */
.params { display: flex; flex-direction: column; flex: 1; justify-content: center; }

.param-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 22px;
}

.param-divider { height: 1px; background: #F3F4F6; }

.param-name {
  font-size: 13px;
  line-height: 150%;
  color: #111928;
  font-family: Inter, sans-serif;
  font-weight: 500;
}

.param-value {
  font-size: 13px;
  line-height: 150%;
  font-weight: 500;
  color: #111928;
  font-family: Inter, sans-serif;
}

.param-na { color: #9CA3AF; }

/* Komunikat */
.komunikat-section { flex-shrink: 0; }

.komunikat-box {
  position: relative;
  border: 1px solid #E02424;
  border-radius: 6px;
  padding: 8px 12px 6px;
  background: #F2F4F7;
}

.komunikat-label {
  position: absolute;
  top: -8px; left: 10px;
  background: #F2F4F7;
  padding: 0 4px;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.05em;
  font-family: Inter, sans-serif;
}

.komunikat-text {
  font-size: 15px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  display: block;
  text-align: center;
}

/* Dolne przyciski */
.right-actions {
  display: flex;
  gap: 3px;
  justify-content: center;
  flex-shrink: 0;
}

.right-action-btn {
  background: #FDE8E8;
  border: none;
  border-radius: 6px;
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.15s ease;
  box-sizing: border-box;
  padding: 9px;
}

.right-action-btn:hover { background: #fbd5d5; }

.btn-icon { width: 18px; height: 18px; }
</style>