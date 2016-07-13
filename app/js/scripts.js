$(document).ready(function() {

  $(".nav-burger").click(function() {
    console.log("hi");
    $('ul').toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    // $("header").toggleClass("active");
  });

});
