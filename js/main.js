$(document).ready(function() {

    // PORTFOLIO PAGE ANIMATION HOVER
    $('#portfolio li').mouseover(function(){
        $('#portfolio li img').css('opacity', '.8');
        $(this).find('div.status').show().addClass('animated fadeIn');
    });

    $('#portfolio li').mouseout(function(){
        $('#portfolio li img').css('opacity', '1');
        $(this).find('div.status').hide();
    });

    // CONTACT FORM ANIMATION
    $('#formlink').click(function(){

        $('form').addClass('animated fadeIn');

        setTimeout(function() {
           $('form').removeClass("animated fadeIn");
        }, 1800);
   });

   //  NAV HOVER EFFECT ON SECTIONS
   // MAIN MENU
   $('#main-nav a').not('.active').mouseover(function(){
     $('#intro').css('opacity', '.4');
    //  $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('#main-nav a').not('.active').mouseout(function(){
     $('#intro').css('opacity', '');
    //  $('section').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   // SINGLE-PROJECTS NAV
   $('.next').mouseover(function(){
     $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('.next').mouseout(function(){
     $('section').css('opacity', '');
     $('#main-nav a').not(this).css('opacity', '');
   })

   $('.prev').mouseover(function(){
     $('section').css('opacity', '.4');
     $('#main-nav a').not(this).css('opacity', '.3');
   })

   $('.prev').mouseout(function(){
     $('section').css('opacity', '');
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
