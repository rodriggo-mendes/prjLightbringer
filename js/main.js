const showups = document.querySelectorAll('.show-up');

const sliders = document.querySelectorAll('.slide-in');

const faders = document.querySelectorAll('.fade-in');

$(document).ready(function() {
    $('.home-hero-text').addClass('slideLeft');
    $('.banner-game-1').addClass('slideRight-1');
    setTimeout(function () {
        $('.banner-game-2').addClass('slideRight-2');
    }, 250);
    setTimeout(function () {
        $('.banner-game-3').addClass('slideRight-3');
    }, 500);
})

$(window).scroll(function() {
    parallax();
})

function parallax() {
    var winScroll = $(window).scrollTop();
    $('.parallax-bg').css('background-position', 'center ' + (8 + winScroll * 0.5) + 'px');
    $('.parallax-section').css('margin-top', -15 + winScroll * 0.20 + 'px');
    $('.parallax-element').css('margin-top', -170 + winScroll * 0.1 + 'px');
}

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          return;
      }  else {
          entry.target.classList.add('on');
          appearOnScroll.unobserve(entry,target);
      }
    })
}, appearOptions);

showups.forEach(showup => {
    appearOnScroll.observe(showup);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});