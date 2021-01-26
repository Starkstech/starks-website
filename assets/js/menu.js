// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

// Get the navbar
var navbar = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("nav-bg-scroll")
  } else {
    navbar.classList.remove("nav-bg-scroll");
  }
}







 // jquery ready start
 $(document).ready(function() {
  // jQuery code


  $("[data-trigger]").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id =  $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

     // Close menu when pressing ESC
    $(document).on('keydown', function(event) {
        if(event.keyCode === 27) {
           $(".mobile-offcanvas").removeClass("show");
           $("body").removeClass("overlay-active");
        }
    });

    $(".btn-close, .screen-overlay").click(function(e){
      $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");


    });


}); // jquery end

