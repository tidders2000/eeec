

    $(window).ready(function() {

      // Preloader
      $('.loader').hide();
      $('.loader-mask').delay(350).hide('slow');

 

  });




$(document).ready(function() {


//hide landing page image onscrfeen

    $(window).scroll(function(e) {
        e.preventDefault();
        if ($(this).scrollTop() > 0) {
          $('.a').hide().fadeOut('slow');
        }
        else {
          $('.a').show();
        }
      });

      

});


