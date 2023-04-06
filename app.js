const btn = document.getElementById('btn-submit');

btn.addEventListener('click', function() {
  alert('Tu mensaje ha sido enviado.');
});

//Loading animation
const loadingAnimation = document.querySelector('.loading-animation');

loadingAnimation.style.display = 'none';

const navbarTabs = document.querySelectorAll('.navbar-tab');
navbarTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    loadingAnimation.style.display = 'flex';

    setTimeout(() => {
      loadingAnimation.style.display = 'none';
    }, 3000); 
  });
});
