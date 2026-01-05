<template>
  <section class="hero-section">
    <div class="hero-image">
      <img src="https://storage.googleapis.com/nomadtennis-public/Foundation_assets/banner_3.jpg" alt="Tennis Nomad Foundation Banner" />
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="container">
        <h1 class="hero-headline">{{ headline }}</h1>
        <p class="hero-subhead" v-if="subhead">{{ subhead }}</p>
        <div class="hero-ctas" v-if="primaryCta || secondaryCta">
          <router-link 
            v-if="primaryCta" 
            :to="primaryCta.to" 
            class="btn btn-primary"
          >
            {{ primaryCta.text }}
          </router-link>
          <router-link 
            v-if="secondaryCta" 
            :to="secondaryCta.to" 
            class="btn"
          >
            {{ secondaryCta.text }}
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
    required: true
  },
  subhead: {
    type: String,
    default: ''
  },
  primaryCta: {
    type: Object,
    default: null
  },
  secondaryCta: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 90vh;
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}

.hero-content .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.hero-headline {
  text-align: center;
  margin: 0 auto var(--spacing-md);
  max-width: 900px;
  width: 100%;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
  animation: floatIn 1s ease-out;
  animation-fill-mode: both;
}

.hero-subhead {
  text-align: center;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  margin: 0 auto var(--spacing-lg);
  max-width: 700px;
  width: 100%;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
  animation: floatIn 1s ease-out 0.2s;
  animation-fill-mode: both;
}

.hero-ctas {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  animation: floatIn 1s ease-out 0.4s;
  animation-fill-mode: both;
}

.hero-ctas .btn {
  color: var(--color-primary);
  border-color: white;
  background: white;
  text-shadow: none;
  opacity: 1;
}

.hero-ctas .btn:hover {
  background: #d4af37;
  color: white;
  border-color: #d4af37;
  opacity: 1;
}

.hero-ctas .btn-primary {
  background: #2d4f3f;
  color: white;
  border-color: #2d4f3f;
  text-shadow: none;
  opacity: 1;
}

.hero-ctas .btn-primary:hover {
  background: #d4af37;
  color: white;
  border-color: #d4af37;
  opacity: 1;
}

@media (max-width: 767px) {
  .hero-section {
    min-height: 80vh;
  }

  .hero-image img {
    min-height: 80vh;
  }

  .hero-content {
    padding: var(--spacing-lg) 0;
  }

  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero-ctas .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

