setTimeout(() => {
    $('.preloader').addClass('hidden');
}, 1500);
setTimeout(() => {
    $('.loader-image img').addClass('show');
}, 400);

$(document).on('click', '.mobile-toggle', function () {
    $('.nav-list').addClass('show-menu');
});
$(document).on('click', '.side-overlay', function () {
    $('.nav-list').removeClass('show-menu');
});
$(document).on('click', '.close-menu', function () {
    $('.nav-list').removeClass('show-menu');
});


// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 993px)")

function myFunction(x) {
    if (x.matches) { // If media query matches
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 400) {
                $('.main-navigation').addClass('hide');
            } else {
                $('.main-navigation').removeClass('hide');
            }
        });
    } else {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 400) {
                $('.main-navigation').removeClass('hide');
            } else {
                $('.main-navigation').removeClass('hide');
            }
        });
    }
}

// Call listener function at run time
myFunction(x);
// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});


// setTimeout(() => {
//     var calcMargin = $('.site-header').css('height');
//     $('.margin-top').css('margin-top', calcMargin);
//     $('.hero-section').css('margin-top', `-${calcMargin}`);
// }, 1000);

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

var swiper1 = new Swiper(".myHeroSlider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
         delay: 4000,
         disableOnInteraction: false,
    },
    speed: 2000
});

var swiper2 = new Swiper(".myHomeSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000
});

var swiper3 = new Swiper(".serviceContentSlider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1000
});

var swiper4 = new Swiper(".serviceBgSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1000
});