<template>
  <div class="donate-page">
    <section class="section why-donate">
      <div class="container">
        <div class="why-content">
          <h2 class="section-title">Why Donate</h2>
          <p>Every dollar you contribute goes directly toward creating opportunities for children and communities who might never experience tennis otherwise. Your support funds equipment, coaching, program logistics, and the infrastructure needed to build sustainable tennis programs.</p>
          <p>We operate with transparency and efficiency, ensuring that your donation has maximum impact on the ground. As a registered 501(c)(3) nonprofit, your contributions are tax-deductible.</p>
        </div>
      </div>
    </section>

    <section class="section donation-options">
      <div class="container">
        <h2 class="section-title text-center">Donation Options</h2>
        <div class="options-grid">
          <div class="option-card">
            <h3 class="option-title">One-Time Donation</h3>
            <p class="option-description">Make a single contribution to support our programs. Every amount makes a difference.</p>
            <div class="donation-amounts">
              <button 
                v-for="amount in oneTimeAmounts" 
                :key="amount"
                class="amount-btn"
                @click="selectAmount(amount, 'one-time')"
              >
                ${{ amount }}
              </button>
              <input 
                type="number" 
                placeholder="Custom amount" 
                class="custom-amount"
                v-model="customAmount"
              />
            </div>
            <button class="btn btn-primary" @click="proceedToDonate('one-time')">
              Donate Now
            </button>
          </div>

          <div class="option-card">
            <h3 class="option-title">Monthly Donation</h3>
            <p class="option-description">Become a sustaining supporter with a monthly contribution. Help us plan for long-term impact.</p>
            <div class="donation-amounts">
              <button 
                v-for="amount in monthlyAmounts" 
                :key="amount"
                class="amount-btn"
                @click="selectAmount(amount, 'monthly')"
              >
                ${{ amount }}/mo
              </button>
              <input 
                type="number" 
                placeholder="Custom amount" 
                class="custom-amount"
                v-model="customMonthlyAmount"
              />
            </div>
            <button class="btn btn-primary" @click="proceedToDonate('monthly')">
              Start Monthly Donation
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section what-funds">
      <div class="container">
        <h2 class="section-title text-center">What Your Support Funds</h2>
        <div class="funds-grid">
          <div class="fund-item" v-for="fund in funds" :key="fund.title">
            <h3 class="fund-title">{{ fund.title }}</h3>
            <p class="fund-description">{{ fund.description }}</p>
            <p class="fund-example label" v-if="fund.example">{{ fund.example }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section trust-signals">
      <div class="container">
        <div class="trust-content">
          <h2 class="section-title text-center">Trust & Transparency</h2>
          <div class="trust-items">
            <div class="trust-item">
              <h3>501(c)(3) Status</h3>
              <p>Tennis Nomad Foundation is a registered nonprofit organization. Your donations are tax-deductible to the full extent allowed by law.</p>
            </div>
            <div class="trust-item">
              <h3>Financial Transparency</h3>
              <p>We are committed to transparency in how we use your donations. Annual reports and financial statements are available upon request.</p>
            </div>
            <div class="trust-item">
              <h3>Direct Impact</h3>
              <p>The majority of your donation goes directly to program delivery, with minimal overhead costs. We believe in efficiency and accountability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const oneTimeAmounts = [25, 50, 100, 250, 500]
const monthlyAmounts = [10, 25, 50, 100]

const selectedAmount = ref(null)
const selectedType = ref(null)
const customAmount = ref('')
const customMonthlyAmount = ref('')

const selectAmount = (amount, type) => {
  selectedAmount.value = amount
  selectedType.value = type
  if (type === 'one-time') {
    customAmount.value = ''
  } else {
    customMonthlyAmount.value = ''
  }
}

const proceedToDonate = (type) => {
  // Placeholder for payment integration
  const amount = type === 'one-time' 
    ? (customAmount.value || selectedAmount.value)
    : (customMonthlyAmount.value || selectedAmount.value)
  
  if (!amount) {
    alert('Please select or enter a donation amount.')
    return
  }
  
  alert(`Thank you! Payment integration will be implemented here. Selected: $${amount} ${type === 'monthly' ? 'per month' : 'one-time'}`)
}

const funds = [
  {
    title: 'Equipment',
    description: 'Rackets, balls, nets, and other essential tennis equipment for communities in need.',
    example: '$50 provides 2 rackets and balls for a new player'
  },
  {
    title: 'Coaching',
    description: 'Training programs for local coaches and volunteers to run sustainable tennis programs.',
    example: '$200 trains one local coach'
  },
  {
    title: 'Program Logistics',
    description: 'Court access, transportation, and operational support for clinics and workshops.',
    example: '$100 supports one clinic session'
  },
  {
    title: 'Infrastructure',
    description: 'Court improvements, equipment storage, and facilities that enable long-term program sustainability.',
    example: '$500 improves court infrastructure'
  }
]
</script>

<style scoped>
.donate-page {
  width: 100%;
}

.why-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.option-card {
  background: var(--color-white);
  border: 1px solid rgba(45, 79, 63, 0.1);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.option-title {
  font-size: 1.75rem;
  margin-bottom: var(--spacing-xs);
}

.option-description {
  margin-bottom: var(--spacing-sm);
}

.donation-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.amount-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-base);
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
}

.amount-btn:hover,
.amount-btn.active {
  background: var(--color-primary);
  color: var(--color-bg);
}

.custom-amount {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  width: 150px;
}

.custom-amount::placeholder {
  color: rgba(45, 79, 63, 0.5);
}

.funds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.fund-item {
  padding: var(--spacing-md);
  text-align: center;
}

.fund-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
}

.fund-description {
  margin-bottom: var(--spacing-xs);
  font-size: 0.95rem;
}

.fund-example {
  margin-top: var(--spacing-xs);
  opacity: 0.7;
}

.trust-content {
  max-width: 1000px;
  margin: 0 auto;
}

.trust-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.trust-item {
  text-align: center;
  padding: var(--spacing-md);
}

.trust-item h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
}

.trust-item p {
  font-size: 0.95rem;
  line-height: 1.8;
}

@media (max-width: 767px) {
  .options-grid {
    grid-template-columns: 1fr;
  }

  .donation-amounts {
    justify-content: center;
  }

  .custom-amount {
    width: 100%;
  }

  .funds-grid,
  .trust-items {
    grid-template-columns: 1fr;
  }
}
</style>



