<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="modal-overlay"
        @click.self="closeModal"
        @keydown.esc="closeModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="modal-container" ref="modalRef">
          <div class="modal-content">
            <!-- Header -->
            <div class="modal-header">
              <h2 id="modal-title" class="modal-title">Be Part of the Journey</h2>
              <p class="modal-subtext">
                The Tennis Nomad Foundation is currently building toward nonprofit certification. 
                While we are not accepting donations yet our mission is already in motion. 
                If you are interested in supporting our work in the future we would love to stay connected.
              </p>
              <button 
                class="modal-close"
                @click="closeModal"
                aria-label="Close modal"
                ref="closeButtonRef"
              >
                ×
              </button>
            </div>

            <!-- Success State -->
            <div v-if="isSuccess" class="success-state">
              <div class="success-icon">✓</div>
              <h3 class="success-title">Thank you for supporting the Tennis Nomad Foundation.</h3>
              <p class="success-message">We will be in touch.</p>
              <button class="btn btn-primary" @click="closeModal">
                Close
              </button>
            </div>

            <!-- Form -->
            <form 
              v-else
              @submit.prevent="handleSubmit"
              class="donate-form"
              novalidate
            >
              <!-- Full Name -->
              <div class="form-group">
                <label for="fullName" class="form-label">
                  Full Name <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  v-model="form.fullName"
                  required
                  class="form-input"
                  :class="{ 'error': errors.fullName }"
                  @blur="validateField('fullName')"
                  @input="clearError('fullName')"
                  ref="firstInputRef"
                />
                <span v-if="errors.fullName" class="error-message">{{ errors.fullName }}</span>
              </div>

              <!-- Email Address -->
              <div class="form-group">
                <label for="email" class="form-label">
                  Email Address <span class="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="form-input"
                  :class="{ 'error': errors.email }"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <!-- Location -->
              <div class="form-group">
                <label for="location" class="form-label">Location</label>
                <input
                  type="text"
                  id="location"
                  v-model="form.location"
                  class="form-input"
                />
              </div>

              <!-- Organization -->
              <div class="form-group">
                <label for="organization" class="form-label">Organization</label>
                <input
                  type="text"
                  id="organization"
                  v-model="form.organization"
                  class="form-input"
                />
              </div>

              <!-- Support Options -->
              <div class="form-group">
                <label class="form-label">How would you like to support the Foundation?</label>
                <div class="checkbox-group">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      value="future-donations"
                      v-model="form.supportOptions"
                      class="checkbox-input"
                    />
                    <span class="checkbox-text">Future donations</span>
                  </label>
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      value="corporate-partnerships"
                      v-model="form.supportOptions"
                      class="checkbox-input"
                    />
                    <span class="checkbox-text">Corporate partnerships</span>
                  </label>
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      value="volunteering"
                      v-model="form.supportOptions"
                      class="checkbox-input"
                    />
                    <span class="checkbox-text">Volunteering</span>
                  </label>
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      value="equipment"
                      v-model="form.supportOptions"
                      class="checkbox-input"
                    />
                    <span class="checkbox-text">Equipment or in kind support</span>
                  </label>
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      value="general-updates"
                      v-model="form.supportOptions"
                      class="checkbox-input"
                    />
                    <span class="checkbox-text">General updates</span>
                  </label>
                </div>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="form-input form-textarea"
                  placeholder="Tell us what inspired you to reach out"
                ></textarea>
              </div>

              <!-- Consent Text -->
              <p class="consent-text">
                By submitting this form you are expressing interest only. No payment is requested or expected at this time.
              </p>

              <!-- Form Actions -->
              <div class="form-actions">
                <button 
                  type="submit" 
                  class="btn btn-primary"
                  :disabled="!isFormValid"
                >
                  Stay in Touch
                </button>
                <button 
                  type="button" 
                  class="btn btn-secondary"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'submit'])

const modalRef = ref(null)
const closeButtonRef = ref(null)
const firstInputRef = ref(null)

const form = ref({
  fullName: '',
  email: '',
  location: '',
  organization: '',
  supportOptions: [],
  message: ''
})

const errors = ref({})
const isSuccess = ref(false)

const isFormValid = computed(() => {
  return form.value.fullName.trim() !== '' && 
         form.value.email.trim() !== '' && 
         isValidEmail(form.value.email)
})

