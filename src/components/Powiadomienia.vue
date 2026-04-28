<script setup lang="ts">
const notifications = [
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Zmienione zlecenie', date: '20-04 13:37', drug: 'CEFOPERAZONE+SULBACTAM', issuer: 'Barnaba Bazyli', dosage: '2 amp.', frequency: 'Dożylnie', time: '09:30' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Nowe zlecenie', date: '20-04 13:37', drug: 'Azot mocznika we krwi', issuer: 'Barnaba Bazyli', dosage: null, frequency: null, time: '08:00' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Zmienione zlecenie', date: '20-04 13:37', drug: 'CEFOPERAZONE+SULBACTAM', issuer: 'Barnaba Bazyli', dosage: '2 amp.', frequency: 'Dożylnie', time: '09:30' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Nowe zlecenie', date: '20-04 13:37', drug: 'Azot mocznika we krwi', issuer: 'Barnaba Bazyli', dosage: null, frequency: null, time: '08:00' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Zmienione zlecenie', date: '20-04 13:37', drug: 'CEFOPERAZONE+SULBACTAM', issuer: 'Barnaba Bazyli', dosage: '2 amp.', frequency: 'Dożylnie', time: '09:30' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Nowe zlecenie', date: '20-04 13:37', drug: 'Azot mocznika we krwi', issuer: 'Barnaba Bazyli', dosage: null, frequency: null, time: '08:00' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Zmienione zlecenie', date: '20-04 13:37', drug: 'CEFOPERAZONE+SULBACTAM', issuer: 'Barnaba Bazyli', dosage: '2 amp.', frequency: 'Dożylnie', time: '09:30' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Nowe zlecenie', date: '20-04 13:37', drug: 'Azot mocznika we krwi', issuer: 'Barnaba Bazyli', dosage: null, frequency: null, time: '08:00' },
  { room: 'T01', name: 'Barnaba Bazyli', type: 'Zmienione zlecenie', date: '20-04 13:37', drug: 'CEFOPERAZONE+SULBACTAM', issuer: 'Barnaba Bazyli', dosage: '2 amp.', frequency: 'Dożylnie', time: '09:30' },
]
</script>

<template>
  <div class="powiadomienia">
    <div class="pow-header">
      <div class="pow-title">
        <img src="./icons/dzwonek.svg" class="pow-icon" />
        <span class="pow-label">Powiadomienia</span>
      </div>
      <span class="pow-count">5</span>
    </div>

    <div class="pow-list">
      <div class="pow-row" v-for="(n, i) in notifications" :key="i">
        <div class="pow-room">{{ n.room }}</div>
        <div class="pow-name-col">
          <span class="pow-name">{{ n.name }}</span>
        </div>
        <div class="pow-info">
          <div class="pow-meta">
            <span class="pow-badge" :class="n.type === 'Nowe zlecenie' ? 'badge-blue' : 'badge-green'">
              {{ n.type }}
            </span>
            <span class="pow-date">Data zlec.: {{ n.date }}</span>
          </div>
          <div class="pow-drug">{{ n.drug }}</div>
          <div class="pow-issuer">Zlecający: {{ n.issuer }}</div>
        </div>
        <div class="pow-right">
          <div v-if="n.dosage" class="pow-dosage-col">
            <span class="pow-freq">{{ n.frequency }}</span>
            <span class="pow-dose">{{ n.dosage }}</span>
          </div>
          <span class="pow-time" :class="{ 'pow-time--green': n.dosage }">{{ n.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.powiadomienia {
  width: 635px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 8px 0 0;
}

.pow-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-bottom: 8px;
}

.pow-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pow-icon { width: 22px; height: 22px; }

.pow-label {
  font-size: 16px;
  font-weight: 700;
  color: #141522;
  font-family: Inter, sans-serif;
}

.pow-count {
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
}

.pow-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
}

.pow-row {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 9px;
  border-bottom: 1px solid #E5E7EB;
  box-sizing: border-box;
}

.pow-row:last-child {
  border-bottom: none;
}

.pow-room {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background: #E8ECFC;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #133AD8;
  font-family: Inter, sans-serif;
}

.pow-name-col {
  width: 130px;
  flex-shrink: 0;
}

.pow-name {
  font-size: 20px;
  font-weight: 600;
  color: #111928;
  font-family: Inter, sans-serif;
  line-height: 1.2;
}

.pow-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.pow-meta {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pow-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: Inter, sans-serif;
  white-space: nowrap;
  flex-shrink: 0;
}

.badge-blue { background: #E1EFFE; color: #133AD8; }
.badge-green { background: #DEF7EC; color: #03543F; }

.pow-date {
  font-size: 10px;
  color: #6B7280;
  font-family: Inter, sans-serif;
  white-space: nowrap;
}

.pow-drug {
  font-size: 14px;
  font-weight: 700;
  color: #111928;
  font-family: Inter, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pow-issuer {
  font-size: 10px;
  color: #6B7280;
  font-family: Inter, sans-serif;
}

.pow-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.pow-dosage-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.pow-freq {
  font-size: 10px;
  color: #6B7280;
  font-family: Inter, sans-serif;
}

.pow-dose {
  font-size: 14px;
  font-weight: 700;
  color: #0E9F6E;
  font-family: Inter, sans-serif;
  white-space: nowrap;
}

.pow-time {
  font-size: 20px;
  font-weight: 700;
  color: #111928;
  font-family: Inter, sans-serif;
  white-space: nowrap;
  min-width: 90px;
  text-align: left;
}
.pow-time--green {
  color: #0E9F6E;
}
</style>