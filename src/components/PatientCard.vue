<script setup lang="ts">
defineProps<{
  name: string
  roomId: string
  patientId: string
  date: string
  time: string
}>()
</script>

<template>
  <div class="patient-card">
    <div class="card-header">
      <div class="header-left">
        <div class="status-square">S</div>
        <div class="info-btn">
          <!-- Info icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" stroke="#133AD8" stroke-width="2"/>
            <path d="M12 11V17" stroke="#133AD8" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="8" r="1" fill="#133AD8"/>
          </svg>
        </div>
        <div class="room-badge">
          <span class="room-text">Sala: {{ roomId }}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#133AD8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="header-right">
        <!-- Add note / chat icon -->
        <button class="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <!-- Hospital/admission icon -->
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="15" rx="2" stroke="#555" stroke-width="1.8"/>
            <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="#555" stroke-width="1.8"/>
            <path d="M12 10V16" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M9 13H15" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <span class="meta">{{ patientId }}</span>
        </div>
        <span class="divider">|</span>
        <div class="meta-item">
          <!-- Calendar icon -->
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <button class="action-btn action-btn--plus" title="Dodaj">
          <img src="./icons/Plus.svg" class="action-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.patient-card {
  background: #F2F4F7;
  border: 1px solid #CBD2E1;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-square {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #133AD8;
  border: 2px solid white;
  color: white;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-btn {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #E8ECFC;
  color: #133AD8;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.room-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #E8ECFC;
  border-radius: 6px;
  padding: 4px 8px;
}

.room-text {
  font-size: 14px;
  color: #133AD8;
  font-family: Inter, sans-serif;
  font-weight: 500;
}

.icon-btn {
  background: #E8ECFC;
  border: none;
  border-radius: 6px;
  width: 36px;
  height: 36px;
  color: #133AD8;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.name {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #111928;
  margin: 0;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.meta {
  font-size: 11px;
  color: #555;
  margin: 0;
}

.divider {
  color: #ccc;
  font-size: 11px;
}

.vitals {
  display: flex;
  align-items: center;
  gap: 2px;
  align-self: flex-start;
}

.vital-icon-box {
  width: 36px;
  height: 36px;
  background: #FBD5D5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.vital-icon-img {
  width: 22px;
  height: 22px;
}

.vital-item {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  width: 35px;
  height: 25px;
}

.vital-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 2px;
}

.val-col {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.val {
  font-size: 8px;
  font-weight: 600;
  color: #111928;
  line-height: 1;
}

.label {
  font-size: 6px;
  line-height: 1;
}

.arrow {
  font-size: 8px;
  line-height: 1;
}

.actions {
  display: flex;
  align-items: center;
  padding-top: 4px;
}

.actions-left {
  display: flex;
  gap: 6px;
  align-items: center;
}

.action-btn {
  background: #E8ECFC;
  border: none;
  cursor: pointer;
  padding: 9px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: background 0.15s ease;
  color: #133AD8;
  box-sizing: border-box;
}

.action-btn:hover {
  background: #d0d8f8;
}

.action-btn--plus {
  background: #E8ECFC;
}

.action-icon {
  width: 22px;
  height: 22px;
}
</style>