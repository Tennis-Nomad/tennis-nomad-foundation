<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-headline" v-if="headline">{{ headline }}</h2>
        <p class="cta-text" v-if="text">{{ text }}</p>
        <div class="cta-buttons" v-if="buttons && buttons.length">
          <router-link
            v-for="(button, index) in buttons"
            :key="index"
            :to="button.to"
            :class="['btn', button.primary ? 'btn-primary' : '']"
          >
            {{ button.text }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  headline: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    required: true
  },
  buttons: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.cta-section {
  background: var(--color-primary);
  color: var(--color-bg);
  padding: var(--spacing-xl) 0;
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-headline {
  color: var(--color-bg);
  margin-bottom: var(--spacing-md);
}

.cta-text {
  color: var(--color-bg);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-buttons .btn {
  border-color: var(--color-bg);
  color: var(--color-bg);
}

.cta-buttons .btn:hover {
  background: var(--color-bg);
  color: var(--color-primary);
}

.cta-buttons .btn-primary {
  background: #2d4f3f;
  color: white;
  border-color: #2d4f3f;
  text-shadow: none;
  opacity: 1;
}

.cta-buttons .btn-primary:hover {
  background: #d4af37;
  color: white;
  border-color: #d4af37;
  opacity: 1;
}

@media (max-width: 767px) {
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-buttons .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

