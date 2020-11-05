/*
        About          
=========================
/*
 Template Name: Sumon 
 Template URI: https://mdsumonmia.me/template/sumon
 Author URI: https://mdsumonmia.me/
*/

jQuery(document).ready(function($){
  
/*
      Table Index       
========================
:: 1. Preloader
:: 2. OnePageNav
:: 3. Water Ripples
:: 4. Magnific Popup
:: 5. Slider
:: 6. Progressbar Animation
:: 7. Mixitup Filtering
:: 8. On Scroll Fixed Menu
:: 9. Back To Top
:: 10. Contact Us Form
*/

  "use strict"
  
/*=====| 1. Preloader |=====*/

var loader = function() {
  setTimeout(function() { 
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();

/*=====| 2. OnePageNav |=====*/
$('#nav').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing'
});

/*=====| 3. Water Ripples |=====*/
	$('.home').ripples({
		imageUrl: null,
		resolution: 512,
		dropRadious: 10,
		perturbance: 0.02,
		interactive: true,
		crossOrigin: ''
  });
  
/*=====| 4. Magnific Popup |=====*/
  $('.popup').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
  });
  
/*=====| 5. Slider |=====*/
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
	autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:2
        }
    }
  });

/*=====| 6. Progressbar Animation |=====*/
  $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
  }, { offset: '75%' });

});

/*=====| 7. Mixitup Filtering |=====*/
  var containerEl = document.querySelector('.mix-filter');
  var mixer = mixitup(containerEl);


/*=====| 8. On Scroll Fixed Menu |=====*/
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('.fixed-nav').addClass('black');
      
    }
    else {
      $('.fixed-nav').removeClass('black');
    }
  })

  function myFunction(x) {
    if (x.matches) { // If media query matches
      $('.fixed-nav').addClass('black');
    } else {
      $('.fixed-nav').removeClass('black');
    }
  }

  var x = window.matchMedia("(max-width: 576px)")
  myFunction(x) 
  x.addListener(myFunction);

/*=====| 9. Back to Top |=====*/
var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

/*=====| 10. Contact Us Form |=====*/
function getname() {
  document.getElementById("get-name").innerHTML = document.getElementById("name").value;
}

(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
      message.fadeIn().removeClass('alert-danger').addClass('alert-success');
      message.text(response);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
      form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
      message.fadeIn().removeClass('alert-success').addClass('alert-success');
      message.text(data.responseText);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  }
  
  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      })
      .done(done_func)
      .fail(fail_func);
  });
  
})(jQuery);