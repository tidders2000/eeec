
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