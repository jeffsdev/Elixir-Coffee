$(document).ready(function() {

  // Fix for funky fixed background 100vh viewport size re-sizing jumpy bug on mobile browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }

  /************************************************************/
  // toggle mobile nav menu

  $(".nav-burger").click(function() {
    console.log("hi");
    $('ul').toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    // $("header").toggleClass("active");
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

    // show navbar if scroll position on page is less than the window height
    if(height < wh) {
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
  /************************************************************/

});
