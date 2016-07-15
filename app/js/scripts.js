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

    // remove scroll stop on body
    $("body").unbind("touchmove");

    // check to see if mobile-menu ul is already active
    if ( $(".mobile-menu ul").hasClass("active") ) {
      null;
    } else {
      $('.mobile-menu ul').toggleClass("active");
    }

    $(".mobile-menu").toggleClass("active");
    $(".navshroud").fadeToggle("slow");

    // prevent user from scrolling on page when mobile menu is active
    if ( $(".mobile-menu").hasClass("active") ) {
      $("body").bind("touchmove",function(e){
          e.preventDefault();
      });
    }

      $('.nav-burger span:nth-child(2)').toggleClass('transparent');
      $('.nav-burger span:nth-child(1)').toggleClass('rotate-top');
      $('.nav-burger span:nth-child(3)').toggleClass('rotate-bottom');

  });



  /************************************************************/
  // toggle navbar visibility based on scroll position on page

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

    // Hide navbar when scrolling down, and show when scrolling up
    if (st > lastScrollTop && st > navbarHeight){
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

    // remove scroll stop on body
    $("body").unbind("touchmove");

    // determine when nav burger should animate back to normal
    if ( (id === "#elixir-coffee") && $(".mobile-menu").hasClass("active") ) {
      $('.nav-burger span:nth-child(2)').toggleClass('transparent');
      $('.nav-burger span:nth-child(1)').toggleClass('rotate-top');
      $('.nav-burger span:nth-child(3)').toggleClass('rotate-bottom');
    } else if ( (id === "#elixir-coffee") && !$(".mobile-menu").hasClass("active")) {
      null;
    } else {
      $('.nav-burger span:nth-child(2)').toggleClass('transparent');
      $('.nav-burger span:nth-child(1)').toggleClass('rotate-top');
      $('.nav-burger span:nth-child(3)').toggleClass('rotate-bottom');
    }

    // hide mobile menu after clicking a link
    $('.mobile-menu ul').toggleClass("active");
    $(".mobile-menu").removeClass("active");

    if ( !$(".mobile-menu").hasClass("active") ) {
      $(".navshroud").fadeOut("slow");
    }

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
