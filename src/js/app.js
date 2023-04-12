import '../index.html'
import '../scss/_styles.scss'

var swiper = new Swiper(".foodsMidget", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    lazy: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
         // when window width is >= 768px
         768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        // when window width is >= 480px
        1024: {
          slidesPerView: 4,
          spaceBetween: 5
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
  });
  var swiper2 = new Swiper(".foodsMain", {
    lazy: true,
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
      swiper: swiper,
    },
  });



// Rating link button


let likes = document.querySelectorAll('.like');

for (let like of likes) {
    like.addEventListener('click', function() {
        like.classList.toggle('active-like');
    })
}

// Burger menu


let burgerButton = document.querySelector('.burgerMenuButton');
let closeButton = document.querySelector('.burgerClose');
let searchButton = document.querySelector('button.search-button');
let wrapper = document.querySelector('.wrapper')
let bigMenu = document.querySelector('#bigMenu')
let searchInput = document.querySelector('input.searchInput')
 

burgerButton.addEventListener('click', function() {
    wrapper.classList.add('menu-active');
    bigMenu.classList.add('menu-active');

    })

closeButton.addEventListener('click', function() {
    wrapper.classList.remove('menu-active');
    bigMenu.classList.remove('menu-active');
    
})


searchButton.addEventListener('click', function() {
    searchInput.classList.toggle('search-active');  
    searchButton.classList.toggle('icon-cross-svgrepo-com')  

})