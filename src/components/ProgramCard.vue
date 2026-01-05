<template>
  <div class="program-card" :class="{ 'centered': centered }">
    <div class="program-image" v-if="image">
      <img 
        v-if="image.url" 
        :src="image.url" 
        :alt="image.alt || 'Program Image'"
        class="program-img"
        :class="{ 'align-bottom': imageAlignBottom }"
      />
      <div v-else class="image-placeholder">
        <span>{{ image.alt || 'Program Image' }}</span>
      </div>
    </div>
    <div class="program-content">
      <h3 class="program-name">{{ name }}</h3>
      <p class="program-audience label" v-if="audience">{{ audience }}</p>
      <p class="program-description" v-if="description">{{ description }}</p>
      <ul class="program-outcomes" v-if="outcomes && outcomes.length">
        <li v-for="(outcome, index) in outcomes" :key="index">{{ outcome }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  audience: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  outcomes: {
    type: Array,
    default: () => []
  },
  image: {
    type: Object,
    default: null
  },
  centered: {
    type: Boolean,
    default: false
  },
  imageAlignBottom: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.program-card {
  background: var(--color-white);
  border: 1px solid rgba(45, 79, 63, 0.1);
  overflow: hidden;
  transition: transform var(--transition-base);
}

.program-card:hover {
  transform: translateY(-4px);
}

.program-image {
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.program-image .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.program-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.program-img.align-bottom {
  object-position: bottom;
}

.program-card.centered {
  grid-column: 1 / -1;
  max-width: 600px;
  margin: 0 auto;
}

.program-content {
  padding: var(--spacing-md);
}

.program-name {
  margin-bottom: var(--spacing-xs);
  font-size: 1.5rem;
}

.program-audience {
  margin-bottom: var(--spacing-sm);
  opacity: 0.7;
}

.program-description {
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
}

.program-outcomes {
  list-style: none;
  padding-left: 0;
  margin-top: var(--spacing-sm);
}

.program-outcomes li {
  position: relative;
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
}

.program-outcomes li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  opacity: 0.5;
}
</style>

