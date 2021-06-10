
    $(window).ready(function() {

      // Preloader
      $('.loader-mask').delay(350).toggle('slow');
      $('.loader').fadeOut();
    

 

  });



$(document).ready(function() {

//   /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("video").style.display = "block";
//   } else {
//     document.getElementById("video").hide().fadeOut('slow');
//   }
//   prevScrollpos = currentScrollPos;
// }


  //hide landing page image onscrfeen
  
      $(window).scroll(function(e) {
          e.preventDefault();
          if ($(this).scrollTop() > 0) {
            $('#video').addClass("important");
          }
          else {
            $('#video').show();
          }
        });
  
        
  
  });
  






