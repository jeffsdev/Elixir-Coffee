// window.addEventListener("load", function(){
// 	var load_screen = document.getElementById("load");
//   setTimeout(function() {
//   	document.body.removeChild(load_screen);
//   }, 2000);
// });


$(document).ready(function() {

  // Fix for funky fixed background 100vh viewport size re-sizing jumpy bug on mobile browsers
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  }
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix2').height();
    $('.height-fix2').height(h);
  }

  /************************************************************/
  // toggle mobile nav menu

  $(".nav-burger").click(function() {
    $('ul').toggleClass("active");
    $(".mobile-menu").toggleClass("active");
  });


  /************************************************************/
  // toggle navbar visibility based on scroll position on page


  // // make sure navbar does not hide if mobile menu is active
  // if ($(".mobile-menu").hasClass("active")) {
  //   $(window).on('scroll', function(){
  //       nav.removeClass("hidden");
  //       return false;
  //   });


  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.main-navbar').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);



  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      // make sure navbar does not hide if mobile menu is active
      if ($(".mobile-menu").hasClass("active")) {
        $(window).on('scroll', function(){
            $(".main-navbar").removeClass("hidden");
            
        });
      } else if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.main-navbar').removeClass('not-hidden').addClass('hidden');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.main-navbar').removeClass('hidden').addClass('not-hidden');
          }
      }



      lastScrollTop = st;
  }





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


  /************************************************************/
  // Team member hover effects

  $(".team-member-picture").mouseenter(function() {
    $(this).find(".team-member-name").animate({
      opacity: 1
    }, 600);
  });
  $(".team-member-picture").mouseleave(function() {
    $(this).find(".team-member-name").animate({
      opacity: 0
    }, 600);
  });























});
