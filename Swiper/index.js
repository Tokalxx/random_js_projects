// index.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
});
