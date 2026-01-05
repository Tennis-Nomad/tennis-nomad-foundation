<template>
  <div class="home-page">
    <HeroSection
      headline="Growing the game where it's needed most"
      subhead="Through tennis, we build communities, create opportunities, and inspire the next generation of players."
      :primary-cta="{ text: 'Donate', to: '/donate' }"
      :secondary-cta="{ text: 'Get Involved', to: '/contact' }"
    />

    <section class="section what-we-do">
      <h2 class="section-title text-center">What We Do</h2>
        <div class="pillars-grid">
        <div class="pillar-card" v-for="pillar in pillars" :key="pillar.title">
          <div class="pillar-image">
            <div class="carousel-container">
              <div 
                class="carousel-slide" 
                v-for="(image, index) in pillar.images" 
                :key="index"
                :class="{ active: index === pillar.currentIndex }"
              >
                <img :src="image" :alt="pillar.title" />
              </div>
            </div>
          </div>
          <div class="pillar-content">
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-description">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section where-we-work">
      <div class="container">
        <div class="where-content">
          <div class="where-text">
            <h2 class="section-title">Where We Work</h2>
            <p>We're currently active in communities across the Philippines, with plans to expand to other regions where tennis access is limited.</p>
            <ul class="country-list">
              <li>Philippines</li>
              <li>More locations coming soon</li>
            </ul>
          </div>
          <div class="where-image">
            <img src="https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Philippines.jpg" alt="Philippines Map" />
          </div>
        </div>
      </div>
    </section>

    <section class="section impact-snapshot">
      <div class="container">
        <h2 class="section-title text-center">Our Impact</h2>
        <div class="metrics-grid">
          <ImpactMetric
            v-for="metric in impactMetrics"
            :key="metric.label"
            :value="metric.value"
            :label="metric.label"
            :description="metric.description"
          />
        </div>
      </div>
    </section>

    <section class="section image-carousel-section">
      <div class="carousel-wrapper">
        <div class="carousel-track">
          <div class="carousel-item" v-for="(image, index) in carouselImages" :key="index">
            <img :src="image" alt="Impact image" />
          </div>
          <!-- Duplicate images for seamless loop -->
          <div class="carousel-item" v-for="(image, index) in carouselImages" :key="`duplicate-${index}`">
            <img :src="image" alt="Impact image" />
          </div>
        </div>
      </div>
    </section>

    <section class="section featured-story">
      <div class="container">
        <div class="stories-header">
          <h2 class="story-title">Communities We Touch, Where Tennis Creates Change</h2>
          <span class="label">Featured Stories</span>
        </div>
      </div>
      <div class="stories-grid-wrapper">
        <div class="stories-grid">
          <div 
            class="story-wrapper" 
            v-for="story in featuredStories" 
            :key="story.title"
          >
            <div class="story-content">
              <div class="story-image">
                <img :src="story.image" :alt="story.title" />
              </div>
              <div class="story-text">
                <h3 class="story-card-title">{{ story.title }}</h3>
                <p>{{ story.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      text="Help us grow the game where it's needed most."
      :buttons="[
        { text: 'Donate', to: '/donate', primary: true },
        { text: 'Partner With Us', to: '/contact', primary: false }
      ]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import CTASection from '../components/CTASection.vue'
import ImpactMetric from '../components/ImpactMetric.vue'

const pillars = ref([
  {
    title: 'Access',
    description: 'Providing equipment, courts, and opportunities to communities where tennis is out of reach.',
    images: [
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/access.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/access/access_5.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/access/access_8.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/access/access_7.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/access/access_6.jpg'
    ],
    currentIndex: 0
  },
  {
    title: 'Education',
    description: 'Training coaches and developing programs that teach both tennis skills and life lessons.',
    images: [
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/sherpa_8.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Education/Education_1.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Education/Education_2.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Education/Education_3.jpg'
    ],
    currentIndex: 0
  },
  {
    title: 'Community',
    description: 'Building connections between players, families, and communities through the shared love of tennis.',
    images: [
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/banner.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_6.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_1.jpg',
      'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Community/community_1.jpg'
    ],
    currentIndex: 0
  }
])

let carouselIntervals = []

const rotateCarousel = (pillar) => {
  pillar.currentIndex = (pillar.currentIndex + 1) % pillar.images.length
}

onMounted(() => {
  pillars.value.forEach((pillar) => {
    const interval = setInterval(() => {
      rotateCarousel(pillar)
    }, 4000) // Rotate every 4 seconds
    carouselIntervals.push(interval)
  })
})

onUnmounted(() => {
  carouselIntervals.forEach(interval => clearInterval(interval))
})

const impactMetrics = ref([
  {
    value: '200+',
    label: 'Kids Reached',
    description: 'Children who have participated in our programs'
  },
  {
    value: '80+',
    label: 'Clinics Held',
    description: 'Tennis clinics and workshops conducted'
  },
  {
    value: '200+',
    label: 'Rackets Donated',
    description: 'Equipment provided to communities in need'
  },
  {
    value: '1',
    label: 'Countries',
    description: 'Currently active, with expansion planned'
  }
])

const carouselImages = ref([
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Impact/1.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Impact/2.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Impact/3.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Impact/4.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/banner.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_1.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/sherpa_8.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_5.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_3.jpg',
  'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/impact_4.jpg'
])

const featuredStories = ref([
  {
    title: 'Building Community Through Tennis in Cebu',
    image: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/sherpa_7.jpg',
    content: 'In Cebu the Tennis Nomad Foundation found a community eager to learn connect and grow. Surrounded by the calm of Asmara the Foundation created a space where children families and local partners came together around a shared love of movement and play. What began as a simple gathering quickly became a reminder of how sport can bring people closer. Cebu showed us that when opportunity meets openness something meaningful follows. The Foundation left with new relationships and a deeper understanding of how tennis can support confidence belonging and community spirit.'
  },
  {
    title: 'A Shared Purpose in Sablayan',
    image: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Featured%20Stories/sablayan_1.jpg',
    content: 'Sablayan represented the heart of what the Tennis Nomad Foundation stands for. Working alongside the local municipality the Foundation became part of the community rather than just a visitor. The courts turned into a meeting place where encouragement respect and curiosity shaped every interaction. The energy of the town carried into each day creating an environment where children felt supported and valued. Sablayan reminded us that impact is not measured only by numbers but by presence and consistency. Through simple shared moments the Foundation strengthened local ties and reinforced its mission of using tennis as a tool for positive change.'
  },
  {
    title: 'Connection at Scale in Manila',
    image: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Featured%20Stories/manila_1.jpg',
    content: 'Manila brought together diverse communities under one shared experience. Across multiple venues the Tennis Nomad Foundation worked with partners who believed in access inclusion and opportunity. The city\'s pace was fast but the connections formed were genuine and lasting. Children from different backgrounds stood side by side united by the court and the moment. Manila demonstrated the power of collaboration and the importance of meeting people where they are. For the Foundation this chapter reinforced a core belief that tennis can open doors spark confidence and create connection even in the largest and most complex environments.'
  }
])
</script>

<style scoped>
.home-page {
  width: 100%;
}

.section-title {
  margin-bottom: var(--spacing-lg);
}

.what-we-do {
  padding: var(--spacing-xl) 0;
}

.what-we-do .section-title {
  padding: 0 var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

@media (min-width: 768px) {
  .what-we-do .section-title {
    padding: 0 var(--spacing-lg);
  }
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: var(--spacing-lg);
}

.pillar-card {
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
}

.pillar-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  z-index: 1;
}

.carousel-slide.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 2;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pillar-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
  text-align: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
  color: var(--color-white);
}

