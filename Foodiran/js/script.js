window.onscroll = function() {myFunction()};

function myFunction() {
  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
    document.getElementById("second-nav").className="fixed-top navbar navbar-expand-lg visible-title";
  }
  else{
    document.getElementById("second-nav").className="navbar navbar-expand-lg";
  }
  
}

$( document ).ready(function() {
  new WOW().init();
});

$(document).ready(function() {
  // SideNav Default Options
  $('.button-collapse').sideNav({
  edge: 'right', // Choose the horizontal origin
  closeOnClick: false, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
  breakpoint: 1440, // Breakpoint for button collapse
  menuWidth: 240, // Width afor sidenav
  timeDurationOpen: 500, // Time duration open menu
  timeDurationClose: 500, // Time duration open menu
  timeDurationOverlayOpen: 200, // Time duration open overlay
  timeDurationOverlayClose: 200, // Time duration close overlay
  easingOpen: 'easeInOutQuad', // Open animation
  easingClose: 'easeInOutQuad', // Close animation
  showOverlay: true, // Display overflay
  showCloseButton: false // Append close button into siednav
  });
  });