// === Language Toggle ===
let currentLanguage = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const toggleButton = document.querySelector('.language-toggle');

  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  toggleButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });
}

// === Dark Mode Toggle ===
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// === Scroll Animation ===
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 100);
  });
});