.pillar-title {
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-white);
}

.pillar-description {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-white);
}

.where-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.where-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.country-list {
  list-style: none;
  padding-left: 0;
  margin-top: var(--spacing-sm);
}

.country-list li {
  padding: var(--spacing-xs) 0;
  font-size: 1.125rem;
  position: relative;
  padding-left: var(--spacing-md);
}

.country-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  opacity: 0.5;
}

.where-image {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.where-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.where-image .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.image-carousel-section {
  padding: 0 0 var(--spacing-xl) 0;
  overflow: hidden;
  background: var(--color-white);
}

.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 0;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

.carousel-item {
  flex-shrink: 0;
  width: 500px;
  height: 375px;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.featured-story {
  background: var(--color-white);
}

.stories-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.stories-header .story-title {
  margin-bottom: var(--spacing-xs);
}

.stories-header .label {
  display: block;
  margin-bottom: 0;
}

.stories-grid-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  align-items: start;
  padding: 0 var(--spacing-lg);
}

.story-wrapper {
  background: #f5f2ee;
  opacity: 1;
  overflow: hidden;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}

.story-image {
  width: 100%;
  height: 100%;
  min-height: 500px;
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.story-image .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
}

.story-card-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
}

.story-text p {
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .where-content {
    grid-template-columns: 1fr;
  }

  .where-image .image-placeholder {
    min-height: 300px;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .pillar-card {
    min-height: 400px;
  }

  .stories-grid-wrapper {
    padding-bottom: var(--spacing-sm);
  }

  .stories-grid-wrapper::-webkit-scrollbar {
    height: 6px;
  }

  .stories-grid-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .stories-grid-wrapper::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 3px;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
    scroll-snap-type: x mandatory;
    padding: 0 var(--spacing-md);
  }

  .story-wrapper {
    min-width: 90vw;
    scroll-snap-align: start;
  }

  .story-content {
    grid-template-columns: 1fr 1fr;
  }

  .story-image {
    height: 400px;
  }

  .story-image img {
    height: 100%;
  }

  .story-image .image-placeholder {
    min-height: 400px;
  }

  .story-card-title {
    font-size: 1.25rem;
  }

  .carousel-item {
    width: 350px;
    height: 262px;
  }
}
</style>

