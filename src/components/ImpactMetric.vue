<template>
  <div class="impact-metric">
    <div class="metric-value">{{ value }}</div>
    <div class="metric-label label">{{ label }}</div>
    <p class="metric-description" v-if="description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.impact-metric {
  text-align: center;
  padding: var(--spacing-md);
  min-width: 200px;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.metric-value {
  font-family: 'EB Garamond', serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 300;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.metric-label {
  margin-bottom: var(--spacing-xs);
  opacity: 0.8;
}

.metric-description {
  font-size: 0.9rem;
  max-width: 300px;
  margin: var(--spacing-sm) auto 0;
  opacity: 0.7;
}
</style>



