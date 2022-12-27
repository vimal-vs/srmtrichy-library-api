//navbar animation
setTimeout(navLoad,500);
function navLoad(){
  const navLoader = document.getElementById("navbar-container");
  const navProgressBar = document.querySelector(".progress-bar");
  navLoader.style.opacity="1";
  navProgressBar.style.opacity="1";
}

//nav-bar hamburger-icon animation
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar-list').forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}));


//slide-in on-scroll animation
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((element) => observer.observe(element));


//scroll-to-top animation
const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500){
    scrollToTop.classList.add('active');
  }
  else {
    scrollToTop.classList.remove('active');
  }
});


//nav-progress animation
window.onscroll = function() {navProgress()};
function navProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
}

//nav-active animation
document.querySelectorAll('nav a').forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});