const button = document.querySelector('.btn-sparkle');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle') };
  
  const size = Math.random() * 6 + 4; 
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;