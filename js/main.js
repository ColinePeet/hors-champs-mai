
function initSwiper(slidesPerView){
var swiper = new Swiper('.swiper1', {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    //   slidesPerGroup: 3,
  });

}


$(window).ready(function(){
if ($(window).width() < 700){
  initSwiper(1);
  } else if ($(window).width() < 900){
    initSwiper(2);
  } 
  else {
initSwiper(3);
}
});

  $('.parallax-window1').parallax({imageSrc: 'img/restaurant.jpg'});
  $('.parallax-window2').parallax({imageSrc: 'img/home-header.jpg'});
  $('.parallax-window3').parallax({imageSrc: 'img/bedroom.jpg'});
  $('.parallax-window4').parallax({imageSrc: 'img/grange.jpg'});
  $('.parallax-window5').parallax({imageSrc: 'img/home-header.jpg'});


// Reveal effect
let listElement = $(".hidden");

$(window).scroll(function(){
    let scrolling = $(window).scrollTop();
    listElement.each(function(i, element){
        let elementOffset = $(element).offset().top;
        if(scrolling > elementOffset - $(window).height() + 300){
            $(element).addClass("reveal");
            $(element).removeClass("hidden");
        }
    })  
}) 


// Burger menu
let myBurger = document.querySelector(".burger");
let myMenu = document.querySelector(".menu");
let myNav = document.querySelector("nav");

myBurger.addEventListener("click", function () {
  myBurger.classList.toggle("active");
  myMenu.classList.toggle("active");
  myNav.classList.remove("englobe");
});