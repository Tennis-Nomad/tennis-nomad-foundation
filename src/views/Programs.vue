<template>
  <div class="programs-page">
    <section class="section programs-overview">
      <div class="container">
        <div class="overview-content">
          <h2 class="section-title">Making Tennis Accessible</h2>
          <p>Our programs are designed to remove barriers and create pathways for communities to experience tennis. From youth clinics to coach training, we work with local partners to deliver programs that are sustainable, impactful, and community-driven.</p>
          <p>Each program is tailored to the specific needs of the community it serves, ensuring that we're not just bringing tennis, but building something that will last.</p>
        </div>
      </div>
    </section>

    <section class="section programs-list">
      <div class="container">
        <div class="programs-grid">
          <ProgramCard
            v-for="program in programs"
            :key="program.name"
            :name="program.name"
            :audience="program.audience"
            :description="program.description"
            :outcomes="program.outcomes"
            :image="program.image"
            :centered="program.centered"
            :imageAlignBottom="program.imageAlignBottom"
          />
        </div>
      </div>
    </section>

    <section class="section program-visuals">
      <div class="container">
        <h2 class="section-title text-center">On the Ground</h2>
        <div class="visuals-grid">
          <div 
            class="visual-item" 
            v-for="(visual, index) in visuals" 
            :key="index"
          >
            <img 
              v-if="visual.url" 
              :src="visual.url" 
              :alt="visual.alt || 'Program Image'"
              class="visual-img"
            />
            <div v-else class="image-placeholder">
              <span>{{ visual.alt || 'Program Image' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProgramCard from '../components/ProgramCard.vue'

const programs = [
  {
    name: 'Youth Tennis Clinics',
    audience: 'Ages 8-18',
    description: 'Regular tennis clinics that introduce young players to the fundamentals of the game while building confidence, discipline, and teamwork.',
    outcomes: [
      'Basic tennis skills development',
      'Physical fitness and coordination',
      'Social skills and teamwork',
      'Confidence building'
    ],
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Education/Education_3.jpg',
      alt: 'Youth Tennis Clinic' 
    }
  },
  {
    name: 'Coaching Workshops',
    audience: 'Local Coaches & Volunteers',
    description: 'Training programs that equip local coaches and volunteers with the skills and knowledge to run sustainable tennis programs in their communities.',
    outcomes: [
      'Tennis coaching fundamentals',
      'Program management skills',
      'Youth development techniques',
      'Community engagement strategies'
    ],
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/sherpa_8.jpg',
      alt: 'Coaching Workshop' 
    }
  },
  {
    name: 'Equipment Donations',
    audience: 'Communities in Need',
    description: 'Providing rackets, balls, nets, and other essential equipment to communities that lack the resources to access tennis gear.',
    outcomes: [
      'Increased access to equipment',
      'Reduced financial barriers',
      'Sustainable program foundation',
      'Community ownership'
    ],
    image: { 
      url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/equipment_donation.jpg',
      alt: 'Equipment Donation' 
    },
    centered: true,
    imageAlignBottom: true
  }
]

const visuals = [
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/1.jpg',
    alt: 'Program Photo 1' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/2.jpg',
    alt: 'Program Photo 2' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/3.jpg',
    alt: 'Program Photo 3' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/4.jpg',
    alt: 'Program Photo 4' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/5.jpg',
    alt: 'Program Photo 5' 
  },
  { 
    url: 'https://storage.googleapis.com/nomadtennis-public/Foundation_assets/Programs/6.jpg',
    alt: 'Program Photo 6' 
  }
]
</script>

<style scoped>
.programs-page {
  width: 100%;
}

.overview-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

.visuals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.visual-item {
  width: 100%;
  height: 450px;
  overflow: hidden;
}

.visual-item .image-placeholder {
  width: 100%;
  height: 100%;
  min-height: 450px;
}

.visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }

  .visuals-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .visual-item {
    height: 280px;
  }

  .visual-item .image-placeholder {
    min-height: 280px;
  }
}
</style>