const validateField = (fieldName) => {
  errors.value[fieldName] = ''
  
  if (fieldName === 'fullName') {
    if (!form.value.fullName.trim()) {
      errors.value.fullName = 'Full name is required'
    }
  }
  
  if (fieldName === 'email') {
    if (!form.value.email.trim()) {
      errors.value.email = 'Email address is required'
    } else if (!isValidEmail(form.value.email)) {
      errors.value.email = 'Please enter a valid email address'
    }
  }
}

const clearError = (fieldName) => {
  if (errors.value[fieldName]) {
    errors.value[fieldName] = ''
  }
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = () => {
  errors.value = {}
  validateField('fullName')
  validateField('email')
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (!validateForm()) {
    return
  }
  
  // Emit submit event with form data
  emit('submit', { ...form.value })
  
  // Show success state
  isSuccess.value = true
  
  // Reset form after a delay (optional, or keep data)
  setTimeout(() => {
    // form.value = {
    //   fullName: '',
    //   email: '',
    //   location: '',
    //   organization: '',
    //   supportOptions: [],
    //   message: ''
    // }
  }, 3000)
}

const closeModal = () => {
  emit('close')
  // Reset form and success state when closing
  setTimeout(() => {
    isSuccess.value = false
    errors.value = {}
  }, 300) // Wait for animation to complete
}

// Focus management
const trapFocus = (e) => {
  if (!props.isOpen || !modalRef.value) return
  
  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }
}

// Watch for modal open to focus first input and lock body scroll
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    // Lock body scroll
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      if (firstInputRef.value) {
        firstInputRef.value.focus()
      } else if (closeButtonRef.value) {
        closeButtonRef.value.focus()
      }
    })
  } else {
    // Unlock body scroll
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', trapFocus)
})

onUnmounted(() => {
  document.removeEventListener('keydown', trapFocus)
  // Ensure body scroll is unlocked when component is unmounted
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 79, 63, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: var(--spacing-md);
  overflow-y: auto;
}

.modal-container {
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-content {
  background: var(--color-white);
  box-shadow: 0 4px 20px rgba(45, 79, 63, 0.15);
  padding: var(--spacing-lg);
  position: relative;
}

.modal-header {
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: var(--color-text);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition-base);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
}

.modal-close:hover {
  opacity: 0.7;
}

.modal-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
  font-weight: 300;
}

.modal-subtext {
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  line-height: 1.8;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 0;
}

.donate-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.required {
  color: var(--color-primary);
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(45, 79, 63, 0.3);
  background: var(--color-white);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
  border-radius: 0;
  box-shadow: 0 1px 3px rgba(45, 79, 63, 0.05);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 2px 6px rgba(45, 79, 63, 0.1);
}

.form-input.error {
  border-color: rgba(200, 50, 50, 0.6);
}

.form-input.error:focus {
  border-color: rgba(200, 50, 50, 0.8);
  box-shadow: 0 2px 6px rgba(200, 50, 50, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  font-family: 'Inter', sans-serif;
}

.form-textarea::placeholder {
  color: rgba(45, 79, 63, 0.5);
  font-style: italic;
}

.error-message {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(200, 50, 50, 0.8);
  margin-top: 0.25rem;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xs);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  text-transform: none;
  letter-spacing: normal;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--color-primary);
  border-radius: 0;
}

.checkbox-text {
  user-select: none;
}

.consent-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(45, 79, 63, 0.6);
  line-height: 1.6;
  margin-top: var(--spacing-xs);
  font-style: italic;
}

.form-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  min-width: 120px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:disabled:hover {
  background: transparent;
  color: var(--color-primary);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-bg);
}

.success-state {
  text-align: center;
  padding: var(--spacing-lg) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: var(--spacing-sm);
}

.success-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-text);
  font-weight: 300;
  margin-bottom: var(--spacing-xs);
}

.success-message {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: var(--spacing-md);
}

/* Modal Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .modal-container {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-container {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

@media (max-width: 767px) {
  .modal-overlay {
    padding: var(--spacing-sm);
    align-items: flex-start;
    padding-top: var(--spacing-md);
  }

  .modal-content {
    padding: var(--spacing-md);
  }

  .modal-title {
    padding-right: var(--spacing-md);
  }

  .form-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>

