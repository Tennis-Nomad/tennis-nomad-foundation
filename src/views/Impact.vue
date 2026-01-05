<template>
  <div class="impact-page">
    <section class="section impact-metrics">
      <div class="container">
        <h2 class="section-title text-center">By the Numbers</h2>
        <div class="metrics-grid">
          <ImpactMetric
            v-for="metric in metrics"
            :key="metric.label"
            :value="metric.value"
            :label="metric.label"
            :description="metric.description"
          />
        </div>
      </div>
    </section>

    <section class="section stories">
      <div class="container">
        <h2 class="section-title text-center">Stories from the Court</h2>
        <div class="stories-grid">
          <div class="story-card" v-for="story in stories" :key="story.id">
            <div class="story-quote">
              <p class="quote-text">"{{ story.quote }}"</p>
              <div class="quote-author">
                <span class="author-role label" v-if="story.role">{{ story.role }}</span>
              </div>
            </div>
            <div class="story-image" v-if="story.image">
              <img 
                v-if="story.image.url" 
                :src="story.image.url" 
                :alt="story.image.alt || 'Story Image'"
                class="story-img"
              />
              <div v-else class="image-placeholder">
                <span>{{ story.image.alt || 'Story Image' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section photo-essay">
      <div class="container">
        <h2 class="section-title text-center">Visual Storytelling</h2>
        <div class="photo-grid">
          <div 
            class="photo-item" 
            v-for="(photo, index) in photos" 
            :key="index"
          >
            <img 
              v-if="photo.url" 
              :src="photo.url" 
              :alt="photo.alt || 'Impact Photo'"
              class="photo-img"
            />
            <div v-else class="image-placeholder">
              <span>{{ photo.alt || 'Impact Photo' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ImpactMetric from '../components/ImpactMetric.vue'

const metrics = [
  {
    value: '200+',
    label: 'Kids',
    description: ''
  },
  {
    value: '60+',
    label: 'Hours of Clinics Held',
    description: ''
  },
  {
    value: '200+',
    label: 'Rackets Donated',
    description: ''
  },
  {
    value: '5+',
    label: 'Coaches Trained',
    description: ''
  },
  {
    value: '15+',
    label: 'Communities Served',
    description: ''
  },
  {
    value: '1',
    label: 'Countries',
    description: ''
  }
]

const stories = [
  {
    id: 1,
    quote: 'Before this program, I never thought I could play tennis. Now it\'s my favorite thing, and I want to become a coach one day.',
    role: 'Youth Program Participant',
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/5.jpg',
      alt: 'Youth Program Story' 
    }
  },
  {
    id: 2,
    quote: 'The coaching workshop gave me the tools and confidence to start my own program. Now I\'m teaching 30 kids in my community.',
    role: 'Local Coach',
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/7.jpg',
      alt: 'Local Coach Story' 
    }
  },
  {
    id: 3,
    quote: 'This program has brought our community together in ways I never expected. The kids are happier, more confident, and we have something positive to rally around.',
    role: 'Community Leader',
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/8.jpg',
      alt: 'Community Leader Story' 
    }
  }
]

const photos = [
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/1.jpg',
    alt: 'Impact Photo 1' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/2.jpg',
    alt: 'Impact Photo 2' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/3.jpg',
    alt: 'Impact Photo 3' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/4.jpg',
    alt: 'Impact Photo 4' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/5.jpg',
    alt: 'Impact Photo 5' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/6.jpg',
    alt: 'Impact Photo 6' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/7.jpg',
    alt: 'Impact Photo 7' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/storytelling/8.jpg',
    alt: 'Impact Photo 8' 
  }
]
</script>

<style scoped>
.impact-page {
  width: 100%;
}

.metrics-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.stories-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.story-card {
  background: var(--color-white);
  border: 1px solid rgba(45, 79, 63, 0.1);
  overflow: hidden;
  min-width: 350px;
}

@media (min-width: 768px) {
  .story-card {
    flex: 0 1 calc((100% - var(--spacing-lg)) / 2);
    max-width: calc((100% - var(--spacing-lg)) / 2);
  }
}

.story-quote {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  text-align: center;
}

.quote-text {
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.8;
  margin: 0;
  text-align: center;
}

.quote-author {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
  align-items: center;
}

.author-name {
  font-weight: 400;
  font-size: 1rem;
}

.author-role {
  opacity: 0.7;
}

.story-image {
  width: 100%;
  height: 400px;
}

.story-image .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  justify-items: center;
}

.photo-item {
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.photo-item .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 350px;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .metrics-grid {
    gap: var(--spacing-md);
  }

  .stories-grid {
    gap: var(--spacing-md);
  }
  
  .story-card {
    width: 100%;
    max-width: 100%;
  }

  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .photo-item {
    height: 250px;
  }

  .photo-item .image-placeholder {
    min-height: 250px;
  }
}
</style>

