$(document).ready(function() {

  // Fix for funky fixed background 100vh viewport size re-sizing jumpy bug on mobile browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }

  /************************************************************/
  // toggle mobile nav menu

  $(".nav-burger").click(function() {
    $('ul').toggleClass("active");
    $(".mobile-menu").toggleClass("active");
  });


  /************************************************************/
  // toggle navbar visibility based on scroll position on page

  $(window).scroll(function() {

    var height = $(window).scrollTop();
    var prev = $(window).scrollTop();
    var nav = $('.main-navbar');
    var wh = window.innerHeight;

    function getHeight() {
      return $(window).scrollTop();
    }

    // make sure navbar does not hide if mobile menu is active
    if ($(".mobile-menu").hasClass("active")) {
      $(window).on('scroll', function(){
          nav.removeClass("hidden");
          return false;
      });
    // show navbar if scroll position on page is less than the window height
    }else if(height < wh) {
      $(window).on('scroll', function(){
        nav.removeClass('hidden', getHeight() > prev);
      });
    // otherwise, hide the navbar, and only show it if the user scrolls up
    } else {
        $(window).on('scroll', function(){
        nav.toggleClass('hidden', getHeight() > prev);
      });
    }

  });


  /************************************************************/
  // Scroll to desired location on page when nav button is clicked

  $(".main-navbar").find('a').on('click', function () {

    var $el = $(this);
    var id = $el.attr('href');
    var nav_height = $("nav").outerHeight();

    // hide mobile menu after clicking a link
    $('ul').toggleClass("active");
    $(".mobile-menu").toggleClass("active");

    // scroll to location
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height +1
    }, 500);

    return false;
  });



});
