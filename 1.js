const slider1 = new Swiper('.swiper-container', {
 // Вывод стрелок навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     pagination: {
        el: '.swiper-pagination',
    },
        // Вывод скроллбара
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    loop: true,
});
const slider2 = new Swiper('.swiper-container1', {
// Вывод стрелок навигации
    slidesPerView: 5,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-m',
        prevEl: '.swiper-button-prev-m',
    },
});
 var linkArray = document.querySelectorAll('.call');
 var overlay = document.querySelector('.js-modal-overlay');
 var crossArray = document.querySelectorAll('.js-modal-close');
 linkArray.forEach(function N(item) {
    item.addEventListener('click', function(event) {
       event.preventDefault(); 
      var modalName = this.getAttribute('data-modal');
       var modal = document.querySelector('.js-modal[data-modal="' + modalName +  '"]');
        modal.classList.add('is-show');
       overlay.classList.add('is-show');
    });
 })
 crossArray.forEach(function(cross) {
    cross.addEventListener('click', function() {   
      var parent = this.parentNode;
       parent.classList.remove('is-show');
      overlay.classList.remove('is-show');
      modal_z.classList.remove('is-show');
    });
})
AOS.init();
var modal = document.querySelector('.modal-delivery');
var modal_z = document.querySelector('.modal-return');
var form = document.querySelector("#demo-form");
form.addEventListener('submit', vseok)
function vseok(evn){
  evn.preventDefault();
  formSubmit();
}
function formSubmit() {
  modal.classList.remove('is-show');
  modal_z.classList.add('is-show');
}
$(() => {
  $("#demo-form").parsley().on("field:validated", () => {
  let ok = $(".parsley-error").length === 0;
  $('.bs-callout-info').toggleClass('visually-hidden', !ok);
  $('.bs-callout-warning').toggleClass('visually-hidden', ok);
  $('.modal-return').removeClass('is-show', !ok);
  $('.modal-delivery').addClass('is-show', !ok);
  $('.parsley-errors-list').toggleClass('visually-hidden', ok);
  })
  .on('form:submit', () => {
    formSubmit();
    form.reset();
  return false;
  });
  });
var clock;
  $(document).ready(function() {
    // Set dates.
    var futureDate  = new Date("October 9, 2014 12:02 PM EDT");
    var currentDate = new Date();
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    // Calculate day difference and apply class to .clock for extra digit styling.
    function dayDiff(first, second) {
      return (second-first)/(1000*60*60*24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
      $('.clock').addClass('twoDayDigits');
    } else {
      $('.clock').addClass('threeDayDigits');
    }
    if(diff < 0) {
      diff = 0;
    }
    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
      clockFace: 'DailyCounter',
      countdown: true
    });
  });