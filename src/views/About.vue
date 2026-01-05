<template>
  <div class="about-page">
    <section ref="originStoryRef" class="section origin-story" :class="{ 'animate-in': visibleSections.originStory }">
      <div class="container">
        <div class="story-content">
          <h2 class="section-title">Our Origin</h2>
          <div class="story-text">
            <p>Tennis Nomad Foundation was born from a simple observation: tennis has the power to transform lives, but access to the sport is often limited by geography, economics, and infrastructure.</p>
            <p>What started as a passion project to bring tennis to underserved communities has grown into a movement dedicated to breaking down barriers and creating opportunities for the next generation of players.</p>
            <p>We believe that every child, regardless of their background, deserves the chance to experience the joy, discipline, and community that tennis provides.</p>
          </div>
        </div>
      </div>
    </section>

    <section ref="connectionRef" class="section connection" :class="{ 'animate-in': visibleSections.connection }">
      <div class="container">
        <div class="connection-content">
          <div class="connection-image">
            <img src="https://storage.googleapis.com/nomadtennis-public/Foundation_assets/banner.jpg" alt="Tennis Nomad Ecosystem" />
          </div>
          <div class="connection-text">
            <h2 class="section-title">Connection to Tennis Nomad</h2>
            <p>Tennis Nomad Foundation is the nonprofit arm of the Tennis Nomad ecosystem, which includes the global tennis community platform and media network.</p>
            <p>While Tennis Nomad connects players worldwide through storytelling and community, the Foundation focuses on creating tangible impact on the ground—bringing equipment, coaching, and programs to communities that need them most.</p>
            <p>Together, we're building a more inclusive and accessible tennis world.</p>
          </div>
        </div>
      </div>
    </section>

    <section ref="missionValuesRef" class="section mission-values" :class="{ 'animate-in': visibleSections.missionValues }">
      <div class="container">
        <h2 class="section-title text-center">Mission & Values</h2>
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.title">
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section ref="founderRef" class="section founder" :class="{ 'animate-in': visibleSections.founder }">
      <div class="container">
        <div class="founder-content">
          <div class="founder-image">
            <img src="https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_4.jpg" alt="Founder Photo" />
          </div>
          <div class="founder-text">
            <span class="label">Founder</span>
            <h2 class="founder-name">Our Story</h2>
            <p>As someone who has traveled the world playing and experiencing tennis, I've seen firsthand how the sport can bring people together, build confidence, and create opportunities. But I've also seen how many communities lack access to courts, equipment, and coaching.</p>
            <p>Tennis Nomad Foundation is my way of giving back—of ensuring that the sport I love reaches those who might never have the chance to experience it otherwise. Every racket donated, every clinic held, every connection made is a step toward a more inclusive tennis world.</p>
            <p>We're not just building programs; we're building communities, one court at a time.</p>
          </div>
        </div>
      </div>
    </section>

    <section ref="philosophyRef" class="section philosophy" :class="{ 'animate-in': visibleSections.philosophy }">
      <div class="container">
        <div class="philosophy-content">
          <h2 class="section-title">Community-First Philosophy</h2>
          <p>We don't parachute into communities with ready-made solutions. Instead, we partner with local leaders, coaches, and organizations to understand what each community needs and how tennis can best serve them.</p>
          <p>Our programs are co-created with the communities we serve, ensuring that they're sustainable, culturally relevant, and truly impactful. We believe in building long-term relationships, not just delivering short-term programs.</p>
          <p>By working hand-in-hand with local partners, we ensure that our impact extends far beyond our direct involvement, creating lasting change that communities can build upon for years to come.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const values = [
  {
    title: 'Accessibility',
    description: 'We believe tennis should be available to everyone, regardless of economic or geographic barriers.'
  },
  {
    title: 'Education',
    description: 'We focus on teaching not just tennis skills, but life lessons that extend beyond the court.'
  },
  {
    title: 'Community',
    description: 'We build programs that strengthen local communities and create lasting connections.'
  },
  {
    title: 'Sustainability',
    description: 'We create programs that communities can maintain and grow long after our direct involvement.'
  },
  {
    title: 'Partnership',
    description: 'We work with local leaders and organizations to ensure our programs are culturally relevant and effective.'
  }
]

const originStoryRef = ref(null)
const connectionRef = ref(null)
const missionValuesRef = ref(null)
const founderRef = ref(null)
const philosophyRef = ref(null)

const visibleSections = ref({
  originStory: false,
  connection: false,
  missionValues: false,
  founder: false,
  philosophy: false
})

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === originStoryRef.value) {
            visibleSections.value.originStory = true
          } else if (entry.target === connectionRef.value) {
            visibleSections.value.connection = true
          } else if (entry.target === missionValuesRef.value) {
            visibleSections.value.missionValues = true
          } else if (entry.target === founderRef.value) {
            visibleSections.value.founder = true
          } else if (entry.target === philosophyRef.value) {
            visibleSections.value.philosophy = true
          }
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (originStoryRef.value) observer.observe(originStoryRef.value)
  if (connectionRef.value) observer.observe(connectionRef.value)
  if (missionValuesRef.value) observer.observe(missionValuesRef.value)
  if (founderRef.value) observer.observe(founderRef.value)
  if (philosophyRef.value) observer.observe(philosophyRef.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.about-page {
  width: 100%;
}

.section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.story-content,
.philosophy-content {
  max-width: 800px;
  margin: 0 auto;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.connection-content,
.founder-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.connection-image,
.founder-image {
  width: 100%;
  height: 400px;
}

.connection-image img,
.founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

.connection-text,
.founder-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.founder-text .label {
  margin-bottom: var(--spacing-xs);
}

.founder-name {
  margin-bottom: var(--spacing-sm);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.value-card {
  padding: var(--spacing-md);
  text-align: center;
}

.value-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.value-description {
  font-size: 0.95rem;
  line-height: 1.8;
}

.philosophy-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (max-width: 767px) {
  .connection-content,
  .founder-content {
    grid-template-columns: 1fr;
  }

  .connection-image,
  .founder-image {
    height: 300px;
  }

  .connection-image img,
  .founder-image img {
    min-height: 300px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>

