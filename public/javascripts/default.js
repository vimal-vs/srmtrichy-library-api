//navbar animation
setTimeout(navLoad,500);
function navLoad(){
  const navLoader = document.getElementById("navbar-container");
  const navProgressBar = document.querySelector(".progress-bar");
  navLoader.style.opacity="1";
  navProgressBar.style.opacity="1";
}

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

//nav-bar hamburger-icon animation
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar-list');
// const body = document.getElementsByTagName("BODY")[0];

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    // body.style.overflow = "hidden";
});

document.querySelectorAll('.navbar-list').forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    // body.style.overflow = "scroll";
}));


//slide-in on-scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
});

const hiddenElements = document.querySelectorAll('.reveal');
const hiddenElements2 = document.querySelectorAll('.fade');
hiddenElements.forEach((element) => observer.observe(element));
hiddenElements2.forEach((element) => observer.observe(element));


//scroll-to-top button animation
const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500){
    scrollToTop.classList.add('active');
  }
  else {
    scrollToTop.classList.remove('active');
  }
});


//scroll-to-top
const scrollToTopButton = document.querySelector('.scroll-to-top i').addEventListener("click",() => {
  document.documentElement.scrollTo({ 
    top: 0,
  });
});
  