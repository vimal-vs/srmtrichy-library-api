//homepage image-slideshow animation
const images = document.querySelectorAll('.slides img');
const dots = document.querySelector('.dots');

let timeOut = 4000;
let slideIndex = 0;
let intervalId;

images.forEach((image, i) => {
  const span = document.createElement('span');
  span.className = 'dot';
  if(i === 0) span.classList.add('active');
    span.addEventListener('click',() => {
      slideIndex = i;
      startInterval();
      updateImages();
  });
  dots.appendChild(span);
});

startInterval();
function startInterval() {
  if (intervalId){
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    slideIndex++;
    if (slideIndex === images.length) slideIndex = 0;
    updateImages();
  },timeOut);
}

updateImages();
function updateImages(){
  images.forEach(img => img.classList.remove('active'));
  images[slideIndex].classList.add('active');

  const dots = document.querySelectorAll('.dot');
  dots.forEach(item => item.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

const quickLinks = document.querySelector('.quick-links-button');
quickLinks.addEventListener('click',() => {
  window.location.reload();
});