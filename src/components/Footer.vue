<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="mission-statement">
          Growing the game of tennis where it's needed most, building communities through access, education, and connection.
        </p>
        <div class="footer-links">
          <div class="social-links">
            <a href="https://www.instagram.com/tennisnomadfoundation/" aria-label="Instagram">Instagram</a>
            <a href="https://www.youtube.com/watch?v=r5BL5lWnjJU" aria-label="YouTube">YouTube</a>
            <a href="https://x.com/tennis_nomad" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: var(--color-bg);
  border-top: 1px solid rgba(45, 79, 63, 0.1);
  padding: var(--spacing-lg) 0;
  margin-top: var(--spacing-xl);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  text-align: center;
}

.mission-statement {
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: center;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-links a {
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
}

.legal-info {
  margin-top: var(--spacing-sm);
}

.legal-info .label {
  font-size: 0.7rem;
  opacity: 0.7;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .mission-statement {
    margin: 0;
    flex: 1;
  }

  .footer-links {
    align-items: flex-end;
  }
}
</style>



