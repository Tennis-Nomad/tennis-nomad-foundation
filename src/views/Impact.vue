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
                <span class="author-name">{{ story.author }}</span>
                <span class="author-role label" v-if="story.role">{{ story.role }}</span>
              </div>
            </div>
            <div class="story-image" v-if="story.image">
              <div class="image-placeholder">
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
            <div class="image-placeholder">
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
    value: '500+',
    label: 'Kids Reached',
    description: 'Children who have participated in our programs'
  },
  {
    value: '50+',
    label: 'Clinics Held',
    description: 'Tennis clinics and workshops conducted'
  },
  {
    value: '300+',
    label: 'Rackets Donated',
    description: 'Equipment provided to communities'
  },
  {
    value: '25+',
    label: 'Coaches Trained',
    description: 'Local coaches equipped with skills'
  },
  {
    value: '10+',
    label: 'Communities Served',
    description: 'Locations where we have active programs'
  },
  {
    value: '1',
    label: 'Countries',
    description: 'Currently active, with expansion planned'
  }
]

const stories = [
  {
    id: 1,
    quote: 'Before this program, I never thought I could play tennis. Now it\'s my favorite thing, and I want to become a coach one day.',
    author: 'Maria',
    role: 'Youth Program Participant',
    image: { alt: 'Maria Story' }
  },
  {
    id: 2,
    quote: 'The coaching workshop gave me the tools and confidence to start my own program. Now I\'m teaching 30 kids in my community.',
    author: 'Carlos',
    role: 'Local Coach',
    image: { alt: 'Carlos Story' }
  },
  {
    id: 3,
    quote: 'This program has brought our community together in ways I never expected. The kids are happier, more confident, and we have something positive to rally around.',
    author: 'Ana',
    role: 'Community Leader',
    image: { alt: 'Ana Story' }
  }
]

const photos = [
  { alt: 'Impact Photo 1' },
  { alt: 'Impact Photo 2' },
  { alt: 'Impact Photo 3' },
  { alt: 'Impact Photo 4' },
  { alt: 'Impact Photo 5' },
  { alt: 'Impact Photo 6' },
  { alt: 'Impact Photo 7' },
  { alt: 'Impact Photo 8' }
]
</script>

<style scoped>
.impact-page {
  width: 100%;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.story-card {
  background: var(--color-white);
  border: 1px solid rgba(45, 79, 63, 0.1);
  overflow: hidden;
}

.story-quote {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.quote-text {
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.8;
  margin: 0;
}

.quote-author {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
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
  height: 250px;
}

.story-image .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 250px;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
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

@media (max-width: 767px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }

  .stories-grid {
    grid-template-columns: 1fr;
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

