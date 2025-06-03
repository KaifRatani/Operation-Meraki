document.addEventListener('DOMContentLoaded', () => {
  // === Carousel click to cycle images ===
  const images = document.querySelectorAll('.carousel img');
  const captions = document.querySelectorAll('.carousel-caption');
  let currentIndex = 0;

  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('click', () => {
      images[currentIndex].classList.remove('active');
      captions[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
      captions[currentIndex].classList.add('active');
    });
  }

  // === Tabs (Mission / Vision switch) ===
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(content => content.classList.remove('active'));
      const selected = document.getElementById(tab.getAttribute('data-tab'));
      if (selected) selected.classList.add('active');
    });
  });

  // === Email Subscribe Form ===
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm && !subscribeForm.classList.contains('bound')) {
    subscribeForm.classList.add('bound');

    subscribeForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('email-input').value;

      try {
        const response = await fetch('http://localhost:5000/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });

        const result = await response.json();
        alert(result.message || 'Thank you for subscribing!');
      } catch (error) {
        console.error('Subscription error:', error);
        alert('Something went wrong. Please try again later.');
      }
    });
  }

  // === Video Play Overlay ===
  const localVideo = document.getElementById('local-video');
  const playButton = document.getElementById('play-button');

  if (playButton && localVideo) {
    playButton.addEventListener('click', function () {
      localVideo.setAttribute('controls', 'controls');
      localVideo.play();
      playButton.style.display = 'none';
    });

    localVideo.addEventListener('play', () => {
      localVideo.setAttribute('controls', 'controls');
      playButton.style.display = 'none';
    });

    localVideo.addEventListener('pause', () => {
      localVideo.removeAttribute('controls');
      playButton.style.display = 'flex';
    });
  }

  // === Reveal on Scroll ===
  function revealOnScroll() {
    const sections = document.querySelectorAll('.engagement-wrapper');
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;

      if (top < trigger) {
        section.classList.add('reveal');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // === Mobile Menu Toggle ===
  const menuToggle = document.querySelector('.mobile-navbar .menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu'); // Fix: no need to scope to .mobile-navbar

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
});
