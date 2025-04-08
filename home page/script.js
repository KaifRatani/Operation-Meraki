document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel img');
  const captions = document.querySelectorAll('.carousel-caption');
  let currentIndex = 0;

  document.querySelector('.carousel').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    captions[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    captions[currentIndex].classList.add('active');
  });

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
});
