$(document).ready(function() {

    // PORTFOLIO PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        // $('#portfolio li img').css('opacity', '.8');
    });

    $('#portfolio li').mouseout(function(){
        // $('#portfolio li img').css('opacity', '1');
    });

    // CONTACT FORM ANIMATION
    $('#formlink').click(function(){

        $('form').addClass('animated fadeIn');

        setTimeout(function() {
           $('form').removeClass("animated fadeIn");
        }, 1800);
   });

  //  PORTFOLIO SINGLE NAV TOGGLE ON SCROLL
  var scroll_start = 0;
      var startchange = $('body');
      var offset = startchange.offset();
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
             $('.single-nav').fadeIn('slow');
          } else {
            $('.single-nav').fadeOut('slow');
          }
      });

   //  NAV HOVER EFFECT ON SECTIONS
   // MAIN MENU
   $('#main-nav a').not('.active').mouseover(function(){
     $('#intro').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('#main-nav a').not('.active').mouseout(function(){
     $('#intro').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   //  404 PAGE
   $('#houston').click(function(){
     $('#houston-nav').fadeIn();
     $('#error q').fadeOut();
   })

   // SCROLLA
   $('.animate').scrolla();

   // PARALLAX
    $('.parallax').parallaxBackground();

});
