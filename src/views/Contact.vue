<template>
  <div class="contact-page">
    <section class="section contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-section">
            <h2 class="section-title">Send Us a Message</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="email" class="label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="inquiry-type" class="label">Inquiry Type</label>
                <select 
                  id="inquiry-type" 
                  v-model="form.inquiryType" 
                  required
                  class="form-input"
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="media">Media</option>
                  <option value="equipment-donation">Equipment Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="label">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="6"
                  class="form-input"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div class="contact-info-section">
            <h2 class="section-title">Contact Information</h2>
            <div class="info-content">
              <div class="info-item">
                <h3 class="info-label label">Email</h3>
                <a href="mailto:foundation@nomadtennis.com" class="info-value">
                  foundation@nomadtennis.com
                </a>
              </div>

              <div class="info-item">
                <h3 class="info-label label">General Inquiries</h3>
                <p class="info-value">For questions about our programs, impact, or how to get involved.</p>
              </div>

              <div class="info-item">
                <h3 class="info-label label">Partnerships</h3>
                <p class="info-value">Interested in partnering with us? We'd love to explore how we can work together to expand our impact.</p>
              </div>

              <div class="info-item">
                <h3 class="info-label label">Social Media</h3>
                <div class="social-links">
                  <a href="https://www.instagram.com/tennisnomadfoundation/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://x.com/tennis_nomad" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="https://www.youtube.com/watch?v=r5BL5lWnjJU" aria-label="YouTube" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  inquiryType: '',
  message: ''
})

const handleSubmit = () => {
  // Placeholder for form submission
  alert('Thank you for your message! Form submission will be implemented with backend integration.')
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  width: 100%;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.contact-form-section,
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group label {
  margin-bottom: 0.25rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(45, 79, 63, 0.3);
  background: var(--color-white);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color var(--transition-base);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-input textarea {
  resize: vertical;
  font-family: 'Inter', sans-serif;
}

.form-input select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232d4f3f' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  cursor: pointer;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.info-label {
  margin-bottom: var(--spacing-xs);
}

.info-value {
  font-size: 1rem;
  line-height: 1.6;
}

.info-value a {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.social-links a {
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.875rem;
}

@media (max-width: 767px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}
</style>



