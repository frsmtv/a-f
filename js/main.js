$(document).ready(function() {

    // PORTFOLIO PAGE ANIMATION HOVER
    $('.portfolio-item').mouseover(function(){
        $('.active').css('color', '#000');
        $('.active').css('border-bottom', '2px solid #000');
        $(this).find('h2').css('color', '#000').css('margin-top', '-25vh').css('margin-left', '-25vw').css('font-size', '4rem');
        $(this).find('img').css('width', '61%');
        $(this).find('h2').find('span').css('display', 'block');
    });

    $('.portfolio-item').mouseout(function(){
        $('.active').css('color', '');
        $('.active').css('border-bottom', '2px solid');
        $(this).find('h2').css('color', '').css('margin-top', '').css('margin-left', '').css('font-size', '');
        $(this).find('img').css('width', '');
        $(this).find('h2').find('span').css('display', '');
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

});
