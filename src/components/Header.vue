<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <img src="https://storage.googleapis.com/nomadtennis-public/Foundation_assets/logo.png" alt="Tennis Nomad Foundation" class="logo-image" />
          <span class="logo-text">Tennis Nomad Foundation</span>
        </router-link>
        <button 
          class="mobile-menu-toggle" 
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" :class="{ active: mobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">About</router-link></li>
          <li><router-link to="/programs" @click="closeMobileMenu">Programs</router-link></li>
          <li><router-link to="/impact" @click="closeMobileMenu">Impact</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
          <li class="mobile-donate"><router-link to="/donate" @click="closeMobileMenu">Donate</router-link></li>
        </ul>
        <router-link to="/donate" class="donate-btn" @click="closeMobileMenu">Donate</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  z-index: 1000;
  border-bottom: 1px solid rgba(45, 79, 63, 0.1);
  padding: var(--spacing-sm) 0;
}

.nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--spacing-md);
}

.nav-links {
  justify-self: center;
}

.donate-btn {
  justify-self: end;
}

.logo {
  font-family: 'EB Garamond', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.logo-image {
  height: 40px;
  width: auto;
}

.logo-text {
  display: block;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 1px;
  background: var(--color-primary);
  transition: all var(--transition-base);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: var(--spacing-md);
  align-items: center;
}

.nav-links a {
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  position: relative;
  transition: color var(--transition-base);
}

.nav-links a:hover {
  color: #d4af37;
}

.nav-links a.router-link-active {
  opacity: 1;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-primary);
  transition: background var(--transition-base);
}

.nav-links a:hover::after {
  background: #d4af37;
}

.donate-btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.875rem;
  background: #2d4f3f;
  color: white;
  border: 1px solid #2d4f3f;
  border-radius: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.donate-btn:hover {
  background: #d4af37;
  color: white;
  border-color: #d4af37;
}

@media (max-width: 767px) {
  .nav {
    grid-template-columns: 1fr auto;
  }

  .mobile-menu-toggle {
    display: flex;
    justify-self: end;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-bg);
    flex-direction: column;
    padding: var(--spacing-md);
    border-top: 1px solid rgba(45, 79, 63, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
    justify-self: stretch;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) 0;
  }

  .donate-btn {
    display: none;
  }

  .mobile-donate {
    display: block;
  }
}

@media (min-width: 768px) {
  .mobile-donate {
    display: none;
  }
}
</style>

